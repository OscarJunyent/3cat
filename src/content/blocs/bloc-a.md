---
blockId: "bloc-a"
number: "A"
title: "Creació d'Interfícies amb IA"
duration: "3h"
audience: "Product Owners, UX/UI"
summary: "Del problema a la hipòtesi en una hora, no en una setmana. Construïm un prototip funcional amb Lovable i el convertim en user stories per a Jira."
objective: "Aprendre a anar del problema a la hipòtesi de producte en una hora: generar prototips funcionals amb Lovable, configurar el Knowledge del projecte i exportar el resultat com a user stories de Jira llestes per a l'equip de dev."
order: 5
keyTopics:
  - name: "Panorama d'eines: Lovable, v0, Bolt i Copilot"
    duration: "20 min"
    description: "Quina eina trio per a cada cas: Lovable (apps completes, sessió amb usuaris), v0 (components UI individuals), Bolt.new (codi descarregable per a dev) i Copilot Agent (per a devs, dins l'IDE)."
  - name: "Les 4 regles del bon prompt"
    duration: "15 min"
    description: "Concret > abstracte · Domini explícit (sempre menciona 3Cat) · Comportaments, no només aparença · Iteració curta. Aplicables a Lovable, v0 i Bolt."
  - name: "Avís de confidencialitat"
    duration: "10 min"
    description: "Regles d'ús a 3Cat: mai dades reals d'usuaris, mai informació estratègica confidencial, prototips amb URL pública. Per a casos amb dades sensibles, consulteu Plataforma o Seguretat ABANS."
  - name: "El Knowledge de Lovable"
    duration: "20 min"
    description: "El Knowledge és l'equivalent del copilot-instructions.md del Bloc 2, aplicat a Lovable. Tokens globals, seccions per component, variants i casos d'ús. Qui el manté: POs + UX/UI."
  - name: "Taller: eina interna de gestió de continguts (4 iteracions)"
    duration: "60 min"
    description: "Dashboard amb sidebar, formulari de contingut amb metadades, graella EPG setmanal i generació automàtica de User Stories per a Jira. Dinàmica de parelles: PO que prompta + usuari que valida."
  - name: "Exportació i connector Atlassian → Jira"
    duration: "20 min"
    description: "URL pública compartible, connexió a GitHub (recomanat per a 3Cat), exportació ZIP i connector Atlassian per generar User Stories automàticament amb criteris d'acceptació Gherkin."
  - name: "Alternativa: repo real + GitHub Copilot Enterprise"
    duration: "15 min"
    description: "Quan té sentit saltar-se Lovable i treballar directament sobre el repositori de producció. Recomanació per a la majoria de POs de 3Cat: Lovable primer."
practiceExercise:
  title: "Prototip d'eina interna de gestió de continguts de 3Cat"
  description: "Construïm un prototip d'una eina interna inspirada en eines reals de 3Cat en quatre iteracions: dashboard amb sidebar, formulari de contingut amb metadades, graella EPG setmanal i generació automàtica de User Stories per a Jira. Treballareu per parelles: un fa de PO que prompta, l'altre fa d'usuari que valida."
commands:
  - label: "Iteració 1 — Dashboard (estructura general)"
    language: "text"
    code: |
      Crea un panell intern de gestió de continguts audiovisuals per a 3Cat.
      Ha de tenir:
      - Sidebar esquerre amb navegació: Continguts, Calendari, Drets, Estadístiques, Configuració
      - Capçalera amb el nom "Gestor de continguts 3Cat" i un botó primari "Nou contingut"
      - Àrea central amb una taula buida amb columnes: Títol, Canal, Data emissió, Durada, Estat
      Estètica: fons blanc, sidebar gris clar, sense decoració excessiva.
  - label: "Iteració 2 — Formulari de nou contingut"
    language: "text"
    code: |
      Afegeix el formulari de "Nou contingut" que s'obre quan es clica el botó de la capçalera.
      Camps: Títol (text, obligatori), Tipus (Sèrie / Pel·lícula / Informatiu / Esports /
      Entreteniment / En directe), Canal (TV3 / 3Cat / Catalunya Ràdio / 33 / Super3 / Catràdio),
      Data d'emissió (date picker), Hora d'inici i hora de fi (time pickers),
      Durada (calculada automàticament), Subtítols (TTML / WebVTT / cap),
      Botó "Desa contingut" (primari) i "Cancel·la" (ghost).
  - label: "Iteració 3 — Graella de programació (EPG)"
    language: "text"
    code: |
      Afegeix la secció "Calendari" al sidebar.
      Graella de programació setmanal:
      - Files: franges horàries de 30 minuts, de 06:00 a 02:00
      - Columnes: TV3, 3Cat, Catalunya Ràdio, 33, Super3
      - Continguts de prova: 3-4 programes ficticis per canal
      - Codis de color per tipus: sèries (blau), informatius (verd), esports (taronja), en directe (vermell)
      - En clicar un programa, mostra tooltip amb títol, canal i horari
  - label: "Iteració 4 — Generació de User Stories per a Jira"
    language: "text"
    code: |
      Genera 7 User Stories en format Jira a partir del prototip que hem creat.
      Format: [COM A] [rol] [VULL] [acció] [PER A] [objectiu]
      Inclou criteris d'acceptació en format Gherkin (Given / When / Then), mínim 2 per story.
      Etiquetes: frontend, backend, o fullstack.
      Estimació: S (1-2h), M (3-5h), L (1-2 dies).
      Roles: editor de continguts, cap de programació, administrador.
