---
blockId: "hackathon"
number: "Hackathon"
title: "Hackathon: Primera Sprint Real"
duration: "4h"
audience: "Tots els perfils"
summary: "Aplicació pràctica integrada de tots els conceptes en un projecte real d'equip."
objective: "Aplicar tots els conceptes apresos (Copilot, Agents, MCP, SDLC, UX amb IA) en un projecte real en equip, demonstrant ROI mesurable."
order: 7
keyTopics:
  - name: "Briefing del Projecte Hackathon"
    duration: "15 min"
  - name: "Planificació: Qui fa qué amb IA"
    duration: "25 min"
  - name: "Build: Development accelerat amb IA"
    duration: "150 min"
  - name: "Demo & Retro"
    duration: "30 min"
practiceExercise:
  title: "Project Hackathon: Content Management System Intel·ligent"
  description: "Equips de 3–4 persones construiran un CMS lightweight amb capacitats d'IA: generació automàtica de metadata, suggeriments de content optimization i dashboards amb insights. S'utilitza GitHub Copilot per a development, agents personalitzats per a análisi, i MCP per connectar a APIs externes. Goal: MVP deployat, documentat i présentat en 4h."
commands:
  - label: "Crear repositori del projecte"
    language: "bash"
    code: "git clone https://github.com/3cat-elink/hackathon-starter\ncd hackathon-starter\nnpm install"
  - label: "Setup inicial amb Copilot"
    language: "bash"
    code: "copilot-init --project=cms-ia --team=3cat"
  - label: "Deploy ràpid a Vercel"
    language: "bash"
    code: "vercel deploy --prod"
screenshots:
  - src: "/screenshots/hackathon-teams.png"
    alt: "Equips treballant en el hackathon"
    caption: "5–6 equips desenvolupant simultàniament"
  - src: "/screenshots/hackathon-demo.png"
    alt: "Demo del CMS intel·ligent"
    caption: "Presentació final del projecte hackathon"
artifact:
  - "Codi font del projecte (GitHub)"
  - "Aplicació deployada en producció"
  - "Documentació completa (README, arquitectura)"
  - "Presentació de 10 min per equip"
  - "Retro: Lessons learned"
pdfFile: "hackathon-exercici-practic.pdf"
prevBlock: { id: "bloc-b", title: "Design System com a Skills d'IA" }
nextBlock: null
---

## Contingut detallat

El hackathon és on la teoria es torna realitat. Durant 4h intensas, els equips construiran un project que integra tots els conceptes apresos.

### El Projecte: CMS Intel·ligent

**Features**:
1. **Content Generator**: Copilot generador de drafts
2. **Metadata Parser**: Agent que extreu metadata automàticament
3. **Optimization Suggestions**: IA suggereix millores SEO, accessibilitat
4. **Dashboard**: Insights sobre performance i engagement

**Tech Stack**:
- Frontend: React + Tailwind (similar a aquesta web!)
- Backend: Node.js + Express
- AI: GitHub Copilot + Claude API
- Deploy: Vercel

### Estructura del Hackathon

- **15 min**: Briefing i formació de grups
- **25 min**: Planificació d'arquitectura
- **150 min**: Development ràpid (3 hores)
- **30 min**: Demos i votació

### Critères de Valoració

1. **Funcionalitat**: MVP complet i funcional (40%)
2. **Ús d'IA**: Integració significativa de conceptes (30%)
3. **Code Quality**: Codi net, documentat, testejat (20%)
4. **Presentació**: Comunicació clara de solució (10%)

### Premis

- Equip Guanyador: Accés de 3 mesos a Copilot Enterprise gratis
- Millor Use of AI: Menció especial
- Audience Choice: Votat pels participants

### Post-Hackathon

- Publicació dels projectes a showcase.elink.cat
- Networking amb alumni de formacions anteriors
- Oportunitats de projectes reals amb Elink
