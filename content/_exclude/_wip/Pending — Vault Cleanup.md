---
title: "Pending — Vault Cleanup"
type: wip
draft: true
---
# Pending — Vault Cleanup

## Duplicatas publicadas com conteúdo distinto

Dois pares de notas com o mesmo título em pastas diferentes, ambas publicadas:

**Notes on Curating Learning**
- [x] Já resolvido: a versão em `Reflections/` foi renomeada para `Curation.md` (ver índice de Reflections). Só resta `Frameworks/Notes on Curating Learning.md`, sem ambiguidade.

**Reflective Practice**
- `Frameworks/Reflective Practice.md` — definição Schön, mantida como canónica
- [x] Renomeado `Reflections/Reflective Practice.md` → `Reflections/Notes on Reflective Practice.md`, seguindo a convenção "Notes on X" já usada nas outras notas de Reflections. Três notas que apontavam para o caminho antigo (On Language Traps, Notes on Unlearning, Notes on Professional Development) foram atualizadas. O índice de Reflections passou a listar as duas.
- [ ] O ficheiro antigo `Reflections/Reflective Practice.md` não foi possível apagar (permissão negada nesta sessão). Precisa de ser apagado manualmente no Finder.

---

## Pasta _exclude — cópia incompleta (2026-07-13)

- [x] Adicionado `_exclude` ao `ignorePatterns` do `quartz.config.yaml`. Motivo: a cópia parcial criada nesta sessão contém pelo menos um ficheiro (`Excalidraw/teaching learning zones.excalidraw.md`, e nesta mesma sessão também apareceram bloqueios semelhantes noutros ficheiros, provavelmente sincronização do iCloud em curso) que falha a ler com "Unknown system error -35" — isto parava o build todo do Quartz. Com `_exclude` no ignorePatterns o build passa a ignorar a pasta por completo, independentemente do que lá esteja.
- [ ] Quando limpares `_exclude/` manualmente no Finder (mover para lá Excalidraw, Home, _english-tutor, _templates, _wip, "Ingredientes âncora.md" e apagar os originais), o `ignorePatterns` pode ser simplificado: substituir as entradas individuais (`templates, .obsidian, _english-tutor, _wip, home`) por uma só `_exclude`, já que tudo vai estar debaixo dessa pasta.
- [ ] Sobrou também um ficheiro escondido `_wip/.test-mv-probe`, criado por engano numa sessão anterior — inofensivo mas pode ser apagado.

## Pasta _wip — rever periodicamente

- [ ] `References — Bibliography and Citations.md` — migrar ou arquivar
- [ ] `References — Photographs.md` — migrar ou arquivar
- [ ] `References — Images and Artworks.md` — migrar ou arquivar
- [ ] `Artwork Images — Suggestions.md` — rever e migrar o que for útil
- [ ] `Excalidraw — Diagram Suggestions.md` — rever e migrar
- [ ] `estratégia de disseminação imediata.md` — conteúdo valioso, considerar migrar para Dissemination
- [ ] `neuromarketing.md` — avaliar relevância para e-Learning Design section

---

## Pastas vazias

- [x] `Archive/` e `Media/` — já não existem na raiz do vault. Resolvido (ou já removidas antes, ou nunca chegaram a ser criadas nesta versão do vault).
- [x] `_wip/sources/attachments/` — afinal não está vazia, tem 33 ficheiros reais (materiais dos Days 1–7 e o documento de reflexão modelo). Nota corrigida: não apagar.

---

## Nomenclatura de dias (cosmético)

Days 1–3 usam `Day N - Dayname, D Month YYYY — Title`.
Days 4–7 usam `DD-MM-YYYY - Dayname — Title`.

- [ ] Decidir: unificar formato (renomear Days 4–7 para `Day N` prefix) ou deixar como está.
