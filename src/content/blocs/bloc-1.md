---
blockId: "bloc-1"
number: 1
title: "Fonaments i ús de GitHub Copilot Enterprise"
duration: "2h"
audience: "Equips d'enginyeria i desenvolupament"
summary: "Introducció pràctica als modes de GitHub Copilot Enterprise, selecció de models, prompting i configuració d'instructions per treballar amb IA dins del workflow de desenvolupament."
objective: "Entendre com utilitzar GitHub Copilot Enterprise de forma eficient, saber escollir el mode i model adequat segons la tasca, i configurar instructions reutilitzables per treballar amb IA de manera professional dins d'un repositori."
order: 1
keyTopics:
  - name: "Els 4 modes de GitHub Copilot"
    duration: "30 min"
  - name: "Prompting, context i finestra de context"
    duration: "20 min"
  - name: "Catàleg de models i estratègia d'ús"
    duration: "20 min"
  - name: "Pricing i AI Credits"
    duration: "10 min"
  - name: "Taller pràctic amb 3 enfocaments"
    duration: "45 min"
  - name: "Custom instructions com a infraestructura"
    duration: "15 min"
practiceExercise:
  title: "Implementació d'un endpoint a una API Express"
  description: "Treballarem sobre una API Express existent afegint un nou endpoint GET /shows/:id/episodes/:episodeId amb validació, paginació i tests. L'objectiu és comparar diferents formes de treballar amb GitHub Copilot segons el mode i model seleccionat."
commands:
  - label: "Clonar el repositori del taller"
    language: "bash"
    code: "git clone https://github.com/Formacio-3Cat/3cat-shows-api.git"
  - label: "Accedir al projecte"
    language: "bash"
    code: "cd 3cat-shows-api"
  - label: "Executar el projecte"
    language: "bash"
    code: "npm install && npm run dev"
screenshots:
  - src: "/screenshots/bloc-1-copilot-modes.png"
    alt: "Modes de GitHub Copilot"
    caption: "Comparativa pràctica entre Ask, Edit, Plan i Agent"
  - src: "/screenshots/bloc-1-endpoint-workshop.png"
    alt: "Implementació de l'endpoint del taller"
    caption: "Flux de treball per implementar i validar l'endpoint amb Copilot"
artifact:
  - "Endpoint GET /shows/:id/episodes/:episodeId funcional"
  - "Validació d'inputs integrada"
  - "Tests automatitzats per casos d'èxit i error"
  - "Fitxer .github/copilot-instructions.md configurat"
  - "Criteri per escollir mode i model segons la tasca"
pdfFile: "bloc-1-fonaments-copilot.pdf"
prevBlock: null
nextBlock: { id: "bloc-2", title: "Skills i Agents amb GitHub Copilot" }
---

# Contingut detallat

## Els 4 modes de GitHub Copilot

### Ask
Mode orientat a preguntes i comprensió. No modifica codi.

### Edit
Mode de modificació controlada sobre fitxers seleccionats.

### Plan
Mode de planificació abans d'implementar.

### Agent
Mode autònom orientat a objectius.

## Prompting i context

La qualitat del resultat depèn directament del prompt i del context proporcionat.

## El catàleg de models

- GPT-5 mini / GPT-4.1 → Tasques ràpides
- Claude Sonnet → Workhorse del dia a dia
- Claude Opus → Raonament complex
- Gemini Pro → Context molt llarg
- GPT Codex → Refactors estructurals

## Pricing i AI Credits

GitHub evoluciona cap a un model basat en consum real de tokens.

## Taller pràctic

Implementació del endpoint:

GET /shows/:id/episodes/:episodeId

Incloent:
- Paginació
- Validació
- Tests

## Custom instructions

### Repository-wide
.github/copilot-instructions.md

### Path specific
.github/instructions/*.instructions.md
