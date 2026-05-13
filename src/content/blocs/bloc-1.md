---
blockId: "bloc-1"
number: 1
title: "Fonaments GitHub Copilot Enterprise"
duration: "2h"
audience: "Tots els perfils"
summary: "Introducció a GitHub Copilot, setup inicial, cases d'ús i millors pràctiques per a equipos."
objective: "Entendre les capacitats de GitHub Copilot Enterprise, configuració en IDEs, integració amb workflows de desenvolupament i millors pràctiques de seguretat i privacitat."
order: 1
keyTopics:
  - name: "GitHub Copilot: Basics i arquitectura"
    duration: "25 min"
  - name: "Setup a VS Code, JetBrains i altres IDEs"
    duration: "20 min"
  - name: "Copilot Chat i cases d'ús pràctics"
    duration: "30 min"
  - name: "Security, Privacy i Best Practices empresarials"
    duration: "25 min"
practiceExercise:
  title: "Parser de Metadades Audiovisuals"
  description: "Crearàs una eina completa que ParseIca metadades de fitxers MP3 i vídeo utilitzant GitHub Copilot per generar codi, validacions i documentació. L'objectiu és aprendre com Copilot accelera la construcció de móduls utils."
commands:
  - label: "Instal·lar dependències"
    language: "bash"
    code: "npm install mutagen axios dotenv"
  - label: "Script inicial"
    language: "bash"
    code: "mkdir audio-parser && cd audio-parser && npm init -y"
  - label: "Exemple: Parse MP3 metadata"
    language: "javascript"
    code: "const fs = require('fs');\nconst path = require('path');\n\nfunction parseAudioMetadata(filePath) {\n  // Copilot pot generar aquesta lògica\n  const stats = fs.statSync(filePath);\n  return {\n    filename: path.basename(filePath),\n    size: stats.size,\n    modified: stats.mtime,\n  };\n}\n\nmodule.exports = { parseAudioMetadata };"
screenshots:
  - src: "/screenshots/bloc-1-copilot-setup.png"
    alt: "Configuració de GitHub Copilot a VS Code"
    caption: "El panell de Copilot activat a VS Code amb suggeriments en temps real"
  - src: "/screenshots/bloc-1-copilot-chat.png"
    alt: "Finestra de Copilot Chat"
    caption: "Interacció amb Copilot Chat per a preguntes sobre codi i arquitectura"
artifact:
  - "Parser de metadades audiovisuals funcional"
  - "Documentació del codi (JSDoc)"
  - "Tests unitaris per a cases clau"
  - "Guia de setup per a nous desenvolupadors"
pdfFile: "bloc-1-fonaments-copilot.pdf"
prevBlock: null
nextBlock: { id: "bloc-2", title: "Especialització d'Agents i Skills" }
---

## Contingut detallat

GitHub Copilot Enterprise representa una transformació en com els desenvolupadors escrivim codi. Més que un autocompleta, és un col·laborador que entén context, arquitectura i millors pràctiques.

### Per què GitHub Copilot Enterprise?

A diferència de Copilot gratuït, la versió Enterprise ofereix:

- **Gestió centralitzada**: Admin controls per a equips grans
- **Seguretat empresarial**: SAML, SSO, audit logs
- **Performance SLA**: Prioritat en servidors de Copilot
- **Soport dedicat**: Acompanyament per a adopció

### Casos d'ús reals

1. **Acceleració de prototipats**: Generar proves de concepte en minuts
2. **Tests automàtics**: Copilot escriu asserts sense esforç
3. **Documentació**: JSDoc i READMEs en paral·lel al codi
4. **Refactoring**: Suggeriments per a codi legacy

### Millors pràctiques

- No acceptis tota sugestió: revisa sempre el codi generat
- Usa prompts clars i específics
- Inclou context (fitxers d'exemple, arquitectura)
- Documenta les decisions que Copilot va prendre
