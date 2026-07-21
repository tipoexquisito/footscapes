---
title: References — Diagrams
type: index
status: evergreen
draft: true
tags: []
---
# References — Diagrams

Guidelines for crediting and embedding diagrams created for this project, whether in Excalidraw or Affinity.

For a full list of diagrams planned or in progress, see [[Excalidraw — Diagram Suggestions]].

---

## Diagrams you created

Diagrams created for Footscapes — in Excalidraw, Affinity, or any other tool — are your own work. Credit them as such.

**APA format:**
Gama, F. (2026). *Title of diagram* [Diagram]. Footscapes.

**In the note:**

```
![[diagram-name.svg]]
*Diagram by Filipe Gama, 2026. Based on [source framework or theorist].*
```

If the diagram is an adaptation of a published framework (Mariani's Four Zones, Vygotsky's ZPD, Puentedura's SAMR), name the source in the caption. The diagram is yours; the model is theirs.

Example:
```
![[four-zones.svg]]
*Diagram by Filipe Gama, 2026. Adapted from Mariani (1997), "A map of the territory."*
```

---

## File management

**Excalidraw source files** — save to `_assets/excalidraw/` in the vault. Keep these editable originals even after export.

**SVG exports** — save to `_assets/images/` or in the same folder as the note that uses them.

**Affinity files** — save to `_assets/affinity/` outside the vault or in a project folder. Export SVG or PNG to `_assets/images/` for embedding.

---

## Excalidraw and Quartz

Excalidraw exports clean SVG files. Quartz handles SVG embeds correctly — `![[diagram.svg]]` in Obsidian becomes a standard `<img>` tag in the Quartz build. No additional configuration needed.

One note: Excalidraw's hand-drawn font (Virgil) is embedded in the SVG, so diagrams render correctly on any device without the font installed.

---

## Adapting published diagrams

If you redraw a diagram that already exists in published form — the Learning Pyramid, Bloom's Taxonomy, the SAMR ladder — your version is a derivative work. Credit the original author and year. The redrawing is yours, but the intellectual structure is theirs.

---

Part of [[References]].