artifact:
  - "Prototip funcional de l'eina de gestió de continguts amb URL pública compartible"
  - "Dashboard amb sidebar i navegació entre seccions"
  - "Formulari de contingut amb tots els camps de metadades de domini 3Cat"
  - "Graella de programació EPG setmanal amb codis de colors per tipus"
  - "7-10 User Stories format Jira amb criteris d'acceptació Gherkin"
  - "Comprensió del cicle complet: prompt → prototip → validació → Jira → dev"
pdfFile: "bloc-a-creacio-interficies-ia.pdf"
prevBlock:
  id: "bloc-4"
  title: "IA al Cicle de Vida del Software"
nextBlock:
  id: "bloc-b"
  title: "Design System com a Skills d'IA"
---

# Bloc A · Creació d'Interfícies amb IA
**Track Product Owners · Maig 2026**

---

## L'objectiu del bloc

Del problema a la hipòtesi en una hora, no en una setmana.

Al final d'aquesta sessió haureu creat un prototip funcional d'una eina interna de 3Cat, l'haureu iterat amb feedback en directe i haureu generat les User Stories llestes per a l'equip de development, sense sortir de Lovable.

---

## Eines que usarem

| Eina | Tipus | Quan usar-la |
|---|---|---|
| **Lovable** | Aplicació web completa | Sessions amb usuaris, prototips ràpids, iteració conversacional |
| **v0 (Vercel)** | Components UI individuals | Components específics, disseny inspirat en una imatge |
| **Bolt.new** | App amb codi descarregable | Quan vols entregar codi al dev directament |
| **Copilot Agent** | Generació dins l'IDE | Sessions conjuntes amb dev (no stand-alone per PO) |

Avui treballarem principalment amb **Lovable**.

---

## Les 4 regles del bon prompt

Aplicables a Lovable, v0, Bolt o qualsevol eina conversacional.

**1. Concret > abstracte**
"Un panell amb 3 columnes" funciona millor que "un panell modern". Descriu l'estructura, no l'estètica.

**2. Domini explícit**
Sempre menciona 3Cat / mitjà audiovisual. Posa el context: canal, programa, EPG, subtítols. La IA no sap on treballa si no li ho dius.

**3. Comportaments, no només aparença**
Descriu què passa quan algú clica, no només com es veu. "En clicar el botó, s'obre un formulari amb els camps de metadades" és millor que "un botó vermell".

**4. Iteració curta**
Comença simple. Afegeix complexitat al prompt següent. No intentis descriure tot el producte en un sol prompt.

---

## Avís de confidencialitat

> Tot el que envieu a Lovable es processa als seus servidors.

**Regles d'ús a 3Cat:**

- **Mai dades reals d'usuaris** — useu placeholders. Mai noms, emails, ni IDs interns reals.
- **Mai informació estratègica confidencial** — acords amb proveïdors, números sensibles, contrasenyes.
- **Prototips amb URL pública** — accessibles a qualsevol que conegui la URL. Configureu privacitat si cal.
- **Per a casos amb dades sensibles reals** — consulteu Plataforma o Seguretat ABANS d'usar les eines.

---

## El Knowledge de Lovable

