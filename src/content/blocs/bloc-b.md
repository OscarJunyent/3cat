---
blockId: "bloc-b"
number: "B"
title: "Design System com a Skills d'IA"
duration: "3h"
audience: "UX/UI, Desenvolupadors"
dateOptions: ["15 de maig 2026", "16 de maig 2026"]
summary: "Documentació executiva de Design Systems com a skills reutilitzables en IA."
objective: "Transformar un Design System en un asset reutilitzable per agents d'IA, creant skills que generin codi consistent amb la marca."
order: 6
keyTopics:
  - name: "Anatomia d'un Design System moderni"
    duration: "25 min"
  - name: "Documenting Design Tokens per a IA"
    duration: "30 min"
  - name: "Component APIs per a generació automàtica"
    duration: "25 min"
  - name: "Validació de codi generat contra DS"
    duration: "20 min"
practiceExercise:
  title: "Design System com a MCP Server"
  description: "Construcció d'un servidor MCP que exposa el Design System (colors, tipografia, components) de forma que agents IA puguin consultar-lo i generar codi que compleix automàticament amb les directives visuales."
commands:
  - label: "Crear servidor MCP per a Design System"
    language: "bash"
    code: "npm init @modelcontextprotocol/server design-system-mcp"
  - label: "Definir Design Token API"
    language: "javascript"
    code: "server.resource('design-tokens', async () => {\n  return {\n    colors: { elink: '#D63B3B', ... },\n    typography: { h1: { size: '2.5rem', weight: 700 }, ... },\n    components: ['Button', 'Card', 'Modal', ...]\n  };\n});"
  - label: "Generar component amb validació"
    language: "bash"
    code: "ai-generate --component=Button --design-system=ds-mcp://design-tokens"
screenshots:
  - src: "/screenshots/bloc-b-ds-tokens.png"
    alt: "Design Tokens documentats"
    caption: "Colors, tipografia i spacing centralitzats en JSON"
  - src: "/screenshots/bloc-b-ai-validation.png"
    alt: "Validació de components generats"
    caption: "IA verifica que els components respecten el Design System"
artifact:
  - "Design System documentat en format executable"
  - "Servidor MCP de Design Tokens"
  - "Skills personalitzats de generació de components"
  - "Tests automàtics de conformitat"
pdfFile: "bloc-b-ds-skills-ia.pdf"
prevBlock: { id: "bloc-a", title: "Creació d'Interfícies amb IA" }
nextBlock: { id: "hackathon", title: "Hackathon: Primera Sprint Real" }
---

## Contingut detallat

Un Design System és molt més que estàtica visual. Quan el documentes correctament per a IA, es converteix en una skills reutilitzable que multiplica la velocitat de delivery.

### Design System com a Contract

En lloc de "aquestes són les directrius", pensem: "aquesta és l'API visual de la marca".

```json
{
  "colors": { "primary": "#D63B3B", "secondary": "#DC0000" },
  "typography": { "h1": { "size": "2.5rem", "weight": 700 } },
  "components": { "Button": { "variants": ["primary", "secondary"] } }
}
```

### Beneficis

- Codi generat sempre compleix amb marca
- Onboarding de nous developers més ràpid
- Validació automàtica
- Evolució controlada del DS
- Reutilització entre projectes

### Evolució del DS

Quan l'equip agrega nous components, el DS es'actualitza, i tots els agents IA accedeixen immediatament als nous tokens.
