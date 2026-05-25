---
blockId: "bloc-b"
number: "B"
title: "Design System com a Skills d'IA"
duration: "3h"
audience: "UX/UI"
summary: "Convertim el Design System de 3Cat en instruccions que la IA pot llegir i seguir. Cada skill val per cada cop que es generi UI a partir d'avui."
objective: "Entendre per què la IA sense instruccions explícites repeteix inconsistències i aprendre a convertir components del DS en skills operatives per a Copilot i Lovable."
order: 6
keyTopics:
  - name: "El diagnòstic: el DS no és el problema, la traducció ho és"
    duration: "15 min"
    description: "El DS a Figma és correcte i mantingut. El problema: cada developer interpreta els components a la seva manera. La IA sense instruccions explícites repeteix la inconsistència més ràpid."
  - name: "Què és una skill UX/UI"
    duration: "15 min"
    description: "Un fitxer markdown que descriu un component amb prou detall perquè la IA generi codi conforme sense mirar Figma. No és codi, no és una traducció literal, cobreix el 80%."
  - name: "Anatomia d'una skill de component"
    duration: "20 min"
    description: "Les 6 seccions obligatòries: Quan usar-lo · Quan NO usar-lo · Variants i estats · Props / API · Regles d'accessibilitat (WCAG 2.2 AA) · Errors típics. Si la IA es desvia, una d'aquestes seccions està buida o és ambigua."
  - name: "Tokens, mappings i stacks"
    duration: "15 min"
    description: "Tokens (colors, espais, mides en JSON → CSS/Tailwind/SCSS via CI) · Mappings (button.react.md · button.telerik.md · button.html.md) · Stacks vius a 3Cat (React/TS · .NET+Telerik · HTML+CSS)."
  - name: "Iteració 1 — Convergència: tots fem el Button"
    duration: "60 min"
    description: "Cadascú crea la skill del component Button a partir de Figma i del repo 3cat-design-system. Al final comparem les versions i derivem el fitxer oficial que quedarà al repo."
  - name: "Iteració 2 — Domini: component de domini per parella"
    duration: "40 min"
    description: "Cada parella escull un component específic de 3Cat (ProgramCard, ChannelBadge, LiveIndicator, TimeRangeFilter, EPGGrid) i crea la seva skill des de zero."
  - name: "Iteració 3 — Validació amb Copilot"
    duration: "15 min"
    description: "Un PO podria generar una UI correcta amb la skill que has creat? Si la IA es desvia, identifiqueu quina de les 6 seccions estava buida i corregiu-la."
practiceExercise:
  title: "Convertir components del DS de 3Cat en skills operatives"
  description: "Tres iteracions: primer tots fem la skill del Button (convergència i comparació), després cada parella tria un component de domini audiovisual (ProgramCard, ChannelBadge, LiveIndicator...) i finalment validem que Copilot segueix la skill sense desviació."
commands:
  - label: "Clonar 3cat-design-system"
    language: "bash"
    code: "git clone https://github.com/Formacio-3Cat/3cat-design-system"
  - label: "Clonar 3cat-shows-web i canviar a branca design-system"
    language: "bash"
    code: |
      git clone https://github.com/Formacio-3Cat/3cat-shows-web
      cd 3cat-shows-web
      git checkout design-system
      npm install && npm run dev
  - label: "Prompt Iteració 1 — Skill del Button"
    language: "text"
    code: |
      Genera una skill per al component Button del Design System de 3Cat.
      Basa't en l'estructura de _template.md del repo 3cat-design-system.
      El component té 4 variants (primary, secondary, ghost, danger),
      3 mides (sm, md, lg) i ha de complir WCAG 2.2 AA.
      Inclou la secció "Errors típics" amb els 4 errors més comuns de la IA.
  - label: "Prompt Iteració 2 — Skill de component de domini"
    language: "text"
    code: |
      Genera una skill per al component [NOM_COMPONENT] del Design System de 3Cat.
      Basa't en l'estructura de _template.md del repo 3cat-design-system.
      Context: 3Cat és la corporació pública audiovisual catalana.
      Els components han de funcionar en React/TS, HTML+CSS i .NET+Telerik.
      Inclou el vocabulari específic del domini audiovisual on sigui rellevant.
  - label: "Prompt Iteració 3 — Validació amb Copilot"
    language: "text"
    code: |
      Afegeix un [NOM_COMPONENT] a aquesta pàgina.
      Usa el Design System de 3Cat.