El Knowledge és l'equivalent del `copilot-instructions.md` que vau configurar al Bloc 2, però per a Lovable. És un document de text que Lovable llegeix automàticament a cada prompt que envieu, sense que ho hagis d'explicar cada vegada.

**On configurar-lo:** `Project Settings → Knowledge`

**Què hi va:**

El Knowledge del DS de 3Cat ja està preparat. Inclou:
- Tokens de color (vermell `#C8102E` per a marca, blau `#0066cc` per a accions)
- Escala d'espaiat de 4px
- Tipografia i border radius
- Component **Button** (4 variants, 3 mides, accessibilitat WCAG 2.2 AA)
- Component **ChannelBadge** (colors oficials per canal: TV3, 3Cat, 33, Super3, Catràdio, Catalunya Ràdio)
- Component **LiveIndicator** (punt vermell animat, text "En directe", mai verd)
- Component **ProgramCard** (ratio 16:9, ChannelBadge + LiveIndicator integrats)
- Vocabulari de domini 3Cat (EPG, canal, programació, subtítols, en directe)

Podeu descarregar el fitxer de Knowledge preparat a la secció de recursos.

---

## L'exercici: Prototip d'eina interna de gestió de continguts

Cas inspirat en eines reals de 3Cat. Treballareu per parelles: un fa de PO que prompta, l'altre fa de l'usuari que valida.

### Iteració 1 · Dashboard (estructura general)
**Objectiu:** Crear l'estructura base de la pantalla.

**Resultat esperat:** Dashboard funcional amb sidebar i capçalera navegable.

---

### Iteració 2 · Formulari de nou contingut
**Objectiu:** Afegir el formulari de creació de contingut amb camps de metadades reals de 3Cat.

**Dinàmica de parella:** el rol d'usuari valida el formulari i dona feedback. El PO itera amb un prompt de correcció.

**Resultat esperat:** Formulari complet amb metadades de domini 3Cat.

---

### Iteració 3 · Graella de programació (EPG)
**Objectiu:** Afegir la vista de calendari de programació per canal i franja horària.

**Resultat esperat:** Vista EPG interactiva amb codis de color per tipus de contingut.

---

### Iteració 4 · User Stories per a development
**Objectiu:** Convertir el prototip validat en User Stories llestes per a l'equip dev.

**Resultat esperat:** 7-10 User Stories en format Jira llestes per al backlog de development.

---

## Exportació del prototip

Un cop validat el prototip amb usuaris, teniu 4 opcions per treure'l de Lovable:

| Opció | Com | Quan usar |
|---|---|---|
| **URL pública** | Automàtica — cada prototip té URL | Sessions amb usuaris, reunions de refinament |
| **Connexió GitHub** | Project Settings → GitHub | Recomanat per a 3Cat — el dev continua des d'aquí |
| **Exportació ZIP** | Export → Download ZIP | Si no useu GitHub o voleu inspeccionar el codi |
| **Connector Atlassian** | Connectors → Jira | User Stories generades automàticament al vostre Jira |

**El cicle complet:** Prototip a Lovable → Valida amb usuaris → Connector Atlassian → Jira: US + Tests → Equip dev pot començar.

---

## Alternativa avançada: repo real + GitHub Copilot Enterprise

Per a POs amb context tècnic que vulguin contribuir directament al repositori de producció sense pas intermedi.

**Avantatges:** zero gap de sincronització, tota la infraestructura dels Blocs 2 i 3 disponible, codi reutilitzable pels developers, historial de decisions al git.

**Desavantatges:** requereix Node, git i un editor; velocitat d'iteració menor; sense preview en directe; risc de conflictes de merge.

> **Recomanació per a 3Cat:** Lovable primer. L'alternativa amb Copilot és per a POs amb perfil tècnic que ja saben usar git.

---

## Que us emporteu

1. **Passos per treballar amb Lovable** — les 4 regles de prompt + estructura per iteració. Punt de partida real per a la propera sessió amb usuaris.
2. **Com configurar el Knowledge al vostre projecte** — el paral·lelisme entre el que heu après als Blocs 1–4 i el flux de treball de Lovable.
3. **Un flux de treball validat: prototip → Jira** — connector Atlassian, 5–10 User Stories amb criteris d'acceptació Gherkin, sense pas manual.
4. **Una experiència real d'iteració** — heu provat l'eina amb un cas real de 3Cat, no un exemple inventat. I sabeu quan usar Lovable i quan passar directament al repo amb Copilot.
