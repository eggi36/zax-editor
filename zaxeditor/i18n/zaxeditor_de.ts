<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="de">
<context>
    <name>app</name>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Collision area (CFreeRangePoly)</source>
        <translation>Kollisionsfläche (CFreeRangePoly)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Way point area (CWayPointsPolygon)</source>
        <translation>Wegpunkt-Fläche (CWayPointsPolygon)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Surface: texture, water, black (CRenderablePolygon) …</source>
        <translation>Fläche: Textur, Wasser, Schwarz (CRenderablePolygon) …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Open level</source>
        <translation>Level öffnen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Filter, e.g. M1M2 or Main</source>
        <translation>Filter, z. B. M1M2 oder Main</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Properties</source>
        <translation>Eigenschaften</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Models</source>
        <translation>Modelle</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Ground</source>
        <translation>Boden</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Level check</source>
        <translation>Levelprüfung</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Level settings</source>
        <translation>Level-Einstellungen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Dialogue</source>
        <translation>Dialog</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>File → Open level …   ·   Mouse wheel: zoom, middle mouse button: pan</source>
        <translation>Datei → Level öffnen …   ·   Mausrad: zoomen, mittlere Maustaste: verschieben</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Search: name, class, model</source>
        <translation>Suchen: Name, Klasse, Modell</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Class</source>
        <translation>Klasse</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Model</source>
        <translation>Modell</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Grey: object without a name (model name shown). Below a part: its child objects (upper body, attached objects), on the map Alt + click.</source>
        <translation>Grau: Objekt ohne Namen (Modellname angezeigt). Unter einem Teil: seine Kindobjekte (Oberkörper, angehängte Objekte), auf der Karte Alt + Klick.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Objects</source>
        <translation>Objekte</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>File</source>
        <translation>Datei</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>New level …</source>
        <translation>Neues Level …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Open level …</source>
        <translation>Level öffnen …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Open file …</source>
        <translation>Datei öffnen …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Save</source>
        <translation>Speichern</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Save as …</source>
        <translation>Speichern unter …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Redraw the mini map when saving</source>
        <translation>Minimap beim Speichern neu zeichnen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>When saving, the editor draws the mini map (.frm16 and .frm) into the output folder the way the game draws it (its resampling of the whole level).</source>
        <translation>Der Editor zeichnet die Minimap (.frm16 und .frm) beim Speichern so in den Ausgabeordner, wie das Spiel sie zeichnet (seine Verkleinerung des ganzen Levels).</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Let the game draw the mini map</source>
        <translation>Minimap vom Spiel zeichnen lassen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>When saving, the editor deletes the level&apos;s mini map in the output folder (.frm16, .frm, -Name.tga) and puts a placeholder of the wrong size (1×1) there. The game then draws the mini map itself from the level when loading and overwrites the placeholder.
Deleting alone is not enough: the game would still find an older mini map – the one shipped in Data.dat or in the unpacked DATA folder, or one copied there earlier – because a file in the DATA folder wins against Data.dat. So copy the placeholder into the DATA folder together with the level; the game needs the level folder on disk.</source>
        <translation>Beim Speichern löscht der Editor die Minimap des Levels im Ausgabeordner (.frm16, .frm, -Name.tga) und legt dort einen Platzhalter falscher Größe (1×1) ab. Das Spiel zeichnet die Minimap dann beim Laden selbst aus dem Level und überschreibt den Platzhalter.
Nur Löschen reicht nicht: eine ältere Minimap – die mitgelieferte in Data.dat oder im entpackten DATA-Ordner, oder eine früher dorthin kopierte – fände das Spiel weiter, denn eine Datei im DATA-Ordner gewinnt gegen Data.dat. Den Platzhalter deshalb mit dem Level in den DATA-Ordner kopieren; das Spiel braucht den Levelordner auf der Platte.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Write the way point map (.way) when saving</source>
        <translation>Wegpunktkarte (.way) beim Speichern schreiben</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>When saving, the editor writes the .way the game would build for the level (identical byte for byte to the game&apos;s, needs Zax.exe). Off: an older .way in the output folder is deleted and the game builds the way points itself when loading.</source>
        <translation>Beim Speichern schreibt der Editor die .way, die das Spiel für das Level bauen würde (Byte für Byte gleich der des Spiels, braucht Zax.exe). Aus: eine ältere .way im Ausgabeordner wird gelöscht, und das Spiel baut die Wegpunkte beim Laden selbst.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Choose game data (folder or Data.dat) …</source>
        <translation>Spieldaten wählen (Ordner oder Data.dat) …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Choose language pack …</source>
        <translation>Sprachpaket wählen …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Without language pack</source>
        <translation>Ohne Sprachpaket</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Choose output folder …</source>
        <translation>Ausgabeordner wählen …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Import images …</source>
        <translation>Bilder importieren …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Choose Zax.exe …</source>
        <translation>Zax.exe wählen …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Settings …</source>
        <translation>Einstellungen …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Quit</source>
        <translation>Beenden</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Edit</source>
        <translation>Bearbeiten</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Undo</source>
        <translation>Rückgängig</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Redo</source>
        <translation>Wiederholen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Add object (model browser)</source>
        <translation>Objekt hinzufügen (Modell-Browser)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Copy</source>
        <translation>Kopieren</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Paste (centre of the view)</source>
        <translation>Einfügen (Bildmitte)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Duplicate</source>
        <translation>Duplizieren</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Rename (with references) …</source>
        <translation>Umbenennen (mit Verweisen) …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Delete</source>
        <translation>Löschen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Child objects</source>
        <translation>Kindobjekte</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Add upper body …</source>
        <translation>Oberkörper hinzufügen …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Attach object …</source>
        <translation>Objekt anhängen …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Replace model of the child object …</source>
        <translation>Modell des Kindobjekts ersetzen …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Remove child object</source>
        <translation>Kindobjekt entfernen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Alt + click on the map selects a child object, Alt + drag moves it</source>
        <translation>Alt + Klick auf der Karte wählt ein Kindobjekt, Alt + Ziehen verschiebt es</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Draw polygon</source>
        <translation>Polygon zeichnen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Transition to another level …</source>
        <translation>Übergang zu anderem Level …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Insert start point …</source>
        <translation>Startpunkt einfügen …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Clear selection / cancel drawing</source>
        <translation>Auswahl aufheben / Zeichnen abbrechen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Paint ground</source>
        <translation>Boden malen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Smaller brush</source>
        <translation>Pinsel kleiner</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Larger brush</source>
        <translation>Pinsel größer</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>View</source>
        <translation>Ansicht</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Zoom in</source>
        <translation>Vergrößern</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Zoom out</source>
        <translation>Verkleinern</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Whole level</source>
        <translation>Ganzes Level</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Ground grid (every 64 pixels)</source>
        <translation>Bodenraster (alle 64 Pixel)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Play animations</source>
        <translation>Animationen abspielen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Child objects (upper bodies, attached effects and items)</source>
        <translation>Kind-Objekte (Oberkörper, angehängte Effekte und Gegenstände)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Editor objects (Relay, Spawn Point, …)</source>
        <translation>Editor-Objekte (Relay, Spawn Point, …)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Invisible objects (Visible=0, inactive effects; semi-transparent)</source>
        <translation>Unsichtbare Objekte (Visible=0, inaktive Effekte; halbtransparent)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Polygons: CFreeRangePoly (turquoise)</source>
        <translation>Polygone: CFreeRangePoly (türkis)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Polygons: CWayPointsPolygon (green)</source>
        <translation>Polygone: CWayPointsPolygon (grün)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Polygons: CRenderablePolygon (orange)</source>
        <translation>Polygone: CRenderablePolygon (orange)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Links of the selection (arrows)</source>
        <translation>Verknüpfungen der Auswahl (Pfeile)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>All links</source>
        <translation>Alle Verknüpfungen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Colours of the links</source>
        <translation>Farben der Verknüpfungen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>green: trigger (the trigger only reacts to this object)</source>
        <translation>grün: Auslöser (Trigger reagiert nur auf dieses Objekt)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>orange: trigger a relay</source>
        <translation>orange: Relay auslösen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>blue: door/switch</source>
        <translation>blau: Tür/Schalter</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>violet: place/path (destination, path, home point, camera …)</source>
        <translation>violett: Ort/Weg (Ziel, Pfad, Heimatpunkt, Kamera …)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>red: target (activate, hide, message …)</source>
        <translation>rot: Ziel (aktivieren, verstecken, Nachricht …)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>dashed: spelling differs</source>
        <translation>gestrichelt: Schreibweise weicht ab</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Way point network (as the game builds it)</source>
        <translation>Wegpunktnetz (wie das Spiel es baut)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Redraw ground</source>
        <translation>Boden neu zeichnen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Show/hide the panel “{name}”</source>
        <translation>Leiste „{name}“ zeigen/verbergen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Toolbar</source>
        <translation>Werkzeugleiste</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>New</source>
        <translation>Neu</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Open</source>
        <translation>Öffnen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Rename</source>
        <translation>Umbenennen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Collision</source>
        <translation>Kollision</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Way points</source>
        <translation>Wegpunkte</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Surface</source>
        <translation>Fläche</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Transition</source>
        <translation>Übergang</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Start point</source>
        <translation>Startpunkt</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Links</source>
        <translation>Verknüpfungen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Level</source>
        <translation>Level</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Check</source>
        <translation>Prüfen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Level settings (music, Team Info, mini map …)</source>
        <translation>Level-Einstellungen (Musik, Team Info, Minimap …)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Rules.txt (start level, game windows) …</source>
        <translation>Rules.txt (Startlevel, Spielfenster) …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Dialogue script …</source>
        <translation>Dialogskript …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Test in game</source>
        <translation>Im Spiel testen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Test in game – settings …</source>
        <translation>Im Spiel testen – Einstellungen …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Window</source>
        <translation>Fenster</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Model viewer …</source>
        <translation>Modell-Viewer …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Restore default layout</source>
        <translation>Standardanordnung wiederherstellen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Help</source>
        <translation>Hilfe</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>About Zax-Editor</source>
        <translation>Über Zax-Editor</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Language</source>
        <translation>Sprache</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <location filename="../../zaxeditor/settingsdlg.py"/>
        <source>System</source>
        <translation>System</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>The language takes effect at the next start of the editor.</source>
        <translation>Die Sprache gilt ab dem nächsten Start des Editors.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Where is the game data?</source>
        <translation>Wo liegen die Spieldaten?</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Either the unpacked folder “Data” or the file “Data.dat” from the game folder. The editor only reads and never writes into it.</source>
        <translation>Entweder der entpackte Ordner „Data“ oder die Datei „Data.dat“ aus dem Spielordner. Der Editor liest nur und schreibt nie hinein.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Folder “Data” …</source>
        <translation>Ordner „Data“ …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>File “Data.dat” …</source>
        <translation>Datei „Data.dat“ …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Choose the folder “Data” of the game data</source>
        <translation>Ordner „Data“ der Spieldaten wählen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Choose the Data.dat of the game data</source>
        <translation>Data.dat der Spieldaten wählen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Game data (*.dat *.DAT *.zip *.ZIP);;All files (*)</source>
        <translation>Spieldaten (*.dat *.DAT *.zip *.ZIP);;Alle Dateien (*)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Language pack not found: {path}</source>
        <translation>Sprachpaket nicht gefunden: {path}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Game data not readable:
{path}

{error}</source>
        <translation>Spieldaten nicht lesbar:
{path}

{error}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>No levels found in:
{path}

Please choose the folder “Data” or the Data.dat of the game.</source>
        <translation>Keine Levels gefunden in:
{path}

Bitte den Ordner „Data“ oder die Data.dat des Spiels wählen.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Model catalogue ready.</source>
        <translation>Modellkatalog fertig.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>The model catalogue could not be built: {error}</source>
        <translation>Der Modellkatalog konnte nicht erstellt werden: {error}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Building the model catalogue once ({percent} %): {text}</source>
        <translation>Modellkatalog wird einmalig erstellt ({percent} %): {text}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Model browser: the game&apos;s use of the models is known.</source>
        <translation>Modell-Browser: Die Verwendung der Modelle im Spiel ist bekannt.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>The analysis of the models&apos; use failed: {error}</source>
        <translation>Die Analyse der Modellverwendung ist fehlgeschlagen: {error}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Analysing which models the game uses (once, about 20 s) …</source>
        <translation>Analysiere, welche Modelle das Spiel verwendet (einmalig, etwa 20 s) …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Level editor for the game “Zax: The Alien Hunter” (2001).
It reads the game data and never writes into it.</source>
        <translation>Level-Editor für das Spiel „Zax: The Alien Hunter“ (2001).
Er liest die Spieldaten und schreibt nie hinein.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>The model catalogue is still being built …</source>
        <translation>Der Modellkatalog wird noch erstellt …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Choose Zax.exe</source>
        <translation>Zax.exe wählen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Program (*.exe)</source>
        <translation>Programm (*.exe)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Choose language pack</source>
        <translation>Sprachpaket wählen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Language pack (*.red *.RED *.zip *.ZIP);;All files (*)</source>
        <translation>Sprachpaket (*.red *.RED *.zip *.ZIP);;Alle Dateien (*)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Not a readable language pack:
{path}

{error}</source>
        <translation>Kein lesbares Sprachpaket:
{path}

{error}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Language pack: {name}</source>
        <translation>Sprachpaket: {name}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Where shall the editor save your own levels, graphics and Rules.txt?</source>
        <translation>Wo soll der Editor deine eigenen Level, Grafiken und die Rules.txt speichern?</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Suggested: {path}

Any folder outside the game data and outside the editor itself will do. You can change it later in File → Settings.</source>
        <translation>Vorschlag: {path}

Jeder Ordner außerhalb der Spieldaten und außerhalb des Editors selbst ist möglich. Du kannst ihn später unter Datei → Einstellungen ändern.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Use the suggested folder</source>
        <translation>Vorgeschlagenen Ordner verwenden</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Choose folder …</source>
        <translation>Ordner wählen …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Later</source>
        <translation>Später</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>No output folder yet: the editor asks again before it saves anything.</source>
        <translation>Noch kein Ausgabeordner: Der Editor fragt erneut, bevor er etwas speichert.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Choose output folder</source>
        <translation>Ausgabeordner wählen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Do you want to save the changes to “{name}”?</source>
        <translation>Änderungen an „{name}“ speichern?</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Your changes will be lost if you don’t save them.</source>
        <translation>Ohne Speichern gehen die Änderungen verloren.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>{path} already exists in the game data.
Please choose another name or folder.</source>
        <translation>{path} gibt es schon in den Spieldaten.
Bitte einen anderen Namen oder Ordner wählen.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>{path}
already exists and will be overwritten when saving. Create it anyway?</source>
        <translation>{path}
existiert schon und wird beim Speichern überschrieben. Trotzdem anlegen?</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>New level: paint the ground (B), drag objects from the model browser, draw a way point area – then save</source>
        <translation>Neues Level: Boden malen (B), Objekte aus dem Modell-Browser ziehen, Wegpunkt-Fläche zeichnen – dann speichern</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Open level file</source>
        <translation>Level-Datei öffnen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Zax level (*.zax)</source>
        <translation>Zax-Level (*.zax)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Loading level …</source>
        <translation>Lade Level …</translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/app.py"/>
        <source>%n object(s) loaded</source>
        <translation>
            <numerusform>%n Objekt geladen</numerusform>
            <numerusform>%n Objekte geladen</numerusform>
        </translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Save as</source>
        <translation>Speichern unter</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>The game&apos;s original files are never overwritten.
Please choose a place outside the game data.</source>
        <translation>Originaldateien des Spiels werden nie überschrieben.
Bitte einen Ort außerhalb der Spieldaten wählen.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Cannot be saved: characters outside Latin-1 ({error}).</source>
        <translation>Nicht speicherbar: Zeichen außerhalb von Latin-1 ({error}).</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Copy the file to {path}.</source>
        <translation>Datei nach {path} kopieren.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Copy “{file}” next to it (the way points as the game builds them).</source>
        <translation>„{file}“ daneben kopieren (die Wegpunkte, wie das Spiel sie baut).</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Delete “{file}” there – the game rebuilds the way points when loading.</source>
        <translation>Dort „{file}“ löschen – das Spiel baut die Wegpunkte beim Laden neu.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Copy the mini maps (.frm16 for 16 bit, .frm for 256 colours) from
{source}
to {target}.</source>
        <translation>Minimaps (.frm16 für 16 Bit, .frm für 256 Farben) aus
{source}
nach {target} kopieren.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Copy the mini map placeholders (.frm16, .frm, 1×1) from
{source}
to {target} (they overwrite an older mini map). The game draws the mini map itself when loading and writes it there, plus “{tga}” into the level folder.</source>
        <translation>Minimap-Platzhalter (.frm16, .frm, 1×1) aus
{source}
nach {target} kopieren (überschreibt eine ältere Minimap). Das Spiel zeichnet die Minimap beim Laden selbst und schreibt sie dorthin, dazu „{tga}“ in den Levelordner.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>(Mini map not redrawn: the visible mini map area is empty.)</source>
        <translation>(Minimap nicht neu gezeichnet: der sichtbare Minimap-Ausschnitt ist leer.)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Back up the game folder, then copy
{rules}
to {target} (a new game then starts in this level).</source>
        <translation>Spielordner sichern, dann
{rules}
nach {target} kopieren (ein neues Spiel beginnt dann in diesem Level).</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Saved: {path}</source>
        <translation>Gespeichert: {path}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Saved:
{path}

To test in the game:
{steps}</source>
        <translation>Gespeichert:
{path}

Zum Testen im Spiel:
{steps}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>without Zax.exe: classes, Bounce Factor, points/colours not checked</source>
        <translation>ohne Zax.exe: Klassen, Bounce Factor, Punkte/Farben nicht geprüft</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Level check: {summary}</source>
        <translation>Levelprüfung: {summary}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Level check failed: {error}</source>
        <translation>Levelprüfung fehlgeschlagen: {error}</translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/app.py"/>
        <source>The level check found %n error(s) with which the game exits, hangs or does not read the whole level (list in the window “Level check”).

The file is saved anyway.</source>
        <translation>
            <numerusform>Die Levelprüfung hat %n Fehler gefunden, mit dem das Spiel abbricht, hängt oder das Level nicht ganz liest (Liste im Fenster „Levelprüfung“).

Die Datei wird trotzdem gespeichert.</numerusform>
            <numerusform>Die Levelprüfung hat %n Fehler gefunden, mit denen das Spiel abbricht, hängt oder das Level nicht ganz liest (Liste im Fenster „Levelprüfung“).

Die Datei wird trotzdem gespeichert.</numerusform>
        </translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Level check: {summary} (window “Level check”)</source>
        <translation>Levelprüfung: {summary} (Fenster „Levelprüfung“)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>No .way written: without Zax.exe the way points are only approximate.</source>
        <translation>Keine .way geschrieben: ohne Zax.exe sind die Wegpunkte nur angenähert.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Drawing the mini map …</source>
        <translation>Minimap wird gezeichnet …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Child object of “{name}”</source>
        <translation>Kindobjekt von „{name}“</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>The object is hidden (menu View)</source>
        <translation>Objekt ist ausgeblendet (Menü Ansicht)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>AI areas (debug drawing of the original)</source>
        <translation>KI-Bereiche (Debug-Zeichnung des Originals)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Off</source>
        <translation>Aus</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Selected objects only</source>
        <translation>Nur ausgewählte Objekte</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>All visible objects</source>
        <translation>Alle sichtbaren Objekte</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Colours and shapes as in the debug drawing of Zax.exe;</source>
        <translation>Farben und Formen wie die Debug-Zeichnung von Zax.exe;</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>States that only arise in the game (paths, targets) are missing.</source>
        <translation>Zustände, die erst im Spiel entstehen (Wege, Ziele), fehlen.</translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/app.py"/>
        <source>%n object(s) selected</source>
        <translation>
            <numerusform>%n Objekt ausgewählt</numerusform>
            <numerusform>%n Objekte ausgewählt</numerusform>
        </translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>View → Child objects switched on to select the child object</source>
        <translation>Ansicht → Kindobjekte eingeschaltet, um das Kindobjekt auszuwählen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Only characters from Latin-1 are allowed.</source>
        <translation>Nur Zeichen aus Latin-1 erlaubt.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Select exactly one object with a position</source>
        <translation>Genau ein Objekt mit Position auswählen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>An upper body only works on an animated object (a character): on a {cls} it would neither follow the sequence nor turn.</source>
        <translation>Ein Oberkörper funktioniert nur an einem animierten Objekt (einer Figur): an einem {cls} folgte er weder der Sequenz noch drehte er sich.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Add upper body</source>
        <translation>Oberkörper hinzufügen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Model of the upper body of “{name}”. It shows the parent&apos;s sequence and frame and turns with it; its model needs the parent&apos;s sequences (Idle, Walk, …).</source>
        <translation>Modell des Oberkörpers von „{name}“. Er zeigt Sequenz und Bild des Elternobjekts und dreht sich mit ihm; sein Modell braucht die Sequenzen des Elternobjekts (Idle, Walk, …).</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Attach object</source>
        <translation>Objekt anhängen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Model of the object that “{name}” carries. It is drawn at the parent&apos;s position plus its own (relative, Alt + drag on the map) and moves with it.</source>
        <translation>Modell des Objekts, das „{name}“ trägt. Es wird an der Position des Elternobjekts plus seiner eigenen gezeichnet (relativ, Alt + Ziehen auf der Karte) und bewegt sich mit ihm.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Attach {name}</source>
        <translation>{name} anhängen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Select one child object (Alt + click on the map)</source>
        <translation>Ein Kindobjekt auswählen (Alt + Klick auf der Karte)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Replace model</source>
        <translation>Modell ersetzen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>New model of the child object “{name}”.</source>
        <translation>Neues Modell des Kindobjekts „{name}“.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Replace model of {name}</source>
        <translation>Modell von {name} ersetzen</translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/app.py"/>
        <source>Remove %n child object(s)</source>
        <translation>
            <numerusform>%n Kindobjekt entfernen</numerusform>
            <numerusform>%n Kindobjekte entfernen</numerusform>
        </translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Written into the output folder:
{files}</source>
        <translation>In den Ausgabeordner geschrieben:
{files}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>The model “{model}” is in the model browser now.</source>
        <translation>Das Modell „{model}“ ist jetzt im Modell-Browser.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Open a level first</source>
        <translation>Zuerst ein Level öffnen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Add {name}</source>
        <translation>{name} hinzufügen</translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/app.py"/>
        <source>%n object(s) copied</source>
        <translation>
            <numerusform>%n Objekt kopiert</numerusform>
            <numerusform>%n Objekte kopiert</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/app.py"/>
        <source>%n child object(s) copied: paste them onto a selected object</source>
        <translation>
            <numerusform>%n Kindobjekt kopiert: auf ein ausgewähltes Objekt einfügen</numerusform>
            <numerusform>%n Kindobjekte kopiert: auf ein ausgewähltes Objekt einfügen</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/app.py"/>
        <source>Paste %n child object(s)</source>
        <translation>
            <numerusform>%n Kindobjekt einfügen</numerusform>
            <numerusform>%n Kindobjekte einfügen</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/app.py"/>
        <source>Paste %n object(s)</source>
        <translation>
            <numerusform>%n Objekt einfügen</numerusform>
            <numerusform>%n Objekte einfügen</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/app.py"/>
        <source>Duplicate %n object(s)</source>
        <translation>
            <numerusform>%n Objekt duplizieren</numerusform>
            <numerusform>%n Objekte duplizieren</numerusform>
        </translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Duplicate child objects</source>
        <translation>Kindobjekte duplizieren</translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/app.py"/>
        <source>Duplicate %n child object(s)</source>
        <translation>
            <numerusform>%n Kindobjekt duplizieren</numerusform>
            <numerusform>%n Kindobjekte duplizieren</numerusform>
        </translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>This upper body has a CWalkingUpperBodyAI, which ends the game under an object that does not walk ({cls}). Use Edit → Child objects → Add upper body there.</source>
        <translation>Dieser Oberkörper hat eine CWalkingUpperBodyAI, die das Spiel unter einem Objekt beendet, das nicht läuft ({cls}). Dort Bearbeiten → Kindobjekte → Oberkörper hinzufügen verwenden.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Exit not created: {error}</source>
        <translation>Ausgang nicht angelegt: {error}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Insert transition</source>
        <translation>Übergang einfügen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Exit to “{map}”, start point “{location}” created in the centre of the view – drag it to the desired place</source>
        <translation>Ausgang nach „{map}“, Startpunkt „{location}“ in der Bildmitte angelegt – an die gewünschte Stelle ziehen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Insert start point</source>
        <translation>Startpunkt einfügen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Name of the start point (target for transitions from other levels):</source>
        <translation>Name des Startpunkts (Ziel für Übergänge aus anderen Levels):</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>“{name}” already exists in this level.</source>
        <translation>„{name}“ gibt es in diesem Level schon.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Select exactly one object to rename</source>
        <translation>Zum Umbenennen genau ein Objekt auswählen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>This object has no field “Name”.</source>
        <translation>Dieses Objekt hat kein Feld „Name“.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>New name (references in scripts are changed too):</source>
        <translation>Neuer Name (Verweise in Skripten werden mitgeändert):</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>The new name is empty or has spaces at its ends. Use it anyway?</source>
        <translation>Der neue Name ist leer oder hat Leerzeichen am Rand. Trotzdem so übernehmen?</translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/app.py"/>
        <source>… and %n more</source>
        <translation>
            <numerusform>… und %n weiterer</numerusform>
            <numerusform>… und %n weitere</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/app.py"/>
        <source>%n reference(s) to “{old}” will be changed too:</source>
        <translation>
            <numerusform>%n Verweis auf „{old}“ wird mitgeändert:</numerusform>
            <numerusform>%n Verweise auf „{old}“ werden mitgeändert:</numerusform>
        </translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>{object}  [{action} · {key}]  “{value}” → “{new}”</source>
        <translation>{object}  [{action} · {key}]  „{value}“ → „{new}“</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Not changed – the name is part of a range #a-b# (please adjust it yourself):</source>
        <translation>Nicht geändert – der Name steckt in einem Bereich #a-b# (bitte selbst anpassen):</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>{object}  [{action} · {key}]  “{value}”</source>
        <translation>{object}  [{action} · {key}]  „{value}“</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Not changed – more objects are called “{old}”, these references keep hitting those:</source>
        <translation>Nicht geändert – „{old}“ heißen noch weitere Objekte, diese Verweise treffen weiter jene:</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Transitions from other levels lead to this start point. They are not changed (set New Location there to “{new}”):</source>
        <translation>Übergänge aus anderen Levels führen zu diesem Startpunkt. Sie werden nicht geändert (dort New Location auf „{new}“ setzen):</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Actions in other levels (COtherMapAction) name this object. They are not changed (set them to “{new}” there):</source>
        <translation>Aktionen in anderen Levels (COtherMapAction) nennen dieses Objekt. Sie werden nicht geändert (dort auf „{new}“ setzen):</translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/app.py"/>
        <source>⚠ “{new}” is already the name of %n other object(s). References to this name then hit several.</source>
        <translation>
            <numerusform>⚠ „{new}“ heißt schon %n anderes Objekt. Verweise auf diesen Namen treffen dann mehrere.</numerusform>
            <numerusform>⚠ „{new}“ heißen schon %n andere Objekte. Verweise auf diesen Namen treffen dann mehrere.</numerusform>
        </translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Rename “{old}” to “{new}”</source>
        <translation>„{old}“ in „{new}“ umbenennen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Rename with references</source>
        <translation>Mit Verweisen umbenennen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Change the name only</source>
        <translation>Nur Namen ändern</translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/app.py"/>
        <source>Rename “{old}” (%n reference(s))</source>
        <translation>
            <numerusform>„{old}“ umbenennen (%n Verweis)</numerusform>
            <numerusform>„{old}“ umbenennen (%n Verweise)</numerusform>
        </translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Rename “{old}”</source>
        <translation>„{old}“ umbenennen</translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/app.py"/>
        <source>“{old}” → “{new}”, %n reference(s) changed too</source>
        <translation>
            <numerusform>„{old}“ → „{new}“, %n Verweis mitgeändert</numerusform>
            <numerusform>„{old}“ → „{new}“, %n Verweise mitgeändert</numerusform>
        </translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>“{old}” → “{new}”</source>
        <translation>„{old}“ → „{new}“</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>No texture chosen</source>
        <translation>Keine Textur gewählt</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Draw polygon: click = point, double click/Return/right click = done, ⌫ = remove the last point, Esc = cancel</source>
        <translation>Polygon zeichnen: Klick = Punkt, Doppelklick/Return/Rechtsklick = fertig, ⌫ = letzten Punkt entfernen, Esc = abbrechen</translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/app.py"/>
        <source>Draw {cls} (%n point(s))</source>
        <translation>
            <numerusform>{cls} zeichnen (%n Punkt)</numerusform>
            <numerusform>{cls} zeichnen (%n Punkte)</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/app.py"/>
        <source>{cls} with %n point(s) created</source>
        <translation>
            <numerusform>{cls} mit %n Punkt angelegt</numerusform>
            <numerusform>{cls} mit %n Punkten angelegt</numerusform>
        </translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Paint ground: drag with the left mouse button, Alt + click = pick up the texture</source>
        <translation>Boden malen: linke Maustaste ziehen, Alt + Klick = Textur aufnehmen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Drawing cancelled</source>
        <translation>Zeichnen abgebrochen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>“{name}” ← {source} [{action} · {key}]</source>
        <translation>„{name}“ ← {source} [{action} · {key}]</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/app.py"/>
        <source>Scripts address these objects by their name. After deleting, these actions run into nothing:

{list}

Delete anyway?</source>
        <translation>Diese Objekte werden von Skripten über ihren Namen angesprochen. Nach dem Löschen laufen diese Aktionen ins Leere:

{list}

Trotzdem löschen?</translation>
    </message>
</context>
<context>
    <name>catalog</name>
    <message>
        <location filename="../../zaxtools/catalog.py"/>
        <source>reading Zax.exe …</source>
        <translation>Zax.exe auswerten …</translation>
    </message>
    <message>
        <location filename="../../zaxtools/catalog.py"/>
        <source>reading models …</source>
        <translation>Modelle lesen …</translation>
    </message>
    <message>
        <location filename="../../zaxtools/catalog.py"/>
        <source>counting the use in levels …</source>
        <translation>Verwendung in Levels zählen …</translation>
    </message>
</context>
<context>
    <name>checkdock</name>
    <message>
        <location filename="../../zaxeditor/checkdock.py"/>
        <source>Not checked yet (Level → Check).</source>
        <translation>Noch nicht geprüft (Level → Prüfen).</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/checkdock.py"/>
        <source>Check again</source>
        <translation>Erneut prüfen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/checkdock.py"/>
        <source>Finding</source>
        <translation>Befund</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/checkdock.py"/>
        <source>Object</source>
        <translation>Objekt</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/checkdock.py"/>
        <source>Field</source>
        <translation>Feld</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/checkdock.py"/>
        <source>Value</source>
        <translation>Wert</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/checkdock.py"/>
        <source>Double click: select the object on the map</source>
        <translation>Doppelklick: Objekt auf der Karte auswählen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/checkdock.py"/>
        <source>{severity}: {title} ({count})</source>
        <translation>{severity}: {title} ({count})</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/checkdock.py"/>
        <source>{message}

Source: {source}</source>
        <translation>{message}

Quelle: {source}</translation>
    </message>
</context>
<context>
    <name>dialogue</name>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Scripts of the selected object&apos;s dialogue actions</source>
        <translation>Skripte der Dialogaktionen des gewählten Objekts</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Open script …</source>
        <translation>Skript öffnen …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Save script</source>
        <translation>Skript speichern</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Select an object with a dialogue action (CZaxDialogAction) or open a script.</source>
        <translation>Ein Objekt mit einer Dialogaktion (CZaxDialogAction) auswählen oder ein Skript öffnen.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Search: label or text</source>
        <translation>Suche: Label oder Text</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Blue: used by a dialogue action of this level</source>
        <translation>Blau: von einer Dialogaktion dieses Levels benutzt</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Add label …</source>
        <translation>Label hinzufügen …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Rename label …</source>
        <translation>Label umbenennen …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>“Speaker: text” – the game takes the speaker from before the first “: ” if it starts within the first 20 characters.</source>
        <translation>„Sprecher: Text“ – das Spiel nimmt den Sprecher vor dem ersten „: “, wenn es innerhalb der ersten 20 Zeichen beginnt.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Apply text</source>
        <translation>Text übernehmen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Open script</source>
        <translation>Skript öffnen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Dialogue script (below Levels):</source>
        <translation>Dialogskript (unter Levels):</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>The script “{script}” has unsaved changes. Save them?</source>
        <translation>Das Skript „{script}“ hat ungespeicherte Änderungen. Speichern?</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>The script “Levels/{script}.RDS” does not exist (the game exits when an action names it).</source>
        <translation>Das Skript „Levels/{script}.RDS“ gibt es nicht (das Spiel beendet sich, wenn eine Aktion es nennt).</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Editing the translation from the language pack {pack} (the pack&apos;s version wins in the game over the one in Data.dat).</source>
        <translation>Bearbeitet wird die Übersetzung aus dem Sprachpaket {pack} (im Spiel gewinnt die Fassung des Pakets gegen die in Data.dat).</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Editing the script of the game data.</source>
        <translation>Bearbeitet wird das Skript der Spieldaten.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>The language pack {pack} has no version of it.</source>
        <translation>Das Sprachpaket {pack} hat keine Fassung davon.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Editing the copy in the output folder: {path}</source>
        <translation>Bearbeitet wird die Kopie im Ausgabeordner: {path}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>(The language pack {pack} is active; the copy below Data/ wins in the game over the pack.)</source>
        <translation>(Das Sprachpaket {pack} ist aktiv; die Kopie unter Data/ gewinnt im Spiel gegen das Paket.)</translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Levels/{script}.RDS – %n label(s). {source}
Saved to: {target}</source>
        <translation>
            <numerusform>Levels/{script}.RDS – %n Label. {source}
Gespeichert wird nach: {target}</numerusform>
            <numerusform>Levels/{script}.RDS – %n Labels. {source}
Gespeichert wird nach: {target}</numerusform>
        </translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>(no output folder chosen yet)</source>
        <translation>(noch kein Ausgabeordner gewählt)</translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Used by %n dialogue action(s) of this level</source>
        <translation>
            <numerusform>Von %n Dialogaktion dieses Levels benutzt</numerusform>
            <numerusform>Von %n Dialogaktionen dieses Levels benutzt</numerusform>
        </translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>The line “:{line}” is not in this script.</source>
        <translation>Die Zeile „:{line}“ steht nicht in diesem Skript.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Label: {label}</source>
        <translation>Label: {label}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Speaker: {speaker}</source>
        <translation>Sprecher: {speaker}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Portrait: {file}</source>
        <translation>Porträt: {file}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Portrait: none – the game shows “!Unknown Portrait”</source>
        <translation>Porträt: keins – das Spiel zeigt „!Unknown Portrait“</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Voice: {file}</source>
        <translation>Stimme: {file}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Voice: no “{name}.wav”/“.ogg” below Levels</source>
        <translation>Stimme: kein „{name}.wav“/„.ogg“ unter Levels</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Only characters from Latin-1 are allowed.</source>
        <translation>Nur Zeichen aus Latin-1 sind erlaubt.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>A line is too long: the game stops reading the script at a line of 3,999 characters or more.</source>
        <translation>Eine Zeile ist zu lang: das Spiel hört bei einer Zeile mit 3.999 oder mehr Zeichen auf, das Skript zu lesen.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Script changed – “Save script” writes it into the output folder</source>
        <translation>Skript geändert – „Skript speichern“ schreibt es in den Ausgabeordner</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Label (without the colon):</source>
        <translation>Label (ohne Doppelpunkt):</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>A label is one line and not empty.</source>
        <translation>Ein Label ist eine Zeile und nicht leer.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>The label has spaces at its ends; the game keeps them. Use it anyway?</source>
        <translation>Das Label hat Leerzeichen an den Enden; das Spiel behält sie. Trotzdem verwenden?</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Add label</source>
        <translation>Label hinzufügen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>The label “{label}” already exists.</source>
        <translation>Das Label „{label}“ gibt es schon.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Rename label</source>
        <translation>Label umbenennen</translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>%n Line field(s) of this level will be changed too:</source>
        <translation>
            <numerusform>%n Line-Feld dieses Levels wird mit geändert:</numerusform>
            <numerusform>%n Line-Felder dieses Levels werden mit geändert:</numerusform>
        </translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Other levels name this label in the same script. They are not changed (set Line to “{new}” there):</source>
        <translation>Andere Level nennen dieses Label im selben Skript. Sie werden nicht geändert (dort Line auf „{new}“ setzen):</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Rename the label “{old}” to “{new}”</source>
        <translation>Label „{old}“ in „{new}“ umbenennen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Rename</source>
        <translation>Umbenennen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Rename label “{old}” (%n reference(s))</source>
        <translation>
            <numerusform>Label „{old}“ umbenennen (%n Verweis)</numerusform>
            <numerusform>Label „{old}“ umbenennen (%n Verweise)</numerusform>
        </translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>The output folder lies inside the game data: the script is not saved.</source>
        <translation>Der Ausgabeordner liegt in den Spieldaten: das Skript wird nicht gespeichert.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Cannot be saved: characters outside Latin-1 ({error}).</source>
        <translation>Kann nicht gespeichert werden: Zeichen außerhalb von Latin-1 ({error}).</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/dialogue.py"/>
        <source>Script saved: {path} (copy it to {data})</source>
        <translation>Skript gespeichert: {path} (nach {data} kopieren)</translation>
    </message>
</context>
<context>
    <name>exeschema</name>
    <message>
        <location filename="../../zaxtools/exeschema.py"/>
        <source>Limits: none</source>
        <translation>Grenzen: keine</translation>
    </message>
    <message>
        <location filename="../../zaxtools/exeschema.py"/>
        <source>Limits: {min} … {max}</source>
        <translation>Grenzen: {min} … {max}</translation>
    </message>
    <message>
        <location filename="../../zaxtools/exeschema.py"/>
        <source>Default: {value}</source>
        <translation>Standard: {value}</translation>
    </message>
    <message>
        <location filename="../../zaxtools/exeschema.py"/>
        <source>Step: {value}</source>
        <translation>Schritt: {value}</translation>
    </message>
    <message>
        <location filename="../../zaxtools/exeschema.py"/>
        <source>Unit: {value}</source>
        <translation>Einheit: {value}</translation>
    </message>
</context>
<context>
    <name>fieldhelp</name>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: set when an AI has finished (or gives up, e.g. a companion without a leader). The owning object still updates it once more, then removes and deletes it; a marked AI is also skipped when other code looks for an AI of a class. Setting it to 1 in a level removes the AI right after its first update; leave it at 0.</source>
        <translation>Gespeicherter Laufzeitzustand: wird gesetzt, wenn eine KI fertig ist (oder aufgibt, z. B. ein Begleiter ohne Anführer). Das besitzende Objekt aktualisiert sie noch einmal, entfernt und löscht sie dann; bei der Suche nach einer KI einer Klasse wird eine markierte KI übersprungen. Eine 1 im Level entfernt die KI direkt nach ihrem ersten Update; auf 0 lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the AI&apos;s list of listeners (objects waiting for its messages such as &quot;Delete&quot;); it is created with the first listener and deleted with the last. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: die Liste der Zuhörer der KI (Objekte, die auf ihre Nachrichten wie „Delete“ warten); sie entsteht mit dem ersten Zuhörer und wird mit dem letzten gelöscht. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run once, on the object&apos;s first update after the AI starts; the object is both $Trigger and $Instigator. On the next update the AI reports itself done to the object&apos;s AIs (&quot;AI done&quot;, which e.g. advances a CSeriesAI).</source>
        <translation>Aktion, die einmal beim ersten Update des Objekts nach dem Start der KI ausgeführt wird; das Objekt ist dabei $Trigger und $Instigator. Beim nächsten Update meldet die KI den KIs des Objekts, dass sie fertig ist („AI done“, damit geht z. B. eine CSeriesAI zum nächsten Schritt).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: 1 once &quot;Action&quot; has run. With 1 in a level the action is skipped and the AI only reports itself done; reset to 0 when the AI is reset. Leave at 0.</source>
        <translation>Gespeicherter Laufzeitzustand: 1, sobald „Action“ gelaufen ist. Mit 1 im Level wird die Aktion übersprungen und die KI meldet nur, dass sie fertig ist; beim Zurücksetzen der KI wird er 0. Auf 0 lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Looping ambient sound (entry of the sound list) that the AI adds to the object&apos;s layer and starts on its first update. If the layer cannot take it, the field is cleared and nothing plays; changing it removes a sound already playing.</source>
        <translation>Geloopter Umgebungsklang (Eintrag der Soundliste), den die KI beim ersten Update in die Ebene des Objekts einträgt und startet. Kann die Ebene ihn nicht aufnehmen, wird das Feld geleert und nichts spielt; eine Änderung entfernt einen bereits laufenden Klang.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Radius in pixels around the object inside which the listener hears the sound centred (no direction). Beyond it the sound is played from the object&apos;s position.</source>
        <translation>Radius in Pixeln um das Objekt, innerhalb dessen der Zuhörer den Klang mittig (ohne Richtung) hört. Außerhalb wird der Klang von der Position des Objekts aus abgespielt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Extra distance in pixels beyond the inner radius at which the sound still plays at full volume: inner + outer radius is the sound&apos;s minimum (full-volume) distance.</source>
        <translation>Zusätzliche Entfernung in Pixeln jenseits des inneren Radius, bis zu der der Klang noch mit voller Lautstärke spielt: innerer + äußerer Radius ist die Mindestentfernung (volle Lautstärke) des Klangs.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Fall-off distance in pixels added to inner + outer radius: the sound fades out over this range and is muted beyond inner + outer radius + max distance.</source>
        <translation>Abklingstrecke in Pixeln, die zu innerem + äußerem Radius hinzukommt: über diese Strecke wird der Klang leiser und jenseits von innerem + äußerem Radius + Max Distance stummgeschaltet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: index of the sound in the layer&apos;s ambient sound list, -1 while none is added. A value other than -1 in a level stops the AI from ever adding and starting its sound; leave at -1.</source>
        <translation>Gespeicherter Laufzeitzustand: Index des Klangs in der Umgebungsklangliste der Ebene, -1 solange keiner eingetragen ist. Ein anderer Wert als -1 im Level verhindert, dass die KI ihren Klang je einträgt und startet; auf -1 lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Embedded movement behaviour (move-to-position) that walks the character towards its current target; its own fields (play ratio, path finding, smooth turning) control how it walks.</source>
        <translation>Eingebettetes Bewegungsverhalten (Gehe-zu-Position), das die Figur zu ihrem aktuellen Ziel laufen lässt; seine eigenen Felder (Play Ratio, Wegsuche, weiches Drehen) bestimmen, wie sie läuft.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Distance in pixels from the target at which the character stops approaching; each new move aims at the point on the line to the target this far away from it. Default 150.</source>
        <translation>Entfernung in Pixeln zum Ziel, bei der die Figur aufhört sich zu nähern; jede neue Bewegung zielt auf den Punkt auf der Linie zum Ziel, der so weit von ihm entfernt ist. Standard 150.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Despite the name a period: seconds between two recalculations of the walk destination while the target is farther than the stop distance. Default 2.</source>
        <translation>Trotz des Namens ein Zeitabstand: Sekunden zwischen zwei Neuberechnungen des Laufziels, solange das Ziel weiter als die Stop Distance entfernt ist. Standard 2.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: seconds until the walk destination is recalculated; set to 0 when the AI starts. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: Sekunden bis zur nächsten Neuberechnung des Laufziels; wird beim Start der KI auf 0 gesetzt. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Embedded shooting behaviour that fires the character&apos;s current weapon at its target. The AI alternates 1 s shooting phases (only while the target is within the item&apos;s reach) with 3 s waiting phases.</source>
        <translation>Eingebettetes Schießverhalten, das die aktuelle Waffe der Figur auf ihr Ziel abfeuert. Die KI wechselt 1 s Schießphasen (nur solange das Ziel in Reichweite des Gegenstands ist) mit 3 s Wartephasen ab.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Embedded behaviour that keeps pointing the character&apos;s weapon at its target; it runs on every update, also while waiting or moving.</source>
        <translation>Eingebettetes Verhalten, das die Waffe der Figur fortlaufend auf ihr Ziel richtet; es läuft bei jedem Update, auch beim Warten oder Laufen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Optional move-to-position behaviour used to reposition between shots. Without one (or with Minimum Attack Distance 0) the character attacks from where it stands.</source>
        <translation>Optionales Gehe-zu-Position-Verhalten, mit dem sich die Figur zwischen den Schüssen neu positioniert. Ohne eines (oder mit Minimum Attack Distance 0) greift die Figur von ihrem Standort aus an.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Distance in pixels the character tries to keep from its target: every 0.5 s while moving it heads for the point on the line to the target this far from it. 0 means it does not move while attacking. Default 100.</source>
        <translation>Abstand in Pixeln, den die Figur zu ihrem Ziel zu halten versucht: beim Laufen steuert sie alle 0,5 s den Punkt auf der Linie zum Ziel an, der so weit von ihm entfernt ist. 0 bedeutet, dass sie sich beim Angreifen nicht bewegt. Standard 100.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Extra distance in pixels for random repositioning: when no path to the planned spot is found, or the movement stops while waiting, the character picks a random spot around the target at a distance up to minimum distance + buffer zone (lower bound the sum minus 1, but at most 100). Default 50.</source>
        <translation>Zusätzliche Entfernung in Pixeln für zufälliges Umpositionieren: findet sich kein Weg zum geplanten Punkt oder bleibt die Bewegung beim Warten stehen, wählt die Figur einen zufälligen Punkt um das Ziel im Abstand bis zu Mindestabstand + Pufferzone (Untergrenze die Summe minus 1, höchstens jedoch 100). Standard 50.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Only saved and loaded; no code of the game reads or writes it. No effect.</source>
        <translation>Wird nur gespeichert und geladen; kein Code des Spiels liest oder schreibt es. Ohne Wirkung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Embedded shooting behaviour that fires the character&apos;s weapon at its target every update; the character stands still (walking characters are set to standing speed when the AI starts).</source>
        <translation>Eingebettetes Schießverhalten, das bei jedem Update die Waffe der Figur auf ihr Ziel abfeuert; die Figur bleibt stehen (laufende Figuren werden beim Start der KI auf Stehgeschwindigkeit gesetzt).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Embedded behaviour that keeps pointing the character&apos;s weapon at its target on every update.</source>
        <translation>Eingebettetes Verhalten, das die Waffe der Figur bei jedem Update auf ihr Ziel richtet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Embedded queue of entity behaviours that the object runs one after another (only for animated objects). When the queue is empty the AI reports &quot;AI done&quot; to the object&apos;s AIs on every update.</source>
        <translation>Eingebettete Warteschlange von Verhalten, die das Objekt nacheinander ausführt (nur bei animierten Objekten). Ist die Warteschlange leer, meldet die KI bei jedem Update „AI done“ an die KIs des Objekts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1: the view follows the object on every update; 0: the AI does nothing. Default 1.</source>
        <translation>1: die Ansicht folgt dem Objekt bei jedem Update; 0: die KI tut nichts. Standard 1.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Maximum speed in pixels per second at which the view target moves towards the object. 0 (&quot;Immediately&quot;) or a target within one step&apos;s reach makes it jump there at once.</source>
        <translation>Höchstgeschwindigkeit in Pixeln pro Sekunde, mit der sich der Ansichtspunkt zum Objekt bewegt. 0 („Immediately“) oder ein Ziel innerhalb eines Schritts lässt ihn sofort dorthin springen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: set to 1 once the view has reached the object; nothing reads it. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: wird 1, sobald die Ansicht das Objekt erreicht hat; nichts liest ihn. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>How the view follows the view target: &quot;Exact&quot; centres the screen on it; &quot;Stay Within Rect&quot; scrolls only as far as needed to keep it inside the screen rectangle given by the rules; &quot;Gradual&quot; (default) does the same but eases the target in smoothly (outside a network game or on the server).</source>
        <translation>Wie die Ansicht dem Ansichtspunkt folgt: „Exact“ zentriert den Bildschirm darauf; „Stay Within Rect“ scrollt nur so weit, dass er im Bildschirmrechteck der Regeln bleibt; „Gradual“ (Standard) ebenso, führt den Punkt aber weich nach (außerhalb eines Netzwerkspiels oder auf dem Server).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Embedded move-to-position behaviour that flies the companion (a CEntityFlying, e.g. the drone) to a spot near its leader, the object that created it.</source>
        <translation>Eingebettetes Gehe-zu-Position-Verhalten, das den Begleiter (eine CEntityFlying, z. B. die Drohne) an einen Punkt nahe seinem Anführer fliegt, dem Objekt, das ihn erzeugt hat.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Smallest distance in pixels from the leader for the companion&apos;s next spot (random between minimum and maximum). Original bug: the spot&apos;s y is always the leader&apos;s y + 1, so the spread is only horizontal. Default 25.</source>
        <translation>Kleinster Abstand in Pixeln vom Anführer für den nächsten Punkt des Begleiters (zufällig zwischen Minimum und Maximum). Fehler des Originals: das y des Punkts ist immer das y des Anführers + 1, die Streuung ist also nur waagerecht. Standard 25.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Largest distance in pixels from the leader for the companion&apos;s next spot (random between minimum and maximum; only horizontal because of an original bug). Default 50.</source>
        <translation>Größter Abstand in Pixeln vom Anführer für den nächsten Punkt des Begleiters (zufällig zwischen Minimum und Maximum; wegen eines Fehlers des Originals nur waagerecht). Standard 50.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Seconds between two choices of a new spot near the leader. Default 1.</source>
        <translation>Sekunden zwischen zwei Wahlen eines neuen Punkts nahe dem Anführer. Standard 1.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: seconds until the next spot is chosen; set to 0 when the AI starts. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: Sekunden bis zur Wahl des nächsten Punkts; wird beim Start der KI auf 0 gesetzt. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Only saved and loaded; no code reads it. The companion attacks any target it can see, regardless of distance. No effect.</source>
        <translation>Wird nur gespeichert und geladen; kein Code liest es. Der Begleiter greift jedes Ziel an, das er sieht, unabhängig von der Entfernung. Ohne Wirkung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Attack AI (default CNormalAttackAI) the companion runs while its current target is visible to it.</source>
        <translation>Angriffs-KI (Standard CNormalAttackAI), die der Begleiter ausführt, solange er sein aktuelles Ziel sehen kann.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Embedded behaviour that picks the closest target each update; the AI overwrites its search flags every update. Run-time state; leave unchanged.</source>
        <translation>Eingebettetes Verhalten, das bei jedem Update das nächstgelegene Ziel wählt; die KI überschreibt dessen Suchflags bei jedem Update. Laufzeitzustand; unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Damage per second dealt to every destructable object inside the current radius (multiplied by the frame time each update). Default 100.</source>
        <translation>Schaden pro Sekunde für jedes zerstörbare Objekt innerhalb des aktuellen Radius (bei jedem Update mit der Bildzeit multipliziert). Standard 100.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Damage type (from the damage type list) of the damage dealt; default &quot;Unavoidable&quot;.</source>
        <translation>Schadensart (aus der Schadensartenliste) des zugefügten Schadens; Standard „Unavoidable“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Meant to choose whether the damage is credited to the object&apos;s creator or to the object; in the code both settings do the same (the creator is always used). No effect.</source>
        <translation>Soll wählen, ob der Schaden dem Erzeuger des Objekts oder dem Objekt angerechnet wird; im Code machen beide Einstellungen dasselbe (es wird immer der Erzeuger genommen). Ohne Wirkung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 (default): the radius is half the width of the object&apos;s current animation frame and the YX ratio is the frame&apos;s height over its width; Start/End Radius, Start To End Time and YX Ratio are then ignored. 0: the radius grows from Start to End Radius.</source>
        <translation>1 (Standard): der Radius ist die halbe Breite des aktuellen Animationsbilds des Objekts und das YX-Verhältnis Höhe durch Breite des Bilds; Start/End Radius, Start To End Time und YX Ratio werden dann ignoriert. 0: der Radius wächst von Start Radius bis End Radius.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Horizontal damage radius in pixels at the start (with Use Animation For Radius off). Default 10.</source>
        <translation>Waagerechter Schadensradius in Pixeln zu Beginn (bei ausgeschaltetem Use Animation For Radius). Standard 10.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Horizontal damage radius in pixels reached after Start To End Time; it stays there as long as the object lives (with Use Animation For Radius off). Default 100.</source>
        <translation>Waagerechter Schadensradius in Pixeln nach Start To End Time; danach bleibt er so, solange das Objekt lebt (bei ausgeschaltetem Use Animation For Radius). Standard 100.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Vertical-to-horizontal ratio of the damage oval (the default 0.713 matches the game&apos;s perspective). Overwritten every update when Use Animation For Radius is on.</source>
        <translation>Verhältnis senkrecht zu waagerecht des Schadensovals (der Standard 0,713 passt zur Perspektive des Spiels). Wird bei eingeschaltetem Use Animation For Radius bei jedem Update überschrieben.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Seconds over which the radius grows linearly from Start Radius to End Radius (with Use Animation For Radius off). Default 2.</source>
        <translation>Sekunden, in denen der Radius linear von Start Radius auf End Radius wächst (bei ausgeschaltetem Use Animation For Radius). Standard 2.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1: the door refuses every open, close and toggle request. Lock/unlock door actions change it and run After Locked / After Unlocked.</source>
        <translation>1: die Tür verweigert jede Anfrage zum Öffnen, Schließen und Umschalten. Aktionen zum Ver-/Entriegeln ändern den Wert und führen After Locked / After Unlocked aus.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Optional condition action asked before every open or close (door object as $Trigger and $Instigator); if it fails, the door stays as it is.</source>
        <translation>Optionale Bedingungsaktion, die vor jedem Öffnen oder Schließen befragt wird (Türobjekt als $Trigger und $Instigator); schlägt sie fehl, bleibt die Tür, wie sie ist.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run when the door starts opening (from closed or while closing), before the opening sound and animation.</source>
        <translation>Aktion, die ausgeführt wird, wenn die Tür zu öffnen beginnt (aus geschlossen oder während des Schließens), vor Öffnungsgeräusch und -animation.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run when the opening animation has finished and the door is open.</source>
        <translation>Aktion, die ausgeführt wird, wenn die Öffnungsanimation beendet und die Tür offen ist.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run when the door starts closing (from open or while opening).</source>
        <translation>Aktion, die ausgeführt wird, wenn die Tür zu schließen beginnt (aus offen oder während des Öffnens).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run when the closing animation has finished and the door is closed.</source>
        <translation>Aktion, die ausgeführt wird, wenn die Schließanimation beendet und die Tür geschlossen ist.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run when a lock request locks a door that was unlocked.</source>
        <translation>Aktion, die ausgeführt wird, wenn eine Verriegelungsanfrage eine unverriegelte Tür verriegelt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run when an unlock request unlocks a door that was locked.</source>
        <translation>Aktion, die ausgeführt wird, wenn eine Entriegelungsanfrage eine verriegelte Tür entriegelt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Seconds an open door stays open before it closes by itself; 0 (default) means never. Another open request on an open door restarts the countdown.</source>
        <translation>Sekunden, die eine offene Tür offen bleibt, bevor sie sich selbst schließt; 0 (Standard) bedeutet nie. Eine weitere Öffnungsanfrage an eine offene Tür startet den Countdown neu.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: Closing, Closed, Opening, Open or Unknown (default). At the start it is taken from the door&apos;s sequence (&quot;Open&quot; or &quot;Closed&quot;); a door left Unknown ignores open/close requests. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: Closing, Closed, Opening, Open oder Unknown (Standard). Beim Start wird er aus der Sequenz der Tür übernommen („Open“ oder „Closed“); eine Tür, die Unknown bleibt, ignoriert Öffnungs-/Schließanfragen. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: seconds left until an open door closes by itself (with Auto-Close Timeout above 0). Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: verbleibende Sekunden, bis sich eine offene Tür selbst schließt (bei Auto-Close Timeout über 0). Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: frames per second of the running opening/closing animation (negative when it runs backwards, 0 when the door is at rest). Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: Bilder pro Sekunde der laufenden Öffnungs-/Schließanimation (negativ, wenn sie rückwärts läuft, 0 bei ruhender Tür). Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: seconds until a closing door next hurts what it touches (every 0.2 s, by the model&apos;s closing damage × 0.2), -1 when it hurts nobody. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: Sekunden, bis eine schließende Tür das nächste Mal verletzt, was sie berührt (alle 0,2 s, mit dem Schließschaden des Modells × 0,2), -1, wenn sie niemanden verletzt. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Only saved and loaded; the door code never reads it. Doors open only through actions and messages. No effect.</source>
        <translation>Wird nur gespeichert und geladen; der Türcode liest es nie. Türen öffnen sich nur über Aktionen und Nachrichten. Ohne Wirkung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Only saved and loaded; the door code never reads it. No effect.</source>
        <translation>Wird nur gespeichert und geladen; der Türcode liest es nie. Ohne Wirkung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Horizontal radius in pixels of the oval the AI&apos;s debug drawing shows; the debug drawing is never reached in the release game. No effect in the game.</source>
        <translation>Waagerechter Radius in Pixeln des Ovals, das die Debug-Zeichnung der KI zeigt; die Debug-Zeichnung wird im veröffentlichten Spiel nie erreicht. Im Spiel ohne Wirkung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Height-to-width ratio of the oval of the debug drawing, which the release game never shows. No effect in the game.</source>
        <translation>Verhältnis Höhe zu Breite des Ovals der Debug-Zeichnung, die das veröffentlichte Spiel nie zeigt. Im Spiel ohne Wirkung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Seconds until the object dies (removed as if killed); counts down every update. A negative value stops the countdown. Default 1.</source>
        <translation>Sekunden, bis das Objekt stirbt (entfernt, als wäre es getötet worden); zählt bei jedem Update herunter. Ein negativer Wert hält den Countdown an. Standard 1.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Item definition (from the item catalogue) of the continuous-fire weapon this AI fires; the carrier&apos;s matching weapon item provides the muzzle flash, and the definition gives range, damage, energy use, impact explosion and looping sound. The game adds this AI itself while such a weapon fires.</source>
        <translation>Gegenstandsdefinition (aus dem Gegenstandskatalog) der Dauerfeuerwaffe, die diese KI abfeuert; der passende Waffengegenstand des Trägers liefert das Mündungsfeuer, die Definition Reichweite, Schaden, Energieverbrauch, Einschlagexplosion und Dauerton. Das Spiel fügt diese KI selbst hinzu, während eine solche Waffe feuert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the impact effect object the AI spawns at start and moves to the beam&apos;s hit point (shown only while something is hit). Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: das Einschlageffekt-Objekt, das die KI beim Start erzeugt und an den Trefferpunkt des Strahls setzt (nur sichtbar, solange etwas getroffen wird). Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the carrier&apos;s weapon item found at start. Without it the AI ends at once. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: der beim Start gefundene Waffengegenstand des Trägers. Ohne ihn endet die KI sofort. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name of the message sent to each object the beam damages, once per update while it is hit; AIs of the victim (e.g. a message handler) can react to it.</source>
        <translation>Name der Nachricht, die an jedes Objekt geschickt wird, das der Strahl beschädigt, einmal pro Update, solange es getroffen wird; KIs des Opfers (z. B. ein Nachrichten-Handler) können darauf reagieren.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the weapon&apos;s muzzle flash object the AI listens to; the beam starts there. If it dies or is deleted the AI ends. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: das Mündungsfeuer-Objekt der Waffe, dem die KI zuhört; dort beginnt der Strahl. Stirbt es oder wird gelöscht, endet die KI. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: updates since the muzzle flash last reported &quot;I Moved&quot;; after more than 6 the AI ends and the weapon stops firing. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: Updates seit der letzten Meldung „I Moved“ des Mündungsfeuers; nach mehr als 6 endet die KI und die Waffe hört auf zu feuern. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Lightning object used as template; a copy is attached to the shooter at start and drawn from the muzzle to the hit point, or with random length and direction within the weapon&apos;s spread when nothing is hit.</source>
        <translation>Blitzobjekt als Vorlage; eine Kopie wird beim Start an den Schützen gehängt und von der Mündung zum Trefferpunkt gezeichnet oder, wenn nichts getroffen wird, mit zufälliger Länge und Richtung innerhalb der Streuung der Waffe.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the copy of the lightning attached to the shooter; it dies when the AI is deactivated. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: die an den Schützen gehängte Kopie des Blitzes; sie stirbt, wenn die KI deaktiviert wird. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name of the message sent to an object that cuts off a missed lightning bolt (the bolt ends at it).</source>
        <translation>Name der Nachricht, die an ein Objekt geschickt wird, das einen nicht treffenden Blitz abschneidet (der Blitz endet an ihm).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Particle system AI used as template; a copy is added to the muzzle flash at start, and its particle life is set each update so the particles reach the hit point or the weapon&apos;s range.</source>
        <translation>Partikelsystem-KI als Vorlage; eine Kopie wird beim Start dem Mündungsfeuer hinzugefügt, und ihre Partikellebensdauer wird bei jedem Update so gesetzt, dass die Partikel den Trefferpunkt oder die Reichweite der Waffe erreichen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the copy of the particle system on the muzzle flash; when it is deleted the AI ends. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: die Kopie des Partikelsystems am Mündungsfeuer; wird sie gelöscht, endet die KI. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name of the message sent to an object that cuts off the particle beam when nothing is hit (the beam ends at it).</source>
        <translation>Name der Nachricht, die an ein Objekt geschickt wird, das den Partikelstrahl abschneidet, wenn nichts getroffen wird (der Strahl endet an ihm).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Share of the vertical speed kept when the object hits the ground (height below 0): it is put back to height 0 and a downward speed is reversed and multiplied by this value. 0..1, default 0.5.</source>
        <translation>Anteil der senkrechten Geschwindigkeit, der beim Aufprall auf den Boden (Höhe unter 0) erhalten bleibt: das Objekt wird auf Höhe 0 zurückgesetzt und eine Abwärtsgeschwindigkeit umgekehrt und mit diesem Wert multipliziert. 0..1, Standard 0,5.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Added on every update (per frame, not per second, so it depends on the frame rate) to the charge of Sphere of Zin items in the same layer, weighted by the rules&apos; evil unit divided by the squared distance.</source>
        <translation>Wird bei jedem Update (pro Bild, nicht pro Sekunde, also abhängig von der Bildrate) zur Ladung der Sphere-of-Zin-Gegenstände in derselben Ebene addiert, gewichtet mit der Evil-Einheit der Regeln geteilt durch die quadrierte Entfernung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name of the AI message (e.g. a &quot;Damaged Message Name&quot; or a message sent by an action) this AI reacts to; matching messages run &quot;Action&quot; and count as handled.</source>
        <translation>Name der KI-Nachricht (z. B. eine „Damaged Message Name“ oder eine von einer Aktion gesendete Nachricht), auf die diese KI reagiert; passende Nachrichten führen „Action“ aus und gelten als behandelt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run each time the message arrives; the object is $Trigger and $Instigator.</source>
        <translation>Aktion, die bei jedem Eintreffen der Nachricht ausgeführt wird; das Objekt ist $Trigger und $Instigator.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Damage (hit points per collision) dealt to a destructable object touching the beam, meant for players. Original bug: the check only tests that the other object has any flags, so this value is used for practically every object. Default 1.</source>
        <translation>Schaden (Trefferpunkte pro Kollision) für ein zerstörbares Objekt, das den Strahl berührt, gedacht für Spieler. Fehler des Originals: die Prüfung testet nur, ob das andere Objekt überhaupt Flags hat, daher gilt dieser Wert für praktisch jedes Objekt. Standard 1.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Damage (hit points per collision) meant for non-player objects touching the beam. Because of an original bug it applies only to objects without any flags, so in practice it is almost never used. Default 100.</source>
        <translation>Schaden (Trefferpunkte pro Kollision), gedacht für Nicht-Spieler-Objekte, die den Strahl berühren. Wegen eines Fehlers des Originals gilt er nur für Objekte ganz ohne Flags und wird daher praktisch nie verwendet. Standard 100.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Item definition (item catalogue) whose default item the pickup gives. With &quot;!None&quot; the &quot;Special Item&quot; is given instead; a COverridePickupAI&apos;s &quot;Item&quot; on the object takes precedence over both.</source>
        <translation>Gegenstandsdefinition (Gegenstandskatalog), deren Standardgegenstand das Pickup vergibt. Bei „!None“ wird stattdessen „Special Item“ vergeben; ein „Item“ einer COverridePickupAI am Objekt hat Vorrang vor beiden.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Inventory item object owned by the pickup, given when &quot;Normal Item&quot; is &quot;!None&quot; (or its definition is not an item definition).</source>
        <translation>Inventargegenstand im Besitz des Pickups, der vergeben wird, wenn „Normal Item“ „!None“ ist (oder seine Definition keine Gegenstandsdefinition ist).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>A COverridePickupAI on the object can replace or disable it.</source>
        <translation>Eine COverridePickupAI am Objekt kann es ersetzen oder abschalten.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Explosion/effect model spawned at the pickup&apos;s position when it is collected; empty = none.</source>
        <translation>Explosions-/Effektmodell, das beim Einsammeln an der Position des Pickups erzeugt wird; leer = keins.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Categories (flags, default &quot;Player&quot;) of objects that collect the pickup on touch; other objects touch it without collecting.</source>
        <translation>Kategorien (Flags, Standard „Player“) der Objekte, die das Pickup bei Berührung einsammeln; andere Objekte berühren es, ohne es einzusammeln.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Runs right after the item (or the alternate item) is given, before the pickup disappears; the pickup is $Trigger and the collector $Instigator.</source>
        <translation>Läuft direkt nach Vergabe des Gegenstands (oder des Ersatzgegenstands), bevor das Pickup verschwindet; das Pickup ist $Trigger, der Einsammelnde $Instigator.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Shows the item actually given (the alternate item if that was taken), for the collecting player.</source>
        <translation>Zeigt den tatsächlich vergebenen Gegenstand (den Ersatzgegenstand, falls dieser genommen wurde), für den einsammelnden Spieler.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Embedded looped-sequence behaviour that plays the object&apos;s sequence (with its fps, direction, ping-pong and loop settings); only for animated objects.</source>
        <translation>Eingebettetes Verhalten für geloopte Sequenzen, das die Sequenz des Objekts abspielt (mit fps, Richtung, Ping-Pong und Schleifeneinstellungen); nur für animierte Objekte.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action (default CSendAIDoneMessage) run when the behaviour reports it has finished, and again on every later update while it stays finished; the object is $Trigger and $Instigator.</source>
        <translation>Aktion (Standard CSendAIDoneMessage), die ausgeführt wird, wenn das Verhalten meldet, dass es fertig ist, und danach bei jedem weiteren Update, solange es fertig bleibt; das Objekt ist $Trigger und $Instigator.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run each time a matching object collides with this object; this object is $Trigger, the touching object $Instigator. There is no once-only limit.</source>
        <translation>Aktion, die bei jeder Kollision eines passenden Objekts mit diesem Objekt ausgeführt wird; dieses Objekt ist $Trigger, das berührende $Instigator. Es gibt keine Einmal-Begrenzung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1: any colliding object fires the action, regardless of the other switches. Default 0.</source>
        <translation>1: jedes kollidierende Objekt löst die Aktion aus, unabhängig von den anderen Schaltern. Standard 0.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1: objects of the player category fire the action. Default 1.</source>
        <translation>1: Objekte der Kategorie Spieler lösen die Aktion aus. Standard 1.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1: objects of the enemy category fire the action. Default 0.</source>
        <translation>1: Objekte der Kategorie Gegner lösen die Aktion aus. Standard 0.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1: shots (objects with a CShotAI) fire the action. Default 0.</source>
        <translation>1: Schüsse (Objekte mit einer CShotAI) lösen die Aktion aus. Standard 0.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The AI this wrapper runs; start, updates, messages and collisions are passed on to it. The wrapper also keeps the object updated even when it is outside every player&apos;s view.</source>
        <translation>Die KI, die diese Hülle ausführt; Start, Updates, Nachrichten und Kollisionen werden an sie weitergereicht. Die Hülle sorgt außerdem dafür, dass das Objekt auch außerhalb der Sicht aller Spieler aktualisiert wird.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Despite the &quot;Depricated&quot; group it is used: half width and half height in pixels of the square around the object in which all objects keep updating when off screen; 0 updates only the object itself. A &quot;deactivate AI&quot; message ends this. Default 10.</source>
        <translation>Trotz der Gruppe „Depricated“ wird es benutzt: halbe Breite und halbe Höhe in Pixeln des Quadrats um das Objekt, in dem alle Objekte auch außerhalb des Bildschirms aktualisiert werden; 0 aktualisiert nur das Objekt selbst. Eine Nachricht „deactivate AI“ beendet das. Standard 10.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Largest number of generated objects alive at once: active objects in the layer named &quot;New Name&quot; (destructable ones only while they have hit points) plus pending generations. Default 1.</source>
        <translation>Höchstzahl gleichzeitig lebender erzeugter Objekte: aktive Objekte der Ebene mit dem Namen „New Name“ (zerstörbare nur, solange sie Trefferpunkte haben) plus ausstehende Erzeugungen. Standard 1.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Seconds between two generation attempts; 0 or less stops the generator. Default 10.</source>
        <translation>Sekunden zwischen zwei Erzeugungsversuchen; 0 oder weniger hält den Generator an. Standard 10.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 (default): a new animated object appears with the warp-in effect (&quot;Warp Effect 1&quot;).</source>
        <translation>1 (Standard): ein neues animiertes Objekt erscheint mit dem Einwarp-Effekt („Warp Effect 1“).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>List of spawnable entries; each generation picks one at random, weighted by the entries&apos; weights, and centres the new object on the generator.</source>
        <translation>Liste der erzeugbaren Einträge; jede Erzeugung wählt einen zufällig, gewichtet nach den Gewichten der Einträge, und zentriert das neue Objekt auf dem Generator.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name given to every generated object; also used to count them for Max Simultaneous. Empty: the generator never generates (it only reports an error).</source>
        <translation>Name, den jedes erzeugte Objekt erhält; dient auch zum Zählen für Max Simultaneous. Leer: der Generator erzeugt nie etwas (er meldet nur einen Fehler).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1: the new object loses the AIs it comes with before &quot;AIs to Add&quot; are added. Default 0.</source>
        <translation>1: das neue Objekt verliert seine mitgebrachten KIs, bevor „AIs to Add“ hinzugefügt werden. Standard 0.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>AIs copied onto every generated object.</source>
        <translation>KIs, die auf jedes erzeugte Objekt kopiert werden.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>$Trigger is the generator object.</source>
        <translation>$Trigger ist das Generatorobjekt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: seconds until the next generation attempt; set to Delay Between Spawns when the generator starts. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: Sekunden bis zum nächsten Erzeugungsversuch; beim Start des Generators auf Delay Between Spawns gesetzt. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: generations postponed because a blocking object stood on the generator; one is retried per update. Leave at 0.</source>
        <translation>Gespeicherter Laufzeitzustand: Erzeugungen, die verschoben wurden, weil ein blockierendes Objekt auf dem Generator stand; pro Update wird eine erneut versucht. Auf 0 lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Stored in radians, shown in degrees; only animated objects are turned.</source>
        <translation>Gespeichert in Bogenmaß, angezeigt in Grad; nur animierte Objekte werden gedreht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Stored in radians, shown in degrees; the default 180° gives any direction.</source>
        <translation>Gespeichert in Bogenmaß, angezeigt in Grad; der Standard 180° ergibt jede Richtung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name of the object to walk to (names like $Trigger work); it becomes the walker&apos;s current target while walking. Touching it also ends the walk.</source>
        <translation>Name des Objekts, zu dem gelaufen wird (Namen wie $Trigger funktionieren); es wird während des Laufens das aktuelle Ziel des Läufers. Es zu berühren beendet das Laufen ebenfalls.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Offset in pixels (x, y) added to the destination&apos;s position.</source>
        <translation>Versatz in Pixeln (x, y), der zur Position des Ziels addiert wird.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run on the first update after the AI starts; the walker is $Trigger and $Instigator.</source>
        <translation>Aktion, die beim ersten Update nach dem Start der KI ausgeführt wird; der Läufer ist $Trigger und $Instigator.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: 1 once the walk (and turn) is over; the AI then does nothing. Reset when the AI starts. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: 1, sobald Laufen (und Drehen) vorbei ist; die KI tut dann nichts mehr. Wird beim Start der KI zurückgesetzt. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: 1 while the walk is done and the final turn runs. Reset when the AI starts. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: 1, solange das Laufen fertig ist und die abschließende Drehung läuft. Wird beim Start der KI zurückgesetzt. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: 1 when no path to the destination was found; then &quot;AI done&quot; is sent instead of running &quot;Done action&quot;. Reset when the AI starts. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: 1, wenn kein Weg zum Ziel gefunden wurde; dann wird „AI done“ gesendet statt „Done action“ auszuführen. Wird beim Start der KI zurückgesetzt. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: 1 while the walker&apos;s target is the destination set by this AI, so the AI clears it again when done or deactivated. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: 1, solange das Ziel des Läufers das von dieser KI gesetzte Ziel ist, damit die KI es beim Ende oder Deaktivieren wieder löscht. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Embedded move-to-position behaviour that walks the object to the destination (path finding, smooth turning, play ratio).</source>
        <translation>Eingebettetes Gehe-zu-Position-Verhalten, das das Objekt zum Ziel laufen lässt (Wegsuche, weiches Drehen, Play Ratio).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run when the walk (and the optional turn) is finished and a path was found; the walker is $Trigger and $Instigator. The AI does not end by itself, so this action usually sends &quot;AI done&quot;.</source>
        <translation>Aktion, die ausgeführt wird, wenn das Laufen (und die optionale Drehung) beendet ist und ein Weg gefunden wurde; der Läufer ist $Trigger und $Instigator. Die KI endet nicht von selbst, daher sendet diese Aktion meist „AI done“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1: on arrival the walker&apos;s home position becomes its current position. Default 0.</source>
        <translation>1: bei Ankunft wird die Heimatposition des Läufers zu seiner aktuellen Position. Standard 0.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Speed factor of the walk passed to the move behaviour; if the move behaviour&apos;s own play ratio is above 0 it overwrites this field when the walk starts.</source>
        <translation>Geschwindigkeitsfaktor des Laufens, der an das Bewegungsverhalten übergeben wird; ist die eigene Play Ratio des Bewegungsverhaltens über 0, überschreibt sie dieses Feld beim Start des Laufens.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time timer: while walking it counts down; at 0 it is reset to 1 second and, if the move behaviour has stopped (speed 0), the walk is started again. Leave unchanged.</source>
        <translation>Laufzeit-Timer: zählt beim Laufen herunter; bei 0 wird er auf 1 Sekunde zurückgesetzt und, falls das Bewegungsverhalten steht (Geschwindigkeit 0), das Laufen neu gestartet. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1: after arriving, the walker turns to the angle of &quot;Facing Angle&quot; while playing &quot;Turn Sequence Name&quot;. Default 0.</source>
        <translation>1: nach der Ankunft dreht sich der Läufer auf den Winkel von „Facing Angle“ und spielt dabei „Turn Sequence Name“. Standard 0.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sequence played from frame 0 during the final turn (with Set Facing Angle). Default &quot;Idle&quot;.</source>
        <translation>Sequenz, die während der abschließenden Drehung ab Bild 0 gespielt wird (mit Set Facing Angle). Standard „Idle“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Embedded turn-to-angle behaviour used for the final turn; its &quot;Angle To Turn To&quot; is the facing after arrival.</source>
        <translation>Eingebettetes Dreh-auf-Winkel-Verhalten für die abschließende Drehung; sein „Angle To Turn To“ ist die Blickrichtung nach der Ankunft.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: 1 until the first update ran &quot;Starting Action&quot;; set to 1 when the AI starts. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: 1, bis das erste Update „Starting Action“ ausgeführt hat; wird beim Start der KI auf 1 gesetzt. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run when the falling object hits Ground Height and the bounce does not already lift it within the same step; the object is $Trigger and $Instigator.</source>
        <translation>Aktion, die ausgeführt wird, wenn das fallende Objekt Ground Height erreicht und der Abprall es nicht schon im selben Schritt anhebt; das Objekt ist $Trigger und $Instigator.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Height in pixels at which the falling object bounces (its vertical speed reversed and scaled by the model&apos;s bounce factor). The AI forces a constant fall speed of about 321.5 pixels per second. Default 0.</source>
        <translation>Höhe in Pixeln, bei der das fallende Objekt abprallt (seine senkrechte Geschwindigkeit umgekehrt und mit dem Abprallfaktor des Modells skaliert). Die KI erzwingt eine konstante Fallgeschwindigkeit von etwa 321,5 Pixeln pro Sekunde. Standard 0.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Embedded idle behaviour that lets an animated object stand and play its idle animation and fidgets. Run-time state of the behaviour; leave unchanged.</source>
        <translation>Eingebettetes Leerlaufverhalten, das ein animiertes Objekt stehen und seine Leerlaufanimation und Fidgets spielen lässt. Laufzeitzustand des Verhaltens; unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Embedded move behaviour (a CEntityBehaviorMoveToPos, despite the odd name) that walks the figure to the point to investigate; its own settings (path finding, play ratio, sequence) apply. When its Play Ratio is above 0 it also overrides this AI&apos;s &quot;Play Ratio&quot;.</source>
        <translation>Eingebettetes Bewegungsverhalten (ein CEntityBehaviorMoveToPos, trotz des seltsamen Namens), das die Figur zum zu untersuchenden Punkt laufen lässt; dessen eigene Einstellungen (Wegfindung, Abspielrate, Sequenz) gelten. Ist dessen „Play Ratio“ größer als 0, überschreibt es auch die „Play Ratio“ dieser KI.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Embedded turn behaviour used after arriving: the figure turns to face the investigated point before the &quot;Investigate AI&quot; starts (skipped when &quot;Radius to Investigate Point&quot; is 0). Also used to turn to the entity&apos;s own angle in the internal &apos;Going Home&apos; state.</source>
        <translation>Eingebettetes Drehverhalten, das nach der Ankunft verwendet wird: Die Figur dreht sich zum untersuchten Punkt, bevor die „Investigate AI“ startet (entfällt, wenn „Radius to Investigate Point“ 0 ist). Wird auch im internen Zustand „Going Home“ zum Drehen auf den eigenen Winkel des Objekts genutzt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Animation speed factor (1 = normal) passed to the move behaviour for the walk to the point. Before the move it is replaced by the embedded move behaviour&apos;s (&quot;AFloat&quot;) Play Ratio whenever that is above 0, so in practice it mirrors that value.</source>
        <translation>Animations-Geschwindigkeitsfaktor (1 = normal), der für den Weg zum Punkt an das Bewegungsverhalten übergeben wird. Vor der Bewegung wird er durch die „Play Ratio“ des eingebetteten Bewegungsverhaltens („AFloat“) ersetzt, sofern diese größer als 0 ist; in der Praxis spiegelt er also diesen Wert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: countdown in seconds to the next move attempt. It is reset to 0 at the start and set to 1 after the single move attempt; no later retry happens. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: Countdown in Sekunden bis zum nächsten Bewegungsversuch. Wird beim Start auf 0 gesetzt und nach dem einzigen Bewegungsversuch auf 1; ein späterer Versuch findet nicht statt. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Seconds the figure spends investigating (running the &quot;Investigate AI&quot;) once it has reached the point (default 5). Afterwards it switches back to walking and reports the target as lost, so the owning AI (e.g. the skeleton AI) gives up.</source>
        <translation>Sekunden, die die Figur nach Erreichen des Punkts mit Untersuchen verbringt (die „Investigate AI“ läuft) (Standard 5). Danach schaltet sie wieder auf Gehen und meldet das Ziel als verloren, sodass die übergeordnete KI (z. B. die Skelett-KI) aufgibt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: remaining investigation time in seconds, copied from &quot;Time To Investigate&quot; on arrival and counted down. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: verbleibende Untersuchungszeit in Sekunden, wird bei Ankunft aus „Time To Investigate“ übernommen und heruntergezählt. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Arrival distance in pixels (vertical distances stretched by about 1.4 for the perspective): the walk ends once the figure is this close to the point (or the move finishes). With 0 (default) the figure only stops when the move ends and does not turn to face the point before investigating.</source>
        <translation>Ankunftsabstand in Pixeln (vertikale Abstände wegen der Perspektive um etwa 1,4 gestreckt): Der Weg endet, sobald die Figur so nah am Punkt ist (oder die Bewegung endet). Bei 0 (Standard) stoppt die Figur erst, wenn die Bewegung endet, und dreht sich vor dem Untersuchen nicht zum Punkt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 (default): a walking figure runs to the point; 0: it walks. After the investigation the gait is set back to walking.</source>
        <translation>1 (Standard): Eine laufende Figur rennt zum Punkt; 0: sie geht. Nach der Untersuchung wird die Gangart wieder auf Gehen gesetzt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state of the investigation (Chasing = walking to the point, Turning To Investigate, Investigating, Going Home, Turning, Done, Idle). It is reset to &quot;Chasing&quot; every time the AI begins; leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand der Untersuchung (Chasing = Weg zum Punkt, Turning To Investigate, Investigating, Going Home, Turning, Done, Idle). Wird bei jedem Start der KI auf „Chasing“ zurückgesetzt; im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>AI run while investigating at the point, for &quot;Time To Investigate&quot; seconds; it must be a CInvestigateAreaAI kind (default CScanInvestigateAI, which looks around). Messages to this AI are passed on to it. Empty: the figure just waits there.</source>
        <translation>KI, die während der Untersuchung am Punkt für „Time To Investigate“ Sekunden läuft; sie muss eine CInvestigateAreaAI-Art sein (Standard CScanInvestigateAI, die sich umsieht). Nachrichten an diese KI werden an sie weitergereicht. Leer: Die Figur wartet dort nur.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Seconds between re-aiming the move at the position of the entity&apos;s current target (default 2). The countdown only restarts when a target exists, so without one the AI checks again every frame.</source>
        <translation>Sekunden zwischen zwei Neuausrichtungen der Bewegung auf die Position des aktuellen Ziels des Objekts (Standard 2). Der Countdown startet nur neu, wenn ein Ziel existiert; ohne Ziel prüft die KI also jeden Frame erneut.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Embedded move behaviour that walks the figure towards its current target; path finding is switched on when the AI begins and each re-aim uses play ratio 1.</source>
        <translation>Eingebettetes Bewegungsverhalten, das die Figur zu ihrem aktuellen Ziel laufen lässt; beim Start der KI wird die Wegfindung eingeschaltet, und jede Neuausrichtung verwendet die Abspielrate 1.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: seconds until the next re-aim at the target; set to 0 when the AI begins, so the first re-aim happens at once. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: Sekunden bis zur nächsten Neuausrichtung auf das Ziel; wird beim Start der KI auf 0 gesetzt, sodass die erste Neuausrichtung sofort erfolgt. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Embedded CScanAreaAI that does the actual work: the figure sweeps its view back and forth between the scan angles while investigating. All begin, update and drawing calls are passed on to it.</source>
        <translation>Eingebettete CScanAreaAI, die die eigentliche Arbeit macht: Die Figur schwenkt beim Untersuchen ihren Blick zwischen den Schwenkwinkeln hin und her. Alle Start-, Aktualisierungs- und Zeichenaufrufe werden an sie weitergereicht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Ground elevation (0–255, default 127) the terrain cells under the area are moved towards.</source>
        <translation>Bodenhöhe (0–255, Standard 127), auf die die Geländezellen im Bereich zubewegt werden.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Width in pixels (default 32) of the area around the object&apos;s position whose ground cells (64 × 64 pixels each) are changed.</source>
        <translation>Breite in Pixeln (Standard 32) des Bereichs um die Position des Objekts, dessen Bodenzellen (je 64 × 64 Pixel) verändert werden.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Height in pixels (default 32) of the area around the object&apos;s position whose ground cells are changed; for an &quot;Oval&quot; shape it sets the vertical squeeze of the ellipse.</source>
        <translation>Höhe in Pixeln (Standard 32) des Bereichs um die Position des Objekts, dessen Bodenzellen verändert werden; bei der Form „Oval“ bestimmt sie die vertikale Stauchung der Ellipse.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Elevation units per second each cell moves towards &quot;Target Elevation&quot; (default 40). Fractions are carried over between frames; the step is not clamped, so a high rate can overshoot the target. 0 means stopped; the AI itself sets it to 0 when &quot;Stop When&quot; is met.</source>
        <translation>Höheneinheiten pro Sekunde, um die sich jede Zelle auf „Target Elevation“ zubewegt (Standard 40). Bruchteile werden zwischen Frames übertragen; der Schritt wird nicht begrenzt, eine hohe Rate kann also über das Ziel hinausschießen. 0 bedeutet angehalten; die KI selbst setzt den Wert auf 0, wenn „Stop When“ erfüllt ist.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the fraction of an elevation unit not yet applied, carried to the next frame. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: der noch nicht angewendete Bruchteil einer Höheneinheit, der in den nächsten Frame übertragen wird. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>&quot;Rectangle&quot; (default) changes every cell in the width × height area; &quot;Oval&quot; only the cells inside the ellipse fitting that area (with a margin of half a cell).</source>
        <translation>„Rectangle“ (Standard) verändert jede Zelle im Bereich Breite × Höhe; „Oval“ nur die Zellen innerhalb der Ellipse in diesem Bereich (mit einem Rand von einer halben Zelle).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When the change stops (rate set to 0): &quot;Any Point Reaches Target&quot; (default) as soon as one cell is at the target; &quot;All Points Reach Target&quot; when no cell could be changed any more (all at the target or outside the limits); &quot;Never&quot; keeps running.</source>
        <translation>Wann die Veränderung endet (Rate auf 0 gesetzt): „Any Point Reaches Target“ (Standard), sobald eine Zelle den Zielwert hat; „All Points Reach Target“, wenn keine Zelle mehr verändert werden konnte (alle am Ziel oder außerhalb der Grenzen); „Never“ läuft weiter.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Cells whose current elevation is above this value (0–255, default 255) are left alone.</source>
        <translation>Zellen, deren aktuelle Höhe über diesem Wert liegt (0–255, Standard 255), bleiben unverändert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Cells whose current elevation is below this value (0–255, default 0) are left alone.</source>
        <translation>Zellen, deren aktuelle Höhe unter diesem Wert liegt (0–255, Standard 0), bleiben unverändert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The AI that runs for at most &quot;Max Time&quot; seconds; collisions and messages are passed to it only while time is left. Must be set: the begin call does not check for an empty field (the original crashes).</source>
        <translation>Die KI, die höchstens „Max Time“ Sekunden läuft; Kollisionen und Nachrichten werden nur weitergereicht, solange Zeit übrig ist. Muss gesetzt sein: Der Startaufruf prüft nicht auf ein leeres Feld (das Original stürzt ab).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Seconds the &quot;What To Do&quot; AI may run (default 1, up to 99999); the countdown restarts every time this AI begins.</source>
        <translation>Sekunden, die die KI „What To Do“ laufen darf (Standard 1, bis 99999); der Countdown beginnt bei jedem Start dieser KI neu.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: seconds remaining, set from &quot;Max Time&quot; on begin. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: verbleibende Sekunden, beim Start aus „Max Time“ gesetzt. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run once when the time is up (default CSendAIDoneMessage, which tells the owner the AI is done). Empty: nothing happens, the AI just stops.</source>
        <translation>Aktion, die einmal ausgeführt wird, wenn die Zeit abgelaufen ist (Standard CSendAIDoneMessage, die dem Besitzer meldet, dass die KI fertig ist). Leer: Nichts passiert, die KI hält nur an.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Distance in pixels from the entity&apos;s home point (vertical distances stretched by about 1.4); when the entity is farther away, its next random leg heads back towards home. 0 or below (default -1) switches this off.</source>
        <translation>Abstand in Pixeln vom Heimatpunkt des Objekts (vertikale Abstände um etwa 1,4 gestreckt); ist das Objekt weiter entfernt, führt seine nächste zufällige Strecke zurück Richtung Heimat. 0 oder kleiner (Standard -1) schaltet das ab.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Inventory item this pickup gives instead of the CPickupAI&apos;s own &quot;Normal Item&quot;/&quot;Special Item&quot;. Empty: the CPickupAI&apos;s item is used.</source>
        <translation>Inventargegenstand, den dieses Pickup statt des eigenen „Normal Item“/„Special Item“ der CPickupAI vergibt. Leer: Der Gegenstand der CPickupAI wird verwendet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When set (not &quot;!None&quot;) it replaces the CPickupAI&apos;s own &quot;Alternate Item Def&quot; for this object. The alternate item is offered whenever the main item refuses the character (its own acceptance check; already owning it is the usual reason).</source>
        <translation>Wenn gesetzt (nicht „!None“), ersetzt es für dieses Objekt das eigene „Alternate Item Def“ der CPickupAI. Der Ersatzgegenstand wird angeboten, wenn der Hauptgegenstand die Figur ablehnt (dessen eigene Annahmeprüfung; meist, weil sie ihn schon besitzt).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>What happens after pickup. &quot;Don&apos;t Respawn&quot; (default): the object is deleted. Otherwise it is only hidden and made non-collidable: &quot;Respawn Delay After Pickup&quot; brings it back &quot;Respawn Delay&quot; seconds after it was taken; &quot;Respawn Regularly If Gone&quot; brings it back at the next fixed respawn moment; &quot;Respawn Regularly (Accumulate)&quot; at every fixed moment brings it back or, if it is still there, drops an extra copy near it.</source>
        <translation>Was nach dem Aufheben passiert. „Don&apos;t Respawn“ (Standard): Das Objekt wird gelöscht. Sonst wird es nur versteckt und nicht kollidierbar gemacht: „Respawn Delay After Pickup“ bringt es „Respawn Delay“ Sekunden nach dem Aufheben zurück; „Respawn Regularly If Gone“ zum nächsten festen Respawn-Zeitpunkt; „Respawn Regularly (Accumulate)“ bringt es zu jedem festen Zeitpunkt zurück oder legt, falls es noch da ist, eine zusätzliche Kopie in seine Nähe.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Seconds (0.01–86400, default 15): the wait after pickup in &quot;Respawn Delay After Pickup&quot; mode, and the interval between the fixed respawn moments in the two regular modes.</source>
        <translation>Sekunden (0,01–86400, Standard 15): die Wartezeit nach dem Aufheben im Modus „Respawn Delay After Pickup“ und der Abstand zwischen den festen Respawn-Zeitpunkten in den beiden regelmäßigen Modi.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Seconds added to the start of the fixed respawn schedule in the two regular modes (moments = this + a random offset + multiples of &quot;Respawn Delay&quot;). Not used by &quot;Respawn Delay After Pickup&quot;.</source>
        <translation>Sekunden, die in den beiden regelmäßigen Modi zum Beginn des festen Respawn-Zeitplans addiert werden (Zeitpunkte = dieser Wert + ein zufälliger Versatz + Vielfache von „Respawn Delay“). Wird von „Respawn Delay After Pickup“ nicht verwendet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: seconds until the next respawn, set to &quot;Respawn Delay&quot; when the pickup starts and updated every frame. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: Sekunden bis zum nächsten Respawn, beim Start des Pickups auf „Respawn Delay“ gesetzt und jeden Frame aktualisiert. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: a random offset between 0 and &quot;Respawn Delay&quot; drawn when the pickup starts, so pickups with the same schedule do not all respawn at once. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: ein zufälliger Versatz zwischen 0 und „Respawn Delay“, der beim Start des Pickups gezogen wird, damit Pickups mit gleichem Zeitplan nicht alle gleichzeitig erscheinen. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: game time in seconds of the last respawn check, reset to 0 when the pickup starts. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: Spielzeit in Sekunden der letzten Respawn-Prüfung, beim Start des Pickups auf 0 gesetzt. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>X of the centre the particle moves around (used by the swirl particle). The particle system overwrites it with the emitter position when it creates the particle, so a value set here has no effect.</source>
        <translation>X des Mittelpunkts, um den sich das Partikel bewegt (von der Wirbel-Partikel-KI verwendet). Das Partikelsystem überschreibt ihn beim Erzeugen des Partikels mit der Emitterposition, ein hier gesetzter Wert wirkt also nicht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Y of the centre the particle moves around (used by the swirl particle). Overwritten with the emitter position when the particle system creates the particle.</source>
        <translation>Y des Mittelpunkts, um den sich das Partikel bewegt (von der Wirbel-Partikel-KI verwendet). Wird beim Erzeugen durch das Partikelsystem mit der Emitterposition überschrieben.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Height of the particle&apos;s centre. Overwritten with the emitter height when the particle system creates the particle; no particle AI reads it afterwards.</source>
        <translation>Höhe des Partikel-Mittelpunkts. Wird beim Erzeugen durch das Partikelsystem mit der Emitterhöhe überschrieben; danach liest keine Partikel-KI ihn.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1: the particle&apos;s animation frame follows its age, so the sequence plays once over the particle&apos;s lifetime (or at its own speed with &quot;Obey Sequence FPS&quot;). The particle system overwrites it with the &quot;Animated&quot; flag of the CParticleInfo entry.</source>
        <translation>1: Der Animationsframe des Partikels folgt seinem Alter, die Sequenz läuft also einmal über die Lebensdauer des Partikels (oder mit „Obey Sequence FPS“ in ihrer eigenen Geschwindigkeit). Das Partikelsystem überschreibt den Wert mit dem „Animated“-Schalter des CParticleInfo-Eintrags.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>With &quot;Animated&quot;: 1 plays the sequence at its own frame rate, looping; 0 stretches it over the particle&apos;s lifetime. Overwritten by the particle system from the CParticleInfo entry.</source>
        <translation>Mit „Animated“: 1 spielt die Sequenz in ihrer eigenen Bildrate in Schleife ab; 0 dehnt sie über die Lebensdauer des Partikels. Wird vom Partikelsystem aus dem CParticleInfo-Eintrag überschrieben.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Vertical squeeze of the swirl&apos;s circle (1 = the normal perspective oval). Overwritten by the particle system with the start point type&apos;s &quot;YX Ratio&quot; (1 without one); a 0 would divide by zero in the swirl.</source>
        <translation>Vertikale Stauchung des Wirbelkreises (1 = das normale Perspektiv-Oval). Wird vom Partikelsystem mit dem „YX Ratio“ des Startpunkt-Typs überschrieben (1 ohne einen); eine 0 würde im Wirbel durch null teilen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Downward acceleration of the particle (-100 to 100, default 9.8); multiplied by about 32.8 into world units per second². Negative values make particles rise.</source>
        <translation>Abwärtsbeschleunigung des Partikels (-100 bis 100, Standard 9,8); wird mit etwa 32,8 in Welteinheiten pro Sekunde² umgerechnet. Negative Werte lassen Partikel steigen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sound played when the particle comes back above the ground after a bounce. Empty: silent bounces.</source>
        <translation>Sound, der abgespielt wird, wenn das Partikel nach einem Aufprall wieder über dem Boden ist. Leer: lautlose Aufpralle.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1: the animation advances by the particle&apos;s horizontal speed (distance travelled divided by the sequence&apos;s frame rate) instead of by its age, so it stops animating when it stops moving.</source>
        <translation>1: Die Animation schreitet mit der horizontalen Geschwindigkeit des Partikels voran (zurückgelegte Strecke geteilt durch die Bildrate der Sequenz) statt mit seinem Alter; sie hält also an, wenn das Partikel stillsteht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: set by a bounce, cleared when the &quot;Bounce Sound&quot; is played. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: wird bei einem Aufprall gesetzt und gelöscht, wenn der „Bounce Sound“ abgespielt wird. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: &quot;Gravity&quot; converted to world units (times about 32.8), recomputed when the particle starts. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: „Gravity“ in Welteinheiten umgerechnet (mal etwa 32,8), wird beim Start des Partikels neu berechnet. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Speed at which the particle circles around its centre, stored in radians per second (the editor shows degrees; default 60°/s, range ±360°/s). Negative values turn the other way.</source>
        <translation>Geschwindigkeit, mit der das Partikel um seinen Mittelpunkt kreist, gespeichert in Radiant pro Sekunde (der Editor zeigt Grad; Standard 60°/s, Bereich ±360°/s). Negative Werte drehen andersherum.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Random spread (±, sign ignored) added to &quot;Angular Velocity&quot; for each particle when it starts; same units.</source>
        <translation>Zufällige Streuung (±, Vorzeichen egal), die beim Start jedes Partikels zu „Angular Velocity“ addiert wird; gleiche Einheiten.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Meant to turn the particle&apos;s velocity along with the swirl, but the code only sets the unchanged velocity again, so it has no visible effect.</source>
        <translation>Sollte die Geschwindigkeit des Partikels mit dem Wirbel mitdrehen, aber der Code setzt nur die unveränderte Geschwindigkeit erneut; es hat also keine sichtbare Wirkung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: this particle&apos;s actual angular velocity (&quot;Angular Velocity&quot; ± the variance), drawn when it starts. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: die tatsächliche Winkelgeschwindigkeit dieses Partikels („Angular Velocity“ ± Streuung), beim Start gezogen. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Envelope (degrees) for the random spread of the emission cone: each particle&apos;s angle from the cone axis is &quot;Inner Cone Angle&quot; plus a random value between 0 and this. Uses the start value, or the current value when the envelope has a change speed.</source>
        <translation>Hüllkurve (Grad) für die zufällige Streuung des Emissionskegels: Der Winkel jedes Partikels zur Kegelachse ist „Inner Cone Angle“ plus ein Zufallswert zwischen 0 und diesem Wert. Verwendet den Startwert oder, wenn die Hüllkurve eine Änderungsgeschwindigkeit hat, den aktuellen Wert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Envelope (degrees): the smallest angle between a particle&apos;s direction and the cone axis; &quot;Outer Cone Angle&quot; adds a random spread on top. 0 with no outer spread shoots all particles along the axis.</source>
        <translation>Hüllkurve (Grad): der kleinste Winkel zwischen der Richtung eines Partikels und der Kegelachse; „Outer Cone Angle“ addiert eine zufällige Streuung. 0 ohne äußere Streuung schießt alle Partikel entlang der Achse.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Envelope (degrees): horizontal direction the cone axis and the start shape point to; with &quot;Orient To Parent&apos;s Rotation&quot; it is added to the object&apos;s own facing.</source>
        <translation>Hüllkurve (Grad): horizontale Richtung, in die Kegelachse und Startform zeigen; mit „Orient To Parent&apos;s Rotation“ wird sie zur eigenen Blickrichtung des Objekts addiert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Envelope (degrees): vertical tilt of the cone axis (and the start shape), e.g. to shoot particles upwards or along the ground.</source>
        <translation>Hüllkurve (Grad): vertikale Neigung der Kegelachse (und der Startform), z. B. um Partikel nach oben oder am Boden entlang zu schießen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Bursts per second (default 1). The actual rate is redrawn from this ± &quot;Burst Frequency Variance&quot; at the start and after every emission; each burst emits the configured particles once.</source>
        <translation>Ausstöße pro Sekunde (Standard 1). Die tatsächliche Rate wird beim Start und nach jeder Emission aus diesem Wert ± „Burst Frequency Variance“ neu gezogen; jeder Ausstoß erzeugt die eingestellten Partikel einmal.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Random spread (± bursts per second) applied to &quot;Burst Frequency&quot; each time the rate is redrawn.</source>
        <translation>Zufällige Streuung (± Ausstöße pro Sekunde), die bei jedem Neuziehen der Rate auf „Burst Frequency“ angewendet wird.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Number of bursts after which the system switches itself off (&quot;Enabled&quot; 0); 0 = &quot;Don&apos;t Stop&quot;. A &quot;Particle System On&quot; message starts it again with a fresh count.</source>
        <translation>Anzahl der Ausstöße, nach denen sich das System selbst abschaltet („Enabled“ 0); 0 = „Don&apos;t Stop“. Eine Nachricht „Particle System On“ startet es mit neuer Zählung wieder.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Shape in which particles start around the emitter: point (default), line, disk, cylinder or sphere, each with its own size settings; its &quot;YX Ratio&quot; is also passed to the particles. Empty: all start at the emitter point.</source>
        <translation>Form, in der die Partikel um den Emitter starten: Punkt (Standard), Linie, Scheibe, Zylinder oder Kugel, jeweils mit eigenen Größeneinstellungen; deren „YX Ratio“ wird auch an die Partikel weitergegeben. Leer: Alle starten am Emitterpunkt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1: the position offsets, the emission direction and the particles&apos; facing turn with the object&apos;s facing angle; 0 (default): they are fixed in the world.</source>
        <translation>1: Positionsversatz, Emissionsrichtung und Blickrichtung der Partikel drehen sich mit dem Blickwinkel des Objekts; 0 (Standard): Sie sind in der Welt fest.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Horizontal offset of the emitter from the object&apos;s position, in pixels (-500 to 500).</source>
        <translation>Horizontaler Versatz des Emitters von der Position des Objekts, in Pixeln (-500 bis 500).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Vertical (screen y) offset of the emitter from the object&apos;s position, in pixels (-500 to 500).</source>
        <translation>Vertikaler Versatz (Bildschirm-y) des Emitters von der Position des Objekts, in Pixeln (-500 bis 500).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Height of the emitter above the ground in pixels (-500 to 500); for a game entity its own height is added unless the particles are children of the generator.</source>
        <translation>Höhe des Emitters über dem Boden in Pixeln (-500 bis 500); bei einem Spielobjekt wird dessen eigene Höhe addiert, außer die Partikel sind Kinder des Generators.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Envelope for the particles&apos; start speed in pixels per second; &quot;Speed Variance&quot; adds a random spread.</source>
        <translation>Hüllkurve für die Startgeschwindigkeit der Partikel in Pixeln pro Sekunde; „Speed Variance“ addiert eine zufällige Streuung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Random spread (± pixels per second, 0–1000) added to each particle&apos;s start speed.</source>
        <translation>Zufällige Streuung (± Pixel pro Sekunde, 0–1000), die zur Startgeschwindigkeit jedes Partikels addiert wird.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Envelope for the particles&apos; lifetime in seconds; &quot;Age Variance&quot; adds a random spread and the travel distance limits clamp it. A lifetime of 0 or less becomes 0.01 s.</source>
        <translation>Hüllkurve für die Lebensdauer der Partikel in Sekunden; „Age Variance“ addiert eine zufällige Streuung, und die Reichweitengrenzen begrenzen sie. Eine Lebensdauer von 0 oder weniger wird zu 0,01 s.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Random spread (± seconds, 0–100) added to each particle&apos;s lifetime.</source>
        <translation>Zufällige Streuung (± Sekunden, 0–100), die zur Lebensdauer jedes Partikels addiert wird.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Longest distance in pixels a particle may travel: its lifetime is shortened so that speed × lifetime does not exceed this (default 999999 = no limit).</source>
        <translation>Größte Strecke in Pixeln, die ein Partikel zurücklegen darf: Seine Lebensdauer wird so verkürzt, dass Geschwindigkeit × Lebensdauer diesen Wert nicht übersteigt (Standard 999999 = keine Grenze).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Shortest distance in pixels a particle travels: its lifetime is lengthened so that speed × lifetime reaches at least this (default 0 = no minimum).</source>
        <translation>Kürzeste Strecke in Pixeln, die ein Partikel zurücklegt: Seine Lebensdauer wird so verlängert, dass Geschwindigkeit × Lebensdauer mindestens diesen Wert erreicht (Standard 0 = kein Minimum).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1: each particle is created with the emitting object&apos;s top-most parent as its owner, like a shot fired by it (what that changes, e.g. who gets credited for damage, is assumed); 0: particles have no owner.</source>
        <translation>1: Jedes Partikel wird mit dem obersten Elternobjekt des Emitters als Besitzer erzeugt, wie ein von ihm abgefeuerter Schuss (was das ändert, z. B. wem Schaden zugerechnet wird, ist angenommen); 0: Partikel haben keinen Besitzer.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1: particles become children of the emitting object and move along with it; 0 (default): they are added to the layer and stay where they were emitted.</source>
        <translation>1: Partikel werden Kinder des Emitter-Objekts und bewegen sich mit ihm; 0 (Standard): Sie werden der Ebene hinzugefügt und bleiben, wo sie ausgestoßen wurden.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1: each new particle is swept once through the layer&apos;s collision along its path and its remaining lifetime is then set to 0.1 s (meant for particles that end at the first obstacle; whether the sweep moves the particle is assumed).</source>
        <translation>1: Jedes neue Partikel wird einmal entlang seiner Bahn durch die Kollision der Ebene geführt, danach wird seine Restlebensdauer auf 0,1 s gesetzt (gedacht für Partikel, die am ersten Hindernis enden; ob der Durchlauf das Partikel versetzt, ist angenommen).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>List of particle kinds (CParticleInfo: model, particle AI, animation flags, count ± variance per burst, collision flags). Every burst emits each entry; with an empty list nothing is emitted.</source>
        <translation>Liste der Partikelarten (CParticleInfo: Modell, Partikel-KI, Animationsschalter, Anzahl ± Streuung pro Ausstoß, Kollisionsschalter). Jeder Ausstoß erzeugt jeden Eintrag; mit leerer Liste wird nichts ausgestoßen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the bursts accumulated but not yet emitted (a fraction below 1 between bursts); set to a random value in [0, 1) at start so systems do not fire in sync. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: angesammelte, noch nicht ausgestoßene Ausstöße (ein Bruchteil unter 1 zwischen Ausstößen); beim Start auf einen Zufallswert in [0, 1) gesetzt, damit Systeme nicht gleichzeitig feuern. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the current burst rate (bursts per second, despite the unit label) drawn from &quot;Burst Frequency&quot; ± variance. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: die aktuelle Ausstoßrate (Ausstöße pro Sekunde, trotz der Einheitenbeschriftung), gezogen aus „Burst Frequency“ ± Streuung. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 (default): the system emits. 0: it stays silent until a &quot;Particle System On&quot; message; the system clears it itself on &quot;Particle System Off&quot; or when &quot;Num Bursts To Stop After&quot; is reached.</source>
        <translation>1 (Standard): Das System stößt aus. 0: Es bleibt still bis zu einer Nachricht „Particle System On“; das System setzt den Wert selbst bei „Particle System Off“ oder bei Erreichen von „Num Bursts To Stop After“ auf 0.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 (default): the system emits nothing while a game type is active that reports it should be off (a check of the game type, presumably &apos;multi-player&apos;); 0: it always runs.</source>
        <translation>1 (Standard): Das System stößt nichts aus, solange ein Spieltyp aktiv ist, der meldet, dass es aus sein soll (eine Prüfung des Spieltyps, vermutlich „Mehrspieler“); 0: Es läuft immer.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1: the sound from &quot;Sounds&quot; is picked by how many particles this emission produced relative to the maximum possible (more particles, later entry); 0 (default): picked at random.</source>
        <translation>1: Der Sound aus „Sounds“ wird danach gewählt, wie viele Partikel diese Emission im Verhältnis zum möglichen Maximum erzeugt hat (mehr Partikel, späterer Eintrag); 0 (Standard): zufällig gewählt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sounds of which one is played at the emitter after each frame in which bursts were emitted. Empty: silent.</source>
        <translation>Sounds, von denen nach jedem Frame mit Ausstößen einer am Emitter abgespielt wird. Leer: lautlos.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Embedded idle behaviour (with fidgets) the guard runs while standing at its post; the &quot;Idle&quot; sequence is started at normal speed each time idling begins.</source>
        <translation>Eingebettetes Leerlaufverhalten (mit Zappelanimationen), das der Wächter ausführt, während er an seinem Posten steht; die Sequenz „Idle“ wird bei jedem Leerlaufbeginn mit normaler Geschwindigkeit gestartet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Embedded move behaviour used to walk back to the post when the AI begins more than 5 pixels away from it; the figure walks (not runs), with this behaviour&apos;s Play Ratio as animation speed.</source>
        <translation>Eingebettetes Bewegungsverhalten, mit dem die Figur zum Posten zurückgeht, wenn die KI mehr als 5 Pixel davon entfernt startet; die Figur geht (rennt nicht), mit der „Play Ratio“ dieses Verhaltens als Animationsgeschwindigkeit.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: 1 while the guard walks back to its post; recomputed every time the AI begins. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: 1, solange der Wächter zu seinem Posten zurückgeht; wird bei jedem Start der KI neu berechnet. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time countdown in seconds: while above 0 it counts down and then restarts the guard behaviour. Nothing in the game sets it above 0, so a value set in a level only delays that restart; normally leave at 0.</source>
        <translation>Laufzeit-Countdown in Sekunden: Solange er über 0 liegt, wird heruntergezählt und danach das Wächterverhalten neu gestartet. Nichts im Spiel setzt ihn über 0, ein im Level gesetzter Wert verzögert also nur diesen Neustart; normalerweise auf 0 lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: seconds since idling began, counted up every frame but not used for anything else. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: Sekunden seit Beginn des Leerlaufs, wird jeden Frame hochgezählt, aber sonst nicht verwendet. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state without effect: only cleared when the AI begins and never set or read otherwise. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand ohne Wirkung: wird nur beim Start der KI gelöscht und sonst nie gesetzt oder gelesen. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Radius in pixels (default 200) of the oval around the figure&apos;s home point in which random patrol points are chosen (vertically squeezed by the perspective factor 0.71). After four unreachable points it picks one near itself towards the home point, and waits 1 s if that fails too.</source>
        <translation>Radius in Pixeln (Standard 200) des Ovals um den Heimatpunkt der Figur, in dem zufällige Patrouillenpunkte gewählt werden (vertikal um den Perspektivfaktor 0,71 gestaucht). Nach vier unerreichbaren Punkten wählt sie einen in ihrer Nähe Richtung Heimatpunkt und wartet 1 s, wenn auch das scheitert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved but unused: no code reads or writes it besides loading and saving.</source>
        <translation>Gespeichert, aber unbenutzt: Außer beim Laden und Speichern liest oder schreibt kein Code diesen Wert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Embedded move behaviour that walks the figure to each patrol point; its Play Ratio is the animation speed. The figure is set to walking (not running) when the AI begins.</source>
        <translation>Eingebettetes Bewegungsverhalten, das die Figur zu jedem Patrouillenpunkt laufen lässt; seine „Play Ratio“ ist die Animationsgeschwindigkeit. Beim Start der KI wird die Figur auf Gehen (nicht Rennen) gesetzt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: seconds left before a new patrol point is tried after no reachable point was found (set to 1). Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: verbleibende Sekunden, bis ein neuer Patrouillenpunkt versucht wird, nachdem kein erreichbarer Punkt gefunden wurde (auf 1 gesetzt). Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name of the level object whose polygon (at least 2 points) is the patrol path, looked up in the figure&apos;s layer when the AI begins. The points count relative to that object&apos;s position. Without a valid path the figure does nothing.</source>
        <translation>Name des Level-Objekts, dessen Polygon (mindestens 2 Punkte) der Patrouillenpfad ist; wird beim Start der KI in der Ebene der Figur gesucht. Die Punkte gelten relativ zur Position dieses Objekts. Ohne gültigen Pfad tut die Figur nichts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the path object found by &quot;Path Poly&quot;. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: das über „Path Poly“ gefundene Pfadobjekt. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>How the points are visited, starting at the point nearest to the figure: &quot;Back and forth&quot; (towards lower points first) and &quot;Forth and back&quot; (towards higher first) turn around at the ends and switch this value at run time; &quot;Loop&quot; starts again at the first point; &quot;Random&quot; picks any other point with a free way (up to five tries); &quot;Go To End&quot; stops at the last point.</source>
        <translation>Wie die Punkte besucht werden, beginnend beim der Figur nächstgelegenen Punkt: „Back and forth“ (zuerst zu niedrigeren Punkten) und „Forth and back“ (zuerst zu höheren) kehren an den Enden um und wechseln diesen Wert zur Laufzeit; „Loop“ beginnt wieder beim ersten Punkt; „Random“ wählt einen anderen Punkt mit freiem Weg (bis zu fünf Versuche); „Go To End“ hält am letzten Punkt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1: one more point at the end of the path is skipped. The polygon&apos;s last stored point is never visited anyway.</source>
        <translation>1: Am Ende des Pfads wird ein weiterer Punkt übersprungen. Der letzte gespeicherte Punkt des Polygons wird ohnehin nie angelaufen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run whenever the figure reaches an end of the path: turning around (&quot;Back and forth&quot;/&quot;Forth and back&quot;), starting a new round (&quot;Loop&quot;) or stopping (&quot;Go To End&quot;); never with &quot;Random&quot;. Empty: nothing.</source>
        <translation>Aktion, die ausgeführt wird, wenn die Figur ein Ende des Pfads erreicht: beim Umkehren („Back and forth“/„Forth and back“), bei einer neuen Runde („Loop“) oder beim Anhalten („Go To End“); nie bei „Random“. Leer: nichts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: seconds (0.5 after each new target) before a missed point may be aimed at again. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: Sekunden (0,5 nach jedem neuen Ziel), bevor ein verfehlter Punkt erneut angesteuert werden darf. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the path point to aim at again when the last move ended more than 10 pixels away from it. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: der Pfadpunkt, der erneut angesteuert wird, wenn die letzte Bewegung mehr als 10 Pixel davon entfernt endete. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: 1 while the figure is about to re-aim at &quot;Revise Point&quot;. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: 1, solange die Figur gleich erneut auf „Revise Point“ zielt. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: index of the path point the figure is heading for (-1 = finished in &quot;Go To End&quot;); recomputed as the nearest point when the AI begins. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: Index des Pfadpunkts, den die Figur ansteuert (-1 = fertig bei „Go To End“); wird beim Start der KI als nächstgelegener Punkt neu berechnet. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Embedded move behaviour that walks the figure from point to point; its Play Ratio is the animation speed. The figure is set to walking (not running) when the AI begins.</source>
        <translation>Eingebettetes Bewegungsverhalten, das die Figur von Punkt zu Punkt laufen lässt; seine „Play Ratio“ ist die Animationsgeschwindigkeit. Beim Start der KI wird die Figur auf Gehen (nicht Rennen) gesetzt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>One end of the sweep, in degrees relative to the direction the figure faced when the scan began (-360 to 360, default -45). The first sweep goes from that direction to &quot;Ending Angle&quot; (or to this angle with &quot;Start Counterclockwise&quot;), then the figure sweeps between both ends.</source>
        <translation>Ein Ende des Schwenks, in Grad relativ zur Richtung, in die die Figur zu Beginn des Schwenkens blickte (-360 bis 360, Standard -45). Der erste Schwenk geht von dieser Richtung zu „Ending Angle“ (bzw. mit „Start Counterclockwise“ zu diesem Winkel), danach schwenkt die Figur zwischen beiden Enden.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Other end of the sweep, in degrees relative to the starting facing (-360 to 360, default 45); the first sweep heads here unless &quot;Start Counterclockwise&quot; is set.</source>
        <translation>Anderes Ende des Schwenks, in Grad relativ zur Anfangsblickrichtung (-360 bis 360, Standard 45); der erste Schwenk geht hierhin, außer „Start Counterclockwise“ ist gesetzt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sweep speed in degrees per second (default 10); each sweep takes angle range / speed seconds and eases in and out. 0: the figure does not turn.</source>
        <translation>Schwenkgeschwindigkeit in Grad pro Sekunde (Standard 10); jeder Schwenk dauert Winkelbereich / Geschwindigkeit Sekunden und beschleunigt und bremst weich. 0: Die Figur dreht sich nicht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Seconds the figure pauses at each end of the sweep (default 0).</source>
        <translation>Sekunden, die die Figur an jedem Ende des Schwenks pausiert (Standard 0).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1: the scan begins with a pause of &quot;Time Between Turning&quot; before the first sweep (and the &quot;End Turn Action&quot; runs when that pause ends); 0 (default): it starts turning at once.</source>
        <translation>1: Das Schwenken beginnt mit einer Pause von „Time Between Turning“ vor dem ersten Schwenk (und die „End Turn Action“ läuft am Ende dieser Pause); 0 (Standard): Es beginnt sofort zu drehen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1: the first sweep goes towards &quot;Starting Angle&quot; instead of &quot;Ending Angle&quot;.</source>
        <translation>1: Der erste Schwenk geht zu „Starting Angle“ statt zu „Ending Angle“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Animation sequence (default &quot;Idle&quot;) started at frame 0 when the scan begins and played on in a loop at its own speed the whole time, also during pauses.</source>
        <translation>Animationssequenz (Standard „Idle“), die beim Beginn des Schwenkens bei Frame 0 gestartet und die ganze Zeit in ihrer eigenen Geschwindigkeit in Schleife weitergespielt wird, auch in Pausen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run when a pause at a sweep end is over: after every sweep with &quot;Execute Each Turn&quot;, otherwise after every second sweep (once per full back-and-forth). Empty: nothing.</source>
        <translation>Aktion, die ausgeführt wird, wenn eine Pause an einem Schwenkende vorbei ist: mit „Execute Each Turn“ nach jedem Schwenk, sonst nach jedem zweiten Schwenk (einmal pro vollem Hin und Her). Leer: nichts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1: &quot;End Turn Action&quot; runs after every sweep; 0 (default): only after every second sweep.</source>
        <translation>1: „End Turn Action“ läuft nach jedem Schwenk; 0 (Standard): nur nach jedem zweiten Schwenk.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 (default): every time the AI begins, the scan restarts from the figure&apos;s current facing. 0: only the first begin sets it up; later begins continue the old sweep around the original facing.</source>
        <translation>1 (Standard): Bei jedem Start der KI beginnt das Schwenken neu ab der aktuellen Blickrichtung der Figur. 0: Nur der erste Start richtet es ein; spätere Starts setzen den alten Schwenk um die ursprüngliche Blickrichtung fort.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: seconds left in the current pause, set from &quot;Time Between Turning&quot;. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: verbleibende Sekunden der aktuellen Pause, aus „Time Between Turning“ gesetzt. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the angle (degrees, relative to the starting facing) the current sweep starts from. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: der Winkel (Grad, relativ zur Anfangsblickrichtung), bei dem der aktuelle Schwenk beginnt. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the angle (degrees, relative to the starting facing) the current sweep heads for. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: der Winkel (Grad, relativ zur Anfangsblickrichtung), auf den der aktuelle Schwenk zuläuft. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: 1 during a pause between sweeps; set from &quot;Start Out Waiting&quot; when the scan begins. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: 1 während einer Pause zwischen Schwenks; beim Beginn des Schwenkens aus „Start Out Waiting“ gesetzt. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: flips after every finished sweep; without &quot;Execute Each Turn&quot; the &quot;End Turn Action&quot; only runs while it is 0. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: wechselt nach jedem beendeten Schwenk; ohne „Execute Each Turn“ läuft die „End Turn Action“ nur, wenn er 0 ist. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the figure&apos;s facing (radians) when the scan was set up; all sweep angles are relative to it. -999 (default) means not yet taken, so the first begin always sets the scan up; leave at -999 in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: die Blickrichtung der Figur (Radiant) beim Einrichten des Schwenkens; alle Schwenkwinkel sind relativ dazu. -999 (Standard) bedeutet noch nicht erfasst, sodass der erste Start das Schwenken immer einrichtet; im Level auf -999 lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: total seconds of the current sweep (angle range / &quot;Turning Speed&quot;). Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: Gesamtdauer des aktuellen Schwenks in Sekunden (Winkelbereich / „Turning Speed“). Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: seconds left in the current sweep. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: verbleibende Sekunden des aktuellen Schwenks. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name of the level object to follow, looked up in the figure&apos;s layer every time the AI begins. Without a match the follower stands still.</source>
        <translation>Name des zu folgenden Level-Objekts; wird bei jedem Start der KI in der Ebene der Figur gesucht. Ohne Treffer bleibt die Figur stehen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Embedded move behaviour aimed every frame at the spot beside the leader; its Play Ratio is the animation speed.</source>
        <translation>Eingebettetes Bewegungsverhalten, das jeden Frame auf die Stelle neben dem Anführer ausgerichtet wird; seine „Play Ratio“ ist die Animationsgeschwindigkeit.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Embedded turn behaviour: once the follower has reached its spot it turns to face the same way as the leader.</source>
        <translation>Eingebettetes Drehverhalten: Hat die Figur ihre Stelle erreicht, dreht sie sich in dieselbe Richtung wie der Anführer.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the leader object found by &quot;Leader Name&quot;; cleared when the leader dies or is deleted, after which the follower stops. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: das über „Leader Name“ gefundene Anführer-Objekt; wird gelöscht, wenn der Anführer stirbt oder entfernt wird, danach bleibt die Figur stehen. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>X of the follower&apos;s spot relative to the leader, in pixels in the leader&apos;s own turned frame (the spot turns with the leader). If X and Y are both 0 when the AI begins, the follower&apos;s current offset is taken; a value set in a level fixes the spot.</source>
        <translation>X der Stelle der Figur relativ zum Anführer, in Pixeln im mitgedrehten Bezugssystem des Anführers (die Stelle dreht sich mit ihm). Sind X und Y beim Start der KI beide 0, wird der aktuelle Abstand der Figur übernommen; ein im Level gesetzter Wert legt die Stelle fest.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Y of the follower&apos;s spot relative to the leader, in the leader&apos;s turned frame; see &quot;Relative Position X&quot; (both 0 = take the current offset at begin).</source>
        <translation>Y der Stelle der Figur relativ zum Anführer, im mitgedrehten Bezugssystem des Anführers; siehe „Relative Position X“ (beide 0 = beim Start den aktuellen Abstand übernehmen).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Share of incoming damage of the selected types the object actually takes, 0 to 1 (shown as %; default 1 = full damage, 0 = immune).</source>
        <translation>Anteil des eingehenden Schadens der gewählten Arten, den das Objekt tatsächlich erleidet, 0 bis 1 (als % angezeigt; Standard 1 = voller Schaden, 0 = immun).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Damage types that &quot;Damage To Take&quot; applies to (default all); damage of other types passes unchanged.</source>
        <translation>Schadensarten, auf die „Damage To Take“ angewendet wird (Standard alle); Schaden anderer Arten bleibt unverändert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Number of the player whose input this control AI follows (default 0, the first player); setting it also fetches that player&apos;s object from the world.</source>
        <translation>Nummer des Spielers, dessen Eingaben diese Steuer-KI folgt (Standard 0, der erste Spieler); beim Setzen wird auch das Spielerobjekt aus der Welt geholt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: set once the empty-weapon click has played, so it plays only once per trigger pull; cleared when firing stops. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: wird gesetzt, sobald das Klicken der leeren Waffe gespielt wurde, damit es pro Abzug nur einmal ertönt; wird beim Loslassen des Feuerns zurückgesetzt. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the object this point-of-interest AI put into its layer&apos;s update monitor list when it started. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: das Objekt, das diese Point-of-Interest-KI beim Start in die Update-Überwachungsliste ihrer Ebene eingetragen hat. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the save data of the layer whose update monitor list holds the object; set when the AI starts. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: die Speicherdaten der Ebene, deren Update-Überwachungsliste das Objekt enthält; wird beim Start der KI gesetzt. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: 1 while the object is in the layer&apos;s update monitor list; the AI takes it out again when it is deactivated. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: 1, solange das Objekt in der Update-Überwachungsliste der Ebene steht; beim Deaktivieren der KI wird es wieder entfernt. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The embedded move behaviour the pursuit uses to walk towards the target (its speed, path and move settings). About once per second it is re-aimed at the current target, or at the object itself when it has none; a move that finds no way sends a failed-target message so the owner gives up the target.</source>
        <translation>Das eingebettete Bewegungsverhalten, mit dem die Verfolgung zum Ziel läuft (Geschwindigkeit, Weg- und Bewegungseinstellungen). Etwa einmal pro Sekunde wird es neu auf das aktuelle Ziel ausgerichtet, ohne Ziel auf das Objekt selbst; findet die Bewegung keinen Weg, wird eine Fehlschlag-Nachricht gesendet, sodass der Besitzer das Ziel aufgibt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Animation play ratio handed to each new move. It is overwritten with the move behaviour&apos;s speed whenever that speed is above 0; if a move with it fails, the move is retried with 0.</source>
        <translation>Abspielverhältnis der Animation, das an jede neue Bewegung übergeben wird. Es wird mit der Geschwindigkeit des Bewegungsverhaltens überschrieben, sobald diese über 0 liegt; schlägt eine Bewegung damit fehl, wird sie mit 0 erneut versucht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: seconds until the move is re-aimed at the target (reset to 1 after each try, 0 at Begin and after a failed move). Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: Sekunden bis zur nächsten Neuausrichtung der Bewegung auf das Ziel (nach jedem Versuch auf 1, bei Begin und nach einer gescheiterten Bewegung auf 0). Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run when a CTriggerRelayAction names this object (the object must be active). The relay action&apos;s trigger and instigator are passed on to it.</source>
        <translation>Aktion, die ausgeführt wird, wenn eine CTriggerRelayAction dieses Objekt anspricht (das Objekt muss aktiv sein). Auslöser und Verursacher der Relay-Aktion werden weitergereicht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When set, the relay runs its &quot;Action&quot; only the first time; later relay calls are ignored.</source>
        <translation>Wenn gesetzt, führt das Relay seine „Action“ nur beim ersten Mal aus; spätere Relay-Aufrufe werden ignoriert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: set when the relay has run its action. Together with &quot;Trigger Only Once&quot; a 1 here blocks the relay from the start.</source>
        <translation>Gespeicherter Laufzeitzustand: wird gesetzt, wenn das Relay seine Aktion ausgeführt hat. Zusammen mit „Trigger Only Once“ sperrt eine 1 hier das Relay von Anfang an.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run again and again on a timer (trigger and instigator: the object holding the timer).</source>
        <translation>Aktion, die per Zeitgeber immer wieder ausgeführt wird (Auslöser und Verursacher: das Objekt mit dem Zeitgeber).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Average time in seconds between two runs of &quot;Action&quot; (at least 1/60 s; default 1).</source>
        <translation>Mittlere Zeit in Sekunden zwischen zwei Ausführungen von „Action“ (mindestens 1/60 s; Standard 1).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Random variation in seconds: each interval is picked at random between &quot;Delay Between Actions&quot; minus and plus this value (never below 1/60 s). Above 0 it also makes the first run come after a random time between 0 and delay plus this value; at 0 the first run happens on the first update.</source>
        <translation>Zufällige Abweichung in Sekunden: jedes Intervall wird zufällig zwischen „Delay Between Actions“ minus und plus diesem Wert gewählt (nie unter 1/60 s). Über 0 kommt außerdem die erste Ausführung nach einer Zufallszeit zwischen 0 und Verzögerung plus diesem Wert; bei 0 erfolgt sie beim ersten Update.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: seconds left until the next run of &quot;Action&quot;. It is recomputed when the timer starts, so a level value has no lasting effect; leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: verbleibende Sekunden bis zur nächsten Ausführung von „Action“. Wird beim Start des Zeitgebers neu berechnet, ein Wert im Level wirkt also nicht dauerhaft; unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>For an upper-body part that copies its parent&apos;s animation: when set, the part stays hidden while still following the parent&apos;s sequence and frame. In CPlayerWalkingItemAI and CPlayerWalkingWeaponAI the game sets this value itself every frame.</source>
        <translation>Für ein Oberkörper-Teil, das die Animation seines Elternobjekts übernimmt: wenn gesetzt, bleibt das Teil unsichtbar, folgt aber weiter Sequenz und Frame des Elternobjekts. Bei CPlayerWalkingItemAI und CPlayerWalkingWeaponAI setzt das Spiel diesen Wert jedes Frame selbst.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When set, the part always plays its own first sequence (only the frame follows the parent) instead of the parent&apos;s sequence of the same name. When unset and the part lacks the parent&apos;s current sequence, it is hidden.</source>
        <translation>Wenn gesetzt, spielt das Teil immer seine eigene erste Sequenz (nur der Frame folgt dem Elternobjekt) statt der gleichnamigen Sequenz des Elternobjekts. Ist es nicht gesetzt und fehlt dem Teil die aktuelle Sequenz des Elternobjekts, wird es ausgeblendet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Inventory category of the item this part shows (e.g. the hand-held item). The part is visible only while the character&apos;s current item of this category exists and is of &quot;Definition Index&quot;.</source>
        <translation>Inventarkategorie des Gegenstands, den dieses Teil zeigt (z. B. den gehaltenen Gegenstand). Das Teil ist nur sichtbar, solange der aktuelle Gegenstand der Figur in dieser Kategorie existiert und von „Definition Index“ ist.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Item definition (catalogue entry) the character&apos;s current item of &quot;Type Index&quot; must have for this part to be shown; otherwise it is hidden.</source>
        <translation>Gegenstandsdefinition (Katalogeintrag), die der aktuelle Gegenstand der Figur in „Type Index“ haben muss, damit dieses Teil gezeigt wird; sonst wird es ausgeblendet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Seconds the upper body keeps its shooting pose after the discharge sequence before it follows the legs again. Every shot sets it to 0.2, so it is mostly run-time state; a level value only delays the first follow.</source>
        <translation>Sekunden, die der Oberkörper nach der Schusssequenz in der Schusshaltung bleibt, bevor er wieder den Beinen folgt. Jeder Schuss setzt den Wert auf 0,2, er ist also überwiegend Laufzeitzustand; ein Wert im Level verzögert nur das erste Folgen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name of the upper body&apos;s shooting sequence; while it plays, the character counts as still shooting until its last frame. Every shot overwrites it with the weapon&apos;s discharge sequence (or &quot;Shoot1&quot;), so it is mostly run-time state.</source>
        <translation>Name der Schusssequenz des Oberkörpers; solange sie läuft, gilt die Figur bis zum letzten Frame als noch schießend. Jeder Schuss überschreibt den Wert mit der Schusssequenz der Waffe (oder „Shoot1“), er ist also überwiegend Laufzeitzustand.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Categories this object still collides with; objects of all other categories pass through it. Empty means nothing is blocked.</source>
        <translation>Kategorien, mit denen dieses Objekt weiterhin kollidiert; Objekte aller anderen Kategorien gehen hindurch. Leer bedeutet, dass nichts blockiert wird.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The AIs run one after another. Only the current one gets updates and messages; the series moves on when the current AI reports &quot;AI done&quot; (e.g. through a CSendAIDoneMessage), telling the old one to deactivate and beginning the next.</source>
        <translation>Die nacheinander ausgeführten KIs. Nur die aktuelle erhält Updates und Nachrichten; die Serie geht weiter, wenn die aktuelle KI „AI done“ meldet (z. B. über eine CSendAIDoneMessage), deaktiviert dann die alte und startet die nächste.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: index of the AI the series is at (0 = first). Begin resumes at this index unless the series is past its end or &quot;Restart Series Next Begin&quot; is set, so a level value starts the series at that entry.</source>
        <translation>Gespeicherter Laufzeitzustand: Index der KI, bei der die Serie steht (0 = erste). Begin setzt bei diesem Index fort, außer die Serie ist am Ende oder „Restart Series Next Begin“ ist gesetzt; ein Wert im Level startet die Serie also bei diesem Eintrag.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>What happens after the last AI: &quot;Repeat Series&quot; starts again with the first AI; &quot;Do Nothing&quot; (default) tells the object that this AI is done (so an enclosing series or temporary task can continue) and the series stays finished.</source>
        <translation>Was nach der letzten KI geschieht: „Repeat Series“ beginnt wieder mit der ersten KI; „Do Nothing“ (Standard) meldet dem Objekt, dass diese KI fertig ist (damit eine übergeordnete Serie oder temporäre Aufgabe weitermachen kann), und die Serie bleibt beendet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When set, every Begin of the series starts again with the first AI; otherwise it resumes with the AI it was at.</source>
        <translation>Wenn gesetzt, beginnt jeder Begin der Serie wieder mit der ersten KI; sonst wird mit der KI fortgesetzt, bei der sie stand.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the shield graphic object, created as a child of the character on the first hit from the shield item&apos;s &quot;Shield Gfx&quot; and forgotten when it dies or is deleted. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: das Schild-Grafikobjekt, das beim ersten Treffer aus „Shield Gfx“ des Schild-Gegenstands als Kind der Figur erzeugt und beim Sterben oder Löschen vergessen wird. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Damage type this shield blocks. It looks for the character&apos;s shield item of the same type; while that item has charge, damage of the type is absorbed completely and drained from the charge (more damage than charge left shuts the shield down). Other damage types pass unchanged.</source>
        <translation>Schadensart, die dieser Schild abblockt. Er sucht den Schild-Gegenstand der Figur mit derselben Art; solange dieser Ladung hat, wird Schaden dieser Art vollständig aufgefangen und von der Ladung abgezogen (mehr Schaden als Restladung schaltet den Schild ab). Andere Schadensarten gehen unverändert durch.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>AIs that all run at the same time: each gets Begin, updates, collisions and messages in list order; a message counts as handled when any of them handles it.</source>
        <translation>KIs, die alle gleichzeitig laufen: jede erhält Begin, Updates, Kollisionen und Nachrichten in Listenreihenfolge; eine Nachricht gilt als behandelt, wenn eine von ihnen sie behandelt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>AI the character runs while patrolling (the state at start and after losing a target); default CPatrolAreaAI. While patrolling the character also looks for targets.</source>
        <translation>KI, die die Figur beim Patrouillieren ausführt (Zustand beim Start und nach Zielverlust); Standard CPatrolAreaAI. Beim Patrouillieren sucht die Figur außerdem nach Zielen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run each time the character enters the patrol state (trigger and instigator: the character).</source>
        <translation>Aktion, die jedes Mal beim Wechsel in den Patrouillenzustand ausgeführt wird (Auslöser und Verursacher: die Figur).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run each time the character leaves the patrol state.</source>
        <translation>Aktion, die jedes Mal beim Verlassen des Patrouillenzustands ausgeführt wird.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When set, a patrolling character without a target makes whoever damaged it its target and goes to attack or pursue.</source>
        <translation>Wenn gesetzt, macht eine patrouillierende Figur ohne Ziel denjenigen zu ihrem Ziel, der ihr Schaden zugefügt hat, und geht zu Angriff oder Verfolgung über.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When set, the character keeps its target: it ignores failed-target messages, does not give up the pursuit for being too far from home, does not search for a new target while investigating, and investigates instead of patrolling when the target is gone during an attack.</source>
        <translation>Wenn gesetzt, behält die Figur ihr Ziel: sie ignoriert Fehlschlag-Nachrichten zum Ziel, bricht die Verfolgung nicht wegen zu großer Entfernung vom Ausgangspunkt ab, sucht beim Untersuchen kein neues Ziel und untersucht statt zu patrouillieren, wenn das Ziel während eines Angriffs verschwindet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Embedded target search: the sight radius in pixels, the categories the character targets and its angle of view. While patrolling it picks the closest visible object of these categories within the radius (vertical distances count about 1.4 times).</source>
        <translation>Eingebettete Zielsuche: Sichtradius in Pixeln, die Kategorien, auf die die Figur zielt, und ihr Blickwinkel. Beim Patrouillieren wählt sie das nächste sichtbare Objekt dieser Kategorien innerhalb des Radius (senkrechte Abstände zählen etwa 1,4-fach).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: set the first time the character acquires a target, which also plays its model&apos;s alert sound once. A 1 in a level suppresses that first sound.</source>
        <translation>Gespeicherter Laufzeitzustand: wird gesetzt, wenn die Figur zum ersten Mal ein Ziel erfasst; dabei spielt einmal der Alarmklang ihres Modells. Eine 1 im Level unterdrückt diesen ersten Klang.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Distance in pixels from its home position the character may pursue (default 500). Beyond it the pursuit is given up (back to patrol, &quot;Target Lost&quot;), unless &quot;Never Unacquire&quot; is set; targets further than this plus &quot;Max Dist&quot; from home are not picked up.</source>
        <translation>Entfernung in Pixeln vom Ausgangspunkt, bis zu der die Figur verfolgt (Standard 500). Darüber hinaus wird die Verfolgung abgebrochen (zurück zur Patrouille, „Target Lost“), außer „Never Unacquire“ ist gesetzt; Ziele weiter als dieser Wert plus „Max Dist“ vom Ausgangspunkt werden nicht erfasst.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>AI the character runs while pursuing a visible target that is further away than &quot;Max Dist&quot;.</source>
        <translation>KI, die die Figur ausführt, während sie ein sichtbares Ziel verfolgt, das weiter als „Max Dist“ entfernt ist.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run each time the character enters the pursue state.</source>
        <translation>Aktion, die jedes Mal beim Wechsel in den Verfolgungszustand ausgeführt wird.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run each time the character leaves the pursue state.</source>
        <translation>Aktion, die jedes Mal beim Verlassen des Verfolgungszustands ausgeführt wird.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>No effect: the game&apos;s code never reads this value; only &quot;Pursue/Max dist from home&quot; limits the character.</source>
        <translation>Ohne Wirkung: der Spielcode liest diesen Wert nie; nur „Pursue/Max dist from home“ begrenzt die Figur.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run each time the character leaves the investigate state.</source>
        <translation>Aktion, die jedes Mal beim Verlassen des Untersuchungszustands ausgeführt wird.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run each time the character enters the investigate state.</source>
        <translation>Aktion, die jedes Mal beim Wechsel in den Untersuchungszustand ausgeführt wird.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>AI the character runs while investigating: when it loses sight of its target during pursuit or attack. Default CChaseInvestigateAI; seeing the target within its view angle switches back to pursuit.</source>
        <translation>KI, die die Figur beim Untersuchen ausführt: wenn sie ihr Ziel während Verfolgung oder Angriff aus den Augen verliert. Standard CChaseInvestigateAI; sieht sie das Ziel wieder im Blickwinkel, wechselt sie zurück zur Verfolgung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Attack range in pixels (default 200; vertical distances count about 1.4 times): within it the character attacks, beyond it it pursues.</source>
        <translation>Angriffsreichweite in Pixeln (Standard 200; senkrechte Abstände zählen etwa 1,4-fach): innerhalb greift die Figur an, außerhalb verfolgt sie.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>AI the character runs while attacking a visible target within &quot;Max Dist&quot;; default CNormalAttackAI.</source>
        <translation>KI, die die Figur beim Angriff auf ein sichtbares Ziel innerhalb von „Max Dist“ ausführt; Standard CNormalAttackAI.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run each time the character enters the attack state.</source>
        <translation>Aktion, die jedes Mal beim Wechsel in den Angriffszustand ausgeführt wird.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run each time the character leaves the attack state.</source>
        <translation>Aktion, die jedes Mal beim Verlassen des Angriffszustands ausgeführt wird.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Health in percent (0–100, default 40) at or below which a hit runs &quot;Retreat Start Action&quot; once. The character does not change its state by itself; the action has to make it retreat.</source>
        <translation>Gesundheit in Prozent (0–100, Standard 40), bei der oder unter der ein Treffer einmalig „Retreat Start Action“ ausführt. Die Figur wechselt ihren Zustand nicht von selbst; die Aktion muss den Rückzug bewirken.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run once when a hit leaves the character at or below &quot;Retreat when&quot; percent health.</source>
        <translation>Aktion, die einmalig ausgeführt wird, wenn ein Treffer die Gesundheit der Figur auf oder unter „Retreat when“ Prozent senkt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: set when the retreat action has run. A 1 in a level prevents &quot;Retreat Start Action&quot; from ever running.</source>
        <translation>Gespeicherter Laufzeitzustand: wird gesetzt, wenn die Rückzugsaktion gelaufen ist. Eine 1 im Level verhindert, dass „Retreat Start Action“ je ausgeführt wird.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the current state (Patrol, Pursue, Attack, Retreat, Investigate). Begin always sets it to Patrol; leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: der aktuelle Zustand (Patrol, Pursue, Attack, Retreat, Investigate). Begin setzt ihn immer auf Patrol; im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>List of state transitions: each entry runs its action when the character changes from &quot;From State&quot; to &quot;To State&quot; (&quot;Any&quot; matches all; &quot;Target Acquired&quot; and &quot;Target Lost&quot; are extra events). &quot;Trigger&quot; decides whether it runs only the first time, every time, or once per new target.</source>
        <translation>Liste von Zustandsübergängen: jeder Eintrag führt seine Aktion aus, wenn die Figur von „From State“ zu „To State“ wechselt („Any“ passt auf alle; „Target Acquired“ und „Target Lost“ sind zusätzliche Ereignisse). „Trigger“ legt fest, ob er nur beim ersten Mal, jedes Mal oder einmal pro neuem Ziel läuft.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run when an object is spawned at this spawn point (trigger: the spawn point, instigator: the spawned object), after its facing has been set.</source>
        <translation>Aktion, die ausgeführt wird, wenn an diesem Spawnpunkt ein Objekt erscheint (Auslöser: der Spawnpunkt, Verursacher: das erschienene Objekt), nachdem seine Blickrichtung gesetzt wurde.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When set, an animated object spawned here is turned to &quot;Facing Angle&quot;; for the player character the movement controls take over that direction too.</source>
        <translation>Wenn gesetzt, wird ein hier erscheinendes animiertes Objekt auf „Facing Angle“ gedreht; bei der Spielerfigur übernimmt auch die Bewegungssteuerung diese Richtung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Direction in degrees (0–360, default 180) a spawned object faces when &quot;Set Facing Angle&quot; is set.</source>
        <translation>Richtung in Grad (0–360, Standard 180), in die ein erscheinendes Objekt blickt, wenn „Set Facing Angle“ gesetzt ist.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>AI that temporarily replaces the object&apos;s first AI and gets all its updates, collisions and messages. When it reports &quot;AI done&quot;, the original AI is put back. Must not be empty (the game does not check it).</source>
        <translation>KI, die vorübergehend die erste KI des Objekts ersetzt und alle Updates, Kollisionen und Nachrichten erhält. Meldet sie „AI done“, wird die ursprüngliche KI zurückgesetzt. Darf nicht leer sein (das Spiel prüft das nicht).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the object&apos;s original AI, kept aside while the temporary AI runs and restored afterwards. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: die ursprüngliche KI des Objekts, die während der temporären KI beiseitegelegt und danach wiederhergestellt wird. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When set, the restored original AI is not restarted (no Begin) after the temporary AI is done; it simply continues.</source>
        <translation>Wenn gesetzt, wird die wiederhergestellte ursprüngliche KI nach Ende der temporären KI nicht neu gestartet (kein Begin); sie läuft einfach weiter.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When set, the trigger fires its action only once; afterwards it stays inactive (a touching trigger stops checking altogether).</source>
        <translation>Wenn gesetzt, löst der Auslöser seine Aktion nur einmal aus; danach bleibt er inaktiv (ein Berührungs-Auslöser hört ganz auf zu prüfen).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: set when the trigger has fired. Together with &quot;Trigger Only Once&quot; a 1 here disables the trigger from the start.</source>
        <translation>Gespeicherter Laufzeitzustand: wird gesetzt, wenn der Auslöser ausgelöst hat. Zusammen mit „Trigger Only Once“ deaktiviert eine 1 hier den Auslöser von Anfang an.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Only matters when the trigger&apos;s own object is a switch (its model has a &quot;Switch&quot; or &quot;Switching&quot; sequence): then the trigger fires only while the switch stands in &quot;Idle&quot; or &quot;Switched&quot;, and flips it after firing. Default 1.</source>
        <translation>Nur wirksam, wenn das Objekt des Auslösers ein Schalter ist (sein Modell hat eine Sequenz „Switch“ oder „Switching“): dann löst er nur aus, solange der Schalter in „Idle“ oder „Switched“ steht, und legt ihn nach dem Auslösen um. Standard 1.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When set, a destructible object with no hit points left (e.g. a dead character) cannot set off the trigger, unless it matches &quot;Triggered By Name&quot;.</source>
        <translation>Wenn gesetzt, kann ein zerstörbares Objekt ohne verbleibende Trefferpunkte (z. B. eine tote Figur) den Auslöser nicht auslösen, außer es passt zu „Triggered By Name“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When set, any object can set off the trigger (subject to &quot;Trigge Must Have HP&quot;).</source>
        <translation>Wenn gesetzt, kann jedes Objekt den Auslöser auslösen (vorbehaltlich „Trigge Must Have HP“).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When set, objects of the player category can set off the trigger. Default 1.</source>
        <translation>Wenn gesetzt, können Objekte der Spieler-Kategorie den Auslöser auslösen. Standard 1.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When set, objects of the enemy category can set off the trigger.</source>
        <translation>Wenn gesetzt, können Objekte der Gegner-Kategorie den Auslöser auslösen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When set, projectiles (objects with a shot AI) can set off the trigger.</source>
        <translation>Wenn gesetzt, können Geschosse (Objekte mit einer Schuss-KI) den Auslöser auslösen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name of an object that can always set off the trigger (case ignored), regardless of the other &quot;Triggered By&quot; settings and the hit point check. Empty: no name check.</source>
        <translation>Name eines Objekts, das den Auslöser immer auslösen kann (Groß-/Kleinschreibung egal), unabhängig von den übrigen „Triggered By“-Einstellungen und der Trefferpunkt-Prüfung. Leer: keine Namensprüfung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run on every collision with an object the trigger allows (trigger: the trigger&apos;s object, instigator: the colliding object); there is no retrigger delay.</source>
        <translation>Aktion, die bei jeder Kollision mit einem vom Auslöser zugelassenen Objekt ausgeführt wird (Auslöser: das Objekt des Auslösers, Verursacher: das kollidierende Objekt); es gibt keine Wiederauslöse-Sperre.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run when an allowed object starts touching the trigger area (instigator: that object). Not run for an animated object within its first 4 updates after being placed or teleported.</source>
        <translation>Aktion, die ausgeführt wird, wenn ein zugelassenes Objekt beginnt, den Auslösebereich zu berühren (Verursacher: dieses Objekt). Nicht bei einem animierten Objekt in den ersten 4 Updates nach dem Platzieren oder Teleportieren.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run when no allowed object touches the trigger area any more (instigator: the object that touched it last).</source>
        <translation>Aktion, die ausgeführt wird, wenn kein zugelassenes Objekt den Auslösebereich mehr berührt (Verursacher: das zuletzt berührende Objekt).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run repeatedly every &quot;Repeat Every&quot; seconds while an object touches the trigger area; the first run comes right on entering.</source>
        <translation>Aktion, die alle „Repeat Every“ Sekunden wiederholt ausgeführt wird, solange ein Objekt den Auslösebereich berührt; die erste Ausführung erfolgt direkt beim Betreten.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Interval in seconds for &quot;Repeat Action&quot; while touching; 0 (default) switches the repeat off.</source>
        <translation>Intervall in Sekunden für „Repeat Action“ während der Berührung; 0 (Standard) schaltet die Wiederholung ab.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the object currently touching the trigger area. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: das Objekt, das den Auslösebereich gerade berührt. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the game time in seconds at which &quot;Repeat Action&quot; runs next. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: die Spielzeit in Sekunden, zu der „Repeat Action“ das nächste Mal läuft. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Horizontal radius in pixels of the oval trigger area around the object&apos;s centre (default 30).</source>
        <translation>Waagerechter Radius in Pixeln des ovalen Auslösebereichs um die Mitte des Objekts (Standard 30).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Height-to-width ratio of the oval: the vertical radius is &quot;X Radius&quot; times this value (default about 0.713, the game&apos;s ground perspective).</source>
        <translation>Verhältnis von Höhe zu Breite des Ovals: der senkrechte Radius ist „X Radius“ mal diesem Wert (Standard etwa 0,713, die Bodenperspektive des Spiels).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run when an allowed object collides with the trigger&apos;s object, unless the collision falls within the retrigger lock (then &quot;Action for Failed Retrigger&quot; runs instead).</source>
        <translation>Aktion, die ausgeführt wird, wenn ein zugelassenes Objekt mit dem Objekt des Auslösers kollidiert, außer die Kollision fällt in die Wiederauslöse-Sperre (dann läuft stattdessen „Action for Failed Retrigger“).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Lock time in seconds after a successful trigger (default 0.5): collisions within it run &quot;Action for Failed Retrigger&quot; instead of &quot;Action&quot;. 0 switches the lock off.</source>
        <translation>Sperrzeit in Sekunden nach einem erfolgreichen Auslösen (Standard 0,5): Kollisionen in dieser Zeit führen „Action for Failed Retrigger“ statt „Action“ aus. 0 schaltet die Sperre ab.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the game time in seconds of the last successful trigger, used for the retrigger lock. Leave at 0 in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: die Spielzeit in Sekunden des letzten erfolgreichen Auslösens, genutzt für die Wiederauslöse-Sperre. Im Level auf 0 lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>No effect: the game never reads this choice. The retrigger lock always uses one shared time for all objects, as &quot;All Objects&quot; (default) suggests; &quot;Each Object&quot; behaves the same.</source>
        <translation>Ohne Wirkung: das Spiel liest diese Auswahl nie. Die Wiederauslöse-Sperre nutzt immer eine gemeinsame Zeit für alle Objekte, wie „All Objects“ (Standard) nahelegt; „Each Object“ verhält sich genauso.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run instead of &quot;Action&quot; when an allowed object collides while the retrigger lock (&quot;Disallow Retrigger&quot;) is still running.</source>
        <translation>Aktion, die statt „Action“ ausgeführt wird, wenn ein zugelassenes Objekt kollidiert, während die Wiederauslöse-Sperre („Disallow Retrigger“) noch läuft.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Attack radius in pixels (1–640, default 200): the turret targets the nearest active object of &quot;Valid Targets&quot; within it that it has a free line of fire to (vertical distances count about 1.4 times). Works only on character objects.</source>
        <translation>Angriffsradius in Pixeln (1–640, Standard 200): das Geschütz zielt auf das nächste aktive Objekt aus „Valid Targets“ darin, zu dem es freie Schussbahn hat (senkrechte Abstände zählen etwa 1,4-fach). Wirkt nur auf Figuren-Objekten.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Pixels added to &quot;Start Attack&quot; while the turret has a target in sight (default 40), so a target must move this much further away before the turret stops.</source>
        <translation>Pixel, die zu „Start Attack“ addiert werden, solange das Geschütz ein Ziel im Blick hat (Standard 40); ein Ziel muss sich also so viel weiter entfernen, bevor das Geschütz aufhört.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Number of shots per burst (1–5, default 3), 0.2 seconds apart, each turning towards the target.</source>
        <translation>Anzahl der Schüsse pro Salve (1–5, Standard 3), im Abstand von 0,2 Sekunden, jeweils mit Drehung zum Ziel.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Pause in seconds before each burst (0–20, default 2).</source>
        <translation>Pause in Sekunden vor jeder Salve (0–20, Standard 2).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Categories the turret attacks (default Player).</source>
        <translation>Kategorien, die das Geschütz angreift (Standard Player).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Facing in degrees (0–360) the turret takes at start and when it deploys or folds back; it unfolds with &quot;Deploy&quot; into &quot;Shoot1&quot; to attack and plays &quot;Deploy&quot; backwards into &quot;Idle&quot; without a target.</source>
        <translation>Blickrichtung in Grad (0–360), die das Geschütz beim Start sowie beim Aus- und Einfahren einnimmt; zum Angriff fährt es mit „Deploy“ in „Shoot1“ aus, ohne Ziel spielt es „Deploy“ rückwärts nach „Idle“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: seconds until the turret looks for a target again (every 0.3 s). The editor shows &quot;Degrees&quot; as its unit, a mistake of the original. A level value only delays the first check.</source>
        <translation>Gespeicherter Laufzeitzustand: Sekunden, bis das Geschütz wieder nach einem Ziel sucht (alle 0,3 s). Der Editor zeigt „Degrees“ als Einheit, ein Fehler des Originals. Ein Wert im Level verzögert nur die erste Prüfung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Seconds (default 3) before the player can pick the auto gun up; the value counts down while the gun runs, so in a save game it is the time left.</source>
        <translation>Sekunden (Standard 3), bevor der Spieler das Auto-Geschütz aufheben kann; der Wert zählt herunter, solange das Geschütz läuft, im Spielstand ist er also die Restzeit.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Embedded pickup AI that handles picking up the auto gun by objects of the player category once &quot;PickupDelay&quot; is over.</source>
        <translation>Eingebettete Aufhebe-KI, die das Aufheben des Auto-Geschützes durch Objekte der Spieler-Kategorie übernimmt, sobald „PickupDelay“ abgelaufen ist.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Wait time in seconds (default 1); &quot;Done Action&quot; runs once when it has passed.</source>
        <translation>Wartezeit in Sekunden (Standard 1); „Done Action“ läuft einmal, wenn sie verstrichen ist.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: seconds left of the wait; Begin sets it to &quot;Time To Wait&quot;. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: verbleibende Sekunden der Wartezeit; Begin setzt sie auf „Time To Wait“. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run once when the wait is over (trigger and instigator: the object). Default: a CSendAIDoneMessage, which lets an enclosing series continue.</source>
        <translation>Aktion, die einmal ausgeführt wird, wenn die Wartezeit vorbei ist (Auslöser und Verursacher: das Objekt). Standard: eine CSendAIDoneMessage, damit eine übergeordnete Serie weitermacht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Entity behaviour (e.g. an animation) the object performs during the wait; it starts at Begin and gets every update. It only acts on animated objects.</source>
        <translation>Verhalten (z. B. eine Animation), das das Objekt während der Wartezeit ausführt; es startet bei Begin und erhält jedes Update. Wirkt nur auf animierte Objekte.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action tested on every update; while it succeeds, &quot;What to do while waiting&quot; runs. Empty counts as always true.</source>
        <translation>Aktion, die bei jedem Update geprüft wird; solange sie erfolgreich ist, läuft „What to do while waiting“. Leer gilt als immer wahr.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>AI that runs while the condition holds; it gets Begin, collisions, messages and the updates of the frames in which the condition succeeds.</source>
        <translation>KI, die läuft, solange die Bedingung gilt; sie erhält Begin, Kollisionen, Nachrichten und die Updates der Frames, in denen die Bedingung erfüllt ist.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run when the condition fails; it runs again on every update for as long as the condition keeps failing. Default: a CSendAIDoneMessage.</source>
        <translation>Aktion, die ausgeführt wird, wenn die Bedingung fehlschlägt; sie läuft bei jedem Update erneut, solange die Bedingung fehlschlägt. Standard: eine CSendAIDoneMessage.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Objects to activate (names, comma lists, &quot;$Trigger&quot;, &quot;$Instigator&quot; and the like). Only inactive objects are affected.</source>
        <translation>Zu aktivierende Objekte (Namen, Kommalisten, „$Trigger“, „$Instigator“ usw.). Betroffen sind nur inaktive Objekte.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When set, each activated object plays its model&apos;s activation sound.</source>
        <translation>Wenn gesetzt, spielt jedes aktivierte Objekt den Aktivierungsklang seines Modells.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Seconds between activating one target and the next when the name matches several objects (0 = all at once). The first is activated at once, the others are queued.</source>
        <translation>Sekunden zwischen der Aktivierung eines Ziels und des nächsten, wenn der Name mehrere Objekte trifft (0 = alle gleichzeitig). Das erste wird sofort aktiviert, die übrigen werden eingereiht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Optional behaviour (e.g. a warp-in effect) an activated animated object performs first; it runs as a temporary task, after which the object&apos;s own AI continues.</source>
        <translation>Optionales Verhalten (z. B. ein Einwarp-Effekt), das ein aktiviertes animiertes Objekt zuerst ausführt; es läuft als temporäre Aufgabe, danach setzt die eigene KI des Objekts fort.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Objects that get the AI (names, comma lists, &quot;$Trigger&quot;, &quot;$Instigator&quot; and the like).</source>
        <translation>Objekte, die die KI erhalten (Namen, Kommalisten, „$Trigger“, „$Instigator“ usw.).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>AI template; each target gets its own copy added to its AIs.</source>
        <translation>KI-Vorlage; jedes Ziel bekommt eine eigene Kopie zu seinen KIs hinzugefügt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Seconds between adding the AI to one target and the next when the name matches several objects (0 = all at once).</source>
        <translation>Sekunden zwischen dem Hinzufügen der KI zu einem Ziel und zum nächsten, wenn der Name mehrere Objekte trifft (0 = alle gleichzeitig).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Objects that get the effect (default &quot;$Instigator&quot;); only animated objects are affected.</source>
        <translation>Objekte, die den Effekt erhalten (Standard „$Instigator“); betroffen sind nur animierte Objekte.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sound played at each affected object; empty for none.</source>
        <translation>Klang, der an jedem betroffenen Objekt gespielt wird; leer für keinen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Behaviour template; each affected object gets a copy pushed onto its behaviour stack with priority 2 (e.g. a warp effect).</source>
        <translation>Verhaltensvorlage; jedes betroffene Objekt bekommt eine Kopie mit Priorität 2 auf seinen Verhaltensstapel gelegt (z. B. einen Warp-Effekt).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Objective added (as a copy) to the current mission. It is refused when its ID tag is already used; without a mission only a warning is given.</source>
        <translation>Missionsziel, das (als Kopie) der aktuellen Mission hinzugefügt wird. Es wird abgelehnt, wenn sein ID-Tag schon vergeben ist; ohne Mission gibt es nur eine Warnung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Objects that get the temporary task (names, comma lists, &quot;$Trigger&quot;, &quot;$Instigator&quot; and the like).</source>
        <translation>Objekte, die die temporäre Aufgabe erhalten (Namen, Kommalisten, „$Trigger“, „$Instigator“ usw.).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>AI template; each target gets a copy that replaces its first AI until the copy reports &quot;AI done&quot;, then the original AI is restored and restarted.</source>
        <translation>KI-Vorlage; jedes Ziel erhält eine Kopie, die seine erste KI ersetzt, bis die Kopie „AI done“ meldet; dann wird die ursprüngliche KI wiederhergestellt und neu gestartet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>In pixels per second (default 30).</source>
        <translation>In Pixeln pro Sekunde (Standard 30).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the index of the scene being played (0 = first); reset when the sequence starts. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: Index der gerade gespielten Szene (0 = erste); wird beim Start der Sequenz zurückgesetzt. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: where the sequence is (not playing, camera moving to a scene, in a scene, camera returning, returned); reset when the sequence starts. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: wo die Sequenz steht (nicht aktiv, Kamera fährt zur Szene, in der Szene, Kamera kehrt zurück, zurückgekehrt); wird beim Start der Sequenz zurückgesetzt. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name of the message sent to the objects in the area; empty sends nothing.</source>
        <translation>Name der Nachricht, die an die Objekte im Bereich gesendet wird; leer sendet nichts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>If the name matches several objects, each of them gets its own area; only active objects receive the message.</source>
        <translation>Trifft der Name mehrere Objekte, bekommt jedes seinen eigenen Bereich; nur aktive Objekte erhalten die Nachricht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Object(s) the call is about (default &quot;$Trigger&quot;). Original quirk: the call is always made by the object that triggered the action and against its current target; the name only has to match, and each match repeats the call. Without a target nobody answers.</source>
        <translation>Objekt(e), um die es beim Ruf geht (Standard „$Trigger“). Eigenheit des Originals: gerufen wird immer vom Objekt, das die Aktion ausgelöst hat, und gegen dessen aktuelles Ziel; der Name muss nur passen, und jeder Treffer wiederholt den Ruf. Ohne Ziel antwortet niemand.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Radius in pixels (default 500) of the oval around the caller; active objects in it that share a category with the caller get the call, and characters with &quot;Respond to calls for reinforcements&quot; may take on the caller&apos;s target.</source>
        <translation>Radius in Pixeln (Standard 500) des Ovals um den Rufer; aktive Objekte darin, die eine Kategorie mit dem Rufer teilen, erhalten den Ruf, und Figuren mit „Respond to calls for reinforcements“ können das Ziel des Rufers übernehmen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>No effect: the action hands the type to a sound function that does nothing in this version of the game.</source>
        <translation>Ohne Wirkung: die Aktion übergibt die Art an eine Klangfunktion, die in dieser Spielversion nichts tut.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Animated objects whose current sequence is checked (names, comma lists, &quot;$Trigger&quot; and the like); other objects are reported as wrong class. The check succeeds when any of them plays &quot;Animation&quot;.</source>
        <translation>Animierte Objekte, deren aktuelle Sequenz geprüft wird (Namen, Kommalisten, „$Trigger“ usw.); andere Objekte werden als falsche Klasse gemeldet. Die Prüfung ist erfolgreich, wenn eines davon „Animation“ spielt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sequence name to compare with; case, leading and trailing spaces and repeated spaces are ignored. Empty always fails.</source>
        <translation>Sequenzname zum Vergleich; Groß-/Kleinschreibung, führende und folgende sowie mehrfache Leerzeichen werden ignoriert. Leer schlägt immer fehl.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Objects to count (names, comma lists, &quot;$Trigger&quot; and the like); only active objects count.</source>
        <translation>Zu zählende Objekte (Namen, Kommalisten, „$Trigger“ usw.); nur aktive Objekte zählen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The check succeeds when at least this many active objects match (default 1).</source>
        <translation>Die Prüfung ist erfolgreich, wenn mindestens so viele aktive Objekte passen (Standard 1).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Item definition (catalogue entry) looked for in the inventory of the action&apos;s instigator, which must be an object with hit points.</source>
        <translation>Gegenstandsdefinition (Katalogeintrag), die im Inventar des Verursachers der Aktion gesucht wird; dieser muss ein Objekt mit Trefferpunkten sein.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>How many items of the definition are needed (default 1); CUseInventoryItemAction also uses up this many on success.</source>
        <translation>Wie viele Gegenstände der Definition nötig sind (Standard 1); CUseInventoryItemAction verbraucht bei Erfolg auch so viele.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Old field (formerly &quot;Succeed Action&quot;), still run when the check succeeds; use the result of the action (e.g. in a conditional action) instead. Hidden in CUseInventoryItemAction.</source>
        <translation>Altes Feld (früher „Succeed Action“), läuft weiterhin bei erfolgreicher Prüfung; stattdessen das Ergebnis der Aktion nutzen (z. B. in einer bedingten Aktion). In CUseInventoryItemAction ausgeblendet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Old field (formerly &quot;Fail Action&quot;), still run when the instigator lacks the items; use the result of the action instead. Hidden in CUseInventoryItemAction.</source>
        <translation>Altes Feld (früher „Fail Action“), läuft weiterhin, wenn dem Verursacher die Gegenstände fehlen; stattdessen das Ergebnis der Aktion nutzen. In CUseInventoryItemAction ausgeblendet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The condition: this action runs first; its result decides whether the second or the third action runs. Without it the whole action does nothing and fails.</source>
        <translation>Die Bedingung: Diese Aktion läuft zuerst; ihr Ergebnis entscheidet, ob die zweite oder die dritte Aktion läuft. Ohne sie tut die ganze Aktion nichts und schlägt fehl.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Runs when &quot;Try Action&quot; succeeded; its result becomes the result of the whole action. Empty: the action simply succeeds.</source>
        <translation>Läuft, wenn „Try Action“ erfolgreich war; ihr Ergebnis wird das Ergebnis der ganzen Aktion. Leer: Die Aktion ist einfach erfolgreich.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Runs when &quot;Try Action&quot; failed. The whole action then always counts as failed, whatever this action returns.</source>
        <translation>Läuft, wenn „Try Action“ fehlgeschlagen ist. Die ganze Aktion gilt dann immer als fehlgeschlagen, egal was diese Aktion zurückgibt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name of the object that receives the colour (hue remap). Names, comma lists, &quot;$Trigger&quot; and &quot;$Instigator&quot; work; it must resolve to exactly one object, otherwise nothing happens (no warning is printed).</source>
        <translation>Name des Objekts, das die Farbe (Farbton-Umfärbung) erhält. Namen, Kommalisten, „$Trigger“ und „$Instigator“ sind möglich; es muss genau ein Objekt ergeben, sonst passiert nichts (ohne Warnung).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name of the object whose colour (hue remap) is copied; default &quot;$Instigator&quot;. It must resolve to exactly one object that has a colour of its own, otherwise nothing happens. If the receiver already has a colour only its two hue values are copied; if it has none it gets a full copy, but the action then reports failure.</source>
        <translation>Name des Objekts, dessen Farbe (Farbton-Umfärbung) kopiert wird; Standard „$Instigator“. Es muss genau ein Objekt mit eigener Farbe ergeben, sonst passiert nichts. Hat der Empfänger schon eine Farbe, werden nur deren zwei Farbtonwerte kopiert; hat er keine, bekommt er eine vollständige Kopie, die Aktion meldet dann aber Fehlschlag.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>If the source object has no children, the object itself is used.</source>
        <translation>Hat das Quellobjekt keine Kinder, wird das Objekt selbst verwendet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Accepts names, comma lists, &quot;$Trigger&quot;/&quot;$Instigator&quot;; the new object is put into the layer of that location object. Default &quot;$Trigger&quot; (CCloneAction: empty).</source>
        <translation>Akzeptiert Namen, Kommalisten, „$Trigger“/„$Instigator“; das neue Objekt kommt in die Ebene dieses Orts-Objekts. Standard „$Trigger“ (CCloneAction: leer).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Scatter radius in pixels: when above 0, the new object is moved a random distance between 0 and this value in a random direction from its location (or from its own position when no location is given). 0 = no scattering.</source>
        <translation>Streuradius in Pixeln: Ist der Wert größer als 0, wird das neue Objekt um eine zufällige Strecke zwischen 0 und diesem Wert in zufälliger Richtung von seinem Ort (oder ohne Ort von seiner eigenen Position) verschoben. 0 = keine Streuung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Optional entity behaviour (usually CEntityBehaviorWarpEffect) that the new object plays as its appearance effect. If the created object is a plain entity that cannot animate, it is replaced by an animated copy so the effect can play. Old files with &quot;Warp In&quot; = non-zero get a warp behaviour here automatically.</source>
        <translation>Optionales Entity-Verhalten (meist CEntityBehaviorWarpEffect), das das neue Objekt als Erscheinungseffekt abspielt. Ist das erzeugte Objekt eine einfache, nicht animierbare Entity, wird es durch eine animierte Kopie ersetzt, damit der Effekt laufen kann. Alte Dateien mit „Warp In“ ungleich 0 bekommen hier automatisch ein Warp-Verhalten.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name of the object to copy (names, &quot;$Trigger&quot;, &quot;$Instigator&quot; work). It must resolve to exactly one object; otherwise a warning is printed and nothing is created. Without a &quot;New Location&quot; the copy appears where the source is.</source>
        <translation>Name des zu kopierenden Objekts („$Trigger“, „$Instigator“ möglich). Es muss genau ein Objekt ergeben; sonst wird eine Warnung ausgegeben und nichts erzeugt. Ohne „New Location“ erscheint die Kopie an der Stelle der Quelle.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name given to the copy, so later actions can address it. Empty: the copy has no name.</source>
        <translation>Name, den die Kopie erhält, damit spätere Aktionen sie ansprechen können. Leer: Die Kopie hat keinen Namen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When checked, an animated copy is turned to &quot;New Facing Angle&quot;; otherwise it keeps the source&apos;s direction. Ignored for objects that are not animated entities.</source>
        <translation>Wenn aktiviert, wird eine animierte Kopie auf „New Facing Angle“ gedreht; sonst behält sie die Richtung der Quelle. Wirkt nicht bei Objekten, die keine animierten Entities sind.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Direction the copy faces when &quot;Set Facing Angle&quot; is checked, in radians (0 to 2π; the editor shows degrees).</source>
        <translation>Blickrichtung der Kopie bei aktiviertem „Set Facing Angle“, in Bogenmaß (0 bis 2π; der Editor zeigt Grad).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The complete entity, configured here in place, of which a copy is created each time the action runs. Empty: nothing is created.</source>
        <translation>Die hier vollständig eingestellte Entity, von der bei jedem Ausführen eine Kopie erzeugt wird. Leer: Es wird nichts erzeugt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Model whose default entity is created (at least a CEntityBase), e.g. &quot;Items/Money/Ore deposit 1&quot;.</source>
        <translation>Modell, dessen Standard-Entity erzeugt wird (mindestens eine CEntityBase), z. B. „Items/Money/Ore deposit 1“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name given to the created entity, so later actions can address it. Empty: no name.</source>
        <translation>Name, den die erzeugte Entity erhält, damit spätere Aktionen sie ansprechen können. Leer: kein Name.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Objects to deactivate (names, comma lists, ranges like &quot;a#1-5#&quot;, &quot;$Trigger&quot;, &quot;$Instigator&quot;, &quot;$Touching&quot;). An inactive object is not drawn, does not collide and does nothing until activated again. Succeeds if at least one object was active.</source>
        <translation>Zu deaktivierende Objekte (Namen, Kommalisten, Bereiche wie „a#1-5#“, „$Trigger“, „$Instigator“, „$Touching“). Ein inaktives Objekt wird nicht gezeichnet, kollidiert nicht und tut nichts, bis es wieder aktiviert wird. Erfolgreich, wenn mindestens ein Objekt aktiv war.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The mission (CMission with its objectives) that becomes the current one. In the single-player quest game the previous mission is finished first; a copy is added unless its ID tag is already used (then a warning, the old mission stays current). The mission timer restarts.</source>
        <translation>Die Mission (CMission mit ihren Zielen), die zur aktuellen wird. Im Einzelspieler-Questspiel wird die vorige Mission zuerst abgeschlossen; eine Kopie wird hinzugefügt, außer ihre ID ist schon vergeben (dann Warnung, die alte Mission bleibt aktuell). Die Missionszeit beginnt neu.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Map names (as cached, e.g. &quot;ACT 2/M8/08 Pits Holding&quot;) whose saved state is kept in memory when the mission starts. Every other cached map except the current one is flushed (its state is written out and removed from the cache) unless it is already expired.</source>
        <translation>Kartennamen (wie im Cache, z. B. „ACT 2/M8/08 Pits Holding“), deren gespeicherter Zustand beim Missionsstart im Speicher bleibt. Alle anderen gecachten Karten außer der aktuellen werden geleert (ihr Zustand wird ausgelagert und aus dem Cache entfernt), sofern sie nicht schon abgelaufen sind.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The action to run later. A copy of it is queued in the layer each time this action runs, so it can be pending several times at once. The delay action itself always succeeds immediately.</source>
        <translation>Die später auszuführende Aktion. Bei jedem Ausführen wird eine Kopie davon in die Warteschlange der Ebene gestellt, sie kann also mehrfach gleichzeitig anstehen. Die Verzögerungsaktion selbst ist sofort erfolgreich.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Waiting time in seconds of game time before &quot;Next Action&quot; runs (default 1).</source>
        <translation>Wartezeit in Sekunden Spielzeit, bis „Next Action“ läuft (Standard 1).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Random variation in seconds: the actual delay is chosen at random between &quot;Delay&quot; minus and plus this value (never below 0). 0 = always exactly &quot;Delay&quot;.</source>
        <translation>Zufällige Abweichung in Sekunden: Die tatsächliche Verzögerung wird zufällig zwischen „Delay“ minus und plus diesem Wert gewählt (nie unter 0). 0 = immer genau „Delay“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When checked, the delayed action runs without the trigger (&quot;$Trigger&quot; and the triggering AI are empty then); only the instigator is passed on. Useful when the trigger may be gone by then.</source>
        <translation>Wenn aktiviert, läuft die verzögerte Aktion ohne Auslöser („$Trigger“ und die auslösende KI sind dann leer); nur der Verursacher („$Instigator“) wird weitergegeben. Nützlich, wenn der Auslöser bis dahin verschwunden sein kann.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Objects that are removed from the level at once (names, comma lists, ranges, &quot;$Trigger&quot;, &quot;$Instigator&quot;, &quot;$Touching&quot;), without damage or death effects. Succeeds if at least one object was found.</source>
        <translation>Objekte, die sofort aus dem Level entfernt werden (Namen, Kommalisten, Bereiche, „$Trigger“, „$Instigator“, „$Touching“), ohne Schaden oder Todeseffekte. Erfolgreich, wenn mindestens ein Objekt gefunden wurde.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>ID tag of the objective that is removed from the current mission (compared without regard to case). Without a current mission or a matching objective a warning is printed and the action fails.</source>
        <translation>ID des Ziels, das aus der aktuellen Mission entfernt wird (ohne Beachtung von Groß-/Kleinschreibung). Ohne aktuelle Mission oder passendes Ziel wird eine Warnung ausgegeben und die Aktion schlägt fehl.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Objects to kill: every destructable entity the name resolves to takes all its remaining hit points as &quot;Unavoidable&quot; damage from the instigator, so it dies with its normal death effects. Objects without hit points cause a warning.</source>
        <translation>Zu tötende Objekte: Jede zerstörbare Entity, die der Name ergibt, erhält alle verbleibenden Trefferpunkte als „Unavoidable“-Schaden vom Verursacher und stirbt mit ihren normalen Todeseffekten. Objekte ohne Trefferpunkte erzeugen eine Warnung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Dialogue script (an .RDS file of the mission, e.g. &quot;ACT 1/M7/Mission07&quot;) that contains the line to say.</source>
        <translation>Dialogskript (eine .RDS-Datei der Mission, z. B. „ACT 1/M7/Mission07“), das die zu sprechende Zeile enthält.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The line of the script to show. A text &quot;Speaker: text&quot; is split into speaker and text (speaker up to 19 characters); the voice file &quot;&lt;line name&gt;.wav&quot; plays when voice-overs are on.</source>
        <translation>Die anzuzeigende Zeile des Skripts. Ein Text „Sprecher: Text“ wird in Sprecher und Text geteilt (Sprecher bis 19 Zeichen); bei eingeschalteter Sprachausgabe läuft die Sprachdatei „&lt;Zeilenname&gt;.wav“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>How the line is shown: &quot;Window with pause&quot; opens the dialogue window with the speaker&apos;s portrait and pauses the game; &quot;Scroll no pause&quot; shows the text as a HUD message; &quot;Center Fade No Pause&quot; shows it as status text in the middle of the screen for 1.5 s.</source>
        <translation>Wie die Zeile gezeigt wird: „Window with pause“ öffnet das Dialogfenster mit dem Porträt des Sprechers und pausiert das Spiel; „Scroll no pause“ zeigt den Text als HUD-Meldung; „Center Fade No Pause“ zeigt ihn 1,5 s lang als Statustext in der Bildschirmmitte.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Multiplayer only, for the two no-pause display types: &quot;One Player&quot; sends the line only to the player of the instigator, &quot;All Players&quot; to everyone. Ignored in single player.</source>
        <translation>Nur im Mehrspielermodus, für die beiden Anzeigearten ohne Pause: „One Player“ schickt die Zeile nur an den Spieler des Verursachers, „All Players“ an alle. Im Einzelspieler ohne Wirkung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>While a cut-scene is being skipped it runs at once.</source>
        <translation>Wird gerade eine Zwischensequenz übersprungen, läuft sie sofort.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Item type that becomes discovered (known) in the player&apos;s inventory. It always affects the first player character, not the trigger. The item definition must have &quot;Must Be Discovered First&quot; set, otherwise a warning is printed and the action fails.</source>
        <translation>Gegenstandstyp, der im Inventar des Spielers als entdeckt (bekannt) gilt. Wirkt immer auf die erste Spielerfigur, nicht auf den Auslöser. Die Gegenstandsdefinition muss „Must Be Discovered First“ gesetzt haben, sonst wird eine Warnung ausgegeben und die Aktion schlägt fehl.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When checked, the item type is made undiscovered again instead of discovered.</source>
        <translation>Wenn aktiviert, wird der Gegenstandstyp wieder als unentdeckt markiert statt entdeckt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Text (translatable via Local.txt) shown in the mission-over window that this action opens, together with the current mission&apos;s statistics.</source>
        <translation>Text (über Local.txt übersetzbar), der im Missionsende-Fenster erscheint, das diese Aktion öffnet, zusammen mit den Statistiken der aktuellen Mission.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Text (translatable via Local.txt) handed to the game type&apos;s mission-failed handling, which shows it in the mission-over window; the default is a placeholder meant to be replaced.</source>
        <translation>Text (über Local.txt übersetzbar), der an die Missionsfehlschlag-Behandlung des Spieltyps geht, die ihn im Missionsende-Fenster zeigt; der Standard ist ein Platzhalter zum Ersetzen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Model of the pile in which the trigger character drops all its ore and crystals (default &quot;Ore_Crystals01&quot;). The pile is placed near the character (within 500 pixels). Only works when the trigger is a character carrying ore or crystals; the action always reports failure.</source>
        <translation>Modell des Haufens, in den die auslösende Figur all ihr Erz und ihre Kristalle fallen lässt (Standard „Ore_Crystals01“). Der Haufen wird in der Nähe der Figur abgelegt (innerhalb von 500 Pixeln). Wirkt nur, wenn der Auslöser eine Figur mit Erz oder Kristallen ist; die Aktion meldet immer Fehlschlag.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Optional action that runs additionally when the pile is picked up (touched); the pile then gives back the ore and crystals and removes itself.</source>
        <translation>Optionale Aktion, die zusätzlich läuft, wenn der Haufen aufgenommen (berührt) wird; der Haufen gibt dann Erz und Kristalle zurück und entfernt sich.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The built-in drop action (no settings of its own) that drops the selected item as a pickup. It is run with the trigger character&apos;s inventory pointed at the current item of the chosen category; afterwards the inventory selection is restored.</source>
        <translation>Die eingebaute Abwurfaktion (ohne eigene Einstellungen), die den gewählten Gegenstand als aufnehmbares Objekt fallen lässt. Sie läuft mit dem Inventar der auslösenden Figur auf den aktuellen Gegenstand der gewählten Kategorie gestellt; danach wird die Inventarauswahl wiederhergestellt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Item category (e.g. &quot;Primary&quot;, the default) whose currently selected item the trigger character drops. Only works when the trigger is a character with an inventory.</source>
        <translation>Gegenstandskategorie (z. B. „Primary“, Standard), deren aktuell gewählten Gegenstand die auslösende Figur fallen lässt. Wirkt nur, wenn der Auslöser eine Figur mit Inventar ist.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Map (path below &quot;Levels/&quot; without &quot;.zax&quot;, e.g. &quot;ACT 1/M7/07 Village Main&quot;) whose saved state is expired: it should not be visited again (loading it afterwards shows the &quot;Expired Error&quot; level), and pending other-map actions for it are dropped. Not possible for the map currently shown; unknown maps cause a warning and failure.</source>
        <translation>Karte (Pfad unter „Levels/“ ohne „.zax“, z. B. „ACT 1/M7/07 Village Main“), deren gespeicherter Zustand verfällt: Sie soll nicht mehr betreten werden (späteres Laden zeigt das Level „Expired Error“), anstehende Aktionen für diese Karte werden verworfen. Nicht möglich für die gerade angezeigte Karte; unbekannte Karten erzeugen Warnung und Fehlschlag.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Folder below &quot;Levels/&quot; (e.g. &quot;ACT 1/M6&quot;; trailing slashes are ignored) whose maps (*.zax) are all expired as by CExpireMapAction. Empty is refused with a warning; a folder without maps causes a warning and failure.</source>
        <translation>Ordner unter „Levels/“ (z. B. „ACT 1/M6“; abschließende Schrägstriche werden ignoriert), dessen Karten (*.zax) alle wie bei CExpireMapAction verfallen. Leer wird mit Warnung abgelehnt; ein Ordner ohne Karten erzeugt Warnung und Fehlschlag.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action that is run; whatever it returns, this action always reports failure. Empty: just fails.</source>
        <translation>Aktion, die ausgeführt wird; egal was sie zurückgibt, diese Aktion meldet immer Fehlschlag. Leer: schlägt einfach fehl.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Entities whose drawing height is changed (names, comma lists, &quot;$Trigger&quot; etc.); objects that are not entities are skipped.</source>
        <translation>Entities, deren Zeichenhöhe geändert wird (Namen, Kommalisten, „$Trigger“ usw.); Objekte, die keine Entities sind, werden übersprungen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>New height above the ground in pixels. The entity&apos;s ground position is moved by the difference at the same time, so it stays where it is drawn on screen; only its sorting and shadow position change.</source>
        <translation>Neue Höhe über dem Boden in Pixeln. Die Bodenposition der Entity wird gleichzeitig um die Differenz verschoben, sodass sie auf dem Bildschirm an derselben Stelle bleibt; nur Sortierung und Schattenposition ändern sich.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Switches to flip (animated entities). A switch standing in &quot;Idle&quot; plays &quot;Switching&quot; (or &quot;Switch&quot;) forwards and ends in &quot;Switched&quot;; one in &quot;Switched&quot; plays it backwards and ends in &quot;Idle&quot;. Switches in any other sequence, or whose model lacks these sequences, are left alone.</source>
        <translation>Umzulegende Schalter (animierte Entities). Ein Schalter in „Idle“ spielt „Switching“ (oder „Switch“) vorwärts und endet in „Switched“; einer in „Switched“ spielt es rückwärts und endet in „Idle“. Schalter in einer anderen Sequenz oder ohne diese Sequenzen im Modell bleiben unverändert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Map (path below &quot;Levels/&quot; without &quot;.zax&quot;) whose cached state is flushed: written out and removed from memory; it keeps its state and is reloaded from it on the next visit. Not possible for the map currently shown; unknown maps cause a warning and failure.</source>
        <translation>Karte (Pfad unter „Levels/“ ohne „.zax“), deren Cache-Zustand geleert wird: ausgelagert und aus dem Speicher entfernt; der Zustand bleibt erhalten und wird beim nächsten Besuch geladen. Nicht möglich für die gerade angezeigte Karte; unbekannte Karten erzeugen Warnung und Fehlschlag.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The object that receives the item; default &quot;$Instigator&quot;. It must resolve to exactly one entity with hit points, otherwise a warning is printed and nothing is given.</source>
        <translation>Das Objekt, das den Gegenstand erhält; Standard „$Instigator“. Es muss genau eine Entity mit Trefferpunkten ergeben, sonst wird eine Warnung ausgegeben und nichts übergeben.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The item, configured here in place, that is handed over. It must be of the same class as its definition&apos;s default item; otherwise a warning is printed and the action fails.</source>
        <translation>Der hier eingestellte Gegenstand, der übergeben wird. Er muss dieselbe Klasse haben wie der Standardgegenstand seiner Definition; sonst wird eine Warnung ausgegeben und die Aktion schlägt fehl.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Item type to give; the recipient gets the definition&apos;s default item (e.g. &quot;Ore Deposits&quot;, &quot;Key, Sun&quot;). A definition without a default item makes the action fail.</source>
        <translation>Zu gebender Gegenstandstyp; der Empfänger erhält den Standardgegenstand der Definition (z. B. „Ore Deposits“, „Key, Sun“). Eine Definition ohne Standardgegenstand lässt die Aktion fehlschlagen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Object whose player gets the points (default &quot;$Instigator&quot;); it must resolve to exactly one object controlled by a player, otherwise nothing happens. The action always succeeds.</source>
        <translation>Objekt, dessen Spieler die Punkte erhält (Standard „$Instigator“); es muss genau ein von einem Spieler gesteuertes Objekt ergeben, sonst passiert nichts. Die Aktion ist immer erfolgreich.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Number of points added to that player&apos;s multiplayer score (default 1; negative values subtract).</source>
        <translation>Anzahl Punkte, die zum Mehrspieler-Punktestand dieses Spielers addiert werden (Standard 1; negative Werte ziehen ab).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Object whose team gets one point in a team game (default &quot;$Instigator&quot;); it must resolve to exactly one object. In a game type without team scores nothing happens. The action always succeeds.</source>
        <translation>Objekt, dessen Team in einem Teamspiel einen Punkt erhält (Standard „$Instigator“); es muss genau ein Objekt ergeben. In einem Spieltyp ohne Teampunkte passiert nichts. Die Aktion ist immer erfolgreich.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The default (-1) addresses no team, so nothing happens until a team is chosen. Reaching the frag limit with the point ends the match.</source>
        <translation>Der Standard (-1) bezeichnet kein Team, es passiert also nichts, bis ein Team gewählt ist. Erreicht das Team mit dem Punkt das Frag-Limit, endet das Match.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Objects to check (names, comma lists, ranges, &quot;$Trigger&quot; etc.); only destructable entities count, others cause a warning.</source>
        <translation>Zu prüfende Objekte (Namen, Kommalisten, Bereiche, „$Trigger“ usw.); nur zerstörbare Entities zählen, andere erzeugen eine Warnung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Hit points an object must have left to count (default 100). Despite the name the object needs strictly more than this value; inactive objects never count.</source>
        <translation>Trefferpunkte, die ein Objekt noch haben muss, um zu zählen (Standard 100). Trotz des Namens braucht es echt mehr als diesen Wert; inaktive Objekte zählen nie.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The action succeeds when at least this many of the objects have enough health (default 1).</source>
        <translation>Die Aktion ist erfolgreich, wenn mindestens so viele der Objekte genug Gesundheit haben (Standard 1).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Objects to make invisible (names, comma lists, ranges, &quot;$Trigger&quot; etc.). They stay active and can still collide. Succeeds if at least one object was visible.</source>
        <translation>Unsichtbar zu machende Objekte (Namen, Kommalisten, Bereiche, „$Trigger“ usw.). Sie bleiben aktiv und können weiterhin kollidieren. Erfolgreich, wenn mindestens ein Objekt sichtbar war.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Runs when &quot;If&quot; succeeded; its result becomes the result of the whole action. Empty: the action simply succeeds.</source>
        <translation>Läuft, wenn „If“ erfolgreich war; ihr Ergebnis wird das Ergebnis der ganzen Aktion. Leer: Die Aktion ist einfach erfolgreich.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Runs when &quot;If&quot; failed. The whole action then always counts as failed, whatever this action returns.</source>
        <translation>Läuft, wenn „If“ fehlgeschlagen ist. Die ganze Aktion gilt dann immer als fehlgeschlagen, egal was diese Aktion zurückgibt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action that is run with a different trigger and instigator: &quot;$Trigger&quot; and &quot;$Instigator&quot; inside it then mean the objects named in &quot;Trigger&quot; and &quot;Instigator&quot;. Its result is passed on; empty: succeeds.</source>
        <translation>Aktion, die mit anderem Auslöser und Verursacher läuft: „$Trigger“ und „$Instigator“ bedeuten darin die in „Trigger“ und „Instigator“ genannten Objekte. Ihr Ergebnis wird weitergegeben; leer: erfolgreich.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name of the object that acts as trigger for &quot;Action&quot; (default &quot;$Trigger&quot; = unchanged). It must resolve to exactly one object; otherwise a warning is printed and the action runs without a trigger.</source>
        <translation>Name des Objekts, das für „Action“ als Auslöser gilt (Standard „$Trigger“ = unverändert). Es muss genau ein Objekt ergeben; sonst wird eine Warnung ausgegeben und die Aktion läuft ohne Auslöser.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name of the object that acts as instigator for &quot;Action&quot; (default &quot;$Instigator&quot; = unchanged). It must resolve to exactly one object; otherwise a warning is printed and the action runs without an instigator.</source>
        <translation>Name des Objekts, das für „Action“ als Verursacher gilt (Standard „$Instigator“ = unverändert). Es muss genau ein Objekt ergeben; sonst wird eine Warnung ausgegeben und die Aktion läuft ohne Verursacher.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Only works in the single-player quest game; elsewhere the action fails.</source>
        <translation>Wirkt nur im Einzelspieler-Questspiel; sonst schlägt die Aktion fehl.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>ID tag of the objective in the current mission that is counted up by one (for counting objectives such as &quot;5 Korbo Slaves&quot;). Afterwards the mission&apos;s completed action runs once all objectives are complete. Unknown tag or no mission: warning, failure.</source>
        <translation>ID des Ziels in der aktuellen Mission, das um eins hochgezählt wird (für Zählziele wie „5 Korbo Slaves“). Danach läuft die Abschlussaktion der Mission, sobald alle Ziele erfüllt sind. Unbekannte ID oder keine Mission: Warnung, Fehlschlag.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Objects to check (names, comma lists, ranges, &quot;$Trigger&quot; etc.). An object counts as alive when it is active and has hit points left (non-zero).</source>
        <translation>Zu prüfende Objekte (Namen, Kommalisten, Bereiche, „$Trigger“ usw.). Ein Objekt gilt als lebendig, wenn es aktiv ist und noch Trefferpunkte hat (ungleich 0).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The action succeeds when at least this many of the objects are alive (default 1).</source>
        <translation>Die Aktion ist erfolgreich, wenn mindestens so viele der Objekte leben (Standard 1).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Doors to test (animated entities; names, comma lists etc.). Succeeds if at least one of them currently stands in the sequence &quot;Closed&quot;.</source>
        <translation>Zu prüfende Türen (animierte Entities; Namen, Kommalisten usw.). Erfolgreich, wenn mindestens eine davon gerade in der Sequenz „Closed“ steht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Doors to test (animated entities). Succeeds if at least one of them has a door AI that is locked.</source>
        <translation>Zu prüfende Türen (animierte Entities). Erfolgreich, wenn mindestens eine davon eine verriegelte Tür-KI hat.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Doors to test (animated entities; names, comma lists etc.). Succeeds if at least one of them currently stands in the sequence &quot;Open&quot;.</source>
        <translation>Zu prüfende Türen (animierte Entities; Namen, Kommalisten usw.). Erfolgreich, wenn mindestens eine davon gerade in der Sequenz „Open“ steht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>ID tag of the objective in the current mission; the action succeeds when that objective is complete. Unknown tag or no mission: warning, failure.</source>
        <translation>ID des Ziels in der aktuellen Mission; die Aktion ist erfolgreich, wenn dieses Ziel erfüllt ist. Unbekannte ID oder keine Mission: Warnung, Fehlschlag.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>ID tag to look for; the action succeeds when the current mission has an objective with it (compared without regard to case). No warning when it is missing.</source>
        <translation>Gesuchte ID; die Aktion ist erfolgreich, wenn die aktuelle Mission ein Ziel damit hat (ohne Beachtung von Groß-/Kleinschreibung). Keine Warnung, wenn es fehlt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>First object (default &quot;$Instigator&quot;); it must resolve to exactly one object. The action succeeds when both objects have the same team number (neutral objects count as one team).</source>
        <translation>Erstes Objekt (Standard „$Instigator“); es muss genau ein Objekt ergeben. Die Aktion ist erfolgreich, wenn beide Objekte dieselbe Teamnummer haben (neutrale Objekte zählen als ein Team).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Second object (default &quot;$Trigger&quot;); it must resolve to exactly one object, otherwise the action fails.</source>
        <translation>Zweites Objekt (Standard „$Trigger“); es muss genau ein Objekt ergeben, sonst schlägt die Aktion fehl.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The action succeeds when the object&apos;s team number equals this value; the default &quot;Nutral&quot; (-1) tests for neutral objects.</source>
        <translation>Die Aktion ist erfolgreich, wenn die Teamnummer des Objekts diesem Wert entspricht; der Standard „Nutral“ (-1) prüft auf neutrale Objekte.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Object whose team is tested (default &quot;$Instigator&quot;); it must resolve to exactly one object, otherwise the action fails.</source>
        <translation>Objekt, dessen Team geprüft wird (Standard „$Instigator“); es muss genau ein Objekt ergeben, sonst schlägt die Aktion fehl.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Doors to lock (names, comma lists etc.); each gets the lock message, which its door AI handles. Succeeds if at least one door accepted it.</source>
        <translation>Zu verriegelnde Türen (Namen, Kommalisten usw.); jede erhält die Verriegeln-Nachricht, die ihre Tür-KI verarbeitet. Erfolgreich, wenn mindestens eine Tür sie angenommen hat.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>List of actions that all run one after the other in list order, with the same trigger and instigator. The whole action succeeds if at least one of them succeeded.</source>
        <translation>Liste von Aktionen, die alle nacheinander in Listenreihenfolge mit demselben Auslöser und Verursacher laufen. Die ganze Aktion ist erfolgreich, wenn mindestens eine davon erfolgreich war.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When checked, the list stops at the first action that fails (the remaining ones do not run). The AND action succeeds only if every action succeeded.</source>
        <translation>Wenn aktiviert, bricht die Liste bei der ersten fehlgeschlagenen Aktion ab (die restlichen laufen nicht). Die UND-Aktion ist nur erfolgreich, wenn alle Aktionen erfolgreich waren.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Spacing in seconds: the first action runs at once, copies of the others are queued so that the n-th runs n × this value later (default 1). The result is that of the first action.</source>
        <translation>Abstand in Sekunden: Die erste Aktion läuft sofort, Kopien der übrigen werden so eingereiht, dass die n-te n × diesen Wert später läuft (Standard 1). Das Ergebnis ist das der ersten Aktion.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When checked, the list stops at the first action that succeeds (the remaining ones do not run). The OR action succeeds if any action succeeded.</source>
        <translation>Wenn aktiviert, bricht die Liste bei der ersten erfolgreichen Aktion ab (die restlichen laufen nicht). Die ODER-Aktion ist erfolgreich, wenn irgendeine Aktion erfolgreich war.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>What happens when the series has run past its last action: &quot;Repeat Series&quot; starts again with the first, &quot;Repeat Last Action&quot; keeps running the last one, &quot;Do Nothing&quot; runs nothing more and fails.</source>
        <translation>Was passiert, wenn die Serie über ihre letzte Aktion hinaus ist: „Repeat Series“ beginnt wieder mit der ersten, „Repeat Last Action“ führt immer wieder die letzte aus, „Do Nothing“ führt nichts mehr aus und schlägt fehl.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When checked (default), the series moves on to the next action only after the current one succeeded; a failed action is tried again next time. Unchecked: every run advances.</source>
        <translation>Wenn aktiviert (Standard), geht die Serie erst zur nächsten Aktion, wenn die aktuelle erfolgreich war; eine fehlgeschlagene wird beim nächsten Mal erneut versucht. Deaktiviert: Jeder Durchlauf rückt weiter.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the 0-based index of the action the series runs next. Leave it at 0 in a level; another value starts the series at that action.</source>
        <translation>Gespeicherter Laufzeitzustand: der nullbasierte Index der Aktion, die die Serie als Nächstes ausführt. Im Level auf 0 lassen; ein anderer Wert lässt die Serie bei dieser Aktion beginnen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When checked, the list stops as soon as a second action succeeds (the XOR then fails at once). The XOR action succeeds only if exactly one action succeeded.</source>
        <translation>Wenn aktiviert, bricht die Liste ab, sobald eine zweite Aktion erfolgreich ist (das XOR schlägt dann sofort fehl). Die XOR-Aktion ist nur erfolgreich, wenn genau eine Aktion erfolgreich war.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action whose result is inverted: success becomes failure and vice versa. Empty: the NOT action succeeds.</source>
        <translation>Aktion, deren Ergebnis umgekehrt wird: Erfolg wird Fehlschlag und umgekehrt. Leer: Die NOT-Aktion ist erfolgreich.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Entities whose drawing order is shifted (names, comma lists, &quot;$Trigger&quot; etc.); objects that are not entities are skipped.</source>
        <translation>Entities, deren Zeichenreihenfolge verschoben wird (Namen, Kommalisten, „$Trigger“ usw.); Objekte, die keine Entities sind, werden übersprungen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Pixels added to the sorting line (Y sort) that decides which objects are drawn in front. Note: it changes the entity&apos;s model, so every entity using the same model is affected, and the offset adds up each time the action runs (use a negative value to undo).</source>
        <translation>Pixel, die zur Sortierlinie (Y-Sortierung) addiert werden, die bestimmt, welche Objekte davor gezeichnet werden. Achtung: Es ändert das Modell der Entity, betrifft also alle Entities mit demselben Modell, und der Versatz summiert sich bei jedem Ausführen (mit negativem Wert rückgängig machen).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action that runs only the first time; it is then deleted from this object (and is missing in a save game). Later runs do nothing and fail.</source>
        <translation>Aktion, die nur beim ersten Mal läuft; danach wird sie aus diesem Objekt gelöscht (und fehlt auch im Spielstand). Spätere Aufrufe tun nichts und schlagen fehl.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action that runs at most once per &quot;Min Time&quot;; its result is passed on.</source>
        <translation>Aktion, die höchstens einmal pro „Min Time“ läuft; ihr Ergebnis wird weitergegeben.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Minimum time in seconds of game time between two runs of &quot;Action&quot; (default 5).</source>
        <translation>Mindestzeit in Sekunden Spielzeit zwischen zwei Ausführungen von „Action“ (Standard 5).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the game time (seconds) from which &quot;Action&quot; may run again; leave it at 0 in a level (0 always allows).</source>
        <translation>Gespeicherter Laufzeitzustand: die Spielzeit (Sekunden), ab der „Action“ wieder laufen darf; im Level auf 0 lassen (0 erlaubt immer).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Optional action that runs instead when the action is triggered again too early; the whole action then fails.</source>
        <translation>Optionale Aktion, die stattdessen läuft, wenn die Aktion zu früh erneut ausgelöst wird; die ganze Aktion schlägt dann fehl.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action that is stored and runs when the player next enters the map &quot;Other Map Name&quot; (without trigger or instigator). Several can be pending for one map.</source>
        <translation>Aktion, die gespeichert wird und läuft, wenn der Spieler die Karte „Other Map Name“ das nächste Mal betritt (ohne Auslöser oder Verursacher). Für eine Karte können mehrere anstehen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Map for which &quot;Action&quot; is stored: path below &quot;Levels/&quot; without &quot;.zax&quot; (e.g. &quot;Inside Ship&quot;, &quot;ACT 2/M8/08 Pits Holding&quot;; case does not matter, backslashes are corrected with a warning). An empty or unknown name causes a warning and failure.</source>
        <translation>Karte, für die „Action“ gespeichert wird: Pfad unter „Levels/“ ohne „.zax“ (z. B. „Inside Ship“, „ACT 2/M8/08 Pits Holding“; Groß-/Kleinschreibung egal, Backslashes werden mit Warnung korrigiert). Ein leerer oder unbekannter Name erzeugt Warnung und Fehlschlag.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Damage dealt to each target, in hit points (default 1).</source>
        <translation>Schaden, der jedem Ziel zugefügt wird, in Trefferpunkten (Standard 1).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Damage type passed with the hit (e.g. &quot;Normal&quot;, &quot;Unavoidable&quot;); how the target reacts (e.g. a matching shield) depends on it.</source>
        <translation>Schadensart, die mit dem Treffer übergeben wird (z. B. „Normal“, „Unavoidable“); davon hängt ab, wie das Ziel reagiert (z. B. ein passender Schild).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sound played at each damaged target.</source>
        <translation>Sound, der an jedem beschädigten Ziel abgespielt wird.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Objects that take the damage (default &quot;$Instigator&quot;; names, comma lists, ranges, &quot;$Touching&quot; work). Only destructable entities are hurt; the damage counts as coming from the instigator. Always succeeds.</source>
        <translation>Objekte, die den Schaden erhalten (Standard „$Instigator“; Namen, Kommalisten, Bereiche, „$Touching“ möglich). Nur zerstörbare Entities werden verletzt; der Schaden gilt als vom Verursacher kommend. Immer erfolgreich.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name of the sequence to play once on each target (e.g. &quot;Death&quot;, &quot;switch&quot;). Targets whose model lacks the sequence do not play anything.</source>
        <translation>Name der Sequenz, die auf jedem Ziel einmal abgespielt wird (z. B. „Death“, „switch“). Ziele, deren Modell die Sequenz nicht hat, spielen nichts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Animated entities that play the animation (names, comma lists, ranges, &quot;$Trigger&quot; etc.); other objects cause a warning.</source>
        <translation>Animierte Entities, die die Animation abspielen (Namen, Kommalisten, Bereiche, „$Trigger“ usw.); andere Objekte erzeugen eine Warnung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>What the entity shows after the animation: &quot;Stop on last frame&quot; holds its last frame, &quot;Return to First Frame&quot; goes back to its first frame, &quot;Previous Sequence&quot; returns to the sequence it had before, &quot;Set Sequence&quot; switches to &quot;End Sequence Name&quot;.</source>
        <translation>Was die Entity nach der Animation zeigt: „Stop on last frame“ hält das letzte Bild, „Return to First Frame“ springt auf das erste Bild zurück, „Previous Sequence“ kehrt zur vorherigen Sequenz zurück, „Set Sequence“ wechselt zu „End Sequence Name“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sequence the entity switches to after the animation; only used when &quot;When Done&quot; is &quot;Set Sequence&quot; (default &quot;Idle&quot;).</source>
        <translation>Sequenz, zu der die Entity nach der Animation wechselt; nur bei „When Done“ = „Set Sequence“ verwendet (Standard „Idle“).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>With several targets: seconds between the start on one target and the next (the first starts at once). 0 = all at the same time.</source>
        <translation>Bei mehreren Zielen: Sekunden zwischen dem Start auf einem Ziel und dem nächsten (das erste startet sofort). 0 = alle gleichzeitig.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When checked, the animation plays backwards, from its last frame to its first.</source>
        <translation>Wenn aktiviert, läuft die Animation rückwärts, vom letzten zum ersten Bild.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sound to play.</source>
        <translation>Abzuspielender Sound.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Object at which the sound plays (default &quot;$Trigger&quot;), so its volume depends on the distance. If the name resolves to no single object (a warning is printed), the sound plays for the whole level without position.</source>
        <translation>Objekt, an dem der Sound spielt (Standard „$Trigger“), seine Lautstärke hängt also von der Entfernung ab. Ergibt der Name kein einzelnes Objekt (es wird eine Warnung ausgegeben), spielt der Sound ohne Position für das ganze Level.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Voice-over recording to play on the voice-over channel; only when voice-overs are switched on in the options. Other sounds are lowered while it plays; it does not interrupt a voice-over of higher priority. The action fails when nothing was played.</source>
        <translation>Sprachaufnahme, die auf dem Sprachausgabe-Kanal abgespielt wird; nur wenn die Sprachausgabe in den Optionen eingeschaltet ist. Andere Sounds werden währenddessen leiser; eine Sprachausgabe höherer Priorität wird nicht unterbrochen. Die Aktion schlägt fehl, wenn nichts abgespielt wurde.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Offset in pixels along the direction the object faces (aiming angle for animated entities), e.g. the muzzle distance in front of a character. Formerly &quot;Arm Length&quot;.</source>
        <translation>Versatz in Pixeln in Blickrichtung des Objekts (Zielwinkel bei animierten Entities), z. B. der Abstand der Mündung vor einer Figur. Früher „Arm Length“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Offset in pixels sideways to the facing direction (vertical parts squeezed by the isometric view ratio). Formerly &quot;Sholder Width&quot;.</source>
        <translation>Versatz in Pixeln quer zur Blickrichtung (senkrechte Anteile durch das Seitenverhältnis der isometrischen Ansicht gestaucht). Früher „Sholder Width“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Height in pixels above the object&apos;s ground: added to the height of fired projectiles, and used to raise the test point when looking up the surface type. Formerly &quot;Gun Height&quot;.</source>
        <translation>Höhe in Pixeln über dem Boden des Objekts: wird zur Höhe abgefeuerter Geschosse addiert und hebt beim Ermitteln der Oberflächenart den Prüfpunkt an. Früher „Gun Height“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Elevation of the shot in radians: the projectile&apos;s speed is split into a horizontal part (cosine) and an upward part (sine). 0 = flat.</source>
        <translation>Erhebungswinkel des Schusses in Bogenmaß: Die Geschwindigkeit des Geschosses wird in einen waagerechten (Kosinus) und einen aufwärts gerichteten Anteil (Sinus) geteilt. 0 = flach.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When checked (default), the character remembers this muzzle position and the weapon&apos;s shoot sequence as its discharge point, which its aiming behaviours use to point the weapon at targets.</source>
        <translation>Wenn aktiviert (Standard), merkt sich die Figur diese Mündungsposition und die Schusssequenz der Waffe als Abschusspunkt, den ihre Zielverhalten verwenden, um die Waffe auf Ziele zu richten.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Which weapon fires: checked (default) the current item of the &quot;Primary&quot; category, unchecked the current &quot;Secondary&quot; item of the character&apos;s inventory.</source>
        <translation>Welche Waffe feuert: aktiviert (Standard) der aktuelle Gegenstand der Kategorie „Primary“, deaktiviert der aktuelle „Secondary“-Gegenstand im Inventar der Figur.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sound played when the surface type at the test point has no entry in &quot;Specializations&quot;.</source>
        <translation>Sound, der gespielt wird, wenn die Oberflächenart am Prüfpunkt keinen Eintrag in „Specializations“ hat.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>List of surface type / sound pairs: the first entry whose surface type matches the ground at the test point (the position fields relative to the object) supplies the sound, e.g. different footstep sounds on sand and metal.</source>
        <translation>Liste von Paaren aus Oberflächenart und Sound: Der erste Eintrag, dessen Oberflächenart zum Boden am Prüfpunkt (die Positionsfelder relativ zum Objekt) passt, liefert den Sound, z. B. verschiedene Schrittgeräusche auf Sand und Metall.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Object at which the test point is measured and the sound plays (default &quot;$Trigger&quot;). If it resolves to no single object, nothing plays.</source>
        <translation>Objekt, an dem der Prüfpunkt gemessen und der Sound gespielt wird (Standard „$Trigger“). Ergibt es kein einzelnes Objekt, wird nichts gespielt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Message shown on screen (translatable via Local.txt).</source>
        <translation>Auf dem Bildschirm angezeigte Meldung (über Local.txt übersetzbar).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Kind of HUD message: &quot;Debug&quot;, &quot;Ship&quot; (default), &quot;Zax&quot;, &quot;OM&quot; or &quot;Other&quot; (index 0-4 passed to the HUD&apos;s message display); assumed to select the message&apos;s look, e.g. by speaker.</source>
        <translation>Art der HUD-Meldung: „Debug“, „Ship“ (Standard), „Zax“, „OM“ oder „Other“ (Index 0-4 an die Meldungsanzeige des HUD); vermutlich wählt er das Aussehen der Meldung, z. B. nach Sprecher.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Characters whose shield is recharged (default &quot;$Instigator&quot;); other objects are skipped.</source>
        <translation>Figuren, deren Schild aufgeladen wird (Standard „$Instigator“); andere Objekte werden übersprungen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Only the first shield item (in the &quot;Shield&quot; category) protecting against this damage type and not yet full is recharged.</source>
        <translation>Nur der erste Schild-Gegenstand (Kategorie „Shield“), der gegen diese Schadensart schützt und noch nicht voll ist, wird aufgeladen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Charge added as a percentage of the shield&apos;s maximum charge (default 1 %); only used when &quot;Recharge Uints&quot; is 0. For the player the amount is scaled by the world settings.</source>
        <translation>Hinzugefügte Ladung in Prozent der maximalen Schildladung (Standard 1 %); nur verwendet, wenn „Recharge Uints“ 0 ist. Beim Spieler wird die Menge über die Welteinstellungen skaliert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Fixed amount of charge (energy units, MJ) added to the shield; 0 (default) uses &quot;Recharge Percent&quot; instead. For the player the amount is scaled by the world settings.</source>
        <translation>Feste Ladungsmenge (Energieeinheiten, MJ), die dem Schild hinzugefügt wird; 0 (Standard) verwendet stattdessen „Recharge Percent“. Beim Spieler wird die Menge über die Welteinstellungen skaliert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The parts whose AI is removed. Accepts part names, comma lists, ranges like &quot;Name#1-5#&quot;, &quot;$Trigger&quot;, &quot;$Instigator&quot;, &quot;$Touching&quot; and &quot;$Target(...)&quot;.</source>
        <translation>Die Teile, deren KI entfernt wird. Erlaubt sind Teilnamen, Kommalisten, Bereiche wie „Name#1-5#“, „$Trigger“, „$Instigator“, „$Touching“ und „$Target(...)“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The AI class to remove: on each target the first AI of this class is marked done and goes away. Nothing happens on targets without such an AI.</source>
        <translation>Die zu entfernende KI-Klasse: bei jedem Ziel wird die erste KI dieser Klasse als erledigt markiert und verschwindet. Ziele ohne eine solche KI bleiben unverändert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Seconds between the targets when the name matches several parts: the first is handled at once, the n-th n × delay later (copies of the action in the level&apos;s queue). 0 handles all at once.</source>
        <translation>Sekunden zwischen den Zielen, wenn der Name mehrere Teile trifft: das erste sofort, das n-te n × Verzögerung später (Kopien der Aktion in der Warteschlange des Levels). 0 behandelt alle sofort.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>How often &quot;Action To Repeat&quot; runs. 0 runs it not at all. The action succeeds when one of the runs done immediately succeeded.</source>
        <translation>Wie oft „Action To Repeat“ ausgeführt wird. Bei 0 gar nicht. Die Aktion gilt als erfolgreich, wenn einer der sofort ausgeführten Durchläufe erfolgreich war.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The action that is repeated. Without one the repeat action does nothing and fails.</source>
        <translation>Die Aktion, die wiederholt wird. Ohne sie tut die Wiederholungsaktion nichts und schlägt fehl.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Seconds between the repetitions: the first runs at once, the i-th as a copy i × delay later from the level&apos;s queue. 0 runs all repetitions at once.</source>
        <translation>Sekunden zwischen den Wiederholungen: die erste sofort, die i-te als Kopie i × Verzögerung später aus der Warteschlange des Levels. 0 führt alle Wiederholungen sofort aus.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The quip category (an entry of the &quot;Quips&quot; folder) whose voice lines may be said. The category&apos;s own &quot;Condition&quot; action must succeed first; then the probability decides, and the decision is sent to every machine.</source>
        <translation>Die Sprüche-Kategorie (ein Eintrag des Ordners „Quips“), deren Sprachzeilen gesagt werden können. Zuerst muss die eigene „Condition“-Aktion der Kategorie gelingen; dann entscheidet die Wahrscheinlichkeit, und die Entscheidung geht an alle Rechner.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Only reached when the category&apos;s &quot;Condition&quot; succeeds.</source>
        <translation>Wird nur geprüft, wenn die „Condition“ der Kategorie gelingt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>ID tag of the mission (compared without case) that becomes the current mission; the time of the change is recorded. An unknown tag is reported and the action fails; an empty tag fails silently. Default &quot;M00&quot;.</source>
        <translation>ID-Tag der Mission (ohne Beachtung der Groß-/Kleinschreibung verglichen), die zur aktuellen Mission wird; der Zeitpunkt des Wechsels wird gespeichert. Ein unbekannter Tag wird gemeldet und die Aktion schlägt fehl; ein leerer Tag schlägt still fehl. Vorgabe „M00“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The parts that get the &quot;AI done&quot; message, which makes e.g. a series AI move on to its next AI. Accepts part names, comma lists, ranges like &quot;Name#1-5#&quot;, &quot;$Trigger&quot;, &quot;$Instigator&quot;, &quot;$Touching&quot; and &quot;$Target(...)&quot;. Default &quot;$Trigger&quot;.</source>
        <translation>Die Teile, die die Nachricht „KI fertig“ erhalten; damit geht z. B. eine Serien-KI zur nächsten KI über. Erlaubt sind Teilnamen, Kommalisten, Bereiche wie „Name#1-5#“, „$Trigger“, „$Instigator“, „$Touching“ und „$Target(...)“. Vorgabe „$Trigger“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name of the message sent to each target (turned into a message id); the target&apos;s AIs react to it (e.g. a door AI). An empty message sends nothing.</source>
        <translation>Name der Nachricht, die an jedes Ziel geschickt wird (in eine Nachrichten-ID umgewandelt); die KIs des Ziels reagieren darauf (z. B. eine Tür-KI). Eine leere Nachricht sendet nichts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The parts that receive the message. Accepts part names, comma lists, ranges like &quot;Name#1-5#&quot;, &quot;$Trigger&quot;, &quot;$Instigator&quot;, &quot;$Touching&quot; and &quot;$Target(...)&quot;. Default &quot;$Trigger&quot;. The action always counts as successful.</source>
        <translation>Die Teile, die die Nachricht erhalten. Erlaubt sind Teilnamen, Kommalisten, Bereiche wie „Name#1-5#“, „$Trigger“, „$Instigator“, „$Touching“ und „$Target(...)“. Vorgabe „$Trigger“. Die Aktion gilt immer als erfolgreich.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Template of the attack AI: each target&apos;s skeleton AI (enemy state machine) gets a copy that replaces its old attack AI; if it is attacking right now, it restarts in the new AI. Targets without a skeleton AI are skipped.</source>
        <translation>Vorlage der Angriffs-KI: Die Skelett-KI (Zustandsautomat der Gegner) jedes Ziels erhält eine Kopie, die ihre alte Angriffs-KI ersetzt; greift sie gerade an, beginnt sie mit der neuen KI von vorn. Ziele ohne Skelett-KI werden übergangen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The enemies whose attack AI is replaced. Accepts part names, comma lists, ranges like &quot;Name#1-5#&quot;, &quot;$Trigger&quot;, &quot;$Instigator&quot;, &quot;$Touching&quot; and &quot;$Target(...)&quot;. Default &quot;$Trigger&quot;.</source>
        <translation>Die Gegner, deren Angriffs-KI ersetzt wird. Erlaubt sind Teilnamen, Kommalisten, Bereiche wie „Name#1-5#“, „$Trigger“, „$Instigator“, „$Touching“ und „$Target(...)“. Vorgabe „$Trigger“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Accepts the usual name syntax (comma lists, ranges, &quot;$Trigger&quot;, &quot;$Instigator&quot; …).</source>
        <translation>Erlaubt die übliche Namenssyntax (Kommalisten, Bereiche, „$Trigger“, „$Instigator“ …).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The categories the targets get: all category bits (the lower 16 bits of the flags) are cleared first, then these are set. Categories decide e.g. who enemies target and what triggers react to.</source>
        <translation>Die Kategorien, die die Ziele erhalten: Zuerst werden alle Kategorie-Bits (die unteren 16 Bits der Flags) gelöscht, dann diese gesetzt. Kategorien bestimmen z. B., wen Gegner angreifen und worauf Auslöser reagieren.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The parts whose collision is switched. Accepts part names, comma lists, ranges like &quot;Name#1-5#&quot;, &quot;$Trigger&quot;, &quot;$Instigator&quot;, &quot;$Touching&quot; and &quot;$Target(...)&quot;.</source>
        <translation>Die Teile, deren Kollision umgeschaltet wird. Erlaubt sind Teilnamen, Kommalisten, Bereiche wie „Name#1-5#“, „$Trigger“, „$Instigator“, „$Touching“ und „$Target(...)“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 makes the targets collideable (solid), 0 lets things pass through them (the part&apos;s &quot;Collideable&quot; flag). Default 1.</source>
        <translation>1 macht die Ziele kollidierbar (fest), bei 0 kann man durch sie hindurchgehen (das Flag „Collideable“ des Teils). Vorgabe 1.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name of the one part the compass points at from now on (stored in the level&apos;s save data). Empty clears the compass target.</source>
        <translation>Name des einen Teils, auf das der Kompass ab jetzt zeigt (in den Speicherdaten des Levels abgelegt). Leer löscht das Kompassziel.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name of the model sequence (animation) the targets switch to. If a target has no such sequence, a warning is reported and the action fails; empty does nothing.</source>
        <translation>Name der Modell-Sequenz (Animation), zu der die Ziele wechseln. Hat ein Ziel diese Sequenz nicht, wird eine Warnung gemeldet und die Aktion schlägt fehl; leer bewirkt nichts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The animated entities whose sequence is set; other parts are warned about and skipped. Accepts part names, comma lists, ranges like &quot;Name#1-5#&quot;, &quot;$Trigger&quot;, &quot;$Instigator&quot;, &quot;$Touching&quot; and &quot;$Target(...)&quot;.</source>
        <translation>Die animierten Objekte, deren Sequenz gesetzt wird; andere Teile werden gemeldet und übergangen. Erlaubt sind Teilnamen, Kommalisten, Bereiche wie „Name#1-5#“, „$Trigger“, „$Instigator“, „$Touching“ und „$Target(...)“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Must be characters: with a &quot;New Home Position&quot; the original does not check this and fails on other parts. Accepts the usual name syntax.</source>
        <translation>Muss eine Figur sein: Mit „New Home Position“ prüft das Original das nicht und versagt bei anderen Teilen. Erlaubt die übliche Namenssyntax.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The marker must resolve to exactly one part (else a warning and no change). The home is where e.g. a guarding enemy returns to.</source>
        <translation>Der Marker muss genau ein Teil ergeben (sonst Warnung und keine Änderung). Das Zuhause ist der Ort, zu dem z. B. ein wachender Gegner zurückkehrt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Only entities are changed; other parts are warned about and skipped. Accepts the usual name syntax.</source>
        <translation>Nur Objekte (Entities) werden geändert; andere Teile werden gemeldet und übergangen. Erlaubt die übliche Namenssyntax.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The model the targets get. A character that is firing or waiting for a shot stops doing so.</source>
        <translation>Das Modell, das die Ziele erhalten. Eine Figur, die gerade feuert oder auf einen Schuss wartet, hört damit auf.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Applied to the target&apos;s first child only, and only when that child is an entity; empty leaves the child unchanged.</source>
        <translation>Wird nur auf das erste Kind des Ziels angewandt und nur, wenn dieses ein Objekt (Entity) ist; leer lässt das Kind unverändert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The level music to switch to: the three songs (full mix, medium mix, ambient) and the cross-fade time in seconds (default 5) are copied into the game&apos;s music mixer; a changed song cross-fades.</source>
        <translation>Die Levelmusik, zu der gewechselt wird: die drei Songs (volle Mischung, mittlere Mischung, Ambient) und die Überblendzeit in Sekunden (Vorgabe 5) werden in den Musikmischer des Spiels kopiert; ein geänderter Song wird übergeblendet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Template of the patrol AI: each target&apos;s skeleton AI gets a copy that replaces its old patrol AI; if it is patrolling right now, it restarts in the new AI. Targets without a skeleton AI are skipped.</source>
        <translation>Vorlage der Patrouillen-KI: Die Skelett-KI jedes Ziels erhält eine Kopie, die ihre alte Patrouillen-KI ersetzt; patrouilliert sie gerade, beginnt sie mit der neuen KI von vorn. Ziele ohne Skelett-KI werden übergangen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The enemies whose patrol AI is replaced. Accepts part names, comma lists, ranges like &quot;Name#1-5#&quot;, &quot;$Trigger&quot;, &quot;$Instigator&quot;, &quot;$Touching&quot; and &quot;$Target(...)&quot;. Default &quot;$Trigger&quot;.</source>
        <translation>Die Gegner, deren Patrouillen-KI ersetzt wird. Erlaubt sind Teilnamen, Kommalisten, Bereiche wie „Name#1-5#“, „$Trigger“, „$Instigator“, „$Touching“ und „$Target(...)“. Vorgabe „$Trigger“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Template of the pursue AI: each target&apos;s skeleton AI gets a copy that replaces its old pursue AI; if it is pursuing right now, it restarts in the new AI. Targets without a skeleton AI are skipped.</source>
        <translation>Vorlage der Verfolgungs-KI: Die Skelett-KI jedes Ziels erhält eine Kopie, die ihre alte Verfolgungs-KI ersetzt; verfolgt sie gerade, beginnt sie mit der neuen KI von vorn. Ziele ohne Skelett-KI werden übergangen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The enemies whose pursue AI is replaced. Accepts part names, comma lists, ranges like &quot;Name#1-5#&quot;, &quot;$Trigger&quot;, &quot;$Instigator&quot;, &quot;$Touching&quot; and &quot;$Target(...)&quot;. Default &quot;$Trigger&quot;.</source>
        <translation>Die Gegner, deren Verfolgungs-KI ersetzt wird. Erlaubt sind Teilnamen, Kommalisten, Bereiche wie „Name#1-5#“, „$Trigger“, „$Instigator“, „$Touching“ und „$Target(...)“. Vorgabe „$Trigger“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The one part the attackers go after, resolved in the attacker&apos;s level. It must currently be collideable; otherwise nothing changes. Default &quot;$Instigator&quot;.</source>
        <translation>Das eine Teil, das die Angreifer angreifen sollen, aufgelöst im Level des Angreifers. Es muss gerade kollidierbar sein, sonst ändert sich nichts. Vorgabe „$Instigator“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The enemies whose skeleton AI gets the new target; parts without a skeleton AI are skipped. Accepts part names, comma lists, ranges like &quot;Name#1-5#&quot;, &quot;$Trigger&quot;, &quot;$Instigator&quot;, &quot;$Touching&quot; and &quot;$Target(...)&quot;. Default &quot;$Trigger&quot;.</source>
        <translation>Die Gegner, deren Skelett-KI das neue Ziel erhält; Teile ohne Skelett-KI werden übergangen. Erlaubt sind Teilnamen, Kommalisten, Bereiche wie „Name#1-5#“, „$Trigger“, „$Instigator“, „$Touching“ und „$Target(...)“. Vorgabe „$Trigger“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The enemies whose valid target categories are changed; parts without a skeleton AI are skipped. Accepts part names, comma lists, ranges like &quot;Name#1-5#&quot;, &quot;$Trigger&quot;, &quot;$Instigator&quot;, &quot;$Touching&quot; and &quot;$Target(...)&quot;. Default &quot;$Trigger&quot;.</source>
        <translation>Die Gegner, deren gültige Zielkategorien geändert werden; Teile ohne Skelett-KI werden übergangen. Erlaubt sind Teilnamen, Kommalisten, Bereiche wie „Name#1-5#“, „$Trigger“, „$Instigator“, „$Touching“ und „$Target(...)“. Vorgabe „$Trigger“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The categories the enemy may pick as targets from now on (replaces the skeleton AI&apos;s &quot;Target Type&quot; categories). The AI&apos;s state is reset so it re-evaluates its target.</source>
        <translation>Die Kategorien, die der Gegner ab jetzt als Ziel wählen darf (ersetzt die Kategorien von „Target Type“ der Skelett-KI). Der Zustand der KI wird zurückgesetzt, sodass sie ihr Ziel neu bewertet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Seconds the view of the level shakes. The shake has full strength for the first three quarters and fades out linearly over the last quarter. Default 1.</source>
        <translation>Sekunden, die die Ansicht des Levels wackelt. Das Wackeln hat in den ersten drei Vierteln volle Stärke und klingt im letzten Viertel linear aus. Vorgabe 1.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Strength of the shake: an envelope whose value is the offset in pixels; every frame the view is moved by that amount in a random direction.</source>
        <translation>Stärke des Wackelns: eine Hüllkurve, deren Wert der Versatz in Pixeln ist; in jedem Frame wird die Ansicht um diesen Betrag in eine zufällige Richtung verschoben.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The parts that become visible (those already visible are left alone). Accepts part names, comma lists, ranges like &quot;Name#1-5#&quot;, &quot;$Trigger&quot;, &quot;$Instigator&quot;, &quot;$Touching&quot; and &quot;$Target(...)&quot;.</source>
        <translation>Die Teile, die sichtbar werden (bereits sichtbare bleiben unverändert). Erlaubt sind Teilnamen, Kommalisten, Bereiche wie „Name#1-5#“, „$Trigger“, „$Instigator“, „$Touching“ und „$Target(...)“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The model played as an effect (an explosion entity) at each target. Without a model the action does nothing.</source>
        <translation>Das Modell, das als Effekt (Explosionsobjekt) an jedem Ziel abgespielt wird. Ohne Modell tut die Aktion nichts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The parts at whose position the effect appears (one effect per part). Accepts part names, comma lists, ranges like &quot;Name#1-5#&quot;, &quot;$Trigger&quot;, &quot;$Instigator&quot;, &quot;$Touching&quot; and &quot;$Target(...)&quot;.</source>
        <translation>Die Teile, an deren Position der Effekt erscheint (ein Effekt pro Teil). Erlaubt sind Teilnamen, Kommalisten, Bereiche wie „Name#1-5#“, „$Trigger“, „$Instigator“, „$Touching“ und „$Target(...)“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Horizontal offset of the effect from the target&apos;s position, in pixels.</source>
        <translation>Waagerechter Versatz des Effekts zur Position des Ziels, in Pixeln.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Vertical (map y) offset of the effect from the target&apos;s position, in pixels.</source>
        <translation>Senkrechter Versatz (y auf der Karte) des Effekts zur Position des Ziels, in Pixeln.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Height of the effect above the ground in pixels, added to the target&apos;s own height when the target is an entity.</source>
        <translation>Höhe des Effekts über dem Boden in Pixeln; ist das Ziel ein Objekt (Entity), wird dessen eigene Höhe hinzugezählt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 plays the effect model&apos;s own sound with the effect, 0 keeps it silent. Default 1.</source>
        <translation>1 spielt mit dem Effekt den eigenen Klang des Effektmodells ab, 0 lässt ihn stumm. Vorgabe 1.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Optional action run once the effect model&apos;s default sequence has played through once (its frame count divided by its frames per second); a copy is queued per target.</source>
        <translation>Optionale Aktion, die ausgeführt wird, sobald die Standardsequenz des Effektmodells einmal durchgelaufen ist (Bildanzahl geteilt durch Bilder pro Sekunde); pro Ziel wird eine Kopie eingereiht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The action that is run; whatever its result, this action always counts as successful (useful in conditions and series).</source>
        <translation>Die Aktion, die ausgeführt wird; unabhängig von ihrem Ergebnis gilt diese Aktion immer als erfolgreich (nützlich in Bedingungen und Serien).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Partial file name of the level to switch to (e.g. &quot;ACT 1/M1m2/01 TargDens&quot;). An unknown level is reported and nothing happens. Empty: the part is moved within the current level (animated entities only).</source>
        <translation>Teil-Dateiname des Levels, in das gewechselt wird (z. B. „ACT 1/M1m2/01 TargDens“). Ein unbekanntes Level wird gemeldet und es passiert nichts. Leer: Das Teil wird innerhalb des aktuellen Levels versetzt (nur animierte Objekte).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name of the start point (usually a spawn point) in the target level where the part appears. &quot;$return&quot; goes back to the level and position the part came from last.</source>
        <translation>Name des Startpunkts (meist ein Spawn Point) im Ziel-Level, an dem das Teil erscheint. „$return“ führt zurück in das Level und an die Position, von der das Teil zuletzt kam.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The parts that are moved. Accepts part names, comma lists, ranges like &quot;Name#1-5#&quot;, &quot;$Trigger&quot;, &quot;$Instigator&quot;, &quot;$Touching&quot; and &quot;$Target(...)&quot;. Default &quot;$Instigator&quot;.</source>
        <translation>Die Teile, die versetzt werden. Erlaubt sind Teilnamen, Kommalisten, Bereiche wie „Name#1-5#“, „$Trigger“, „$Instigator“, „$Touching“ und „$Target(...)“. Vorgabe „$Instigator“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>What happens to the level left behind in the level cache: &quot;definitely soon&quot; keeps it loaded, &quot;probably soon&quot; keeps it but lets it age out first, &quot;unlikely soon&quot; releases it, &quot;never&quot; expires it. &quot;Invalid setting!&quot; gives an error message, but the switch still happens. No switch takes place while a non-interactive sequence plays.</source>
        <translation>Was mit dem verlassenen Level im Level-Cache geschieht: „definitely soon“ hält es geladen, „probably soon“ hält es, lässt es aber zuerst altern, „unlikely soon“ gibt es frei, „never“ lässt es verfallen. „Invalid setting!“ erzeugt eine Fehlermeldung, gewechselt wird trotzdem. Während eine nicht-interaktive Sequenz läuft, findet kein Wechsel statt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 keeps the part&apos;s offset from the trigger: it arrives at the same offset from the start point. 0 places it exactly on the start point. Default 0.</source>
        <translation>1 behält den Versatz des Teils zum Auslöser bei: Es kommt mit demselben Versatz zum Startpunkt an. 0 setzt es genau auf den Startpunkt. Vorgabe 0.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Visual warp effect (a render effect behaviour) played on the instigator when it is an animated entity – the instigator, not &quot;Who To Switch&quot;. &quot;Teleporter.wav&quot; plays in any case.</source>
        <translation>Optischer Warp-Effekt (ein Render-Effekt-Verhalten), der auf dem Instigator abgespielt wird, wenn dieser ein animiertes Objekt ist – auf dem Instigator, nicht auf „Who To Switch“. „Teleporter.wav“ wird in jedem Fall abgespielt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The music track to switch to: the full mix, medium mix or ambient song of the current level music (cross-faded). The game picks the track itself every frame by the action going on, so the switch may not last.</source>
        <translation>Die Musikspur, zu der gewechselt wird: der Song mit voller Mischung, mittlerer Mischung oder Ambient der aktuellen Levelmusik (übergeblendet). Das Spiel wählt die Spur in jedem Frame selbst nach dem Geschehen, daher hält der Wechsel unter Umständen nicht an.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The relays to fire: each active target part with a relay AI runs that AI&apos;s action (with this action&apos;s trigger and instigator), unless the relay may fire only once and already did. Accepts part names, comma lists, ranges like &quot;Name#1-5#&quot;, &quot;$Trigger&quot;, &quot;$Instigator&quot;, &quot;$Touching&quot; and &quot;$Target(...)&quot;.</source>
        <translation>Die auszulösenden Relais: Jedes aktive Zielteil mit einer Relais-KI führt deren Aktion aus (mit Trigger und Instigator dieser Aktion), außer das Relais darf nur einmal auslösen und hat das schon getan. Erlaubt sind Teilnamen, Kommalisten, Bereiche wie „Name#1-5#“, „$Trigger“, „$Instigator“, „$Touching“ und „$Target(...)“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The doors that get the unlock message; their door AI unlocks them. Accepts part names, comma lists, ranges like &quot;Name#1-5#&quot;, &quot;$Trigger&quot;, &quot;$Instigator&quot;, &quot;$Touching&quot; and &quot;$Target(...)&quot;.</source>
        <translation>Die Türen, die die Entriegeln-Nachricht erhalten; ihre Tür-KI entriegelt sie. Erlaubt sind Teilnamen, Kommalisten, Bereiche wie „Name#1-5#“, „$Trigger“, „$Instigator“, „$Touching“ und „$Target(...)“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>ID tag of the objective in the current mission (compared without case). Without a current mission or with an unknown tag a warning is reported and the action fails.</source>
        <translation>ID-Tag des Ziels in der aktuellen Mission (ohne Beachtung der Groß-/Kleinschreibung verglichen). Ohne aktuelle Mission oder bei unbekanntem Tag wird eine Warnung gemeldet und die Aktion schlägt fehl.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The objective&apos;s new status text (a Local.txt key). A key containing &quot;Complete&quot; (but not &quot;Incomplete&quot;) marks it complete, &quot;Fail&quot; failed; when all objectives are complete the mission&apos;s completed action runs. Default &quot;Completed&quot;.</source>
        <translation>Der neue Statustext des Ziels (ein Local.txt-Schlüssel). Ein Schlüssel mit „Complete“ (aber nicht „Incomplete“) markiert es als erfüllt, mit „Fail“ als gescheitert; sind alle Ziele erfüllt, läuft die Abschlussaktion der Mission. Vorgabe „Completed“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Entry of the canned objects (Resources/Canned Objects/*.can) whose action is run. With the canned object&apos;s &quot;Use&quot; set to &quot;Shared Global Instance&quot; the one shared action runs, with &quot;Local Copy&quot; a copy of it. Fails if the entry holds no action.</source>
        <translation>Eintrag der vorgefertigten Objekte (Resources/Canned Objects/*.can), dessen Aktion ausgeführt wird. Steht „Use“ des Objekts auf „Shared Global Instance“, läuft die eine gemeinsame Aktion, bei „Local Copy“ eine Kopie davon. Schlägt fehl, wenn der Eintrag keine Aktion enthält.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The energy item (by definition) in the player&apos;s inventory whose charge is used. If the player has no such energy item, the action fails.</source>
        <translation>Der Energie-Gegenstand (nach Definition) im Inventar des Spielers, dessen Ladung verbraucht wird. Hat der Spieler keinen solchen Energie-Gegenstand, schlägt die Aktion fehl.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Charge taken from the item. Only taken when the item holds at least that much; otherwise nothing is taken and the action fails (usable as a condition). Default 1.</source>
        <translation>Ladung, die dem Gegenstand entnommen wird. Nur wenn er mindestens so viel enthält; sonst wird nichts entnommen und die Aktion schlägt fehl (als Bedingung verwendbar). Vorgabe 1.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action tested before each round; &quot;Action To Repeat&quot; runs as long as it succeeds. After 100 successes the loop stops with the warning &quot;stuck in an infinite loop&quot; and fails. Without a condition the action fails.</source>
        <translation>Aktion, die vor jeder Runde geprüft wird; „Action To Repeat“ läuft, solange sie gelingt. Nach 100 Erfolgen bricht die Schleife mit der Warnung „stuck in an infinite loop“ ab und schlägt fehl. Ohne Bedingung schlägt die Aktion fehl.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The action run each time the condition succeeds. The while action succeeds when it ran at least once.</source>
        <translation>Die Aktion, die bei jedem Erfolg der Bedingung ausgeführt wird. Die While-Aktion gilt als erfolgreich, wenn sie mindestens einmal lief.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The doors to open, close or toggle (animated entities only; other parts are warned about). A door with a door AI handles it itself; one without plays its &quot;Opening&quot;/&quot;Closing&quot; sequences directly, with a warning. Accepts part names, comma lists, ranges like &quot;Name#1-5#&quot;, &quot;$Trigger&quot;, &quot;$Instigator&quot;, &quot;$Touching&quot; and &quot;$Target(...)&quot;.</source>
        <translation>Die Türen, die geöffnet, geschlossen oder umgeschaltet werden (nur animierte Objekte; andere Teile werden gemeldet). Eine Tür mit Tür-KI erledigt das selbst; eine ohne spielt ihre Sequenzen „Opening“/„Closing“ direkt ab, mit Warnung. Erlaubt sind Teilnamen, Kommalisten, Bereiche wie „Name#1-5#“, „$Trigger“, „$Instigator“, „$Touching“ und „$Target(...)“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Seconds between the doors when the name matches several: the first now, the n-th n × delay later. 0 handles all at once.</source>
        <translation>Sekunden zwischen den Türen, wenn der Name mehrere trifft: die erste sofort, die n-te n × Verzögerung später. 0 behandelt alle sofort.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the delayed actions of the level waiting to run (from delays between targets, repetitions, effects); each counts its time down and runs when due; leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: die verzögerten Aktionen des Levels, die auf ihre Ausführung warten (aus Verzögerungen zwischen Zielen, Wiederholungen, Effekten); jede zählt ihre Zeit herunter und läuft, wenn sie fällig ist; im Level nicht ändern.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: seconds left until the queued action runs; counted down every frame; leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: verbleibende Sekunden, bis die eingereihte Aktion läuft; wird in jedem Frame heruntergezählt; im Level nicht ändern.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the queued action (owned by the item); it runs once the time is up and the item is removed; leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: die eingereihte Aktion (gehört dem Eintrag); sie läuft, wenn die Zeit abgelaufen ist, danach wird der Eintrag entfernt; im Level nicht ändern.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the instigator passed to the queued action; cleared when that part is deleted or leaves the level; leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: der Instigator, der an die eingereihte Aktion übergeben wird; wird geleert, wenn das Teil gelöscht wird oder das Level verlässt; im Level nicht ändern.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the trigger part passed to the queued action; cleared when that part is deleted or leaves the level; leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: das Auslöserteil, das an die eingereihte Aktion übergeben wird; wird geleert, wenn das Teil gelöscht wird oder das Level verlässt; im Level nicht ändern.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the trigger AI passed to the queued action; cleared when that part is deleted or leaves the level; leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: die Auslöser-KI, die an die eingereihte Aktion übergeben wird; wird geleert, wenn das Teil gelöscht wird oder das Level verlässt; im Level nicht ändern.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the one target the queued action works on (without one it runs normally on its names); cleared when that part is deleted or leaves the level; leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: das eine Ziel, auf das die eingereihte Aktion wirkt (ohne eines läuft sie normal über ihre Namen); wird geleert, wenn das Teil gelöscht wird oder das Level verlässt; im Level nicht ändern.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: index of the looping sound in the sound list, set by the ambient sound AI that started it; -1 or an index beyond the list means none; leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: Index des Schleifenklangs in der Klangliste, gesetzt von der Ambient-Sound-KI, die ihn gestartet hat; -1 oder ein Index jenseits der Liste bedeutet keiner; im Level nicht ändern.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the part whose ambient sound AI started the sound; the sound follows its position and is muted while that part is in another level; leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: das Teil, dessen Ambient-Sound-KI den Klang gestartet hat; der Klang folgt dessen Position und ist stumm, solange das Teil in einem anderen Level ist; im Level nicht ändern.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: copy of the AI&apos;s outer radius in pixels, handed to the sound as its range together with &quot;Max Distance&quot;; leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: Kopie des äußeren Radius der KI in Pixeln, die zusammen mit „Max Distance“ als Reichweite an den Klang geht; im Level nicht ändern.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: copy of the AI&apos;s maximum hearing distance in pixels; beyond the sound&apos;s range it is muted; leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: Kopie der maximalen Hörweite der KI in Pixeln; jenseits der Reichweite des Klangs ist er stumm; im Level nicht ändern.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: copy of the AI&apos;s inner radius in pixels; only its square (&quot;Inner Ambient Radius Sqrd&quot;) is used; leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: Kopie des inneren Radius der KI in Pixeln; verwendet wird nur sein Quadrat („Inner Ambient Radius Sqrd“); im Level nicht ändern.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: square of the inner radius; while the listener is within it the sound plays without direction (centred), outside it from the part&apos;s position; leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: Quadrat des inneren Radius; solange der Hörer darin ist, spielt der Klang ohne Richtung (zentriert), außerhalb von der Position des Teils; im Level nicht ändern.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: 1 while the sound is silenced because the listener is out of range or the part is in another level; leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: 1, solange der Klang stumm ist, weil der Hörer außer Reichweite oder das Teil in einem anderen Level ist; im Level nicht ändern.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: 1 when the sound was started; a dropped sound is then started again when audible; leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: 1, wenn der Klang gestartet wurde; ein verworfener Klang wird dann wieder gestartet, sobald er hörbar ist; im Level nicht ändern.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run when the animation reaches this frame (the entity is trigger and instigator). Nothing fires while the game is not running.</source>
        <translation>Aktion, die ausgeführt wird, wenn die Animation dieses Bild erreicht (das Objekt ist Trigger und Instigator). Solange das Spiel nicht läuft, wird nichts ausgelöst.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 fires the action when the sequence plays forwards through this frame. Also used for the one frame fired when the entity&apos;s frame is locked, even when playing backwards (original quirk). Default 1.</source>
        <translation>1 löst die Aktion aus, wenn die Sequenz vorwärts durch dieses Bild läuft. Gilt auch für das eine Bild, das bei gesperrtem Bild des Objekts auslöst, selbst beim Rückwärtslauf (Eigenheit des Originals). Vorgabe 1.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 fires the action when the sequence plays backwards through this frame. Default 1.</source>
        <translation>1 löst die Aktion aus, wenn die Sequenz rückwärts durch dieses Bild läuft. Vorgabe 1.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved state in the older file format: objects listening to this part&apos;s messages; after loading they are turned into &quot;Objects Listening&quot; entries. Leave unchanged in a level.</source>
        <translation>Gespeicherter Zustand im älteren Dateiformat: Objekte, die auf Nachrichten dieses Teils hören; nach dem Laden werden sie in Einträge von „Objects Listening“ umgewandelt. Im Level nicht ändern.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: references to the objects (AIs, actions in the queue, sounds …) that get this part&apos;s messages such as &quot;Delete&quot; or &quot;Died&quot;; maintained by the game; leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: Verweise auf die Objekte (KIs, eingereihte Aktionen, Klänge …), die Nachrichten dieses Teils wie „Delete“ oder „Died“ erhalten; vom Spiel gepflegt; im Level nicht ändern.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The ready-made object (usually an action tree) this canned object holds; &quot;CUseCannedAction&quot; runs it when it is an action.</source>
        <translation>Das vorgefertigte Objekt (meist ein Aktionsbaum), das dieses Objekt enthält; „CUseCannedAction“ führt es aus, wenn es eine Aktion ist.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>How &quot;CUseCannedAction&quot; uses the object: &quot;Shared Global Instance&quot; runs the one stored action every time, &quot;Local Copy&quot; runs a fresh copy per use action. All original files use &quot;Shared Global Instance&quot;.</source>
        <translation>Wie „CUseCannedAction“ das Objekt verwendet: „Shared Global Instance“ führt jedes Mal die eine gespeicherte Aktion aus, „Local Copy“ eine eigene Kopie pro Use-Aktion. Alle Originaldateien verwenden „Shared Global Instance“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Colour of the category, presumably for the mini map. No game code reading it was found: the mini map draws its dots in the HUD options&apos; colours. Default white; the original leaves one byte of the default uninitialised.</source>
        <translation>Farbe der Kategorie, vermutlich für die Minikarte. Kein Spielcode, der sie liest, wurde gefunden: Die Minikarte zeichnet ihre Punkte in den Farben der HUD-Optionen. Vorgabe Weiß; das Original lässt ein Byte der Vorgabe uninitialisiert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the list of player characters held by the game (one per player); a character is removed from it when deleted; leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: die Liste der Spielerfiguren, die das Spiel führt (eine pro Spieler); eine Figur wird beim Löschen daraus entfernt; im Level nicht ändern.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The part&apos;s child parts (owned), e.g. a torso model on a character or a muzzle flash; they belong to and are deleted with the parent. &quot;CSetModelAction&quot; changes the first child with &quot;New Child Model&quot;.</source>
        <translation>Die Kindteile des Teils (in dessen Besitz), z. B. ein Oberkörpermodell auf einer Figur oder ein Mündungsfeuer; sie gehören zum Elternteil und werden mit ihm gelöscht. „CSetModelAction“ ändert das erste Kind mit „New Child Model“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run (for the shooting character) when a continuous fire weapon (e.g. a beam) starts firing.</source>
        <translation>Aktion, die (für die schießende Figur) ausgeführt wird, wenn eine Dauerfeuerwaffe (z. B. ein Strahl) zu feuern beginnt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run (for the shooting character) when the continuous fire weapon stops firing.</source>
        <translation>Aktion, die (für die schießende Figur) ausgeführt wird, wenn die Dauerfeuerwaffe aufhört zu feuern.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Model of the impact effect shown where the beam hits a target; hidden while nothing is hit.</source>
        <translation>Modell des Einschlageffekts, der dort gezeigt wird, wo der Strahl ein Ziel trifft; ausgeblendet, solange nichts getroffen wird.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Full width of the beam&apos;s cone around the facing direction, in radians (shown in degrees; default 15°, up to 180°). Targets inside the cone can be hit; a lightning beam also wanders within it.</source>
        <translation>Volle Breite des Strahlkegels um die Blickrichtung, im Bogenmaß (angezeigt in Grad; Vorgabe 15°, bis 180°). Ziele innerhalb des Kegels können getroffen werden; ein Blitzstrahl wandert zudem darin.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Extra damage per second at point-blank range, falling linearly to 0 at the weapon&apos;s range; added to the weapon&apos;s strike damage. Default 15.</source>
        <translation>Zusätzlicher Schaden pro Sekunde aus nächster Nähe, der linear bis 0 an der Reichweite der Waffe abnimmt; wird zum Treffer-Schaden der Waffe addiert. Vorgabe 15.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sound looped at the shooter while the beam fires.</source>
        <translation>Klang, der beim Schützen in Schleife läuft, solange der Strahl feuert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Layout and colours of the materials generator window (also used by the voice log). These options are part of the game&apos;s custom rules (Rules.txt), not of a level.</source>
        <translation>Layout und Farben des Materialgenerator-Fensters (auch vom Sprachprotokoll verwendet). Diese Optionen gehören zu den eigenen Spielregeln (Rules.txt), nicht zu einem Level.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Layout, colours and texts of the inventory screen and the HUD&apos;s item display. These options are part of the game&apos;s custom rules (Rules.txt), not of a level.</source>
        <translation>Layout, Farben und Texte des Inventarbildschirms und der Gegenstandsanzeige im HUD. Diese Optionen gehören zu den eigenen Spielregeln (Rules.txt), nicht zu einem Level.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Layout of the conversation window (portraits, text area, scroll speed, fonts) and the multiplayer chat fonts. These options are part of the game&apos;s custom rules (Rules.txt), not of a level.</source>
        <translation>Layout des Gesprächsfensters (Porträts, Textbereich, Scrollgeschwindigkeit, Schriften) und die Chat-Schriften im Mehrspielermodus. Diese Optionen gehören zu den eigenen Spielregeln (Rules.txt), nicht zu einem Level.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Layout of the main menu. These options are part of the game&apos;s custom rules (Rules.txt), not of a level.</source>
        <translation>Layout des Hauptmenüs. Diese Optionen gehören zu den eigenen Spielregeln (Rules.txt), nicht zu einem Level.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Settings of the player&apos;s walking control (movement by mouse and keys). These options are part of the game&apos;s custom rules (Rules.txt), not of a level.</source>
        <translation>Einstellungen der Laufsteuerung des Spielers (Bewegung per Maus und Tasten). Diese Optionen gehören zu den eigenen Spielregeln (Rules.txt), nicht zu einem Level.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Also holds the mini map&apos;s size, opacity and dot colours. These options are part of the game&apos;s custom rules (Rules.txt), not of a level.</source>
        <translation>Enthält auch Größe, Deckkraft und Punktfarben der Minikarte. Diese Optionen gehören zu den eigenen Spielregeln (Rules.txt), nicht zu einem Level.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>These options are part of the game&apos;s custom rules (Rules.txt), not of a level.</source>
        <translation>Diese Optionen gehören zu den eigenen Spielregeln (Rules.txt), nicht zu einem Level.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Used instead of &quot;Mission Over Options&quot; when the window is opened in its multiplayer form. These options are part of the game&apos;s custom rules (Rules.txt), not of a level.</source>
        <translation>Wird statt „Mission Over Options“ verwendet, wenn das Fenster in seiner Mehrspieler-Form geöffnet wird. Diese Optionen gehören zu den eigenen Spielregeln (Rules.txt), nicht zu einem Level.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Holds only the colour of the screen&apos;s borders. These options are part of the game&apos;s custom rules (Rules.txt), not of a level.</source>
        <translation>Enthält nur die Farbe der Rahmen des Bildschirms. Diese Optionen gehören zu den eigenen Spielregeln (Rules.txt), nicht zu einem Level.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>A list of custom rules objects. The game&apos;s rules keep one without saving it and use their single &quot;Custom Rules&quot; object instead; no use of the list beyond loading and freeing was found.</source>
        <translation>Eine Liste von Spielregel-Objekten. Die Regeln des Spiels führen eine, ohne sie zu speichern, und verwenden stattdessen ihr einzelnes Objekt „Custom Rules“; eine Verwendung der Liste über Laden und Freigeben hinaus wurde nicht gefunden.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 means damage of this type cannot be absorbed by a shield; 0 lets a shield of this damage type absorb it. Default 0; none of the original damage types sets it.</source>
        <translation>1 bedeutet, dass Schaden dieses Typs nicht von einem Schild abgefangen werden kann; bei 0 kann ein Schild dieses Schadenstyps ihn abfangen. Vorgabe 0; keiner der Original-Schadenstypen setzt den Wert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The entity behaviours (e.g. animations, effects) played in order when an entity with this death type dies; they run as a new AI on the dying entity.</source>
        <translation>Die Objektverhalten (z. B. Animationen, Effekte), die der Reihe nach abgespielt werden, wenn ein Objekt mit diesem Todestyp stirbt; sie laufen als neue KI auf dem sterbenden Objekt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Default &quot;Small Blue&quot;.</source>
        <translation>Vorgabe „Small Blue“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Default &quot;Small Red&quot;.</source>
        <translation>Vorgabe „Small Red“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>X position in pixels of the window background image relative to the frame image; enlarges the window by the difference. Default 39.</source>
        <translation>X-Position des Fensterhintergrunds in Pixeln relativ zum Rahmenbild; vergrößert das Fenster um die Differenz. Vorgabe 39.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Y position in pixels of the window background image relative to the frame image; enlarges the window by the difference. Default 53.</source>
        <translation>Y-Position des Fensterhintergrunds in Pixeln relativ zum Rahmenbild; vergrößert das Fenster um die Differenz. Vorgabe 53.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>X position in pixels of both speakers&apos; portraits in the conversation window. Default 38.</source>
        <translation>X-Position der Porträts beider Sprecher im Gesprächsfenster, in Pixeln. Vorgabe 38.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Y position in pixels of the first speaker&apos;s portrait; the second is drawn &quot;Portrait YDist&quot; lower. Default 50.</source>
        <translation>Y-Position des Porträts des ersten Sprechers in Pixeln; das zweite wird um „Portrait YDist“ tiefer gezeichnet. Vorgabe 50.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Meant as the second portrait&apos;s y position in pixels. Not read by the conversation window (only saved and loaded); the window uses &quot;Portrait Y1&quot; + &quot;Portrait YDist&quot; and the portrait image&apos;s own size. Default 153.</source>
        <translation>Gedacht als y-Position des zweiten Porträts in Pixeln. Wird vom Gesprächsfenster nicht gelesen (nur gespeichert und geladen); das Fenster verwendet „Portrait Y1“ + „Portrait YDist“ und die eigene Größe des Porträtbilds. Vorgabe 153.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Vertical distance in pixels between the first and the second speaker&apos;s portrait. Default 103.</source>
        <translation>Senkrechter Abstand zwischen dem Porträt des ersten und des zweiten Sprechers, in Pixeln. Vorgabe 103.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Meant as the portrait width in pixels. Not read by the conversation window (only saved and loaded); the window uses &quot;Portrait Y1&quot; + &quot;Portrait YDist&quot; and the portrait image&apos;s own size. Default 81.</source>
        <translation>Gedacht als Porträtbreite in Pixeln. Wird vom Gesprächsfenster nicht gelesen (nur gespeichert und geladen); das Fenster verwendet „Portrait Y1“ + „Portrait YDist“ und die eigene Größe des Porträtbilds. Vorgabe 81.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Meant as the portrait height in pixels. Not read by the conversation window (only saved and loaded); the window uses &quot;Portrait Y1&quot; + &quot;Portrait YDist&quot; and the portrait image&apos;s own size. Default 77.</source>
        <translation>Gedacht als Porträthöhe in Pixeln. Wird vom Gesprächsfenster nicht gelesen (nur gespeichert und geladen); das Fenster verwendet „Portrait Y1“ + „Portrait YDist“ und die eigene Größe des Porträtbilds. Vorgabe 77.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>X position in pixels of the selection light shown while the first (upper) speaker talks. Default 64.</source>
        <translation>X-Position des Auswahllichts in Pixeln, das leuchtet, während der erste (obere) Sprecher redet. Vorgabe 64.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Y position in pixels of the selection light shown while the first (upper) speaker talks. Default 56.</source>
        <translation>Y-Position des Auswahllichts in Pixeln, das leuchtet, während der erste (obere) Sprecher redet. Vorgabe 56.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>X position in pixels of the selection light shown while the second (lower) speaker talks. Default 64.</source>
        <translation>X-Position des Auswahllichts in Pixeln, das leuchtet, während der zweite (untere) Sprecher redet. Vorgabe 64.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Y position in pixels of the selection light shown while the second (lower) speaker talks. Default 142.</source>
        <translation>Y-Position des Auswahllichts in Pixeln, das leuchtet, während der zweite (untere) Sprecher redet. Vorgabe 142.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Left edge in pixels of the area in which the conversation lines scroll (lines are clipped to it). Default 144.</source>
        <translation>Linker Rand des Bereichs in Pixeln, in dem die Gesprächszeilen scrollen (Zeilen werden darauf beschnitten). Vorgabe 144.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Top edge in pixels of the area in which the conversation lines scroll. Default 43.</source>
        <translation>Oberer Rand des Bereichs in Pixeln, in dem die Gesprächszeilen scrollen. Vorgabe 43.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Width in pixels of the text area; lines are wrapped to it (less twice the window border). Default 382.</source>
        <translation>Breite des Textbereichs in Pixeln; Zeilen werden darauf umbrochen (abzüglich zweimal des Fensterrands). Vorgabe 382.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Height in pixels of the text area; new text starts below it and scrolls up, and it enters the scroll speed computed for voiced lines. Default 216.</source>
        <translation>Höhe des Textbereichs in Pixeln; neuer Text beginnt darunter und scrollt nach oben, und sie geht in die für vertonte Zeilen berechnete Scrollgeschwindigkeit ein. Vorgabe 216.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Left edge in pixels of the filled rectangle drawn behind the conversation text. Default 144.</source>
        <translation>Linker Rand des gefüllten Rechtecks hinter dem Gesprächstext, in Pixeln. Vorgabe 144.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Top edge in pixels of the filled rectangle drawn behind the conversation text. Default 43.</source>
        <translation>Oberer Rand des gefüllten Rechtecks hinter dem Gesprächstext, in Pixeln. Vorgabe 43.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Width in pixels of the filled rectangle drawn behind the conversation text. Default 382.</source>
        <translation>Breite des gefüllten Rechtecks hinter dem Gesprächstext, in Pixeln. Vorgabe 382.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Height in pixels of the filled rectangle drawn behind the conversation text. Default 216.</source>
        <translation>Höhe des gefüllten Rechtecks hinter dem Gesprächstext, in Pixeln. Vorgabe 216.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the conversation lines (used for drawing, wrapping and line height).</source>
        <translation>Schrift der Gesprächszeilen (für Zeichnen, Umbruch und Zeilenhöhe).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Fastest scroll speed in pixels per second for a voiced line; the speed is chosen so the line reaches the top when the voice ends (at least 1). Default 35.</source>
        <translation>Höchste Scrollgeschwindigkeit in Pixeln pro Sekunde bei vertonten Zeilen; die Geschwindigkeit wird so gewählt, dass die Zeile oben ankommt, wenn die Sprachausgabe endet (mindestens 1). Vorgabe 35.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Scroll speed in pixels per second for lines without a voice-over. Default 25.</source>
        <translation>Scrollgeschwindigkeit in Pixeln pro Sekunde für Zeilen ohne Sprachausgabe. Vorgabe 25.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>A font setting that no code of the conversation window or the chat reads (only saved and loaded); its purpose is unknown.</source>
        <translation>Eine Schrifteinstellung, die kein Code des Gesprächsfensters oder des Chats liest (nur gespeichert und geladen); ihr Zweck ist unbekannt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>X position in pixels of the window&apos;s close button. Default 488.</source>
        <translation>X-Position der Schließen-Schaltfläche des Fensters, in Pixeln. Vorgabe 488.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Y position in pixels of the window&apos;s close button. Default 4.</source>
        <translation>Y-Position der Schließen-Schaltfläche des Fensters, in Pixeln. Vorgabe 4.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Label of a line in a dialogue script (.RDS, the line &apos;:Label&apos;). „Line“ of a CZaxDialogAction names it; the lookup ignores case and takes the first label of that name. A name no action finds makes the game exit.</source>
        <translation>Label einer Zeile in einem Dialogskript (.RDS, die Zeile „:Label“). „Line“ einer CZaxDialogAction nennt ihn; die Suche ignoriert Groß-/Kleinschreibung und nimmt das erste Label dieses Namens. Ein Name, den keine Aktion findet, beendet das Spiel.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The text of the line. Text before the first &quot;: &quot; (if it starts within the first 20 characters) is the speaker, which also picks the portrait; the rest is the shown line. Trailing white space is removed.</source>
        <translation>Der Text der Zeile. Text vor dem ersten „: “ (wenn es innerhalb der ersten 20 Zeichen beginnt) ist der Sprecher, der auch das Porträt bestimmt; der Rest ist die angezeigte Zeile. Leerraum am Ende wird entfernt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Energy meter colour (HUD). Only used by a meter wider than tall: the top and bottom border lines, and the dark end of the gradient on the left and right end caps.</source>
        <translation>Farbe der Energieanzeige (HUD). Nur bei einer Anzeige, die breiter als hoch ist: die obere und untere Randlinie und das dunkle Ende des Verlaufs an den linken und rechten Endkappen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Energy meter colour (HUD). A meter taller than wide gets a 1-pixel frame in this colour; a wider one uses it as the bright middle of the end caps&apos; gradient.</source>
        <translation>Farbe der Energieanzeige (HUD). Eine Anzeige, die höher als breit ist, bekommt einen 1 Pixel breiten Rahmen in dieser Farbe; eine breitere nutzt sie als helle Mitte des Verlaufs der Endkappen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Energy meter colour (HUD) of the filled part, dark end: only a meter wider than tall uses it, as a vertical gradient between this and „Charged Bright Color“ (bright at one third of the height).</source>
        <translation>Farbe der Energieanzeige (HUD) für den gefüllten Teil, dunkles Ende: nur eine Anzeige, die breiter als hoch ist, nutzt sie, als senkrechten Verlauf zwischen dieser Farbe und „Charged Bright Color“ (hell auf einem Drittel der Höhe).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Energy meter colour (HUD) of the filled part: a meter taller than wide fills from the bottom in this colour on black; a wider one uses it as the bright line of the fill&apos;s gradient.</source>
        <translation>Farbe der Energieanzeige (HUD) für den gefüllten Teil: eine Anzeige, die höher als breit ist, füllt sich von unten in dieser Farbe auf Schwarz; eine breitere nutzt sie als helle Linie des Verlaufs der Füllung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>No effect in the game: the energy meter&apos;s drawing never reads this colour (only saved and loaded).</source>
        <translation>Keine Wirkung im Spiel: das Zeichnen der Energieanzeige liest diese Farbe nie (nur gespeichert und geladen).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When set (1), the behaviour clears the object&apos;s flag „Visible“ as soon as it begins, then removes itself from the behaviour stack. 0 leaves that flag alone.</source>
        <translation>Wenn gesetzt (1), löscht das Verhalten beim Beginn das Flag „Visible“ des Objekts und nimmt sich dann vom Verhaltensstapel. 0 lässt dieses Flag unverändert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When set (1), the behaviour clears the object&apos;s flag „Collideable“ as soon as it begins, then removes itself from the behaviour stack. 0 leaves that flag alone.</source>
        <translation>Wenn gesetzt (1), löscht das Verhalten beim Beginn das Flag „Collideable“ des Objekts und nimmt sich dann vom Verhaltensstapel. 0 lässt dieses Flag unverändert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When set (1), the behaviour clears the object&apos;s flag „Tries To Collide“ as soon as it begins, then removes itself from the behaviour stack. 0 leaves that flag alone.</source>
        <translation>Wenn gesetzt (1), löscht das Verhalten beim Beginn das Flag „Tries To Collide“ des Objekts und nimmt sich dann vom Verhaltensstapel. 0 lässt dieses Flag unverändert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When set (1), the behaviour clears the object&apos;s flag „Stationary“ as soon as it begins, then removes itself from the behaviour stack. 0 leaves that flag alone.</source>
        <translation>Wenn gesetzt (1), löscht das Verhalten beim Beginn das Flag „Stationary“ des Objekts und nimmt sich dann vom Verhaltensstapel. 0 lässt dieses Flag unverändert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When set (1), the behaviour clears the object&apos;s flag „Active“ as soon as it begins, then removes itself from the behaviour stack. 0 leaves that flag alone.</source>
        <translation>Wenn gesetzt (1), löscht das Verhalten beim Beginn das Flag „Active“ des Objekts und nimmt sich dann vom Verhaltensstapel. 0 lässt dieses Flag unverändert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action executed once when the behaviour begins, with the object as instigator in the object&apos;s layer. The behaviour ends at its next update.</source>
        <translation>Aktion, die beim Beginn des Verhaltens einmal ausgeführt wird, mit dem Objekt als Auslöser in dessen Ebene. Das Verhalten endet bei seiner nächsten Aktualisierung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>No effect in the game: the fire behaviours fire the current weapon in its own direction and never read this angle (only saved and loaded; the code creating them passes -1 or another value).</source>
        <translation>Keine Wirkung im Spiel: die Feuer-Verhalten feuern die aktuelle Waffe in ihre eigene Richtung und lesen diesen Winkel nie (nur gespeichert und geladen; der Code, der sie anlegt, übergibt -1 oder einen anderen Wert).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sequence that is set (at frame 0) when the behaviour begins and then played in a loop at its own frames per second. Empty keeps the object&apos;s current sequence.</source>
        <translation>Sequenz, die beim Beginn des Verhaltens gesetzt (bei Bild 0) und dann in einer Schleife mit ihren eigenen Bildern pro Sekunde abgespielt wird. Leer behält die aktuelle Sequenz des Objekts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 plays the loop backwards (from the end wrapping to the last frame). With „Ping Pong“ the game switches this flag itself at each end. Ignored while „Synchronize“ is on.</source>
        <translation>1 spielt die Schleife rückwärts (am Anfang Sprung zum letzten Bild). Mit „Ping Pong“ schaltet das Spiel dieses Flag an jedem Ende selbst um. Wird ignoriert, solange „Synchronize“ an ist.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 turns the playing direction at each end instead of jumping back to the start (forwards, then backwards, …). Ignored while „Synchronize“ is on.</source>
        <translation>1 kehrt die Abspielrichtung an jedem Ende um, statt zum Anfang zurückzuspringen (vorwärts, dann rückwärts, …). Wird ignoriert, solange „Synchronize“ an ist.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 takes the frame from the global game clock instead of advancing it per object, so all objects with this sequence show the same frame; backwards and ping pong are ignored then.</source>
        <translation>1 nimmt das Bild aus der globalen Spieluhr, statt es pro Objekt weiterzuzählen, sodass alle Objekte mit dieser Sequenz dasselbe Bild zeigen; rückwärts und Ping Pong werden dann ignoriert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Whether the loop is running (1, default). Beginning the behaviour and the message „Start Animation“ set it; with 0 the frame stands still. Mostly saved run-time state.</source>
        <translation>Ob die Schleife läuft (1, Standard). Der Beginn des Verhaltens und die Nachricht „Start Animation“ setzen es; mit 0 steht das Bild still. Meist gespeicherter Laufzeitzustand.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: set by the message „Stop Animation“; the loop then stops at its next end and the behaviour ends. Beginning or „Start Animation“ clears it.</source>
        <translation>Gespeicherter Laufzeitzustand: gesetzt durch die Nachricht „Stop Animation“; die Schleife hält dann an ihrem nächsten Ende an und das Verhalten endet. Beginn oder „Start Animation“ löschen es.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The behaviours of the queue, run one after another: each begins when it becomes current and is updated until it reports done, then the next one follows. After the last one the queue is done; beginning it again restarts at the first.</source>
        <translation>Die Verhalten der Warteschlange, nacheinander ausgeführt: jedes beginnt, wenn es an der Reihe ist, und wird aktualisiert, bis es fertig meldet, dann folgt das nächste. Nach dem letzten ist die Warteschlange fertig; ein erneuter Beginn startet wieder beim ersten.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Index (from 0) of the behaviour currently running. A value at or past the end (default 2147483647) means done: the next begin restarts at 0. Saved run-time state.</source>
        <translation>Index (ab 0) des gerade laufenden Verhaltens. Ein Wert am oder hinter dem Ende (Standard 2147483647) bedeutet fertig: der nächste Beginn startet wieder bei 0. Gespeicherter Laufzeitzustand.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: 1 means the current behaviour has not begun yet and gets its begin call before its next update.</source>
        <translation>Gespeicherter Laufzeitzustand: 1 heißt, das aktuelle Verhalten hat noch nicht begonnen und wird vor seiner nächsten Aktualisierung begonnen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Play ratio given to the object when the behaviour begins (animation speed factor; walking characters also move faster or slower, negative plays backwards); the behaviour then removes itself. Values outside -10..10 make the game report an error but are kept.</source>
        <translation>Abspielfaktor, den das Objekt beim Beginn des Verhaltens bekommt (Faktor der Animationsgeschwindigkeit; laufende Figuren bewegen sich damit auch schneller oder langsamer, negativ spielt rückwärts); danach nimmt sich das Verhalten vom Stapel. Werte außerhalb -10..10 meldet das Spiel als Fehler, behält sie aber.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sequence set on the object when the behaviour begins (it also clears „Stationary“); the behaviour then removes itself. If the model lacks the sequence, the behaviour fails and is dropped. Empty only clears „Stationary“.</source>
        <translation>Sequenz, die beim Beginn des Verhaltens am Objekt gesetzt wird (es löscht auch „Stationary“); danach nimmt sich das Verhalten vom Stapel. Fehlt die Sequenz im Modell, schlägt das Verhalten fehl und wird verworfen. Leer löscht nur „Stationary“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Factor on the sequence&apos;s frames per second (-100..100, default 1). Negative plays the sequence backwards from its last frame; 0 ends the behaviour at once.</source>
        <translation>Faktor auf die Bilder pro Sekunde der Sequenz (-100..100, Standard 1). Negativ spielt die Sequenz rückwärts ab ihrem letzten Bild; 0 beendet das Verhalten sofort.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sequence set when the played sequence has reached its end (default „Idle“). Empty leaves the object on the end frame of the played sequence.</source>
        <translation>Sequenz, die gesetzt wird, wenn die abgespielte Sequenz ihr Ende erreicht hat (Standard „Idle“). Leer lässt das Objekt auf dem Endbild der abgespielten Sequenz.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Frame of „Done Sequence“ shown afterwards (from 0). -1 means its last frame; values past the end are clamped to the frame count.</source>
        <translation>Bild von „Done Sequence“, das danach gezeigt wird (ab 0). -1 bedeutet ihr letztes Bild; Werte hinter dem Ende werden auf die Bildanzahl begrenzt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: whether the object had „Stationary“ when the behaviour began; it gets the flag back at the end.</source>
        <translation>Gespeicherter Laufzeitzustand: ob das Objekt beim Beginn des Verhaltens „Stationary“ hatte; es bekommt das Flag am Ende zurück.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the object&apos;s play ratio before the behaviour (the behaviour sets it to 0 and moves the frames itself); restored when the behaviour ends.</source>
        <translation>Gespeicherter Laufzeitzustand: der Abspielfaktor des Objekts vor dem Verhalten (das Verhalten setzt ihn auf 0 und schaltet die Bilder selbst weiter); beim Ende des Verhaltens zurückgesetzt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 moves a movable object by the motion stored in the sequence&apos;s frames while it plays (e.g. a jump or lunge); 0 plays it in place.</source>
        <translation>1 bewegt ein bewegliches Objekt während des Abspielens um die in den Bildern der Sequenz gespeicherte Bewegung (z. B. Sprung oder Ausfallschritt); 0 spielt sie auf der Stelle.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Search radius in pixels (default 300): on begin the nearest matching object within it (and within the vision cone) becomes the object&apos;s target.</source>
        <translation>Suchradius in Pixeln (Standard 300): beim Beginn wird das nächste passende Objekt darin (und im Sichtkegel) zum Ziel des Objekts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Full width of the search cone in degrees (1–360, default 90), centred on the object&apos;s facing; half of it on each side.</source>
        <translation>Gesamtbreite des Suchkegels in Grad (1–360, Standard 90), um die Blickrichtung des Objekts zentriert; je die Hälfte auf jeder Seite.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 (default): only objects with „Collideable“ can become the target. Active objects are required in any case.</source>
        <translation>1 (Standard): nur Objekte mit „Collideable“ können Ziel werden. Aktive Objekte sind ohnehin Pflicht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 (default): only objects that have hit points can become the target.</source>
        <translation>1 (Standard): nur Objekte mit Trefferpunkten können Ziel werden.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Object categories that may become the target (default „Player“).</source>
        <translation>Objektkategorien, die Ziel werden dürfen (Standard „Player“).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the object&apos;s „Stationary“ flag from before the turn (0 or 2097152); the turn clears the flag and restores it when done. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: das „Stationary“-Flag des Objekts von vor der Drehung (0 oder 2097152); die Drehung löscht das Flag und stellt es am Ende wieder her. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 measures the angle from the weapon&apos;s position instead of the object&apos;s centre, so the weapon points at the target.</source>
        <translation>1 misst den Winkel von der Waffenposition statt vom Mittelpunkt des Objekts, sodass die Waffe auf das Ziel zeigt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the object whose direction the aiming angle turns to. Forgotten when it is deleted, dies, leaves the scope, is out of reach or the turn is done.</source>
        <translation>Gespeicherter Laufzeitzustand: das Objekt, zu dessen Richtung sich der Zielwinkel dreht. Wird vergessen, wenn es gelöscht wird, stirbt, den Bereich verlässt, außer Reichweite ist oder die Drehung fertig ist.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Distance in pixels (vertical distance scaled like the game&apos;s perspective): while the target is farther away the turn stops and the target is forgotten.</source>
        <translation>Abstand in Pixeln (senkrechter Abstand wie die Perspektive des Spiels skaliert): ist das Ziel weiter weg, endet die Drehung und das Ziel wird vergessen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>No effect in the game: stored when the behaviour is made but never read (only saved and loaded).</source>
        <translation>Keine Wirkung im Spiel: wird beim Anlegen des Verhaltens gespeichert, aber nie gelesen (nur gespeichert und geladen).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Target movement angle (stored in radians, shown in degrees). The object turns towards it at its model&apos;s turn speed until it is within 0.1 radians; then the behaviour ends.</source>
        <translation>Ziel-Bewegungswinkel (in Radiant gespeichert, in Grad angezeigt). Das Objekt dreht sich mit der Drehgeschwindigkeit seines Modells dorthin, bis es weniger als 0,1 Radiant abweicht; dann endet das Verhalten.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>No effect in the game: neither the turn nor the move behaviour reads this byte (only saved and loaded). The object&apos;s own „Facing Backwards“ is a different field.</source>
        <translation>Keine Wirkung im Spiel: weder das Dreh- noch das Bewegungsverhalten liest dieses Byte (nur gespeichert und geladen). Das eigene „Facing Backwards“ des Objekts ist ein anderes Feld.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the embedded idle behaviour the mover runs once it has arrived or found no way (plays the idle sequence and fidgets).</source>
        <translation>Gespeicherter Laufzeitzustand: das eingebettete Leerlauf-Verhalten, das der Beweger ausführt, sobald er angekommen ist oder keinen Weg gefunden hat (spielt die Idle-Sequenz und Zappel-Animationen).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Speed factor while moving (default 1): set as the object&apos;s play ratio every update, so a walker animates and moves faster or slower; a flier&apos;s speed is multiplied by it.</source>
        <translation>Geschwindigkeitsfaktor beim Bewegen (Standard 1): wird bei jeder Aktualisierung als Abspielfaktor des Objekts gesetzt, sodass ein Läufer schneller oder langsamer animiert und läuft; die Geschwindigkeit eines Fliegers wird damit multipliziert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>No effect in the game: the update always behaves as if it were set (steering round obstacles and the small-angle filter are always on).</source>
        <translation>Keine Wirkung im Spiel: die Aktualisierung verhält sich immer, als wäre es gesetzt (Umsteuern um Hindernisse und der Filter für kleine Winkel sind immer an).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 (default): the way is searched over the level&apos;s way point network and a target spot blocked by an object fails the move. 0 heads straight for the target.</source>
        <translation>1 (Standard): der Weg wird über das Wegpunktnetz des Levels gesucht, und ein von einem Objekt blockierter Zielpunkt lässt die Bewegung scheitern. 0 steuert direkt auf das Ziel zu.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the move is over (arrived or no way); the behaviour then only runs its idle behaviour.</source>
        <translation>Gespeicherter Laufzeitzustand: die Bewegung ist beendet (angekommen oder kein Weg); das Verhalten führt dann nur noch sein Leerlauf-Verhalten aus.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: set when the last way search found no way to the target.</source>
        <translation>Gespeicherter Laufzeitzustand: gesetzt, wenn die letzte Wegsuche keinen Weg zum Ziel fand.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: whether the idle behaviour has begun already.</source>
        <translation>Gespeicherter Laufzeitzustand: ob das Leerlauf-Verhalten schon begonnen hat.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the gait the move sequence was chosen for (0 walk, 1 run, 2 crouch); taken from the walking character each time the move is aimed.</source>
        <translation>Gespeicherter Laufzeitzustand: die Gangart, für die die Bewegungssequenz gewählt wurde (0 gehen, 1 rennen, 2 ducken); bei jedem Anvisieren vom laufenden Charakter übernommen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: X of the unit vector from the next way point back to where the leg started; used to detect passing the point and to steer.</source>
        <translation>Gespeicherter Laufzeitzustand: X des Einheitsvektors vom nächsten Wegpunkt zurück zum Startpunkt der Teilstrecke; dient zum Erkennen des Passierens und zum Umsteuern.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: Y of the unit vector from the next way point back to where the leg started; used to detect passing the point and to steer.</source>
        <translation>Gespeicherter Laufzeitzustand: Y des Einheitsvektors vom nächsten Wegpunkt zurück zum Startpunkt der Teilstrecke; dient zum Erkennen des Passierens und zum Umsteuern.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the current way found over the way point network (the points still ahead).</source>
        <translation>Gespeicherter Laufzeitzustand: der aktuell gefundene Weg über das Wegpunktnetz (die noch vorausliegenden Punkte).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: start point of the current leg in pixels.</source>
        <translation>Gespeicherter Laufzeitzustand: Startpunkt der aktuellen Teilstrecke in Pixeln.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the final target point in pixels; set by whoever starts the move.</source>
        <translation>Gespeicherter Laufzeitzustand: der endgültige Zielpunkt in Pixeln; gesetzt von dem, der die Bewegung startet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the next way point the object heads for, in pixels.</source>
        <translation>Gespeicherter Laufzeitzustand: der nächste Wegpunkt, den das Objekt ansteuert, in Pixeln.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the remaining distance along the leg at the last update; used to notice when the object stops getting nearer.</source>
        <translation>Gespeicherter Laufzeitzustand: die restliche Strecke entlang der Teilstrecke bei der letzten Aktualisierung; dient zum Erkennen, dass das Objekt nicht mehr näher kommt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: how often the object made no progress while facing the next point; after six times the way is searched again.</source>
        <translation>Gespeicherter Laufzeitzustand: wie oft das Objekt beim Blick auf den nächsten Punkt nicht vorankam; nach sechs Mal wird der Weg neu gesucht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the helper that tests the target spot and the way for collisions during the way search.</source>
        <translation>Gespeicherter Laufzeitzustand: das Hilfsobjekt, das bei der Wegsuche den Zielpunkt und den Weg auf Kollisionen prüft.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sequence played while moving instead of „Walk“/„Run“/„Crouch“ by gait. Empty (default) uses the gait&apos;s sequence; a name the model lacks is reported as an error.</source>
        <translation>Sequenz, die beim Bewegen statt „Walk“/„Run“/„Crouch“ je nach Gangart gespielt wird. Leer (Standard) nimmt die Sequenz der Gangart; ein Name, der dem Modell fehlt, wird als Fehler gemeldet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Duration in seconds (default 1) before the behaviour ends. The idle behaviour, which builds on it, also ends after this time.</source>
        <translation>Dauer in Sekunden (Standard 1), bis das Verhalten endet. Das darauf aufbauende Leerlauf-Verhalten endet ebenfalls nach dieser Zeit.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: seconds elapsed so far; the behaviour ends once it reaches „Num Seconds“. Leave at 0 in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: bisher vergangene Sekunden; das Verhalten endet, sobald „Num Seconds“ erreicht ist. Im Level auf 0 lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Fidget settings used instead of the model&apos;s own. Fidgets only happen at all when the model itself has fidget settings; empty uses the model&apos;s.</source>
        <translation>Zappel-Einstellungen, die statt der des Modells verwendet werden. Gezappelt wird nur, wenn das Modell selbst Zappel-Einstellungen hat; leer nimmt die des Modells.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the model&apos;s list of fidget sequences and which one was played last; made when needed.</source>
        <translation>Gespeicherter Laufzeitzustand: die Liste der Zappel-Sequenzen des Modells und welche zuletzt gespielt wurde; bei Bedarf angelegt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: seconds left until the next fidget; drawn at start (0.25 to 1.75 times the average time) and after each fidget from the fidget settings.</source>
        <translation>Gespeicherter Laufzeitzustand: verbleibende Sekunden bis zum nächsten Zappeln; beim Start gewürfelt (0,25- bis 1,75-fache durchschnittliche Zeit) und nach jedem Zappeln aus den Zappel-Einstellungen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: random speed factor of the idle animation (0.9–1.1), drawn anew at each start so idling characters do not move in step.</source>
        <translation>Gespeicherter Laufzeitzustand: zufälliger Geschwindigkeitsfaktor der Leerlauf-Animation (0,9–1,1), bei jedem Start neu gewürfelt, damit Figuren im Leerlauf nicht im Gleichtakt animieren.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: 1 while a fidget sequence plays instead of the idle sequence.</source>
        <translation>Gespeicherter Laufzeitzustand: 1, solange eine Zappel-Sequenz statt der Idle-Sequenz läuft.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Direction of the fade: „Transition In“ fades the object in over „Num Seconds“, „Transition Out“ fades it out.</source>
        <translation>Richtung der Überblendung: „Transition In“ blendet das Objekt über „Num Seconds“ ein, „Transition Out“ blendet es aus.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 (default) warps the object in: it fades in during the first third of „Warp Time“ while the effect dies down afterwards. 0 warps it out: the effect builds up over two thirds, then the object fades out.</source>
        <translation>1 (Standard) lässt das Objekt herein-warpen: es blendet im ersten Drittel von „Warp Time“ ein, danach klingt der Effekt ab. 0 lässt es hinaus-warpen: der Effekt baut sich über zwei Drittel auf, dann blendet das Objekt aus.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Duration of the warp in seconds (default 1).</source>
        <translation>Dauer des Warp-Effekts in Sekunden (Standard 1).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The render effect put on the object during the warp (default CSimpleWarpEffect); its strength is driven by the warp&apos;s progress and it is removed at the end.</source>
        <translation>Der Darstellungseffekt, der während des Warps auf das Objekt gelegt wird (Standard CSimpleWarpEffect); seine Stärke folgt dem Fortschritt des Warps, am Ende wird er entfernt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: seconds of the warp elapsed so far. Leave at 0 in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: bisher vergangene Sekunden des Warps. Im Level auf 0 lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: whether the object had „Stationary“ before the warp; the flag is set again at the end.</source>
        <translation>Gespeicherter Laufzeitzustand: ob das Objekt vor dem Warp „Stationary“ hatte; das Flag wird am Ende wieder gesetzt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the object the effect was put on; the effect is taken off it when the behaviour is deleted.</source>
        <translation>Gespeicherter Laufzeitzustand: das Objekt, auf das der Effekt gelegt wurde; beim Löschen des Verhaltens wird der Effekt davon entfernt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the shoot sequence currently playing (a play-once behaviour); deleted when the behaviour begins again.</source>
        <translation>Gespeicherter Laufzeitzustand: die gerade laufende Schuss-Sequenz (ein Einmal-Abspielen-Verhalten); wird beim erneuten Beginn des Verhaltens gelöscht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: 1 when the top behaviour of the stack has begun.</source>
        <translation>Gespeicherter Laufzeitzustand: 1, wenn das oberste Verhalten des Stapels begonnen hat.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Priority of what was pushed last (Idle, Interruptable, SouldComplete, MustComplete). A new behaviour with a lower priority is refused; at „MustComplete“ nothing new is accepted until the stack is empty. Falls back to „Idle“ when empty.</source>
        <translation>Priorität dessen, was zuletzt aufgelegt wurde (Idle, Interruptable, SouldComplete, MustComplete). Ein neues Verhalten mit niedrigerer Priorität wird abgelehnt; bei „MustComplete“ wird nichts Neues angenommen, bis der Stapel leer ist. Bei leerem Stapel wieder „Idle“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the behaviours on the stack, the last one is on top and runs.</source>
        <translation>Gespeicherter Laufzeitzustand: die Verhalten auf dem Stapel, das letzte liegt oben und läuft.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Value the envelope starts from (-10000..10000; units depend on the use, e.g. seconds, degrees, pixels). When the owner resets it, the value jumps here and runs towards „End Value“.</source>
        <translation>Wert, bei dem die Hüllkurve beginnt (-10000..10000; Einheit je nach Verwendung, z. B. Sekunden, Grad, Pixel). Beim Zurücksetzen durch den Besitzer springt der Wert hierher und läuft auf „End Value“ zu.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Value the envelope runs to; it stops exactly there, then „Ending Behavior“ decides what follows. Equal to „Start Value“ keeps a constant value.</source>
        <translation>Wert, auf den die Hüllkurve zuläuft; sie hält genau dort an, dann entscheidet „Ending Behavior“, was folgt. Gleich „Start Value“ ergibt einen konstanten Wert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Change of the value per second (in the value&apos;s units). Keep it positive: the direction towards the end value is chosen by the game; a negative speed runs away from the target and never arrives.</source>
        <translation>Änderung des Werts pro Sekunde (in der Einheit des Werts). Positiv lassen: die Richtung zum Endwert wählt das Spiel; eine negative Geschwindigkeit läuft vom Ziel weg und kommt nie an.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>What happens at the end: „Stop at end“ keeps the end value, „Restart from beginning“ jumps back to „Start Value“ and runs again, „Reverse Direction“ runs back and forth between both values.</source>
        <translation>Was am Ende passiert: „Stop at end“ behält den Endwert, „Restart from beginning“ springt zurück auf „Start Value“ und läuft erneut, „Reverse Direction“ läuft zwischen beiden Werten hin und her.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the envelope&apos;s present value; the owner&apos;s reset sets it to „Start Value“ (particle emitters reset their envelopes when they start).</source>
        <translation>Gespeicherter Laufzeitzustand: der aktuelle Wert der Hüllkurve; das Zurücksetzen durch den Besitzer setzt ihn auf „Start Value“ (Partikel-Emitter setzen ihre Hüllkurven beim Start zurück).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: 1 while the value runs towards „End Value“, 0 while it runs back to „Start Value“ (Reverse Direction). Set to 1 by a reset.</source>
        <translation>Gespeicherter Laufzeitzustand: 1, solange der Wert auf „End Value“ zuläuft, 0, solange er zu „Start Value“ zurückläuft (Reverse Direction). Ein Zurücksetzen setzt 1.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: 1 or -1, the sign of the movement; a reset sets 1 when „End Value“ is above „Start Value“, else -1.</source>
        <translation>Gespeicherter Laufzeitzustand: 1 oder -1, das Vorzeichen der Bewegung; ein Zurücksetzen setzt 1, wenn „End Value“ über „Start Value“ liegt, sonst -1.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Average time in seconds (default 20) between two fidget animations of an idling character. The first wait after the idle starts is random between 0.25 and 1.75 times this value.</source>
        <translation>Durchschnittliche Zeit in Sekunden (Standard 20) zwischen zwei Zappel-Animationen einer Figur im Leerlauf. Die erste Wartezeit nach Beginn des Leerlaufs ist zufällig zwischen dem 0,25- und 1,75-fachen dieses Werts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Spread of the waits after a fidget (default 4): 0 waits exactly the average time; larger values give a random wait from 0 upwards around the average, with occasional long waits.</source>
        <translation>Streuung der Wartezeiten nach einem Zappeln (Standard 4): 0 wartet genau die durchschnittliche Zeit; größere Werte ergeben eine zufällige Wartezeit ab 0 um den Durchschnitt, mit gelegentlich langen Wartezeiten.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Which of the model&apos;s „Fidget“ sequences plays (crouching: „FidgetCrouch“ ones): „First Sequence Only“, „Random Order“, „Never Same Twice Consecutively“ (reports an error with only one). Original bugs: „Shuffeled Order“ and „Special Shuffeled Order“ are not implemented (error, no fidget); „Sequential Order“ never advances and always plays the same one.</source>
        <translation>Welche der „Fidget“-Sequenzen des Modells spielt (geduckt: die „FidgetCrouch“-Sequenzen): „First Sequence Only“, „Random Order“, „Never Same Twice Consecutively“ (meldet bei nur einer einen Fehler). Fehler des Originals: „Shuffeled Order“ und „Special Shuffeled Order“ sind nicht umgesetzt (Fehlermeldung, kein Zappeln); „Sequential Order“ schaltet nie weiter und spielt immer dieselbe.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Damage in hit points per second (0–9999) to living objects whose centre stands on ground of this texture. Only with a „Damage Type“ other than none. Set in the texture&apos;s .txt file, not in levels.</source>
        <translation>Schaden in Trefferpunkten pro Sekunde (0–9999) für lebende Objekte, deren Mittelpunkt auf Boden mit dieser Textur steht. Nur mit einem „Damage Type“ ungleich keinem. Wird in der .txt-Datei der Textur gesetzt, nicht in Levels.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Damage type of the ground damage; „!None“ (as in all shipped textures) switches the ground damage off.</source>
        <translation>Schadensart des Bodenschadens; „!None“ (wie bei allen mitgelieferten Texturen) schaltet den Bodenschaden ab.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Surface of this ground texture (default „Generic“), e.g. for surface-dependent footstep sounds; it counts where no object at that point gives its own surface.</source>
        <translation>Oberfläche dieser Bodentextur (Standard „Generic“), z. B. für oberflächenabhängige Schrittgeräusche; sie gilt, wo kein Objekt an dieser Stelle eine eigene Oberfläche liefert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The level&apos;s header (CLayerSaveData). A level file holds exactly this object&apos;s fields; it is not written as a separate field.</source>
        <translation>Der Kopf des Levels (CLayerSaveData). Eine Leveldatei enthält genau die Felder dieses Objekts; es wird nicht als eigenes Feld geschrieben.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Texts drawn onto a full-screen image (a .foo file in „Resources/Frame Overlay Options“ named like the image, e.g. the demo&apos;s sell screens), each with font, position and wrapping.</source>
        <translation>Texte, die auf ein Vollbild gezeichnet werden (eine .foo-Datei in „Resources/Frame Overlay Options“ mit dem Namen des Bildes, z. B. die Verkaufsbildschirme der Demo), jeder mit Schrift, Position und Umbruch.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the text (default „Character Dialog“).</source>
        <translation>Schrift des Textes (Standard „Character Dialog“).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Position of the text on the image in pixels (x, y). Set it explicitly: the game gives it no default.</source>
        <translation>Position des Textes auf dem Bild in Pixeln (x, y). Ausdrücklich setzen: das Spiel gibt keinen Standardwert vor.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Width in pixels at which the text wraps to the next line (default 128).</source>
        <translation>Breite in Pixeln, ab der der Text in die nächste Zeile umbricht (Standard 128).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The text that is drawn.</source>
        <translation>Der gezeichnete Text.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Extra space between wrapped lines in pixels (default 2).</source>
        <translation>Zusätzlicher Abstand zwischen umgebrochenen Zeilen in Pixeln (Standard 2).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Alignment of the text lines: left, centre or right (default left).</source>
        <translation>Ausrichtung der Textzeilen: links, mittig oder rechts (Standard links).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name of the game mode (e.g. „Death Match“, „Quest“). No code reading it was found, so its use is assumed (a display name).</source>
        <translation>Name des Spielmodus (z. B. „Death Match“, „Quest“). Es wurde kein Code gefunden, der ihn liest; die Verwendung ist angenommen (ein Anzeigename).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Inventory a player gets at every (re)spawn: the inventory is emptied and filled from this one. Empty (as in quest mode) leaves the player without items after a respawn.</source>
        <translation>Inventar, das ein Spieler bei jedem (Wieder-)Einstieg bekommt: das Inventar wird geleert und hieraus gefüllt. Leer (wie im Quest-Modus) lässt den Spieler nach einem Wiedereinstieg ohne Gegenstände.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Model of the player character in this game mode (shipped: „Characters/Crater/Crater“ for quest, „Crater Multiplayer“ for the multiplayer modes). No code reading it was found, so its effect is assumed.</source>
        <translation>Modell der Spielerfigur in diesem Spielmodus (mitgeliefert: „Characters/Crater/Crater“ für Quest, „Crater Multiplayer“ für die Mehrspielermodi). Es wurde kein Code gefunden, der es liest; die Wirkung ist angenommen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Only used when „Is Team Game“ is 1: the number of teams of the match, joining players go to the smallest of them. „Unlimited“ (0) means up to 20 teams for the assignment.</source>
        <translation>Wird nur bei „Is Team Game“ = 1 verwendet: die Zahl der Teams des Matches, neue Spieler kommen ins kleinste davon. „Unlimited“ (0) bedeutet bis zu 20 Teams bei der Zuteilung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>In a team game a joining player goes to the smallest team (limited by „Max Number of Teams“), the score boards draw players in the blue/red team fonts and the team count is set for the match; otherwise every player gets a team of their own.</source>
        <translation>In einem Teamspiel kommt ein neuer Spieler ins kleinste Team (begrenzt durch „Max Number of Teams“), die Punktetafeln zeichnen Spieler in den blauen/roten Teamschriften, und die Teamzahl wird für das Match gesetzt; sonst bekommt jeder Spieler ein eigenes Team.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>A player spawning without a named start point then uses the Team Info (start points) of a randomly chosen team instead of their own team&apos;s.</source>
        <translation>Ein Spieler, der ohne benannten Startpunkt einsteigt, nimmt dann die Team Info (Startpunkte) eines zufällig gewählten Teams statt der seines eigenen Teams.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action executed when a player takes the lead (more points than every other player); it runs once per change, with that player as the current connection (e.g. for an announcement to them).</source>
        <translation>Aktion, die ausgeführt wird, wenn ein Spieler die Führung übernimmt (mehr Punkte als jeder andere Spieler); sie läuft einmal pro Wechsel, mit diesem Spieler als aktueller Verbindung (z. B. für eine Ansage an ihn).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action executed when a player falls behind (another player has more points); it runs once per change, with that player as the current connection (e.g. for an announcement to them).</source>
        <translation>Aktion, die ausgeführt wird, wenn ein Spieler zurückfällt (ein anderer Spieler hat mehr Punkte); sie läuft einmal pro Wechsel, mit diesem Spieler als aktueller Verbindung (z. B. für eine Ansage an ihn).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action executed when a player ties with the best other player; it runs once per change, with that player as the current connection (e.g. for an announcement to them).</source>
        <translation>Aktion, die ausgeführt wird, wenn ein Spieler mit dem besten anderen Spieler gleichzieht; sie läuft einmal pro Wechsel, mit diesem Spieler als aktueller Verbindung (z. B. für eine Ansage an ihn).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the rule lines at the bottom of the mini score board (time limit, score limit). The player rows do not use it.</source>
        <translation>Schrift der Regelzeilen unten auf der Mini-Punktetafel (Zeitlimit, Punktelimit). Die Spielerzeilen verwenden sie nicht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the mini score board&apos;s headings (Name, Ping, Score); in games without teams also the font of all player rows.</source>
        <translation>Schrift der Überschriften der Mini-Punktetafel (Name, Ping, Score); in Spielen ohne Teams auch die Schrift aller Spielerzeilen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the rows of players of the first team (blue) on the mini score board; only in team games.</source>
        <translation>Schrift der Zeilen der Spieler des ersten Teams (blau) auf der Mini-Punktetafel; nur in Teamspielen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the rows of players of every other team (red) on the mini score board; only in team games.</source>
        <translation>Schrift der Zeilen der Spieler aller anderen Teams (rot) auf der Mini-Punktetafel; nur in Teamspielen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the flag mark next to a player of the red team who carries a flag (i.e. the blue flag).</source>
        <translation>Schrift der Flaggenmarke neben einem Spieler des roten Teams, der eine Flagge trägt (also die blaue Flagge).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the flag mark next to a flag carrier who is not on the red team (i.e. the red flag).</source>
        <translation>Schrift der Flaggenmarke neben einem Flaggenträger, der nicht im roten Team ist (also die rote Flagge).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Text of the flag mark shown next to a red-team player carrying a flag (default „*“).</source>
        <translation>Text der Flaggenmarke neben einem Spieler des roten Teams, der eine Flagge trägt (Standard „*“).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Text of the flag mark shown next to any other flag carrier (default „*“).</source>
        <translation>Text der Flaggenmarke neben jedem anderen Flaggenträger (Standard „*“).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>X position in pixels on the mini score board of the column with the rank number (no heading) (default 10); the column&apos;s justification is relative to it.</source>
        <translation>X-Position in Pixeln auf der Mini-Punktetafel für die Spalte mit Platznummer (ohne Überschrift) (Standard 10); die Ausrichtung der Spalte bezieht sich darauf.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Alignment of the mini score board column with the rank number (no heading) at its X position: left, centre or right.</source>
        <translation>Ausrichtung der Spalte der Mini-Punktetafel mit Platznummer (ohne Überschrift) an ihrer X-Position: links, mittig oder rechts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>X position in pixels on the mini score board of the column with the flag mark (only for flag carriers) (default 12); the column&apos;s justification is relative to it.</source>
        <translation>X-Position in Pixeln auf der Mini-Punktetafel für die Spalte mit Flaggenmarke (nur bei Flaggenträgern) (Standard 12); die Ausrichtung der Spalte bezieht sich darauf.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Alignment of the mini score board column with the flag mark (only for flag carriers) at its X position: left, centre or right.</source>
        <translation>Ausrichtung der Spalte der Mini-Punktetafel mit Flaggenmarke (nur bei Flaggenträgern) an ihrer X-Position: links, mittig oder rechts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>X position in pixels on the mini score board of the column with the player name and its heading (default 17); the column&apos;s justification is relative to it.</source>
        <translation>X-Position in Pixeln auf der Mini-Punktetafel für die Spalte mit Spielername und seine Überschrift (Standard 17); die Ausrichtung der Spalte bezieht sich darauf.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Alignment of the mini score board column with the player name and its heading at its X position: left, centre or right.</source>
        <translation>Ausrichtung der Spalte der Mini-Punktetafel mit Spielername und seine Überschrift an ihrer X-Position: links, mittig oder rechts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>X position in pixels on the mini score board of the column with the score and its heading (default 170); the column&apos;s justification is relative to it.</source>
        <translation>X-Position in Pixeln auf der Mini-Punktetafel für die Spalte mit Punktzahl und ihre Überschrift (Standard 170); die Ausrichtung der Spalte bezieht sich darauf.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Alignment of the mini score board column with the score and its heading at its X position: left, centre or right.</source>
        <translation>Ausrichtung der Spalte der Mini-Punktetafel mit Punktzahl und ihre Überschrift an ihrer X-Position: links, mittig oder rechts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>X position in pixels on the mini score board of the column with the ping and its heading (default 100); the column&apos;s justification is relative to it.</source>
        <translation>X-Position in Pixeln auf der Mini-Punktetafel für die Spalte mit Ping und seine Überschrift (Standard 100); die Ausrichtung der Spalte bezieht sich darauf.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Alignment of the mini score board column with the ping and its heading at its X position: left, centre or right.</source>
        <translation>Ausrichtung der Spalte der Mini-Punktetafel mit Ping und seine Überschrift an ihrer X-Position: links, mittig oder rechts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>X position in pixels on the mini score board of the column with the first extra number of the game mode (only when not 0, no heading) (default 120); the column&apos;s justification is relative to it.</source>
        <translation>X-Position in Pixeln auf der Mini-Punktetafel für die Spalte mit erste Zusatzzahl des Spielmodus (nur wenn ungleich 0, ohne Überschrift) (Standard 120); die Ausrichtung der Spalte bezieht sich darauf.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Alignment of the mini score board column with the first extra number of the game mode (only when not 0, no heading) at its X position: left, centre or right.</source>
        <translation>Ausrichtung der Spalte der Mini-Punktetafel mit erste Zusatzzahl des Spielmodus (nur wenn ungleich 0, ohne Überschrift) an ihrer X-Position: links, mittig oder rechts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>X position in pixels on the mini score board of the column with the second extra number of the game mode (only when not 0, no heading) (default 140); the column&apos;s justification is relative to it.</source>
        <translation>X-Position in Pixeln auf der Mini-Punktetafel für die Spalte mit zweite Zusatzzahl des Spielmodus (nur wenn ungleich 0, ohne Überschrift) (Standard 140); die Ausrichtung der Spalte bezieht sich darauf.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Alignment of the mini score board column with the second extra number of the game mode (only when not 0, no heading) at its X position: left, centre or right.</source>
        <translation>Ausrichtung der Spalte der Mini-Punktetafel mit zweite Zusatzzahl des Spielmodus (nur wenn ungleich 0, ohne Überschrift) an ihrer X-Position: links, mittig oder rechts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Alignment of the rule lines (time and score limit) at the bottom of the mini score board: left (at „Line Spacing“ pixels from the left edge), centre, or right (the same distance from the right edge).</source>
        <translation>Ausrichtung der Regelzeilen (Zeit- und Punktelimit) unten auf der Mini-Punktetafel: links (im Abstand „Line Spacing“ Pixel vom linken Rand), mittig oder rechts (gleicher Abstand vom rechten Rand).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Extra pixels between the rows of the mini score board (default 2). Also used as the rule lines&apos; distance from the bottom and the side edge.</source>
        <translation>Zusätzliche Pixel zwischen den Zeilen der Mini-Punktetafel (Standard 2). Dient auch als Abstand der Regelzeilen vom unteren und seitlichen Rand.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Extra pixels between the heading row and the first player row of the mini score board (default 4).</source>
        <translation>Zusätzliche Pixel zwischen der Überschriftenzeile und der ersten Spielerzeile der Mini-Punktetafel (Standard 4).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Y position in pixels of the mini score board&apos;s heading row (default 2).</source>
        <translation>Y-Position in Pixeln der Überschriftenzeile der Mini-Punktetafel (Standard 2).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>No effect in the game: the end score board (shown when the match is over) never reads this font (only saved and loaded).</source>
        <translation>Keine Wirkung im Spiel: die End-Punktetafel (am Ende des Matches) liest diese Schrift nie (nur gespeichert und geladen).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the end score board&apos;s headings (Rank, Name, Score) shown when the match is over; in games without teams also the font of all player rows.</source>
        <translation>Schrift der Überschriften der End-Punktetafel (Rank, Name, Score) am Ende des Matches; in Spielen ohne Teams auch die Schrift aller Spielerzeilen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the end score board rows of players of the first team (blue); only in team games.</source>
        <translation>Schrift der Zeilen der End-Punktetafel für Spieler des ersten Teams (blau); nur in Teamspielen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the end score board rows of players of every other team (red); only in team games.</source>
        <translation>Schrift der Zeilen der End-Punktetafel für Spieler aller anderen Teams (rot); nur in Teamspielen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>X position in pixels of the end score board&apos;s rank column and its heading, from the left edge of the table area in the match-over window (default 15).</source>
        <translation>X-Position in Pixeln der Spalte für den Platz der End-Punktetafel und ihrer Überschrift, ab dem linken Rand des Tabellenbereichs im Fenster am Matchende (Standard 15).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Alignment of the end score board&apos;s rank column at its X position: left, centre or right.</source>
        <translation>Ausrichtung der Spalte für den Platz der End-Punktetafel an ihrer X-Position: links, mittig oder rechts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>X position in pixels of the end score board&apos;s name column and its heading, from the left edge of the table area in the match-over window (default 70).</source>
        <translation>X-Position in Pixeln der Spalte für den Namen der End-Punktetafel und ihrer Überschrift, ab dem linken Rand des Tabellenbereichs im Fenster am Matchende (Standard 70).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Alignment of the end score board&apos;s name column at its X position: left, centre or right.</source>
        <translation>Ausrichtung der Spalte für den Namen der End-Punktetafel an ihrer X-Position: links, mittig oder rechts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>X position in pixels of the end score board&apos;s score column and its heading, from the left edge of the table area in the match-over window (default 140).</source>
        <translation>X-Position in Pixeln der Spalte für den Punktzahl der End-Punktetafel und ihrer Überschrift, ab dem linken Rand des Tabellenbereichs im Fenster am Matchende (Standard 140).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Alignment of the end score board&apos;s score column at its X position: left, centre or right.</source>
        <translation>Ausrichtung der Spalte für den Punktzahl der End-Punktetafel an ihrer X-Position: links, mittig oder rechts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Extra pixels between the player rows of the end score board (default 2).</source>
        <translation>Zusätzliche Pixel zwischen den Spielerzeilen der End-Punktetafel (Standard 2).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Extra pixels between the heading row and the first player row of the end score board (default 4).</source>
        <translation>Zusätzliche Pixel zwischen der Überschriftenzeile und der ersten Spielerzeile der End-Punktetafel (Standard 4).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Y offset in pixels of the end score board&apos;s heading row below the top of the table area (default 2).</source>
        <translation>Y-Versatz in Pixeln der Überschriftenzeile der End-Punktetafel unter dem oberen Rand des Tabellenbereichs (Standard 2).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the team score lines on the Capture the Flag HUD: one line per team (team name right-aligned, then its capture count) and a last line with the local player&apos;s own score.</source>
        <translation>Schrift der Teamwertung im Capture-the-Flag-HUD: eine Zeile pro Team (Teamname rechtsbündig, dann die Zahl der Eroberungen) und eine letzte Zeile mit der eigenen Punktzahl des Spielers.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Position in pixels of the team score lines, relative to the game type&apos;s area of the HUD bar; the team names end at this x and the numbers start there, each further line one font height lower. Default 270, 14.</source>
        <translation>Position der Teamwertungszeilen in Pixeln, relativ zum Spieltyp-Bereich der HUD-Leiste; die Teamnamen enden bei diesem x und die Zahlen beginnen dort, jede weitere Zeile eine Schrifthöhe tiefer. Standard 270, 14.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Position in pixels where the team overlay image (&quot;Blue Team Overlay&quot; or &quot;Red Team Overlay&quot;, by the local player&apos;s team) is drawn, relative to the game type&apos;s area of the HUD bar. Default 185, 10.</source>
        <translation>Position in Pixeln, an der das Team-Overlay-Bild („Blue Team Overlay“ oder „Red Team Overlay“, je nach Team des lokalen Spielers) gezeichnet wird, relativ zum Spieltyp-Bereich der HUD-Leiste. Standard 185, 10.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Image shown on the HUD at &quot;Team Color Overlay Location&quot; while the local player is in team 0 (blue).</source>
        <translation>Bild, das im HUD bei „Team Color Overlay Location“ angezeigt wird, solange der lokale Spieler in Team 0 (Blau) ist.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Image shown on the HUD at &quot;Team Color Overlay Location&quot; while the local player is in any team other than 0 (normally team 1, red).</source>
        <translation>Bild, das im HUD bei „Team Color Overlay Location“ angezeigt wird, solange der lokale Spieler in einem anderen Team als 0 ist (normalerweise Team 1, Rot).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 (default): when a client sends its player colours, the first colour (the &quot;New Hue 1&quot; of the character&apos;s hue remap) is replaced by &quot;Blue Team Hue&quot; for team 0 or &quot;Red Team Hue&quot; for team 1; the second colour stays the player&apos;s choice. 0: players keep their own colours.</source>
        <translation>1 (Standard): Wenn ein Client seine Spielerfarben sendet, wird die erste Farbe („New Hue 1“ der Farbtonumsetzung der Figur) für Team 0 durch „Blue Team Hue“ und für Team 1 durch „Red Team Hue“ ersetzt; die zweite Farbe bleibt die Wahl des Spielers. 0: Spieler behalten ihre eigenen Farben.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Hue in degrees (0–360) forced on team 0 players&apos; first colour while &quot;Force Team Colors On Players&quot; is set. Default 215.</source>
        <translation>Farbton in Grad (0–360), der der ersten Farbe der Spieler von Team 0 aufgezwungen wird, solange „Force Team Colors On Players“ gesetzt ist. Standard 215.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Hue in degrees (0–360) forced on team 1 players&apos; first colour while &quot;Force Team Colors On Players&quot; is set. Default 0.</source>
        <translation>Farbton in Grad (0–360), der der ersten Farbe der Spieler von Team 1 aufgezwungen wird, solange „Force Team Colors On Players“ gesetzt ist. Standard 0.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the local player&apos;s own frag count on the Death Match HUD (centred on &quot;Frags Location&quot;). Default &quot;Number Grn&quot;.</source>
        <translation>Schrift der eigenen Frag-Zahl des lokalen Spielers im Deathmatch-HUD (zentriert auf „Frags Location“). Standard „Number Grn“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Centre point in pixels of the player&apos;s frag count, relative to the game type&apos;s area of the HUD bar. Default 348, 31.</source>
        <translation>Mittelpunkt der Frag-Zahl des Spielers in Pixeln, relativ zum Spieltyp-Bereich der HUD-Leiste. Standard 348, 31.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the ranking table on the Death Match HUD (rank, name and frags of the leading players). Default &quot;Small Green&quot;.</source>
        <translation>Schrift der Ranglistentabelle im Deathmatch-HUD (Rang, Name und Frags der führenden Spieler). Standard „Small Green“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Top-left point in pixels of the HUD ranking table, relative to the game type&apos;s area of the HUD bar; the &quot;Hud RankBoard … X&quot; columns are offsets from its x. Default 190, 12.</source>
        <translation>Obere linke Ecke der Ranglistentabelle im HUD in Pixeln, relativ zum Spieltyp-Bereich der HUD-Leiste; die Spalten „Hud RankBoard … X“ sind Abstände von diesem x. Standard 190, 12.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Number of rows the HUD ranking table shows at most (fewer when fewer players are ranked). Default 4.</source>
        <translation>Höchstzahl der Zeilen der Ranglistentabelle im HUD (weniger, wenn weniger Spieler in der Rangliste sind). Standard 4.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Extra pixels between two rows of the HUD ranking table, added to the font&apos;s line height. Default 2.</source>
        <translation>Zusätzliche Pixel zwischen zwei Zeilen der Ranglistentabelle im HUD, zur Zeilenhöhe der Schrift addiert. Standard 2.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Horizontal offset in pixels of the rank number column from &quot;Rankings Location&quot;. Default 0.</source>
        <translation>Horizontaler Abstand der Rangnummer-Spalte von „Rankings Location“ in Pixeln. Standard 0.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>How the rank numbers are aligned at their column x: left (text starts there), centre or right (text ends there). Default left.</source>
        <translation>Ausrichtung der Rangnummern an ihrem Spalten-x: links (Text beginnt dort), zentriert oder rechts (Text endet dort). Standard links.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Horizontal offset in pixels of the player name column from &quot;Rankings Location&quot;. Default 76.</source>
        <translation>Horizontaler Abstand der Spielernamen-Spalte von „Rankings Location“ in Pixeln. Standard 76.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>How the player names are aligned at their column x: left, centre or right. Default right (names end at the column x).</source>
        <translation>Ausrichtung der Spielernamen an ihrem Spalten-x: links, zentriert oder rechts. Standard rechts (Namen enden am Spalten-x).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Horizontal offset in pixels of the frag count column from &quot;Rankings Location&quot;. Default 80.</source>
        <translation>Horizontaler Abstand der Frag-Spalte von „Rankings Location“ in Pixeln. Standard 80.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>How the frag counts are aligned at their column x: left, centre or right. Default left.</source>
        <translation>Ausrichtung der Frag-Zahlen an ihrem Spalten-x: links, zentriert oder rechts. Standard links.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Points per unit of &quot;Ore Deposits&quot; when a Salvage King score-minerals action runs for a player: the player&apos;s ore is converted into score (count × value) and removed from the inventory. Default 1. Reaching the net game&apos;s frag limit ends the match.</source>
        <translation>Punkte pro Einheit „Ore Deposits“, wenn eine Salvage-King-Aktion zum Werten der Mineralien für einen Spieler ausgeführt wird: Das Erz des Spielers wird in Punkte umgerechnet (Anzahl × Wert) und aus dem Inventar entfernt. Standard 1. Erreicht die Punktzahl das Frag-Limit des Netzwerkspiels, endet die Partie.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Points per unit of &quot;Crystals&quot; when a Salvage King score-minerals action runs for a player: the crystals are converted into score (count × value) and removed from the inventory. Default 3.</source>
        <translation>Punkte pro Einheit „Crystals“, wenn eine Salvage-King-Aktion zum Werten der Mineralien für einen Spieler ausgeführt wird: Die Kristalle werden in Punkte umgerechnet (Anzahl × Wert) und aus dem Inventar entfernt. Standard 3.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the local player&apos;s score on the Salvage King HUD (centred on &quot;Frags Location&quot;); despite the name it shows the mineral score. Default &quot;Number Grn&quot;.</source>
        <translation>Schrift der Punktzahl des lokalen Spielers im Salvage-King-HUD (zentriert auf „Frags Location“); trotz des Namens zeigt sie die Mineralienpunkte. Standard „Number Grn“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Centre point in pixels of the player&apos;s score on the Salvage King HUD, relative to the game type&apos;s area of the HUD bar. Default 348, 31.</source>
        <translation>Mittelpunkt der Punktzahl des Spielers im Salvage-King-HUD in Pixeln, relativ zum Spieltyp-Bereich der HUD-Leiste. Standard 348, 31.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The columns of the statistics table in the single-player mission-over window: column 0 the statistic&apos;s name, 1 and 2 its two values (this mission and the total), 3 the points (only shown when the statistics are scored). Each column has heading, value format, heading font, x offset, width and justification.</source>
        <translation>Die Spalten der Statistiktabelle im Missionsende-Fenster des Einzelspielers: Spalte 0 der Name der Statistik, 1 und 2 ihre beiden Werte (diese Mission und gesamt), 3 die Punkte (nur angezeigt, wenn die Statistiken gewertet werden). Jede Spalte hat Überschrift, Wertformat, Überschriftschrift, x-Abstand, Breite und Ausrichtung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>One entry per statistic (in the order of the game&apos;s statistic names: ore collected, crystals collected, enemies killed, elapsed time, …): whether and how it is shown in the mission-over table, its label and fonts and its point weighting.</source>
        <translation>Ein Eintrag pro Statistik (in der Reihenfolge der Statistiknamen des Spiels: gesammeltes Erz, gesammelte Kristalle, getötete Gegner, verstrichene Zeit, …): ob und wie sie in der Missionsende-Tabelle erscheint, ihre Beschriftung und Schriften sowie ihre Punktgewichtung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Built-in default is &quot; (typical)&quot;; QuestMode.ZGT sets &quot;(par %s)&quot;. The par row is drawn under a statistic&apos;s row in column 0 unless the statistic hides it.</source>
        <translation>Eingebauter Standard ist „   (typical)“; QuestMode.ZGT setzt „(par %s)“. Die Par-Zeile wird in Spalte 0 unter der Zeile einer Statistik gezeichnet, sofern die Statistik sie nicht ausblendet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Speed at which the statistics table scrolls upward in the mission-over window when it does not fit; the table repeats seamlessly. The value is in pixels per millisecond (the code multiplies it with the millisecond tick count), although the editor labels it pixels per second. Default 0.01 (= 10 pixels per second).</source>
        <translation>Geschwindigkeit, mit der die Statistiktabelle im Missionsende-Fenster nach oben läuft, wenn sie nicht hineinpasst; die Tabelle wiederholt sich nahtlos. Der Wert ist in Pixeln pro Millisekunde (der Code multipliziert ihn mit dem Millisekunden-Zähler), obwohl der Editor ihn als Pixel pro Sekunde bezeichnet. Standard 0,01 (= 10 Pixel pro Sekunde).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The map is drawn at this offset from the top-left of the &quot;NEWMINIMAP&quot; frame image while that frame slides in with the HUD. Default 13, 17.</source>
        <translation>Die Karte wird mit diesem Abstand von der linken oberen Ecke des Rahmenbilds „NEWMINIMAP“ gezeichnet, während dieser Rahmen mit dem HUD hereinfährt. Standard 13, 17.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Width and height in pixels of the mini-map frame; also the size of every layer&apos;s mini-map image and fog-of-war image, into which the level is scaled. Default 155 × 95.</source>
        <translation>Breite und Höhe des Minikarten-Bilds in Pixeln; zugleich die Größe des Minikarten- und Nebel-des-Krieges-Bilds jeder Ebene, in die der Level skaliert wird. Standard 155 × 95.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Seconds; the same timer is used when the inventory panel hides and restores the map. Default 0.33.</source>
        <translation>Sekunden; derselbe Zeitgeber gilt, wenn das Inventar-Panel die Karte aus- und wieder einblendet. Standard 0,33.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sound played when the mini-map window starts to slide open (toggle, or coming back after the inventory panel). Default &quot;Inventory Up.wav&quot;.</source>
        <translation>Sound, der abgespielt wird, wenn das Minikarten-Fenster aufzufahren beginnt (Umschalten oder Rückkehr nach dem Inventar-Panel). Standard „Inventory Up.wav“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sound played when the mini-map window starts to slide closed (toggle, or when the inventory panel opens). Default &quot;Sounds/Inventory Down.wav&quot;.</source>
        <translation>Sound, der abgespielt wird, wenn das Minikarten-Fenster zuzufahren beginnt (Umschalten oder beim Öffnen des Inventar-Panels). Standard „Sounds/Inventory Down.wav“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The level (without its mini-map clipping) is divided by this value, then shrunk further if it still does not fit &quot;MiniMap Size&quot;; so one map pixel covers at least this many level pixels. Default 48.</source>
        <translation>Der Level (ohne seinen Minikarten-Zuschnitt) wird durch diesen Wert geteilt und weiter verkleinert, falls er dann noch nicht in „MiniMap Size“ passt; ein Kartenpixel deckt also mindestens so viele Levelpixel ab. Standard 48.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Each layer&apos;s fog-of-war image and mini-map image start filled with this colour; explored parts of the fog are cleared. In multiplayer games the mini-map window shows the mini score board on this colour instead of the map.</source>
        <translation>Das Nebel-des-Krieges-Bild und das Minikarten-Bild jeder Ebene werden zu Beginn mit dieser Farbe gefüllt; erkundete Teile des Nebels werden gelöscht. In Mehrspielerpartien zeigt das Minikarten-Fenster statt der Karte die kleine Punktetafel auf dieser Farbe.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>A 3 × 3 pixel dot at the first character&apos;s position.</source>
        <translation>Ein Punkt von 3 × 3 Pixeln an der Position der ersten Figur.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>A 3 × 3 pixel dot for every object the layer monitors as a point of interest.</source>
        <translation>Ein Punkt von 3 × 3 Pixeln für jedes Objekt, das die Ebene als interessanten Punkt überwacht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The fog of war around the view is uncovered again when the view has moved more than this from where it was last uncovered, or the layer changed. The value is compared with the squared distance (pixels²): the default 4096 means 64 pixels. -1 (&quot;Always Update&quot;) uncovers every frame.</source>
        <translation>Der Nebel des Krieges um die Ansicht wird erneut aufgedeckt, wenn sich die Ansicht weiter als dieser Wert von der letzten Aufdeckung bewegt hat oder die Ebene gewechselt hat. Der Wert wird mit dem Quadrat der Entfernung verglichen (Pixel²): Der Standard 4096 bedeutet 64 Pixel. -1 („Always Update“) deckt in jedem Bild auf.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>0–1; multiplied with the current opacity when the finished map is drawn onto the HUD. Default 0.8.</source>
        <translation>0–1; wird beim Zeichnen der fertigen Karte ins HUD mit der aktuellen Deckkraft multipliziert. Standard 0,8.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Hue in degrees (0–360) of the colours that the first remap replaces: every pixel of the figure whose hue lies within &quot;Error 1&quot; of it gets &quot;New Hue 1&quot;, keeping its lightness and saturation. Default 268 (purple).</source>
        <translation>Farbton in Grad (0–360) der Farben, die die erste Umsetzung ersetzt: Jedes Pixel der Figur, dessen Farbton höchstens „Error 1“ davon entfernt ist, erhält „New Hue 1“, Helligkeit und Sättigung bleiben. Standard 268 (Violett).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Hue in degrees (0–360) given to the colours matched by &quot;Source Hue 1&quot;/&quot;Error 1&quot;. In multiplayer it is set from the player&apos;s first chosen colour (or the team hue in Capture the Flag). Default 0 (red).</source>
        <translation>Farbton in Grad (0–360), den die von „Source Hue 1“/„Error 1“ erfassten Farben bekommen. Im Mehrspielermodus wird er aus der ersten gewählten Farbe des Spielers gesetzt (bzw. dem Teamfarbton bei Capture the Flag). Standard 0 (Rot).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Tolerance in degrees (0–100) around &quot;Source Hue 1&quot;: hues up to this far away on either side are remapped. Default 8.</source>
        <translation>Toleranz in Grad (0–100) um „Source Hue 1“: Farbtöne bis zu diesem Abstand nach beiden Seiten werden umgesetzt. Standard 8.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Hue in degrees (0–360) of the colours that the second remap replaces (applied after the first, independently): pixels within &quot;Error 2&quot; of it get &quot;New Hue 2&quot;. Default 160 (green).</source>
        <translation>Farbton in Grad (0–360) der Farben, die die zweite Umsetzung ersetzt (nach der ersten, unabhängig davon): Pixel höchstens „Error 2“ davon entfernt erhalten „New Hue 2“. Standard 160 (Grün).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Hue in degrees (0–360) given to the colours matched by &quot;Source Hue 2&quot;/&quot;Error 2&quot;. In multiplayer it is set from the player&apos;s second chosen colour. Default 180.</source>
        <translation>Farbton in Grad (0–360), den die von „Source Hue 2“/„Error 2“ erfassten Farben bekommen. Im Mehrspielermodus wird er aus der zweiten gewählten Farbe des Spielers gesetzt. Standard 180.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Tolerance in degrees (0–100) around &quot;Source Hue 2&quot;: hues up to this far away on either side are remapped. Default 4.</source>
        <translation>Toleranz in Grad (0–100) um „Source Hue 2“: Farbtöne bis zu diesem Abstand nach beiden Seiten werden umgesetzt. Standard 4.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The items the figure carries (its starting inventory in a level). Each category (Primary, Secondary, Health, …) selects its first item automatically when none is selected; picking up items adds to this list.</source>
        <translation>Die Gegenstände, die die Figur trägt (ihr Startinventar im Level). Jede Kategorie (Primary, Secondary, Health, …) wählt automatisch ihren ersten Gegenstand, wenn keiner gewählt ist; aufgenommene Gegenstände kommen in diese Liste.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Item types (catalogue entries) the figure has discovered. Items that require discovery can only be built in the materials generator once listed here; each new discovery counts in the quest statistic of discovered items.</source>
        <translation>Gegenstandsarten (Katalogeinträge), die die Figur entdeckt hat. Gegenstände, die eine Entdeckung erfordern, lassen sich im Materialgenerator erst bauen, wenn sie hier stehen; jede neue Entdeckung zählt in der Quest-Statistik der entdeckten Gegenstände.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: items just removed from the inventory, kept until the next update deletes them; leave empty in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: gerade aus dem Inventar entfernte Gegenstände, die bis zur nächsten Aktualisierung aufbewahrt und dann gelöscht werden; im Level leer lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: index in &quot;Inventory List&quot; of the item highlighted in the inventory screen (-1 none); set to each newly added item and corrected when it is out of range. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: Index in „Inventory List“ des im Inventarbildschirm hervorgehobenen Gegenstands (-1 keiner); wird auf jeden neu hinzugefügten Gegenstand gesetzt und korrigiert, wenn er außerhalb liegt. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state, one entry per item category: the selected item, the item being changed to and the change timers. Leave unchanged in a level; inconsistent entries are repaired.</source>
        <translation>Gespeicherter Laufzeitzustand, ein Eintrag pro Gegenstandskategorie: der gewählte Gegenstand, der Gegenstand, zu dem gewechselt wird, und die Wechsel-Zeitgeber. Im Level unverändert lassen; widersprüchliche Einträge werden repariert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time flag: 1 once the inventory has selected each category&apos;s first item and checked its lists. With 0 that happens on the first update. Leave unchanged in a level.</source>
        <translation>Gespeichertes Laufzeit-Flag: 1, sobald das Inventar in jeder Kategorie den ersten Gegenstand gewählt und seine Listen geprüft hat. Bei 0 geschieht das bei der ersten Aktualisierung. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Animated sequence (from the detail image list) drawn in the inventory screen over the item picture at the inventory page&apos;s &quot;Detail Image X/Y&quot;, playing in time with the game clock.</source>
        <translation>Animierte Sequenz (aus der Detailbild-Liste), die im Inventarbildschirm über dem Gegenstandsbild bei „Detail Image X/Y“ der Inventarseite gezeichnet wird und im Takt der Spieluhr läuft.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Another detail renderer drawn after this overlay; its text line is also what the item list shows for the item (none: no text).</source>
        <translation>Ein weiterer Detail-Renderer, der nach diesem Overlay gezeichnet wird; seine Textzeile ist auch das, was die Gegenstandsliste für den Gegenstand anzeigt (keiner: kein Text).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The text is drawn centred 45 pixels right of and 20 pixels below the detail position, and is also the item&apos;s text line.</source>
        <translation>Der Text wird zentriert 45 Pixel rechts und 20 Pixel unterhalb der Detailposition gezeichnet und ist auch die Textzeile des Gegenstands.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the count text in the inventory detail view.</source>
        <translation>Schrift des Anzahltexts in der Inventar-Detailansicht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Text shown in the inventory detail view for a deployable item; its %d is replaced by the item&apos;s value (its damage fraction, judging by the default text) times 100, %% gives a percent sign. Drawn centred at 45, 20 pixels from the detail position and used as the item&apos;s text line. Default &quot;Damage: %d%%&quot;.</source>
        <translation>Text, der in der Inventar-Detailansicht für einen aufstellbaren Gegenstand angezeigt wird; %d wird durch den Wert des Gegenstands (laut Standardtext sein Schadensanteil) mal 100 ersetzt, %% ergibt ein Prozentzeichen. Zentriert bei 45, 20 Pixel ab der Detailposition gezeichnet und als Textzeile des Gegenstands verwendet. Standard „Damage: %d%%“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the deployable&apos;s damage text in the inventory detail view.</source>
        <translation>Schrift des Schadenstexts des aufstellbaren Gegenstands in der Inventar-Detailansicht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Text used for an energy item whose charge is at most 1; %s is replaced by the charge printed with &quot;Digits Of Precision&quot; decimals. Drawn centred at 45, 20 pixels from the detail position and used as the item&apos;s text line. Default &quot;%s Mj&quot;.</source>
        <translation>Text für einen Energiegegenstand mit einer Ladung von höchstens 1; %s wird durch die Ladung mit „Digits Of Precision“ Nachkommastellen ersetzt. Zentriert bei 45, 20 Pixel ab der Detailposition gezeichnet und als Textzeile des Gegenstands verwendet. Standard „%s Mj“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Text used for an energy item whose charge is above 1; %s is replaced by the charge printed with &quot;Digits Of Precision&quot; decimals. Default &quot;%s Mj&quot;. Older files with a single &quot;Format&quot; are converted into both formats on loading.</source>
        <translation>Text für einen Energiegegenstand mit einer Ladung über 1; %s wird durch die Ladung mit „Digits Of Precision“ Nachkommastellen ersetzt. Standard „%s Mj“. Ältere Dateien mit nur einem „Format“ werden beim Laden in beide Formate umgewandelt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Number of decimal places (0–9) of the charge in the energy text. Default 1.</source>
        <translation>Anzahl der Nachkommastellen (0–9) der Ladung im Energietext. Standard 1.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the energy text in the inventory detail view.</source>
        <translation>Schrift des Energietexts in der Inventar-Detailansicht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sequence (from the detail image list) of which a random frame is drawn over the item picture at the inventory page&apos;s &quot;Detail Image X/Y&quot;; a new random frame is picked once per frame time of the sequence (1 / its frame rate).</source>
        <translation>Sequenz (aus der Detailbild-Liste), von der ein zufälliges Einzelbild über dem Gegenstandsbild bei „Detail Image X/Y“ der Inventarseite gezeichnet wird; ein neues Zufallsbild wird einmal pro Bilddauer der Sequenz (1 / ihre Bildrate) gewählt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Item (catalogue entry) the player receives once all &quot;Segments&quot; are collected; the segmented item is then removed. The segmented item can only be picked up while the completed item could be.</source>
        <translation>Gegenstand (Katalogeintrag), den der Spieler erhält, sobald alle „Segments“ gesammelt sind; der zusammengesetzte Gegenstand wird dann entfernt. Der Teilgegenstand kann nur aufgenommen werden, solange auch der fertige Gegenstand aufgenommen werden könnte.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The parts needed for completion, as images of the detail image list; they identify the parts and every collected part&apos;s image is drawn (animated) at the detail position. The item is complete when it holds as many parts as listed here.</source>
        <translation>Die zur Vervollständigung nötigen Teile als Bilder der Detailbild-Liste; sie kennzeichnen die Teile, und das Bild jedes gesammelten Teils wird (animiert) an der Detailposition gezeichnet. Der Gegenstand ist vollständig, wenn er so viele Teile hält wie hier aufgeführt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Runs right after the completed item is given, with the picking-up figure as instigator; nothing happens when the completed item cannot be taken.</source>
        <translation>Läuft direkt nach Übergabe des fertigen Gegenstands, mit der aufnehmenden Figur als Auslöser; kann der fertige Gegenstand nicht genommen werden, geschieht nichts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sequence drawn at the detail position whose frame shows the Sphere of Zin&apos;s charge: the frame index follows the charge ratio plus a sine pulse; for anything but an energy item frame 0 is shown.</source>
        <translation>Sequenz, die an der Detailposition gezeichnet wird und deren Einzelbild die Ladung der Sphere of Zin zeigt: Der Bildindex folgt dem Ladungsverhältnis plus einem Sinuspuls; für alles außer einem Energiegegenstand wird Bild 0 gezeigt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Another detail renderer drawn after the sphere image; its text line is used for the item list, otherwise &quot;charge/capacity&quot; is shown.</source>
        <translation>Ein weiterer Detail-Renderer, der nach dem Kugelbild gezeichnet wird; seine Textzeile wird für die Gegenstandsliste verwendet, sonst wird „Ladung/Kapazität“ angezeigt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Pulse amplitude, as a fraction (0–1) of the sequence&apos;s frames, when the sphere is fully charged; between empty and full it is interpolated towards &quot;Min Energy-Pulse Percentage&quot;. Default 0.1.</source>
        <translation>Pulsamplitude als Anteil (0–1) der Einzelbilder der Sequenz bei voll geladener Kugel; zwischen leer und voll wird zu „Min Energy-Pulse Percentage“ hin interpoliert. Standard 0,1.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Pulse amplitude, as a fraction (0–1) of the sequence&apos;s frames, when the sphere is empty. Default 0.015.</source>
        <translation>Pulsamplitude als Anteil (0–1) der Einzelbilder der Sequenz bei leerer Kugel. Standard 0,015.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Pulse speed in cycles per second when the sphere is fully charged; interpolated towards &quot;Min Energy-Pulse Rate&quot; for lower charge. Default 2.</source>
        <translation>Pulsgeschwindigkeit in Zyklen pro Sekunde bei voll geladener Kugel; bei geringerer Ladung zu „Min Energy-Pulse Rate“ hin interpoliert. Standard 2.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Pulse speed in cycles per second when the sphere is empty. Default 0.25.</source>
        <translation>Pulsgeschwindigkeit in Zyklen pro Sekunde bei leerer Kugel. Standard 0,25.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1: the frame order of &quot;Detail Image&quot; is reversed (last frame for empty instead of the first). Default 0.</source>
        <translation>1: Die Bildreihenfolge von „Detail Image“ wird umgekehrt (letztes Bild für leer statt des ersten). Standard 0.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Shot count at or below which the weapon&apos;s line in the inventory item list uses the &quot;getting low&quot; colour (0 shots: the &quot;empty&quot; colour); above it the normal colour. Counts the ammunition in the inventory, or the shots the battery allows for energy weapons. Default 5.</source>
        <translation>Schusszahl, bei der oder unter der die Zeile der Waffe in der Inventar-Gegenstandsliste die Farbe für „wird knapp“ verwendet (0 Schuss: die Farbe für „leer“); darüber die normale Farbe. Gezählt wird die Munition im Inventar bzw. bei Energiewaffen die Schüsse, die die Batterie erlaubt. Standard 5.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The inventory panel is 640 × 200 pixels; the three tab pages (inventory, mission, voice log) share this area.</source>
        <translation>Das Inventar-Panel ist 640 × 200 Pixel groß; die drei Registerseiten (Inventar, Mission, Sprachlog) teilen sich diesen Bereich.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>X position in pixels of the inventory panel&apos;s close button, relative to the panel. Default 609.</source>
        <translation>X-Position der Schließen-Schaltfläche des Inventar-Panels in Pixeln, relativ zum Panel. Standard 609.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Y position in pixels of the inventory panel&apos;s close button, relative to the panel. Default 8.</source>
        <translation>Y-Position der Schließen-Schaltfläche des Inventar-Panels in Pixeln, relativ zum Panel. Standard 8.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the inventory panel window (used for its own texts such as the tab buttons). Default &quot;Character Dialog&quot;.</source>
        <translation>Schrift des Inventar-Panel-Fensters (für seine eigenen Texte wie die Registerschaltflächen). Standard „Character Dialog“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>X position in pixels of the &quot;Inventory&quot; tab button, relative to the inventory panel. Default 529.</source>
        <translation>X-Position der Registerschaltfläche „Inventory“ in Pixeln, relativ zum Inventar-Panel. Standard 529.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Y position in pixels of the &quot;Inventory&quot; tab button, relative to the inventory panel. Default 45.</source>
        <translation>Y-Position der Registerschaltfläche „Inventory“ in Pixeln, relativ zum Inventar-Panel. Standard 45.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>X position in pixels of the &quot;Mission&quot; tab button, relative to the inventory panel. Default 529.</source>
        <translation>X-Position der Registerschaltfläche „Mission“ in Pixeln, relativ zum Inventar-Panel. Standard 529.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Y position in pixels of the &quot;Mission&quot; tab button, relative to the inventory panel. Default 82.</source>
        <translation>Y-Position der Registerschaltfläche „Mission“ in Pixeln, relativ zum Inventar-Panel. Standard 82.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>X position in pixels of the &quot;Voice Log&quot; tab button, relative to the inventory panel. Default 529.</source>
        <translation>X-Position der Registerschaltfläche „Voice Log“ in Pixeln, relativ zum Inventar-Panel. Standard 529.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Y position in pixels of the &quot;Voice Log&quot; tab button, relative to the inventory panel. Default 119.</source>
        <translation>Y-Position der Registerschaltfläche „Voice Log“ in Pixeln, relativ zum Inventar-Panel. Standard 119.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Layout options of the inventory tab page: detail image, item statistics, buttons, item grid and scroll bar.</source>
        <translation>Layout-Optionen der Inventar-Registerseite: Detailbild, Gegenstandswerte, Schaltflächen, Gegenstandsraster und Bildlaufleiste.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Layout options of the mission tab page of the inventory panel (title, objectives list).</source>
        <translation>Layout-Optionen der Missions-Registerseite des Inventar-Panels (Titel, Liste der Missionsziele).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Layout options of the voice log tab page of the inventory panel (title, message list).</source>
        <translation>Layout-Optionen der Sprachlog-Registerseite des Inventar-Panels (Titel, Nachrichtenliste).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Position of the ammunition count of a &quot;Primary&quot; weapon on the HUD, relative to the weapon&apos;s HUD position (text centred there). For continuous-fire weapons the &quot;+N&quot; spare count is drawn left-aligned at this offset plus the meter width.</source>
        <translation>Position der Munitionsanzeige einer „Primary“-Waffe im HUD, relativ zur HUD-Position der Waffe (Text dort zentriert). Bei Dauerfeuerwaffen wird die Reserveanzeige „+N“ linksbündig an diesem Abstand plus der Anzeigenbreite gezeichnet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Position of the ammunition count of a non-primary (secondary) weapon on the HUD, relative to the weapon&apos;s HUD position (text centred there).</source>
        <translation>Position der Munitionsanzeige einer nicht primären (sekundären) Waffe im HUD, relativ zur HUD-Position der Waffe (Text dort zentriert).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the weapons&apos; ammunition counts on the HUD. Default &quot;Small Green&quot;.</source>
        <translation>Schrift der Munitionsanzeigen der Waffen im HUD. Standard „Small Green“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Position of the game type&apos;s match time (h:m:s) on the HUD, shown while no log or item message is displayed. HUD positions: x from the left edge of the HUD (on 800-pixel-wide screens shifted right by the spacer image), y counted upward from the bottom edge of the HUD.</source>
        <translation>Position der Spielzeit des Spieltyps (h:m:s) im HUD, angezeigt, solange keine Log- oder Gegenstandsmeldung erscheint. HUD-Positionen: x vom linken Rand des HUD (bei 800 Pixel breiten Bildschirmen um das Zwischenstück-Bild nach rechts verschoben), y vom unteren Rand des HUD nach oben gezählt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the match time on the HUD. Default &quot;Small Green&quot;.</source>
        <translation>Schrift der Spielzeit im HUD. Standard „Small Green“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Position of the &quot;Health Indicator Icon&quot; image on the HUD (x not shifted on wide screens; y counted upward from the bottom edge of the HUD).</source>
        <translation>Position des Bilds „Health Indicator Icon“ im HUD (x bei breiten Bildschirmen nicht verschoben; y vom unteren Rand des HUD nach oben gezählt).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Position of the player&apos;s health number on the HUD (x not shifted on wide screens; y counted upward from the bottom edge of the HUD).</source>
        <translation>Position der Gesundheitszahl des Spielers im HUD (x bei breiten Bildschirmen nicht verschoben; y vom unteren Rand des HUD nach oben gezählt).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the health number on the HUD. Default &quot;Small Red&quot;.</source>
        <translation>Schrift der Gesundheitszahl im HUD. Standard „Small Red“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Position of the &quot;Ore Icon Small&quot; image on the HUD; ore and crystal counts are only shown in the quest (single-player) and Salvage King game types. HUD positions: x from the left edge of the HUD (on 800-pixel-wide screens shifted right by the spacer image), y counted upward from the bottom edge of the HUD.</source>
        <translation>Position des Bilds „Ore Icon Small“ im HUD; Erz- und Kristallzahlen erscheinen nur in den Spieltypen Quest (Einzelspieler) und Salvage King. HUD-Positionen: x vom linken Rand des HUD (bei 800 Pixel breiten Bildschirmen um das Zwischenstück-Bild nach rechts verschoben), y vom unteren Rand des HUD nach oben gezählt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Position of the ore text (&quot;&lt;name&gt; = &lt;count&gt;&quot;, with &quot;/&lt;max&gt;&quot; when a maximum is set) on the HUD. HUD positions: x from the left edge of the HUD (on 800-pixel-wide screens shifted right by the spacer image), y counted upward from the bottom edge of the HUD.</source>
        <translation>Position des Erztexts („&lt;Name&gt; = &lt;Anzahl&gt;“, mit „/&lt;Maximum&gt;“, wenn ein Maximum gesetzt ist) im HUD. HUD-Positionen: x vom linken Rand des HUD (bei 800 Pixel breiten Bildschirmen um das Zwischenstück-Bild nach rechts verschoben), y vom unteren Rand des HUD nach oben gezählt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Position of the &quot;Crystal Icon Small&quot; image on the HUD (quest and Salvage King only). HUD positions: x from the left edge of the HUD (on 800-pixel-wide screens shifted right by the spacer image), y counted upward from the bottom edge of the HUD.</source>
        <translation>Position des Bilds „Crystal Icon Small“ im HUD (nur Quest und Salvage King). HUD-Positionen: x vom linken Rand des HUD (bei 800 Pixel breiten Bildschirmen um das Zwischenstück-Bild nach rechts verschoben), y vom unteren Rand des HUD nach oben gezählt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Position of the crystal text (&quot;&lt;name&gt; = &lt;count&gt;&quot;, with &quot;/&lt;max&gt;&quot; when a maximum is set) on the HUD. HUD positions: x from the left edge of the HUD (on 800-pixel-wide screens shifted right by the spacer image), y counted upward from the bottom edge of the HUD.</source>
        <translation>Position des Kristalltexts („&lt;Name&gt; = &lt;Anzahl&gt;“, mit „/&lt;Maximum&gt;“, wenn ein Maximum gesetzt ist) im HUD. HUD-Positionen: x vom linken Rand des HUD (bei 800 Pixel breiten Bildschirmen um das Zwischenstück-Bild nach rechts verschoben), y vom unteren Rand des HUD nach oben gezählt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the ore and crystal counts on the HUD. Default &quot;Small Green&quot;.</source>
        <translation>Schrift der Erz- und Kristallzahlen im HUD. Standard „Small Green“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Top-left corner of a weapon&apos;s energy/charge meter on the HUD, relative to the weapon&apos;s HUD position. No default value is set.</source>
        <translation>Obere linke Ecke der Energie-/Ladeanzeige einer Waffe im HUD, relativ zur HUD-Position der Waffe. Kein Standardwert gesetzt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Width and height in pixels of a weapon&apos;s energy/charge meter on the HUD. Default 12 × 40.</source>
        <translation>Breite und Höhe der Energie-/Ladeanzeige einer Waffe im HUD in Pixeln. Standard 12 × 40.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Position of the item icon of the item message (an item that is needed, used or named) on the HUD. HUD positions: x from the left edge of the HUD (on 800-pixel-wide screens shifted right by the spacer image), y counted upward from the bottom edge of the HUD.</source>
        <translation>Position des Gegenstandssymbols der Gegenstandsmeldung (ein benötigter, verwendeter oder genannter Gegenstand) im HUD. HUD-Positionen: x vom linken Rand des HUD (bei 800 Pixel breiten Bildschirmen um das Zwischenstück-Bild nach rechts verschoben), y vom unteren Rand des HUD nach oben gezählt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Offset of the item message text from the item icon (x to the right, y downward); the text is centred there.</source>
        <translation>Abstand des Gegenstandsmeldungstexts vom Gegenstandssymbol (x nach rechts, y nach unten); der Text wird dort zentriert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Text of the item message when an item is needed. Default &quot;Needed&quot;.</source>
        <translation>Text der Gegenstandsmeldung, wenn ein Gegenstand benötigt wird. Standard „Needed“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Text of the item message when an item was used. Default &quot;Used&quot;.</source>
        <translation>Text der Gegenstandsmeldung, wenn ein Gegenstand verwendet wurde. Standard „Used“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the &quot;needed&quot; item message. Default &quot;Small Red&quot;.</source>
        <translation>Schrift der Gegenstandsmeldung „benötigt“. Standard „Small Red“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the &quot;used&quot; item message and of the message that shows the item&apos;s name. Default &quot;Small Green&quot;.</source>
        <translation>Schrift der Gegenstandsmeldung „verwendet“ und der Meldung, die den Namen des Gegenstands zeigt. Standard „Small Green“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Seconds an item message stays on the HUD; the log-updated messages use the same duration. Default 2.</source>
        <translation>Sekunden, die eine Gegenstandsmeldung im HUD bleibt; die Log-Meldungen verwenden dieselbe Dauer. Standard 2.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Position of the log message lines (centred) on the HUD; they take precedence over the item message and the time. HUD positions: x from the left edge of the HUD (on 800-pixel-wide screens shifted right by the spacer image), y counted upward from the bottom edge of the HUD. Default 425, 30.</source>
        <translation>Position der Log-Meldungszeilen (zentriert) im HUD; sie haben Vorrang vor der Gegenstandsmeldung und der Zeit. HUD-Positionen: x vom linken Rand des HUD (bei 800 Pixel breiten Bildschirmen um das Zwischenstück-Bild nach rechts verschoben), y vom unteren Rand des HUD nach oben gezählt. Standard 425, 30.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the log messages on the HUD. Default &quot;Small Green&quot;.</source>
        <translation>Schrift der Log-Meldungen im HUD. Standard „Small Green“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>First line of every log message on the HUD. Default &quot;Log Updated:&quot;.</source>
        <translation>Erste Zeile jeder Log-Meldung im HUD. Standard „Log Updated:“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Second line of the log message when a mission objective was added. Default &quot;Added&quot;.</source>
        <translation>Zweite Zeile der Log-Meldung, wenn ein Missionsziel hinzugefügt wurde. Standard „Added“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Second line of the log message when a mission objective was completed. Default &quot;Completed&quot;.</source>
        <translation>Zweite Zeile der Log-Meldung, wenn ein Missionsziel erfüllt wurde. Standard „Completed“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Last line of the log messages; %s is replaced by the name of the key bound to the logs control. Default &quot;Press &apos;%s&apos; for Logs&quot;.</source>
        <translation>Letzte Zeile der Log-Meldungen; %s wird durch den Namen der Taste ersetzt, die der Log-Steuerung zugewiesen ist. Standard „Press &apos;%s&apos; for Logs“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The item&apos;s picture is drawn with its top-left corner here (relative to the inventory page); the overlay detail renderers draw at the same point.</source>
        <translation>Das Bild des Gegenstands wird mit seiner linken oberen Ecke hier gezeichnet (relativ zur Inventarseite); die Overlay-Detail-Renderer zeichnen am selben Punkt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>No reader was found in the reimplemented code besides loading and saving; the picture is drawn at its own size.</source>
        <translation>Im nachgebauten Code wurde außer beim Laden und Speichern kein Leser gefunden; das Bild wird in seiner eigenen Größe gezeichnet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The item&apos;s name is drawn left-aligned at this point; the detail renderer&apos;s statistics start 1.5 name-font lines below it, and the description (Info button) is wrapped from here, inset by &quot;Detail Stats Margin&quot;.</source>
        <translation>An diesem Punkt wird der Name des Gegenstands linksbündig gezeichnet; die Werte des Detail-Renderers beginnen 1,5 Zeilen der Namensschrift darunter, und die Beschreibung (Info-Schaltfläche) wird ab hier umbrochen, eingerückt um „Detail Stats Margin“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>See &quot;Detail Stats X&quot;: the name line&apos;s y; statistics and description start 1.5 name-font lines lower.</source>
        <translation>Siehe „Detail Stats X“: das y der Namenszeile; Werte und Beschreibung beginnen 1,5 Zeilen der Namensschrift tiefer.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Only used as the wrapping width of the item description: this width minus twice &quot;Detail Stats Margin&quot;.</source>
        <translation>Nur als Umbruchbreite der Gegenstandsbeschreibung verwendet: diese Breite abzüglich zweimal „Detail Stats Margin“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>No reader was found in the reimplemented code besides loading and saving.</source>
        <translation>Im nachgebauten Code wurde außer beim Laden und Speichern kein Leser gefunden.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Inset of the item description from &quot;Detail Stats X/Y&quot; on the left and top, and on both sides of &quot;Detail Stats Width&quot;.</source>
        <translation>Einrückung der Gegenstandsbeschreibung von „Detail Stats X/Y“ links und oben sowie auf beiden Seiten von „Detail Stats Width“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Used for a weapon&apos;s ammunition line (ammunition name and count, or the energy source&apos;s charge).</source>
        <translation>Verwendet für die Munitionszeile einer Waffe (Munitionsname und -anzahl bzw. die Ladung der Energiequelle).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Used for the energy per shot of a weapon without ammunition and for a charger&apos;s charge text.</source>
        <translation>Verwendet für die Energie pro Schuss einer Waffe ohne Munition und für den Ladetext eines Ladegeräts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Used for a weapon&apos;s projectile damage line.</source>
        <translation>Verwendet für die Projektilschadenszeile einer Waffe.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Used for the mineral count text and the health item text.</source>
        <translation>Verwendet für den Mineralienzahl-Text und den Text von Gesundheitsgegenständen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Its line height also sets where the statistics and the description start (1.5 lines below the name).</source>
        <translation>Ihre Zeilenhöhe bestimmt auch, wo Werte und Beschreibung beginnen (1,5 Zeilen unter dem Namen).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The description is shown while the Info button is pressed, in place of the picture and statistics.</source>
        <translation>Die Beschreibung wird angezeigt, solange die Info-Schaltfläche gedrückt ist, anstelle von Bild und Werten.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The buttons are stacked vertically: each further button is placed this many pixels below the previous one.</source>
        <translation>Die Schaltflächen sind senkrecht gestapelt: Jede weitere Schaltfläche liegt so viele Pixel unter der vorherigen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Drawn as a rectangle 1 pixel inside the outer one around the item in focus in the item grid.</source>
        <translation>Wird als Rechteck 1 Pixel innerhalb des äußeren um den Gegenstand im Fokus im Gegenstandsraster gezeichnet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Drawn as a rectangle of &quot;Icon Size&quot; around the item in focus in the item grid.</source>
        <translation>Wird als Rechteck der Größe „Icon Size“ um den Gegenstand im Fokus im Gegenstandsraster gezeichnet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Also the number of cells per row used for keyboard and mouse navigation; the grid scrolls when the inventory has more rows than &quot;List Height&quot;.</source>
        <translation>Zugleich die Zahl der Zellen pro Zeile für die Navigation mit Tastatur und Maus; das Raster scrollt, wenn das Inventar mehr Zeilen als „List Height“ hat.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Number of visible rows; more rows are reached with the scroll bar.</source>
        <translation>Zahl der sichtbaren Zeilen; weitere Zeilen erreicht man über die Bildlaufleiste.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Each grid cell is this size plus a 1-pixel grid line.</source>
        <translation>Jede Rasterzelle hat diese Größe plus eine 1 Pixel breite Rasterlinie.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The count is only drawn when the inventory holds more than one of the item.</source>
        <translation>Die Anzahl wird nur gezeichnet, wenn das Inventar mehr als einen dieser Gegenstände enthält.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Offset from the cell&apos;s top-left corner; the number is left-aligned there.</source>
        <translation>Abstand von der linken oberen Ecke der Zelle; die Zahl steht dort linksbündig.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time HUD state: how opaque the item&apos;s icon is drawn (0..1); the renderer sets it every frame, and while the player switches items of a category the old and new item fade between 1 and 0. Not stored in levels.</source>
        <translation>Laufzeitzustand des HUD: Deckkraft, mit der das Symbol des Gegenstands gezeichnet wird (0..1); der Renderer setzt sie jedes Bild neu, beim Wechsel innerhalb einer Kategorie blenden alter und neuer Gegenstand zwischen 1 und 0 über. Wird nicht in Levels gespeichert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time HUD state: the item catalogue entry this HUD element shows; the renderer copies it from the player&apos;s item every frame and uses it to find the item&apos;s definition and screen position. Not stored in levels.</source>
        <translation>Laufzeitzustand des HUD: der Eintrag des Gegenstandskatalogs, den dieses HUD-Element zeigt; der Renderer übernimmt ihn jedes Bild vom Gegenstand des Spielers und findet darüber Definition und Bildschirmposition. Wird nicht in Levels gespeichert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time network state: bit flags of what changed since the last network update (1 opacity, 2 catalogue entry); only changed values are sent, then the bits are cleared. Default 3 (everything). Leave unchanged.</source>
        <translation>Laufzeitzustand fürs Netzwerk: Bitflags, was sich seit dem letzten Netzwerk-Update geändert hat (1 Deckkraft, 2 Katalogeintrag); nur Geändertes wird gesendet, danach werden die Bits gelöscht. Vorgabe 3 (alles). Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time HUD state: 1 while the compass needle is shown, i.e. a compass target is known and the overlay sequence has at least two frames; 0 hides it. Recomputed every frame.</source>
        <translation>Laufzeitzustand des HUD: 1, solange die Kompassnadel angezeigt wird, also ein Kompassziel bekannt ist und die Overlay-Sequenz mindestens zwei Frames hat; 0 blendet sie aus. Wird jedes Bild neu berechnet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time network state: set when the shown compass frame changed, so the next network update sends the new frame number; cleared after sending. Leave unchanged.</source>
        <translation>Laufzeitzustand fürs Netzwerk: wird gesetzt, wenn sich der angezeigte Kompass-Frame geändert hat, damit das nächste Netzwerk-Update die neue Frame-Nummer sendet; nach dem Senden gelöscht. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time network state: set when visibility or frame of the compass changed since the last network update; cleared after sending. Leave unchanged.</source>
        <translation>Laufzeitzustand fürs Netzwerk: wird gesetzt, wenn sich Sichtbarkeit oder Frame des Kompasses seit dem letzten Netzwerk-Update geändert haben; nach dem Senden gelöscht. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time HUD state: the frame of the compass&apos;s &quot;HUD Overlay&quot; sequence that points to the target (1 to frames - 1, from the angle between player and target). Recomputed every frame.</source>
        <translation>Laufzeitzustand des HUD: der Frame der „HUD Overlay“-Sequenz des Kompasses, der zum Ziel zeigt (1 bis Frames - 1, aus dem Winkel zwischen Spieler und Ziel). Wird jedes Bild neu berechnet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time HUD state: the most charge of the shown energy item (its definition&apos;s &quot;Energy&quot;), used as the full value of the energy meter. Recomputed every frame.</source>
        <translation>Laufzeitzustand des HUD: die höchste Ladung des angezeigten Energiegegenstands („Energy“ seiner Definition), dient als Vollwert der Energieanzeige. Wird jedes Bild neu berechnet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time HUD state: the current charge of the shown energy item, drawn as the filled part of the energy meter. Recomputed every frame.</source>
        <translation>Laufzeitzustand des HUD: die aktuelle Ladung des angezeigten Energiegegenstands, gezeichnet als gefüllter Teil der Energieanzeige. Wird jedes Bild neu berechnet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time network state: bit flags of what changed since the last network update (1 capacity, 2 charge); cleared after sending. Default 3. Leave unchanged.</source>
        <translation>Laufzeitzustand fürs Netzwerk: Bitflags, was sich seit dem letzten Netzwerk-Update geändert hat (1 Kapazität, 2 Ladung); nach dem Senden gelöscht. Vorgabe 3. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time HUD state: one energy entry (charge, capacity, catalogue entry) per shield item the player carries, rebuilt every frame; each is drawn as its own meter with a &quot;charge/capacity&quot; text.</source>
        <translation>Laufzeitzustand des HUD: ein Energieeintrag (Ladung, Kapazität, Katalogeintrag) je Schildgegenstand des Spielers, jedes Bild neu aufgebaut; jeder wird als eigene Anzeige mit dem Text „Ladung/Kapazität“ gezeichnet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time network state: the shield count at the last network update, used to tell which list entries are new; set after each send. Leave unchanged.</source>
        <translation>Laufzeitzustand fürs Netzwerk: die Anzahl der Schilde beim letzten Netzwerk-Update, um neue Listeneinträge zu erkennen; nach jedem Senden gesetzt. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time HUD state: the rounds of ammunition the player has for the shown weapon, drawn as a number next to the weapon icon. Recomputed every frame.</source>
        <translation>Laufzeitzustand des HUD: die Munitionsmenge, die der Spieler für die angezeigte Waffe hat, als Zahl neben dem Waffensymbol gezeichnet. Wird jedes Bild neu berechnet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time HUD state: for a continuous fire weapon the charge of its energy source; whole units are shown as &quot;+N&quot;, the fraction in the item&apos;s energy meter. Recomputed every frame.</source>
        <translation>Laufzeitzustand des HUD: bei einer Dauerfeuerwaffe die Ladung ihrer Energiequelle; ganze Einheiten werden als „+N“ angezeigt, der Rest in der Energieanzeige des Gegenstands. Wird jedes Bild neu berechnet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time HUD state: for a weapon without ammunition the most charge of the player&apos;s battery (0 without one), the full value of the weapon&apos;s meter. Recomputed every frame.</source>
        <translation>Laufzeitzustand des HUD: bei einer Waffe ohne Munition die höchste Ladung der Batterie des Spielers (0 ohne Batterie), der Vollwert der Waffenanzeige. Wird jedes Bild neu berechnet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time HUD state: for a weapon without ammunition the current charge of the player&apos;s battery, drawn in the weapon&apos;s meter. Recomputed every frame.</source>
        <translation>Laufzeitzustand des HUD: bei einer Waffe ohne Munition die aktuelle Ladung der Batterie des Spielers, in der Waffenanzeige gezeichnet. Wird jedes Bild neu berechnet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time network state: bit flags of what changed since the last network update (1 rounds, 2 battery capacity, 4 battery charge); cleared after sending. Default 7. Leave unchanged.</source>
        <translation>Laufzeitzustand fürs Netzwerk: Bitflags, was sich seit dem letzten Netzwerk-Update geändert hat (1 Munition, 2 Batteriekapazität, 4 Batterieladung); nach dem Senden gelöscht. Vorgabe 7. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>HUD sequence of the compass needle: frame 0 is skipped, frames 1 to the last cover the full circle and the one pointing to the compass target is drawn with a pulsing opacity under the item icon. Needs at least two frames; the needle is hidden while no target is set.</source>
        <translation>HUD-Sequenz der Kompassnadel: Frame 0 wird übersprungen, die Frames 1 bis zum letzten decken den Vollkreis ab, und der zum Kompassziel zeigende wird mit pulsierender Deckkraft unter dem Gegenstandssymbol gezeichnet. Braucht mindestens zwei Frames; ohne gesetztes Ziel ist die Nadel ausgeblendet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font for the name of the character&apos;s special ability, drawn centred on the item&apos;s HUD position over its energy meter.</source>
        <translation>Schriftart für den Namen der Spezialfähigkeit der Figur, zentriert an der HUD-Position des Gegenstands über dessen Energieanzeige gezeichnet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>HUD sequence of the Sphere of Zin display: the shown frame follows the charge ratio (empty = first frames, full = last frames) and swings around it like a sine pulse.</source>
        <translation>HUD-Sequenz der Sphere-of-Zin-Anzeige: der angezeigte Frame folgt dem Ladeverhältnis (leer = erste Frames, voll = letzte Frames) und schwingt sinusförmig darum.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Strength of the pulse at full charge, as a fraction of the sequence (0..1; half of it is the swing to each side); between empty and full the strength is interpolated towards &quot;Min Energy-Pulse Percentage&quot;. Default 0.1.</source>
        <translation>Stärke des Pulsierens bei voller Ladung als Anteil der Sequenz (0..1; die Hälfte davon ist der Ausschlag nach jeder Seite); zwischen leer und voll wird zur „Min Energy-Pulse Percentage“ hin interpoliert. Vorgabe 0.1.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Strength of the pulse when empty, as a fraction of the sequence (0..1). Default 0.015.</source>
        <translation>Stärke des Pulsierens bei leerer Ladung als Anteil der Sequenz (0..1). Vorgabe 0.015.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Pulses per second at full charge; between empty and full the rate is interpolated towards &quot;Min Energy-Pulse Rate&quot;. Default 2.</source>
        <translation>Pulse pro Sekunde bei voller Ladung; zwischen leer und voll wird zur „Min Energy-Pulse Rate“ hin interpoliert. Vorgabe 2.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Pulses per second when empty. Default 0.25.</source>
        <translation>Pulse pro Sekunde bei leerer Ladung. Vorgabe 0.25.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 counts the frames of &quot;HUD Sequence&quot; backwards, so a full charge shows the first frames. Default 0.</source>
        <translation>1 zählt die Frames der „HUD Sequence“ rückwärts, sodass volle Ladung die ersten Frames zeigt. Vorgabe 0.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Optional second HUD sequence drawn over the pulsing one at the same position, played in a loop at its own frame rate. Empty: none.</source>
        <translation>Optionale zweite HUD-Sequenz, an derselben Position über die pulsierende gezeichnet und in Schleife mit ihrer eigenen Bildrate abgespielt. Leer: keine.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>HUD sequence drawn as the flag&apos;s HUD display at the item&apos;s HUD position, played in a loop (synchronised to the game clock).</source>
        <translation>HUD-Sequenz, die als HUD-Anzeige der Flagge an der HUD-Position des Gegenstands gezeichnet wird, in Schleife abgespielt (am Spieltakt ausgerichtet).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Factor on the frame rate of &quot;HUD Sequence&quot; (-10..10); a negative value plays it backwards. Default 1.</source>
        <translation>Faktor auf die Bildrate der „HUD Sequence“ (-10..10); ein negativer Wert spielt sie rückwärts ab. Vorgabe 1.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 draws the ammunition&apos;s icon after the &quot;+N&quot; rounds text. This only happens for continuous fire weapons with at least one whole round; for normal weapons the setting has no effect. Default 0.</source>
        <translation>1 zeichnet das Symbol der Munition hinter den Text „+N“. Das geschieht nur bei Dauerfeuerwaffen mit mindestens einer ganzen Einheit; bei normalen Waffen hat die Einstellung keine Wirkung. Vorgabe 0.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The item&apos;s kind: an entry of the item catalogue (&quot;Inventory/Item Definitions&quot;). Everything else about the item (category, icon, weapon data, limits, buttons) comes from that definition.</source>
        <translation>Die Art des Gegenstands: ein Eintrag des Gegenstandskatalogs („Inventory/Item Definitions“). Alles Weitere (Kategorie, Symbol, Waffendaten, Grenzen, Schaltflächen) kommt aus dieser Definition.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: seconds left until the item can be used again; set to the definition&apos;s &quot;Reuse Delay&quot; on use and counted down every frame, the item is ready at 0. A value set in a level only delays the first use.</source>
        <translation>Gespeicherter Laufzeitzustand: Sekunden, bis der Gegenstand wieder benutzt werden kann; wird beim Benutzen auf „Reuse Delay“ der Definition gesetzt und jedes Bild heruntergezählt, bei 0 ist er bereit. Ein im Level gesetzter Wert verzögert nur die erste Benutzung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the item&apos;s own message broadcaster; when the item is destroyed it tells its listeners &quot;Delete&quot;. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: der eigene Nachrichtensender des Gegenstands; wird der Gegenstand zerstört, meldet er seinen Zuhörern „Delete“. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: 1 when the item is used up; the inventory removes such items in its next update. Set in a level, the item disappears right at the start.</source>
        <translation>Gespeicherter Laufzeitzustand: 1, wenn der Gegenstand verbraucht ist; das Inventar entfernt solche Gegenstände beim nächsten Update. Im Level gesetzt, verschwindet der Gegenstand gleich zu Beginn.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: 1 while the item is the current one of its inventory category; the inventory sets and clears it when the selection changes. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: 1, solange der Gegenstand der aktuelle seiner Inventarkategorie ist; das Inventar setzt und löscht ihn beim Wechsel der Auswahl. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the muzzle flash entity (the definition&apos;s &quot;Shot Flash&quot;) that exists while the continuous fire weapon fires; it is removed when firing stops. Leave empty in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: das Mündungsfeuer-Objekt („Shot Flash“ der Definition), das existiert, solange die Dauerfeuerwaffe feuert; es wird beim Feuerende entfernt. Im Level leer lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the part that is firing the continuous fire weapon; firing stops when the weapon is deselected or its owner reports it is gone. Leave empty in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: das Objekt, das die Dauerfeuerwaffe gerade abfeuert; das Feuern endet, wenn die Waffe abgewählt wird oder der Besitzer meldet, dass er weg ist. Im Level leer lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>How many units this item stands for (ammunition, minerals, stored health items, ...). On pickup they are added to an item of the same kind the player already has, at most up to the definition&apos;s &quot;Generate/Max Count&quot; when that is set; using units takes them away and the item is removed at 0. Default 40 (1 for health items).</source>
        <translation>Wie viele Einheiten dieser Gegenstand darstellt (Munition, Mineralien, gelagerte Heilgegenstände, ...). Beim Aufheben werden sie einem gleichartigen Gegenstand des Spielers hinzugefügt, höchstens bis „Generate/Max Count“ der Definition, falls gesetzt; Verbrauch zieht sie ab, bei 0 wird der Gegenstand entfernt. Vorgabe 40 (1 bei Heilgegenständen).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Only read on the &quot;Default Inventory Item&quot; of an item definition: after loading, a value other than 0 becomes the definition&apos;s &quot;Generate/Max Count&quot; (-1 = unlimited) and is then reset to 0. On items placed in a level it has no effect.</source>
        <translation>Wird nur beim „Default Inventory Item“ einer Gegenstandsdefinition gelesen: nach dem Laden wird ein Wert ungleich 0 zu „Generate/Max Count“ der Definition (-1 = unbegrenzt) und danach auf 0 gesetzt. Bei im Level platzierten Gegenständen ohne Wirkung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 lets the item be picked up even when the player&apos;s item of that kind is already at its limit; the rounds beyond the limit are lost. For a health item: picked up even at full health. Default 0.</source>
        <translation>1 lässt den Gegenstand auch aufheben, wenn der gleichartige Gegenstand des Spielers schon an seiner Grenze ist; die Einheiten über der Grenze gehen verloren. Bei einem Heilgegenstand: wird auch bei voller Gesundheit aufgehoben. Vorgabe 0.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Hit points healed when the item is used or picked up (not stored), at most up to the character&apos;s full hit points (1..200). Default 10. Fruit also count by this value for the quest statistics.</source>
        <translation>Trefferpunkte, die beim Benutzen oder Aufheben (nicht gelagert) geheilt werden, höchstens bis zu den vollen Trefferpunkten der Figur (1..200). Vorgabe 10. Früchte zählen mit diesem Wert auch für die Quest-Statistik.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1: on pickup the item goes into the inventory (stacked by &quot;Rounds&quot;) to be used later; 0: it heals right away when picked up. Default 0.</source>
        <translation>1: beim Aufheben kommt der Gegenstand ins Inventar (nach „Rounds“ gestapelt) und wird später benutzt; 0: er heilt sofort beim Aufheben. Vorgabe 0.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the entity this deployed item put into the level (e.g. a placed turret); recalling the item removes it. Leave empty in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: das Objekt, das dieser ausgesetzte Gegenstand in den Level gestellt hat (z. B. ein aufgestelltes Geschütz); Zurückholen entfernt es. Im Level leer lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the character that deployed the entity; when the owner leaves the scope the entity is recalled. Leave empty in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: die Figur, die das Objekt ausgesetzt hat; verlässt der Besitzer den Bereich, wird das Objekt zurückgeholt. Im Level leer lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Damage the deployable already has: when it is deployed, the entity loses this many hit points (unavoidable damage); recalling stores the entity&apos;s lost hit points here. A value in a level makes the deployed entity start damaged.</source>
        <translation>Schaden, den das aussetzbare Objekt bereits hat: beim Aussetzen verliert das Objekt so viele Trefferpunkte (unvermeidbarer Schaden); beim Zurückholen werden die verlorenen Trefferpunkte hier gespeichert. Ein Wert im Level lässt das ausgesetzte Objekt beschädigt starten.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The item&apos;s charge in mega-joules. Gaining charge stops at the definition&apos;s &quot;Energy&quot;; a value set in a level is not capped. For energy pickups it is the amount added to the player&apos;s item of that kind.</source>
        <translation>Die Ladung des Gegenstands in Megajoule. Aufladen endet bei „Energy“ der Definition; ein im Level gesetzter Wert wird nicht begrenzt. Bei Energie-Pickups ist es die Menge, die dem gleichartigen Gegenstand des Spielers hinzugefügt wird.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Current level of the special ability, counted from 0 (shown +1); selects the entry of the definition&apos;s &quot;Special/Level&quot; list for charge time, duration and actions. It rises when the character collects enough of the category&apos;s &quot;Advance/Item Needed To Advance&quot;.</source>
        <translation>Aktuelle Stufe der Spezialfähigkeit, ab 0 gezählt (Anzeige +1); wählt den Eintrag der Liste „Special/Level“ der Definition für Ladezeit, Dauer und Aktionen. Sie steigt, wenn die Figur genug von „Advance/Item Needed To Advance“ der Kategorie gesammelt hat.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: 1 while the special ability is active; the charge then runs down over the level&apos;s &quot;Duration&quot;, and when it is empty the ability stops and the level&apos;s &quot;Deactivate Action&quot; runs. Otherwise the item recharges over &quot;Charge Time&quot;.</source>
        <translation>Gespeicherter Laufzeitzustand: 1, solange die Spezialfähigkeit aktiv ist; die Ladung sinkt dann über „Duration“ der Stufe, und ist sie leer, endet die Fähigkeit und die „Deactivate Action“ der Stufe läuft. Sonst lädt der Gegenstand über „Charge Time“ auf.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 lets the item be picked up even when the player&apos;s item of the same class is full, or when the player has none; the charge that does not fit is lost. 0: only picked up while that item is below its &quot;Energy&quot;. Default 0.</source>
        <translation>1 lässt den Gegenstand auch aufheben, wenn der Gegenstand derselben Klasse beim Spieler voll ist oder der Spieler keinen hat; Ladung, die nicht passt, geht verloren. 0: nur aufheben, solange dieser Gegenstand unter seiner „Energy“ ist. Vorgabe 0.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The damage type this shield blocks. A character keeps one shield per type: a new shield of the same type is only taken when its definition&apos;s &quot;Energy&quot; is higher, and then replaces the old one.</source>
        <translation>Die Schadensart, die dieser Schild abblockt. Eine Figur hat je Art einen Schild: ein neuer Schild derselben Art wird nur genommen, wenn „Energy“ seiner Definition höher ist, und ersetzt dann den alten.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Model of the shield effect: on the first hit it is created as a child of the character, turned towards the hit point and played on every absorbed hit.</source>
        <translation>Modell des Schildeffekts: beim ersten Treffer wird es als Kind der Figur erzeugt, zum Trefferpunkt gedreht und bei jedem abgefangenen Treffer abgespielt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The shield AI (a CShieldAI) given to the character on pickup, unless it already has one for this damage type; that AI absorbs the damage while the item has charge.</source>
        <translation>Die Schild-KI (eine CShieldAI), die die Figur beim Aufheben bekommt, sofern sie für diese Schadensart noch keine hat; diese KI fängt den Schaden ab, solange der Gegenstand Ladung hat.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the charge at the previous update; the Sphere of Zin&apos;s thresholds fire when the charge crossed them between this value and the current one. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: die Ladung beim vorigen Update; die Schwellen der Sphere of Zin lösen aus, wenn die Ladung sie zwischen diesem und dem aktuellen Wert überschritten hat. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the charge collected for the next update (evil broadcast nearby adds to it, at most the most charge); it becomes the current charge at the next step. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: die für das nächste Update gesammelte Ladung (Böses in der Nähe erhöht sie, höchstens bis zur höchsten Ladung); sie wird beim nächsten Schritt zur aktuellen Ladung. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: one armed flag per threshold of the Sphere of Zin data; a threshold fires once, then re-arms when the charge has moved its margin away from it. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: je Schwelle der Sphere-of-Zin-Daten ein Scharf-Flag; eine Schwelle löst einmal aus und wird wieder scharf, wenn sich die Ladung um ihren Abstand davon entfernt hat. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The pieces (segment entries) this item brings. On pickup the pieces the assembled item needs are added to the player&apos;s segmented item; when all are there, the definition&apos;s completed item is given and its action runs.</source>
        <translation>Die Teile (Segmenteinträge), die dieser Gegenstand mitbringt. Beim Aufheben werden die benötigten Teile dem segmentierten Gegenstand des Spielers hinzugefügt; sind alle da, gibt es den fertigen Gegenstand der Definition und dessen Aktion läuft.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Image from &quot;Inventory Icons&quot; shown for the item in the inventory screen&apos;s item list and in the materials generator&apos;s list.</source>
        <translation>Bild aus „Inventory Icons“, das für den Gegenstand in der Gegenstandsliste des Inventarbildschirms und in der Liste des Materialgenerators angezeigt wird.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Small image from &quot;Inventory Icons&quot; shown when this item is an ingredient in the materials generator&apos;s cost column, and next to the icon in the item&apos;s detail display.</source>
        <translation>Kleines Bild aus „Inventory Icons“, das angezeigt wird, wenn dieser Gegenstand im Materialgenerator als Zutat in der Kostenspalte steht, und neben dem Symbol in der Detailanzeige des Gegenstands.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The item&apos;s category (&quot;Inventory/Item Types&quot;, e.g. Primary, Secondary, Health, Shield). It decides the HUD position and renderer, which items replace each other as the current one, and the use action set up after loading.</source>
        <translation>Die Kategorie des Gegenstands („Inventory/Item Types“, z. B. Primary, Secondary, Health, Shield). Sie bestimmt HUD-Position und -Renderer, welche Gegenstände sich als aktueller abwechseln und die nach dem Laden eingerichtete Benutzungsaktion.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Template item of this kind: cloned when the item is given by a default give action, made in the materials generator or brought as ammunition with a weapon; a count item&apos;s &quot;Max Rounds&quot; here sets &quot;Generate/Max Count&quot;.</source>
        <translation>Vorlage-Gegenstand dieser Art: wird geklont, wenn der Gegenstand über eine Standard-Gib-Aktion vergeben, im Materialgenerator hergestellt oder als Munition mit einer Waffe mitgeliefert wird; „Max Rounds“ eines Zählgegenstands hier setzt „Generate/Max Count“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Model spawned at the muzzle when the weapon fires (an explosion-type effect); for a continuous fire weapon it stays as a child of the shooter while firing.</source>
        <translation>Modell, das beim Abfeuern an der Mündung erzeugt wird (ein Explosionseffekt); bei einer Dauerfeuerwaffe bleibt es während des Feuerns als Kind des Schützen bestehen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Item kind the weapon uses as ammunition. With it, firing needs and uses &quot;Rounds Needed&quot; rounds of that item; without it the weapon uses battery energy. Picking up the weapon also brings one item of its ammunition.</source>
        <translation>Gegenstandsart, die die Waffe als Munition verbraucht. Mit ihr braucht und verbraucht jeder Schuss „Rounds Needed“ Einheiten davon; ohne sie nutzt die Waffe Batterieenergie. Beim Aufheben der Waffe kommt ein Gegenstand ihrer Munition mit.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Aiming tolerance in degrees (0..180): a computer-controlled character only fires this weapon when its target lies within this angle of its aiming direction; it is also drawn as the aiming cone in debug view. Default 10.</source>
        <translation>Zieltoleranz in Grad (0..180): eine computergesteuerte Figur feuert diese Waffe nur, wenn ihr Ziel innerhalb dieses Winkels zur Zielrichtung liegt; in der Debug-Ansicht wird er als Zielkegel gezeichnet. Vorgabe 10.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Melee damage: above 0 the weapon strikes instead of firing projectiles, damaging everything within &quot;Strike Damage Radius&quot; around the muzzle point. For continuous fire weapons it is the beam&apos;s damage. Default 0.</source>
        <translation>Nahkampfschaden: über 0 schlägt die Waffe zu, statt Projektile abzufeuern, und beschädigt alles im „Strike Damage Radius“ um den Mündungspunkt. Bei Dauerfeuerwaffen ist es der Schaden des Strahls. Vorgabe 0.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Damage type of the strike (&quot;Strike Damage&quot;).</source>
        <translation>Schadensart des Schlags („Strike Damage“).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Radius in pixels of the strike&apos;s damage around the muzzle point. For continuous fire weapons it is the beam&apos;s range; the extra close range damage falls off to 0 at this distance. Default 10.</source>
        <translation>Radius in Pixeln, in dem der Schlag um den Mündungspunkt Schaden macht. Bei Dauerfeuerwaffen ist es die Reichweite des Strahls; der zusätzliche Nahbereichsschaden fällt bis zu dieser Entfernung auf 0. Vorgabe 10.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sequence the shooter plays when firing. A character turned sideways uses &quot;ShootLeft&quot;/&quot;ShootRight&quot; instead when its model has them. Default &quot;Shoot1&quot;.</source>
        <translation>Sequenz, die der Schütze beim Abfeuern abspielt. Eine seitlich gedrehte Figur nutzt stattdessen „ShootLeft“/„ShootRight“, wenn ihr Modell sie hat. Vorgabe „Shoot1“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Energy in mega-joules. For energy items (batteries, shields, special abilities) it is the most charge; shields of one type are compared by it. For a weapon without ammunition a negative value is the battery charge each shot needs and uses (scaled by the world settings for the player).</source>
        <translation>Energie in Megajoule. Bei Energiegegenständen (Batterien, Schilde, Spezialfähigkeiten) die höchste Ladung; Schilde einer Art werden danach verglichen. Bei einer Waffe ohne Munition ist ein negativer Wert die Batterieladung, die jeder Schuss braucht und verbraucht (beim Spieler mit den Welteinstellungen skaliert).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Rounds of the &quot;Ammunition&quot; item a shot needs and uses up; with fewer the weapon cannot fire. Default 1.</source>
        <translation>Einheiten der „Ammunition“, die ein Schuss braucht und verbraucht; mit weniger kann die Waffe nicht feuern. Vorgabe 1.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run for every fired projectile, with the projectile as trigger (e.g. a mine playing its &quot;Deploy&quot; sequence).</source>
        <translation>Aktion, die für jedes abgefeuerte Projektil läuft, mit dem Projektil als Auslöser (z. B. eine Mine, die ihre Sequenz „Deploy“ abspielt).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sound played at the shooter after the weapon fired. &quot;!None.wav&quot;: none.</source>
        <translation>Sound, der nach dem Abfeuern beim Schützen abgespielt wird. „!None.wav“: keiner.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Model fired by the weapon; its entity must be a projectile (CEntityProjectile), else the shot fails with an error. A weapon without a projectile cannot be used as a weapon. Deployables and mines create this model.</source>
        <translation>Modell, das die Waffe abfeuert; sein Objekt muss ein Projektil (CEntityProjectile) sein, sonst schlägt der Schuss mit einer Fehlermeldung fehl. Eine Waffe ohne Projektil kann nicht als Waffe benutzt werden. Aussetzbare Objekte und Minen erzeugen dieses Modell.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Projectiles per shot: one entry per projectile with its spread angle (degrees) and X/Y offset from the muzzle. Empty: one projectile straight ahead.</source>
        <translation>Projektile pro Schuss: je Projektil ein Eintrag mit Streuwinkel (Grad) und X/Y-Versatz zur Mündung. Leer: ein Projektil geradeaus.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Seconds after a use before the item can be used again (the fire rate of a weapon). Default 0.3.</source>
        <translation>Sekunden nach einer Benutzung, bis der Gegenstand wieder benutzt werden kann (die Feuerrate einer Waffe). Vorgabe 0.3.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 shows a &quot;Place&quot; button on the inventory screen while this item is in focus; clicking it runs &quot;Place Button Action&quot; for the player.</source>
        <translation>1 zeigt auf dem Inventarbildschirm eine Schaltfläche „Place“, solange dieser Gegenstand im Fokus ist; ein Klick führt „Place Button Action“ für den Spieler aus.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Text of the &quot;Place&quot; button (a Local.txt entry); empty uses the default &quot;&amp;Place&quot;.</source>
        <translation>Text der Schaltfläche „Place“ (ein Local.txt-Eintrag); leer nutzt die Vorgabe „&amp;Place“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run for the player when the &quot;Place&quot; button is clicked; if it fails an error sound plays.</source>
        <translation>Aktion, die beim Klick auf „Place“ für den Spieler ausgeführt wird; schlägt sie fehl, ertönt ein Fehlersound.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 shows a &quot;Disable&quot; button on the inventory screen while this item is in focus; clicking it runs &quot;Disable Button Action&quot;.</source>
        <translation>1 zeigt auf dem Inventarbildschirm eine Schaltfläche „Disable“, solange dieser Gegenstand im Fokus ist; ein Klick führt „Disable Button Action“ aus.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Text of the &quot;Disable&quot; button (a Local.txt entry); empty uses the default &quot;D&amp;isable&quot;.</source>
        <translation>Text der Schaltfläche „Disable“ (ein Local.txt-Eintrag); leer nutzt die Vorgabe „D&amp;isable“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run for the player when the &quot;Disable&quot; button is clicked; if it fails an error sound plays.</source>
        <translation>Aktion, die beim Klick auf „Disable“ für den Spieler ausgeführt wird; schlägt sie fehl, ertönt ein Fehlersound.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 shows a &quot;Use&quot; button on the inventory screen while this item is in focus. For items of the categories Health, Primary and Secondary the game sets up the use action itself after loading (heal, or select the weapon).</source>
        <translation>1 zeigt auf dem Inventarbildschirm eine Schaltfläche „Use“, solange dieser Gegenstand im Fokus ist. Für Gegenstände der Kategorien Health, Primary und Secondary richtet das Spiel die Benutzungsaktion nach dem Laden selbst ein (heilen bzw. Waffe auswählen).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Text of the &quot;Use&quot; button (a Local.txt entry); empty uses the default &quot;&amp;Use&quot;.</source>
        <translation>Text der Schaltfläche „Use“ (ein Local.txt-Eintrag); leer nutzt die Vorgabe „&amp;Use“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run for the player when the &quot;Use&quot; button is clicked. An old generic item action here is replaced after loading by the category&apos;s own use action (Health: heal, Primary/Secondary: select) when &quot;Use Button&quot; is set.</source>
        <translation>Aktion, die beim Klick auf „Use“ für den Spieler ausgeführt wird. Eine alte allgemeine Gegenstandsaktion hier wird nach dem Laden durch die Benutzungsaktion der Kategorie ersetzt (Health: heilen, Primary/Secondary: auswählen), wenn „Use Button“ gesetzt ist.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 shows a fourth, freely usable button on the inventory screen while this item is in focus; clicking it runs &quot;Undefined Button Action&quot;.</source>
        <translation>1 zeigt auf dem Inventarbildschirm eine vierte, frei verwendbare Schaltfläche, solange dieser Gegenstand im Fokus ist; ein Klick führt „Undefined Button Action“ aus.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Text of the fourth button (a Local.txt entry); empty uses the default label &quot;Undefined&quot;.</source>
        <translation>Text der vierten Schaltfläche (ein Local.txt-Eintrag); leer nutzt die Vorgabe „Undefined“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run for the player when the fourth button is clicked; if it fails an error sound plays.</source>
        <translation>Aktion, die beim Klick auf die vierte Schaltfläche für den Spieler ausgeführt wird; schlägt sie fehl, ertönt ein Fehlersound.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Model of the pickup created when the player drops this item; it gets a pickup AI holding the dropped item.</source>
        <translation>Modell des Pickups, das entsteht, wenn der Spieler diesen Gegenstand fallen lässt; es bekommt eine Pickup-KI, die den fallen gelassenen Gegenstand enthält.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>How many of &quot;Ingredient 1 Type&quot; the materials generator needs to make this item; they are used up. 0 (or no type): this ingredient is not needed. An item without any ingredient is not offered by the generator.</source>
        <translation>Wie viele von „Ingredient 1 Type“ der Materialgenerator zur Herstellung dieses Gegenstands braucht; sie werden verbraucht. 0 (oder kein Typ): diese Zutat entfällt. Ein Gegenstand ganz ohne Zutat wird vom Generator nicht angeboten.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Mineral item (e.g. ore or crystals) used as ingredient 1 in the materials generator; its &quot;Generator Icon Image&quot; and name are shown in the cost column.</source>
        <translation>Mineral-Gegenstand (z. B. Erz oder Kristalle), der im Materialgenerator als Zutat 1 dient; sein „Generator Icon Image“ und sein Name stehen in der Kostenspalte.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>How many of &quot;Ingredient 2 Type&quot; the materials generator needs to make this item; they are used up. 0 (or no type): this ingredient is not needed. An item without any ingredient is not offered by the generator.</source>
        <translation>Wie viele von „Ingredient 2 Type“ der Materialgenerator zur Herstellung dieses Gegenstands braucht; sie werden verbraucht. 0 (oder kein Typ): diese Zutat entfällt. Ein Gegenstand ganz ohne Zutat wird vom Generator nicht angeboten.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Mineral item (e.g. ore or crystals) used as ingredient 2 in the materials generator; its &quot;Generator Icon Image&quot; and name are shown in the cost column.</source>
        <translation>Mineral-Gegenstand (z. B. Erz oder Kristalle), der im Materialgenerator als Zutat 2 dient; sein „Generator Icon Image“ und sein Name stehen in der Kostenspalte.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>How many of &quot;Ingredient 3 Type&quot; the materials generator needs to make this item; they are used up. 0 (or no type): this ingredient is not needed. An item without any ingredient is not offered by the generator.</source>
        <translation>Wie viele von „Ingredient 3 Type“ der Materialgenerator zur Herstellung dieses Gegenstands braucht; sie werden verbraucht. 0 (oder kein Typ): diese Zutat entfällt. Ein Gegenstand ganz ohne Zutat wird vom Generator nicht angeboten.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Mineral item (e.g. ore or crystals) used as ingredient 3 in the materials generator; its &quot;Generator Icon Image&quot; and name are shown in the cost column.</source>
        <translation>Mineral-Gegenstand (z. B. Erz oder Kristalle), der im Materialgenerator als Zutat 3 dient; sein „Generator Icon Image“ und sein Name stehen in der Kostenspalte.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1: the materials generator only offers this item after the player has discovered it (an inventory discover action). Default 0.</source>
        <translation>1: der Materialgenerator bietet diesen Gegenstand erst an, nachdem der Spieler ihn entdeckt hat (eine Entdecken-Aktion des Inventars). Vorgabe 0.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Renderer that draws the item in the HUD (compass, weapon ammo, energy meter, flag, ...). Empty: the category&apos;s &quot;Default HUD Renderer&quot; is used.</source>
        <translation>Renderer, der den Gegenstand im HUD zeichnet (Kompass, Munition, Energieanzeige, Flagge, ...). Leer: der „Default HUD Renderer“ der Kategorie wird verwendet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Renderer for the item&apos;s detail text and pictures on the inventory screen and its line in the item list (e.g. ammunition count, charge, segments needed). Empty: a plain &quot;Qty&quot; line.</source>
        <translation>Renderer für Detailtext und -bilder des Gegenstands auf dem Inventarbildschirm und für seine Zeile in der Gegenstandsliste (z. B. Munitionsmenge, Ladung, benötigte Segmente). Leer: eine einfache „Qty“-Zeile.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Large picture (detail sequence) shown for the item on the inventory screen.</source>
        <translation>Großes Bild (Detail-Sequenz), das für den Gegenstand auf dem Inventarbildschirm angezeigt wird.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Icon (first frame of a HUD sequence) drawn for the item in the HUD at its category&apos;s HUD position, and right of the detail image on the inventory screen.</source>
        <translation>Symbol (erster Frame einer HUD-Sequenz), das für den Gegenstand im HUD an der HUD-Position seiner Kategorie und rechts neben dem Detailbild auf dem Inventarbildschirm gezeichnet wird.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Extra data object of special items: continuous fire weapon data (start/finish actions, impact explosion, spread, close range damage, looping sound) makes the weapon a continuous fire weapon; Sphere of Zin data holds its charge thresholds.</source>
        <translation>Zusätzliches Datenobjekt besonderer Gegenstände: Dauerfeuer-Daten (Start-/Endaktion, Einschlagexplosion, Streuung, Nahbereichsschaden, Schleifensound) machen die Waffe zur Dauerfeuerwaffe; Sphere-of-Zin-Daten enthalten deren Ladeschwellen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sound played when the player switches to this item. &quot;!None.wav&quot;: the category&apos;s &quot;Default Inventory Select Sound&quot; is used.</source>
        <translation>Sound beim Wechsel des Spielers zu diesem Gegenstand. „!None.wav“: das „Default Inventory Select Sound“ der Kategorie wird verwendet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Most units of this item kind a character can carry; further pickups are refused and stacks are capped. 0: unlimited. Overwritten after loading by a non-zero &quot;Max Rounds&quot; of the default item.</source>
        <translation>Höchstzahl an Einheiten dieser Gegenstandsart, die eine Figur tragen kann; weitere Pickups werden abgelehnt und Stapel begrenzt. 0: unbegrenzt. Wird nach dem Laden durch ein „Max Rounds“ ungleich 0 des Vorlage-Gegenstands überschrieben.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The lesser item this one upgrades: the materials generator only offers this item while the player has the required one and uses it up; getting this item removes the required chain, and while the player has it, items of that chain are no longer picked up.</source>
        <translation>Der geringere Gegenstand, den dieser verbessert: der Materialgenerator bietet diesen Gegenstand nur an, solange der Spieler den benötigten hat, und verbraucht ihn; erhält der Spieler diesen Gegenstand, wird die Kette der benötigten entfernt, und solange er ihn hat, werden Gegenstände dieser Kette nicht mehr aufgehoben.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>A higher value wins: when an item is picked up, it becomes the current one of its category if its priority is higher than the current item&apos;s (ties go by catalogue order), which also drives the automatic weapon switch.</source>
        <translation>Ein höherer Wert gewinnt: beim Aufheben wird ein Gegenstand zum aktuellen seiner Kategorie, wenn seine Priorität höher ist als die des aktuellen (bei Gleichstand entscheidet die Katalogreihenfolge); das steuert auch den automatischen Waffenwechsel.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Colours of the item&apos;s energy meter (line and charged colours, dim and bright). A meter taller than wide is drawn black with a border and filled from the bottom; a wider one as a bar filled from the left.</source>
        <translation>Farben der Energieanzeige des Gegenstands (Linien- und Ladefarben, dunkel und hell). Eine Anzeige, die höher als breit ist, wird schwarz mit Rahmen gezeichnet und von unten gefüllt; eine breitere als Balken, der von links gefüllt wird.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Meant as the vertical gap between shield meters, but the shield HUD overwrites the position for every shield, so the value has no effect. Default 10.</source>
        <translation>Gedacht als senkrechter Abstand zwischen Schildanzeigen, doch das Schild-HUD überschreibt die Position für jeden Schild, sodass der Wert keine Wirkung hat. Vorgabe 10.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Width of the energy meter in the HUD in pixels, centred on the item&apos;s HUD position. Default 50.</source>
        <translation>Breite der Energieanzeige im HUD in Pixeln, zentriert an der HUD-Position des Gegenstands. Vorgabe 50.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Height of the energy meter in the HUD in pixels; when it is larger than the width the meter is vertical. Default 10.</source>
        <translation>Höhe der Energieanzeige im HUD in Pixeln; ist sie größer als die Breite, steht die Anzeige senkrecht. Vorgabe 10.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Which special ability this character item gives; its name is shown in the HUD and in the level-up message.</source>
        <translation>Welche Spezialfähigkeit dieser Figurengegenstand verleiht; ihr Name wird im HUD und in der Meldung beim Stufenaufstieg angezeigt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The ability&apos;s levels in order, each with description, &quot;Charge Time&quot; (seconds to charge fully), &quot;Duration&quot; (seconds of use), activate sound and activate/deactivate actions.</source>
        <translation>Die Stufen der Fähigkeit der Reihe nach, jeweils mit Beschreibung, „Charge Time“ (Sekunden bis zur vollen Ladung), „Duration“ (Sekunden Einsatzdauer), Aktivierungssound sowie Aktivierungs- und Deaktivierungsaktion.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Only for old level files: an inventory&apos;s legacy &quot;Inventory Holders&quot; block wraps each item in such a holder, and the item is moved into the inventory when loading.</source>
        <translation>Nur für alte Leveldateien: der veraltete Block „Inventory Holders“ eines Inventars verpackt jeden Gegenstand in einen solchen Halter, und der Gegenstand wird beim Laden ins Inventar übernommen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Horizontal HUD position in pixels of this category&apos;s current item, measured from the edge chosen by &quot;X HUD Screen Justify&quot; (from the left, from the centre, or inwards from the right edge).</source>
        <translation>Waagerechte HUD-Position in Pixeln für den aktuellen Gegenstand dieser Kategorie, gemessen von der in „X HUD Screen Justify“ gewählten Kante (von links, von der Mitte oder vom rechten Rand nach innen).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Reference for &quot;X HUD Position&quot;: Left (from the left edge), Center (from the screen centre) or Right (the position counts leftwards from the right edge).</source>
        <translation>Bezug für „X HUD Position“: Left (vom linken Rand), Center (von der Bildschirmmitte) oder Right (die Position zählt vom rechten Rand nach links).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Vertical HUD position in pixels of this category&apos;s current item, measured from the edge chosen by &quot;Y HUD Screen Justify&quot;.</source>
        <translation>Senkrechte HUD-Position in Pixeln für den aktuellen Gegenstand dieser Kategorie, gemessen von der in „Y HUD Screen Justify“ gewählten Kante.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Reference for &quot;Y HUD Position&quot;: Top (from the top edge), Center (from the screen centre) or Bottom (the position counts upwards from the bottom edge).</source>
        <translation>Bezug für „Y HUD Position“: Top (vom oberen Rand), Center (von der Bildschirmmitte) oder Bottom (die Position zählt vom unteren Rand nach oben).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1: the current item of this category (both items while switching, cross-faded) is drawn in the HUD. 0: the category does not appear in the HUD.</source>
        <translation>1: der aktuelle Gegenstand dieser Kategorie (beim Wechsel beide, übergeblendet) wird im HUD gezeichnet. 0: die Kategorie erscheint nicht im HUD.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Selects the categories for a second HUD record pass, but the game only ever runs the normal pass, so the switch has no effect in the game.</source>
        <translation>Wählt die Kategorien für einen zweiten Durchlauf der HUD-Einträge, doch das Spiel führt nur den normalen Durchlauf aus, sodass der Schalter im Spiel keine Wirkung hat.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1: the HUD position moves up with the inventory bar as it slides in (the bar&apos;s shown height is subtracted from Y), so the display stays on top of the bar.</source>
        <translation>1: die HUD-Position wandert mit der Inventarleiste nach oben, wenn diese hereinfährt (die sichtbare Höhe der Leiste wird von Y abgezogen), sodass die Anzeige auf der Leiste bleibt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Order of the categories in the inventory&apos;s item list and statistics: categories with a higher value come first.</source>
        <translation>Reihenfolge der Kategorien in der Gegenstandsliste und Statistik des Inventars: Kategorien mit höherem Wert kommen zuerst.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>HUD renderer for items of this category whose definition has no &quot;Display/HUD Renderer&quot; of its own. Without either, the item is not drawn in the HUD.</source>
        <translation>HUD-Renderer für Gegenstände dieser Kategorie, deren Definition keinen eigenen „Display/HUD Renderer“ hat. Ohne beide wird der Gegenstand nicht im HUD gezeichnet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sound played when the player switches to an item of this category whose own &quot;Switch Inventory Sound&quot; is &quot;!None.wav&quot;. &quot;!None.wav&quot; here: silent.</source>
        <translation>Sound beim Wechsel zu einem Gegenstand dieser Kategorie, dessen eigenes „Switch Inventory Sound“ „!None.wav“ ist. „!None.wav“ hier: kein Sound.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Item kind the character must collect to raise its special ability&apos;s level; the needed amount is used up on each level-up.</source>
        <translation>Gegenstandsart, die die Figur sammeln muss, um die Stufe ihrer Spezialfähigkeit zu erhöhen; die benötigte Menge wird bei jedem Aufstieg verbraucht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Number of &quot;Item Needed To Advance&quot; required for each level-up, in order (entry 0: from the first to the second level). An entry of 0 or the end of the list stops advancing.</source>
        <translation>Anzahl von „Item Needed To Advance“, die für jeden Stufenaufstieg nötig ist, der Reihe nach (Eintrag 0: von der ersten zur zweiten Stufe). Ein Eintrag 0 oder das Listenende beendet den Aufstieg.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state of an inventory category: seconds since the switch to another item started; the switch finishes when it reaches &quot;Seconds To Change&quot;. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand einer Inventarkategorie: Sekunden seit Beginn des Wechsels zu einem anderen Gegenstand; der Wechsel endet, wenn „Seconds To Change“ erreicht ist. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: length of the current item switch in seconds (0.33 when the player cycles weapons by key, else 0); the HUD cross-fades the two items over this time. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: Dauer des laufenden Gegenstandswechsels in Sekunden (0.33, wenn der Spieler per Taste durch die Waffen schaltet, sonst 0); das HUD blendet die beiden Gegenstände in dieser Zeit über. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Position in the inventory&apos;s item list of this category&apos;s current item (-1: none selected). With -1 the inventory selects the category&apos;s first item at its first update; a valid index set in a level makes that item the current one.</source>
        <translation>Position des aktuellen Gegenstands dieser Kategorie in der Gegenstandsliste des Inventars (-1: keiner gewählt). Bei -1 wählt das Inventar beim ersten Update den ersten Gegenstand der Kategorie; ein gültiger Index im Level macht diesen Gegenstand zum aktuellen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: position of the item this category is switching to (-1: not changing); it becomes the current item when the switch time is over. Leave at -1 in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: Position des Gegenstands, zu dem diese Kategorie gerade wechselt (-1: kein Wechsel); er wird zum aktuellen, wenn die Wechselzeit um ist. Im Level auf -1 lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name of the object the compass points to in this layer; at the start the compass looks it up by name (no match: no target). Set by the set-compass-target action; empty: no target.</source>
        <translation>Name des Objekts, auf das der Kompass in dieser Ebene zeigt; beim Start sucht der Kompass es über den Namen (kein Treffer: kein Ziel). Wird von der Aktion zum Setzen des Kompassziels gesetzt; leer: kein Ziel.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state of a game: a random non-zero ID drawn at the start of a new game; when a save game with another ID is loaded, the playing time counter starts again. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand eines Spiels: eine zufällige ID ungleich 0, gezogen beim Start eines neuen Spiels; wird ein Spielstand mit anderer ID geladen, beginnt die Spielzeitzählung neu. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: playing time in seconds accumulated up to the last save; the time of the current mission is added on saving. Shown as the total playing time. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: bis zum letzten Speichern angesammelte Spielzeit in Sekunden; beim Speichern wird die Zeit der laufenden Mission hinzugezählt. Wird als Gesamtspielzeit angezeigt. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: seconds the game simulation has run, advanced every unpaused frame. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: Sekunden, die die Spielsimulation gelaufen ist, in jedem nicht pausierten Bild erhöht. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name of the object. Actions, triggers and AIs find their targets by this name (comma lists and #a-b# ranges in their name fields); it is also the object&apos;s display name. Several objects may share a name.</source>
        <translation>Name des Objekts. Aktionen, Auslöser und KIs finden ihre Ziele über diesen Namen (Kommalisten und #a-b#-Bereiche in ihren Namensfeldern); er dient auch als Anzeigename des Objekts. Mehrere Objekte dürfen denselben Namen tragen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Owned list of child objects attached to this one (e.g. an attachment of an entity). Children are updated with the parent, drawn and sent messages while they are visible, and their position counts relative to the parent&apos;s position.</source>
        <translation>Eigene Liste von Kind-Objekten, die an diesem Objekt hängen (z. B. ein Anbauteil einer Figur). Kinder werden mit dem Elternobjekt aktualisiert, solange sie sichtbar sind gezeichnet und mit Nachrichten versorgt, und ihre Position gilt relativ zur Position des Elternobjekts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>0/1 (default 1): the object is drawn only while Visible and Active are both set. Invisible children also get no draw pass and no messages from their parent. Collision is not affected.</source>
        <translation>0/1 (Standard 1): Das Objekt wird nur gezeichnet, solange „Visible“ und „Active“ beide gesetzt sind. Unsichtbare Kinder erhalten vom Elternobjekt außerdem keinen Zeichendurchgang und keine Nachrichten. Die Kollision bleibt unberührt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>0/1 (default 1): an active object with this flag is an obstacle in every collision sweep (walking, projectiles, line of sight); its polygon or the model&apos;s bounds polygon is the shape. A surface or polygon without it can be walked through.</source>
        <translation>0/1 (Standard 1): Ein aktives Objekt mit diesem Flag ist bei jeder Kollisionsprüfung ein Hindernis (Laufen, Projektile, Sichtlinie); die Form ist sein Polygon bzw. das Begrenzungspolygon des Modells. Eine Fläche oder ein Polygon ohne das Flag kann durchlaufen werden.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>0/1: a low obstacle. Setting it clears Full Height (the two exclude each other), so shots and line-of-sight checks pass over the object while it still blocks walking. The flag itself is only asked for by sweeps of kind 1, which no game code was found to use.</source>
        <translation>0/1: ein niedriges Hindernis. Das Setzen löscht „Full Height“ (beide schließen sich aus), sodass Schüsse und Sichtprüfungen über das Objekt hinweggehen, während es das Laufen weiter blockiert. Das Flag selbst fragen nur Prüfungen der Art 1 ab, für die kein Aufrufer im Spielcode gefunden wurde.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>0/1 (default 1): a full-height obstacle. Only collideable objects with this flag stop projectiles and block line of sight (AIs seeing targets, turret aiming, beam weapons); without it the object only blocks walking. Setting it clears Half Height.</source>
        <translation>0/1 (Standard 1): ein Hindernis voller Höhe. Nur kollidierbare Objekte mit diesem Flag halten Projektile auf und blockieren die Sichtlinie (KIs, die Ziele sehen, Geschütz-Zielen, Strahlwaffen); ohne das Flag blockiert das Objekt nur das Laufen. Das Setzen löscht „Half Height“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>0/1: a moving entity with this flag moves through the collision sweep and is stopped or bounced by obstacles (and tells what it hits); without it the entity is placed at its new position directly, through walls. Objects with it are also ignored as obstacles when the way-point map is built, and a way-point polygon with it is left out.</source>
        <translation>0/1: Eine sich bewegende Figur mit diesem Flag bewegt sich über die Kollisionsprüfung und wird von Hindernissen gestoppt oder abgeprallt (und meldet, was sie trifft); ohne das Flag wird sie direkt an die neue Position gesetzt, auch durch Wände. Objekte mit dem Flag zählen beim Bau der Wegpunktkarte nicht als Hindernis, und ein Wegpunkt-Polygon mit dem Flag wird ausgelassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: set when a destructable object is activated with hit points left and cleared when it dies. Beam weapons only damage targets with it, AI target searches can require it, and objects with it do not block way points. Recomputed for destructables; leave unchanged in a level.</source>
        <translation>Laufzeitzustand: wird gesetzt, wenn ein zerstörbares Objekt mit verbleibenden Trefferpunkten aktiviert wird, und beim Tod gelöscht. Strahlwaffen schädigen nur Ziele mit diesem Flag, KI-Zielsuchen können es verlangen, und Objekte mit dem Flag blockieren keine Wegpunkte. Wird für zerstörbare Objekte neu berechnet; im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state saved as 1 for every object of the original levels: the object rests. Resting objects are not redrawn every frame (resting ground parts stay in the cached ground) and movable entities do not move or apply velocity; behaviours clear the flag while they animate or move and set it again afterwards, and non-animated entities get it after every drawing.</source>
        <translation>Laufzeitzustand, in allen Original-Levels für jedes Objekt als 1 gespeichert: Das Objekt ruht. Ruhende Objekte werden nicht jedes Bild neu gezeichnet (ruhende Bodenteile bleiben im zwischengespeicherten Boden), und bewegliche Figuren bewegen sich nicht und wenden keine Geschwindigkeit an; Verhalten löschen das Flag, solange sie animieren oder bewegen, und setzen es danach wieder, nicht animierte Figuren erhalten es nach jedem Zeichnen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>0/1 (default 1): an inactive object is not updated, not drawn, does not collide and cannot be shot; its AIs do not run. Switching it on (e.g. by an activate action) runs the activation: the AIs begin and the object gets the &quot;Begin&quot; message; switching off sends &quot;End&quot;.</source>
        <translation>0/1 (Standard 1): Ein inaktives Objekt wird nicht aktualisiert, nicht gezeichnet, kollidiert nicht und kann nicht beschossen werden; seine KIs laufen nicht. Das Einschalten (z. B. durch eine Aktivierungsaktion) führt die Aktivierung aus: Die KIs beginnen und das Objekt erhält die Nachricht „Begin“; Ausschalten sendet „End“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: while set, the object is skipped by every collision sweep. The game sets it for a moment during line-of-sight, free-path and blocker tests and restores it afterwards; leave unchanged in a level (set, the object would never collide).</source>
        <translation>Laufzeitzustand: Solange gesetzt, wird das Objekt von jeder Kollisionsprüfung übergangen. Das Spiel setzt es kurzzeitig bei Sichtlinien-, Freiweg- und Hindernisprüfungen und stellt es danach wieder her; im Level unverändert lassen (gesetzt würde das Objekt nie kollidieren).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: the object has died or was removed and is deleted at the next update of its parent or layer; it is not drawn any more. Leave unchanged in a level (set, the object disappears at once).</source>
        <translation>Laufzeitzustand: Das Objekt ist gestorben oder wurde entfernt und wird bei der nächsten Aktualisierung seines Elternobjekts bzw. seiner Ebene gelöscht; es wird nicht mehr gezeichnet. Im Level unverändert lassen (gesetzt verschwindet das Objekt sofort).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The object&apos;s own AIs (triggers, behaviours, scripted logic). They begin when the object is activated, are updated every frame while it is active and receive its messages and collisions; an AI that reports itself done is removed and deleted. Entities also run the AIs of their model&apos;s Activity first.</source>
        <translation>Die eigenen KIs des Objekts (Auslöser, Verhalten, Skriptlogik). Sie beginnen, wenn das Objekt aktiviert wird, werden jedes Bild aktualisiert, solange es aktiv ist, und erhalten seine Nachrichten und Kollisionen; eine KI, die sich als fertig meldet, wird entfernt und gelöscht. Figuren führen zuerst die KIs der „Activity“ ihres Modells aus.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Category names (from the game&apos;s Categories definitions); each is stored as a bit of the object&apos;s flag word (bit = index in the sorted list). AIs use them to choose targets and partners (e.g. Valid Targets, Collides with, Who Can Pick Up); the Player and Enemy categories select the difficulty&apos;s damage factor, and NonInteractiveSequence Actor characters keep acting during non-interactive sequences.</source>
        <translation>Kategorienamen (aus den Kategorie-Definitionen des Spiels); jede wird als Bit im Flagwort des Objekts gespeichert (Bit = Index in der sortierten Liste). KIs wählen damit Ziele und Partner (z. B. „Valid Targets“, „Collides with“, „Who Can Pick Up“); die Kategorien „Player“ und „Enemy“ bestimmen den Schadensfaktor des Schwierigkeitsgrads, und Figuren der Kategorie „NonInteractiveSequence Actor“ handeln auch während nicht interaktiver Sequenzen weiter.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>0-15, or -1 &quot;Nutral&quot; (default). Used by the team actions (Is On Team, Is On Same Team, Give My Team A Point), by the friendly-fire test of player characters (projectiles of the same team do not hit unless the game type allows it) and as the index into the level&apos;s Team Info when a character is placed without a spawn point name (-1 uses team 0).</source>
        <translation>0–15 oder -1 „Nutral“ (Standard). Wird von den Team-Aktionen genutzt („Is On Team“, „Is On Same Team“, „Give My Team A Point“), vom Eigenbeschuss-Test der Spielerfiguren (Projektile desselben Teams treffen nicht, außer der Spieltyp erlaubt es) und als Index in die „Team Info“ des Levels, wenn eine Figur ohne Startpunktnamen platziert wird (-1 nimmt Team 0).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Game types the object exists in (default $All). When a level starts, every object whose Used In lacks the current game type is removed (it &quot;dies&quot; and is deleted), so this splits quest and multiplayer content in one map.</source>
        <translation>Spieltypen, in denen das Objekt existiert (Standard $All). Beim Levelstart wird jedes Objekt entfernt, dessen „Used In“ den aktuellen Spieltyp nicht enthält (es „stirbt“ und wird gelöscht); so trennt man Quest- und Mehrspielerinhalt in einer Karte.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: the object this one currently targets and listens to (set by AIs); it is forgotten when the target dies, is deleted or leaves scope. Leave unchanged in a level.</source>
        <translation>Laufzeitzustand: das Objekt, auf das dieses gerade zielt und dem es zuhört (von KIs gesetzt); es wird vergessen, wenn das Ziel stirbt, gelöscht wird oder den Bereich verlässt. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: the list of objects listening to this one (created by the first listener); it sends them messages such as &quot;Died&quot; and &quot;Delete&quot;. Leave unchanged in a level.</source>
        <translation>Laufzeitzustand: die Liste der Objekte, die diesem zuhören (vom ersten Zuhörer angelegt); es sendet ihnen Nachrichten wie „Died“ und „Delete“. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The model (Cache/Models/&lt;name&gt;.mdl16) that gives the entity its graphics, sequences, bounds polygon, hit points and model AIs. Changing it re-lists the object and starts with the model&apos;s first sequence (animated entities: its default sequence, frame 0, movement angle 0).</source>
        <translation>Das Modell (Cache/Models/&lt;Name&gt;.mdl16), das der Figur Grafik, Sequenzen, Begrenzungspolygon, Trefferpunkte und Modell-KIs gibt. Ein Wechsel trägt das Objekt neu ein und beginnt mit der ersten Sequenz des Modells (animierte Figuren: seine Standardsequenz, Bild 0, Bewegungswinkel 0).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>World x coordinate in pixels (decimals allowed). Setting it moves the object, rounds the integer position and re-lists it in the layer&apos;s grid.</source>
        <translation>Welt-X-Koordinate in Pixeln (Nachkommastellen erlaubt). Das Setzen verschiebt das Objekt, rundet die ganzzahlige Position und trägt es neu ins Raster der Ebene ein.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>World y coordinate in pixels (decimals allowed); the ground point of the object, which also decides its drawing order. Setting it moves the object and re-lists it in the layer&apos;s grid.</source>
        <translation>Welt-Y-Koordinate in Pixeln (Nachkommastellen erlaubt); der Bodenpunkt des Objekts, der auch die Zeichenreihenfolge bestimmt. Das Setzen verschiebt das Objekt und trägt es neu ins Raster der Ebene ein.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Height above the ground in pixels (-500..500): the object is drawn that many pixels higher while its collision and sorting point stay on the ground. Setting it also sets Rendering Height Float.</source>
        <translation>Höhe über dem Boden in Pixeln (-500..500): Das Objekt wird um so viele Pixel höher gezeichnet, während Kollisions- und Sortierpunkt am Boden bleiben. Das Setzen setzt auch „Rendering Height Float“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The same height as a float (-500..500 pixels); movable entities change it through their height velocity. A change of 0.01 or less is ignored; the integer Rendering Height is its rounded value.</source>
        <translation>Dieselbe Höhe als Gleitkommazahl (-500..500 Pixel); bewegliche Figuren ändern sie über ihre Höhengeschwindigkeit. Änderungen von 0,01 oder weniger werden ignoriert; die ganzzahlige „Rendering Height“ ist ihr gerundeter Wert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The model&apos;s sequence the entity shows now (by name; none = -1). AIs and behaviours change it while playing; in a level it sets the starting animation or pose.</source>
        <translation>Die Sequenz des Modells, die die Figur gerade zeigt (nach Name; keine = -1). KIs und Verhalten ändern sie beim Abspielen; im Level legt sie die Anfangsanimation bzw. -pose fest.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: the left edge (world pixels) of the rectangle around the line&apos;s drawing strips, recomputed whenever the line is set; used as the object&apos;s rectangle (raised by the rendering height). No original level uses this class.</source>
        <translation>Laufzeitzustand: die linke Kante (Weltpixel) des Rechtecks um die Zeichenstreifen der Linie, bei jedem Setzen der Linie neu berechnet; dient als Rechteck des Objekts (um die Zeichenhöhe angehoben). Kein Original-Level nutzt diese Klasse.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: the top edge (world pixels) of the rectangle around the line&apos;s drawing strips, recomputed whenever the line is set; used as the object&apos;s rectangle (raised by the rendering height). No original level uses this class.</source>
        <translation>Laufzeitzustand: die obere Kante (Weltpixel) des Rechtecks um die Zeichenstreifen der Linie, bei jedem Setzen der Linie neu berechnet; dient als Rechteck des Objekts (um die Zeichenhöhe angehoben). Kein Original-Level nutzt diese Klasse.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: the right edge (world pixels) of the rectangle around the line&apos;s drawing strips, recomputed whenever the line is set; used as the object&apos;s rectangle (raised by the rendering height). No original level uses this class.</source>
        <translation>Laufzeitzustand: die rechte Kante (Weltpixel) des Rechtecks um die Zeichenstreifen der Linie, bei jedem Setzen der Linie neu berechnet; dient als Rechteck des Objekts (um die Zeichenhöhe angehoben). Kein Original-Level nutzt diese Klasse.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: the bottom edge (world pixels) of the rectangle around the line&apos;s drawing strips, recomputed whenever the line is set; used as the object&apos;s rectangle (raised by the rendering height). No original level uses this class.</source>
        <translation>Laufzeitzustand: die untere Kante (Weltpixel) des Rechtecks um die Zeichenstreifen der Linie, bei jedem Setzen der Linie neu berechnet; dient als Rechteck des Objekts (um die Zeichenhöhe angehoben). Kein Original-Level nutzt diese Klasse.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Colour of the two outer lines drawn on both sides of the line (default 205, 20, 25, 255).</source>
        <translation>Farbe der beiden äußeren Linien, die beidseits der Linie gezeichnet werden (Standard 205, 20, 25, 255).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Colour of the centre line (default 255, 200, 25, 255).</source>
        <translation>Farbe der Mittellinie (Standard 255, 200, 25, 255).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Start point of the line (world pixels); the code makes the end point with the smaller y the start and moves the object there. The drawing strips are built only when the line is set by the game (or a network update); they are not saved, so editing the point alone does not rebuild them.</source>
        <translation>Startpunkt der Linie (Weltpixel); der Code macht den Endpunkt mit dem kleineren y zum Start und verschiebt das Objekt dorthin. Die Zeichenstreifen entstehen nur, wenn das Spiel (oder ein Netzwerk-Update) die Linie setzt; sie werden nicht gespeichert, daher baut das Ändern des Punktes allein sie nicht neu.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>End point of the line (world pixels). Like Start it only takes effect when the line is set by the game, which rebuilds the strips.</source>
        <translation>Endpunkt der Linie (Weltpixel). Wie „Start“ wirkt er erst, wenn das Spiel die Linie setzt und dabei die Streifen neu baut.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: unit direction from start to end ((1, 0) for equal points), recomputed when the line is set.</source>
        <translation>Laufzeitzustand: Einheitsrichtung vom Start zum Ende ((1, 0) bei gleichen Punkten), beim Setzen der Linie neu berechnet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: unit vector perpendicular to the line, recomputed when the line is set; the outer lines are drawn offset by it.</source>
        <translation>Laufzeitzustand: Einheitsvektor senkrecht zur Linie, beim Setzen der Linie neu berechnet; die äußeren Linien werden um ihn versetzt gezeichnet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Width in pixels of the band around the line that the drawing strips cover (new lines get 4); it sets the strips&apos; extent and the bounds, the lines themselves are drawn one pixel apart.</source>
        <translation>Breite in Pixeln des Bandes um die Linie, das die Zeichenstreifen abdecken (neue Linien erhalten 4); sie bestimmt die Ausdehnung der Streifen und die Grenzen, die Linien selbst liegen ein Pixel auseinander.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Damage taken so far, in hit points; the remaining hit points are the model&apos;s hit points minus this (at least 0). A value in the level starts the object damaged; at or above the model&apos;s hit points it counts as dead and takes no more damage. Healing lowers it.</source>
        <translation>Bisher erlittener Schaden in Trefferpunkten; die verbleibenden Trefferpunkte sind die des Modells minus diesen Wert (mindestens 0). Ein Wert im Level lässt das Objekt beschädigt beginnen; ab den Trefferpunkten des Modells gilt es als tot und nimmt keinen Schaden mehr. Heilung senkt den Wert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run once when the damage reaches the hit points, before the object dies (death type, &quot;Died&quot; message); the damage dealer is passed along.</source>
        <translation>Aktion, die einmal ausgeführt wird, wenn der Schaden die Trefferpunkte erreicht, bevor das Objekt stirbt (Todesart, Nachricht „Died“); der Verursacher wird mitgegeben.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run on every hit that still does damage after all modifiers (difficulty factor, AIs), before the damage is added.</source>
        <translation>Aktion, die bei jedem Treffer ausgeführt wird, der nach allen Modifikatoren (Schwierigkeitsfaktor, KIs) noch Schaden macht, bevor der Schaden addiert wird.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run on every damage call on a living object, before the modifiers are applied, even if the hit ends up doing no damage.</source>
        <translation>Aktion, die bei jedem Schadensaufruf auf ein lebendes Objekt ausgeführt wird, bevor die Modifikatoren greifen, auch wenn der Treffer am Ende keinen Schaden macht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Death behaviour used when the object dies (from the Death Behaviors list). With the game&apos;s default type the object is simply marked for deletion; any other type runs that death behaviour (e.g. a corpse or debris). An AI of the class CBehaviorActivity can take over the death instead.</source>
        <translation>Todesverhalten beim Sterben des Objekts (aus der Liste „Death Behaviors“). Mit dem Standardtyp des Spiels wird das Objekt nur zum Löschen markiert; jeder andere Typ führt dieses Todesverhalten aus (z. B. Leiche oder Trümmer). Eine KI der Klasse CBehaviorActivity kann den Tod stattdessen übernehmen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Speed factor of the animation: the sequence&apos;s frames per second are multiplied by it (0 = frozen, 1 = normal, negative = backwards; facing backwards negates it). Behaviours and AIs set it while they play; values outside -10..10 give a warning. New entities start with 0.</source>
        <translation>Geschwindigkeitsfaktor der Animation: Die Bilder pro Sekunde der Sequenz werden damit multipliziert (0 = steht, 1 = normal, negativ = rückwärts; Rückwärtsblicken kehrt ihn um). Verhalten und KIs setzen ihn beim Abspielen; Werte außerhalb von -10..10 erzeugen eine Warnung. Neue Figuren beginnen mit 0.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: direction of the upper body or weapon in radians (0..2π, shown in degrees). Without an upper body it follows the movement angle. Note: the field&apos;s setter is the same as Movement Angle&apos;s, so a value typed here turns the movement angle and sets Start FacingAngle instead.</source>
        <translation>Laufzeitzustand: Richtung des Oberkörpers bzw. der Waffe im Bogenmaß (0..2π, in Grad angezeigt). Ohne Oberkörper folgt er dem Bewegungswinkel. Hinweis: Der Setter des Feldes ist derselbe wie bei „Movement Angle“, ein hier eingegebener Wert dreht daher stattdessen den Bewegungswinkel und setzt „Start FacingAngle“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Direction the entity faces and moves, in radians (0..2π, shown in degrees); it picks the rotation of the sequence. Setting it also turns attached animated children and stores the value as Start FacingAngle.</source>
        <translation>Richtung, in die die Figur blickt und sich bewegt, im Bogenmaß (0..2π, in Grad angezeigt); sie wählt die Drehstufe der Sequenz. Das Setzen dreht auch angehängte animierte Kinder und speichert den Wert als „Start FacingAngle“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The facing angle the entity had when placed (radians), written whenever Movement Angle is set in the editor or level. CChaseInvestigateAI turns the entity back to it after a chase.</source>
        <translation>Der Blickwinkel, den die Figur beim Platzieren hatte (Bogenmaß); wird bei jedem Setzen von „Movement Angle“ im Editor oder Level geschrieben. CChaseInvestigateAI dreht die Figur nach einer Verfolgung dorthin zurück.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: position in the current sequence in frames (a float; the frame shown is its integer part). Setting it wraps the value into the sequence&apos;s length. In a level it gives the starting frame.</source>
        <translation>Laufzeitzustand: Position in der aktuellen Sequenz in Bildern (Gleitkommazahl; angezeigt wird der ganzzahlige Teil). Das Setzen bricht den Wert auf die Länge der Sequenz um. Im Level gibt er das Startbild an.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: the object that created this one (e.g. the shooter of a projectile or the layer of a mine). Damage and kills it causes are credited to that creator; it is forgotten when the creator dies or is deleted.</source>
        <translation>Laufzeitzustand: das Objekt, das dieses erzeugt hat (z. B. der Schütze eines Projektils oder der Leger einer Mine). Schaden und Abschüsse, die es verursacht, werden dem Erzeuger zugerechnet; er wird vergessen, wenn der Erzeuger stirbt oder gelöscht wird.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: the stack of small behaviours (turn, move, play a sequence, wait …) that AIs queue on the entity; the top one runs every update. Leave unchanged in a level.</source>
        <translation>Laufzeitzustand: der Stapel kleiner Verhalten (drehen, bewegen, Sequenz abspielen, warten …), die KIs für die Figur einreihen; das oberste läuft bei jeder Aktualisierung. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: the entity faces opposite to its movement angle (turned by π) and its animations play reversed, e.g. the player walking backwards while aiming. The player control sets it every frame.</source>
        <translation>Laufzeitzustand: Die Figur blickt entgegen ihrem Bewegungswinkel (um π gedreht) und ihre Animationen laufen rückwärts, z. B. wenn der Spieler beim Zielen rückwärts geht. Die Spielersteuerung setzt es jedes Bild.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: result of the last facing test: backwards when movement and aiming angles differ by more than 95 degrees (85 once it was backwards, to avoid flicker).</source>
        <translation>Laufzeitzustand: Ergebnis der letzten Blickprüfung: rückwärts, wenn Bewegungs- und Zielwinkel um mehr als 95 Grad abweichen (85, sobald sie schon rückwärts war, gegen Flackern).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: set at activation when a part answers &quot;Is Upper Body Present&quot;; then aiming and movement angles are separate (the upper body aims, the legs move). Activation only sets it, never clears it.</source>
        <translation>Laufzeitzustand: wird bei der Aktivierung gesetzt, wenn ein Teil auf „Is Upper Body Present“ antwortet; dann sind Ziel- und Bewegungswinkel getrennt (der Oberkörper zielt, die Beine laufen). Die Aktivierung setzt es nur, löscht es nie.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state (default 1): with an upper body the aiming angle turns towards the movement angle each update at the model&apos;s turn speed (Player-category entities at once). The update switches it on again every time; the player control clears it while aiming freely.</source>
        <translation>Laufzeitzustand (Standard 1): Mit Oberkörper dreht sich der Zielwinkel bei jeder Aktualisierung mit der Drehgeschwindigkeit des Modells zum Bewegungswinkel (Figuren der Kategorie „Player“ sofort). Die Aktualisierung schaltet es jedes Mal wieder ein; die Spielersteuerung löscht es beim freien Zielen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: the current frame is held; frame changes keep the locked frame until a behaviour unlocks it.</source>
        <translation>Laufzeitzustand: Das aktuelle Bild wird festgehalten; Bildwechsel behalten das gesperrte Bild, bis ein Verhalten es freigibt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state of the weapon code: a shot is waiting to be fired. Changing the model with CSetModelAction and the &quot;fix stuck gun&quot; command clear it.</source>
        <translation>Laufzeitzustand des Waffencodes: Ein Schuss wartet auf das Abfeuern. Ein Modellwechsel durch CSetModelAction und der Befehl zum Lösen einer klemmenden Waffe löschen es.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state of the weapon code: the entity is in the middle of shooting. Cleared like Waiting For Discharge (model change, &quot;fix stuck gun&quot;).</source>
        <translation>Laufzeitzustand des Waffencodes: Die Figur schießt gerade. Wird wie „Waiting For Discharge“ gelöscht (Modellwechsel, Lösen einer klemmenden Waffe).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: set every update of a movable entity while its target position differs from its position.</source>
        <translation>Laufzeitzustand: wird bei jeder Aktualisierung einer beweglichen Figur gesetzt, solange ihre Zielposition von ihrer Position abweicht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: on after the entity was relocated; the updates are counted (up to 10) in &quot;Debug/Num Updates Since Relocate&quot;. Touching triggers do not run their Enter Action for it during the first 4 updates.</source>
        <translation>Laufzeitzustand: nach dem Versetzen der Figur eingeschaltet; die Aktualisierungen werden (bis 10) in „Debug/Num Updates Since Relocate“ gezählt. Berührungsauslöser führen in den ersten 4 Aktualisierungen ihre „Enter Action“ für sie nicht aus.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Share of the velocity removed every update (0 = none, 1 = stops at once). It is applied per update, not per second, so its effect depends on the frame rate. Only while active and not stationary.</source>
        <translation>Anteil der Geschwindigkeit, der bei jeder Aktualisierung abgezogen wird (0 = keiner, 1 = sofortiger Stillstand). Er wirkt pro Aktualisierung, nicht pro Sekunde, und hängt damit von der Bildrate ab. Nur solange aktiv und nicht ruhend.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Horizontal speed in pixels per second; each update moves the target position by velocity × seconds (the move then goes through collision when Tries To Collide is set).</source>
        <translation>Horizontale Geschwindigkeit in Pixeln pro Sekunde; jede Aktualisierung verschiebt die Zielposition um Geschwindigkeit × Sekunden (die Bewegung läuft dann bei gesetztem „Tries To Collide“ durch die Kollision).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Vertical speed in pixels per second (positive = down the screen); applied like Velocity X.</source>
        <translation>Vertikale Geschwindigkeit in Pixeln pro Sekunde (positiv = bildschirmabwärts); wirkt wie „Velocity X“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Horizontal acceleration in pixels per second²; at the next update it is added to the velocity (× seconds) and then cleared, so a value in the level is a one-time push.</source>
        <translation>Horizontale Beschleunigung in Pixeln pro Sekunde²; bei der nächsten Aktualisierung wird sie (× Sekunden) zur Geschwindigkeit addiert und dann gelöscht, ein Wert im Level ist also ein einmaliger Stoß.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Vertical acceleration in pixels per second²; like Acceleration X it is applied once and then cleared.</source>
        <translation>Vertikale Beschleunigung in Pixeln pro Sekunde²; wie „Acceleration X“ wird sie einmal angewendet und dann gelöscht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The character&apos;s own inventory (items, weapons, ammunition); it is updated every frame and asked whether a weapon may fire. Resetting the fields gives the character a fresh empty inventory.</source>
        <translation>Das eigene Inventar der Figur (Gegenstände, Waffen, Munition); es wird jedes Bild aktualisiert und gefragt, ob eine Waffe feuern darf. Das Zurücksetzen der Felder gibt der Figur ein neues leeres Inventar.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>World x (pixels) of the character&apos;s home. CGuardPosAI walks back there when the character is too far away and patrols can turn back towards it; actions that place, relocate or spawn the character set it to the new position.</source>
        <translation>Welt-X (Pixel) des Heimatpunkts der Figur. CGuardPosAI läuft dorthin zurück, wenn die Figur zu weit weg ist, und Patrouillen können zu ihm umkehren; Aktionen, die die Figur platzieren, versetzen oder erzeugen, setzen ihn auf die neue Position.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>World y (pixels) of the character&apos;s home; see Home Pos X.</source>
        <translation>Welt-Y (Pixel) des Heimatpunkts der Figur; siehe „Home Pos X“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>0/1: with 1 the character&apos;s weapons need their ammunition or energy (battery charge) to fire and use; with 0 they fire without using any.</source>
        <translation>0/1: Bei 1 brauchen die Waffen der Figur zum Feuern ihre Munition bzw. Energie (Batterieladung); bei 0 feuern sie ohne Verbrauch.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: x offset (pixels) of the last shot&apos;s muzzle relative to the character; turned by the aiming angle it serves as the discharge offset when aiming.</source>
        <translation>Laufzeitzustand: X-Versatz (Pixel) der Mündung des letzten Schusses relativ zur Figur; um den Zielwinkel gedreht dient er beim Zielen als Abschussversatz.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: y offset (pixels) of the last shot&apos;s muzzle; see LastDischargePosX.</source>
        <translation>Laufzeitzustand: Y-Versatz (Pixel) der Mündung des letzten Schusses; siehe „LastDischargePosX“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: name of the sequence of the last shot; its rotation snaps the turned discharge offset.</source>
        <translation>Laufzeitzustand: Name der Sequenz des letzten Schusses; ihre Drehstufen rasten den gedrehten Abschussversatz ein.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Flying speed: when a move behaviour drives the flier, its velocity along the movement angle is this value times the behaviour&apos;s play ratio, i.e. it acts as pixels per second despite the unit shown.</source>
        <translation>Fluggeschwindigkeit: Wenn ein Bewegungsverhalten den Flieger steuert, ist seine Geschwindigkeit entlang des Bewegungswinkels dieser Wert mal die Abspielrate des Verhaltens; er wirkt also trotz der angezeigten Einheit als Pixel pro Sekunde.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: the gait, Walk (0), Run (1) or Crouch (2). AIs set it as they go (patrols walk, chases run); move behaviours play the matching sequence, and an idle crouching walker uses IdleCrouch.</source>
        <translation>Laufzeitzustand: die Gangart, „Walk“ (0), „Run“ (1) oder „Crouch“ (2). KIs setzen sie unterwegs (Patrouillen gehen, Verfolgungen rennen); Bewegungsverhalten spielen die passende Sequenz, und eine stehende geduckte Figur nutzt „IdleCrouch“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Radians, shown in degrees (default 0: the eye straight ahead in the facing direction).</source>
        <translation>Bogenmaß, in Grad angezeigt (Standard 0: das Auge genau in Blickrichtung).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Default 0.1309 radians (7.5 degrees); radians, shown in degrees.</source>
        <translation>Standard 0,1309 Bogenmaß (7,5 Grad); Bogenmaß, in Grad angezeigt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state, set and cleared again within a single collision; leave unchanged in a level.</source>
        <translation>Laufzeitzustand, wird innerhalb einer einzigen Kollision gesetzt und wieder gelöscht; im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run when turning Om would make it overlap an active, collideable object that is not a character; the turn is then taken back.</source>
        <translation>Aktion, die ausgeführt wird, wenn eine Drehung Om mit einem aktiven, kollidierbaren Objekt überlappen ließe, das keine Figur ist; die Drehung wird dann zurückgenommen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>A second model drawn over the walking character&apos;s own model (e.g. a carried item or armour layer); it is preloaded with the level and sent in multiplayer updates. No original level uses this class.</source>
        <translation>Ein zweites Modell, das über das eigene Modell der laufenden Figur gezeichnet wird (z. B. ein getragener Gegenstand oder eine Rüstungsschicht); es wird mit dem Level vorgeladen und in Mehrspieler-Updates übertragen. Kein Original-Level nutzt diese Klasse.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Lifetime in seconds (default 2), counted down while active. When it runs out the projectile takes its remaining hit points as &quot;Unavoidable&quot; damage and dies with its death type (e.g. explodes); without hit points it is simply removed.</source>
        <translation>Lebensdauer in Sekunden (Standard 2), zählt herunter, solange aktiv. Läuft sie ab, erleidet das Projektil seine restlichen Trefferpunkte als „Unavoidable“-Schaden und stirbt mit seiner Todesart (z. B. Explosion); ohne Trefferpunkte wird es einfach entfernt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Flight speed: when a move behaviour drives the projectile, its velocity along the angle is this value, i.e. pixels per second despite the unit shown.</source>
        <translation>Fluggeschwindigkeit: Wenn ein Bewegungsverhalten das Projektil steuert, ist seine Geschwindigkeit entlang des Winkels dieser Wert, also Pixel pro Sekunde trotz der angezeigten Einheit.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Outline in absolute world pixels (x1, y1, x2, y2, …; at most 25 points are read, a repeated point is skipped). A closed outline (last point = first) is hit inside, an open one within 4 pixels of its edges; with Collideable it blocks movement like a wall.</source>
        <translation>Umriss in absoluten Weltpixeln (x1, y1, x2, y2, …; höchstens 25 Punkte werden gelesen, ein wiederholter Punkt wird übersprungen). Ein geschlossener Umriss (letzter Punkt = erster) trifft innen, ein offener bis 4 Pixel an seinen Kanten; mit „Collideable“ blockiert er Bewegung wie eine Wand.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>0/1 (default 1): 1 puts the surface into the ground queue (drawn before all objects, with shadows and ground marks: water, lava, floors); 0 into the object queue, sorted with the objects by its bottom edge + YSort (e.g. black covers that hide what stands behind them).</source>
        <translation>0/1 (Standard 1): 1 legt die Fläche in die Bodenwarteschlange (vor allen Objekten gezeichnet, mit Schatten und Bodenspuren: Wasser, Lava, Böden); 0 in die Objektwarteschlange, mit den Objekten nach Unterkante + „YSort“ sortiert (z. B. schwarze Abdeckungen, die verbergen, was dahinter steht).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>How the surface is filled: Black, Shadow, Trans Blue, Trans Green, Trans Red (filled in that mode), Textured (Static Texture), Animated Texture or Warped (Warp Effect). Setting it restarts the animation time; Animated Texture and Warped are redrawn every frame, the others rest.</source>
        <translation>Wie die Fläche gefüllt wird: „Black“, „Shadow“, „Trans Blue“, „Trans Green“, „Trans Red“ (in diesem Modus gefüllt), „Textured“ („Static Texture“), „Animated Texture“ oder „Warped“ („Warp Effect“). Das Setzen startet die Animationszeit neu; „Animated Texture“ und „Warped“ werden jedes Bild neu gezeichnet, die anderen ruhen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Pixels added to the polygon&apos;s bottom edge for the sort key (key = (bottom + YSort) × 8). It orders the surface against objects (On Ground 0) or against shadows and ground marks (On Ground 1); water uses -800 to stay below shadows.</source>
        <translation>Pixel, die für den Sortierschlüssel zur Unterkante des Polygons addiert werden (Schlüssel = (Unterkante + YSort) × 8). Er ordnet die Fläche gegen Objekte („On Ground“ 0) bzw. gegen Schatten und Bodenspuren („On Ground“ 1); Wasser nutzt -800, um unter den Schatten zu bleiben.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Animation time of an Animated Texture in frames: each update adds the texture&apos;s frames per second × seconds and wraps at its frame count; the frame drawn is the integer part. A value in the level is a start offset; setting Render Type resets it to 0.</source>
        <translation>Animationszeit einer „Animated Texture“ in Bildern: Jede Aktualisierung addiert Bilder pro Sekunde der Textur × Sekunden und bricht bei ihrer Bildanzahl um; gezeichnet wird der ganzzahlige Teil. Ein Wert im Level ist ein Startversatz; das Setzen von „Render Type“ setzt ihn auf 0.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Animated texture (Cache/Animated Textures, e.g. Water Green Dark) used when Render Type is Animated Texture; default the list&apos;s first entry (!None).</source>
        <translation>Animierte Textur (Cache/Animated Textures, z. B. „Water Green Dark“), verwendet bei „Render Type“ „Animated Texture“; Standard ist der erste Listeneintrag („!None“).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Ground texture used when Render Type is Textured; default the list&apos;s first entry (01 Ivy).</source>
        <translation>Bodentextur, verwendet bei „Render Type“ „Textured“; Standard ist der erste Listeneintrag („01 Ivy“).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Water warp effect used when Render Type is Warped (the effect&apos;s current frame becomes the texture); default the list&apos;s first entry (!None).</source>
        <translation>Wasser-Verzerrungseffekt, verwendet bei „Render Type“ „Warped“ (das aktuelle Bild des Effekts wird zur Textur); Standard ist der erste Listeneintrag („!None“).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Order in which the outline is used when the way-point map is built: all Primary polygons first, then the Secondary ones (default). Earlier points win, because a new way point needs the minimum distance to all existing ones.</source>
        <translation>Reihenfolge, in der der Umriss beim Bau der Wegpunktkarte verwendet wird: zuerst alle „Primary“-Polygone, dann die „Secondary“-Polygone (Standard). Frühere Punkte haben Vorrang, weil ein neuer Wegpunkt zu allen vorhandenen den Mindestabstand braucht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>World x coordinate in pixels of the part&apos;s position; setting it moves and re-lists the part.</source>
        <translation>Welt-X-Koordinate der Position in Pixeln; das Setzen verschiebt das Teil und trägt es neu ein.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>World y coordinate in pixels of the part&apos;s position; setting it moves and re-lists the part.</source>
        <translation>Welt-Y-Koordinate der Position in Pixeln; das Setzen verschiebt das Teil und trägt es neu ein.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Height of the bolt&apos;s start above the position, in pixels (the start is drawn that much higher).</source>
        <translation>Höhe des Blitzanfangs über der Position in Pixeln (der Anfang wird um so viel höher gezeichnet).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Horizontal distance in pixels from the start to the end of the bolt (default 100).</source>
        <translation>Horizontaler Abstand in Pixeln vom Anfang zum Ende des Blitzes (Standard 100).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Vertical distance in pixels from the start to the end of the bolt (default 25); it also sets how many draw items the bolt is split into (about one per 20 pixels).</source>
        <translation>Vertikaler Abstand in Pixeln vom Anfang zum Ende des Blitzes (Standard 25); er bestimmt auch, in wie viele Zeichenelemente der Blitz geteilt wird (etwa eins je 20 Pixel).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Pixels by which the bolt&apos;s end is raised (subtracted from Y Length).</source>
        <translation>Pixel, um die das Ende des Blitzes angehoben wird (von „Y Length“ abgezogen).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>How jagged the bolt is: each midpoint is moved sideways by a random amount up to ± this share of the segment length (0..1, default 0.25). The bolt is made anew on every draw.</source>
        <translation>Wie zackig der Blitz ist: Jeder Mittelpunkt wird um einen Zufallsbetrag bis ± diesem Anteil der Segmentlänge seitlich verschoben (0..1, Standard 0,25). Der Blitz entsteht bei jedem Zeichnen neu.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Shortest segment in pixels (1..100, default 5): segments are split while a random length between this value and twice it still fits.</source>
        <translation>Kürzestes Segment in Pixeln (1..100, Standard 5): Segmente werden geteilt, solange eine Zufallslänge zwischen diesem Wert und dem Doppelten noch hineinpasst.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Colour of the bolt&apos;s core line (default white).</source>
        <translation>Farbe der Kernlinie des Blitzes (Standard Weiß).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Colour of the two glow lines drawn on both sides of the core (default 103, 35, 166).</source>
        <translation>Farbe der beiden Leuchtlinien, die beidseits des Kerns gezeichnet werden (Standard 103, 35, 166).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Text of the sign (default and when empty: &quot;Under Construction&quot;), drawn in the font Med Gold, wrapped to Max Width and centred horizontally on the position.</source>
        <translation>Text des Schildes (Standard und bei leerem Feld: „Under Construction“), in der Schrift „Med Gold“ gezeichnet, auf „Max Width“ umbrochen und waagerecht auf die Position zentriert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Width in pixels at which the text is wrapped (default 100); the sign&apos;s box is the wrapped text plus an 8-pixel border.</source>
        <translation>Breite in Pixeln, bei der der Text umbrochen wird (Standard 100); der Kasten des Schildes ist der umbrochene Text plus ein 8-Pixel-Rand.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Ground texture that fills the sign&apos;s 8-pixel border (default the texture &quot;Under Construction&quot;); the inside is filled with a fixed colour.</source>
        <translation>Bodentextur, die den 8-Pixel-Rand des Schildes füllt (Standard die Textur „Under Construction“); das Innere wird mit einer festen Farbe gefüllt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The game&apos;s own level properties (CZaxLayerSaveData): &quot;Compass Target&quot;, the object the HUD compass points to. Empty in all original levels.</source>
        <translation>Die eigenen Level-Eigenschaften des Spiels (CZaxLayerSaveData): „Compass Target“, das Objekt, auf das der HUD-Kompass zeigt. In allen Original-Levels leer.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The level&apos;s music (CMusicMixerData): three music files below Music/ (full, medium, ambient) that the music mixer switches between.</source>
        <translation>Die Musik des Levels (CMusicMixerData): drei Musikdateien unter Music/ (voll, mittel, Ambient), zwischen denen der Musikmischer wechselt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Map width in world pixels (default 4097). The object grid and the ground are sized from it when the level loads; the view and sound positions are limited by it.</source>
        <translation>Kartenbreite in Weltpixeln (Standard 4097). Objektraster und Boden werden beim Laden des Levels danach bemessen; Ansicht und Klangpositionen werden dadurch begrenzt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Map height in world pixels (default 4097); used like Width.</source>
        <translation>Kartenhöhe in Weltpixeln (Standard 4097); wird wie „Width“ verwendet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: actions waiting to run (e.g. delayed ones); the queue is processed every update. Empty in all original levels; leave unchanged.</source>
        <translation>Laufzeitzustand: Aktionen, die auf ihre Ausführung warten (z. B. verzögerte); die Warteschlange wird bei jeder Aktualisierung abgearbeitet. In allen Original-Levels leer; unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Recommended number of players (2-16, default 5); the multiplayer server dialog shows it as the lower number next to the map.</source>
        <translation>Empfohlene Spielerzahl (2–16, Standard 5); der Mehrspieler-Serverdialog zeigt sie als untere Zahl neben der Karte.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Most players for this map (2-16; 0 = No Limit, treated as 16). The server dialog shows it next to the map and limits the player count to it.</source>
        <translation>Höchste Spielerzahl für diese Karte (2–16; 0 = „No Limit“, gilt als 16). Der Serverdialog zeigt sie neben der Karte und begrenzt die Spielerzahl darauf.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Game type used when the level is started with &quot;Default For Map&quot; (default QuestMode).</source>
        <translation>Spieltyp, der verwendet wird, wenn das Level mit „Default For Map“ gestartet wird (Standard „QuestMode“).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Game types the map offers (default $All): the multiplayer server dialog lists the map only under the game types set here.</source>
        <translation>Spieltypen, die die Karte anbietet (Standard $All): Der Mehrspieler-Serverdialog führt die Karte nur unter den hier gesetzten Spieltypen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state (0 in all original levels): at its first update the level activates its objects (their AIs begin) and resets the fog of war and the mini-map mapping, then sets this to 1. Leave at 0; with 1 that start-up is skipped.</source>
        <translation>Gespeicherter Laufzeitzustand (in allen Original-Levels 0): Bei seiner ersten Aktualisierung aktiviert das Level seine Objekte (ihre KIs beginnen) und setzt Nebel des Krieges und Minikarten-Abbildung zurück, dann wird der Wert 1. Auf 0 lassen; mit 1 entfällt dieser Start.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Display name of the level (a Local.txt entry, so it can be translated); the multiplayer server dialog lists maps by it.</source>
        <translation>Anzeigename des Levels (ein Eintrag aus Local.txt, daher übersetzbar); der Mehrspieler-Serverdialog führt die Karten unter diesem Namen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>An owned action of the level. The reimplementation only loads, saves and deletes it; no code that runs it was found. Empty in the original levels checked.</source>
        <translation>Eine eigene Aktion des Levels. Die Neuimplementierung lädt, speichert und löscht sie nur; Code, der sie ausführt, wurde nicht gefunden. In den geprüften Original-Levels leer.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run once when the level has finished loading (after preloading the assets), then deleted, so a save game does not run it again.</source>
        <translation>Aktion, die einmal ausgeführt wird, wenn das Level fertig geladen ist (nach dem Vorladen der Daten), und danach gelöscht wird, sodass ein Spielstand sie nicht erneut ausführt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sound environment setting (default Generic) without effect in the retail game: the setter stores or passes the value to code that does nothing with it (original bug 1.17). A non-default value changes nothing.</source>
        <translation>Einstellung der Klangumgebung (Standard Generic) ohne Wirkung im Verkaufsspiel: Der Setter speichert den Wert bzw. reicht ihn an Code weiter, der nichts damit tut (Originalfehler 1.17). Ein anderer Wert ändert nichts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sound fall-off factor (0-10, default 5) without effect in the retail game: the setter stores a value that only an unused debug drawing reads (original bug 1.17).</source>
        <translation>Abfallfaktor des Klangs (0–10, Standard 5) ohne Wirkung im Verkaufsspiel: Der Setter speichert einen Wert, den nur eine ungenutzte Debug-Zeichnung liest (Originalfehler 1.17).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sound environment setting (default 7.5) without effect in the retail game: the setter stores or passes the value to code that does nothing with it (original bug 1.17). A non-default value changes nothing.</source>
        <translation>Einstellung der Klangumgebung (Standard 7.5) ohne Wirkung im Verkaufsspiel: Der Setter speichert den Wert bzw. reicht ihn an Code weiter, der nichts damit tut (Originalfehler 1.17). Ein anderer Wert ändert nichts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: the camera position (top-left of the view in world pixels), kept inside the ground&apos;s size; the game moves it with the player. Leave unchanged in a level.</source>
        <translation>Laufzeitzustand: die Kameraposition (linke obere Ecke der Ansicht in Weltpixeln), innerhalb der Bodengröße gehalten; das Spiel bewegt sie mit dem Spieler. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: View Position rounded to whole pixels, the offset the view is drawn at. Leave unchanged in a level.</source>
        <translation>Laufzeitzustand: „View Position“ auf ganze Pixel gerundet, der Versatz, mit dem die Ansicht gezeichnet wird. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The level&apos;s path below Levels/ without extension; it names the .way file and the mini map image. On loading it is replaced by the name of the file actually loaded.</source>
        <translation>Der Pfad des Levels unter Levels/ ohne Endung; er benennt die .way-Datei und das Minikartenbild. Beim Laden wird er durch den Namen der tatsächlich geladenen Datei ersetzt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>One CTeamInfo per team (index = team number): Spawn Point Name places a character of that team that comes without a start point name, Re-Spawn Point Name is used instead once its player was placed before.</source>
        <translation>Ein CTeamInfo je Team (Index = Teamnummer): „Spawn Point Name“ platziert eine Figur dieses Teams, die ohne Startpunktnamen kommt; „Re-Spawn Point Name“ gilt stattdessen, wenn ihr Spieler schon einmal platziert wurde.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time list of ambient sounds of the level; while this level is the one that plays sounds they are placed relative to the listener every update. Empty in all original levels.</source>
        <translation>Laufzeitliste der Umgebungsgeräusche des Levels; solange dieses Level die Geräusche spielt, werden sie bei jeder Aktualisierung relativ zum Hörer platziert. In allen Original-Levels leer.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: seconds left of the current screen shake (started by CShakeScreenAction); counts down every update. 0 in all original levels.</source>
        <translation>Laufzeitzustand: verbleibende Sekunden des aktuellen Bildschirmwackelns (von CShakeScreenAction gestartet); zählt bei jeder Aktualisierung herunter. In allen Original-Levels 0.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: full length in seconds of the current screen shake; the shake fades out over its second half.</source>
        <translation>Laufzeitzustand: Gesamtlänge des aktuellen Bildschirmwackelns in Sekunden; das Wackeln klingt in der zweiten Hälfte aus.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: the amplitude envelope (pixels) of the current screen shake, copied from the CShakeScreenAction.</source>
        <translation>Laufzeitzustand: die Amplitudenhüllkurve (Pixel) des aktuellen Bildschirmwackelns, aus der CShakeScreenAction übernommen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: the camera offset applied by the last shake step (taken away again before the next one).</source>
        <translation>Laufzeitzustand: der Kameraversatz des letzten Wackelschritts (wird vor dem nächsten wieder abgezogen).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: cache of the paths characters are currently following (created on first use). Leave unchanged in a level.</source>
        <translation>Laufzeitzustand: Zwischenspeicher der Pfade, denen Figuren gerade folgen (bei erster Nutzung angelegt). Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The way-point map (MinDistBetweenWayPoints, MaxDistToConnect). The game loads the network from the level&apos;s .way file or builds it with its own fixed values (20 and 39.8), whatever the level holds here.</source>
        <translation>Die Wegpunktkarte („MinDistBetweenWayPoints“, „MaxDistToConnect“). Das Spiel lädt das Netz aus der .way-Datei des Levels oder baut es mit eigenen festen Werten (20 und 39,8), unabhängig davon, was das Level hier enthält.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Fog map of the mini map (one pixel per mini-map pixel; 0 = uncovered); the view&apos;s area is uncovered as the player moves. When a level starts fresh (Has Begin Been Called 0) the game recreates it at mini-map size, fully covered, so the level&apos;s value only matters in save games.</source>
        <translation>Nebelkarte der Minikarte (ein Pixel je Minikartenpixel; 0 = aufgedeckt); der Bereich der Ansicht wird aufgedeckt, wenn der Spieler sich bewegt. Startet ein Level neu („Has Begin Been Called“ 0), legt das Spiel sie in Minikartengröße vollständig verdeckt neu an; der Wert im Level zählt daher nur in Spielständen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time list of objects kept updated even when off-screen (optionally with an area around them), filled by CPointOfIntrestAI. Empty in all original levels; leave unchanged.</source>
        <translation>Laufzeitliste von Objekten, die auch außerhalb des Bildschirms aktualisiert werden (wahlweise mit einem Bereich um sie herum), gefüllt von CPointOfIntrestAI. In allen Original-Levels leer; unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Has no effect: the game shows the mini map with 1 as well, no code reads the field (original bug 1.6).</source>
        <translation>Ohne Wirkung: Das Spiel zeigt die Minikarte auch mit 1, kein Code liest das Feld (Originalfehler 1.6).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>0 = unclipped (default).</source>
        <translation>0 = nicht beschnitten (Standard).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: the x offset of the world-to-mini-map mapping (mini-map x = world x × X Scale + X Offset, y likewise). Reset to 0 when the level starts and computed from the level size, the clippings and the mini-map size on first use; leave unchanged in a level.</source>
        <translation>Laufzeitzustand: der X-Versatz der Abbildung Welt → Minikarte (Minikarten-x = Welt-x × X Scale + X Offset, y ebenso). Wird beim Levelstart auf 0 gesetzt und bei der ersten Nutzung aus Levelgröße, Beschnitten und Minikartengröße berechnet; im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: the x scale of the world-to-mini-map mapping (mini-map x = world x × X Scale + X Offset, y likewise). Reset to 0 when the level starts and computed from the level size, the clippings and the mini-map size on first use; leave unchanged in a level.</source>
        <translation>Laufzeitzustand: der X-Skalierung der Abbildung Welt → Minikarte (Minikarten-x = Welt-x × X Scale + X Offset, y ebenso). Wird beim Levelstart auf 0 gesetzt und bei der ersten Nutzung aus Levelgröße, Beschnitten und Minikartengröße berechnet; im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: the y offset of the world-to-mini-map mapping (mini-map x = world x × X Scale + X Offset, y likewise). Reset to 0 when the level starts and computed from the level size, the clippings and the mini-map size on first use; leave unchanged in a level.</source>
        <translation>Laufzeitzustand: der Y-Versatz der Abbildung Welt → Minikarte (Minikarten-x = Welt-x × X Scale + X Offset, y ebenso). Wird beim Levelstart auf 0 gesetzt und bei der ersten Nutzung aus Levelgröße, Beschnitten und Minikartengröße berechnet; im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state: the y scale of the world-to-mini-map mapping (mini-map x = world x × X Scale + X Offset, y likewise). Reset to 0 when the level starts and computed from the level size, the clippings and the mini-map size on first use; leave unchanged in a level.</source>
        <translation>Laufzeitzustand: der Y-Skalierung der Abbildung Welt → Minikarte (Minikarten-x = Welt-x × X Scale + X Offset, y ebenso). Wird beim Levelstart auf 0 gesetzt und bei der ersten Nutzung aus Levelgröße, Beschnitten und Minikartengröße berechnet; im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Shown as the button text of this difficulty in the &quot;Select Difficulty&quot; menu. A name left at the default text is replaced after loading by the difficulty file&apos;s name.</source>
        <translation>Wird als Beschriftung der Schaltfläche dieses Schwierigkeitsgrads im Menü „Select Difficulty“ angezeigt. Ein auf dem Standardtext belassener Name wird nach dem Laden durch den Dateinamen des Schwierigkeitsgrads ersetzt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Applies to every damaged part in the &quot;Enemy&quot; category, before shields and AIs see the damage; stored as a fraction (1 = 100 %, range 0 to 3). The &quot;Select Difficulty&quot; menu also sorts the difficulties by this value, highest first.</source>
        <translation>Gilt für jedes beschädigte Objekt der Kategorie „Enemy“, bevor Schilde und KIs den Schaden sehen; gespeichert als Bruchteil (1 = 100 %, Bereich 0 bis 3). Das Menü „Select Difficulty“ sortiert die Schwierigkeitsgrade außerdem nach diesem Wert, den höchsten zuerst.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Applies to every damaged part in the &quot;Player&quot; category, before the shield absorbs anything; stored as a fraction (1 = 100 %, range 0 to 3).</source>
        <translation>Gilt für jedes beschädigte Objekt der Kategorie „Player“, bevor der Schild etwas abfängt; gespeichert als Bruchteil (1 = 100 %, Bereich 0 bis 3).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Multiplies the energy a player character&apos;s weapons take from the battery (per shot, and per second for continuous-fire weapons); fraction, 1 = 100 %, range 0 to 3.</source>
        <translation>Multipliziert die Energie, die die Waffen einer Spielerfigur der Batterie entnehmen (pro Schuss und bei Dauerfeuerwaffen pro Sekunde); Bruchteil, 1 = 100 %, Bereich 0 bis 3.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Multiplies the charge of picked-up energy ammunition and batteries for a player&apos;s character; fraction, 1 = 100 %, range 0 to 3.</source>
        <translation>Multipliziert die Ladung aufgenommener Energiemunition und Batterien für die Figur eines Spielers; Bruchteil, 1 = 100 %, Bereich 0 bis 3.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Multiplies the damage a player&apos;s shield absorbs, i.e. how much shield charge a hit costs (on top of &quot;Player Damage Percent&quot;); the hit is fully absorbed either way. Fraction, 1 = 100 %, range 0 to 3.</source>
        <translation>Multipliziert den Schaden, den der Schild eines Spielers abfängt, also wie viel Schildladung ein Treffer kostet (zusätzlich zu „Player Damage Percent“); der Treffer wird in jedem Fall ganz abgefangen. Bruchteil, 1 = 100 %, Bereich 0 bis 3.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Multiplies the charge a player&apos;s shield gets from shield pickups; fraction, 1 = 100 %, range 0 to 3.</source>
        <translation>Multipliziert die Ladung, die der Schild eines Spielers durch Schild-Gegenstände erhält; Bruchteil, 1 = 100 %, Bereich 0 bis 3.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the object that receives this broadcaster&apos;s messages (e.g. &quot;Died&quot;, &quot;Delete&quot;); written by the game when objects start listening. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: das Objekt, das die Nachrichten dieses Senders erhält (z. B. „Died“, „Delete“); wird vom Spiel geschrieben, wenn Objekte zu lauschen beginnen. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: every caller stores -1 here and no code reads it back (messages go to the listener&apos;s own handler). Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: alle Aufrufer speichern hier -1, und kein Code liest den Wert (Nachrichten gehen an den Handler des Lauschers selbst). Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: every caller stores an empty text here and no code reads it back. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: alle Aufrufer speichern hier einen leeren Text, und kein Code liest ihn. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Used for the mission objectives of the selected saved game in the load/save screen&apos;s details page.</source>
        <translation>Wird für die Missionsziele des gewählten Spielstands auf der Detailseite des Laden/Speichern-Bildschirms verwendet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Position of the animated sequence &quot;Fire Left&quot; in the main menu, in pixels within the 640 × 480 menu area (which sits at 80, 60 of the 800 × 600 screen).</source>
        <translation>Position der animierten Sequenz „Fire Left“ im Hauptmenü, in Pixeln innerhalb der 640 × 480 großen Menüfläche (die bei 80, 60 des 800 × 600 großen Bildschirms liegt).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Position of the animated sequence &quot;Fire Right&quot; in the main menu, in pixels within the 640 × 480 menu area (which sits at 80, 60 of the 800 × 600 screen).</source>
        <translation>Position der animierten Sequenz „Fire Right“ im Hauptmenü, in Pixeln innerhalb der 640 × 480 großen Menüfläche (die bei 80, 60 des 800 × 600 großen Bildschirms liegt).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Normal font of the menu buttons&apos; text (main menu and the other menus drawn with the same text look); default &quot;Med Gold&quot;.</source>
        <translation>Normale Schrift der Schaltflächentexte im Hauptmenü und in den anderen Menüs mit derselben Textdarstellung; Standard „Med Gold“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of a menu button&apos;s text while the mouse is over it, drawn with the &quot;Font Hover Effect&quot; warp; default &quot;Med Gold&quot;.</source>
        <translation>Schrift des Schaltflächentexts im Menü, solange die Maus darüber steht; gezeichnet mit dem Verzerrungseffekt „Font Hover Effect“; Standard „Med Gold“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the shadow drawn under every menu button text, 2 pixels down and right (1 pixel while pressed); default &quot;Med Gold&quot;.</source>
        <translation>Schrift des Schattens unter jedem Schaltflächentext im Menü, 2 Pixel nach rechts unten versetzt (1 Pixel, solange gedrückt); Standard „Med Gold“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sequence used as the warp texture that bends the hovered button text (with &quot;Hover Font&quot;); default &quot;Menu Font Effect&quot;.</source>
        <translation>Sequenz, die als Verzerrungstextur den Schaltflächentext unter der Maus verbiegt (mit „Hover Font“); Standard „Menu Font Effect“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the version text (&quot;Zax Version … Build …&quot;) in the main menu; default &quot;Small Red&quot;.</source>
        <translation>Schrift des Versionstexts („Zax Version … Build …“) im Hauptmenü; Standard „Small Red“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Placement of the main menu buttons within the 640 × 480 menu area: x is the centre of the button column (all buttons as wide as the widest), y the top of the first button; the others follow below.</source>
        <translation>Lage der Hauptmenü-Schaltflächen innerhalb der 640 × 480 großen Menüfläche: x ist die Mitte der Schaltflächenspalte (alle so breit wie die breiteste), y die Oberkante der ersten Schaltfläche; die übrigen folgen darunter.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Top edge of the Materials Generator window in pixels on an 800 × 600 screen; on a 640-wide screen the window is moved 80 left and 120 up.</source>
        <translation>Oberkante des Fensters des Materials Generator in Pixeln bei 800 × 600; bei 640 Pixel Bildschirmbreite wird das Fenster um 80 nach links und 120 nach oben verschoben.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>X position of the item list (its column header; the grid follows below it) in the window, in pixels.</source>
        <translation>X-Position der Gegenstandsliste (ihrer Spaltenüberschrift; das Raster folgt darunter) im Fenster, in Pixeln.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Y position of the item list&apos;s column header in the window, in pixels; the grid starts below it.</source>
        <translation>Y-Position der Spaltenüberschrift der Gegenstandsliste im Fenster, in Pixeln; das Raster beginnt darunter.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Width of the item list (header and grid) in pixels.</source>
        <translation>Breite der Gegenstandsliste (Überschrift und Raster) in Pixeln.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Total height of the item list in pixels; the grid gets this minus &quot;List Header Height&quot;.</source>
        <translation>Gesamthöhe der Gegenstandsliste in Pixeln; das Raster erhält diesen Wert abzüglich „List Header Height“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Height of the column header row of the item list in pixels.</source>
        <translation>Höhe der Spaltenüberschrift der Gegenstandsliste in Pixeln.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Height of one row of the item list in pixels; the 36-pixel item icon is centred vertically in it.</source>
        <translation>Höhe einer Zeile der Gegenstandsliste in Pixeln; das 36 Pixel große Gegenstandssymbol wird darin senkrecht zentriert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Colour handed to the item grid window as its window colour; presumably the highlight of the selected row (not checked visually).</source>
        <translation>Farbe, die dem Gegenstandsraster als Fensterfarbe übergeben wird; vermutlich die Hervorhebung der gewählten Zeile (nicht im Bild geprüft).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Colour given to the item grid and its column header; presumably the colour of the grid and header lines (not checked visually).</source>
        <translation>Farbe für das Gegenstandsraster und seine Spaltenüberschrift; vermutlich die Farbe der Raster- und Überschriftslinien (nicht im Bild geprüft).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Position of the item list&apos;s scroll bar in the window, in pixels.</source>
        <translation>Position der Bildlaufleiste der Gegenstandsliste im Fenster, in Pixeln.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Width and height of the item list&apos;s scroll bar in pixels.</source>
        <translation>Breite und Höhe der Bildlaufleiste der Gegenstandsliste in Pixeln.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Horizontal inset in pixels of the cost texts: mineral names end this far before the mineral column&apos;s right edge (plus 12 for the icon) and the quantities start this far into their column; also handed to the column header.</source>
        <translation>Waagrechter Abstand der Kostentexte in Pixeln: Mineralnamen enden so weit vor dem rechten Rand der Mineralspalte (plus 12 für das Symbol), die Mengen beginnen so weit innerhalb ihrer Spalte; wird auch an die Spaltenüberschrift übergeben.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Vertical offset in pixels of the text in the &quot;Usage&quot; column (the ammunition item&apos;s name or the energy number) within a row.</source>
        <translation>Senkrechter Versatz in Pixeln des Texts in der Spalte „Usage“ (Name der Munition oder Energiezahl) innerhalb einer Zeile.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Vertical offset in pixels of the item name within a row.</source>
        <translation>Senkrechter Versatz in Pixeln des Gegenstandsnamens innerhalb einer Zeile.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Width in pixels of the first column, which shows the item&apos;s icon centred.</source>
        <translation>Breite in Pixeln der ersten Spalte, die das Symbol des Gegenstands zentriert zeigt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Width in pixels of the item name column; names wrap at this width minus 4.</source>
        <translation>Breite in Pixeln der Spalte mit dem Gegenstandsnamen; Namen werden bei dieser Breite minus 4 umbrochen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Width in pixels of the &quot;Usage&quot; column (the ammunition the item uses, or its energy number).</source>
        <translation>Breite in Pixeln der Spalte „Usage“ (die vom Gegenstand verwendete Munition oder seine Energiezahl).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Width in pixels of the first cost column, which lists the required minerals with icon and name.</source>
        <translation>Breite in Pixeln der ersten Kostenspalte mit den benötigten Mineralien (Symbol und Name).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Width in pixels of the second cost column, which lists the quantity of each mineral.</source>
        <translation>Breite in Pixeln der zweiten Kostenspalte mit der Menge jedes Minerals.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sound played when a made item has an entry in the inventory (it becomes the current item); the HUD bar then slides and &quot;Done Generating Sound&quot; follows at its end.</source>
        <translation>Klang, wenn ein hergestellter Gegenstand einen Eintrag im Inventar hat (er wird zum aktuellen Gegenstand); danach fährt die HUD-Leiste aus, an deren Ende „Done Generating Sound“ folgt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sound played instead of &quot;Generate Sound&quot; when no inventory entry of the made item is found afterwards (e.g. it was merged into another item); the HUD bar&apos;s slide is skipped and no &quot;Done Generating Sound&quot; follows.</source>
        <translation>Klang anstelle von „Generate Sound“, wenn danach kein Inventareintrag des hergestellten Gegenstands gefunden wird (z. B. weil er in einem anderen aufging); das Ausfahren der HUD-Leiste entfällt, und „Done Generating Sound“ folgt nicht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sound played when the HUD bar&apos;s slide after making an item with an inventory entry has finished.</source>
        <translation>Klang, wenn das Ausfahren der HUD-Leiste nach dem Herstellen eines Gegenstands mit Inventareintrag beendet ist.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Position (top left, pixels in the window) of the &quot;Weapons&quot; tab (primary, secondary weapons and ammunition).</source>
        <translation>Position (oben links, Pixel im Fenster) des Reiters „Weapons“ (Primär-, Sekundärwaffen und Munition).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Position (top left, pixels in the window) of the &quot;Shields&quot; tab.</source>
        <translation>Position (oben links, Pixel im Fenster) des Reiters „Shields“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Position (top left, pixels in the window) of the &quot;Power&quot; tab.</source>
        <translation>Position (oben links, Pixel im Fenster) des Reiters „Power“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Position (top left, pixels in the window) of the &quot;Misc&quot; tab (all other categories).</source>
        <translation>Position (oben links, Pixel im Fenster) des Reiters „Misc“ (alle übrigen Kategorien).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Position (top left, pixels in the window) of the button that makes the selected item.</source>
        <translation>Position (oben links, Pixel im Fenster) der Schaltfläche zum Herstellen („Generate“).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Position (top left, pixels in the window) of the &quot;Done&quot; button that closes the window.</source>
        <translation>Position (oben links, Pixel im Fenster) der Schaltfläche „Done“, die das Fenster schließt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Position of the description box (text of the selected item) in the window, in pixels.</source>
        <translation>Position des Beschreibungsfelds (Text zum gewählten Gegenstand) im Fenster, in Pixeln.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Width and height of the description box in pixels.</source>
        <translation>Breite und Höhe des Beschreibungsfelds in Pixeln.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Position of the description box&apos;s scroll bar in the window, in pixels.</source>
        <translation>Position der Bildlaufleiste des Beschreibungsfelds im Fenster, in Pixeln.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Width and height of the description box&apos;s scroll bar in pixels.</source>
        <translation>Breite und Höhe der Bildlaufleiste des Beschreibungsfelds in Pixeln.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Inner margin of the description box&apos;s text in pixels.</source>
        <translation>Innenabstand des Texts im Beschreibungsfeld in Pixeln.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the description box&apos;s text.</source>
        <translation>Schrift des Texts im Beschreibungsfeld.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Main font of the window: item names, mineral names and quantities in the list; also the (empty) header of the icon column.</source>
        <translation>Hauptschrift des Fensters: Gegenstandsnamen, Mineralnamen und Mengen in der Liste; auch die (leere) Überschrift der Symbolspalte.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the item name column&apos;s header label only.</source>
        <translation>Schrift nur der Überschrift der Spalte mit dem Gegenstandsnamen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the &quot;Usage&quot; column&apos;s header and of the ammunition item name shown in that column.</source>
        <translation>Schrift der Überschrift der Spalte „Usage“ und des darin angezeigten Munitionsnamens.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the energy number shown in the &quot;Usage&quot; column for items without an ammunition item.</source>
        <translation>Schrift der Energiezahl in der Spalte „Usage“ für Gegenstände ohne Munitionsgegenstand.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the mineral (first cost) column&apos;s header label only; the mineral names use &quot;Primary Font&quot;.</source>
        <translation>Schrift nur der Überschrift der Mineralspalte (erste Kostenspalte); die Mineralnamen verwenden „Primary Font“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font of the quantity column&apos;s header label only; the quantities use &quot;Primary Font&quot;.</source>
        <translation>Schrift nur der Überschrift der Mengenspalte; die Mengen verwenden „Primary Font“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>It runs in the player character&apos;s layer with the character as instigator, after the minerals are used up and the made-item sound was played.</source>
        <translation>Sie läuft in der Ebene der Spielerfigur mit der Figur als Auslöser, nachdem die Mineralien verbraucht sind und der Herstellungsklang gespielt wurde.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name of a frame image for a mini map overlay; nothing in the exe uses the class beyond its own registration, so the value has no effect.</source>
        <translation>Name eines Rahmenbilds für eine Minikarten-Überlagerung; nichts in der exe verwendet die Klasse außer ihrer eigenen Registrierung, daher ohne Wirkung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>A distance in pixels (default 70) for a mini map overlay; nothing in the exe uses the class beyond its own registration, so the value has no effect.</source>
        <translation>Ein Abstand in Pixeln (Standard 70) für eine Minikarten-Überlagerung; nichts in der exe verwendet die Klasse außer ihrer eigenen Registrierung, daher ohne Wirkung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>A height offset in pixels (default 0) for a mini map overlay; nothing in the exe uses the class beyond its own registration, so the value has no effect.</source>
        <translation>Ein Höhenversatz in Pixeln (Standard 0) für eine Minikarten-Überlagerung; nichts in der exe verwendet die Klasse außer ihrer eigenen Registrierung, daher ohne Wirkung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Number of the mission, shown as &quot;M&lt;number&gt;&quot; in saved-game names and descriptions and used to sort saves. -1 (default) takes it from the first digits of the &quot;Description&quot; text (e.g. &quot;Log Entry 12 - …&quot;).</source>
        <translation>Nummer der Mission, als „M&lt;Nummer&gt;“ in Spielstandnamen und -beschreibungen angezeigt und zum Sortieren der Spielstände verwendet. -1 (Standard) übernimmt sie aus den ersten Ziffern des Texts von „Description“ (z. B. „Log Entry 12 - …“).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Unique name of the mission: &quot;CSelectMission&quot; looks it up (case ignored), and &quot;CDefineMission&quot; refuses a mission whose tag is already defined. The in-game mission overlay shows it as the heading.</source>
        <translation>Eindeutiger Name der Mission: „CSelectMission“ sucht danach (ohne Beachtung der Groß-/Kleinschreibung), „CDefineMission“ weist eine Mission ab, deren Tag schon definiert ist. Die Missionsanzeige im Spiel zeigt ihn als Überschrift.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Local.txt text of the mission (key and text): shown as the mission title on the inventory screen&apos;s mission page and above the objectives in the mission displays; its first digits give the mission number when &quot;Mission Number&quot; is -1.</source>
        <translation>Local.txt-Text der Mission (Schlüssel und Text): erscheint als Missionstitel auf der Missionsseite des Inventarbildschirms und über den Zielen in den Missionsanzeigen; seine ersten Ziffern ergeben die Missionsnummer, wenn „Mission Number“ -1 ist.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The mission&apos;s objectives (&quot;CMissionObjective&quot; and subclasses), in display order. &quot;CAddMissionObjective&quot; appends copies later; an objective whose &quot;ID Tag&quot; is already used is refused.</source>
        <translation>Die Ziele der Mission („CMissionObjective“ und Unterklassen) in Anzeigereihenfolge. „CAddMissionObjective“ hängt später Kopien an; ein Ziel, dessen „ID Tag“ schon vergeben ist, wird abgewiesen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run once when an update or increment action leaves every objective of the mission complete; it is deleted afterwards.</source>
        <translation>Aktion, die einmal ausgeführt wird, wenn eine Aktualisierungs- oder Hochzählaktion alle Ziele der Mission erfüllt zurücklässt; danach wird sie gelöscht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the objective count before the last addition (the displays then show only that many); reset to -1 every game frame. Leave unchanged in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: die Anzahl der Ziele vor dem letzten Hinzufügen (die Anzeigen zeigen dann nur so viele); wird in jedem Spielframe auf -1 zurückgesetzt. Im Level unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The mission&apos;s par (&quot;typical&quot;) values for the quest statistics shown at the mission&apos;s end, one entry per statistic in the order of the quest game type; a statistic whose points depend on a par score needs its entry here.</source>
        <translation>Die Par-Werte („typisch“) der Mission für die Quest-Statistiken am Missionsende, ein Eintrag je Statistik in der Reihenfolge des Quest-Spieltyps; eine Statistik, deren Punkte von einem Par-Wert abhängen, braucht hier ihren Eintrag.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The title is centred horizontally in this width.</source>
        <translation>Der Titel wird in dieser Breite waagrecht zentriert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The title is centred vertically in this height.</source>
        <translation>Der Titel wird in dieser Höhe senkrecht zentriert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Local.txt text, centred in the page title area.</source>
        <translation>Local.txt-Text, zentriert im Titelbereich der Seite.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The mission title (the current mission&apos;s &quot;Description&quot;) starts at this x plus &quot;Mission Title Margin&quot;.</source>
        <translation>Der Missionstitel („Description“ der aktuellen Mission) beginnt bei diesem x plus „Mission Title Margin“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The mission title is centred vertically in this height.</source>
        <translation>Der Missionstitel wird in dieser Höhe senkrecht zentriert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The text shown is the current mission&apos;s &quot;Description&quot;; without a mission &quot;No Mission Defined&quot; appears in the draw style&apos;s &quot;Mission Normal Status Font&quot; instead.</source>
        <translation>Angezeigt wird „Description“ der aktuellen Mission; ohne Mission erscheint stattdessen „No Mission Defined“ in „Mission Normal Status Font“ des Zeichenstils.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The objectives are drawn 5 pixels from the left and wrap at this width minus 10.</source>
        <translation>Die Ziele werden 5 Pixel vom linken Rand gezeichnet und bei dieser Breite minus 10 umbrochen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Also the least scroll height of the objectives list; longer lists scroll.</source>
        <translation>Zugleich die kleinste Bildlaufhöhe der Zielliste; längere Listen werden gescrollt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Used for the objectives list of the inventory screen&apos;s mission page; its &quot;Mission Normal Status Font&quot; also shows &quot;No Mission Defined&quot;.</source>
        <translation>Gilt für die Zielliste der Missionsseite des Inventarbildschirms; mit seiner „Mission Normal Status Font“ erscheint auch „No Mission Defined“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state of the save game: index of the current mission in &quot;Missions&quot; (an index beyond the list means no current mission); set by &quot;CDefineMission&quot; and &quot;CSelectMission&quot;.</source>
        <translation>Gespeicherter Laufzeitzustand des Spielstands: Index der aktuellen Mission in „Missions“ (ein Index hinter der Liste bedeutet keine aktuelle Mission); gesetzt von „CDefineMission“ und „CSelectMission“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: game time in seconds of the last mission or objective change. The in-game mission overlay computes the time since then but does not use the result.</source>
        <translation>Gespeicherter Laufzeitzustand: Spielzeit in Sekunden der letzten Missions- oder Zieländerung. Die Missionsanzeige im Spiel berechnet die seitdem vergangene Zeit, verwendet das Ergebnis aber nicht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state of the save game: every mission defined so far by &quot;CDefineMission&quot; (copies), in order of definition.</source>
        <translation>Gespeicherter Laufzeitzustand des Spielstands: alle bisher durch „CDefineMission“ definierten Missionen (Kopien) in der Reihenfolge ihrer Definition.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name of the objective within its mission: the objective actions find it by this tag (case ignored), and a second objective with the same tag is refused. The in-game mission overlay draws it right-aligned just left of the objective.</source>
        <translation>Name des Ziels innerhalb seiner Mission: die Zielaktionen finden es über diesen Tag (ohne Beachtung der Groß-/Kleinschreibung), ein zweites Ziel mit demselben Tag wird abgewiesen. Die Missionsanzeige im Spiel zeichnet ihn rechtsbündig direkt links neben das Ziel.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Local.txt text of the objective, drawn in the draw style&apos;s &quot;Mission Detail Font&quot;, followed by the status.</source>
        <translation>Local.txt-Text des Ziels, in „Mission Detail Font“ des Zeichenstils gezeichnet, gefolgt vom Status.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Local.txt entry: the text is shown after the description; the key decides the state: containing &quot;Complete&quot; (but not &quot;Incomplete&quot;) means complete, containing &quot;Fail&quot; means failed (case ignored). Usually changed by &quot;CUpdateMissionObjective&quot;.</source>
        <translation>Local.txt-Eintrag: der Text erscheint nach der Beschreibung; der Schlüssel bestimmt den Zustand: enthält er „Complete“ (aber nicht „Incomplete“), gilt das Ziel als erfüllt, enthält er „Fail“, als gescheitert (ohne Beachtung der Groß-/Kleinschreibung). Meist durch „CUpdateMissionObjective“ geändert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run once when the objective&apos;s status becomes complete; deleted afterwards. Un-completing an objective only gives a warning.</source>
        <translation>Aktion, die einmal ausgeführt wird, wenn der Status des Ziels erfüllt wird; danach gelöscht. Ein erfülltes Ziel wieder unerfüllt zu machen ergibt nur eine Warnung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: a copy of the objective from before its last change, shown by the displays in its place until the next game frame deletes it. Leave empty in a level.</source>
        <translation>Gespeicherter Laufzeitzustand: eine Kopie des Ziels vor seiner letzten Änderung, die die Anzeigen an seiner Stelle zeigen, bis der nächste Spielframe sie löscht. Im Level leer lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Number of increments (&quot;CIncrementMissionObjective&quot;) needed; the objective counts as complete once &quot;Current Count&quot; reaches it. Default 2.</source>
        <translation>Anzahl der nötigen Hochzählungen („CIncrementMissionObjective“); das Ziel gilt als erfüllt, sobald „Current Count“ diesen Wert erreicht. Standard 2.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Current count (the start value in a level, default 0); each increment adds 1 up to &quot;Total Needed&quot; and rewrites the status text from count and total.</source>
        <translation>Aktueller Zählerstand (im Level der Startwert, Standard 0); jede Hochzählung addiert 1 bis „Total Needed“ und erzeugt den Statustext neu aus Stand und Gesamtzahl.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run (and kept) each time &quot;CIncrementMissionObjective&quot; targets this objective, typically one that sets the next status of a series; afterwards the mission&apos;s completion is checked as for an update.</source>
        <translation>Aktion, die jedes Mal ausgeführt (und behalten) wird, wenn „CIncrementMissionObjective“ dieses Ziel trifft, meist eine, die den nächsten Status einer Folge setzt; danach wird wie bei einer Aktualisierung geprüft, ob die Mission erfüllt ist.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>In pixels: when the mission title is shown, the objectives are indented by this amount; wrapped text uses twice this value as its tab width. Default 10.</source>
        <translation>In Pixeln: wenn der Missionstitel angezeigt wird, werden die Ziele um diesen Betrag eingerückt; umbrochener Text verwendet das Doppelte als Tabulatorweite. Standard 10.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>In pixels, added after the mission description and after every objective. Default 8.</source>
        <translation>In Pixeln, nach der Missionsbeschreibung und nach jedem Ziel eingefügt. Standard 8.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Used for objectives that are neither complete nor failed; the inventory screen&apos;s mission page also shows &quot;No Mission Defined&quot; in it.</source>
        <translation>Gilt für Ziele, die weder erfüllt noch gescheitert sind; die Missionsseite des Inventarbildschirms zeigt darin auch „No Mission Defined“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Completed objectives are additionally drawn at half opacity.</source>
        <translation>Erfüllte Ziele werden zusätzlich mit halber Deckkraft gezeichnet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The window takes its size from this image.</source>
        <translation>Das Fenster übernimmt seine Größe von diesem Bild.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>It is drawn centred behind each bottom button; the wider of it and the pressed image sets the spacing of the button row.</source>
        <translation>Es wird zentriert hinter jede untere Schaltfläche gezeichnet; das breitere von ihm und dem Gedrückt-Bild bestimmt den Abstand der Schaltflächenreihe.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>It is the buttons&apos; own image, drawn only while a button is pressed; it also sets the buttons&apos; size.</source>
        <translation>Es ist das eigene Bild der Schaltflächen, das nur gezeichnet wird, solange eine Schaltfläche gedrückt ist; es bestimmt auch die Größe der Schaltflächen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>With &quot;Window Area Extent&quot; it gives a rectangle that is tinted before the window art is drawn over it.</source>
        <translation>Zusammen mit „Window Area Extent“ ergibt sich ein Rechteck, das eingefärbt wird, bevor das Fensterbild darübergezeichnet wird.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Width and height of the rectangle tinted behind the window art.</source>
        <translation>Breite und Höhe des Rechtecks, das hinter dem Fensterbild eingefärbt wird.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>In the coordinates of the window art.</source>
        <translation>In den Koordinaten des Fensterbilds.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The bottom buttons are laid out in a row centred on this point (window art coordinates).</source>
        <translation>Die unteren Schaltflächen werden in einer Reihe um diesen Punkt zentriert angeordnet (Koordinaten des Fensterbilds).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>This area holds the message text and the statistics table on the left and the objectives list on the right.</source>
        <translation>Dieser Bereich enthält links den Meldungstext und die Statistiktabelle und rechts die Zielliste.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The objectives list gets its full height; the divider line runs from its top to its bottom.</source>
        <translation>Die Zielliste erhält seine volle Höhe; die Trennlinie verläuft von seiner Ober- bis zu seiner Unterkante.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The scroll bar scrolls the objectives list.</source>
        <translation>Die Bildlaufleiste scrollt die Zielliste.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The divider is a 2-pixel line in &quot;Seperator Color&quot; at the left edge of the objectives area.</source>
        <translation>Die Trennlinie ist eine 2 Pixel breite Linie in „Seperator Color“ am linken Rand des Zielbereichs.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>It shows the window&apos;s message text, wrapped to the left column (not in the multiplayer window).</source>
        <translation>Darin erscheint der Meldungstext des Fensters, umbrochen auf die linke Spalte (nicht im Mehrspielerfenster).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Used for the objectives list on the right side, with the mission&apos;s description as heading.</source>
        <translation>Gilt für die Zielliste auf der rechten Seite, mit der Missionsbeschreibung als Überschrift.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Only drawn when &quot;Draw Right-Left Divider&quot; is on.</source>
        <translation>Wird nur gezeichnet, wenn „Draw Right-Left Divider“ eingeschaltet ist.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>In pixels; applies to the message text, the statistics table and the objectives list.</source>
        <translation>In Pixeln; gilt für den Meldungstext, die Statistiktabelle und die Zielliste.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>In pixels; also the gap between the message text and the statistics table.</source>
        <translation>In Pixeln; zugleich der Abstand zwischen Meldungstext und Statistiktabelle.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Drawn beside the total at the bottom of the points column, only when the quest statistics award points.</source>
        <translation>Wird neben der Summe unten in der Punktespalte gezeichnet, nur wenn die Quest-Statistiken Punkte vergeben.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>In the multiplayer variant of these options it is also the title font of the multiplayer end window.</source>
        <translation>In der Mehrspieler-Variante dieser Optionen ist sie auch die Titelschrift des Mehrspieler-Endfensters.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Local.txt text.</source>
        <translation>Local.txt-Text.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Shown in the mission completed window and in the multiplayer end window.</source>
        <translation>Erscheint im Fenster für eine erfüllte Mission und im Mehrspieler-Endfenster.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Shown only in the mission completed window.</source>
        <translation>Erscheint nur im Fenster für eine erfüllte Mission.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Shown in the mission failed window.</source>
        <translation>Erscheint im Fenster für eine gescheiterte Mission.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Shown in the mission failed window and in the multiplayer end window.</source>
        <translation>Erscheint im Fenster für eine gescheiterte Mission und im Mehrspieler-Endfenster.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Old name of the model kept from earlier file versions; the game only returns it through the model&apos;s name getter and no gameplay code was found that uses it. Leave empty.</source>
        <translation>Alter Name des Modells aus früheren Dateiversionen; das Spiel gibt ihn nur über die Namensabfrage des Modells zurück, eine Verwendung im Spielablauf wurde nicht gefunden. Leer lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Display name of the model. Only loaded and saved with the .mdl file; no game code was found that reads it.</source>
        <translation>Anzeigename des Modells. Wird nur mit der .mdl-Datei geladen und gespeichert; kein Spielcode liest ihn nach bisherigem Stand.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Free description text of the model. Only loaded and saved with the .mdl file; no game code was found that reads it.</source>
        <translation>Freier Beschreibungstext des Modells. Wird nur mit der .mdl-Datei geladen und gespeichert; kein Spielcode liest ihn nach bisherigem Stand.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>AIs (&quot;Model Activity&quot;) shared by every destructable entity of this model: each frame they get the entity&apos;s update while it is active, and they are told about its collisions. Use it for behaviour that all instances of a model should have.</source>
        <translation>KIs („Model Activity“), die sich alle zerstörbaren Objekte dieses Modells teilen: Sie erhalten in jedem Frame das Update des Objekts, solange es aktiv ist, und werden über seine Kollisionen informiert. Für Verhalten, das alle Instanzen eines Modells haben sollen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Template object for entities made from this model: when the game creates an entity of the model (spawning, projectiles, particles, explosions) it clones this object instead of a fresh object with default fields. Empty = a new object of the requested class.</source>
        <translation>Vorlageobjekt für Objekte, die aus diesem Modell erzeugt werden: Erzeugt das Spiel ein Objekt des Modells (Spawnen, Projektile, Partikel, Explosionen), wird dieses Objekt geklont statt ein neues mit Standardwerten anzulegen. Leer = neues Objekt der angeforderten Klasse.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Health of entities with this model. Damage adds up until it reaches this value; then the entity is destroyed (death sound, explosion, &quot;Destroyed Action&quot;). 0 is shown as &quot;Indestructible&quot;.</source>
        <translation>Lebenspunkte von Objekten mit diesem Modell. Schaden summiert sich, bis er diesen Wert erreicht; dann wird das Objekt zerstört (Todesgeräusch, Explosion, „Destroyed Action“). 0 wird als „Indestructible“ angezeigt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Hit points of damage this model deals to a living destructable entity that collides with it, on every collision contact, of the type &quot;Collide Damage Type&quot;. 0 = no collision damage.</source>
        <translation>Schaden in Lebenspunkten, den dieses Modell einem lebenden zerstörbaren Objekt bei jeder Kollision zufügt, mit der Schadensart aus „Collide Damage Type“. 0 = kein Kollisionsschaden.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Damage type (from the damage type list) used for this model&apos;s collide damage and also for its explosion radial damage.</source>
        <translation>Schadensart (aus der Liste der Schadensarten) für den Kollisionsschaden dieses Modells und ebenso für seinen Explosions-Flächenschaden.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>For doors: hit points per second dealt to living entities touching the door while it closes or is closed (applied every 0.2 s as value × 0.2, type &quot;Unavoidable&quot;; victims are also turned randomly). 0 disables it. Default 10.</source>
        <translation>Für Türen: Schaden in Lebenspunkten pro Sekunde an lebenden Objekten, die die Tür beim Schließen oder geschlossen berühren (alle 0,2 s als Wert × 0,2, Schadensart „Unavoidable“; die Getroffenen werden zufällig gedreht). 0 schaltet es ab. Standard 10.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Damage dealt when an entity of this model dies: this many hit points within a radius of twice the value (in pixels) around its centre, of the &quot;Collide Damage Type&quot;. 0 = no area damage.</source>
        <translation>Schaden beim Tod eines Objekts dieses Modells: so viele Lebenspunkte in einem Radius vom doppelten Wert (in Pixeln) um seine Mitte, mit der Schadensart aus „Collide Damage Type“. 0 = kein Flächenschaden.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Offset in pixels added to the entity&apos;s Y position when sorting the drawing order: larger values draw the model in front of things at the same position. The model constructor presets it from its bounds polygon.</source>
        <translation>Versatz in Pixeln, der beim Sortieren der Zeichenreihenfolge zur Y-Position des Objekts addiert wird: größere Werte zeichnen das Modell vor Dingen an gleicher Position. Der Konstruktor des Modells belegt ihn aus dem Begrenzungspolygon vor.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name of the sequence an entity of this model plays when it is created or gets the model (case-insensitive). If the model has no sequence of that name, the first sequence is used. Default &quot;Idle&quot;.</source>
        <translation>Name der Sequenz, die ein Objekt dieses Modells beim Erzeugen oder beim Zuweisen des Modells abspielt (Groß-/Kleinschreibung egal). Gibt es keine Sequenz dieses Namens, wird die erste verwendet. Standard „Idle“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sound played when a door of this model opens, and when an activate action with &quot;Play Activate Sound&quot; activates an entity of this model.</source>
        <translation>Geräusch beim Öffnen einer Tür dieses Modells und wenn eine Aktivierungsaktion mit „Play Activate Sound“ ein Objekt dieses Modells aktiviert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sound played when a door of this model starts closing.</source>
        <translation>Geräusch, wenn eine Tür dieses Modells zu schließen beginnt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Model (from the model list) spawned as an explosion at the entity when it dies. Empty = none.</source>
        <translation>Modell (aus der Modellliste), das beim Tod des Objekts als Explosion an ihm erzeugt wird. Leer = keine.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sound played when an entity of this model dies.</source>
        <translation>Geräusch beim Tod eines Objekts dieses Modells.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sound played each time an entity of this model takes positive damage.</source>
        <translation>Geräusch, jedes Mal wenn ein Objekt dieses Modells positiven Schaden erleidet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Surface type reported for points covered by an entity of this model (e.g. a bridge or platform); surface-dependent sounds such as footsteps then use it instead of the ground texture&apos;s surface. &quot;!None&quot; = use the ground below.</source>
        <translation>Untergrundart, die für Punkte gilt, die ein Objekt dieses Modells bedeckt (z. B. Brücke oder Plattform); untergrundabhängige Geräusche wie Schritte verwenden sie dann statt der Untergrundart der Bodentextur. „!None“ = Boden darunter verwenden.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Speed in pixels per second. Confirmed use: a projectile of this model is fired at this speed (plus the shooter&apos;s own velocity for the player&apos;s shots). Default 500.</source>
        <translation>Geschwindigkeit in Pixeln pro Sekunde. Gesicherte Verwendung: Ein Projektil dieses Modells wird mit dieser Geschwindigkeit abgefeuert (bei Schüssen des Spielers plus dessen eigene Geschwindigkeit). Standard 500.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Maximum turning rate in degrees per second used when AI behaviours turn the entity toward a target or direction. Default 180.</source>
        <translation>Maximale Drehgeschwindigkeit in Grad pro Sekunde, mit der KI-Verhalten das Objekt zu einem Ziel oder einer Richtung drehen. Standard 180.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Elasticity of bounces off walls, 0 to 1: the share of the speed into the wall that is reflected (1 = full rebound, 0 = no rebound). The editor allows up to 5, but a value above 1 or below 0 stops the game with a fatal error when the entity moves.</source>
        <translation>Elastizität beim Abprallen an Wänden, 0 bis 1: der Anteil der Geschwindigkeit in die Wand, der zurückgeworfen wird (1 = voller Rückprall, 0 = kein Rückprall). Der Editor erlaubt bis 5, ein Wert über 1 oder unter 0 beendet das Spiel jedoch mit einem schweren Fehler, sobald sich das Objekt bewegt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Minimum rebound speed: a reflected speed component not above this value is dropped, so slow impacts no longer bounce. Values of 1.1 or more make the game log a warning. Default 0.1.</source>
        <translation>Mindestgeschwindigkeit des Rückpralls: Ein zurückgeworfener Geschwindigkeitsanteil, der diesen Wert nicht übersteigt, entfällt, sodass langsame Aufpralle nicht mehr abprallen. Ab 1,1 meldet das Spiel eine Warnung. Standard 0.1.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Friction on each wall hit: the part of the movement along the wall is multiplied by (1 − value). 0 = no friction, 1 = sliding stops at once.</source>
        <translation>Reibung bei jedem Wandtreffer: Der Bewegungsanteil entlang der Wand wird mit (1 − Wert) multipliziert. 0 = keine Reibung, 1 = Gleiten endet sofort.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>After a wall hit, a remaining sliding speed below this value is set to 0, so the object comes to rest. Default 0.1.</source>
        <translation>Nach einem Wandtreffer wird eine verbleibende Gleitgeschwindigkeit unter diesem Wert auf 0 gesetzt, sodass das Objekt zur Ruhe kommt. Standard 0.1.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Collision polygon of the model in pixels relative to the entity&apos;s position; used as the entity&apos;s shape for collisions and grid lookups (rectangle kind 3) and for the cached bounds.</source>
        <translation>Kollisionspolygon des Modells in Pixeln relativ zur Position des Objekts; dient als Form des Objekts für Kollisionen und Rasterabfragen (Rechteckart 3) und für die zwischengespeicherten Grenzen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Another model (from the model list) drawn together with this one at the entity, with its default sequence; its own &quot;Also Render&quot; is followed as well, and its frames count into the entity&apos;s bounds.</source>
        <translation>Weiteres Modell (aus der Modellliste), das zusammen mit diesem am Objekt mit seiner Standardsequenz gezeichnet wird; dessen eigenes „Also Render“ wird ebenfalls verfolgt, und seine Frames zählen zu den Grenzen des Objekts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Fidget options of the model: while an entity of this model idles, it plays occasional fidget sequences according to these settings (an idle behaviour&apos;s &quot;Override Fidget Options&quot; takes precedence). Empty = no fidgeting.</source>
        <translation>Fidget-Einstellungen des Modells: Während ein Objekt dieses Modells untätig ist, spielt es nach diesen Einstellungen gelegentlich Fidget-Sequenzen (das „Override Fidget Options“ eines Idle-Verhaltens hat Vorrang). Leer = kein Fidgeting.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state of a multiplayer match: set when the match ends (time or score limit), cleared when a new match starts; while set, players can signal ready. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand eines Mehrspieler-Matches: wird beim Ende des Matches (Zeit- oder Punktelimit) gesetzt und beim Start eines neuen Matches gelöscht; solange gesetzt, können Spieler Bereitschaft melden. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: number of players who are ready after the match ended; when half of the connections are ready a new match starts. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: Anzahl der Spieler, die nach Matchende bereit sind; sind die Hälfte der Verbindungen bereit, beginnt ein neues Match. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The music mix currently in use: fade time and the three songs (full, medium, ambient). Normally filled by a &quot;Set Music&quot; action and at startup.</source>
        <translation>Die aktuell verwendete Musikmischung: Überblendzeit und die drei Stücke (voll, mittel, Ambient). Wird normalerweise von einer „Set Music“-Aktion und beim Start gefüllt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: track now playing (0 full mix, 1 medium mix, 2 ambient). Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: gerade laufendes Stück (0 volle Mischung, 1 mittlere Mischung, 2 Ambient). Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: track that will play once the current cross-fade is finished (0 full, 1 medium, 2 ambient). Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: Stück, das nach Ende der laufenden Überblendung spielt (0 voll, 1 mittel, 2 Ambient). Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>If the name finds no part (or is empty), the game reports an error and treats the scene as arrived at once. The player as target makes the player&apos;s camera tracker move there; any other part gets a temporary camera tracker.</source>
        <translation>Findet der Name kein Teil (oder ist er leer), meldet das Spiel einen Fehler und behandelt die Szene sofort als angekommen. Ist der Spieler das Ziel, fährt dessen Kameraverfolgung dorthin; jedes andere Teil erhält eine vorübergehende Kameraverfolgung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Speed in pixels per second, default 150. 0 (&quot;Immediately&quot;) makes the camera jump and the scene arrive at once.</source>
        <translation>Geschwindigkeit in Pixeln pro Sekunde, Standard 150. 0 („Immediately“) lässt die Kamera springen, die Szene gilt sofort als angekommen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The action runs with the player as instigator. The scene itself does not end on arrival; it ends only when an &quot;End Current Non Interactive Sequence Scene&quot; action is executed, after which the next scene starts.</source>
        <translation>Die Aktion läuft mit dem Spieler als Auslöser. Die Szene endet nicht mit der Ankunft, sondern erst, wenn eine „End Current Non Interactive Sequence Scene“-Aktion ausgeführt wird; danach beginnt die nächste Szene.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>List of extra properties stored on the object outside its regular fields (mainly values of older file versions that the class converts when loading). It is only written to the file when it has entries; normally empty.</source>
        <translation>Liste zusätzlicher Eigenschaften, die außerhalb der regulären Felder am Objekt hängen (vor allem Werte älterer Dateiversionen, die die Klasse beim Laden umwandelt). Sie wird nur in die Datei geschrieben, wenn sie Einträge hat; normalerweise leer.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Array of object holders (each with one layer part). Only loaded and saved; no original game file uses this class and no game code reads it.</source>
        <translation>Array von Objekthaltern (jeweils mit einem Ebenenteil). Wird nur geladen und gespeichert; keine Originaldatei verwendet die Klasse, und kein Spielcode liest sie.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The layer part held by this holder (owned). Only loaded and saved; no game code was found that uses it.</source>
        <translation>Das von diesem Halter gehaltene Ebenenteil (im Besitz). Wird nur geladen und gespeichert; kein Spielcode verwendet es nach bisherigem Stand.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: actions queued by &quot;Other Map&quot; actions, each with the name of the map it is meant for; they run (and are removed) when that map is entered. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: Von „Other Map“-Aktionen vorgemerkte Aktionen, jeweils mit dem Namen der Zielkarte; sie werden beim Betreten dieser Karte ausgeführt und entfernt. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Model (from the model list) each particle of this kind is made from. It must have a projectile entity type; the particle lives for its age as a projectile.</source>
        <translation>Modell (aus der Modellliste), aus dem jedes Partikel dieser Art erzeugt wird. Es muss einen Projektil-Objekttyp haben; das Partikel lebt für sein Alter als Projektil.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Particle AI (gravity, float, swirl …) cloned onto each emitted particle. Empty = the particle only flies straight and does not animate.</source>
        <translation>Partikel-KI (Schwerkraft, Schweben, Wirbel …), die auf jedes ausgestoßene Partikel geklont wird. Leer = das Partikel fliegt nur geradeaus und wird nicht animiert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 = the particle&apos;s frame follows its age (passed to the particle&apos;s AI, so it has no effect without &quot;AI&quot;): without &quot;Obey Sequence FPS&quot; the whole sequence plays once over the particle&apos;s lifetime.</source>
        <translation>1 = der Frame des Partikels folgt seinem Alter (wird an die Partikel-KI übergeben, ohne „AI“ also wirkungslos): ohne „Obey Sequence FPS“ läuft die ganze Sequenz einmal über die Lebensdauer.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>With &quot;Animated&quot;: 1 = the particle plays its sequence at the sequence&apos;s own frames per second (looping) instead of stretching it over its lifetime.</source>
        <translation>Mit „Animated“: 1 = das Partikel spielt seine Sequenz mit deren eigener Bildrate (in Schleife), statt sie über die Lebensdauer zu strecken.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 = particles of this kind test for collisions with the level while they move (they get the &quot;Tries To Collide&quot; flag).</source>
        <translation>1 = Partikel dieser Art prüfen beim Bewegen auf Kollisionen mit dem Level (sie erhalten das Flag „Tries To Collide“).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 = other objects can collide with particles of this kind (&quot;Collideable&quot; flag set); 0 clears it.</source>
        <translation>1 = andere Objekte können mit Partikeln dieser Art kollidieren (Flag „Collideable“ gesetzt); 0 löscht es.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Particles of this kind emitted per burst (plus or minus &quot;Num Particles Variance&quot;, never below 0). Default 1.</source>
        <translation>Anzahl der Partikel dieser Art pro Ausstoß (plus/minus „Num Particles Variance“, nie unter 0). Standard 1.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Random variation of the count per burst: a random whole number between −value and +value is added to &quot;Num Particles&quot;.</source>
        <translation>Zufällige Abweichung der Anzahl pro Ausstoß: Eine zufällige ganze Zahl zwischen −Wert und +Wert wird zu „Num Particles“ addiert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Inner radius in pixels (an envelope that can change over time) of the ring on which particles start: each start point lies at a random distance between this radius and this radius plus &quot;Outside Radius&quot;, in the plane across the emission direction.</source>
        <translation>Innerer Radius in Pixeln (eine Hüllkurve, die sich mit der Zeit ändern kann) des Rings, auf dem Partikel starten: Jeder Startpunkt liegt in zufälligem Abstand zwischen diesem Radius und diesem Radius plus „Outside Radius“, in der Ebene quer zur Ausstoßrichtung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Thickness of the start ring in pixels (an envelope): added to &quot;Inside Radius&quot; to give the largest start distance; it is not an absolute outer radius.</source>
        <translation>Dicke des Startrings in Pixeln (eine Hüllkurve): wird zu „Inside Radius“ addiert und ergibt den größten Startabstand; es ist kein absoluter Außenradius.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Scale of the start offset&apos;s Y part, squashing the disk into an oval (1 = round). Also handed to the particles&apos; AI as their Y-to-X ratio. Default 1.</source>
        <translation>Skalierung des Y-Anteils des Startversatzes, staucht die Scheibe zum Oval (1 = rund). Wird auch an die Partikel-KI als Y-zu-X-Verhältnis übergeben. Standard 1.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>1 = each particle starts on the side of the disk its flight direction points to (the direction within the cone decides the angle on the disk); 0 = a random angle on the disk.</source>
        <translation>1 = jedes Partikel startet auf der Seite der Scheibe, in die seine Flugrichtung zeigt (die Richtung im Kegel bestimmt den Winkel auf der Scheibe); 0 = zufälliger Winkel auf der Scheibe.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Length in pixels (an envelope) of the cylinder along the emission direction: each particle starts at a random point between 0 and this value along that axis, on the disk given by the radii.</source>
        <translation>Länge in Pixeln (eine Hüllkurve) des Zylinders entlang der Ausstoßrichtung: Jedes Partikel startet an einem zufälligen Punkt zwischen 0 und diesem Wert entlang dieser Achse, auf der durch die Radien gegebenen Scheibe.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Half length in pixels (an envelope) of a line through the emitter: each particle starts at a random point between −value and +value along the line (vertical before the system&apos;s face and trajectory turn it).</source>
        <translation>Halbe Länge in Pixeln (eine Hüllkurve) einer Linie durch den Emitter: Jedes Partikel startet an einem zufälligen Punkt zwischen −Wert und +Wert entlang der Linie (senkrecht, bevor Face-Winkel und Flugbahn des Systems sie drehen).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Run-time state of the way point map&apos;s segment, kept in the .way file: bit 0 set when built, bit 1 the path search found it walkable, bit 2 it has been checked. Leave unchanged.</source>
        <translation>Laufzeitzustand des Segments der Wegpunktkarte, in der .way-Datei gespeichert: Bit 0 beim Aufbau gesetzt, Bit 1 die Wegsuche fand es begehbar, Bit 2 es wurde geprüft. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Always set to 0 when a segment is built; no code reads it. Leave at 0.</source>
        <translation>Wird beim Aufbau eines Segments immer auf 0 gesetzt; kein Code liest es. Auf 0 lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Length of the segment in pixels, computed when the way point map is built; the path search multiplies it by the mover&apos;s cost factor. Computed value, leave unchanged.</source>
        <translation>Länge des Segments in Pixeln, beim Aufbau der Wegpunktkarte berechnet; die Wegsuche multipliziert sie mit dem Kostenfaktor des Bewegten. Berechneter Wert, unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Direction from way point A to way point B in radians (0 to 2π), computed when the map is built; no reader was found. Computed value, leave unchanged.</source>
        <translation>Richtung von Wegpunkt A nach Wegpunkt B im Bogenmaß (0 bis 2π), beim Aufbau der Karte berechnet; kein Leser gefunden. Berechneter Wert, unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Index of the way point at one end of the segment in the map&apos;s way point list (−1 when unset). Computed when the map is built.</source>
        <translation>Index des Wegpunkts an einem Ende des Segments in der Wegpunktliste der Karte (−1 wenn nicht gesetzt). Wird beim Aufbau der Karte berechnet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Index of the way point at the other end of the segment (−1 when unset). Computed when the map is built.</source>
        <translation>Index des Wegpunkts am anderen Ende des Segments (−1 wenn nicht gesetzt). Wird beim Aufbau der Karte berechnet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the pool of point lists that moving objects use for their current paths (free ones are reused). Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: der Vorrat an Punktlisten, die sich bewegende Objekte für ihre aktuellen Wege verwenden (freie werden wiederverwendet). Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Cleared when a way point is created; no code was found that reads it. Leave at 0.</source>
        <translation>Wird beim Anlegen eines Wegpunkts gelöscht; kein Code liest es nach bisherigem Stand. Auf 0 lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>X position of the way point in level pixels; computed from the way point polygons when the map is built.</source>
        <translation>X-Position des Wegpunkts in Level-Pixeln; wird beim Aufbau der Karte aus den Wegpunkt-Polygonen berechnet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Y position of the way point in level pixels; computed from the way point polygons when the map is built.</source>
        <translation>Y-Position des Wegpunkts in Level-Pixeln; wird beim Aufbau der Karte aus den Wegpunkt-Polygonen berechnet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Share (0 to 1) of each elevation band of the plasma ground that is cross-faded into the next texture of the texture list: 0.25 blends the top quarter of each band, 0 gives hard texture edges. In 8-bit colour only a few blend steps exist. Default 0.25.</source>
        <translation>Anteil (0 bis 1) jedes Höhenbands des Plasma-Bodens, der in die nächste Textur der Texturliste überblendet wird: 0.25 blendet das oberste Viertel jedes Bands, 0 ergibt harte Texturkanten. In 8-Bit-Farbe gibt es nur wenige Blendstufen. Standard 0.25.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Probably meant for sideways (strafe) movement. The only code reading these settings (the player&apos;s walking control update) does not use this value; no other reader was found. Default 3.</source>
        <translation>Vermutlich für Seitwärtsbewegung (Strafe) gedacht. Der einzige Code, der diese Einstellungen liest (das Lauf-Update der Spielersteuerung), verwendet diesen Wert nicht; kein anderer Leser gefunden. Standard 3.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Mouse control: share (0 to 1) of the cursor range beyond &quot;Min Move Dist&quot; where Zax starts walking; closer to the character he stands. Default 0.2.</source>
        <translation>Maussteuerung: Anteil (0 bis 1) des Cursorbereichs jenseits von „Min Move Dist“, ab dem Zax zu gehen beginnt; näher an der Figur bleibt er stehen. Standard 0.2.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Mouse control: share (0 to 1) of the cursor range where Zax switches from walking to running. Default 0.6.</source>
        <translation>Maussteuerung: Anteil (0 bis 1) des Cursorbereichs, ab dem Zax vom Gehen ins Laufen wechselt. Standard 0.6.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Walking speed ratio at &quot;Start Walk Mouse Dist&quot;; it rises linearly to 1 at &quot;Start Run Mouse Dist&quot;. Default 0.2.</source>
        <translation>Geh-Geschwindigkeitsverhältnis bei „Start Walk Mouse Dist“; es steigt linear bis 1 bei „Start Run Mouse Dist“. Standard 0.2.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Running speed ratio at &quot;Start Run Mouse Dist&quot;; it rises linearly to 1 at the full cursor range. Default 0.6.</source>
        <translation>Lauf-Geschwindigkeitsverhältnis bei „Start Run Mouse Dist“; es steigt linear bis 1 beim vollen Cursorbereich. Standard 0.6.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Probably a limit on the player&apos;s lives. The only code reading these settings (the player&apos;s walking control update) does not use this value; no other reader was found. Default 10.</source>
        <translation>Vermutlich eine Obergrenze für die Leben des Spielers. Der einzige Code, der diese Einstellungen liest (das Lauf-Update der Spielersteuerung), verwendet diesen Wert nicht; kein anderer Leser gefunden. Standard 10.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Probably the rate of smoke puffs of missile trails. The only code reading these settings (the player&apos;s walking control update) does not use this value; no other reader was found. Default 120.</source>
        <translation>Vermutlich die Rate der Rauchwölkchen von Raketenspuren. Der einzige Code, der diese Einstellungen liest (das Lauf-Update der Spielersteuerung), verwendet diesen Wert nicht; kein anderer Leser gefunden. Standard 120.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Probably the animation rate of missile trail puffs. The only code reading these settings (the player&apos;s walking control update) does not use this value; no other reader was found. Default 30.</source>
        <translation>Vermutlich die Bildrate der Raketenspur-Wölkchen. Der einzige Code, der diese Einstellungen liest (das Lauf-Update der Spielersteuerung), verwendet diesen Wert nicht; kein anderer Leser gefunden. Standard 30.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Mouse control: dead zone in pixels around the character; the cursor must be farther away than this before the walking range starts. Default 80.</source>
        <translation>Maussteuerung: Totzone in Pixeln um die Figur; der Cursor muss weiter entfernt sein, bevor der Gehbereich beginnt. Standard 80.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Mouse control: size in pixels of the cursor range beyond &quot;Min Move Dist&quot;; at its end Zax moves at full speed. Default 100.</source>
        <translation>Maussteuerung: Größe in Pixeln des Cursorbereichs jenseits von „Min Move Dist“; an seinem Ende bewegt sich Zax mit voller Geschwindigkeit. Standard 100.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Probably the player&apos;s maximum turn rate (stored in radians, shown in degrees). The only code reading these settings (the player&apos;s walking control update) does not use this value; no other reader was found. Default 45°.</source>
        <translation>Vermutlich die maximale Drehrate des Spielers (im Bogenmaß gespeichert, in Grad angezeigt). Der einzige Code, der diese Einstellungen liest (das Lauf-Update der Spielersteuerung), verwendet diesen Wert nicht; kein anderer Leser gefunden. Standard 45°.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Probably the angle below which the fine turn rate applies (radians, shown in degrees). The only code reading these settings (the player&apos;s walking control update) does not use this value; no other reader was found. Default 46°.</source>
        <translation>Vermutlich der Winkel, unterhalb dessen die feine Drehrate gilt (Bogenmaß, in Grad angezeigt). Der einzige Code, der diese Einstellungen liest (das Lauf-Update der Spielersteuerung), verwendet diesen Wert nicht; kein anderer Leser gefunden. Standard 46°.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Probably the player&apos;s turn rate for small corrections (radians, shown in degrees). The only code reading these settings (the player&apos;s walking control update) does not use this value; no other reader was found. Default 22.5°.</source>
        <translation>Vermutlich die Drehrate des Spielers für kleine Korrekturen (Bogenmaß, in Grad angezeigt). Der einzige Code, der diese Einstellungen liest (das Lauf-Update der Spielersteuerung), verwendet diesen Wert nicht; kein anderer Leser gefunden. Standard 22,5°.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Probably the height in pixels of the player&apos;s gun above the ground. The only code reading these settings (the player&apos;s walking control update) does not use this value; no other reader was found. Default 39.</source>
        <translation>Vermutlich die Höhe der Waffe des Spielers über dem Boden in Pixeln. Der einzige Code, der diese Einstellungen liest (das Lauf-Update der Spielersteuerung), verwendet diesen Wert nicht; kein anderer Leser gefunden. Standard 39.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state of the path cache: 1 = this point list is free for the next path, 0 = in use by a moving object. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand des Wege-Caches: 1 = diese Punktliste ist für den nächsten Weg frei, 0 = von einem bewegten Objekt belegt. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the way point positions (pixels) of a path from start to goal, filled by the path search. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: die Wegpunktpositionen (Pixel) eines Wegs vom Start zum Ziel, von der Wegsuche gefüllt. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Forward offset in pixels of this projectile&apos;s start point, added to the weapon&apos;s muzzle position along the shooter&apos;s facing.</source>
        <translation>Versatz nach vorn in Pixeln für den Startpunkt dieses Projektils, addiert zur Mündungsposition der Waffe in Blickrichtung des Schützen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sideways offset in pixels of this projectile&apos;s start point, added to the muzzle position across the shooter&apos;s facing (squashed by the view&apos;s oval ratio).</source>
        <translation>Seitlicher Versatz in Pixeln für den Startpunkt dieses Projektils, addiert zur Mündungsposition quer zur Blickrichtung (mit dem Ovalverhältnis der Ansicht gestaucht).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Angle in degrees added to the aiming direction for this projectile, e.g. for spread shots (−360 to 360).</source>
        <translation>Winkel in Grad, der für dieses Projektil zur Zielrichtung addiert wird, z. B. für Streuschüsse (−360 bis 360).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state of the quest game: one data object per statistic (scores of this mission and of the missions before). Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand des Quest-Spiels: ein Datenobjekt pro Statistik (Werte dieser Mission und der vorigen Missionen). Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>A hidden statistic still counts toward the total score when it has a point value.</source>
        <translation>Eine ausgeblendete Statistik zählt weiterhin zur Gesamtpunktzahl, wenn sie einen Punktwert hat.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>It suppresses the statistic&apos;s second row (the par label and the par values) in the mission-over window.</source>
        <translation>Unterdrückt die zweite Zeile der Statistik (Par-Beschriftung und Par-Werte) im Missionsende-Fenster.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Points = (cumulative value including this mission + par offset) × this weighting; non-zero also shows the points column.</source>
        <translation>Punkte = (kumulierter Wert inklusive dieser Mission + Par-Versatz) × diese Gewichtung; ungleich 0 zeigt auch die Punktespalte.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The par used is the cumulative par including this mission&apos;s. If it is non-zero and a mission has no par score for the statistic, the game reports an error and the statistic scores 0.</source>
        <translation>Verwendet wird der kumulierte Par-Wert inklusive dieser Mission. Ist der Wert ungleich 0 und hat eine Mission keinen Par-Wert für die Statistik, meldet das Spiel einen Fehler und die Statistik ergibt 0 Punkte.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>It is inserted into the first column&apos;s &quot;Column Value Format&quot; and into the game type&apos;s par label format.</source>
        <translation>Wird in das „Column Value Format“ der ersten Spalte und in das Par-Beschriftungsformat des Spieltyps eingesetzt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Also used for the par label of the second row. Default &quot;Small Blue&quot;.</source>
        <translation>Wird auch für die Par-Beschriftung der zweiten Zeile verwendet. Standard „Small Blue“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Used for this mission&apos;s value, the total and the points. Default &quot;Small Green&quot;.</source>
        <translation>Für den Wert dieser Mission, die Summe und die Punkte. Standard „Small Green“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Columns in order: statistic name, this mission, total, points (the points heading only appears when some statistic is scored).</source>
        <translation>Spalten in dieser Reihenfolge: Statistikname, diese Mission, Summe, Punkte (die Punkte-Überschrift erscheint nur, wenn eine Statistik Punkte hat).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>In the first column &apos;%s&apos; is the statistic&apos;s label.</source>
        <translation>In der ersten Spalte steht &apos;%s&apos; für die Beschriftung der Statistik.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Default &quot;Small Gold&quot;.</source>
        <translation>Standard „Small Gold“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Horizontal position of the column in pixels from the left edge of the statistics area, for heading and values.</source>
        <translation>Horizontale Position der Spalte in Pixeln vom linken Rand des Statistikbereichs, für Überschrift und Werte.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Width of the column in pixels; texts longer than this are word-wrapped. Default 30.</source>
        <translation>Breite der Spalte in Pixeln; längere Texte werden umbrochen. Standard 30.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Alignment of the heading and values within the column width (left, right, centre). Default &quot;Justify Left&quot;.</source>
        <translation>Ausrichtung von Überschrift und Werten innerhalb der Spaltenbreite (links, rechts, zentriert). Standard „Justify Left“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>It is added to &quot;Cumulative Score&quot; and reset to 0 when the mission ends. Saved quest state, normally left unchanged.</source>
        <translation>Wird bei Missionsende zu „Cumulative Score“ addiert und auf 0 gesetzt. Gespeicherter Quest-Zustand, normalerweise unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sum of all earlier missions; the total shown is this plus this mission&apos;s score. Saved quest state, normally left unchanged.</source>
        <translation>Summe aller früheren Missionen; die angezeigte Summe ist dieser Wert plus der Wert dieser Mission. Gespeicherter Quest-Zustand, normalerweise unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Each mission end adds that mission&apos;s par score. Saved quest state, normally left unchanged.</source>
        <translation>Jedes Missionsende addiert den Par-Wert dieser Mission. Gespeicherter Quest-Zustand, normalerweise unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Shown as numerator × 100 / denominator in percent; added to the cumulative value and reset at mission end. Saved quest state, normally left unchanged.</source>
        <translation>Angezeigt als Zähler × 100 / Nenner in Prozent; bei Missionsende zum kumulierten Wert addiert und zurückgesetzt. Gespeicherter Quest-Zustand, normalerweise unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>A denominator not above 0 shows a placeholder instead of a percentage; added to the cumulative value and reset at mission end. Saved quest state, normally left unchanged.</source>
        <translation>Ein Nenner nicht über 0 zeigt einen Platzhalter statt eines Prozentwerts; bei Missionsende zum kumulierten Wert addiert und zurückgesetzt. Gespeicherter Quest-Zustand, normalerweise unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved quest state, normally left unchanged.</source>
        <translation>Gespeicherter Quest-Zustand, normalerweise unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Each mission end adds that mission&apos;s par numerator. Saved quest state, normally left unchanged.</source>
        <translation>Jedes Missionsende addiert den Par-Zähler dieser Mission. Gespeicherter Quest-Zustand, normalerweise unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Each mission end adds that mission&apos;s par denominator. Saved quest state, normally left unchanged.</source>
        <translation>Jedes Missionsende addiert den Par-Nenner dieser Mission. Gespeicherter Quest-Zustand, normalerweise unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The game clock reading at the end of the last mission; this mission&apos;s time is shown as clock minus this mark. Saved quest state, normally left unchanged.</source>
        <translation>Stand der Spieluhr am Ende der letzten Mission; die Zeit dieser Mission wird als Uhr minus diese Marke angezeigt. Gespeicherter Quest-Zustand, normalerweise unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sum of the par times of all previous missions; each mission end adds that mission&apos;s par time. Saved quest state, normally left unchanged.</source>
        <translation>Summe der Par-Zeiten aller vorigen Missionen; jedes Missionsende addiert die Par-Zeit dieser Mission. Gespeicherter Quest-Zustand, normalerweise unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Set per mission in its par statistics list; shown in the par row and used when &quot;Par Point Offset Weighting&quot; is set.</source>
        <translation>Wird pro Mission in ihrer Par-Statistikliste gesetzt; erscheint in der Par-Zeile und wird verwendet, wenn „Par Point Offset Weighting“ gesetzt ist.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Set per mission in its par statistics list; shown rounded down in the par row and used when &quot;Par Point Offset Weighting&quot; is set.</source>
        <translation>Wird pro Mission in ihrer Par-Statistikliste gesetzt; in der Par-Zeile abgerundet angezeigt und verwendet, wenn „Par Point Offset Weighting“ gesetzt ist.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The par percentage shown is numerator × 100 / denominator.</source>
        <translation>Der angezeigte Par-Prozentwert ist Zähler × 100 / Nenner.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>A denominator not above 0 shows a placeholder instead of a par percentage.</source>
        <translation>Ein Nenner nicht über 0 zeigt einen Platzhalter statt eines Par-Prozentwerts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>A time (shown as a duration, assumed in seconds) set per mission in its par statistics list.</source>
        <translation>Eine Zeit (als Dauer angezeigt, vermutlich in Sekunden), die pro Mission in ihrer Par-Statistikliste gesetzt wird.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Seconds; 0 is treated as 0.01. A re-trigger while the quip is still waiting also restarts the &quot;Minimum Time Between Saying&quot; countdown.</source>
        <translation>Sekunden; 0 wird als 0,01 behandelt. Ein erneutes Auslösen, während der Spruch noch wartet, startet auch den Countdown von „Minimum Time Between Saying“ neu.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Seconds. The quip is also skipped if another voice is playing when its delay runs out.</source>
        <translation>Sekunden. Der Spruch entfällt auch, wenn beim Ablauf der Verzögerung gerade eine andere Stimme spricht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The condition runs with the category as caller each time a &quot;Say Quip&quot; action fires; if it fails nothing happens (no timers are touched). After it, the action&apos;s probability still decides.</source>
        <translation>Die Bedingung läuft bei jedem Auslösen einer „Say Quip“-Aktion mit der Kategorie als Aufrufer; schlägt sie fehl, passiert nichts (keine Zeitgeber werden verändert). Danach entscheidet noch die Wahrscheinlichkeit der Aktion.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Animated texture (a sequence from the sequence list) through which the sprite is bent while the warp effect is on, e.g. when entities warp in or out; how strongly depends on the effect&apos;s strength, and the texture animates at the sequence&apos;s rate.</source>
        <translation>Animierte Textur (eine Sequenz aus der Sequenzliste), durch die das Sprite verzerrt wird, solange der Warp-Effekt aktiv ist, z. B. beim Ein- oder Ausbeamen von Objekten; die Stärke hängt von der Effektstärke ab, die Textur läuft mit der Rate der Sequenz.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Map (level name) loaded when a new game starts without an explicit map. Default &quot;Mission1 MainMap&quot;.</source>
        <translation>Karte (Levelname), die beim Start eines neuen Spiels ohne ausdrücklich angegebene Karte geladen wird. Standard „Mission1 MainMap“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Spawn point in the first map where the player starts a new game; empty = the map&apos;s default.</source>
        <translation>Spawnpunkt in der ersten Karte, an dem der Spieler ein neues Spiel beginnt; leer = Standard der Karte.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Width in pixels of the box around the screen centre in which the camera target can move before the view scrolls (camera modes 1 and 2). Default 142.</source>
        <translation>Breite in Pixeln des Kastens um die Bildschirmmitte, in dem sich das Kameraziel bewegen kann, bevor die Ansicht scrollt (Kameramodi 1 und 2). Standard 142.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Height in pixels of the box around the screen centre in which the camera target can move before the view scrolls. Default 106.</source>
        <translation>Höhe in Pixeln des Kastens um die Bildschirmmitte, in dem sich das Kameraziel bewegen kann, bevor die Ansicht scrollt. Standard 106.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Song (from the music folder) set as the ambient track of the music mixer and started when the game data is loaded.</source>
        <translation>Musikstück (aus dem Musikordner), das beim Laden der Spieldaten als Ambient-Stück des Musikmixers gesetzt und gestartet wird.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font (from the font list) given to the game&apos;s window system when the game data is loaded, used for its windows and dialogs.</source>
        <translation>Schrift (aus der Schriftliste), die beim Laden der Spieldaten an das Fenstersystem des Spiels übergeben wird, für dessen Fenster und Dialoge.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The game&apos;s own rule object (CZaxCustomRules) with further option groups such as the player walking control settings and the Sphere of Zin options.</source>
        <translation>Das eigene Regelobjekt des Spiels (CZaxCustomRules) mit weiteren Optionsgruppen wie den Laufsteuerungs-Einstellungen des Spielers und den Sphere-of-Zin-Optionen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Playback speed of the sequence in frames per second (default 30). Used by Auto-Animate layers and by the behaviours and AIs that play the sequence.</source>
        <translation>Abspielgeschwindigkeit der Sequenz in Frames pro Sekunde (Standard 30). Wird von „Auto-Animate“-Ebenen und von den Verhaltensweisen und KIs genutzt, die die Sequenz abspielen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Load option (default on): moves each frame&apos;s hot spot (the point placed on the object&apos;s position) to the frame&apos;s centre; off keeps the source image&apos;s own origin. Only takes effect when the frames are built from the source images; the shipped .seq/.mdl files already contain the processed frames.</source>
        <translation>Ladeoption (Standard an): setzt den Hot Spot jedes Frames (den Punkt, der auf die Objektposition gesetzt wird) in die Frame-Mitte; aus behält den Ursprung des Quellbilds bei. Wirkt nur, wenn die Frames aus den Quellbildern neu erzeugt werden; die mitgelieferten .seq-/.mdl-Dateien enthalten die Frames bereits fertig verarbeitet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Blend mode the frames are drawn with: &quot;Transparent Mask&quot; (default, normal sprites with alpha edges), &quot;Blend Black Bias&quot; (smoke, fire) or &quot;Blend Amplify Light&quot; (light that brightens the background; black stays black). The two blend modes also change how frames are prepared when built from source images. A hue remap on the entity overrides it.</source>
        <translation>Mischmodus, mit dem die Frames gezeichnet werden: „Transparent Mask“ (Standard, normale Sprites mit Alpha-Kanten), „Blend Black Bias“ (Rauch, Feuer) oder „Blend Amplify Light“ (Licht, das den Hintergrund aufhellt; Schwarz bleibt schwarz). Die beiden Mischmodi ändern auch die Aufbereitung der Frames beim Erzeugen aus Quellbildern. Eine Farbton-Umfärbung am Objekt hat Vorrang.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Load option (default on): the source images&apos; semi-transparent pixels are treated as pre-blended with black and are un-premultiplied (filter 7). Off skips that step; the blit types Blend Black Bias and Blend Amplify Light use their own filter instead. Only takes effect when the frames are built from the source images; the shipped .seq/.mdl files already contain the processed frames.</source>
        <translation>Ladeoption (Standard an): halbtransparente Pixel der Quellbilder gelten als mit Schwarz vorgemischt und werden zurückgerechnet (Filter 7). Aus überspringt das; die Blit-Typen Blend Black Bias und Blend Amplify Light nutzen stattdessen einen eigenen Filter. Wirkt nur, wenn die Frames aus den Quellbildern neu erzeugt werden; die mitgelieferten .seq-/.mdl-Dateien enthalten die Frames bereits fertig verarbeitet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Load option (default on; &quot;Clor&quot; is a typo for colour): crops each frame to its drawn (non-transparent) pixels, keeping the hot spot in place. Off keeps the full image size. Only takes effect when the frames are built from the source images; the shipped .seq/.mdl files already contain the processed frames.</source>
        <translation>Ladeoption (Standard an; „Clor“ ist ein Tippfehler für Colour): beschneidet jeden Frame auf seine gezeichneten (nicht transparenten) Pixel, der Hot Spot bleibt an seiner Stelle. Aus behält die volle Bildgröße. Wirkt nur, wenn die Frames aus den Quellbildern neu erzeugt werden; die mitgelieferten .seq-/.mdl-Dateien enthalten die Frames bereits fertig verarbeitet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Load option (default off): keeps the full alpha channel by always using the 16-bit compressed frame format (also at 8-bit colour depth instead of five alpha bands) and lowers the cut-off below which pixels become fully transparent from alpha 5 to 3. Only takes effect when the frames are built from the source images; the shipped .seq/.mdl files already contain the processed frames.</source>
        <translation>Ladeoption (Standard aus): behält den vollen Alphakanal, indem immer das 16-Bit-Kompressionsformat genutzt wird (auch bei 8 Bit Farbtiefe statt fünf Alpha-Stufen), und senkt die Schwelle, unter der Pixel ganz transparent werden, von Alpha 5 auf 3. Wirkt nur, wenn die Frames aus den Quellbildern neu erzeugt werden; die mitgelieferten .seq-/.mdl-Dateien enthalten die Frames bereits fertig verarbeitet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Load option (default off): dithers the frames when converting them to the display&apos;s colour depth instead of plain rounding. Only takes effect when the frames are built from the source images; the shipped .seq/.mdl files already contain the processed frames.</source>
        <translation>Ladeoption (Standard aus): rastert (dithert) die Frames bei der Umwandlung in die Farbtiefe der Anzeige, statt einfach zu runden. Wirkt nur, wenn die Frames aus den Quellbildern neu erzeugt werden; die mitgelieferten .seq-/.mdl-Dateien enthalten die Frames bereits fertig verarbeitet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Horizontal draw offset in pixels (default 0): every frame&apos;s hot spot is moved so the image appears this many pixels further right (negative: left). Changing it moves all frames at once.</source>
        <translation>Horizontaler Zeichenversatz in Pixeln (Standard 0): der Hot Spot jedes Frames wird so verschoben, dass das Bild um diese Anzahl Pixel weiter rechts erscheint (negativ: links). Eine Änderung verschiebt alle Frames auf einmal.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Vertical draw offset in pixels (default 0): every frame&apos;s hot spot is moved so the image appears this many pixels further down (negative: up). Changing it moves all frames at once.</source>
        <translation>Vertikaler Zeichenversatz in Pixeln (Standard 0): der Hot Spot jedes Frames wird so verschoben, dass das Bild um diese Anzahl Pixel weiter unten erscheint (negativ: oben). Eine Änderung verschiebt alle Frames auf einmal.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Character code of the font&apos;s first glyph (default 32, the space); glyph n is character First ASCII + n. Characters outside the range draw the first glyph.</source>
        <translation>Zeichencode der ersten Glyphe der Schrift (Standard 32, das Leerzeichen); Glyphe n ist das Zeichen „First ASCII“ + n. Zeichen außerhalb des Bereichs zeichnen die erste Glyphe.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Character code of the font&apos;s last glyph (default 125). If it is below 95 (no lower-case letters), text drawn with the font is turned into capitals.</source>
        <translation>Zeichencode der letzten Glyphe der Schrift (Standard 125). Liegt er unter 95 (keine Kleinbuchstaben), wird mit dieser Schrift gezeichneter Text in Großbuchstaben umgewandelt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>How the glyphs are cut from the font&apos;s source image (default on): on, the strip is divided into equal cells (image width / number of characters); off, each glyph ends at the next marker pixel in the image&apos;s bottom row, giving proportional widths, and the base line is found from marker pixels as well.</source>
        <translation>Wie die Glyphen aus dem Quellbild der Schrift geschnitten werden (Standard an): an, wird der Streifen in gleich breite Zellen geteilt (Bildbreite / Zeichenanzahl); aus, endet jede Glyphe am nächsten Markierungspixel in der untersten Bildzeile (proportionale Breiten), und auch die Grundlinie wird aus Markierungspixeln bestimmt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Number of facing directions the frames are split into (default 1; shipped models use 1, 3, 4, 6, 8, 12, 20, 24 or 32). The frames are stored rotation by rotation; a value that does not divide the frame count evenly is refused and the old value kept.</source>
        <translation>Anzahl der Blickrichtungen, in die die Frames aufgeteilt sind (Standard 1; die mitgelieferten Modelle nutzen 1, 3, 4, 6, 8, 12, 20, 24 oder 32). Die Frames liegen Richtung für Richtung hintereinander; ein Wert, der die Frame-Anzahl nicht glatt teilt, wird abgelehnt und der alte Wert behalten.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Only stored with the sequence (-100 in all shipped models); the game never uses it. Probably a display setting of the original editor.</source>
        <translation>Wird nur mit der Sequenz gespeichert (-100 in allen mitgelieferten Modellen); das Spiel nutzt den Wert nie. Vermutlich eine Anzeigeeinstellung des ursprünglichen Editors.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Draws this layer as part of the ground: it goes into the ground queue that is drawn before all other objects and is not lifted by the object&apos;s height (e.g. dirt, scorch marks, ground light).</source>
        <translation>Zeichnet diese Ebene als Teil des Bodens: sie kommt in die Boden-Warteschlange, die vor allen anderen Objekten gezeichnet wird, und wird nicht um die Höhe des Objekts angehoben (z. B. Erde, Brandspuren, Bodenlicht).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Marks the layer as a shadow: it is drawn at the object&apos;s position moved diagonally by the object&apos;s height (instead of raised by it), and the object&apos;s attachments are not drawn around it.</source>
        <translation>Kennzeichnet die Ebene als Schatten: sie wird an der Objektposition gezeichnet, schräg um die Höhe des Objekts versetzt (statt um sie angehoben), und die Anbauteile des Objekts werden nicht um sie herum gezeichnet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Additional facts: the frame is taken from the game clock (frames per second of the sequence), so the layer animates even on objects that otherwise never change frame; without &quot;Sync The Auto Animation&quot; each object gets its own phase.</source>
        <translation>Zusätzlich: der Frame wird aus der Spieluhr berechnet (Frames pro Sekunde der Sequenz), daher animiert die Ebene auch bei Objekten, die sonst nie den Frame wechseln; ohne „Sync The Auto Animation“ bekommt jedes Objekt eine eigene Phase.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Additional facts: the phase comes from the game clock alone, without the per-object offset.</source>
        <translation>Zusätzlich: die Phase ergibt sich allein aus der Spieluhr, ohne den objektabhängigen Versatz.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Hides the layer in the game: such layers (handles, tool and marker graphics) are skipped when the model&apos;s layers are drawn, except when drawing is forced.</source>
        <translation>Blendet die Ebene im Spiel aus: solche Ebenen (Griffe, Werkzeug- und Markierungsgrafiken) werden beim Zeichnen der Modellebenen übersprungen, außer das Zeichnen wird erzwungen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Marks a layer that is drawn whatever sequence the object currently plays (e.g. pedestals of switches, floors of crates, ground light of light beams). In the game this comes from the layer chain stored in the model; no code was found that reads the flag itself.</source>
        <translation>Kennzeichnet eine Ebene, die unabhängig von der gerade gespielten Sequenz des Objekts gezeichnet wird (z. B. Sockel von Schaltern, Böden von Kisten, Bodenlicht von Lichtstrahlen). Im Spiel ergibt sich das aus der im Modell gespeicherten Ebenenkette; Code, der das Flag selbst liest, wurde nicht gefunden.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Angle in radians (shown in degrees, -2π to 2π, default 0) at which rotation 0 starts; the facing angle minus this offset picks the rotation.</source>
        <translation>Winkel im Bogenmaß (in Grad angezeigt, -2π bis 2π, Standard 0), bei dem Richtung 0 beginnt; der Blickwinkel minus diesem Versatz bestimmt die Richtung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Angle range in radians (shown in degrees, default 2π = full circle) that the rotations cover; each rotation spans Range / Num Rotations. Angles outside are brought into the range first.</source>
        <translation>Winkelbereich im Bogenmaß (in Grad angezeigt, Standard 2π = Vollkreis), den die Richtungen abdecken; jede Richtung umfasst Bereich / „Num Rotations“. Winkel außerhalb werden zuerst in den Bereich gebracht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Pixels added to the object&apos;s Y position when sorting this layer against other objects (default 0); larger values draw it later, i.e. in front. With cutting lines it applies to the strip left of the first cut.</source>
        <translation>Pixel, die beim Sortieren dieser Ebene gegen andere Objekte zur Y-Position des Objekts addiert werden (Standard 0); größere Werte zeichnen sie später, also davor. Mit Schnittlinien gilt der Wert für den Streifen links vom ersten Schnitt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>List of vertical cuts (CVerticalCut) that split the layer into strips sorted separately, so e.g. a wall or tree can be partly in front of and partly behind a figure. Cuts should be in ascending X order.</source>
        <translation>Liste senkrechter Schnitte (CVerticalCut), die die Ebene in separat sortierte Streifen teilen, damit z. B. eine Wand oder ein Baum teils vor, teils hinter einer Figur liegen kann. Die Schnitte sollten nach X aufsteigend sortiert sein.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Per-frame triggers (CAnimationTrigger): entry n belongs to frame n of a rotation; its action runs when a playing sequence passes that frame forwards or backwards (as set in the trigger). Used e.g. for footstep sounds and firing weapons on a frame.</source>
        <translation>Auslöser pro Frame (CAnimationTrigger): Eintrag n gehört zu Frame n einer Richtung; seine Aktion läuft, wenn eine abgespielte Sequenz diesen Frame vorwärts oder rückwärts überschreitet (je nach Einstellung des Auslösers). Genutzt z. B. für Schrittgeräusche und Schüsse auf einem bestimmten Frame.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>How often the transition may fire: &quot;Every Time&quot; (default) each time the state change happens, &quot;First Time&quot; only once, &quot;Once Per New Target&quot; once and again after the AI gets a new target.</source>
        <translation>Wie oft der Übergang auslösen darf: „Every Time“ (Standard) bei jedem passenden Zustandswechsel, „First Time“ nur einmal, „Once Per New Target“ einmal und erneut, sobald die KI ein neues Ziel hat.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>State the skeleton AI must be leaving for the transition to fire: Patrol, Pursue, Attack, Retreat, Investigate or &quot;Any&quot; (default).</source>
        <translation>Zustand, den die Skelett-KI verlassen muss, damit der Übergang auslöst: Patrol, Pursue, Attack, Retreat, Investigate oder „Any“ (Standard).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>State the skeleton AI must be entering: one of the states, &quot;Target Acquired&quot;, &quot;Target Lost&quot; or &quot;Any&quot; (default).</source>
        <translation>Zustand, den die Skelett-KI betreten muss: einer der Zustände, „Target Acquired“, „Target Lost“ oder „Any“ (Standard).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run when the transition fires, with the entity as caller and its current target (or the entity itself) as instigator.</source>
        <translation>Aktion, die beim Auslösen des Übergangs läuft, mit dem Objekt als Aufrufer und seinem aktuellen Ziel (oder dem Objekt selbst) als Verursacher.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: set once a &quot;First Time&quot; or &quot;Once Per New Target&quot; transition has fired; leave unchanged in a level (set to 1 it never fires).</source>
        <translation>Gespeicherter Laufzeitzustand: wird gesetzt, sobald ein „First Time“- oder „Once Per New Target“-Übergang ausgelöst hat; im Level unverändert lassen (auf 1 gesetzt löst er nie aus).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Relative chance (1 to 999999, default 1) that a generator picks this entry: each spawn chooses one entry at random with probability Weight / sum of all weights.</source>
        <translation>Relative Wahrscheinlichkeit (1 bis 999999, Standard 1), dass ein Generator diesen Eintrag wählt: jede Erzeugung wählt einen Eintrag zufällig mit Wahrscheinlichkeit Gewicht / Summe aller Gewichte.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Additional facts: the source is looked up in the generator&apos;s level when spawning and copied; the copy is placed at the generator and, if the source was inactive, made active.</source>
        <translation>Zusätzlich: die Vorlage wird beim Erzeugen in der Ebene des Generators gesucht und kopiert; die Kopie wird am Generator platziert und, falls die Vorlage inaktiv war, aktiviert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Entity template owned by this entry; each spawn places a copy of it at the generator.</source>
        <translation>Objektvorlage, die zu diesem Eintrag gehört; jede Erzeugung setzt eine Kopie davon an den Generator.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Model to spawn: a copy of the model&apos;s default entity (or a plain entity) with its default sequence, placed at the generator.</source>
        <translation>Zu erzeugendes Modell: eine Kopie des Standardobjekts des Modells (oder ein einfaches Objekt) mit seiner Standardsequenz, am Generator platziert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Text for this ability level, shown in the dialogue message when the character reaches the level (&quot;... advanced to level N resulting in &lt;description&gt;&quot;; default &quot;increased power and longer durations&quot;).</source>
        <translation>Text zu dieser Fähigkeitsstufe, der in der Dialogmeldung erscheint, wenn die Figur die Stufe erreicht („… advanced to level N resulting in &lt;Beschreibung&gt;“; Standard „increased power and longer durations“).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Seconds the special ability item needs to charge from empty to full at this level (default 10).</source>
        <translation>Sekunden, die der Spezialfähigkeits-Gegenstand auf dieser Stufe braucht, um von leer auf voll zu laden (Standard 10).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Seconds a full charge lasts while the ability is discharging at this level (default 1); when it is empty the ability stops and the Deactivate Action runs.</source>
        <translation>Sekunden, die eine volle Ladung reicht, während die Fähigkeit auf dieser Stufe entladen wird (Standard 1); ist sie leer, endet die Fähigkeit und die „Deactivate Action“ läuft.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sound meant for activating the ability. Only saved and loaded: no code in the game reads it (nothing in the release activates special abilities).</source>
        <translation>Geräusch für das Aktivieren der Fähigkeit. Wird nur gespeichert und geladen: kein Code im Spiel liest es (nichts in der Verkaufsversion aktiviert Spezialfähigkeiten).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action meant to run when the ability is activated. Only saved and loaded: no code in the game reads it (nothing in the release activates special abilities).</source>
        <translation>Aktion, die beim Aktivieren der Fähigkeit laufen soll. Wird nur gespeichert und geladen: kein Code im Spiel liest sie (nichts in der Verkaufsversion aktiviert Spezialfähigkeiten).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Action run (with the player&apos;s character) when a discharging ability at this level runs empty.</source>
        <translation>Aktion, die (mit der Spielerfigur) läuft, wenn eine sich entladende Fähigkeit auf dieser Stufe leer ist.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Thresholds (CThresholdTrigger) on the Sphere of Zin&apos;s charge: each fires its action when the charge crosses its value in the chosen direction.</source>
        <translation>Schwellen (CThresholdTrigger) für die Ladung der Sphere of Zin: jede löst ihre Aktion aus, wenn die Ladung ihren Wert in der gewählten Richtung überschreitet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Squared distance in pixels² (default 40000, i.e. 200 pixels; Rules.txt sets 102400, i.e. 320 pixels).</source>
        <translation>Quadrierte Entfernung in Pixel² (Standard 40000, also 200 Pixel; Rules.txt setzt 102400, also 320 Pixel).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Default 1.</source>
        <translation>Standard 1.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Where the line appears on the save game&apos;s statistics: &quot;General Item&quot; on the left page, &quot;Weapon Or Ammo&quot; on the right page; &quot;NOT AN ITEM&quot; (the default of a new object) hides it.</source>
        <translation>Wo die Zeile in der Statistik eines Spielstands erscheint: „General Item“ auf der linken Seite, „Weapon Or Ammo“ auf der rechten; „NOT AN ITEM“ (Standard eines neuen Objekts) blendet sie aus.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name column of the statistics line (for items the game fills in the item&apos;s display name).</source>
        <translation>Namensspalte der Statistikzeile (bei Gegenständen setzt das Spiel den Anzeigenamen des Gegenstands ein).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font colour of the label: Red, Yellow (gold), Green or Blue (the small fonts of those colours).</source>
        <translation>Schriftfarbe der Bezeichnung: Red, Yellow (gold), Green oder Blue (die kleinen Schriften dieser Farben).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Value column of the statistics line (for items the game writes &quot;Qty &lt;count&gt;&quot;).</source>
        <translation>Wertspalte der Statistikzeile (bei Gegenständen schreibt das Spiel „Qty &lt;Anzahl&gt;“).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Font colour of the value: Red, Yellow (gold), Green or Blue.</source>
        <translation>Schriftfarbe des Werts: Red, Yellow (gold), Green oder Blue.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state of the level cache: the level file name (with .zax) this entry stands for; leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand des Level-Caches: der Level-Dateiname (mit .zax), für den dieser Eintrag steht; unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: temporary file holding the level&apos;s current state since the mission started; it is loaded instead of the original level file. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: temporäre Datei mit dem aktuellen Zustand des Levels seit Missionsbeginn; sie wird statt der ursprünglichen Level-Datei geladen. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: temporary file with the level&apos;s state at the start of the current mission, used when the mission is restarted. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: temporäre Datei mit dem Zustand des Levels zu Beginn der aktuellen Mission, genutzt beim Neustart der Mission. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the level was expired by the script (loading it then gives the &quot;Expired Error&quot; level). Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: das Level wurde per Skript als abgelaufen markiert (Laden liefert dann das Level „Expired Error“). Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the expiry happened during the current mission, so a mission restart undoes it. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: der Ablauf geschah in der aktuellen Mission, ein Neustart der Mission macht ihn rückgängig. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: one entry per level changed or expired during play (the level cache). Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: ein Eintrag pro Level, das im Spiel verändert oder als abgelaufen markiert wurde (der Level-Cache). Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: temporary save made at the start of the current mission, used to restart it. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: temporärer Spielstand vom Beginn der aktuellen Mission, genutzt für ihren Neustart. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the loaded levels in order of last use; when more than three are cached, the oldest one (unless it is the current one) is saved to its temp file and unloaded. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: die geladenen Level in der Reihenfolge der letzten Nutzung; sind mehr als drei zwischengespeichert, wird das älteste (außer dem aktuellen) in seine temporäre Datei gespeichert und entladen. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name of the spawn point object where a figure of this team is placed when it enters the level without a named start point. The entry&apos;s index in the team list is the team number (teams beyond the list use the last entry).</source>
        <translation>Name des Spawnpunkt-Objekts, an dem eine Figur dieses Teams platziert wird, wenn sie ohne benannten Startpunkt ins Level kommt. Der Index des Eintrags in der Teamliste ist die Teamnummer (Teams jenseits der Liste nutzen den letzten Eintrag).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Spawn point used instead of &quot;Spawn Point Name&quot; when the figure&apos;s player has already been placed before (a re-spawn); empty means the normal spawn point. Multiplayer levels use &quot;random&quot;.</source>
        <translation>Spawnpunkt, der statt „Spawn Point Name“ genutzt wird, wenn der Spieler der Figur schon einmal platziert wurde (Wiedereinstieg); leer bedeutet den normalen Spawnpunkt. Mehrspieler-Level nutzen „random“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Model meant for this team&apos;s figures. No code reading it was found; all shipped levels leave it at &quot;!Unknown Model&quot;.</source>
        <translation>Modell für die Figuren dieses Teams. Es wurde kein Code gefunden, der es liest; alle mitgelieferten Level lassen es auf „!Unknown Model“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Additional facts: the value compared is the Sphere of Zin&apos;s charge, checked once per update between the previous and the current charge.</source>
        <translation>Zusätzlich: verglichen wird die Ladung der Sphere of Zin, einmal pro Aktualisierung zwischen vorheriger und aktueller Ladung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Default 5.</source>
        <translation>Standard 5.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Additional facts: it runs in the level of the entity holding the sphere, with that entity as instigator.</source>
        <translation>Zusätzlich: sie läuft in der Ebene des Objekts, das die Sphere trägt, mit diesem Objekt als Verursacher.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Values: &quot;Increasing&quot; (default), &quot;Decreasing&quot;, &quot;Either Direction&quot;.</source>
        <translation>Werte: „Increasing“ (Standard), „Decreasing“, „Either Direction“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the object the level keeps updating even off screen (the player, camera targets, objects of scripted sequences). Entries are added and removed by the game.</source>
        <translation>Gespeicherter Laufzeitzustand: das Objekt, das das Level auch außerhalb des Bildschirms weiter aktualisiert (Spieler, Kameraziele, Objekte von Skriptsequenzen). Einträge fügt das Spiel hinzu und entfernt sie.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Half width in pixels of the area around the monitored object in which all objects are updated as well; 0 updates only the object itself (both half sizes must be non-zero). Not initialised by the original constructor.</source>
        <translation>Halbe Breite in Pixeln des Bereichs um das überwachte Objekt, in dem alle Objekte ebenfalls aktualisiert werden; 0 aktualisiert nur das Objekt selbst (beide Halbmaße müssen ungleich 0 sein). Vom ursprünglichen Konstruktor nicht initialisiert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Half height in pixels of the area around the monitored object in which all objects are updated as well; 0 updates only the object itself. Not initialised by the original constructor.</source>
        <translation>Halbe Höhe in Pixeln des Bereichs um das überwachte Objekt, in dem alle Objekte ebenfalls aktualisiert werden; 0 aktualisiert nur das Objekt selbst. Vom ursprünglichen Konstruktor nicht initialisiert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: the objects the level updates every frame regardless of the view (with an optional area around each). The game adds and removes entries itself; an entry is dropped when its object is deleted or leaves the level.</source>
        <translation>Gespeicherter Laufzeitzustand: die Objekte, die das Level unabhängig vom Bildausschnitt in jedem Frame aktualisiert (optional mit einem Bereich um jedes). Das Spiel fügt Einträge selbst hinzu und entfernt sie; ein Eintrag verschwindet, wenn sein Objekt gelöscht wird oder das Level verlässt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name of a user-defined class (a .UDC file); the game uses a copy of the object stored there. No .UDC files exist in the game data.</source>
        <translation>Name einer benutzerdefinierten Klasse (einer .UDC-Datei); das Spiel nutzt eine Kopie des dort gespeicherten Objekts. In den Spieldaten gibt es keine .UDC-Dateien.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>X position of the cut in pixels, relative to the object&apos;s position (negative: left).</source>
        <translation>X-Position des Schnitts in Pixeln, relativ zur Objektposition (negativ: links).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sorting offset in pixels of the strip to the right of this cut; it replaces the sequence&apos;s &quot;Sorting Y Offset&quot; for that strip (not added to it).</source>
        <translation>Sortierversatz in Pixeln des Streifens rechts von diesem Schnitt; er ersetzt für diesen Streifen den „Sorting Y Offset“ der Sequenz (wird nicht addiert).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Pixels, relative to the page; the title is centred horizontally and vertically in this area.</source>
        <translation>Pixel, relativ zur Seite; der Titel wird in diesem Bereich waagerecht und senkrecht zentriert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Pixels, relative to the page; the title is centred in the area.</source>
        <translation>Pixel, relativ zur Seite; der Titel wird im Bereich zentriert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Pixels; used only to centre the title, the text is not clipped.</source>
        <translation>Pixel; dient nur zum Zentrieren des Titels, der Text wird nicht abgeschnitten.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Pixels; used only to centre the title vertically.</source>
        <translation>Pixel; dient nur zum senkrechten Zentrieren des Titels.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>A localisable text entry (default &quot;Voice Log&quot;).</source>
        <translation>Ein übersetzbarer Texteintrag (Standard „Voice Log“).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name of a font from the font list.</source>
        <translation>Name einer Schrift aus der Schriftenliste.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Pixels, relative to the voice log page of the inventory screen.</source>
        <translation>Pixel, relativ zur Sprachprotokoll-Seite des Inventarbildschirms.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Pixels; when &quot;Dialog Column Width&quot; is 0 the last column fills the rest of this width.</source>
        <translation>Pixel; ist „Dialog Column Width“ 0, füllt die letzte Spalte den Rest dieser Breite.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Pixels.</source>
        <translation>Pixel.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>A localisable text entry (default &quot;How long ago&quot;); the column shows the time since the line was said.</source>
        <translation>Ein übersetzbarer Texteintrag (Standard „How long ago“); die Spalte zeigt die Zeit seit dem Satz.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Pixels (default 100); set once when the page is first laid out.</source>
        <translation>Pixel (Standard 100); wird beim ersten Aufbau der Seite einmal gesetzt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>A localisable text entry (default &quot;Who said&quot;).</source>
        <translation>Ein übersetzbarer Texteintrag (Standard „Who said“).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Pixels (default 80); set once when the page is first laid out.</source>
        <translation>Pixel (Standard 80); wird beim ersten Aufbau der Seite einmal gesetzt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>A localisable text entry (default &quot;What was said&quot;); lines longer than 80 characters are shortened with &quot;...&quot;.</source>
        <translation>Ein übersetzbarer Texteintrag (Standard „What was said“); Zeilen über 80 Zeichen werden mit „...“ gekürzt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Pixels (default 80); 0 makes the column fill the rest of the header width.</source>
        <translation>Pixel (Standard 80); 0 lässt die Spalte den Rest der Kopfzeilenbreite füllen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Has no effect in the game.</source>
        <translation>Im Spiel ohne Wirkung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>A localisable text entry (default &quot;Replay&quot;). The button replays the selected line and the lines recorded at the same moment after it.</source>
        <translation>Ein übersetzbarer Texteintrag (Standard „Replay“). Die Schaltfläche spielt den gewählten Satz und die im selben Moment danach aufgezeichneten Sätze erneut ab.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state of the voice log: a copy of the dialogue action that said the line; Replay runs it again. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand des Sprachprotokolls: eine Kopie der Dialogaktion, die den Satz gesprochen hat; „Replay“ führt sie erneut aus. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: game time in seconds when the line was said; the list shows the time since then and sorts by it. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: Spielzeit in Sekunden, zu der der Satz gesprochen wurde; die Liste zeigt die seitdem vergangene Zeit und sortiert danach. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state: running number among lines said at the same moment (0 for the first), used to keep their order. Leave unchanged.</source>
        <translation>Gespeicherter Laufzeitzustand: laufende Nummer unter Sätzen, die im selben Moment gesprochen wurden (0 für den ersten), hält ihre Reihenfolge. Unverändert lassen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>First of the two wave forms that shift each column of the 128 × 128 water texture up and down; the two V waves are added.</source>
        <translation>Erste der beiden Wellenformen, die jede Spalte der 128 × 128 großen Wassertextur nach oben und unten verschieben; die beiden V-Wellen werden addiert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Second wave form for the vertical shift of each column of the water texture; added to V1.</source>
        <translation>Zweite Wellenform für die senkrechte Verschiebung jeder Spalte der Wassertextur; wird zu V1 addiert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>First of the two wave forms that shift each row of the 128 × 128 water texture left and right; the two H waves are added.</source>
        <translation>Erste der beiden Wellenformen, die jede Zeile der 128 × 128 großen Wassertextur nach links und rechts verschieben; die beiden H-Wellen werden addiert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Second wave form for the horizontal shift of each row of the water texture; added to H1.</source>
        <translation>Zweite Wellenform für die waagerechte Verschiebung jeder Zeile der Wassertextur; wird zu H1 addiert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Only saved and loaded; the game never reads it. Probably a preview aid of the original editor.</source>
        <translation>Wird nur gespeichert und geladen; das Spiel liest den Wert nie. Vermutlich eine Vorschauhilfe des ursprünglichen Editors.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>How the texture is bent: &quot;Horizontal&quot; (rows only), &quot;Vertical&quot; (columns only), &quot;Horizontal Then Vertical&quot; (default, both), &quot;Vertical Then Horizontal&quot; (both, 16-bit colour only) or &quot;Horizontal Then Vertical Animated&quot; (both, using the animated texture).</source>
        <translation>Wie die Textur verbogen wird: „Horizontal“ (nur Zeilen), „Vertical“ (nur Spalten), „Horizontal Then Vertical“ (Standard, beides), „Vertical Then Horizontal“ (beides, nur bei 16 Bit Farbtiefe) oder „Horizontal Then Vertical Animated“ (beides, mit der animierten Textur).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Ground texture that is bent by the waves for all render types except the animated one.</source>
        <translation>Bodentextur, die bei allen Render-Typen außer dem animierten von den Wellen verbogen wird.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Animated texture used by &quot;Horizontal Then Vertical Animated&quot;: its frame follows the game time at the texture&apos;s own frames per second, then it is bent by the waves.</source>
        <translation>Animierte Textur für „Horizontal Then Vertical Animated“: ihr Frame folgt der Spielzeit mit der eigenen Bildrate der Textur, danach wird sie von den Wellen verbogen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Number of full wave cycles across the 128-pixel texture (0 to 16, default 4); the wave table is rebuilt when it changes.</source>
        <translation>Anzahl voller Wellenzyklen über die 128 Pixel der Textur (0 bis 16, Standard 4); die Wellentabelle wird bei einer Änderung neu berechnet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Largest shift of a row or column in pixels (0 to 30, default 2).</source>
        <translation>Größte Verschiebung einer Zeile oder Spalte in Pixeln (0 bis 30, Standard 2).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Speed at which the wave pattern moves along the texture, in pixels per second (-100 to 100, default 15; negative reverses the direction).</source>
        <translation>Geschwindigkeit, mit der das Wellenmuster über die Textur wandert, in Pixeln pro Sekunde (-100 bis 100, Standard 15; negativ kehrt die Richtung um).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Minimum spacing in pixels between generated way points. The game keeps the value stored in the level&apos;s .way file and, when it builds a missing .way, uses its own fixed value 20, so the level&apos;s setting has no effect.</source>
        <translation>Mindestabstand in Pixeln zwischen erzeugten Wegpunkten. Das Spiel übernimmt den Wert aus der .way-Datei des Levels und nutzt beim Erzeugen einer fehlenden .way-Datei einen eigenen festen Wert von 20, daher hat die Einstellung im Level keine Wirkung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Largest distance in pixels at which two way points are joined; path searches also use it to find the way points near start and end. The game keeps the .way file&apos;s value and builds missing maps with 39 (39.8 truncated), so the level&apos;s setting has no effect.</source>
        <translation>Größte Entfernung in Pixeln, bis zu der zwei Wegpunkte verbunden werden; die Wegsuche nutzt sie auch, um die Wegpunkte nahe Start und Ziel zu finden. Das Spiel übernimmt den Wert aus der .way-Datei und erzeugt fehlende Karten mit 39, daher hat die Einstellung im Level keine Wirkung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state of a moving object&apos;s current path; rewritten whenever a new move starts. Leave unchanged in a level. Start of the move in pixels.</source>
        <translation>Gespeicherter Laufzeitzustand des aktuellen Wegs eines sich bewegenden Objekts; wird bei jedem neuen Bewegungsbeginn neu geschrieben. Im Level unverändert lassen. Startpunkt der Bewegung in Pixeln.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state of a moving object&apos;s current path; rewritten whenever a new move starts. Leave unchanged in a level. Destination in pixels.</source>
        <translation>Gespeicherter Laufzeitzustand des aktuellen Wegs eines sich bewegenden Objekts; wird bei jedem neuen Bewegungsbeginn neu geschrieben. Im Level unverändert lassen. Zielpunkt in Pixeln.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state of a moving object&apos;s current path; rewritten whenever a new move starts. Leave unchanged in a level. Straight distance from start to end in pixels; above 1600 no path is searched.</source>
        <translation>Gespeicherter Laufzeitzustand des aktuellen Wegs eines sich bewegenden Objekts; wird bei jedem neuen Bewegungsbeginn neu geschrieben. Im Level unverändert lassen. Direkte Entfernung von Start zu Ziel in Pixeln; über 1600 wird kein Weg gesucht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state of a moving object&apos;s current path; rewritten whenever a new move starts. Leave unchanged in a level. Set to twice the length; nothing reads it.</source>
        <translation>Gespeicherter Laufzeitzustand des aktuellen Wegs eines sich bewegenden Objekts; wird bei jedem neuen Bewegungsbeginn neu geschrieben. Im Level unverändert lassen. Wird auf die doppelte Länge gesetzt; nichts liest den Wert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state of a moving object&apos;s current path; rewritten whenever a new move starts. Leave unchanged in a level. Reset to 0 at each move; nothing reads it.</source>
        <translation>Gespeicherter Laufzeitzustand des aktuellen Wegs eines sich bewegenden Objekts; wird bei jedem neuen Bewegungsbeginn neu geschrieben. Im Level unverändert lassen. Wird bei jeder Bewegung auf 0 gesetzt; nichts liest den Wert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state of a moving object&apos;s current path; rewritten whenever a new move starts. Leave unchanged in a level. Set to 1 at each move; nothing reads it.</source>
        <translation>Gespeicherter Laufzeitzustand des aktuellen Wegs eines sich bewegenden Objekts; wird bei jedem neuen Bewegungsbeginn neu geschrieben. Im Level unverändert lassen. Wird bei jeder Bewegung auf 1 gesetzt; nichts liest den Wert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state of a moving object&apos;s current path; rewritten whenever a new move starts. Leave unchanged in a level. Index of the path point the object is heading for.</source>
        <translation>Gespeicherter Laufzeitzustand des aktuellen Wegs eines sich bewegenden Objekts; wird bei jedem neuen Bewegungsbeginn neu geschrieben. Im Level unverändert lassen. Index des Wegpunkts, den das Objekt gerade ansteuert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved run-time state of a moving object&apos;s current path; rewritten whenever a new move starts. Leave unchanged in a level. Reference to the found list of path points in the level&apos;s path cache.</source>
        <translation>Gespeicherter Laufzeitzustand des aktuellen Wegs eines sich bewegenden Objekts; wird bei jedem neuen Bewegungsbeginn neu geschrieben. Im Level unverändert lassen. Verweis auf die gefundene Liste von Wegpunkten im Wege-Cache des Levels.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved game state (save games only, not used in levels). The mission manager with the missions and their progress.</source>
        <translation>Gespeicherter Spielzustand (nur in Spielständen, nicht in Leveln). Die Missionsverwaltung mit den Missionen und ihrem Fortschritt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved game state (save games only, not used in levels). The lines of the voice log (CVoiceLogElement).</source>
        <translation>Gespeicherter Spielzustand (nur in Spielständen, nicht in Leveln). Die Sätze des Sprachprotokolls (CVoiceLogElement).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved game state (save games only, not used in levels). The scripted (non-interactive) sequence playing when the game was saved.</source>
        <translation>Gespeicherter Spielzustand (nur in Spielständen, nicht in Leveln). Die geskriptete (nicht interaktive) Sequenz, die beim Speichern lief.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved game state (save games only, not used in levels). Data of the game type, e.g. the quest progress.</source>
        <translation>Gespeicherter Spielzustand (nur in Spielständen, nicht in Leveln). Daten des Spieltyps, z. B. der Quest-Fortschritt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Saved game state (save games only, not used in levels). The chosen difficulty level (default &quot;Normal&quot;).</source>
        <translation>Gespeicherter Spielzustand (nur in Spielständen, nicht in Leveln). Der gewählte Schwierigkeitsgrad (Standard „Normal“).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Save game summary shown on the load/save screen; filled by the game when saving. Date and time of the save as text.</source>
        <translation>Zusammenfassung eines Spielstands für den Lade-/Speicherbildschirm; wird vom Spiel beim Speichern ausgefüllt. Datum und Uhrzeit des Speicherns als Text.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Save game summary shown on the load/save screen; filled by the game when saving. Time of the save as a number, used to sort saves (newest first).</source>
        <translation>Zusammenfassung eines Spielstands für den Lade-/Speicherbildschirm; wird vom Spiel beim Speichern ausgefüllt. Zeitpunkt des Speicherns als Zahl, zum Sortieren der Spielstände (neueste zuerst).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Save game summary shown on the load/save screen; filled by the game when saving. Copy of the mission active when saving (shown on the mission details page).</source>
        <translation>Zusammenfassung eines Spielstands für den Lade-/Speicherbildschirm; wird vom Spiel beim Speichern ausgefüllt. Kopie der beim Speichern aktiven Mission (auf der Missionsdetailseite angezeigt).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Save game summary shown on the load/save screen; filled by the game when saving. 200 × 150 picture of the game view at the moment of saving.</source>
        <translation>Zusammenfassung eines Spielstands für den Lade-/Speicherbildschirm; wird vom Spiel beim Speichern ausgefüllt. 200 × 150 großes Bild der Spielansicht im Moment des Speicherns.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Save game summary shown on the load/save screen; filled by the game when saving. Hit points the player&apos;s character had left.</source>
        <translation>Zusammenfassung eines Spielstands für den Lade-/Speicherbildschirm; wird vom Spiel beim Speichern ausgefüllt. Verbleibende Trefferpunkte der Spielerfigur.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Save game summary shown on the load/save screen; filled by the game when saving. Playing time.</source>
        <translation>Zusammenfassung eines Spielstands für den Lade-/Speicherbildschirm; wird vom Spiel beim Speichern ausgefüllt. Spielzeit.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Save game summary shown on the load/save screen; filled by the game when saving. Name of the current level.</source>
        <translation>Zusammenfassung eines Spielstands für den Lade-/Speicherbildschirm; wird vom Spiel beim Speichern ausgefüllt. Name des aktuellen Levels.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Save game summary shown on the load/save screen; filled by the game when saving. Number of ore deposits the player carried.</source>
        <translation>Zusammenfassung eines Spielstands für den Lade-/Speicherbildschirm; wird vom Spiel beim Speichern ausgefüllt. Anzahl der Erzvorkommen, die der Spieler bei sich hatte.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Save game summary shown on the load/save screen; filled by the game when saving. Number of crystals the player carried.</source>
        <translation>Zusammenfassung eines Spielstands für den Lade-/Speicherbildschirm; wird vom Spiel beim Speichern ausgefüllt. Anzahl der Kristalle, die der Spieler bei sich hatte.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Save game summary shown on the load/save screen; filled by the game when saving. File the save was written to (SaveGames/&lt;name&gt;.sav).</source>
        <translation>Zusammenfassung eines Spielstands für den Lade-/Speicherbildschirm; wird vom Spiel beim Speichern ausgefüllt. Datei, in die gespeichert wurde (SaveGames/&lt;Name&gt;.sav).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Save game summary shown on the load/save screen; filled by the game when saving. Statistics lines (CStatsInventoryItem) of the player&apos;s items.</source>
        <translation>Zusammenfassung eines Spielstands für den Lade-/Speicherbildschirm; wird vom Spiel beim Speichern ausgefüllt. Statistikzeilen (CStatsInventoryItem) der Gegenstände des Spielers.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Name pattern of the save: \l stands for the map name, \m for &quot;M&quot; plus the mission number, \\ for a backslash (default &quot;\m \l&quot;).</source>
        <translation>Namensmuster des Spielstands: \l steht für den Kartennamen, \m für „M“ und die Missionsnummer, \\ für einen Backslash (Standard „\m \l“).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Surface type (default &quot;Generic&quot;) for which this entry&apos;s sound is played; the action looks up the surface under the target and uses the first entry that matches.</source>
        <translation>Oberflächentyp (Standard „Generic“), für den der Sound dieses Eintrags gespielt wird; die Aktion ermittelt die Oberfläche unter dem Ziel und nimmt den ersten passenden Eintrag.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Sound played on that surface type instead of the action&apos;s &quot;Default Sound&quot;.</source>
        <translation>Sound, der auf diesem Oberflächentyp statt des „Default Sound“ der Aktion gespielt wird.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Not a frequency: on every update the accuracy statistic gets the frame time multiplied by this value as shots (and as hits while the beam damages something), so it only weights continuous fire against single shots in the accuracy ratio.</source>
        <translation>Keine Häufigkeit: bei jedem Update erhält die Trefferquoten-Statistik die Bildzeit mal diesem Wert als Schüsse (und als Treffer, solange der Strahl etwas beschädigt); der Wert gewichtet also nur Dauerfeuer gegenüber Einzelschüssen in der Trefferquote.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The amount is sent every frame regardless of frame time and only reaches Sphere of Zin items in the same layer, scaled down by the squared distance.</source>
        <translation>Der Betrag wird in jedem Bild unabhängig von der Bildzeit gesendet und erreicht nur Sphere-of-Zin-Gegenstände in derselben Ebene, verringert mit der quadrierten Entfernung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>It is given whenever the item refuses the character for any reason (its acceptance test fails), not only when the character already has it; if both refuse, the character cannot touch the pickup at all.</source>
        <translation>Er wird immer vergeben, wenn der Gegenstand die Figur aus irgendeinem Grund ablehnt (seine Annahmeprüfung schlägt fehl), nicht nur, wenn die Figur ihn schon hat; lehnen beide ab, kann die Figur das Pickup gar nicht berühren.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The call reaches active objects within the action&apos;s &quot;Max Distance&quot; that share a category with the caller. A character answers only while it is patrolling, only if the caller&apos;s target is one of its own target categories and not too far from its home.</source>
        <translation>Der Ruf erreicht aktive Objekte innerhalb der „Max Distance“ der Aktion, die eine Kategorie mit dem Rufer teilen. Eine Figur reagiert nur, während sie patrouilliert, und nur, wenn das Ziel des Rufers zu ihren eigenen Zielkategorien gehört und nicht zu weit von ihrem Ausgangspunkt entfernt ist.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Each scene names the object the camera moves to, its own camera speed and an action run when the camera arrives. The next scene starts only when a CEndCurrentNonInteractiveSequenceSceneAction ends the current one; after the last one the view goes back to the player.</source>
        <translation>Jede Szene nennt das Objekt, zu dem die Kamera fährt, ihre eigene Kamerageschwindigkeit und eine Aktion, die bei Ankunft der Kamera läuft. Die nächste Szene beginnt erst, wenn eine CEndCurrentNonInteractiveSequenceSceneAction die aktuelle beendet; nach der letzten Szene kehrt die Kamera zum Spieler zurück.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The area is a rectangle, not a circle: &quot;Radius&quot; pixels to each side of the object&apos;s centre and &quot;Radius&quot; times 0.713 up and down; only active objects in it receive the message.</source>
        <translation>Der Bereich ist ein Rechteck, kein Kreis: „Radius“ Pixel zu jeder Seite der Objektmitte und „Radius“ mal 0,713 nach oben und unten; nur aktive Objekte darin erhalten die Nachricht.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The height is taken only from a location that is an entity; a location that is no entity, or no location at all combined with a &quot;Random Location Delta&quot;, sets the new entity&apos;s height to 0 when this box is checked.</source>
        <translation>Die Höhe wird nur von einem Ort übernommen, der eine Entity ist; ein Ort, der keine Entity ist, oder gar kein Ort zusammen mit „Random Location Delta“ setzt die Höhe des neuen Objekts bei aktiviertem Kästchen auf 0.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The list is indexed by the position of the current game type in the game type list (one entry per type, in that order); if the list has no entry for the current type, or none is selected, nothing runs and the action fails.</source>
        <translation>Die Liste wird über die Position des aktuellen Spieltyps in der Spieltypliste angesprochen (ein Eintrag pro Typ, in dieser Reihenfolge); hat die Liste keinen Eintrag für den aktuellen Typ oder ist keiner gewählt, läuft nichts und die Aktion schlägt fehl.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>In the code the number is the 0-based team index: 0 is the blue team and 1 the red team (the multiplayer teams are named and coloured in that order); 1 = Blue, 2 = Red is off by one.</source>
        <translation>Im Code ist die Zahl der nullbasierte Teamindex: 0 ist das blaue Team, 1 das rote (die Mehrspielerteams werden in dieser Reihenfolge benannt und eingefärbt); 1 = Blau, 2 = Rot ist um eins verschoben.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The percentage is cut to a whole number and compared with a random number from 0 to 100, so the chance is (p + 1) / 101: 0 % still says the quip about 1 time in 101, 100 % always. The category&apos;s &quot;Condition&quot; action must succeed first.</source>
        <translation>Der Prozentwert wird auf eine ganze Zahl gekürzt und mit einer Zufallszahl von 0 bis 100 verglichen; die Chance ist also (p + 1) / 101: auch 0 % sagt den Spruch etwa einmal in 101 Fällen, 100 % immer. Vorher muss die „Condition“-Aktion der Kategorie gelingen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Only read in team games (&quot;Is Team Game&quot; = 1); otherwise it is ignored. &quot;Unlimited&quot; (0) lets the team assignment use up to 20 teams.</source>
        <translation>Wird nur in Teamspielen gelesen („Is Team Game“ = 1), sonst ignoriert. „Unlimited“ (0) lässt die Teamzuteilung bis zu 20 Teams verwenden.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>These points also go to a player who dies without a killing player (for example by a monster or the level), not only on suicide.</source>
        <translation>Diese Punkte bekommt auch ein Spieler, der ohne tötenden Spieler stirbt (z. B. durch ein Monster oder den Level), nicht nur bei Selbsttötung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Besides being the unexplored (fog) colour it is also the background of the layer&apos;s mini-map image and, in multiplayer, of the mini score board.</source>
        <translation>Neben der Farbe des unerkundeten Nebels ist sie auch der Hintergrund des Minikarten-Bilds der Ebene und im Mehrspielermodus der kleinen Punktetafel.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The value is a squared distance in pixels² (4096 = 64 pixels), and -1 means update every frame.</source>
        <translation>Der Wert ist eine quadrierte Entfernung in Pixel² (4096 = 64 Pixel), und -1 bedeutet Aktualisierung in jedem Bild.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The value is stored but not used: the detail picture is drawn at the picture&apos;s own size.</source>
        <translation>Der Wert wird gespeichert, aber nicht verwendet: Das Detailbild wird in seiner eigenen Größe gezeichnet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>It is the position of the item&apos;s name; the statistics are drawn 1.5 name-font lines below it.</source>
        <translation>Es ist die Position des Gegenstandsnamens; die Werte werden 1,5 Zeilen der Namensschrift darunter gezeichnet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>It is the y of the item&apos;s name; the statistics are drawn 1.5 name-font lines below it.</source>
        <translation>Es ist das y des Gegenstandsnamens; die Werte werden 1,5 Zeilen der Namensschrift darunter gezeichnet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Only the description text uses it, as its wrapping width (minus both margins); the statistics are not limited by it.</source>
        <translation>Nur der Beschreibungstext verwendet sie, als Umbruchbreite (abzüglich beider Ränder); die Werte werden dadurch nicht begrenzt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The value is stored but not used; the statistics area has no height limit.</source>
        <translation>Der Wert wird gespeichert, aber nicht verwendet; der Wertebereich hat keine Höhenbegrenzung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The number is 0-based (0-15) with -1 &quot;Nutral&quot; as default; it selects the spawn entry in the level&apos;s Team Info and is compared by team actions and the friendly-fire test. Which colour a team shows was not seen in the code read.</source>
        <translation>Die Nummer zählt ab 0 (0–15), -1 „Nutral“ ist der Standard; sie wählt den Starteintrag in der „Team Info“ des Levels und wird von Team-Aktionen und dem Eigenbeschuss-Test verglichen. Welche Farbe ein Team zeigt, war im gelesenen Code nicht zu sehen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The angle is an offset from Om&apos;s current facing angle (radians, shown in degrees): a collision counts as an eye hit when the direction from Om&apos;s position to the contact point minus this value lies within Angle Plus Or Minus of the facing angle. Only such collision damage gets through; all other damage to Om is set to 0.</source>
        <translation>Der Winkel ist ein Versatz zum aktuellen Blickwinkel von Om (Bogenmaß, in Grad angezeigt): Eine Kollision zählt als Augentreffer, wenn die Richtung von Oms Position zum Berührpunkt minus diesen Wert innerhalb von „Angle Plus Or Minus“ um den Blickwinkel liegt. Nur solcher Kollisionsschaden kommt durch; jeder andere Schaden an Om wird auf 0 gesetzt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The value is in level (world) pixels, not mini-map pixels, and nothing is masked: the level area is cropped by it at the left edge and the rest is scaled to fit the mini map (keeping its aspect) and centred. It takes effect when the mini-map mapping is computed, which the game does at the start of a level.</source>
        <translation>Der Wert ist in Level-(Welt-)Pixeln, nicht in Minikartenpixeln, und nichts wird maskiert: Der Levelbereich wird am linken Rand darum beschnitten und der Rest passend in die Minikarte skaliert (mit gleichem Seitenverhältnis) und zentriert. Er wirkt, wenn die Minikarten-Abbildung berechnet wird, was das Spiel beim Levelstart tut.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The value is in level (world) pixels, not mini-map pixels, and nothing is masked: the level area is cropped by it at the top edge and the rest is scaled to fit the mini map (keeping its aspect) and centred. It takes effect when the mini-map mapping is computed, which the game does at the start of a level.</source>
        <translation>Der Wert ist in Level-(Welt-)Pixeln, nicht in Minikartenpixeln, und nichts wird maskiert: Der Levelbereich wird am oberen Rand darum beschnitten und der Rest passend in die Minikarte skaliert (mit gleichem Seitenverhältnis) und zentriert. Er wirkt, wenn die Minikarten-Abbildung berechnet wird, was das Spiel beim Levelstart tut.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The value is in level (world) pixels, not mini-map pixels, and nothing is masked: the level area is cropped by it at the right edge and the rest is scaled to fit the mini map (keeping its aspect) and centred. It takes effect when the mini-map mapping is computed, which the game does at the start of a level.</source>
        <translation>Der Wert ist in Level-(Welt-)Pixeln, nicht in Minikartenpixeln, und nichts wird maskiert: Der Levelbereich wird am rechten Rand darum beschnitten und der Rest passend in die Minikarte skaliert (mit gleichem Seitenverhältnis) und zentriert. Er wirkt, wenn die Minikarten-Abbildung berechnet wird, was das Spiel beim Levelstart tut.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The value is in level (world) pixels, not mini-map pixels, and nothing is masked: the level area is cropped by it at the bottom edge and the rest is scaled to fit the mini map (keeping its aspect) and centred. It takes effect when the mini-map mapping is computed, which the game does at the start of a level.</source>
        <translation>Der Wert ist in Level-(Welt-)Pixeln, nicht in Minikartenpixeln, und nichts wird maskiert: Der Levelbereich wird am unteren Rand darum beschnitten und der Rest passend in die Minikarte skaliert (mit gleichem Seitenverhältnis) und zentriert. Er wirkt, wenn die Minikarten-Abbildung berechnet wird, was das Spiel beim Levelstart tut.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>No code reads this width: the mission title is neither clipped nor centred to it.</source>
        <translation>Kein Code liest diese Breite: der Missionstitel wird daran weder abgeschnitten noch zentriert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>Besides the mission&apos;s description it is also the font of every objective&apos;s description (the label before its status).</source>
        <translation>Neben der Missionsbeschreibung ist sie auch die Schrift der Beschreibung jedes Ziels (der Bezeichnung vor seinem Status).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>This is the close button&apos;s pressed image: it is drawn only while the button is pressed (and sets the button&apos;s size). The disabled look comes from &quot;Close Button Disabed Frame&quot;.</source>
        <translation>Dies ist das Gedrückt-Bild der Schließen-Schaltfläche: es wird nur gezeichnet, solange sie gedrückt ist (und bestimmt ihre Größe). Das Aussehen im deaktivierten Zustand kommt aus „Close Button Disabed Frame“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>This is the close button&apos;s disabled image, drawn while the button is disabled (in the mission failed window); the pressed look comes from &quot;Close Button Pressed Frame&quot;.</source>
        <translation>Dies ist das Bild der deaktivierten Schließen-Schaltfläche, gezeichnet solange sie deaktiviert ist (im Fenster für eine gescheiterte Mission); das Gedrückt-Aussehen kommt aus „Close Button Pressed Frame“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>This is the title of the window shown when a mission is failed, not completed.</source>
        <translation>Dies ist der Titel des Fensters, das bei einer gescheiterten Mission erscheint, nicht bei einer erfüllten.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The value is in pixels per second; 0 (&quot;Immediately&quot;) jumps the camera to the target without moving.</source>
        <translation>Der Wert ist in Pixeln pro Sekunde; 0 („Immediately“) setzt die Kamera ohne Fahrt direkt aufs Ziel.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The row is not shown, but its point value is still added to the mission&apos;s total score.</source>
        <translation>Die Zeile wird nicht angezeigt, ihr Punktwert fließt aber weiter in die Gesamtpunktzahl der Mission ein.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>It is the sum of the par scores of all previous missions, not only of the last one.</source>
        <translation>Es ist die Summe der Par-Werte aller vorigen Missionen, nicht nur der letzten.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>It is the sum of the par numerators of all previous missions, not only of the last one.</source>
        <translation>Es ist die Summe der Par-Zähler aller vorigen Missionen, nicht nur der letzten.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>It is the sum of the par denominators of all previous missions, not only of the last one.</source>
        <translation>Es ist die Summe der Par-Nenner aller vorigen Missionen, nicht nur der letzten.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The wait starts when the quip is triggered (not when it is said) and is restarted by a re-trigger while the quip is pending; a trigger that loses the &quot;Say Quip&quot; probability roll also starts the wait when it had run out.</source>
        <translation>Die Wartezeit beginnt beim Auslösen des Spruchs (nicht beim Sprechen) und wird durch erneutes Auslösen während der Verzögerung neu gestartet; ein Auslösen, das den Wahrscheinlichkeitswurf von „Say Quip“ verliert, startet die abgelaufene Wartezeit ebenfalls.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The value is a squared distance (pixels²): evil broadcast at distance d charges the sphere by amount × value / d² of what is missing to full, so at d² = value the full amount applies and it falls off with the square of the distance.</source>
        <translation>Der Wert ist eine quadrierte Entfernung (Pixel²): Böses, das in Entfernung d ausgesendet wird, lädt die Sphere um Menge × Wert / d² des bis voll fehlenden Anteils; bei d² = Wert wirkt die volle Menge, darüber fällt sie mit dem Quadrat der Entfernung ab.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>When set, sources closer than &quot;Evil Unit Lenght&quot; count as if at that distance, so a single broadcast never adds more than its amount; when cleared, nearby sources can add far more (the charge is only capped at full afterwards, and a source at distance 0 divides by zero).</source>
        <translation>Gesetzt zählen Quellen, die näher als „Evil Unit Lenght“ sind, als lägen sie in genau dieser Entfernung, sodass eine einzelne Aussendung nie mehr als ihre Menge hinzufügt; nicht gesetzt können nahe Quellen weit mehr hinzufügen (die Ladung wird erst danach auf voll begrenzt, und eine Quelle in Entfernung 0 teilt durch null).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>After firing, the trigger is re-armed once the value is at least this far from the threshold on either side; it then fires again on the next crossing in its direction.</source>
        <translation>Nach dem Auslösen wird der Auslöser wieder scharf, sobald der Wert mindestens so weit von der Schwelle entfernt ist, auf welcher Seite auch immer; er löst dann beim nächsten Überschreiten in seiner Richtung erneut aus.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The voice log page never reads this value; the column header is drawn in its default font.</source>
        <translation>Die Sprachprotokoll-Seite liest diesen Wert nie; die Spaltenköpfe werden in ihrer Standardschrift gezeichnet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The voice log page never reads this value; the button takes its size from its &quot;Replay&quot; image.</source>
        <translation>Die Sprachprotokoll-Seite liest diesen Wert nie; die Schaltfläche übernimmt ihre Größe vom Bild „Replay“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The voice log page never reads this value; the button&apos;s text uses the button&apos;s default font.</source>
        <translation>Die Sprachprotokoll-Seite liest diesen Wert nie; der Text der Schaltfläche nutzt deren Standardschrift.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>confirmed</source>
        <translation>bestätigt</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>verified</source>
        <translation>im Spiel geprüft</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>assumption</source>
        <translation>Annahme</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The help text above is wrong</source>
        <translation>Der Hilfetext oben ist falsch</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The help text above is incomplete</source>
        <translation>Der Hilfetext oben ist unvollständig</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>The help text above is misleading</source>
        <translation>Der Hilfetext oben ist irreführend</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>From the game code ({source}):</source>
        <translation>Aus dem Spielcode ({source}):</translation>
    </message>
    <message>
        <location filename="../../zaxtools/fieldhelp.py"/>
        <source>{what} (game code: {source}):</source>
        <translation>{what} (Spielcode: {source}):</translation>
    </message>
</context>
<context>
    <name>gametest</name>
    <message>
        <location filename="../../zaxeditor/gametest.py"/>
        <source>Test in game – settings</source>
        <translation>Im Spiel testen – Einstellungen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/gametest.py"/>
        <source>Automatic (the least busy VM)</source>
        <translation>Automatisch (die am wenigsten beschäftigte VM)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/gametest.py"/>
        <source>(not mounted)</source>
        <translation>(nicht verbunden)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/gametest.py"/>
        <source>Seconds from the end of loading the level to the screenshot</source>
        <translation>Sekunden vom Ende des Ladens bis zum Bildschirmfoto</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/gametest.py"/>
        <source>Launcher default</source>
        <translation>Vorgabe des Launchers</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/gametest.py"/>
        <source>Original game (/Original: without the reimplementation)</source>
        <translation>Originalspiel (/Original: ohne die Reimplementierung)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/gametest.py"/>
        <source>VM:</source>
        <translation>VM:</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/gametest.py"/>
        <source>Screenshot after:</source>
        <translation>Bildschirmfoto nach:</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/gametest.py"/>
        <source>Difficulty:</source>
        <translation>Schwierigkeit:</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/gametest.py"/>
        <source>Submitting the job …</source>
        <translation>Auftrag wird abgeschickt …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/gametest.py"/>
        <source>Open a level first</source>
        <translation>Zuerst ein Level öffnen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/gametest.py"/>
        <source>A test run is still going on (job window).</source>
        <translation>Ein Testlauf läuft noch (Auftragsfenster).</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/gametest.py"/>
        <source>No VM share is mounted (the shares of zax-testtools&apos; vmtest/local.json).

Start the VM and its helper (zax-vm-helper.cmd) yourself and connect the share in the Finder (Go → Connect to Server, smb://&lt;VM&gt;/&lt;share&gt;). The editor never starts a VM.</source>
        <translation>Keine VM-Freigabe verbunden (die Freigaben aus vmtest/local.json von zax-testtools).

Die VM und ihren Helfer (zax-vm-helper.cmd) selbst starten und die Freigabe im Finder verbinden (Gehe zu → Mit Server verbinden, smb://&lt;VM&gt;/&lt;Freigabe&gt;). Der Editor startet nie eine VM.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/gametest.py"/>
        <source>The level must lie in the output folder below Levels to be tested in the game:
{folder}
Save it there with “Save as …”.</source>
        <translation>Zum Testen im Spiel muss das Level im Ausgabeordner unter Levels liegen:
{folder}
Mit „Speichern unter …“ dort speichern.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/gametest.py"/>
        <source>Test in game: {map}</source>
        <translation>Im Spiel testen: {map}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/gametest.py"/>
        <source>Test in game: job submitted for {map}</source>
        <translation>Im Spiel testen: Auftrag für {map} abgeschickt</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/gametest.py"/>
        <source>Job {id} submitted, waiting for the VM …</source>
        <translation>Auftrag {id} abgeschickt, warte auf die VM …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/gametest.py"/>
        <source>vmtest.py could not be started.</source>
        <translation>vmtest.py konnte nicht gestartet werden.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/gametest.py"/>
        <source>no result (exit code {code})</source>
        <translation>kein Ergebnis (Exit-Code {code})</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/gametest.py"/>
        <source>Job {id}: {result}</source>
        <translation>Auftrag {id}: {result}</translation>
    </message>
</context>
<context>
    <name>groundtool</name>
    <message>
        <location filename="../../zaxeditor/groundtool.py"/>
        <source>Paint ground</source>
        <translation>Boden malen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/groundtool.py"/>
        <source>Add textures</source>
        <translation>Texturen hinzufügen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/groundtool.py"/>
        <source>Search</source>
        <translation>Suchen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/groundtool.py"/>
        <source>{name}  ({width}×{height}, faulty in the game)</source>
        <translation>{name}  ({width}×{height}, im Spiel fehlerhaft)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/groundtool.py"/>
        <source>The game shows ground textures correctly only at 128×128.</source>
        <translation>Das Spiel stellt Bodentexturen nur in 128×128 richtig dar.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/groundtool.py"/>
        <source>New textures go to the end of the list; the existing
ground thus stays unchanged. Choose several with ⌘/⇧.
Textures already in the level are missing here.</source>
        <translation>Neue Texturen kommen ans Ende der Liste; der vorhandene
Boden bleibt so unverändert. Mehrere mit ⌘/⇧ wählen.
Bereits im Level vorhandene Texturen fehlen hier.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/groundtool.py"/>
        <location filename="../../zaxeditor/newleveldlg.py"/>
        <source>Add textures …</source>
        <translation>Texturen hinzufügen …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/groundtool.py"/>
        <location filename="../../zaxeditor/newleveldlg.py"/>
        <source>Remove texture</source>
        <translation>Textur entfernen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/groundtool.py"/>
        <location filename="../../zaxeditor/newleveldlg.py"/>
        <source>Texture up</source>
        <translation>Textur nach oben</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/groundtool.py"/>
        <location filename="../../zaxeditor/newleveldlg.py"/>
        <source>Texture down</source>
        <translation>Textur nach unten</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/groundtool.py"/>
        <source>Paint: drag with the left mouse button
Alt + click: pick up the texture
[ and ]: smaller/larger brush
B or Esc: stop painting

Transitions run through the textures
that lie between them in the list.
The order of the list therefore
determines the transitions.</source>
        <translation>Malen: linke Maustaste ziehen
Alt + Klick: Textur aufnehmen
[ und ]: Pinsel kleiner/größer
B oder Esc: Malen beenden

Übergänge entstehen über die Texturen,
die in der Liste dazwischen liegen.
Die Reihenfolge der Liste bestimmt
daher die Übergänge.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/groundtool.py"/>
        <source>Texture</source>
        <translation>Textur</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/groundtool.py"/>
        <source>Brush size: {size} (radius {radius} px)</source>
        <translation>Pinselgröße: {size} (Radius {radius} px)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/groundtool.py"/>
        <source>(unused)</source>
        <translation>(ungenutzt)</translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/groundtool.py"/>
        <source>%n grid point(s)</source>
        <translation>
            <numerusform>%n Rasterpunkt</numerusform>
            <numerusform>%n Rasterpunkte</numerusform>
        </translation>
    </message>
    <message>
        <location filename="../../zaxeditor/groundtool.py"/>
        <source>Texture picked up: {name}</source>
        <translation>Textur aufgenommen: {name}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/groundtool.py"/>
        <source>Choose a texture first</source>
        <translation>Zuerst eine Textur wählen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/groundtool.py"/>
        <source>Add texture: {names}</source>
        <translation>Textur hinzufügen: {names}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/groundtool.py"/>
        <source>The level needs at least one ground texture</source>
        <translation>Das Level braucht mindestens eine Bodentextur</translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/groundtool.py"/>
        <source>“{name}” lies on %n grid point(s).
Replace it with which texture?</source>
        <translation>
            <numerusform>„{name}“ liegt auf %n Rasterpunkt.
Durch welche Textur ersetzen?</numerusform>
            <numerusform>„{name}“ liegt auf %n Rasterpunkten.
Durch welche Textur ersetzen?</numerusform>
        </translation>
    </message>
    <message>
        <location filename="../../zaxeditor/groundtool.py"/>
        <source>Remove texture: {name}</source>
        <translation>Textur entfernen: {name}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/groundtool.py"/>
        <source>Move texture: {name}</source>
        <translation>Textur verschieben: {name}</translation>
    </message>
</context>
<context>
    <name>header</name>
    <message>
        <location filename="../../zaxtools/header.py"/>
        <source>General</source>
        <translation>Allgemein</translation>
    </message>
    <message>
        <location filename="../../zaxtools/header.py"/>
        <source>Music</source>
        <translation>Musik</translation>
    </message>
    <message>
        <location filename="../../zaxtools/header.py"/>
        <source>Team Info (start points)</source>
        <translation>Team Info (Startpunkte)</translation>
    </message>
    <message>
        <location filename="../../zaxtools/header.py"/>
        <source>Game types</source>
        <translation>Spieltypen</translation>
    </message>
    <message>
        <location filename="../../zaxtools/header.py"/>
        <source>Sound (Listener Settings)</source>
        <translation>Klang (Listener Settings)</translation>
    </message>
    <message>
        <location filename="../../zaxtools/header.py"/>
        <source>Mini map</source>
        <translation>Minimap</translation>
    </message>
    <message>
        <location filename="../../zaxtools/header.py"/>
        <source>Saved run-time state (leave unchanged)</source>
        <translation>Gespeicherter Laufzeitzustand (unverändert lassen)</translation>
    </message>
    <message>
        <location filename="../../zaxtools/header.py"/>
        <source>Other fields</source>
        <translation>Weitere Felder</translation>
    </message>
    <message>
        <location filename="../../zaxtools/header.py"/>
        <source>The ground grid (Plasma Ground) has the size of the level; changing the size is not supported here.</source>
        <translation>Das Bodenraster (Plasma Ground) hat die Größe des Levels; die Größe lässt sich hier nicht ändern.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/header.py"/>
        <source>The level&apos;s path below Levels/ without extension; it belongs to the file&apos;s place and is set when the level is created.</source>
        <translation>Pfad des Levels unter Levels/ ohne Endung; er gehört zum Ort der Datei und wird beim Anlegen des Levels gesetzt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/header.py"/>
        <source>No effect in the game: the game shows the mini map also with 1, no code reads the field (CLayerSaveData +0x168, zax-decomp/docs/ORIGINAL_BUGS.md 1.6).</source>
        <translation>Keine Wirkung im Spiel: das Spiel zeigt die Minimap auch mit 1, kein Code liest das Feld (CLayerSaveData +0x168, zax-decomp/docs/ORIGINAL_BUGS.md 1.6).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/header.py"/>
        <source>No effect in the game: the setter 0x4e6c20 passes the type to the empty function 0x4186e0 (zax-decomp/docs/ORIGINAL_BUGS.md 1.17).</source>
        <translation>Keine Wirkung im Spiel: der Setter 0x4e6c20 gibt den Typ an die leere Funktion 0x4186e0 weiter (zax-decomp/docs/ORIGINAL_BUGS.md 1.17).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/header.py"/>
        <source>No effect in the game: the setter 0x4e6c80 stores 0x7136f0, which no instruction reads (zax-decomp/docs/ORIGINAL_BUGS.md 1.17).</source>
        <translation>Keine Wirkung im Spiel: der Setter 0x4e6c80 speichert 0x7136f0, das kein Befehl liest (zax-decomp/docs/ORIGINAL_BUGS.md 1.17).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/header.py"/>
        <source>No effect in the game: the setter 0x4e6c50 stores 0x713698, which only the never reached debug drawing of CAmbientSoundAI reads (zax-decomp/docs/ORIGINAL_BUGS.md 1.17). The editor&apos;s AI overlays use it for the ambient sound fall-off.</source>
        <translation>Keine Wirkung im Spiel: der Setter 0x4e6c50 speichert 0x713698, das nur das nie erreichte Debug-Zeichnen von CAmbientSoundAI liest (zax-decomp/docs/ORIGINAL_BUGS.md 1.17). Die KI-Bereiche des Editors nutzen es für den Abfall der Umgebungsgeräusche.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/header.py"/>
        <source>Mapping of the world onto the mini map (176 × 121): mini map x = world x · X Scale + X Offset, y likewise. With a Scale of 0 (42 of 112 levels) the game computes the mapping itself from the visible area (level without the clipping margins). The editor sets it for new levels and uses it when it draws the mini map.</source>
        <translation>Abbildung der Welt auf die Minimap (176 × 121): Minimap-x = Welt-x · X Scale + X Offset, y ebenso. Bei Scale 0 (42 von 112 Levels) berechnet das Spiel die Abbildung selbst aus dem sichtbaren Bereich (Level ohne die Clipping-Ränder). Der Editor setzt sie bei neuen Levels und nutzt sie beim Zeichnen der Minimap.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/header.py"/>
        <source>Start point of the team (Team Info index = team number) when the game places a figure without a start point name, e.g. the “Select Map” dialog (F9).</source>
        <translation>Startpunkt des Teams (Index in Team Info = Teamnummer), wenn das Spiel eine Figur ohne Startpunktnamen platziert, z. B. der Dialog „Select Map“ (F9).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/header.py"/>
        <source>Start point instead of Spawn Point Name when the figure&apos;s player was placed before (when not empty; the multiplayer levels use “random”).</source>
        <translation>Startpunkt statt Spawn Point Name, wenn der Spieler der Figur schon einmal platziert wurde (wenn nicht leer; die Mehrspieler-Levels nutzen „random“).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/header.py"/>
        <source>A name of the model list (resource field). All 112 original levels have “!Unknown Model”.</source>
        <translation>Ein Name der Modellliste (Ressourcenfeld). Alle 112 Original-Levels haben „!Unknown Model“.</translation>
    </message>
</context>
<context>
    <name>importdlg</name>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Image (.frm16 + .frm)</source>
        <translation>Bild (.frm16 + .frm)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>One PNG as a game image below Cache, e.g. to replace an interface image</source>
        <translation>Ein PNG als Spielbild unter Cache, z. B. um ein Oberflächenbild zu ersetzen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Image sequence (.seq16 + .seq)</source>
        <translation>Bildsequenz (.seq16 + .seq)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>The PNGs in their numbered order as an image sequence below Cache</source>
        <translation>Die PNGs in der Reihenfolge ihrer Nummern als Bildsequenz unter Cache</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>New model (.mdl16 + .mdl)</source>
        <translation>Neues Modell (.mdl16 + .mdl)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>A decoration model with one sequence and one rotation below Cache/Models; it then appears in the model browser and can be placed</source>
        <translation>Ein Dekorationsmodell mit einer Sequenz und einer Drehung unter Cache/Models; es erscheint danach im Modell-Browser und kann platziert werden</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Frames of an existing model (copy)</source>
        <translation>Bilder eines vorhandenen Modells (Kopie)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>A copy of a shipped model with the frames of one sequence replaced; the copy has the model&apos;s path and wins in the game when copied below Data</source>
        <translation>Eine Kopie eines mitgelieferten Modells, in der die Bilder einer Sequenz ersetzt sind; die Kopie hat den Pfad des Modells und gewinnt im Spiel, wenn sie unter Data kopiert wird</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Bottom centre</source>
        <translation>Unten Mitte</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Centre</source>
        <translation>Mitte</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Top left</source>
        <translation>Oben links</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Custom</source>
        <translation>Eigener</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Import images</source>
        <translation>Bilder importieren</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Choose PNG files …</source>
        <translation>PNG-Dateien wählen …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>No images chosen. Several files make a series (in the order of the numbers in their names).</source>
        <translation>Keine Bilder gewählt. Mehrere Dateien ergeben eine Folge (in der Reihenfolge der Nummern in ihren Namen).</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Import as</source>
        <translation>Importieren als</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Folder</source>
        <translation>Ordner</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Model</source>
        <translation>Modell</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Sequence</source>
        <translation>Sequenz</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Rotation</source>
        <translation>Drehung</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>The anchor pixel from the top left: the game draws the image at the object&apos;s position minus the hot spot. For objects the foot (bottom centre) is usual; objects are sorted by that point.</source>
        <translation>Der Ankerpixel von oben links: Das Spiel zeichnet das Bild an der Position des Objekts minus Hotspot. Für Objekte ist der Fuß (unten Mitte) üblich; Objekte werden nach diesem Punkt sortiert.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Hot spot</source>
        <translation>Hotspot</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Frames per second (30 is the field default of the exe)</source>
        <translation>Bilder pro Sekunde (30 ist der Feld-Standard der exe)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Frames per second</source>
        <translation>Bilder pro Sekunde</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Transparent Mask: normal with soft edges; Blend Black Bias: smoke and fire; Blend Amplify Light: brightens what lies below (light)</source>
        <translation>Transparent Mask: normal mit weichen Kanten; Blend Black Bias: Rauch und Feuer; Blend Amplify Light: hellt auf, was darunter liegt (Licht)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Blit type</source>
        <translation>Blit-Typ</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Sorting offset in pixels: the object is drawn by its position Y plus this value (0 in most decoration models)</source>
        <translation>Sortierversatz in Pixeln: Das Objekt wird nach seiner Position Y plus diesem Wert gezeichnet (0 bei den meisten Dekorationsmodellen)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Sorting Y</source>
        <translation>Sorting Y</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Render On Ground (drawn below all objects)</source>
        <translation>Render On Ground (unter allen Objekten gezeichnet)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Auto-Animate (plays by the game time; without it a placed object shows frame 0 only)</source>
        <translation>Auto-Animate (läuft nach der Spielzeit; ohne zeigt ein platziertes Objekt nur Bild 0)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Import</source>
        <translation>Importieren</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Choose PNG files</source>
        <translation>PNG-Dateien wählen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>PNG images (*.png *.PNG)</source>
        <translation>PNG-Bilder (*.png *.PNG)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Not readable: {error}</source>
        <translation>Nicht lesbar: {error}</translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>%n image(s): </source>
        <translation>
            <numerusform>%n Bild: </numerusform>
            <numerusform>%n Bilder: </numerusform>
        </translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>All frames of the sequence</source>
        <translation>Alle Bilder der Sequenz</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Rotation {index} ({frames} frames)</source>
        <translation>Drehung {index} ({frames} Bilder)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Choose the PNG files first.</source>
        <translation>Zuerst die PNG-Dateien wählen.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Unknown model.</source>
        <translation>Unbekanntes Modell.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>The model has no such sequence.</source>
        <translation>Das Modell hat diese Sequenz nicht.</translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>This rotation has %n frame(s).</source>
        <translation>
            <numerusform>Diese Drehung hat %n Bild.</numerusform>
            <numerusform>Diese Drehung hat %n Bilder.</numerusform>
        </translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>The number of images must divide by the {rotations} rotations.</source>
        <translation>Die Zahl der Bilder muss durch die {rotations} Drehungen teilbar sein.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Size {w}×{h}</source>
        <translation>Größe {w}×{h}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>(the images differ in size)</source>
        <translation>(die Bilder sind unterschiedlich groß)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>First image: {opaque} opaque pixels, {soft} soft edge pixels (16 bit: alpha above 250 opaque, 6–250 soft, below dropped; 8 bit: five steps, below 26 dropped)</source>
        <translation>Erstes Bild: {opaque} deckende Pixel, {soft} weiche Randpixel (16 Bit: Alpha über 250 deckend, 6–250 weich, darunter entfällt; 8 Bit: fünf Stufen, unter 26 entfällt)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Writes into the output folder: {files}</source>
        <translation>Schreibt in den Ausgabeordner: {files}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Replaces: {files}</source>
        <translation>Ersetzt: {files}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Copied below Data/ the copy replaces the model everywhere in the game.</source>
        <translation>Unter Data/ kopiert ersetzt die Kopie das Modell überall im Spiel.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>A texture: written uncompressed and opaque, as the game&apos;s surfaces and ground need it.</source>
        <translation>Eine Textur: unkomprimiert und deckend geschrieben, wie die Flächen und der Boden des Spiels sie brauchen.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Replace the files in the output folder?
{files}</source>
        <translation>Die Dateien im Ausgabeordner ersetzen?
{files}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/importdlg.py"/>
        <source>Import failed: {error}</source>
        <translation>Import fehlgeschlagen: {error}</translation>
    </message>
</context>
<context>
    <name>levelcheck</name>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Error</source>
        <translation>Fehler</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Warning</source>
        <translation>Warnung</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Note</source>
        <translation>Hinweis</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Unknown class</source>
        <translation>Unbekannte Klasse</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Unexpected brace “{”</source>
        <translation>Unerwartete Klammer „{“</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Line too long</source>
        <translation>Zeile zu lang</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Count does not match the elements</source>
        <translation>Anzahl passt nicht zu den Elementen</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Model missing</source>
        <translation>Modell fehlt</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Sequence missing in the model</source>
        <translation>Sequenz fehlt im Modell</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Frames not divisible by the rotations</source>
        <translation>Bilder nicht durch Drehungen teilbar</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Bounce Factor outside 0 … 1</source>
        <translation>Bounce Factor außerhalb 0 … 1</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Empty name in a name list</source>
        <translation>Leerer Name in einer Namensliste</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Unknown name in a name list</source>
        <translation>Unbekannter Name in einer Namensliste</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Unknown name (the game exits)</source>
        <translation>Unbekannter Name (Spiel bricht ab)</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Dialogue script or line missing</source>
        <translation>Dialogskript oder -zeile fehlt</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Dialogue line without voice file</source>
        <translation>Dialogzeile ohne Sprachdatei</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Speaker without portrait</source>
        <translation>Sprecher ohne Porträt</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Current Frame not finite</source>
        <translation>Current Frame nicht endlich</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Random path with only one point</source>
        <translation>Zufallspfad mit nur einem Punkt</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>CShieldAI on a non-character</source>
        <translation>CShieldAI auf einem Nicht-Charakter</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>CSetHomeAction on a non-character</source>
        <translation>CSetHomeAction auf einem Nicht-Charakter</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>“~” in the file name</source>
        <translation>„~“ im Dateinamen</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Point without two numbers</source>
        <translation>Punkt ohne zwei Zahlen</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Colour without three numbers</source>
        <translation>Farbe ohne drei Zahlen</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Name not in the level</source>
        <translation>Name nicht im Level</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Item without Default Inventory Item</source>
        <translation>Gegenstand ohne Default Inventory Item</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Backslash in the level name</source>
        <translation>Backslash im Levelnamen</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Obsolete CTurretAI</source>
        <translation>Veraltete CTurretAI</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Obsolete COldBadPatrolAI</source>
        <translation>Veraltete COldBadPatrolAI</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>CChangeSoundEnvironmentTypeAction without effect</source>
        <translation>CChangeSoundEnvironmentTypeAction wirkungslos</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Placed Proximity Mine</source>
        <translation>Platzierte Proximity Mine</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Placed Companion Drone</source>
        <translation>Platzierte Companion Drone</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Fidget order not implemented</source>
        <translation>Fidget-Reihenfolge nicht umgesetzt</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>“Disable Mini-Map” without effect</source>
        <translation>„Disable Mini-Map“ wirkungslos</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>“Listener Settings” without effect</source>
        <translation>„Listener Settings“ wirkungslos</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>“Smooth Turning” off is ignored</source>
        <translation>„Smooth Turning“ aus wird ignoriert</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Polygon with more than 25 points</source>
        <translation>Polygon mit mehr als 25 Punkten</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>No way point network</source>
        <translation>Kein Wegpunktnetz</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Way point island</source>
        <translation>Wegpunkt-Insel</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>No way point near the object</source>
        <translation>Kein Wegpunkt nahe dem Objekt</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Object on a way point island</source>
        <translation>Objekt auf einer Wegpunkt-Insel</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Way point polygon without way points</source>
        <translation>Wegpunktpolygon ohne Wegpunkte</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Upper body on a parent that is not animated</source>
        <translation>Oberkörper an einem nicht animierten Elternobjekt</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>CWalkingUpperBodyAI without a walking root</source>
        <translation>CWalkingUpperBodyAI ohne laufende Wurzel</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>CSameAsParentAI on a child that is no upper body</source>
        <translation>CSameAsParentAI an einem Kind, das kein Oberkörper ist</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Child object without a model</source>
        <translation>Kindobjekt ohne Modell</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Upper body without the parent&apos;s sequence</source>
        <translation>Oberkörper ohne die Sequenz des Elternobjekts</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Transition to a level that does not exist</source>
        <translation>Übergang zu einem Level, das es nicht gibt</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>models (Cache/Models)</source>
        <translation>Modelle (Cache/Models)</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>sounds (Sounds)</source>
        <translation>Geräusche (Sounds)</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>items (Inventory/Item Definitions)</source>
        <translation>Gegenstände (Inventory/Item Definitions)</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>categories (Categories)</source>
        <translation>Kategorien (Categories)</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>damage types (Damage Types)</source>
        <translation>Schadensarten (Damage Types)</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>kinds of death (Death Behaviors)</source>
        <translation>Todesarten (Death Behaviors)</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>game types (Resources/Game Types)</source>
        <translation>Spielarten (Resources/Game Types)</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Canned Objects (Resources)</source>
        <translation>Canned Objects (Resources)</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>surfaces (Surface Types)</source>
        <translation>Oberflächen (Surface Types)</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>textures (Cache/Textures)</source>
        <translation>Texturen (Cache/Textures)</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>animated textures (Cache/Animated Textures)</source>
        <translation>animierte Texturen (Cache/Animated Textures)</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>water effects (Water Warp Effects)</source>
        <translation>Wassereffekte (Water Warp Effects)</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>music (Music)</source>
        <translation>Musik (Music)</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Level</source>
        <translation>Level</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>The file name contains “~”: the game&apos;s file search stops with a message (exit(-1)).</source>
        <translation>Der Dateiname enthält „~“: die Dateisuche des Spiels bricht mit einer Meldung ab (exit(-1)).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>File</source>
        <translation>Datei</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>“Disable Mini-Map” has no effect in the game: the game shows the mini map anyway, no code reads the field.</source>
        <translation>„Disable Mini-Map“ hat im Spiel keine Wirkung: das Spiel zeigt die Minimap trotzdem, kein Code liest das Feld.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>setter 0x4e6c20 passes the type to the empty function 0x4186e0 (ret 4)</source>
        <translation>Setter 0x4e6c20 gibt den Typ an die leere Funktion 0x4186e0 (ret 4)</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>setter 0x4e6c50 → 0x57c210 stores 0x713698, which only 0x57c220 reads (only caller 0x42de33 in the never reached debug drawing of CAmbientSoundAI)</source>
        <translation>Setter 0x4e6c50 → 0x57c210 speichert 0x713698, das nur 0x57c220 liest (einziger Aufrufer 0x42de33 in der nie erreichten Debug-Zeichnung von CAmbientSoundAI)</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>setter 0x4e6c80 → 0x57c230 stores 0x7136f0, which no instruction reads</source>
        <translation>Setter 0x4e6c80 → 0x57c230 speichert 0x7136f0, das kein Befehl liest</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>“Listener Settings/{key}” has no effect in the game ({why}). The value differs from the default ({default}) but changes nothing.</source>
        <translation>„Listener Settings/{key}“ hat im Spiel keine Wirkung ({why}). Der Wert weicht vom Standard ({default}) ab, ändert aber nichts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>The level name contains “\”: the game requires slashes “/” (&quot;Map Name *MAY NOT* contain backslashes&quot;).</source>
        <translation>Der Levelname enthält „\“: das Spiel verlangt Schrägstriche „/“ (&quot;Map Name *MAY NOT* contain backslashes&quot;).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>The class “{cls}” is not registered in the game: when loading, the game shows a message and exits (exit(-1)).</source>
        <translation>Die Klasse „{cls}“ ist im Spiel nicht registriert: beim Laden zeigt das Spiel eine Meldung und beendet sich (exit(-1)).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>COldBadPatrolAI is an obsolete class: its constructor reseeds the game&apos;s random generator (2342342), every such object changes the random sequence.</source>
        <translation>COldBadPatrolAI ist eine veraltete Klasse: ihr Konstruktor setzt den Zufallsgenerator des Spiels neu (2342342), jedes solche Objekt ändert die Zufallsfolge.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>CTurretAI is obsolete: on every touch the game reports &quot;Please change all CTurretAIs to Sentinon AIs&quot;. Better use CSentinonAI.</source>
        <translation>CTurretAI ist veraltet: das Spiel meldet bei jeder Berührung &quot;Please change all CTurretAIs to Sentinon AIs&quot;. Besser CSentinonAI verwenden.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>CChangeSoundEnvironmentTypeAction has no effect in the game: it passes the type to an empty function.</source>
        <translation>CChangeSoundEnvironmentTypeAction hat im Spiel keine Wirkung: sie gibt den Typ an eine leere Funktion.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>“Smooth Turning”=0 is ignored in CEntityBehaviorMoveToPos: the game tests the field with bit 8 already set, the turning always goes through the steering.</source>
        <translation>„Smooth Turning“=0 wird in CEntityBehaviorMoveToPos ignoriert: das Spiel prüft das Feld mit schon gesetztem Bit 8, die Drehung läuft immer über die Lenkung.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>The item “{item}” has no “Default Inventory Item”: picking it up then only gives the “Special Item” (nothing without one).</source>
        <translation>Der Gegenstand „{item}“ hat kein „Default Inventory Item“: die Aufnahme gibt dann nur das „Special Item“ (ohne eines nichts).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>The item “{item}” has no “Default Inventory Item”: the action only gives items whose definition has a Default Inventory Item.</source>
        <translation>Der Gegenstand „{item}“ hat kein „Default Inventory Item“: die Aktion gibt nur Gegenstände, deren Definition ein Default Inventory Item hat.</translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>The count ({count}) does not match the %n element(s): the game cannot process the state (default objects, crash when deleting or reading past the data).</source>
        <translation>
            <numerusform>Die Anzahl ({count}) passt nicht zu dem %n Element: das Spiel kann den Zustand nicht verarbeiten (Standardobjekte, Absturz beim Löschen oder Lesen hinter den Daten).</numerusform>
            <numerusform>Die Anzahl ({count}) passt nicht zu den %n Elementen: das Spiel kann den Zustand nicht verarbeiten (Standardobjekte, Absturz beim Löschen oder Lesen hinter den Daten).</numerusform>
        </translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>The line is {length} characters long (at most {limit}): the game&apos;s line reader does not find its end in the 0x400 byte buffer and stops reading there: everything after it is missing in the game (in the test: ground black, following objects missing).</source>
        <translation>Die Zeile ist {length} Zeichen lang (höchstens {limit}): der Zeilenleser des Spiels findet ihr Ende nicht im 0x400-Byte-Puffer und hört dort auf zu lesen: alles danach fehlt im Spiel (im Test: Boden schwarz, folgende Objekte fehlen).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>The model “{model}” does not exist: the game looks for it in the model list and exits (&quot;Fatal Not Found Error&quot;).</source>
        <translation>Das Modell „{model}“ gibt es nicht: das Spiel sucht es in der Modellliste und beendet sich (&quot;Fatal Not Found Error&quot;).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>“{name}” is not in the list {list}: the game looks for the name and exits (&quot;Fatal Not Found Error&quot;). (Which list belongs to the field is derived from the original data.)</source>
        <translation>„{name}“ steht nicht in der Liste {list}: das Spiel sucht den Namen und beendet sich (&quot;Fatal Not Found Error&quot;). (Welche Liste zum Feld gehört, ist aus den Originaldaten abgeleitet.)</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>“Current Frame”={value}: the game brings the frame into range by repeatedly adding/subtracting the frame count; with NaN, infinity or values this large (float32 from 2^24) that never ends.</source>
        <translation>„Current Frame“={value}: das Spiel bringt das Bild durch wiederholtes Addieren/Subtrahieren der Bildzahl in den Bereich; bei NaN, unendlich oder so großen Werten (float32 ab 2^24) endet das nie.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>The point “{value}” needs two numbers “x, y”: the game fills missing parts with pointer bits (garbage values).</source>
        <translation>Der Punkt „{value}“ braucht zwei Zahlen „x, y“: fehlende Teile füllt das Spiel mit Zeigerbits (Müllwerte).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>The colour “{value}” needs three numbers “r,g,b”: missing parts leave stack garbage or pointer bits in the colour.</source>
        <translation>Die Farbe „{value}“ braucht drei Zahlen „r,g,b“: fehlende Teile lassen Stapelmüll oder Zeigerbits in der Farbe.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>“{value}” contains an empty name between commas: the game looks for it in the list and exits (&quot;Fatal Not Found Error&quot;).</source>
        <translation>„{value}“ enthält einen leeren Namen zwischen Kommas: das Spiel sucht ihn in der Liste und beendet sich (&quot;Fatal Not Found Error&quot;).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>“{name}” is not in the list {list}: the game exits (&quot;Fatal Not Found Error&quot;). Write the names without spaces after the comma. (Which list belongs to the field is derived from the original data.)</source>
        <translation>„{name}“ steht nicht in der Liste {list}: das Spiel beendet sich (&quot;Fatal Not Found Error&quot;). Namen ohne Leerzeichen nach dem Komma schreiben. (Welche Liste zum Feld gehört, ist aus den Originaldaten abgeleitet.)</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>The dialogue script “Levels/{script}.RDS” does not exist: the game looks for it and exits.</source>
        <translation>Das Dialogskript „Levels/{script}.RDS“ gibt es nicht: das Spiel sucht es und beendet sich.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>The line “:{line}” is not in the script “{script}”: the game looks for it and exits.</source>
        <translation>Die Zeile „:{line}“ steht nicht im Skript „{script}“: das Spiel sucht sie und beendet sich.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>No voice file “{name}.wav” or “.ogg” below Levels: the line is shown without a voice (and scrolls at the fixed speed).</source>
        <translation>Keine Sprachdatei „{name}.wav“ oder „.ogg“ unter Levels: die Zeile erscheint ohne Stimme (und läuft mit der festen Geschwindigkeit).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>No portrait “{speaker} Portrait” in Cache/Inventory/Frames/Dialog Display/Portraits: the dialogue window shows “!Unknown Portrait”.</source>
        <translation>Kein Porträt „{speaker} Portrait“ in Cache/Inventory/Frames/Dialog Display/Portraits: das Dialogfenster zeigt „!Unknown Portrait“.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>The fidget order “{value}” is not implemented (the game reports &quot;Not Implemented Yet!!!&quot;).</source>
        <translation>Die Fidget-Reihenfolge „{value}“ ist nicht umgesetzt (das Spiel meldet &quot;Not Implemented Yet!!!&quot;).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>The fidget order “{value}” never moves on: the game reads the index after the last one taken and only wraps it.</source>
        <translation>Die Fidget-Reihenfolge „{value}“ kommt nie weiter: das Spiel liest den Index nach dem zuletzt genommenen und bricht ihn nur um.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>“Random” on the path “{path}” with only one point to choose ({points} points): the loop that looks for another point never ends (the game hangs).</source>
        <translation>„Random“ auf dem Pfad „{path}“ mit nur einem wählbaren Punkt ({points} Punkte): die Schleife, die einen anderen Punkt sucht, endet nie (das Spiel hängt).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>A “{” in an unexpected place: the game reports &quot;Found unexpected &apos;{&apos; while parsing class ...&quot; and exits.</source>
        <translation>Eine „{“ an unerwarteter Stelle: das Spiel meldet &quot;Found unexpected &apos;{&apos; while parsing class ...&quot; und beendet sich.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>The transition ({action}) leads to the level “{level}”, which is neither in the game data nor in the output folder. What the game does when such a transition runs was not tested.</source>
        <translation>Der Übergang ({action}) führt zum Level „{level}“, das weder in den Spieldaten noch im Ausgabeordner liegt. Was das Spiel tut, wenn ein solcher Übergang ausgelöst wird, wurde nicht getestet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>The sequence “{sequence}” does not exist in the model “{model}”: the game looks for it when loading and exits (&quot;Fatal Not Found Error&quot;), other places read a missing sequence without a test.</source>
        <translation>Die Sequenz „{sequence}“ gibt es im Modell „{model}“ nicht: das Spiel sucht sie beim Laden und beendet sich (&quot;Fatal Not Found Error&quot;), andere Stellen lesen eine fehlende Sequenz ohne Test.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>Sequence “{sequence}” of the model “{model}”: {frames} frames cannot be divided among {rotations} rotations. The game divides by the rotations and ends with &quot;There are not an equal number of frames per rotation…&quot; when it loads the sequence by its name.</source>
        <translation>Sequenz „{sequence}“ des Modells „{model}“: {frames} Bilder lassen sich nicht auf {rotations} Drehungen verteilen. Das Spiel teilt durch die Drehungen und endet mit &quot;There are not an equal number of frames per rotation…&quot;, wenn es die Sequenz über ihren Namen lädt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>The model “{model}” has the Bounce Factor {value}: as soon as the object bounces, the game reports &quot;Model %s has a Bounce Factor of %f.&quot; and exits.</source>
        <translation>Das Modell „{model}“ hat den Bounce Factor {value}: sobald das Objekt abprallt, meldet das Spiel &quot;Model %s has a Bounce Factor of %f.&quot; und beendet sich.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>A Proximity Mine placed in the level does nothing: it does not go off, not even with “Tries To Collide”=1, “Stationary”=0, the sequence “Deploy” or “Created By”. Only a mine laid by the player (key “Drop Mine”) explodes.</source>
        <translation>Eine im Level platzierte Proximity Mine tut nichts: sie zündet nicht, auch nicht mit „Tries To Collide“=1, „Stationary“=0, der Sequenz „Deploy“ oder „Created By“. Nur eine vom Spieler gelegte Mine (Taste „Drop Mine“) explodiert.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>A Companion Drone placed in the level does not follow Zax: its CCompanionAI finds no owner (“Created By” is no CEntityWalking when loading) and deletes itself, the drone stands still. Only a drone deployed by the player works.</source>
        <translation>Eine im Level platzierte Companion Drone folgt Zax nicht: ihre CCompanionAI findet keinen Besitzer („Created By“ ist beim Laden kein CEntityWalking) und löscht sich, die Drohne steht still. Nur eine vom Spieler ausgesetzte Drohne arbeitet.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>CShieldAI on an object of the class {cls}: the AI reads the character&apos;s inventory without a test, on a non-character the game ends.</source>
        <translation>CShieldAI auf einem Objekt der Klasse {cls}: die AI liest das Inventar des Charakters ohne Test, auf einem Nicht-Charakter endet das Spiel.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>The child object ({cls}) has no model: the game has nothing to draw for it (what else it does with it was not tested).</source>
        <translation>Das Kindobjekt ({cls}) hat kein Modell: das Spiel hat für es nichts zu zeichnen (was es sonst damit macht, wurde nicht getestet).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>The sequence “{sequence}” does not exist in the model “{model}” of the child object: the game looks for it when loading and exits (&quot;Fatal Not Found Error&quot;).</source>
        <translation>Die Sequenz „{sequence}“ gibt es im Modell „{model}“ des Kindobjekts nicht: das Spiel sucht sie beim Laden und beendet sich („Fatal Not Found Error“).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>The upper body&apos;s model “{model}” has no sequence “{sequence}”, the parent&apos;s at level start: the game hides the upper body while the parent plays a sequence its model lacks.</source>
        <translation>Das Modell „{model}“ des Oberkörpers hat keine Sequenz „{sequence}“, die des Elternobjekts beim Levelstart: das Spiel blendet den Oberkörper aus, solange das Elternobjekt eine Sequenz spielt, die seinem Modell fehlt.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>An upper body ({cls}) on a parent of the class {parent}, which is not animated: it does not turn with it (angle 0) and its CSameAsParentAI does nothing (it needs an animated parent).</source>
        <translation>Ein Oberkörper ({cls}) an einem Elternobjekt der Klasse {parent}, die nicht animiert ist: er dreht sich nicht mit (Winkel 0), und seine CSameAsParentAI tut nichts (sie braucht ein animiertes Elternobjekt).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>CWalkingUpperBodyAI on a child of a {parent}: its update takes the root as a walking character and calls it without a test (a null pointer when the root does not walk): the game ends right after loading. Use CSameAsParentAI there.</source>
        <translation>CWalkingUpperBodyAI an einem Kind eines {parent}: ihr Update nimmt die Wurzel als laufende Figur und ruft sie ohne Prüfung auf (ein Nullzeiger, wenn die Wurzel nicht läuft): das Spiel endet gleich nach dem Laden. Dort CSameAsParentAI verwenden.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>{ai} on a child of the class {cls}: the AI only works on a CEntityAnimatedUpperBody, here it does nothing.</source>
        <translation>{ai} an einem Kind der Klasse {cls}: die KI wirkt nur an einem CEntityAnimatedUpperBody, hier tut sie nichts.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>CSetHomeAction names “{name}” ({cls}): the action calls slot 129 on the target as a character without a test; a non-character crashes the game.</source>
        <translation>CSetHomeAction nennt „{name}“ ({cls}): die Aktion ruft auf dem Ziel als Charakter Slot 129 ohne Test auf; ein Nicht-Charakter bringt das Spiel zum Absturz.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>No object is called “{name}” ({action}, {key}). The action finds nothing; actions and AIs that read their target without a test crash the game when they run with a missing target.</source>
        <translation>Kein Objekt heißt „{name}“ ({action}, {key}). Die Aktion findet nichts; Aktionen und AIs, die ihr Ziel ohne Test lesen, bringen das Spiel zum Absturz, wenn sie mit einem fehlenden Ziel laufen.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>start point</source>
        <translation>Startpunkt</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>patrol path</source>
        <translation>Patrouillenpfad</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>patrol area</source>
        <translation>Patrouillengebiet</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>walking character</source>
        <translation>laufende Figur</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>The polygon has {points} points: the game reads only the first 25 and drops the rest, the outline it uses ends there.</source>
        <translation>Das Polygon hat {points} Punkte: das Spiel liest nur die ersten 25 und verwirft den Rest, der Umriss, den es benutzt, endet dort.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>The level has no way points (no way point polygon makes any), so the AI&apos;s path search never finds a way around an obstacle.</source>
        <translation>Das Level hat keine Wegpunkte (kein Wegpunktpolygon erzeugt welche), die Wegsuche der KI findet also nie einen Weg um ein Hindernis.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>The way point polygon makes no way point: its outline is too short, blocked by collision or every point lies within 20 pixels of a way point already made.</source>
        <translation>Das Wegpunktpolygon erzeugt keinen Wegpunkt: sein Umriss ist zu kurz, durch Kollision blockiert, oder jeder Punkt liegt höchstens 20 Pixel von einem schon erzeugten Wegpunkt entfernt.</translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>%n way point(s) are not connected to the main network ({main} way points): the gap is {gap} pixels, the game joins way points only up to {limit} pixels. The AI cannot find a path between them.</source>
        <translation>
            <numerusform>%n Wegpunkt ist nicht mit dem Hauptnetz ({main} Wegpunkte) verbunden: die Lücke ist {gap} Pixel groß, das Spiel verbindet Wegpunkte nur bis {limit} Pixel. Die KI findet keinen Weg dazwischen.</numerusform>
            <numerusform>%n Wegpunkte sind nicht mit dem Hauptnetz ({main} Wegpunkte) verbunden: die Lücke ist {gap} Pixel groß, das Spiel verbindet Wegpunkte nur bis {limit} Pixel. Die KI findet keinen Weg dazwischen.</numerusform>
        </translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>{what} at {x}, {y}: no way point within {reach} pixels; the path search gives up for paths from or to here (the AI only walks straight lines).</source>
        <translation>{what} bei {x}, {y}: kein Wegpunkt im Umkreis von {reach} Pixeln; die Wegsuche gibt für Wege von oder nach hier auf (die KI läuft nur gerade Strecken).</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>{what} at {x}, {y}: the nearest way point belongs to an island of {n} way points, not to the main network; paths to the rest of the level fail.</source>
        <translation>{what} bei {x}, {y}: der nächste Wegpunkt gehört zu einer Insel aus {n} Wegpunkten, nicht zum Hauptnetz; Wege in den Rest des Levels schlagen fehl.</translation>
    </message>
    <message>
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>No findings.</source>
        <translation>Keine Befunde.</translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>%n error(s)</source>
        <translation>
            <numerusform>%n Fehler</numerusform>
            <numerusform>%n Fehler</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>%n warning(s)</source>
        <translation>
            <numerusform>%n Warnung</numerusform>
            <numerusform>%n Warnungen</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxtools/levelcheck.py"/>
        <source>%n note(s)</source>
        <translation>
            <numerusform>%n Hinweis</numerusform>
            <numerusform>%n Hinweise</numerusform>
        </translation>
    </message>
</context>
<context>
    <name>levelsettings</name>
    <message>
        <location filename="../../zaxeditor/levelsettings.py"/>
        <source>Music of the originals …</source>
        <translation>Musik der Originale …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/levelsettings.py"/>
        <source>Set the three songs to a combination of the original levels, or remove the music.</source>
        <translation>Die drei Stücke auf eine Kombination der Original-Levels setzen oder die Musik entfernen.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/levelsettings.py"/>
        <source>No level open</source>
        <translation>Kein Level geöffnet</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/levelsettings.py"/>
        <source>Header of “{name}” (CLayerSaveData)</source>
        <translation>Kopf von „{name}“ (CLayerSaveData)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/levelsettings.py"/>
        <source>{field} – no effect in the game</source>
        <translation>{field} – keine Wirkung im Spiel</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/levelsettings.py"/>
        <source>Group in the exe: “{group}”.</source>
        <translation>Gruppe in der Exe: „{group}“.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/levelsettings.py"/>
        <source>No start point of this level is called “{name}”.</source>
        <translation>Kein Startpunkt dieses Levels heißt „{name}“.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/levelsettings.py"/>
        <source>Level settings</source>
        <translation>Level-Einstellungen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/levelsettings.py"/>
        <source>Only characters from Latin-1 are allowed.</source>
        <translation>Nur Zeichen aus Latin-1 sind erlaubt.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/levelsettings.py"/>
        <source>No music (Music Mix empty)</source>
        <translation>Keine Musik (Music Mix leer)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/levelsettings.py"/>
        <source>Change music</source>
        <translation>Musik ändern</translation>
    </message>
</context>
<context>
    <name>links</name>
    <message>
        <location filename="../../zaxtools/links.py"/>
        <source>Trigger</source>
        <translation>Auslöser</translation>
    </message>
    <message>
        <location filename="../../zaxtools/links.py"/>
        <source>Relay</source>
        <translation>Relay</translation>
    </message>
    <message>
        <location filename="../../zaxtools/links.py"/>
        <source>Door/switch</source>
        <translation>Tür/Schalter</translation>
    </message>
    <message>
        <location filename="../../zaxtools/links.py"/>
        <source>Place/path</source>
        <translation>Ort/Weg</translation>
    </message>
    <message>
        <location filename="../../zaxtools/links.py"/>
        <source>Target</source>
        <translation>Ziel</translation>
    </message>
</context>
<context>
    <name>modelchoice</name>
    <message>
        <location filename="../../zaxeditor/modelchoice.py"/>
        <source>Search: model path</source>
        <translation>Suche: Modellpfad</translation>
    </message>
</context>
<context>
    <name>models</name>
    <message>
        <location filename="../../zaxeditor/models.py"/>
        <source>Search a model, e.g. palm, rock, rogcoil</source>
        <translation>Modell suchen, z. B. palm, rock, rogcoil</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/models.py"/>
        <source>Place in the centre of the view</source>
        <translation>In Bildmitte platzieren</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/models.py"/>
        <source>All models ({count})</source>
        <translation>Alle Modelle ({count})</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/models.py"/>
        <source>Choose a model for details. Place it: double click or drag onto the map.</source>
        <translation>Modell wählen für Details. Platzieren: Doppelklick oder auf die Karte ziehen.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/models.py"/>
        <source>Own copy in the output folder (it wins over the shipped model when copied below Data).</source>
        <translation>Eigene Kopie im Ausgabeordner (sie gewinnt gegen das mitgelieferte Modell, wenn sie unter Data kopiert wird).</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/models.py"/>
        <source>Own model in the output folder (made by File → Import images).</source>
        <translation>Eigenes Modell im Ausgabeordner (erstellt mit Datei → Bilder importieren).</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/models.py"/>
        <source>occurs in no level</source>
        <translation>kommt in keinem Level vor</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/models.py"/>
        <source>Placed in levels.</source>
        <translation>In Levels platziert.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/models.py"/>
        <source>Not placed in any level, but used by the game.</source>
        <translation>In keinem Level platziert, aber vom Spiel verwendet.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/models.py"/>
        <source>Possibly used by the game.</source>
        <translation>Möglicherweise vom Spiel verwendet.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/models.py"/>
        <source>Never used by the game.</source>
        <translation>Vom Spiel nie verwendet.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/models.py"/>
        <source>Referenced by:</source>
        <translation>Verwendet von:</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/models.py"/>
        <source>Details:</source>
        <translation>Einzelheiten:</translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/models.py"/>
        <source>… and %n more</source>
        <translation>
            <numerusform>… und %n weiteres</numerusform>
            <numerusform>… und %n weitere</numerusform>
        </translation>
    </message>
    <message>
        <location filename="../../zaxeditor/models.py"/>
        <source>AI {ai}</source>
        <translation>KI {ai}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/models.py"/>
        <source>{count}× in levels, e.g. “{example}”</source>
        <translation>{count}× in Levels, z. B. „{example}“</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/models.py"/>
        <source>Occurs in no level (class from the model header).</source>
        <translation>Kommt in keinem Level vor (Klasse aus dem Modellkopf).</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/models.py"/>
        <source>Created with the default object of the model ({cls}).</source>
        <translation>Neu angelegt mit dem Standardobjekt des Modells ({cls}).</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/models.py"/>
        <source>The model has no default object: minimal object (enough for decoration, effects, pickups).</source>
        <translation>Das Modell hat kein Standardobjekt: Minimalobjekt (genügt für Deko, Effekte, Pickups).</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/models.py"/>
        <source>Model header not readable – minimal object. Figures lack AI and weapon.</source>
        <translation>Modellkopf nicht lesbar – Minimalobjekt. Bei Figuren fehlen KI und Waffe.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/models.py"/>
        <source>Without Zax.exe no default object – minimal object (File → Choose Zax.exe).</source>
        <translation>Ohne Zax.exe kein Standardobjekt – Minimalobjekt (Datei → Zax.exe wählen).</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/models.py"/>
        <source>Start sequence “{sequence}”.</source>
        <translation>Startsequenz „{sequence}“.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/models.py"/>
        <source>Sequences: {list}</source>
        <translation>Sequenzen: {list}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/models.py"/>
        <source>Open in the model viewer</source>
        <translation>Im Modell-Viewer öffnen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/models.py"/>
        <source>Attach to the selected object (child object)</source>
        <translation>An das ausgewählte Objekt anhängen (Kindobjekt)</translation>
    </message>
</context>
<context>
    <name>newlevel</name>
    <message>
        <location filename="../../zaxtools/newlevel.py"/>
        <source>Caves</source>
        <translation>Höhlen</translation>
    </message>
    <message>
        <location filename="../../zaxtools/newlevel.py"/>
        <source>Jungle</source>
        <translation>Dschungel</translation>
    </message>
    <message>
        <location filename="../../zaxtools/newlevel.py"/>
        <source>Hydroelectric plant</source>
        <translation>Wasserkraftwerk</translation>
    </message>
    <message>
        <location filename="../../zaxtools/newlevel.py"/>
        <source>Temple</source>
        <translation>Tempel</translation>
    </message>
    <message>
        <location filename="../../zaxtools/newlevel.py"/>
        <source>North</source>
        <translation>Norden</translation>
    </message>
    <message>
        <location filename="../../zaxtools/newlevel.py"/>
        <source>Mothership</source>
        <translation>Mutterschiff</translation>
    </message>
</context>
<context>
    <name>newleveldlg</name>
    <message>
        <location filename="../../zaxeditor/newleveldlg.py"/>
        <source>New level</source>
        <translation>Neues Level</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/newleveldlg.py"/>
        <source>like the name</source>
        <translation>wie der Name</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/newleveldlg.py"/>
        <source>Folder below Levels/</source>
        <translation>Ordner unter Levels/</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/newleveldlg.py"/>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/newleveldlg.py"/>
        <source>Description</source>
        <translation>Beschreibung</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/newleveldlg.py"/>
        <source>Size</source>
        <translation>Größe</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/newleveldlg.py"/>
        <source>Most original levels are 4097 × 4097 pixels.</source>
        <translation>Die meisten Original-Levels sind 4097 × 4097 Pixel groß.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/newleveldlg.py"/>
        <source>no music</source>
        <translation>ohne Musik</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/newleveldlg.py"/>
        <source>Music</source>
        <translation>Musik</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/newleveldlg.py"/>
        <source>Reverb of the sounds (Environment Type)</source>
        <translation>Hall der Geräusche (Environment Type)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/newleveldlg.py"/>
        <source>Environment</source>
        <translation>Umgebung</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/newleveldlg.py"/>
        <source>Ground textures (order = transitions when painting)</source>
        <translation>Bodentexturen (Reihenfolge = Übergänge beim Malen)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/newleveldlg.py"/>
        <source>Ground everywhere</source>
        <translation>Boden überall</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/newleveldlg.py"/>
        <source>Enter as the start level when saving (Rules.txt in the output folder)</source>
        <translation>Beim Speichern als Startlevel eintragen (Rules.txt im Ausgabeordner)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/newleveldlg.py"/>
        <source>Please enter a name.</source>
        <translation>Bitte einen Namen eingeben.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/newleveldlg.py"/>
        <source>Name and folder without \ : * ? &quot; &lt; &gt; | (paths only with /).</source>
        <translation>Name und Ordner ohne \ : * ? &quot; &lt; &gt; | (Pfade nur mit /).</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/newleveldlg.py"/>
        <source>Only characters from Latin-1 (no special characters from outside Western Europe).</source>
        <translation>Nur Zeichen aus Latin-1 (keine Sonderzeichen außerhalb Westeuropas).</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/newleveldlg.py"/>
        <source>Add at least one ground texture (+).</source>
        <translation>Mindestens eine Bodentextur hinzufügen (+).</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/newleveldlg.py"/>
        <source>File: {path}</source>
        <translation>Datei: {path}</translation>
    </message>
</context>
<context>
    <name>outputdir</name>
    <message>
        <location filename="../../zaxeditor/outputdir.py"/>
        <source>This folder lies inside the editor itself:
{path}

An update replaces it, and it may be read-only. Please choose a folder outside it, for example in your documents.</source>
        <translation>Dieser Ordner liegt im Editor selbst:
{path}

Ein Update ersetzt ihn, und er ist eventuell schreibgeschützt. Bitte wähle einen Ordner außerhalb, zum Beispiel in deinen Dokumenten.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/outputdir.py"/>
        <source>This folder lies inside the game data:
{path}

The editor never writes into the game data. Please choose another folder.</source>
        <translation>Dieser Ordner liegt in den Spieldaten:
{path}

Der Editor schreibt nie in die Spieldaten. Bitte wähle einen anderen Ordner.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/outputdir.py"/>
        <source>Nothing can be written into this folder:
{path}

{error}</source>
        <translation>In diesen Ordner kann nichts geschrieben werden:
{path}

{error}</translation>
    </message>
</context>
<context>
    <name>overlays</name>
    <message>
        <location filename="../../zaxeditor/overlays.py"/>
        <source>Triggers (oval, polygon, collision)</source>
        <translation>Auslöser (Oval, Polygon, Kollision)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/overlays.py"/>
        <source>Start points (facing direction)</source>
        <translation>Startpunkte (Blickrichtung)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/overlays.py"/>
        <source>Ambient sounds (radii, fall-off)</source>
        <translation>Umgebungsgeräusche (Radien, Abfall)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/overlays.py"/>
        <source>Patrol (area, path, way home)</source>
        <translation>Patrouille (Gebiet, Pfad, Heimweg)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/overlays.py"/>
        <source>Enemies (facing direction, turret range, distances)</source>
        <translation>Gegner (Blickrichtung, Geschütz-Reichweite, Abstände)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/overlays.py"/>
        <source>Looking around (limit angles, facing direction)</source>
        <translation>Umschauen (Grenzwinkel, Blickrichtung)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/overlays.py"/>
        <source>Landscape and damage (Landscape, radius)</source>
        <translation>Gelände und Schaden (Landscape, Radius)</translation>
    </message>
    <message>
        <location filename="../../zaxtools/overlays.py"/>
        <source>{ai}: facing direction</source>
        <translation>{ai}: Blickrichtung</translation>
    </message>
</context>
<context>
    <name>parts</name>
    <message numerus="yes">
        <location filename="../../zaxeditor/parts.py"/>
        <source>Remove %n object(s)</source>
        <translation>
            <numerusform>%n Objekt entfernen</numerusform>
            <numerusform>%n Objekte entfernen</numerusform>
        </translation>
    </message>
</context>
<context>
    <name>props</name>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>The game chooses the music every frame by the number of active enemies (figures with CSkeletonAI): track 0 (full music) at 4 or more; track 1 (medium) at 2–3 coming from the quiet music, or 10 s after the last change when the full one plays and fewer than 4 are active; track 2 (quiet) 10 s after the last change when the medium one plays and at most 1 enemy is active. The same pieces on two tracks: no audible change. Cross-fade: “Num Seconds To Switch”. CSwitchMusicTrackAction sets a track, the rule can change it again in the next frame.</source>
        <translation>Die Musik wählt das Spiel jede Frame nach der Zahl der aktiven Gegner (Figuren mit CSkeletonAI): Spur 0 (volle Musik) bei 4 oder mehr; Spur 1 (mittel) bei 2–3 aus der ruhigen Musik heraus oder 10 s nach dem letzten Wechsel, wenn die volle läuft und weniger als 4 aktiv sind; Spur 2 (ruhig) 10 s nach dem letzten Wechsel, wenn die mittlere läuft und höchstens 1 Gegner aktiv ist. Gleiche Stücke auf zwei Spuren: kein hörbarer Wechsel. Überblendung: „Num Seconds To Switch“. CSwitchMusicTrackAction setzt eine Spur, die Regel kann sie in der nächsten Frame wieder ändern.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>Track 0 (full music): plays as soon as 4 or more enemies are active in a frame.</source>
        <translation>Spur 0 (volle Musik): läuft, sobald in einer Frame 4 oder mehr Gegner aktiv sind.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>Track 1 (medium music): at 2–3 active enemies, or 10 s after the full music when fewer than 4 are active.</source>
        <translation>Spur 1 (mittlere Musik): bei 2–3 aktiven Gegnern, oder 10 s nach der vollen Musik, wenn weniger als 4 aktiv sind.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>Track 2 (quiet music): 10 s after the medium one when at most 1 enemy is active.</source>
        <translation>Spur 2 (ruhige Musik): 10 s nach der mittleren, wenn höchstens 1 Gegner aktiv ist.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>Duration of the cross-fade in seconds when the game changes the music track.</source>
        <translation>Dauer der Überblendung in Sekunden, wenn das Spiel die Musikspur wechselt.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>Change {field}</source>
        <translation>{field} ändern</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>Add {field}</source>
        <translation>{field} hinzufügen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>{field} – selection</source>
        <translation>{field} – Auswahl</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>The game reads the names separated by commas (without spaces).</source>
        <translation>Das Spiel liest die Namen durch Kommas getrennt (ohne Leerzeichen).</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>“{name}” – unknown, the game exits when loading</source>
        <translation>„{name}“ – unbekannt, das Spiel bricht beim Laden ab</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>All</source>
        <translation>Alle</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>None</source>
        <translation>Keine</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>Default (when the field is missing): {value}</source>
        <translation>Standard (fehlt das Feld): {value}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>(none)</source>
        <translation>(keiner)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>(spelling in the script: “{name}”)</source>
        <translation>(Schreibweise im Skript: „{name}“)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>(line not found)</source>
        <translation>(Zeile nicht gefunden)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>(no name)</source>
        <translation>(ohne Name)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>No object selected</source>
        <translation>Kein Objekt ausgewählt</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>Key</source>
        <translation>Schlüssel</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>Value</source>
        <translation>Wert</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>Dialogue in the script (text from the .RDS):</source>
        <translation>Dialoge im Skript (Text aus der .RDS):</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>Used by (double click jumps there):</source>
        <translation>Wird verwendet von (Doppelklick springt hin):</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>Refers to:</source>
        <translation>Verweist auf:</translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/props.py"/>
        <source>%n object(s) selected</source>
        <translation>
            <numerusform>%n Objekt ausgewählt</numerusform>
            <numerusform>%n Objekte ausgewählt</numerusform>
        </translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>{part}  ·  child object of {owner}</source>
        <translation>{part}  ·  Kindobjekt von {owner}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>“{name}” – not in the level</source>
        <translation>„{name}“ – nicht im Level</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>Level “{map}”, start point “{location}”   [transition: {action}]</source>
        <translation>Level „{map}“, Startpunkt „{location}“   [Übergang: {action}]</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>Transition into another level (New Map Name / New Location)</source>
        <translation>Übergang in ein anderes Level (New Map Name / New Location)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>Level “{map}” expires   [CExpireMapAction]</source>
        <translation>Level „{map}“ verfällt   [CExpireMapAction]</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>Acts on another level without switching to it (Other Map Name).
Presumably the game discards its saved state – unverified.</source>
        <translation>Wirkt auf ein anderes Level, ohne dorthin zu wechseln (Other Map Name).
Vermutlich verwirft das Spiel dessen gespeicherten Zustand – ungeprüft.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>“{name}”</source>
        <translation>„{name}“</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>Level “{map}”: {names}   [in the other level: {action}]</source>
        <translation>Level „{map}“: {names}   [im anderen Level: {action}]</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>COtherMapAction: performs the action in the level “Other Map Name” without switching
to it. The names given are objects of that level.</source>
        <translation>COtherMapAction: führt die Aktion im Level „Other Map Name“ aus, ohne dorthin
zu wechseln. Die genannten Namen sind Objekte jenes Levels.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>No object of this name in the level (wrong name, or the object only comes into being in the game, e.g. by cloning).</source>
        <translation>Kein Objekt dieses Namens im Level (Name falsch oder Objekt entsteht erst im Spiel, z. B. durch Klonen).</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>“{value}” is not a name of this list: the game exits when loading with “Fatal Not Found Error”.</source>
        <translation>„{value}“ ist kein Name dieser Liste: das Spiel bricht beim Laden mit „Fatal Not Found Error“ ab.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>Unknown or empty names ({names}): the game exits when loading with “Fatal Not Found Error”.</source>
        <translation>Unbekannte oder leere Namen ({names}): das Spiel bricht beim Laden mit „Fatal Not Found Error“ ab.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>Outside the limits: the game reads “{value}” as {result}.</source>
        <translation>Außerhalb der Grenzen: das Spiel liest „{value}“ als {result}.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>Default: {value}</source>
        <translation>Standard: {value}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>(empty)</source>
        <translation>(leer)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>Child object: double click selects it (fields, map, moving)</source>
        <translation>Kindobjekt: Doppelklick wählt es aus (Felder, Karte, Verschieben)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>“{value}” is not a file of the game&apos;s music folder (Music/, .wav or .ogg).</source>
        <translation>„{value}“ ist keine Datei des Musikordners des Spiels (Music/, .wav oder .ogg).</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>Edit selection …</source>
        <translation>Auswahl bearbeiten …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>Edit as text …</source>
        <translation>Als Text bearbeiten …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>Reset to default ({value})</source>
        <translation>Auf Standardwert zurücksetzen ({value})</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>empty</source>
        <translation>leer</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>Reset to default</source>
        <translation>Auf Standardwert zurücksetzen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>Default value from Zax.exe not known</source>
        <translation>Standardwert aus Zax.exe nicht bekannt</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>Select this child object</source>
        <translation>Dieses Kindobjekt auswählen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>Add field …</source>
        <translation>Feld hinzufügen …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>{field}  (default value unknown)</source>
        <translation>{field}  (Standardwert unbekannt)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/props.py"/>
        <source>{field} as text:</source>
        <translation>{field} als Text:</translation>
    </message>
</context>
<context>
    <name>rulesdlg</name>
    <message>
        <location filename="../../zaxeditor/rulesdlg.py"/>
        <source>This level exists neither in the game data nor in the output folder.</source>
        <translation>Dieses Level gibt es weder in den Spieldaten noch im Ausgabeordner.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/rulesdlg.py"/>
        <source>The start level has no start point “{name}”.</source>
        <translation>Das Startlevel hat keinen Startpunkt „{name}“.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/rulesdlg.py"/>
        <source>“New Game” starts this level: its path below Levels/ without extension.</source>
        <translation>„New Game“ startet dieses Level: sein Pfad unter Levels/ ohne Endung.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/rulesdlg.py"/>
        <source>The named start point of the start level where Zax begins.</source>
        <translation>Der benannte Startpunkt des Startlevels, an dem Zax beginnt.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/rulesdlg.py"/>
        <source>The value differs from the start point only by blanks at the end (the shipped Rules.txt has “Game Start ” and works).</source>
        <translation>Der Wert unterscheidet sich vom Startpunkt nur durch Leerzeichen am Ende (die mitgelieferte Rules.txt hat „Game Start “ und funktioniert).</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/rulesdlg.py"/>
        <source>Rules.txt – start level and game windows</source>
        <translation>Rules.txt – Startlevel und Spielfenster</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/rulesdlg.py"/>
        <source>Undo</source>
        <translation>Rückgängig</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/rulesdlg.py"/>
        <source>Redo</source>
        <translation>Wiederholen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/rulesdlg.py"/>
        <source>Load from the game data</source>
        <translation>Aus den Spieldaten laden</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/rulesdlg.py"/>
        <source>Discard the shown state and read the game&apos;s Rules.txt again.</source>
        <translation>Den angezeigten Stand verwerfen und die Rules.txt des Spiels neu lesen.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/rulesdlg.py"/>
        <source>Save to the output folder</source>
        <translation>In den Ausgabeordner speichern</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/rulesdlg.py"/>
        <source>Close</source>
        <translation>Schließen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/rulesdlg.py"/>
        <source>Read from the output folder: {path}</source>
        <translation>Gelesen aus dem Ausgabeordner: {path}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/rulesdlg.py"/>
        <source>Read from the game data: {path}</source>
        <translation>Gelesen aus den Spieldaten: {path}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/rulesdlg.py"/>
        <source>(changed, not saved)</source>
        <translation>(geändert, nicht gespeichert)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/rulesdlg.py"/>
        <source>Saved as {path}; copy it to DATA\Rules.txt of the game (back up the original).</source>
        <translation>Gespeichert als {path}; nach DATA\Rules.txt des Spiels kopieren (Original vorher sichern).</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/rulesdlg.py"/>
        <source>Only characters from Latin-1 are allowed.</source>
        <translation>Nur Zeichen aus Latin-1 sind erlaubt.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/rulesdlg.py"/>
        <source>Discard the changes?</source>
        <translation>Die Änderungen verwerfen?</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/rulesdlg.py"/>
        <source>The output folder lies inside the game data; the game&apos;s files are never overwritten.</source>
        <translation>Der Ausgabeordner liegt in den Spieldaten; die Dateien des Spiels werden nie überschrieben.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/rulesdlg.py"/>
        <source>Cannot be saved: {error}</source>
        <translation>Kann nicht gespeichert werden: {error}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/rulesdlg.py"/>
        <source>Save the changed Rules.txt?</source>
        <translation>Die geänderte Rules.txt speichern?</translation>
    </message>
</context>
<context>
    <name>scene</name>
    <message>
        <location filename="../../zaxeditor/scene.py"/>
        <source>Insert point</source>
        <translation>Punkt einfügen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/scene.py"/>
        <source>A polygon needs at least 3 points.</source>
        <translation>Ein Polygon braucht mindestens 3 Punkte.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/scene.py"/>
        <source>Delete point</source>
        <translation>Punkt löschen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/scene.py"/>
        <source>Insert point here</source>
        <translation>Punkt hier einfügen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/scene.py"/>
        <source>Point {number}: drag = move, right click = delete</source>
        <translation>Punkt {number}: ziehen = verschieben, Rechtsklick = löschen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/scene.py"/>
        <source>Move point</source>
        <translation>Punkt verschieben</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/scene.py"/>
        <source>Delete point {number}</source>
        <translation>Punkt {number} löschen</translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/scene.py"/>
        <source>Move %n object(s)</source>
        <translation>
            <numerusform>%n Objekt verschieben</numerusform>
            <numerusform>%n Objekte verschieben</numerusform>
        </translation>
    </message>
</context>
<context>
    <name>settingsdlg</name>
    <message>
        <location filename="../../zaxeditor/settingsdlg.py"/>
        <source>Settings</source>
        <translation>Einstellungen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/settingsdlg.py"/>
        <source>Files</source>
        <translation>Dateien</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/settingsdlg.py"/>
        <source>Game data</source>
        <translation>Spieldaten</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/settingsdlg.py"/>
        <source>Choose …</source>
        <translation>Wählen …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/settingsdlg.py"/>
        <source>Language pack</source>
        <translation>Sprachpaket</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/settingsdlg.py"/>
        <source>None</source>
        <translation>Keines</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/settingsdlg.py"/>
        <source>Output folder</source>
        <translation>Ausgabeordner</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/settingsdlg.py"/>
        <source>Zax.exe</source>
        <translation>Zax.exe</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/settingsdlg.py"/>
        <source>Saving</source>
        <translation>Speichern</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/settingsdlg.py"/>
        <source>Editor</source>
        <translation>Editor</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/settingsdlg.py"/>
        <source>Language (at the next start)</source>
        <translation>Sprache (beim nächsten Start)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/settingsdlg.py"/>
        <source>(none)</source>
        <translation>(keine)</translation>
    </message>
</context>
<context>
    <name>surfacedlg</name>
    <message>
        <location filename="../../zaxeditor/surfacedlg.py"/>
        <source>Texture</source>
        <translation>Textur</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/surfacedlg.py"/>
        <source>Fixed texture from Cache/Textures, e.g. water, lava, snow, temple floor</source>
        <translation>Feste Textur aus Cache/Textures, z. B. Wasser, Lava, Schnee, Tempelboden</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/surfacedlg.py"/>
        <source>Animated water</source>
        <translation>Animiertes Wasser</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/surfacedlg.py"/>
        <source>Image sequence from Cache/Animated Textures, runs in a loop</source>
        <translation>Bildfolge aus Cache/Animated Textures, läuft in Schleife</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/surfacedlg.py"/>
        <source>Black</source>
        <translation>Schwarz</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/surfacedlg.py"/>
        <source>Black cover, e.g. cave edges; does not lie on the ground (On Ground=0)</source>
        <translation>Schwarze Abdeckung, z. B. Höhlenränder; liegt nicht am Boden (On Ground=0)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/surfacedlg.py"/>
        <source>Draw surface</source>
        <translation>Fläche zeichnen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/surfacedlg.py"/>
        <source>Search texture</source>
        <translation>Textur suchen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/surfacedlg.py"/>
        <source>Only 128×128 textures: the game shows smaller ones faultily as ground.</source>
        <translation>Nur 128×128-Texturen: kleinere zeigt das Spiel als Boden fehlerhaft.</translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/surfacedlg.py"/>
        <source>%n frame(s), {fps} frames/s</source>
        <translation>
            <numerusform>%n Bild, {fps} Bilder/s</numerusform>
            <numerusform>%n Bilder, {fps} Bilder/s</numerusform>
        </translation>
    </message>
    <message>
        <location filename="../../zaxeditor/surfacedlg.py"/>
        <source>blocking (Collideable) – the surface is also an obstacle, e.g. lava</source>
        <translation>blockiert (Collideable) – Fläche ist zugleich ein Hindernis, z. B. Lava</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/surfacedlg.py"/>
        <source>on the ground (On Ground=1) – below the objects instead of above them,
e.g. a dark pit</source>
        <translation>am Boden (On Ground=1) – unter den Objekten statt darüber,
z. B. dunkle Grube</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/surfacedlg.py"/>
        <source>Then draw the surface on the map: click = point,
double click/Return = done, Esc = cancel.</source>
        <translation>Danach die Fläche auf der Karte zeichnen: Klick = Punkt,
Doppelklick/Return = fertig, Esc = abbrechen.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/surfacedlg.py"/>
        <source>Draw</source>
        <translation>Zeichnen</translation>
    </message>
</context>
<context>
    <name>transitiondlg</name>
    <message>
        <location filename="../../zaxeditor/transitiondlg.py"/>
        <source>Transition to another level</source>
        <translation>Übergang zu anderem Level</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/transitiondlg.py"/>
        <source>Creates an invisible trigger (Editor/Trigger Icon, Proximity) in the centre of the view. When Zax enters it, the game switches to the target level at the chosen start point.</source>
        <translation>Legt einen unsichtbaren Auslöser (Editor/Trigger Icon, Proximity) in der Bildmitte an. Betritt Zax ihn, wechselt das Spiel ins Ziel-Level zum gewählten Startpunkt.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/transitiondlg.py"/>
        <source>Target level</source>
        <translation>Ziel-Level</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/transitiondlg.py"/>
        <source>Start point there</source>
        <translation>Startpunkt dort</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/transitiondlg.py"/>
        <source>Field “Return to map”: what the game does with this level in memory when Zax leaves it.
definitely soon – stays loaded (most frequent value)
probably soon – stays loaded, moves to the end of the list (last used)
unlikely soon – is released (like CFlushMapAction)
never – expires (like CExpireMapAction)</source>
        <translation>Feld „Return to map“: Was das Spiel mit diesem Level im Speicher macht, wenn Zax es verlässt.
definitely soon – bleibt geladen (häufigster Wert)
probably soon – bleibt geladen, rückt ans Ende der Liste (zuletzt benutzt)
unlikely soon – wird freigegeben (wie CFlushMapAction)
never – verfällt (wie CExpireMapAction)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/transitiondlg.py"/>
        <source>Choose the target level.</source>
        <translation>Ziel-Level wählen.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/transitiondlg.py"/>
        <source>⚠ This level exists neither in the game data nor in the output folder.</source>
        <translation>⚠ Dieses Level gibt es weder in den Spieldaten noch im Ausgabeordner.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/transitiondlg.py"/>
        <source>The target level has no named start point. Create one there first (Edit → Insert start point) or enter a name here.</source>
        <translation>Im Ziel-Level gibt es keinen benannten Startpunkt. Dort zuerst einen anlegen (Bearbeiten → Startpunkt einfügen) oder hier einen Namen eintragen.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/transitiondlg.py"/>
        <source>⚠ “{name}” does not exist in the target level yet – create it there as a start point.</source>
        <translation>⚠ „{name}“ gibt es im Ziel-Level noch nicht – dort als Startpunkt anlegen.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/transitiondlg.py"/>
        <source>Start point present. Tip: in the target level do not put the start point inside an exit.</source>
        <translation>Startpunkt vorhanden. Tipp: im Ziel-Level den Startpunkt nicht in einen Ausgang legen.</translation>
    </message>
</context>
<context>
    <name>viewer</name>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Checkerboard</source>
        <translation>Schachbrett</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Black</source>
        <translation>Schwarz</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Dark grey</source>
        <translation>Dunkelgrau</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Ground texture</source>
        <translation>Bodentextur</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Hot spot</source>
        <translation>Hot Spot</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Frame rectangles</source>
        <translation>Frame-Rechtecke</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Sorting Y and cutting lines</source>
        <translation>Sorting Y und Schnittlinien</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Bounds Poly (collision)</source>
        <translation>Bounds Poly (Kollision)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Frame box of the sequence file</source>
        <translation>Frame-Box der Sequenzdatei</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>shadow</source>
        <translation>Schatten</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>ground</source>
        <translation>Boden</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>base</source>
        <translation>Basis</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>on top</source>
        <translation>darüber</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Choose a model, image sequence, font or image on the left.</source>
        <translation>Links ein Modell, eine Bildsequenz, eine Schrift oder ein Bild wählen.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>x {x}, y {y} (from the hot spot) · RGB {r}, {g}, {b}</source>
        <translation>x {x}, y {y} (vom Hot Spot) · RGB {r}, {g}, {b}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source> · alpha {a}</source>
        <translation> · Alpha {a}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Nothing open</source>
        <translation>Nichts geöffnet</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Index {i}: RGB {r}, {g}, {b}</source>
        <translation>Index {i}: RGB {r}, {g}, {b}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source> (used by this frame)</source>
        <translation> (von diesem Frame benutzt)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Browser</source>
        <translation>Browser</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Sequences and layers</source>
        <translation>Sequenzen und Ebenen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Properties</source>
        <translation>Eigenschaften</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Frame</source>
        <translation>Frame</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Sounds and frame triggers</source>
        <translation>Sounds und Frame-Trigger</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Play / pause (Space)</source>
        <translation>Abspielen / Pause (Leertaste)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Previous frame (,)</source>
        <translation>Vorheriger Frame (,)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Next frame (.)</source>
        <translation>Nächster Frame (.)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Facing</source>
        <translation>Blickrichtung</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Facing angle as “Start FacingAngle” (0° to the right, 90° towards the viewer); each layer shows the rotation the game picks for it (mdl.rotation_index).</source>
        <translation>Blickrichtung wie „Start FacingAngle“ (0° nach rechts, 90° zum Betrachter); jede Ebene zeigt die Rotation, die das Spiel für sie wählt (mdl.rotation_index).</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Previous rotation</source>
        <translation>Vorherige Rotation</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Next rotation</source>
        <translation>Nächste Rotation</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>All rotations</source>
        <translation>Alle Rotationen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Background</source>
        <translation>Hintergrund</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Alpha</source>
        <translation>Alpha</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Show the opacity of the drawn frames as grey (white = opaque, grey = soft edge) instead of the image.</source>
        <translation>Die Deckkraft der gezeichneten Frames als Grau zeigen (weiß = deckend, grau = weiche Kante) statt des Bildes.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Zoom out (−)</source>
        <translation>Verkleinern (−)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Zoom in (+)</source>
        <translation>Vergrößern (+)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Fit (0); 1:1 with 1</source>
        <translation>Einpassen (0); 1:1 mit 1</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Sequence</source>
        <translation>Sequenz</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Frames</source>
        <translation>Frames</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Rot.</source>
        <translation>Rot.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>fps</source>
        <translation>fps</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Render mode</source>
        <translation>Render-Modus</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Layers of the active sequence (drawing order):</source>
        <translation>Ebenen der aktiven Sequenz (Zeichenreihenfolge):</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Palette (Palettes/GamePalette.pal):</source>
        <translation>Palette (Palettes/GamePalette.pal):</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Where</source>
        <translation>Wo</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Action</source>
        <translation>Aktion</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Sound</source>
        <translation>Sound</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>File</source>
        <translation>Datei</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Play trigger sounds during playback</source>
        <translation>Trigger-Sounds beim Abspielen hören</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Open file …</source>
        <translation>Datei öffnen …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Search in the browser</source>
        <translation>Im Browser suchen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Choose game data (folder or Data.dat) …</source>
        <translation>Spieldaten wählen (Ordner oder Data.dat) …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Close window</source>
        <translation>Fenster schließen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>View</source>
        <translation>Ansicht</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Play / pause</source>
        <translation>Abspielen / Pause</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Previous frame</source>
        <translation>Vorheriger Frame</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Next frame</source>
        <translation>Nächster Frame</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Zoom in</source>
        <translation>Vergrößern</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Zoom out</source>
        <translation>Verkleinern</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Fit</source>
        <translation>Einpassen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Actual size (1:1)</source>
        <translation>Originalgröße (1:1)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>16 bit (.mdl16, .seq16, .frm16)</source>
        <translation>16 Bit (.mdl16, .seq16, .frm16)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>8 bit (.mdl, .seq, .frm; 256 colours)</source>
        <translation>8 Bit (.mdl, .seq, .frm; 256 Farben)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Export</source>
        <translation>Export</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>View as PNG …</source>
        <translation>Ansicht als PNG …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Sheet of the sequence as in the view (all rotations × frames) …</source>
        <translation>Bogen der Sequenz wie in der Ansicht (alle Rotationen × Frames) …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Frames of the sequence as an RGBA sprite sheet …</source>
        <translation>Frames der Sequenz als RGBA-Sprite-Sheet …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Whole model as an RGBA sprite sheet …</source>
        <translation>Ganzes Modell als RGBA-Sprite-Sheet …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Current frame of the sequence as an RGBA PNG …</source>
        <translation>Aktuellen Frame der Sequenz als RGBA-PNG …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Rotation as an image sequence (.seq16/.seq, the game&apos;s encoder) …</source>
        <translation>Rotation als Bildsequenz (.seq16/.seq, Encoder des Spiels) …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Current frame as an image (.frm16/.frm, the game&apos;s encoder) …</source>
        <translation>Aktuellen Frame als Bild (.frm16/.frm, Encoder des Spiels) …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Window</source>
        <translation>Fenster</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Default layout</source>
        <translation>Standard-Anordnung</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Choose the Data.dat of the game data (cancel for a folder “Data”)</source>
        <translation>Data.dat der Spieldaten wählen (Abbrechen für einen Ordner „Data“)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Game data (*.dat *.DAT *.zip *.ZIP);;All files (*)</source>
        <translation>Spieldaten (*.dat *.DAT *.zip *.ZIP);;Alle Dateien (*)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Choose the folder “Data” of the game data</source>
        <translation>Ordner „Data“ der Spieldaten wählen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Game data not readable:
{path}

{error}</source>
        <translation>Spieldaten nicht lesbar:
{path}

{error}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>No models found in:
{path}</source>
        <translation>Keine Modelle gefunden in:
{path}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Not found in the game data: {path}</source>
        <translation>Nicht in den Spieldaten gefunden: {path}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Open a model, sequence or image</source>
        <translation>Modell, Sequenz oder Bild öffnen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Zax graphics (*.mdl16 *.mdl *.seq16 *.seq *.frm16 *.frm);;All files (*)</source>
        <translation>Zax-Grafik (*.mdl16 *.mdl *.seq16 *.seq *.frm16 *.frm);;Alle Dateien (*)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Not a model, image sequence or image: {path}</source>
        <translation>Kein Modell, keine Bildsequenz und kein Bild: {path}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Not readable: {path}

{error}</source>
        <translation>Nicht lesbar: {path}

{error}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Render On Ground</source>
        <translation>Render On Ground</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>“Editor Only”: a handle of the editor; the game never draws it.</source>
        <translation>„Editor Only“: ein Griff des Editors; das Spiel zeichnet ihn nie.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Ground layers (“Render On Ground”) are drawn first, then the others, each by its sorting offset and layer number; a shadow layer as Transparent Mask.</source>
        <translation>Bodenebenen („Render On Ground“) werden zuerst gezeichnet, dann die übrigen, jeweils nach Sortier-Offset und Ebenennummer; eine Schattenebene als Transparent Mask.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Grey: “Editor Only”, not drawn by the game.</source>
        <translation>Grau: „Editor Only“, vom Spiel nicht gezeichnet.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Model header</source>
        <translation>Modellkopf</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Without Zax.exe the model header cannot be read (no help texts).</source>
        <translation>Ohne Zax.exe ist der Modellkopf nicht lesbar (keine Hilfetexte).</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Model header not readable.</source>
        <translation>Modellkopf nicht lesbar.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Image sequences, fonts and images have no sounds or frame triggers.</source>
        <translation>Bildsequenzen, Schriften und Bilder haben keine Sounds und keine Frame-Trigger.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Without Zax.exe the model header and the frame triggers cannot be read.</source>
        <translation>Ohne Zax.exe sind Modellkopf und Frame-Trigger nicht lesbar.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>{sequence}, frame {frame}</source>
        <translation>{sequence}, Frame {frame}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>forward</source>
        <translation>vorwärts</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>backward</source>
        <translation>rückwärts</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Frame triggers not readable in: {list}</source>
        <translation>Frame-Trigger nicht lesbar in: {list}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>The model has no sounds and no frame triggers.</source>
        <translation>Das Modell hat keine Sounds und keine Frame-Trigger.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Double click plays a sound. A trigger fires when the playing sequence reaches its frame.</source>
        <translation>Doppelklick spielt einen Sound. Ein Trigger löst aus, wenn die laufende Sequenz seinen Frame erreicht.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>not found</source>
        <translation>nicht gefunden</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Qt Multimedia is not available: no sound.</source>
        <translation>Qt Multimedia ist nicht verfügbar: kein Ton.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Sound {path} cannot be played: {error}</source>
        <translation>Sound {path} kann nicht abgespielt werden: {error}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Sound output failed: {error}</source>
        <translation>Tonausgabe fehlgeschlagen: {error}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Sound: {path}</source>
        <translation>Sound: {path}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Frame {i} / {n} · {fps:g} fps · {t:.2f} of {dur:.2f} s</source>
        <translation>Frame {i} / {n} · {fps:g} fps · {t:.2f} von {dur:.2f} s</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>rotation {r} of {n}</source>
        <translation>Rotation {r} von {n}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>&lt;b&gt;{layer}&lt;/b&gt;: frame {k} of rotation {r} · {w}×{h} · hot spot {hx}, {hy} · {bpp} bit {rle}&lt;br&gt;&lt;span style=&quot;color:gray&quot;&gt;blocks (bytes): {blocks} · {opaque} opaque, {semi} semi-transparent pixels&lt;/span&gt;</source>
        <translation>&lt;b&gt;{layer}&lt;/b&gt;: Frame {k} der Rotation {r} · {w}×{h} · Hot Spot {hx}, {hy} · {bpp} Bit {rle}&lt;br&gt;&lt;span style=&quot;color:gray&quot;&gt;Blöcke (Bytes): {blocks} · {opaque} deckende, {semi} halbtransparente Pixel&lt;/span&gt;</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>RLE</source>
        <translation>RLE</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>raw</source>
        <translation>roh</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>No layer draws anything at this frame (an empty frame, or the index lies past a layer&apos;s frames).</source>
        <translation>Bei diesem Frame zeichnet keine Ebene etwas (ein leerer Frame, oder der Index liegt hinter den Frames einer Ebene).</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>8 bit: the five blocks with the game&apos;s opacity steps 1, 0.8, 0.6, 0.4, 0.2, blended in float; the game takes the nearest palette colour of every blend.</source>
        <translation>8 Bit: die fünf Blöcke mit den Deckkraftstufen des Spiels 1, 0,8, 0,6, 0,4, 0,2, in Gleitkomma gemischt; das Spiel nimmt für jede Mischung die nächste Palettenfarbe.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Zax model viewer</source>
        <translation>Zax-Modell-Viewer</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Not into the game data or the game folder: the viewer never writes there. Choose another folder.</source>
        <translation>Nicht in die Spieldaten oder den Spielordner: der Viewer schreibt dort nie. Bitte einen anderen Ordner wählen.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Nothing open.</source>
        <translation>Nichts geöffnet.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Written: {path}</source>
        <translation>Geschrieben: {path}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Export the view as PNG</source>
        <translation>Ansicht als PNG exportieren</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>PNG image (*.png)</source>
        <translation>PNG-Bild (*.png)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Export the sheet of the sequence</source>
        <translation>Bogen der Sequenz exportieren</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>No frames to export.</source>
        <translation>Keine Frames zum Exportieren.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Export the frames of the sequence</source>
        <translation>Frames der Sequenz exportieren</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Export the whole model</source>
        <translation>Ganzes Modell exportieren</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>The current frame is empty.</source>
        <translation>Der aktuelle Frame ist leer.</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Export the current frame as PNG</source>
        <translation>Aktuellen Frame als PNG exportieren</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Export the rotation as an image sequence</source>
        <translation>Rotation als Bildsequenz exportieren</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Image sequence (*{ext})</source>
        <translation>Bildsequenz (*{ext})</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Cannot be encoded: {error}</source>
        <translation>Nicht kodierbar: {error}</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Export the current frame as an image</source>
        <translation>Aktuellen Frame als Bild exportieren</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Image (*{ext})</source>
        <translation>Bild (*{ext})</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewer.py"/>
        <source>Choose the game data: File → Choose game data …</source>
        <translation>Spieldaten wählen: Datei → Spieldaten wählen …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewerbrowser.py"/>
        <source>Models</source>
        <translation>Modelle</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewerbrowser.py"/>
        <source>Image sequences</source>
        <translation>Bildsequenzen</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewerbrowser.py"/>
        <source>Images</source>
        <translation>Bilder</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewerbrowser.py"/>
        <source>Fonts</source>
        <translation>Schriften</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewerbrowser.py"/>
        <source>Search, e.g. crater, fire, gold</source>
        <translation>Suchen, z. B. crater, fire, gold</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/viewerbrowser.py"/>
        <source>{kind} ({count})</source>
        <translation>{kind} ({count})</translation>
    </message>
</context>
<context>
    <name>waynet</name>
    <message>
        <location filename="../../zaxeditor/waynet.py"/>
        <source>Computing the way point network …</source>
        <translation>Wegpunktnetz wird berechnet …</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/waynet.py"/>
        <source>Way point network failed: {error}</source>
        <translation>Wegpunktnetz fehlgeschlagen: {error}</translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/waynet.py"/>
        <source>Way point network: %n way point(s)</source>
        <translation>
            <numerusform>Wegpunktnetz: %n Wegpunkt</numerusform>
            <numerusform>Wegpunktnetz: %n Wegpunkte</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/waynet.py"/>
        <source>%n segment(s)</source>
        <translation>
            <numerusform>%n Verbindung</numerusform>
            <numerusform>%n Verbindungen</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <location filename="../../zaxeditor/waynet.py"/>
        <source>%n island(s)</source>
        <translation>
            <numerusform>%n Insel</numerusform>
            <numerusform>%n Inseln</numerusform>
        </translation>
    </message>
    <message>
        <location filename="../../zaxeditor/waynet.py"/>
        <source>(approximate: without Zax.exe the AIs of the models are unknown)</source>
        <translation>(angenähert: ohne Zax.exe sind die KIs der Modelle unbekannt)</translation>
    </message>
    <message>
        <location filename="../../zaxeditor/waynet.py"/>
        <source>Way point network as the game builds it</source>
        <translation>Wegpunktnetz, wie das Spiel es baut</translation>
    </message>
</context>
</TS>
