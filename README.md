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
