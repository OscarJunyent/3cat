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
  - name: "El fil conductor: la funcionalitat de recomanacions"
    duration: "10 min"
    description: "3Cat vol llançar recomanacions personalitzades: «Després de veure un episodi, el sistema en proposa 3 més basant-se en gènere, durada i hora d'emissió.» Sembla simple. Passarà per totes les fases del cicle."
  - name: "Fase 1 — Descoberta"
    duration: "15 min"
    description: "Dues passes: (1) Brief ambigu del PO via Microsoft Teams. Ask mode + Opus 4.7 en 30 segons genera 10 preguntes de clarificació. (2) MCP de Jira en 30 segons genera una tasca estructurada amb títol, descripció, membres, casos extrems, test coverage, timings i dependencies. L'humà respon les preguntes. La IA evita oblidar-ne cap."
  - name: "Fase 2 — Disseny"
    duration: "15 min"
    description: "Tasca de Jira + Plan mode + Opus 4.7 → Llista de passos a seguir. El context inclou: Jira Issue, Copilot Instructions i el repositori amb casos anteriors. L'humà decideix com implementar cada tasca. La IA evita oblidar passos."
  - name: "Fase 3 — Implementació"
    duration: "15 min"
    description: "Tot el que heu après, connectat. Modes (Ask / Plan / Agent), Models (GPT mini / Sonnet / Opus), Personalització (skills + Agents + prompt files del Bloc 2) i Connexió externa (MCP servers del Bloc 3)."
  - name: "Fase 4 — Proves"
    duration: "15 min"
    description: "Test STRATEGY (què testegem: casos, riscos, edge cases, fluxos d'integració — la IA pot planificar-ho tot) vs Test GENERATION (com l'escrivim: sintaxi Vitest/JUnit/xUnit, mocks, fixtures — skill vitest-test-generator del Bloc 2, patró traslladat a JUnit). Tendim a saltar Strategy. És on tenim més marge."
  - name: "Fase 5 — Revisió de Codi"
    duration: "10 min"
    description: "3 capes: IDE local (custom agent del Bloc 2), Al PR via Bitbucket (CodeRabbit, Qodo), Quality Gate (SonarQube + IA). Regla d'or: un agent mai fa merge sol. Pot revisar. Pot suggerir. El merge és sempre humà."
  - name: "Fase 6 — CI/CD"
    duration: "10 min"
    description: "Pipeline de 3Cat: Jenkins + Bitbucket + SonarQube + Nexus + RPMs/WARs/MSIs/Docker. IA s'integra sense substituir: genera Dockerfiles i configs (Build), detecta flakiness (Test), receptes de build (Package), Coding Agent (Deploy). Futur: GitHub Actions."
  - name: "Fase 7 — Operacions + Propers passos"
    duration: "15 min"
    description: "MCP de Sentry + MCP de GitHub: query des de Copilot Chat, agrupa errors, identifica commit causant. Observabilitat de la IA: bug rate IA vs humans, rollback rate, time-to-fix. Propers passos en 3 capes: IDE personal, Repositori equip, Procés complet. El Hackathon és el primer moment real."
practiceExercise:
  title: "Mapa complet: quin mode, model i eina a cada fase del SDLC de 3Cat"
  description: "Treballem sobre el cas real de la funcionalitat de recomanacions de 3Cat i repassem les 7 fases del cicle identificant en cada una quin mode de Copilot aplicar (Ask/Plan/Agent), quin model triar (GPT mini/Sonnet/Opus), quines skills del Bloc 2 fer servir i quins MCP servers del Bloc 3 connectar. El resultat és el mapa operatiu que l'equip s'emporta: «Stack mental Copilot a 3Cat»."
commands:
  - label: "Stack mental Copilot a 3Cat — la slide que us emporteu"
    language: "markdown"
    code: |
      ## MODES (Bloc 1)
      Ask   → conversa i exploració
      Plan  → planificació sense tocar codi
      Agent → execució autònoma supervisada

      ## MODELS (Bloc 1)
      GPT mini → tasques mecàniques (cost baix)
      Sonnet   → equilibri qualitat/cost
      Opus     → raonament complex, arquitectura

      ## PERSONALITZACIÓ (Bloc 2)
      copilot-instructions.md · path-specific
      Skills personalitzades · Agents
      Prompt files reutilitzables

      ## CONNEXIÓ EXTERNA (Bloc 3)
      MCP servers · mcp-3cat operatiu
      Jira, APIs internes, build history
  - label: "Que us emporteu del programa comú — mapa final"
    language: "markdown"
    code: |
      # 4 blocs · 2 setmanes · 1 infraestructura. Tot al vostre repo.

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
  - label: "On aplicar els propers passos — les 3 capes"
    language: "markdown"
    code: |
      ## Capa 1 — IDE (personal)
      Aplicar modes, models i skills al teu flux de treball diari.
      Pots començar demà. Sense coordinació amb ningú.

      ## Capa 2 — Repositori (equip)
      Afegir copilot-instructions.md i prompt files al repo compartit.
      Necessita coordinació amb l'equip. Val la pena.

      ## Capa 3 — Procés complet (fase)
      Integrar MCP, agents de revisió i workflows al pipeline real.
      Necessita acord entre equips. El Hackathon és el primer pas.

      ---
      HACKATHON → Què puc provar en 4 hores?
      La setmana que ve és un bon moment.