artifact:
  - "Skill `button.skill.md` actualitzada i commitada al repo `3cat-design-system`"
  - "Skill d'un component de domini audiovisual (ProgramCard / ChannelBadge / LiveIndicator / TimeRangeFilter / EPGGrid)"
  - "Validació documentada: la skill funciona amb Copilot o sabeu exactament per què no"
  - "Comprensió de l'estructura de 6 seccions aplicable a qualsevol component futur"
pdfFile: "bloc-b-design-system-skills-ia.pdf"
prevBlock:
  id: "bloc-a"
  title: "Creació d'Interfícies amb IA"
nextBlock:
  id: "hackathon"
  title: "Hackathon"
---

# Bloc B · Design System com a Skills d'IA
**Track UX/UI · Maig 2026**

---

## Accés als repositoris

Abans de començar, assegureu-vos que teniu accés als dos repositoris i que heu fet el checkout correcte.

### `3cat-design-system`
Repositori principal on viuran les skills que creareu avui.

```bash
git clone https://github.com/3cat/3cat-design-system
cd 3cat-design-system
```

Estructura rellevant:
```
3cat-design-system/
├── tokens/
│   └── tokens.json          ← font única de veritat
├── components/
│   ├── button/
│   │   ├── button.skill.md  ← la skill que explorareu a la Iteració 1
│   │   ├── button.react.md
│   │   ├── button.telerik.md
│   │   └── button.html.md
│   └── _template.md         ← plantilla per crear nous components
└── README.md
```

### `3cat-shows-web`
Repositori de producció on validareu que les skills funcionen amb Copilot.

```bash
git clone https://github.com/3cat/3cat-shows-web
cd 3cat-shows-web
git checkout design-system     # ← branca específica per a aquest exercici
npm install
npm run dev
```

> **Important:** treballeu sempre a la branca `design-system`. No feu canvis a `main`.

---

## El diagnòstic

El DS no és el problema. La traducció ho és.

El Design System de 3Cat existeix a Figma: és correcte, complet i mantingut. El problema passa en la traducció: cada developer interpreta els components a la seva manera i el resultat és inconsistències subtils per tot el codi.

**La IA no resol això automàticament.** Sense instruccions explícites, repeteix la inconsistència més ràpid.

La solució: convertir el DS en instruccions que la IA pugui llegir i seguir a cada generació de codi.

---

## Què és una skill UX/UI

Una skill UX/UI és un fitxer markdown que descriu un component, patró o regla del Design System amb prou detall perquè un model d'IA generi codi conforme sense haver de mirar Figma.

**SÍ és:**
- Intencions i restriccions del DS
- Markdown estructurat
- Operativa per a la IA

**NO és:**
- Una traducció literal de Figma
- Codi (no programem)
- Exhaustiu — cobrim el 80%

---

## Anatomia d'una skill de component

Cada fitxer de skill ha de tenir 6 seccions. Si la IA es desvia, és perquè una d'aquestes 6 seccions està buida o és ambigua.

| # | Secció | Per a què serveix |
|---|---|---|
| 1 | **Quan usar-lo** | Casos d'ús legítims. Quan és l'eina correcta. |
| 2 | **Quan NO usar-lo** | Casos on cal un altre component. La part més útil. |
| 3 | **Variants i estats** | Primary, secondary, ghost, danger... hover, focus, disabled. |
| 4 | **Props / API** | Què accepta i què retorna. El contracte. |
| 5 | **Regles d'accessibilitat** | WCAG 2.2 AA. Imprescindible. |
| 6 | **Errors típics** | Els que la IA fa més habitualment. Llistar-los explícitament. |

---

## Tokens, mappings i stacks

Tres conceptes que connecten la skill amb el codi real.

**Tokens** — font única de veritat. Colors, espais i mides en JSON.
```
tokens.json → CSS, Tailwind, SCSS via CI
```

**Mappings** — com s'implementa la skill a cada stack.
```
button.react.md · button.telerik.md · button.html.md
```

**Stacks** — els 3 stacks vius a 3Cat.
```
React/TS · .NET + Telerik · HTML + CSS
```

---

## Token Studio: la font de veritat

El `tokens.json` del DS no viu a Figma. Viu al repo. Token Studio és el pont.

**El flux:**
```
Figma (disseny) → Token Studio (plugin) → tokens.json (repo) → Skills Copilot / GitHub Actions / Knowledge Lovable
```

**Per què Token Studio i no les variables natives de Figma:**
- Les variables de Figma no s'exporten en format W3C estàndard — el que llegeix Copilot i Lovable.
- Token Studio exporta directament al repo de GitHub amb un commit automàtic.
- Permet aliases: `button.primary.bg` → `color.action.primary`. Canvia el color base, tot s'actualitza sol.

