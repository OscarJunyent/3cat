---
blockId: "bloc-2"
number: 2
title: "Skills i Agents amb GitHub Copilot Enterprise"
duration: "3h"
audience: "Equips d'enginyeria i desenvolupament"
summary: "Introducció pràctica a Skills i Agents dins GitHub Copilot Enterprise, definició de coneixement reutilitzable i creació d'agents especialitzats amb eines i permisos controlats."
objective: "Entendre com crear Skills reutilitzables, definir Agents especialitzats i establir una arquitectura escalable de coneixement i automatització dins d'una organització."
order: 2
keyTopics:
  - name: "Introducció a Skills i Agents"
    duration: "20 min"
  - name: "Anatomia i estructura d'una Skill"
    duration: "35 min"
  - name: "Governança i àmbits de Skills"
    duration: "20 min"
  - name: "Creació d'Agents especialitzats"
    duration: "35 min"
  - name: "Skills vs Agents"
    duration: "15 min"
  - name: "Tallers pràctics"
    duration: "45 min"
practiceExercise:
  title: "Creació de Skills i Agents per projectes 3Cat"
  description: "Treballarem sobre diferents repositoris per crear Skills reutilitzables i Agents especialitzats capaços de revisar pull requests, generar tests i validar accessibilitat seguint convencions reals de 3Cat."
commands:
  - label: "Clonar el repositori API"
    language: "bash"
    code: "git clone https://github.com/Formacio-3Cat/3cat-shows-api.git"
  - label: "Canviar a la branca del taller"
    language: "bash"
    code: "git checkout skills-agents"
  - label: "Executar una Skill manualment"
    language: "bash"
    code: "/vitest-test-generator"
  - label: "Clonar el repositori web"
    language: "bash"
    code: "git clone https://github.com/Formacio-3Cat/3cat-shows-web.git"
  - label: "Executar Skill d'accessibilitat"
    language: "bash"
    code: "/accessibility-validator"
  - label: "Executar Agent revisor"
    language: "bash"
    code: "@bitbucket-jira-pr-reviewer"
screenshots:
  - src: "/screenshots/bloc-2-skills-structure.png"
    alt: "Estructura d'una Skill de GitHub Copilot"
    caption: "Organització dels fitxers i instruccions reutilitzables d'una Skill"
  - src: "/screenshots/bloc-2-agent-reviewer.png"
    alt: "Agent especialitzat de revisió de pull requests"
    caption: "Configuració d'un Agent amb eines i permisos controlats"
artifact:
  - "Skill vitest-test-generator funcional"
  - "Agent de revisió de PR configurat"
  - "Estructura .github/skills/ definida"
  - "Exemples d'instructions reutilitzables"
  - "Criteri per diferenciar Skills i Agents"
pdfFile: "bloc-2-agents-skills.pdf"
prevBlock: { id: "bloc-1", title: "Fonaments i ús de GitHub Copilot Enterprise" }
nextBlock: { id: "bloc-3", title: "MCP i Protocols de Connexió IA" }
---

# Contingut detallat

## Copilot a la teva organització

GitHub Copilot Enterprise permet anar més enllà del simple assistent contextual introduint dues peces clau:

- Skills
- Agents

Aquestes dues capes permeten construir coneixement reutilitzable i automatització especialitzada dins dels equips d'enginyeria.

### Skills

Les Skills són paquets d'habilitats que Copilot pot activar automàticament segons el context i la petició.

No són prompts llargs, sinó paquets estructurats de coneixement.

### Agents

Els Agents representen una persona especialitzada amb:

- Prompt específic
- Eines limitades
- Model concret
- Permisos restringits

## Una Skill no és un prompt llarg

Una Skill és un paquet de coneixement especialitzat que Copilot activa quan detecta una necessitat concreta.

### Característiques

- És una carpeta estructurada
- Pot contenir scripts executables
- Pot incloure assets i referències
- Es pot activar automàticament
- També es pot forçar manualment

Exemple d'estructura:

.github/skills/nom-skill/SKILL.md

## Anatomia d'una Skill

Cada Skill es defineix mitjançant un fitxer SKILL.md amb frontmatter YAML.

Exemple:

```yaml
---
name: vitest-test-generator
description: Generates Vitest tests for Express routes following 3Cat conventions.
---
```

### La descripció és crítica

GitHub Copilot decideix activar una Skill segons la coincidència entre:

- El prompt
- El context
- La descripció de la Skill

Una mala descripció implica que la Skill pràcticament no s'activarà mai.

## Tres capes de responsabilitat

### Organització

Coneixement compartit per múltiples repositoris.

Responsables:
- Plataforma
- Seguretat

### Projecte

Context específic d'un producte o repositori.

Responsables:
- Equip de desenvolupament

### Personal

Configuració individual del desenvolupador.

Responsable:
- Cada developer

## Àmbits de Skills

| Àmbit | Path | Disponibilitat |
|---|---|---|
| Project | .github/skills/ | Disponible |
| Personal | ~/.copilot/skills/ | Disponible |
| Organització | Centralitzat | Properament |

## Taller pràctic de Skills

Durant el taller es treballarà sobre diferents Skills reutilitzables.

### Exemple: Vitest Test Generator

Objectiu:
- Generar tests seguint convencions 3Cat
- Crear mocks correctes
- Estandarditzar naming i estructura

### Exemple: Accessibility Validator

Objectiu:
- Validar accessibilitat
- Detectar problemes comuns
- Automatitzar comprovacions bàsiques

## Anatomia d'un Agent

Un Agent es construeix combinant:

- Prompt
- Tools
- Model

La restricció d'eines és el que el fa útil i segur.

Exemple:

```yaml
---
name: bitbucket-jira-pr-reviewer
tools: ['read', 'search']
model: 'Claude Sonnet 4.6'
---
```

## Exemple d'Agent revisor

L'agent de revisió comprova:

1. Referències Jira correctes
2. Sonar smells
3. Arquitectura de controllers
4. Existència de tests

### Tools restringits

L'agent només pot:

- Llegir
- Cercar

No pot modificar codi.

### Selecció de model

Claude Sonnet és suficient per tasques de revisió.

No cal utilitzar models molt més cars com Opus.

## Skills vs Agents

| Skill | Agent |
|---|---|
| Manual d'instruccions | Persona amb eines |
| Activació automàtica | Selecció manual |
| Coneixement i recursos | Prompt + tools + model |
| Tasques repetitives | Workflows especialitzats |

### Regla mental

Si hi ha:
- permisos
- eines
- context persistent

... probablement estem parlant d'un Agent.

## Taller pràctic d'Agents

Durant el taller:

- Crearem un Agent revisor
- Executarem workflows reals
- Simularem revisions de pull requests
- Aplicarem convencions de 3Cat

## Conclusions del bloc

En acabar aquest bloc, els participants haurien de:

1. Entendre què és una Skill i quan utilitzar-la
2. Crear Skills reutilitzables i ben descrites
3. Diferenciar Skills i Agents
4. Construir Agents amb permisos restringits
5. Definir una arquitectura escalable de coneixement IA

## Preparació pel Bloc 3

El següent bloc introduirà:

- MCPs (Model Context Protocol)
- Connexió amb Jira
- Integració amb Confluence
- Accés a eines externes
- Arquitectures de context distribuït
