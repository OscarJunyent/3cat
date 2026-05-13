---
blockId: "bloc-2"
number: 2
title: "Especialització d'Agents i Skills"
duration: "3h"
audience: "Tots els perfils"
summary: "Configuració avançada d'agents personalitzats, creació de skills customitzats i orquestració."
objective: "Dominar la creació d'agents personalitzats, definir skills reutilitzables i orquestrar comportaments complexos d'IA per a casos d'ús específics d'equip."
order: 2
keyTopics:
  - name: "Arquitectura d'Agents: Model Mental"
    duration: "30 min"
  - name: "Creació de Skills Customitzats"
    duration: "40 min"
  - name: "Integració amb APIs externes"
    duration: "30 min"
  - name: "Orquestració i Testeo d'Agents"
    duration: "20 min"
practiceExercise:
  title: "Agent de Revisió de Code (Code Review Bot)"
  description: "Construiràs un agent personalitzat que revisa pull requests, detecta patterns problemàtics, suggereix millores i genera reportes de qualitat. L'agent combinarà múltiples skills (análisi de codi, generació de feedback, documentació)."
commands:
  - label: "Setup agent framework"
    language: "bash"
    code: "npm install @anthropic-ai/sdk dotenv"
  - label: "Definir skill personalitzat"
    language: "javascript"
    code: "const reviewCodeSkill = {\n  name: 'review_code',\n  description: 'Revisa el codi d\\'una PR',\n  handler: async (code) => {\n    // Lògica de revisió\n    return { issues: [], suggestions: [] };\n  }\n};"
  - label: "Executar agent"
    language: "bash"
    code: "node agent.js --pr-url=https://github.com/..."
screenshots:
  - src: "/screenshots/bloc-2-agent-flow.png"
    alt: "Flux d'execució d'un agent"
    caption: "Com l'agent coordina múltiples skills per resolver una tasca"
  - src: "/screenshots/bloc-2-skill-registry.png"
    alt: "Registre de skills disponibles"
    caption: "Panel d'administració de skills per a l'agent"
artifact:
  - "Agent de revisió de PR funcional"
  - "3–4 skills personalitzats reutilitzables"
  - "Tests de comportament de l'agent"
  - "Documentació d'arquitectura"
pdfFile: "bloc-2-agents-skills.pdf"
prevBlock: { id: "bloc-1", title: "Fonaments GitHub Copilot Enterprise" }
nextBlock: { id: "bloc-3", title: "MCP i Protocols de Connexió IA" }
---

## Contingut detallat

Els agents representen el següent salt en sophisticació d'IA. Mentre que Copilot és interactiu i contextual, els agents són autònoms, persistents i capaces de coordinar múltiples tasques.

### Anatomia d'un Agent

Un agent es composa de:
- **Model d'IA**: El cervell (Claude, GPT-4, etc.)
- **Skills**: Funcions que pot cridar
- **Memòria**: Context persistent
- **Planner**: Estratègia per resoldre tasques

### Skills: Blocs de construcció

Les skills són el mecanisme per donar al agent capacitats específiques. Una skill pot ser:
- Una crida a API
- Accés a base de dades
- Execució de codi
- Consulta a sistemes externs

### Casos d'ús empresarials

- **Code Review Bot**: Analitza PRs automàticament
- **Customer Support Agent**: Resol tickets de suport
- **Data Analysis Agent**: Processa grans datasets
- **DevOps Agent**: Automatitza deployments
