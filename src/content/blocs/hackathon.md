---
blockId: "hackathon"
number: "Hackathon"
title: "Hackathon: Exercici Pràctic"
duration: "4h"
audience: "Tots els perfils"
summary: "Tot el que heu construït durant 4 setmanes, aplicat a un problema real. Un lliurable funcional al repo, un README i una demo en viu."
objective: "Aplicar de forma integrada tot el que heu après — copilot-instructions.md, library de skills, servidors MCP, procés Lovable i skills del DS — en un projecte real escollit per vosaltres. Lliurable funcional al repo al final del dia."
order: 7
keyTopics:
  - name: "Kickoff — Formació d'equips i elecció del repte"
    duration: "15 min"
  - name: "Disseny ràpid — Arquitectura mínima"
    duration: "30 min"
  - name: "Sprint de construcció"
    duration: "1h 45min"
  - name: "Pausa"
    duration: "15 min"
  - name: "Acabar i documentar — Commit final i README"
    duration: "30 min"
  - name: "Presentacions — 2 equips en viu"
    duration: "45 min"
practiceExercise:
  title: "El vostre repte, el vostre lliurable"
  description: "Equips de 3–4 persones. Escolliu un dels reptes suggerits o proposeu el vostre problema real. El criteri és simple: ha de ser útil demà. Al final del dia: 1 lliurable commitat al repo, un README mínim i una demo en viu de 5 minuts."
commands:
  - label: "Repte MCP — Connector per a APIs internes"
    language: "text"
    code: |
      Un MCP que s'integra amb les vostres APIs internes i amb Copilot
      per agilitzar processos de l'equip.
  - label: "Repte Skill — Skill per generar altres skills"
    language: "text"
    code: |
      Una skill mare que us ajudi a generar noves skills a nivell d'equip.
      Prompt file que accepta el nom d'un component i genera l'estructura
      de les 6 seccions obligatòries.
  - label: "Repte Workflow — GitHub Action: issue de bug → PR amb tests"
    language: "text"
    code: |
      Copilot Coding Agent que detecta issues etiquetats 'bug'
      i obre un PR amb fix + test.
  - label: "Repte DS Skill — Integrar el vostre Design System com a skills"
    language: "text"
    code: |
      Creació d'un repositori font amb el Design System de 3Cat
      i GitHub Actions per sincronitzar-ho amb tots els projectes actius.
  - label: "Repte Lliure — El vostre problema real"
    language: "text"
    code: |
      Si teniu un pain point identificat al Bloc 0, aquest és el moment.
      Proposeu-lo a l'equip. El criteri: ha de ser útil demà.
artifact:
  - "1 lliurable al repo de l'equip — commitat i funcional"
  - "README d'ús per a l'equip (qualsevol company pot usar-ho l'endemà)"
  - "Demo en viu de 5 minuts — problema, solució i què va quedar pendent"
pdfFile: "hackathon-exercici-practic.pdf"
prevBlock: { id: "bloc-b", title: "Design System com a Skills d'IA" }
nextBlock: null
---

## Què és el Hackathon

La diferència entre una formació i un projecte.

**ÉS**
- Treball real sobre codi real
- Equip escollit per vosaltres
- Objectiu definit per vosaltres
- Lliurable funcional al repo al final del dia
- El formador és mentor, no professor

**NO ÉS**
- Un examen de la formació
- Un exercici guiat pel formador
- Obligatori acabar-ho tot
- Una competició entre equips
- L'última vegada que useu aquestes eines

---

## El punt de partida i el punt d'arribada

Tot el que heu construït durant 4 setmanes, aplicat a un problema real.

**AMB QUÈ ENTREU**

| Eina | Origen |
|---|---|
| `copilot-instructions.md` actiu al vostre repo | Bloc 1+2 |
| Exemple de llibreria de skills | Bloc 2 |
| Servidors MCP actius (Atlassian, per exemple) | Bloc 3 |
| Procés per treballar amb Lovable | Bloc A |
| Skills del Design System en `.prompt.md` | Bloc B |

**QUÈ HEU D'OBTENIR**

| Lliurable | Descripció |
|---|---|
| **1 lliurable al repo** | Commitat. Funcional. |
| **README d'ús per a l'equip** | Qualsevol company pot usar-ho l'endemà. |
| **Demo en viu de 5 minuts** | Problema, solució i què va quedar pendent. |

---

## Planificació del Hackathon

Proposta orientativa — cada equip s'autogestiona.

| Hora | Durada | Activitat |
|---|---|---|
| **9:30–9:45** | 15 min | **Kickoff** — Formació d'equips (3–4 persones). Escolliu el repte i definiu l'objectiu i el lliurable. |
| **9:45–10:15** | 30 min | **Disseny ràpid** — Definiu l'arquitectura mínima. Quines skills, quins prompts, quin MCP necessiteu? No fem codi encara. |
| **10:15–12:00** | 1h 45min | **Sprint de construcció** — Implementació. Useu tot el que teniu: Copilot, prompt files, MCP, Design System. |
| **12:00–12:15** | 15 min | **Pausa** |
| **12:15–12:45** | 30 min | **Acabar i documentar** — Commit final, README mínim, preparació de la demo de 5 minuts. |
| **12:45–13:30** | 45 min | **Presentacions** — 2 equips presenten en viu. La resta valora i fa preguntes. |

---

## Reptes suggerits

Podeu escollir un d'aquests o proposar el vostre. El criteri: **ha de ser útil demà.**

| Tipus | Repte | Descripció |
|---|---|---|
| **MCP** | Connector MCP per a APIs internes | Un MCP que s'integra amb les vostres APIs internes i amb Copilot per agilitzar processos |
| **Skill** | Skill per generació d'altres skills | Una skill mare que us ajudi a generar noves skills a nivell d'equip |
| **Workflow** | GitHub Action: issue de bug → PR amb tests | Copilot Coding Agent que detecta issues etiquetats 'bug' i obre un PR amb fix + test |
| **DS Skill** | Integrar el vostre Design System com a skills | Creació d'un repositori font amb el DS de 3Cat i GitHub Actions per sincronitzar-ho amb tots els projectes actius |
| **Lliure** | El vostre problema real | Si teniu un pain point identificat al Bloc 0, aquest és el moment |
