---
blockId: "bloc-4"
order: 4
number: "4"
title: "IA al Cicle de Vida del Software"
duration: "2h"
audience: "Tots els perfils"
dateOptions:
  - "11 de maig 2026 (Grup A, continuació matí)"
  - "12 de maig 2026 (Grup A — alternativa)"
  - "13 de maig 2026 (Grup B, continuació matí)"
  - "15 de maig 2026 (Grup B — alternativa)"
summary: "IA toca totes les fases del cicle, no només quan tecleuges codi. Unim tot el que heu après en un sol mapa operatiu."
objective: "Mostrar com la IA s'integra a les 7 fases del cicle de vida del software a 3Cat. Al final del bloc, l'equip té un mapa complet de quin mode, model i eina aplicar a cada fase — i tot connectat als artefactes dels blocs anteriors."
keyTopics:
  - name: "El fil conductor: la feature de recomanacions"
    duration: "10 min"
    description: "3Cat vol llançar recomanacions personalitzades: «Després de veure un episodi, el sistema en proposa 3 més basant-se en gènere, durada i hora d'emissió.» Sembla simple. Passarà per totes les fases del cicle."
  - name: "Fase 1 — Descoberta"
    duration: "15 min"
    description: "Brief ambigu del PM via Slack. Ask mode + Opus en 30 segons genera 10 preguntes de clarificació (per a quins programes, definició d'episodi similar, shows nous sense historial, engagement, latència, continguts infantils, usuaris anònims...). L'humà respon. La IA evita oblidar-ne cap."
  - name: "Fase 2 — Disseny"
    duration: "15 min"
    description: "«L'arquitecte amb IA NO és l'IA arquitecte.» Plan mode no toca codi: llegeix el repo, planifica, identifica riscos. Models premium (Opus/Sonnet) per a decisions arquitectòniques. La decisió és vostra. La responsabilitat també."
  - name: "Fase 3 — Implementació"
    duration: "15 min"
    description: "Tot el que heu après, connectat: Modes (Ask/Edit/Plan/Agent), Models (GPT mini/Sonnet/Opus), Personalització (skills + agents + prompt files del Bloc 2) i Connexió externa (MCP servers del Bloc 3)."
  - name: "Fase 4 — Proves"
    duration: "15 min"
    description: "Test STRATEGY (què testegem: casos, riscos, edge cases, fluxos d'integració — la IA ho planifica tot) vs Test GENERATION (com l'escrivim: sintaxi Vitest/JUnit/xUnit, mocks, fixtures — skill vitest-test-generator del Bloc 2, patró traslladat a JUnit). Tendim a saltar Strategy. És on tenim més marge."
  - name: "Fase 5 — Revisió de Codi"
    duration: "10 min"
    description: "3 capes: IDE local (custom agent del Bloc 2), Al PR via Bitbucket (CodeRabbit, Qodo), Quality Gate (SonarQube + IA). Regla d'or: un agent mai fa merge sol. Pot revisar. Pot suggerir. El merge és sempre humà."
  - name: "Fase 6 — CI/CD"
    duration: "10 min"
    description: "Pipeline de 3Cat: Jenkins + Bitbucket + SonarQube + Nexus + RPMs/WARs/MSIs/Docker. IA s'integra sense substituir: genera Dockerfiles i configs (Build), detecta flakiness (Test), receptes de build (Package), Coding Agent (Deploy). Futur: GitHub Actions."
  - name: "Fase 7 — Operacions + Governança"
    duration: "15 min"
    description: "MCP de Sentry + MCP de GitHub: query des de Copilot Chat, agrupa errors, identifica commit causant. Observabilitat de la IA: bug rate IA vs humans, rollback rate, time-to-fix. Policies, mètriques i propers passos."
practiceExercise:
  title: "Mapa complet: quin mode, model i eina a cada fase del SDLC de 3Cat"
  description: "Treballem sobre el cas real de la feature de recomanacions de 3Cat i repassem les 7 fases del cicle identificant en cada una quin mode de Copilot aplicar (Ask/Edit/Plan/Agent), quin model triar (GPT mini/Sonnet/Opus), quines skills del Bloc 2 fer servir i quins MCP servers del Bloc 3 connectar. El resultat és el mapa operatiu que l'equip s'emporta: «Stack mental Copilot a 3Cat»."