screenshots:
  - src: "/screenshots/bloc-4-01.png"
    alt: "El mapa del cicle — 7 fases amb icones"
    caption: "El mapa complet: Descoberta, Disseny, Implementació, Proves, Revisió de Codi, CI/CD i Operacions."
  - src: "/screenshots/bloc-4-02.png"
    alt: "Fase 1 Descoberta — brief ambigu del PO i 10 preguntes refinades per Copilot"
    caption: "Brief ambigu via Microsoft Teams → Ask mode + Opus 4.7 en 30 segons → 10 preguntes de clarificació."
  - src: "/screenshots/bloc-4-03.png"
    alt: "Fase 1 Descoberta — MCP de Jira generant una tasca estructurada"
    caption: "La mateixa tasca via MCP de Jira: en 30 segons genera títol, descripció, membres, casos extrems, test coverage, timings i dependencies."
  - src: "/screenshots/bloc-4-04.png"
    alt: "Stack mental Copilot a 3Cat — la slide fotografiable"
    caption: "Modes, Models, Personalització i Connexió externa: tot el que heu après, connectat en un sol mapa."
  - src: "/screenshots/bloc-4-05.png"
    alt: "On aplicar els propers passos — 3 capes i el Hackathon"
    caption: "3 capes d'adopció: IDE personal, Repositori d'equip i Procés complet. El Hackathon és el primer moment real."
artifact:
  - "Mapa operatiu personal: quin mode, model i eina aplicar a cada fase del SDLC de 3Cat"
  - "Comprensió de la Regla d'Or: un agent mai fa merge sol — el merge és sempre humà"
  - "Full mapa del programa comú: 4 blocs · 2 setmanes · 1 infraestructura al repositori"
  - "Identificació de la primera acció concreta per a cadascú: IDE (personal), Repositori (equip) o Procés (fase)"
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

## Descoberta: dues passes, mateix brief

El brief ambigu del PO arriba per **Microsoft Teams**. Dues eines en 30 segons cadascuna:

**Ask mode + Opus 4.7** genera 10 preguntes de clarificació: per a quins programes, definició d'episodi similar, shows nous sense historial, engagement, latència, continguts infantils, usuaris anònims...

**MCP de Jira** genera directament una tasca estructurada: títol, descripció exhaustiva, membres involucrats, casos extrems a verificar, test coverage, timings i dependencies.

L'humà respon les preguntes. La IA evita oblidar-ne cap.

## Disseny: Plan mode llegeix, no toca

Plan mode + Opus 4.7 llegeix la Jira Issue, les Copilot Instructions i el repositori amb casos anteriors. Genera una llista de passos a seguir. L'humà decideix com implementar cada tasca.

## La Regla d'Or de la Revisió de Codi

**Un agent mai fa merge sol.** Pot revisar. Pot suggerir. El merge és sempre humà.

3 capes a 3Cat: IDE local (custom agent del Bloc 2) → Al PR via Bitbucket (CodeRabbit, Qodo) → Quality Gate (SonarQube + IA, ja el teniu).

## CI/CD: integrar sense substituir

L'stack de 3Cat (Jenkins · Bitbucket · SonarQube · Nexus · RPMs/WARs/MSIs/Docker) no canvia. La IA s'integra afegint intel·ligència sobre el pipeline existent. Futur: Coding Agent + GitHub Actions.

## Observabilitat de la IA — conversa nova del 2026

Quan l'equip genera codi amb IA regularment, cal mesurar-ne l'impacte: bug rate IA vs humans, rollback rate per canvis IA, time-to-fix. MCP de Sentry permet consultar errors des de Copilot Chat i identificar el commit causant sense sortir de l'IDE.

## Tancament

**IA toca TOTES les fases, no només quan teclegeu codi.**

Cada millora que un de vosaltres faci a una skill o a un prompt beneficia tothom el dia següent.