---

## Exemple del procés: Button del DS a skill

Pas a pas, com convertirem el Button de Figma en una skill operativa.

```
1. Obrim Figma · component Button amb les seves variants
2. Obrim el repo 3cat-design-system · veiem l'estructura
3. Generem components/button.skill.md amb l'ajuda de Copilot
4. Commit + push · (OPCIONAL: GitHub Action sincronitza als repos)
5. Anem a 3cat-shows-web · demanem un botó a Copilot · respecta la skill
```

---

## Les skills són codi viu

El Design System com a skills és un projecte en constant evolució.

**El DS a Figma i les skills al repo han d'anar de la mà.** Quan el DS evoluciona a Figma, les skills han d'evolucionar amb ell. Si no, la IA genera codi coherent amb una versió antiga.

| Pregunta | Resposta |
|---|---|
| **Qui manté les skills** | L'equip UX/UI és el propietari. Els developers proposen canvis via PR, però UX/UI valida i aprova. |
| **Quan actualitzar** | Quan es crea o modifica un component al DS. No cal esperar: una skill desactualitzada fa més mal que no tenir-ne. |
| **Com garantir coherència** | Revisió periòdica DS ↔ skills. El GitHub Action de sincronització ajuda, però la decisió és sempre humana. |

---

## L'exercici: 3 iteracions

### Iteració 1 · Convergència (60 min)
**Tots fem el Button**

Cadascú crea la skill del component Button a partir de Figma i del repo `3cat-design-system`. Al final comparem les 6 versions i derivem el fitxer oficial que quedarà al repo.

**Pas a pas:**

1. Obriu Figma → component `Button` → observeu variants, estats i tokens usats
2. Obriu `3cat-design-system/components/button/button.skill.md` — llegiu l'estructura
3. Obriu VS Code al repo `3cat-shows-web` (branca `design-system`)
4. Creeu un fitxer nou: `components/button-v2.skill.md`
5. Useu Copilot per generar la skill amb el prompt de la secció de recursos
6. Reviseu el resultat, ajusteu i compareu amb els companys
7. Entre tots derivem el fitxer oficial → commit a `3cat-design-system`

**Resultat esperat:** `components/button/button.skill.md` actualitzat i commitat al repo.

---

### Iteració 2 · Domini (40 min)
**Component de domini per parella**

Cada parella escull un component específic de 3Cat i crea la seva skill des de zero. Aquests components no existeixen als DS genèrics — són exclusius del context audiovisual.

**Components disponibles:**

| Component | Descripció | Complexitat |
|---|---|---|
| `ProgramCard` | Targeta de programa amb títol, canal, horari i imatge 16:9 | Alta |
| `ChannelBadge` | Badge identificador de canal (TV3, 3Cat, 33...) amb colors oficials | Baixa |
| `LiveIndicator` | Punt vermell animat + text "En directe". Mai verd. | Baixa |
| `TimeRangeFilter` | Filtre de franja horària per a la graella EPG | Mitjana |
| `EPGGrid` | Graella de programació per canal i franja horària | Alta |

**Resultat esperat:** fitxer `components/[nom-component].skill.md` commitat al repo.

---

### Iteració 3 · Validació (15 min)
**Prova amb Copilot si segueix el Design System**

Un cop creada la skill, la validació és simple: **un PO podria generar una UI correcta amb ella?**

1. Obriu VS Code al repo `3cat-shows-web` (branca `design-system`)
2. Assegureu-vos que el `copilot-instructions.md` referencia el repo de skills
3. Demaneu a Copilot que afegeixi el component usant el DS de 3Cat
4. Comproveu el resultat contra la skill: colors, variants, accessibilitat
5. Si la IA s'ha desviat, identifiqueu quina de les 6 seccions estava buida i corregiu la skill

**Resultat esperat:** validació documentada — la skill funciona o sabeu exactament per què no.

---

## Que us emporteu del Bloc B

1. **Un repositori `3cat-design-system` viu** — amb components definits avui i una plantilla per a la resta.
2. **Una palanca, no més feina** — decidiu una vegada. Es propaga a 30 developers automàticament.
3. **El DS deixa de ser una recomanació** — passa a ser una restricció que la IA respecta a cada generació.
4. **Un consumidor immediat: el Bloc A** — els POs poden fer prototips amb les vostres skills.

> El multiplicador és real. Cada skill val per cada cop que es generi UI a partir d'avui.
