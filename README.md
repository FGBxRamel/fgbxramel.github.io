# razielx@home

Persönliche Ein-Seiten-Website im Terminal-Look. Kein Build-Prozess, kein
Framework, kein CMS – nur drei Dateien plus Downloads. Du bist der einzige
Editor, Änderungen sind selten, also bleibt es absichtlich simpel.

## Struktur

```
index.html   Inhalt der Seite (Text, Links, Struktur)
style.css    Terminal-Optik (Farben, Layout, Schrift)
script.js    Kleiner Tipp-Effekt für die Begrüßungszeile
files/       Downloads: GPG- und SSH-Public-Key
```

Es gibt keinen Build-Schritt. Datei ändern, speichern, fertig.

## Inhalte anpassen

Alles Wichtige steht direkt in `index.html`, markiert mit HTML-Kommentaren
(`<!-- ... -->`) an den Stellen, wo noch Platzhalter drinstehen:

- `#whoami` – Stichpunkte über dich (Beruf, Hobbys, Freifunk, ...)
- `#about` – kurzer Fließtext über dich
- `#keys` – Links zu deinen echten Keys (siehe unten)
- `#contact` – E-Mail, GitHub, weitere Profile

Neue Stichpunkte: einfach ein weiteres `<li>...</li>` in die jeweilige Liste
einfügen. Kein besonderes Format nötig.

## Eigene Keys einbinden

1. GPG Public Key exportieren:
   ```
   gpg --armor --export DEINE_KEY_ID > files/gpg-pubkey.asc
   ```
2. SSH Public Key kopieren, z.B.:
   ```
   cp ~/.ssh/id_ed25519.pub files/id_ed25519.pub
   ```
3. In `index.html` im Abschnitt `#keys` den Fingerprint-Platzhalter
   (`XXXX XXXX ...`) durch deinen echten GPG-Fingerprint ersetzen:
   ```
   gpg --fingerprint DEINE_KEY_ID
   ```

Wichtig: Public Keys sind unbedenklich zu veröffentlichen (dafür sind sie
da). Lade hier niemals private/secret Keys hoch.

## Lokal ansehen

Einfach `index.html` im Browser öffnen, oder für einen echten lokalen
Server (falls Links/Downloads sich anders verhalten sollen):

```
python3 -m http.server 8000
```

und dann `http://localhost:8000` öffnen.

## Deployment

Die Seite ist rein statisch – jeder Static-Hosting-Anbieter reicht.
Empfehlung, weil kostenlos und einfach:

**GitHub Pages**
1. Repo auf GitHub erstellen, Inhalt pushen.
2. In den Repo-Settings unter "Pages" den Branch (z.B. `main`) als Quelle
   auswählen.
3. Seite ist danach unter `https://<username>.github.io/<repo>/` erreichbar.
   Eigene Domain lässt sich später per CNAME-Eintrag ergänzen.

**Alternative: Netlify/Cloudflare Pages** – Ordner per Drag&Drop hochladen
oder Repo verbinden, dann automatisches Deploy bei jedem Push.

## Design-Entscheidungen (Kontext für später)

- Bewusst **kein Static-Site-Generator** (Hugo etc.), weil es nur eine
  Seite mit seltenen Änderungen ist – der Overhead eines Generators lohnt
  sich hier nicht.
- Farben/Layout unterstützen `prefers-color-scheme` sowie ein optionales
  `data-theme="light"`-Attribut auf `<html>`, falls später ein manueller
  Umschalter gewünscht ist.
- Der Tipp-Effekt in `script.js` respektiert `prefers-reduced-motion` und
  ist rein kosmetisch – die Seite funktioniert auch ganz ohne JavaScript.
- Downloads nutzen das `download`-Attribut, damit Browser die Dateien
  direkt speichern statt sie zu öffnen.

## Hinweis für zukünftige Claude-Sessions

Dieses Projekt ist absichtlich minimal gehalten (siehe oben). Bei
Änderungswünschen:
- Kein Framework/Build-Tool einführen, außer der Nutzer bittet explizit
  darum.
- Struktur (3 Dateien + `files/`) beibehalten, nicht in Unterordner
  aufteilen, solange der Umfang klein bleibt.
- Der Nutzer hat wenig Web-Dev-Erfahrung – Änderungen möglichst einfach
  und mit Kommentaren nachvollziehbar halten.
