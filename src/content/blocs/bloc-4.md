---
blockId: "bloc-4"
number: 4
title: "IA al Cicle de Vida del Software"
duration: "2h"
audience: "Tots els perfils"
summary: "Integració d'IA en fases de disseny, desenvolupament, testing i deployment."
objective: "Integrar pràctiques d'IA a cada fase del cicle de vida del software (design, development, QA, deployment) per accelerar delivery i millorar qualitat."
order: 4
keyTopics:
  - name: "IA en Disseny i Especificacions"
    duration: "20 min"
  - name: "IA en Desenvolupament i Code Gen"
    duration: "25 min"
  - name: "IA en Testing i QA Automàtica"
    duration: "25 min"
  - name: "IA en Deployment i Observabilitat"
    duration: "20 min"
practiceExercise:
  title: "CI/CD Pipeline Intelligence"
  description: "Integraràs IA en un pipeline CI/CD real: generació automàtica de tests, análisi de codi amb comentaris contextuals, i predicció de possibles fallos en deployment."
commands:
  - label: "Setup GitHub Actions amb IA"
    language: "yaml"
    code: "name: AI-Enhanced CI/CD\non:\n  pull_request:\njobs:\n  ai-review:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - name: AI Code Review\n        run: |\n          copilot-cli review --files=.\n      - name: Generate Tests\n        run: |\n          ai-test-gen --coverage=80"
  - label: "Executar pipeline"
    language: "bash"
    code: "git push origin feature-branch"
screenshots:
  - src: "/screenshots/bloc-4-ci-cd-flow.png"
    alt: "Pipeline CI/CD amb IA integrada"
    caption: "Cada etapa del pipeline reporta feedback generat per IA"
  - src: "/screenshots/bloc-4-ai-insights.png"
    alt: "Insights d'IA en pull requests"
    caption: "Suggeriments de millora basats en análisi automàtica"
artifact:
  - "Pipeline CI/CD configurat amb IA"
  - "Scripts de generació automàtica de tests"
  - "Configuració de code quality gates"
  - "Documentació de best practices"
pdfFile: "bloc-4-ia-sdlc.pdf"
prevBlock: { id: "bloc-3", title: "MCP i Protocols de Connexió IA" }
nextBlock: { id: "bloc-a", title: "Creació d'Interfícies amb IA" }
---

## Contingut detallat

L'IA no és només per escriure codi; és per orchestrar tot el cicle de vida del software.

### Beneficis en cada fase

**Disseny**: Generar maquetes, user flows, specs
**Desarrollo**: Autocompletar, patterns, arquitectura
**Testing**: Generar casos de test, edge cases
**Deploy**: Predicció de problemes, rollback automàtic

### ROI Observable

- 40-50% més velocitat en development
- 30% reducció en bugs en producció
- Documentació sempre sincronitzada
- Onboarding més ràpid per nous devs

### Challenges

- Mantenir qualitat amb velocitat
- Governança d'IA en empreses regulades
- Seguretat i privacitat de dades