commands:
  - label: "Stack mental Copilot a 3Cat — la slide que us emporteu"
    language: "markdown"
    code: |
      ## MODES (Bloc 1)
      Ask → conversa i exploració
      Edit → canvis puntuals
      Plan → planificació sense tocar codi
      Agent → execució autònoma supervisada

      ## MODELS (Bloc 1)
      GPT mini → tasques mecàniques (cost baix)
      Sonnet  → equilibri qualitat/cost
      Opus    → raonament complex, arquitectura

      ## PERSONALITZACIÓ (Bloc 2)
      copilot-instructions.md · path-specific
      Skills personalitzades · Custom Agents
      Prompt files reutilitzables

      ## CONNEXIÓ EXTERNA (Bloc 3)
      MCP servers · mcp-3cat operatiu
      Jira, APIs internes, build history
  - label: "Que us emporteu del programa comú — mapa complet"
    language: "markdown"
    code: |
      ## Descoberta
      Ask mode + model gran (Bloc 1)
      MCP de Jira (Bloc 3)

      ## Disseny
      Plan mode (Bloc 1)
      Models Opus/Sonnet · Custom instructions (Bloc 1)

      ## Implementació
      Skills + Agents + MCPs (Blocs 1–3)

      ## Proves
      Skill vitest-test-generator (Bloc 2)
      Estratègia → JUnit/xUnit

      ## Revisió de Codi
      Agent pr-reviewer (Bloc 2)
      CodeRabbit/Qodo · Futur: GitHub Actions

      ## CI/CD
      Coding Agent (Bloc 2)
      MCP custom per a build history
      Futur: GitHub Actions

      ## Operacions
      MCP servers → Sentry/Datadog
      Observabilitat de la IA
  - label: "Governança — policies, mètriques i propers passos"
    language: "markdown"
    code: |
      ## POLICIES
      - Ni PII, ni credentials al chat
      - PRs generades sempre en mode draft
      - Skills corporatives: tech leads + revisió per parells

      ## MÈTRIQUES
      - Adoption rate (devs, dies/setmana)
      - Cost per developer (canvi pricing juny)
      - Bug rate i PR review pass rate
      - Time-to-feature (la mètrica clau del ROI)

      ## PROPERS PASSOS
      - Pilot MCP corporatiu → Jira (candidat clar)
      - Backlog de Skills del Bloc 2: 2-3 primers
      - Mètriques baseline ABANS de fer res
      - Conversa: IA al cicle complet, no només Implementation
screenshots:
  - src: "/screenshots/bloc-4-01.png"
    alt: "El mapa del cicle — 7 fases amb icones"
    caption: "El mapa complet: Descoberta, Disseny, Implementació, Proves, Revisió de Codi, CI/CD i Operacions."
  - src: "/screenshots/bloc-4-02.png"
    alt: "Fase 1 Descoberta — brief ambigu vs 10 preguntes refinades"
    caption: "Brief ambigu del PM → Ask mode + Opus en 30 segons → 10 preguntes de clarificació. L'humà respon. La IA evita oblidar-ne cap."
  - src: "/screenshots/bloc-4-03.png"
    alt: "Stack mental Copilot a 3Cat — la slide fotografiable"
    caption: "Modes, Models, Personalització i Connexió externa: tot el que heu après, connectat en un sol mapa."
  - src: "/screenshots/bloc-4-04.png"
    alt: "Fase 5 Revisió de Codi — 3 capes i la Regla d'Or"
    caption: "3 capes de revisió + la Regla d'Or: un agent mai fa merge sol."
  - src: "/screenshots/bloc-4-05.png"
    alt: "Que us emporteu del programa comú — mapa final amb icones"
    caption: "4 blocs · 4 setmanes · 1 infraestructura. Tot al vostre repo."
artifact:
  - "Mapa operatiu personal: quin mode, model i eina aplicar a cada fase del SDLC de 3Cat"
  - "Comprensió de la Regla d'Or: un agent mai fa merge sol — el merge és sempre humà"
  - "Polítiques de governança acordades per a l'equip (PII, mode draft, revisió per parells)"
  - "Mètriques de seguiment definides: adoption rate, cost per developer, bug rate, time-to-feature"
  - "Propers passos concrets: pilot MCP Jira, backlog de skills, mètriques baseline"
pdfFile: "bloc-4-sdlc-ia.pdf"
prevBlock:
  id: "bloc-3"
  title: "MCP i Protocols de Connexió IA"
nextBlock:
  id: "bloc-a"
  title: "Creació d'Interfícies amb IA"
---

## En el Bloc 4 unim tot el après fins ara

Bloc 1 → `copilot-instructions.md` · Bloc 2 → 3 capes + prompts + agent · Bloc 3 → `mcp-3cat` operatiu · **Bloc 4 → Workflows automatitzats**

## «L'arquitecte amb IA NO és l'IA arquitecte.»

IA augmenta el vostre pensament. No el substitueix. La decisió és vostra. La responsabilitat també.

Aquesta distinció és especialment important a la **Fase 2 (Disseny)**: Plan mode no toca codi, llegeix el repo i planifica, però l'arquitectura la decidiu vosaltres.

## La Regla d'Or de la Revisió de Codi

**Un agent mai fa merge sol.** Pot revisar. Pot suggerir. El merge és sempre humà.

Les 3 capes de revisió a 3Cat: IDE local (custom agent del Bloc 2) → Al PR via Bitbucket (CodeRabbit, Qodo) → Quality Gate (SonarQube + IA, ja el teniu).

## CI/CD: integrar sense substituir

L'stack de 3Cat (Jenkins · Bitbucket · SonarQube · Nexus · RPMs/WARs/MSIs/Docker) no canvia. La IA s'integra afegint intel·ligència sobre el pipeline existent: genera configs, detecta flakiness, escriu receptes de build. Futur: Coding Agent + GitHub Actions.

## Observabilitat de la IA — la conversa nova del 2026

Quan l'equip genera codi amb IA regularment, cal mesurar-ne l'impacte: bug rate IA vs humans, rollback rate per canvis IA, time-to-fix. Eines com MCP de Sentry permeten consultar errors directament des de Copilot Chat i identificar el commit causant sense sortir de l'IDE.

## Tancament del programa comú

La diferència entre adoptar IA i no adoptar-la no és la velocitat de generació de codi. És la velocitat d'aprenentatge col·lectiu. Cada millora que un de vosaltres faci a una skill o a un prompt beneficia tothom el dia següent.
