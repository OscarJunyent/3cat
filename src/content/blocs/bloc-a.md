---
blockId: "bloc-a"
number: "A"
title: "Creació d'Interfícies amb IA"
duration: "3h"
audience: "Product Owners, UX/UI"
dateOptions: ["13 de maig 2026", "14 de maig 2026"]
summary: "Disseny de UX mejorat amb IA: prototipat ràpid, personalització i accessibilitat."
objective: "Aprofitar IA per a accelerar el disseny d'interfícies, crear prototips en hores en lloc de dies, personalitzar experiències i garantir accessibilitat."
order: 5
keyTopics:
  - name: "IA per a generació de maquetes i wireframes"
    duration: "35 min"
  - name: "Personalització d'UX amb IA"
    duration: "30 min"
  - name: "Accessibilitat automàtica i testing"
    duration: "25 min"
  - name: "Validació amb usuaris i iteració"
    duration: "20 min"
practiceExercise:
  title: "Generar Prototip Complet amb IA"
  description: "A partir d'una descripció de feature, usaràs IA per generar maquetes, wireframes interactius, specs de disseny i fins i tot codi React/Vue. L'objectiu és entendre com IA reduce el time-to-prototype."
commands:
  - label: "Setup design tool amb IA"
    language: "bash"
    code: "npm install @figma/rest-api-client design-system-ai"
  - label: "Generar design tokens des de brand colors"
    language: "javascript"
    code: "const designTokens = await generateTokens({\n  brandColor: '#D63B3B',\n  darkMode: true,\n  accessibility: 'WCAG-AA'\n});"
  - label: "Exportar codi React automàtic"
    language: "bash"
    code: "design-to-code --input=prototype.json --output=./components/ --framework=react"
screenshots:
  - src: "/screenshots/bloc-a-ai-mockups.png"
    alt: "Maquetes generades per IA"
    caption: "Prototips de 3–4 screens generats en minuts"
  - src: "/screenshots/bloc-a-a11y-check.png"
    alt: "Report d'accessibilitat automàtic"
    caption: "IA valida contrast, mides de font i etiquetes per a WCAG"
artifact:
  - "Prototip complet (Figma/Adobe XD)"
  - "Design system tokens personalitzats"
  - "Codi React/Vue generat i validat"
  - "Report d'accessibilitat"
pdfFile: "bloc-a-ui-amb-ia.pdf"
prevBlock: { id: "bloc-4", title: "IA al Cicle de Vida del Software" }
nextBlock: { id: "bloc-b", title: "Design System com a Skills d'IA" }
---

## Contingut detallat

Els Product Owners i designers tenim una oportunitat única: IA pot prototipat, validar i iterar en cicles molt més curts.

### Workflow Moderne: AI-Assisted Design

1. **Brief**: El PO descriu la feature en llenguatge natural
2. **Generate**: IA crea 3–5 opcions de disseny
3. **Refine**: L'equip selecciona, comenta, refina
4. **Validate**: IA testeja accessibilitat, responsivitat, performance
5. **Hand-off**: Codi generat automàticament pels developers

### Guanys

- De 2 setmanes → 2 dies per design cycle
- Menos iteracions amb developers (codi directe)
- Accessibilitat integrada des del dia 1
- Documentació autogenerat

### Tools emergents

- Figma + AI plugins
- Locofy, Visily
- ChatGPT per UI descriptions
- V0 per a generació React
