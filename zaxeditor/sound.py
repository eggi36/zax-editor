"""Sounds of the game data for the model viewer, without a media backend.

The game ships PCM ``.wav`` files and Ogg Vorbis ``.ogg`` files (voices, music; encoded 2001 with a libvorbis 1.0
beta). They are decoded here – WAV with the standard library's ``wave``, everything else (Ogg Vorbis, and WAV
encodings ``wave`` does not read) with ``soundfile`` (libsndfile) – and played as raw PCM through QtMultimedia's
``QAudioSink``. ``QMediaPlayer`` is not used: its default backend in Qt 6 is FFmpeg, which the packages leave out.

``decode`` has no Qt dependency; ``Player`` needs ``PySide6.QtMultimedia`` (an ImportError when it is missing).
"""
from __future__ import annotations

import io
import wave
from dataclasses import dataclass

import numpy as np


class DecodeError(Exception):
    """A sound that cannot be decoded (or ``soundfile`` is missing for it)."""


@dataclass
class Pcm:
    """Interleaved signed 16-bit samples."""
    samples: np.ndarray        # shape (frames, channels), int16
    rate: int

    @property
    def channels(self) -> int:
        return self.samples.shape[1]

    @property
    def frames(self) -> int:
        return self.samples.shape[0]

    @property
    def seconds(self) -> float:
        return self.frames / self.rate if self.rate else 0.0


def _wave_pcm(data: bytes) -> Pcm:
    """A PCM WAV with ``wave`` (8 bit unsigned, 16/24/32 bit signed); wave.Error for other encodings."""
    with wave.open(io.BytesIO(data), 'rb') as w:
        ch, width, rate = w.getnchannels(), w.getsampwidth(), w.getframerate()
        raw = w.readframes(w.getnframes())
    n = len(raw) // (width * ch)
    raw = raw[:n * width * ch]
    if width == 1:
        s = (np.frombuffer(raw, np.uint8).astype(np.int16) - 128) << 8
    elif width == 2:
        s = np.frombuffer(raw, '<i2')
    elif width == 3:
        b = np.frombuffer(raw, np.uint8).reshape(-1, 3)
        s = (b[:, 2].astype(np.int8).astype(np.int16) << 8) | b[:, 1]
    elif width == 4:
        s = (np.frombuffer(raw, '<i4') >> 16).astype(np.int16)
    else:
        raise wave.Error(f'{width * 8}-bit samples')
    return Pcm(np.ascontiguousarray(s.astype(np.int16).reshape(-1, ch)), rate)


def _soundfile_pcm(data: bytes) -> Pcm:
    try:
        import soundfile
    except (ImportError, OSError) as e:      # OSError: the package without its libsndfile
        raise DecodeError(f'soundfile (libsndfile) is not available: {e}') from e
    try:
        s, rate = soundfile.read(io.BytesIO(data), dtype='int16', always_2d=True)
    except (RuntimeError, ValueError, TypeError) as e:   # soundfile.LibsndfileError is a RuntimeError
        raise DecodeError(str(e)) from e
    return Pcm(np.ascontiguousarray(s), int(rate))


def decode(data: bytes) -> Pcm:
    """The samples of a sound file's bytes (WAV or Ogg Vorbis, told apart by the content). DecodeError."""
    if data[:4] == b'RIFF' and data[8:12] == b'WAVE':
        try:
            pcm = _wave_pcm(data)
        except (wave.Error, EOFError, ValueError):
            pcm = _soundfile_pcm(data)       # e.g. ADPCM, which wave does not read
    else:
        pcm = _soundfile_pcm(data)
    if pcm.channels > 2:
        pcm = Pcm(np.ascontiguousarray(pcm.samples[:, :2]), pcm.rate)
    if pcm.rate <= 0 or pcm.channels == 0:
        raise DecodeError(f'no audio ({pcm.rate} Hz, {pcm.channels} channels)')
    return pcm


def convert(pcm: Pcm, rate: int, channels: int) -> Pcm:
    """``pcm`` at another sample rate (linear interpolation) and channel count (mono doubled, stereo averaged)."""
    s = pcm.samples.astype(np.float32)
    if channels != pcm.channels:
        s = np.repeat(s, channels, axis=1) if pcm.channels == 1 else s.mean(axis=1, keepdims=True).repeat(channels, 1)
    if rate != pcm.rate and pcm.frames > 1:
        n = max(1, int(round(pcm.frames * rate / pcm.rate)))
        x = np.arange(n, dtype=np.float64) * (pcm.rate / rate)
        src = np.arange(pcm.frames, dtype=np.float64)
        s = np.stack([np.interp(x, src, s[:, c]) for c in range(s.shape[1])], axis=1)
    return Pcm(np.ascontiguousarray(np.clip(np.rint(s), -32768, 32767).astype(np.int16)), rate)


