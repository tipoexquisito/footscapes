---
title: "Fiat Corde"
description: "A ten-minute talk built like a film. Storyboard and production notes for the slide deck presented at the internal pedagogical conference, panel on Active Methodologies."
type: reflection
status: seed
draft: true
tags:
  - LearningExperienceDesign
---
> Love, love is a verb. Love is a doing word.

Fiat Corde is a ten-minute talk for an internal pedagogical conference, on the panel dedicated to Active Methodologies. It is not a mobility report. It is a compressed art history lesson whose thesis is the thesis of this garden: context does not illustrate content. Context is the content.

The voice carries the talk. The slides do not tell the story; they direct the gaze. The full script lives in [[Notes on Fiat Corde]]. The Slidev project that implements this storyboard is built and embedded in the `iv-jornadas-pedagogicas-arrifana-2026` folder beside this note.

## Visual grammar

The deck is a cinematic storyboard, not a presentation. Cuts, not animations. Permanence, not movement. Silence and stillness as language. The orientation is Tarkovsky, Ozu, Haneke: one state, one idea. The animation happens in the audience's head. Every transition between states is a hard cut.

HTML and CSS serve detail only: darkening an image, opacity, the position of a line of text. Zoom is minimal. The image stays; it does not compete with the voice.

Each state answers a single question: where do I want the room to look at this instant?

## Design tokens

The deck follows the Footscapes styleguide: Times for display, Arial for body, black, white and the Footscapes blue. Fonts load locally, never from a CDN. No titles, no logos, no captions, with two exceptions: the credit line of *3.16* and the bureaucratic opening slide.

One decision recorded here so it is not reopened: red enters the deck as a documented exception to the styleguide. The talk was written around red as the colour of tension, and it appears in exactly four moments: the third question, "os alunos também não estavam", the question about the holiday, and "E tu?". Nowhere else. The deck is a cinematic piece, not a page of the garden; the exception belongs to the deck alone.

## Storyboard: 52 states

### Opening

- **0.** False bureaucratic slide: white background, Erasmus+ logo, administrative title. Confirmed in.

### Moment 1. Goya

- **1.** *El 3 de mayo*, full frame, hard cut. Holds the silence and "Isto não é um quadro histórico".
- **2.** Cut to the detail of the man about to be shot. Enters on "O fuzilado tem rosto". Confirmed in.
- **3.** Full painting, darkened. Text: Arrifana. 17 de abril de 1809.
- **4.** Adds: Só não teve pintor.
- **5.** Quem decide? White, over the darkened painting.
- **6.** Quem paga? White.
- **7.** Quem fica fora do frame? Red.

### Moment 2. Madrid

- **8.** Own photo: *El 2 de mayo*. Enters on "O feriado celebrava a véspera".
- **9.** Own photo: the plaque at the Palácio Real. Located in the vault.
- **10.** Own photo: the Goya statue. Enters on "Encontrámo-nos aos pés da estátua dele".
- **11.** Own photo: the 2 and 3 May pair side by side at the Prado. Still to locate. Plan B: state 10 holds.
- **12.** Own photo: Toledo, clean.
- **13.** Black: Context4Content. O contexto não ilustra o conteúdo. O contexto é o conteúdo.

### Moment 3. 3.16

- **14.** Group photo before the title wall. Depends on student authorisations. Plan B: typography, Sem Terra à Vista.
- **15–20.** Entry words, cumulative, one cut per word: alto-mar. à deriva. vazio. no espaço. piratas. naufrágio.
- **21.** The photograph *3.16*, clean. Holds the Lajes narration. File pending via Daniel Costa; placeholder until it arrives.
- **22.** Same photograph. Large title: 3.16.
- **23.** Same photograph. Credit in the corner: Augusto Alves da Silva, 3.16, 2003. Coleção Norlinda e José Lima.
- **24–28.** Exit words, cumulative: migração. opressão. controlo. sem controlo. saque.
- **29.** Adds: piratas. Red, last.
- **30.** The mediator's sentence, white.
- **31.** Adds, red: Os alunos também não estavam.

### Moment 4. The rhyme

- **32.** Black: Massive Attack. Primavera Sound. Porto, junho 2026. Teardrop enters low on this state.
- **33.** *Guernica*. The advance to this state is the hard cut of the music.
- **34.** *African Guernica*.
- **35.** Guernica-Gaza, remake of *Guernica*.
- **36.** Guernica-Gaza, remake of the *3 de mayo*. Enters on "Incluindo o quadro com que começámos". Closes the rhyme.
- **37.** Own photo: the Fiat Europa moment. Enters on "Nove países numa sala".
- **38.** Black, only the date: 3 de maio. Holds the whole Press Freedom passage.
- **39.** Black: A história não se repete. Rima.
- **40.** O fotojornalismo não é isento.
- **41.** Adds: A arte não é isenta.
- **42.** Adds: A pedagogia também não é.
- **43.** Red, alone: Se o 3 de maio de 1808 merece um feriado, o que merece o que estamos a ver agora?
- **44.** White: O contexto não serve o conteúdo. O contexto é o conteúdo.
- **45.** The three questions complete, red, all at once. Recognition, not novelty. Holds the closing paragraph.

### Moment 5. The way in

- **46.** Black: Write! You are the intellectuals!
- **47.** QR code, one third of the screen height. URL beneath.
- **48.** Own photo: Metropolis at Sala Equis. Located in the vault.
- **49.** Adds: O mediador entre a cabeça e as mãos tem de ser o coração.
- **50.** Cut to black: E tu? Red, alone. Pure Haneke.
- **51.** Fiat Corde, centred. The Teardrop verse beneath, small. Stays on screen through the glass of papers and the exit.

## Production notes

**Audio, the single technical risk.** Teardrop enters low on state 32. Slidev audio component: starts on entering the state, forced stop on the next advance, which coincides with the hard cut on "Porque esta corrente é antiga". Local file in `public/`. If the rehearsal with real equipment fails, cut the audio and keep Teardrop only for the final state, during the exit. The talk works without sound.

**Images.** Public domain or current use: El 3 de mayo, El 2 de mayo, Guernica. Educational use with the referencing already practised in Footscapes: African Guernica, the two Guernica-Gaza montages, the Metropolis still. 3.16 carries a mandatory credit and its file and projection authorisation are pending via Daniel Costa. Own photographs confirmed and located are listed in the asset manifest inside the project folder. Everything missing has a black-background plan B.

**Safeguards.** Static build on a USB stick besides GitHub Pages; auditorium Wi-Fi fails. PDF export, one page per state, as the universal fallback. Rehearsal on the actual machine in the actual room.

**Out of scope.** Layers excluded by curation, destined for the CAO note in the Experience section: Velázquez, El Bosco, Zapping/RTP/Estado Novo/censorship. Dissemination carousels for Instagram come after the conference. They do not enter the deck.

## Connections

- [[Notes on Fiat Corde]] — the full script, in the language of the room.
- [[Fiat Corde — Provisional Topics]] — material cut from the talk, kept as seeds rather than lost.
- [[Fiat Humanitas]] — the reflection this talk grew from; the benchmark for tone.
- [[Context4Content]] — the framework the talk demonstrates.

Part of [[Design]]. #LearningExperienceDesign
