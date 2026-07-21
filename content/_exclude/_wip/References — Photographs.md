---
title: References — Photographs
type: index
status: evergreen
draft: true
tags: []
---
# References — Photographs

Guidelines for crediting photographs taken during the course — your own and those taken by course participants.

---

## Your own photographs

For photos you took yourself, credit is simple. Use your name as author.

**APA format:**
Gama, F. (2026). *Title or description* [Photograph]. Footscapes.

**In the note, embed and caption like this:**

```
![[filename.jpg]]
*Photograph by Filipe Gama, Madrid, May 2026.*
```

The italicised line directly below the image renders as a visible caption in both Obsidian and Quartz. This approach is more reliable than relying on alt text alone, which Quartz treats as an HTML attribute rather than a visible caption.

---

## Group photos — participants known

When the photographer is a named participant who gave permission to use the image, credit them directly.

**APA format:**
Participant Last Name, First Initial. (2026). *Title or description* [Photograph]. Innovative and Active Methodologies for Teaching and Learning, English Matters, Madrid.

**In the note:**

```
![[filename.jpg]]
*Photograph by [Name], Madrid, May 2026. Used with permission.*
```

---

## Group photos — photographer unknown or collective

When photos were shared in a group channel without individual attribution — or when multiple people contributed to a shared album — use a collective credit.

**APA format:**
English Matters Participants. (2026). *[Description of photo]* [Photograph]. Innovative and Active Methodologies for Teaching and Learning, Madrid.

**In the note:**

```
![[filename.jpg]]
*Photograph shared by course participants, Madrid, May 2026. Used with permission.*
```

---

## Before using any group photo

Confirm permission from the person in the photo (not just the person who took it). A brief message sent to the group is enough — see the draft below.

Collect confirmations. A simple "sim, podes usar" in the group chat is sufficient for informal educational use. For public dissemination — website, reports — keep a record of who confirmed.

---

## Group permission message

> Olá a todos. Estou a desenvolver um projeto de disseminação sobre a nossa semana em Madrid — um jardim digital de notas pedagógicas e reflexões. Posso usar as fotos que partilharam aqui no grupo para incluir no projeto? Vou dar créditos a quem as tirou. Obrigado.

---

## Note on image captions and Quartz

The Obsidian Image Captions plugin renders alt text as visible captions inside Obsidian. Quartz does not apply Obsidian plugins during its build — it reads standard Markdown and generates HTML directly. Alt text becomes the `alt` attribute on the `<img>` tag, which is not visible on screen.

**Recommended practice for both Obsidian and Quartz:**

Use the embed syntax for the image, then add a caption as an italicised line directly below it — no blank line between the two.

```
![[filename.jpg]]
*Caption text here.*
```

or for web-hosted images:

```
![Descriptive alt text](https://url-to-image.jpg)
*Caption text here.*
```

This renders correctly in Obsidian reading mode, in Quartz, and in any standard Markdown renderer. The alt text still serves its accessibility function; the italicised line serves the caption function.

---

Part of [[References]].