def to_bytes(pcm: Pcm, sample_format) -> bytes:
    """The interleaved samples in a ``QAudioFormat.SampleFormat`` (UInt8, Int16, Int32 or Float)."""
    from PySide6.QtMultimedia import QAudioFormat
    s = pcm.samples
    if sample_format == QAudioFormat.UInt8:
        return ((s.astype(np.int32) >> 8) + 128).astype(np.uint8).tobytes()
    if sample_format == QAudioFormat.Int32:
        return (s.astype('<i4') << 16).tobytes()
    if sample_format == QAudioFormat.Float:
        return (s.astype('<f4') / 32768.0).tobytes()
    return s.astype('<i2').tobytes()


try:
    from PySide6.QtCore import QBuffer, QByteArray, QIODevice, QObject, Signal, Slot
    from PySide6.QtMultimedia import QAudioFormat, QAudioSink, QMediaDevices
    try:        # Qt 6.7+: QtAudio (the sink's error()/state() return its enums; QAudio's do not compare equal)
        from PySide6.QtMultimedia import QtAudio as Audio
    except ImportError:
        from PySide6.QtMultimedia import QAudio as Audio
except ImportError:      # the viewer shows a message instead; decode() works without Qt
    QAudioSink = None
else:
    class Player(QObject):
        """Plays one ``Pcm`` at a time on the default audio output; a new ``play`` stops the one before."""
        finished = Signal()
        failed = Signal(str)

        def __init__(self, parent=None):
            super().__init__(parent)
            self.sink: QAudioSink | None = None
            self._buffer: QBuffer | None = None
            self.format: QAudioFormat | None = None
            self.bytes = 0

        def device_format(self, pcm: Pcm) -> tuple[QAudioFormat, Pcm]:
            """The format to open the device with, and ``pcm`` converted to it: the sound's own format (16 bit) if
            the device takes it, otherwise the device's preferred rate, channel count and sample format."""
            dev = QMediaDevices.defaultAudioOutput()
            fmt = QAudioFormat()
            fmt.setSampleRate(pcm.rate)
            fmt.setChannelCount(pcm.channels)
            fmt.setSampleFormat(QAudioFormat.Int16)
            if dev.isNull() or dev.isFormatSupported(fmt):
                return fmt, pcm
            pref = dev.preferredFormat()
            rate = pref.sampleRate() or 44100
            channels = min(max(pref.channelCount(), 1), 2)
            fmt.setSampleRate(rate)
            fmt.setChannelCount(channels)
            if not dev.isFormatSupported(fmt) and pref.sampleFormat() != QAudioFormat.Unknown:
                fmt.setSampleFormat(pref.sampleFormat())
            return fmt, convert(pcm, rate, channels)

        def play(self, pcm: Pcm) -> None:
            self.stop()
            fmt, pcm = self.device_format(pcm)
            data = to_bytes(pcm, fmt.sampleFormat())
            self.format = fmt
            self.bytes = len(data)
            self._buffer = QBuffer(self)
            self._buffer.setData(QByteArray(data))
            self._buffer.open(QIODevice.ReadOnly)
            self.sink = QAudioSink(QMediaDevices.defaultAudioOutput(), fmt, self)
            self.sink.stateChanged.connect(self._state)
            self.sink.start(self._buffer)
            if self.sink.error() != Audio.Error.NoError:
                err = self.sink.error()
                self.stop()
                self.failed.emit(getattr(err, 'name', str(err)))

        @Slot()
        def _state(self) -> None:
            # no argument: PySide cannot convert stateChanged's QAudio::State (6.10); the sink tells its state
            sink = self.sink
            if sink is None:
                return
            state = sink.state()
            if state == Audio.State.IdleState and self._buffer is not None and self._buffer.atEnd():
                self.stop()
                self.finished.emit()
            elif state == Audio.State.StoppedState and sink.error() != Audio.Error.NoError:
                err = sink.error()
                self.stop()
                self.failed.emit(getattr(err, 'name', str(err)))

        def consumed(self) -> int:
            """Bytes the sink has read from the buffer so far."""
            return self._buffer.pos() if self._buffer is not None else 0

        def stop(self) -> None:
            sink, buf = self.sink, self._buffer
            self.sink = self._buffer = None
            if sink is not None:
                sink.stateChanged.disconnect(self._state)
                sink.stop()
                sink.deleteLater()
            if buf is not None:
                buf.close()
                buf.deleteLater()
