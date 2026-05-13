# Guia de Components Reutilitzables

## 📦 Components disponibles

### 1. ModuleLayout.astro
Layout principal per a pàgines de mòdul/bloc formatiu.

**Props**:
- `title` (string) - Títol del bloc
- `blockId` (string) - Identificador (ex: "bloc-1")
- `duration` (string) - Durada (ex: "2h")
- `audience` (string) - Audiència (ex: "Tots els perfils")
- `date?` (string, opcional) - Data
- `prevBlock?` (object) - Bloc anterior: `{ id: string, title: string }`
- `nextBlock?` (object) - Bloc següent: `{ id: string, title: string }`

**Exemple d'ús**:
```astro
---
import ModuleLayout from '../layouts/ModuleLayout.astro';
---

<ModuleLayout
  title="Machine Learning"
  blockId="bloc-1"
  duration="2.5h"
  audience="Desenvolupadors"
  prevBlock={{ id: 'bloc-0', title: 'Introducció' }}
  nextBlock={{ id: 'bloc-2', title: 'Deep Learning' }}
>
  <!-- Contingut aquí -->
</ModuleLayout>
```

---

### 2. PracticeExercise.astro
Caixa destacada per a exercicis pràctics amb estil vermell Elink.

**Props**:
- `title` (string) - Títol de l'exercici

**Exemple d'ús**:
```astro
<PracticeExercise title="Entrenar un model de classificació">
  <p>Descripció de l'exercici...</p>
  <CommandBlock code="python script.py" />
</PracticeExercise>
```

---

### 3. CommandBlock.astro
Bloc de codi/comanda amb botó "Copiar" funcional.

**Props**:
- `code` (string) - Codi a mostrar
- `language?` (string, default: "bash") - Llenguatge de programació
- `label?` (string) - Etiqueta del bloc (ex: "Terminal", "train_model.py")

**Exemple d'ús**:
```astro
<CommandBlock
  code="pip install scikit-learn"
  language="bash"
  label="Terminal"
/>

<CommandBlock
  code={`def hello():
  print("Hola!")`}
  language="python"
  label="main.py"
/>
```

---

### 4. Screenshot.astro
Imatge amb caption i estilos de presentació.

**Props**:
- `src` (string) - URL de la imatge
- `alt` (string) - Text alternatiu
- `caption?` (string) - Caption sota la imatge

**Exemple d'ús**:
```astro
<Screenshot
  src="/screenshots/ml-diagram.png"
  alt="Diagrama de ML"
  caption="Classificació dels algoritmes de ML"
/>
```

---

### 5. ArtifactCard.astro
Targeta per a "Artefactes de sortida" (deliverables del bloc).

**Props**:
- `title` (string) - Títol
- `items` (string[]) - Llista d'artefactes

**Exemple d'ús**:
```astro
<ArtifactCard
  title="Entregables esperats"
  items={[
    'Model entrenat en .pkl',
    'Gràfica de resultats',
    'Documentació'
  ]}
/>
```

---

### 6. PdfDownload.astro
Botó destacat per descarregar PDF de la presentació.

**Props**:
- `href` (string) - Ruta del PDF
- `filename` (string) - Nom del fitxer

**Exemple d'ús**:
```astro
<PdfDownload
  href="/pdfs/bloc-1-presentacio.pdf"
  filename="bloc-1-presentacio.pdf"
/>
```

---

### 7. BlockCard.astro
Targeta per a la home: visualitza un bloc en format compact i clicable.

**Props**:
- `id` (string) - Identificador del bloc
- `number` (number) - Número d'ordre
- `title` (string) - Títol del bloc
- `duration` (string) - Durada
- `audience` (string) - Audiència
- `summary` (string) - Resumen curt
- `href` (string) - URL del bloc

**Exemple d'ús**:
```astro
<BlockCard
  id="bloc-1"
  number={1}
  title="Introducció a l'IA"
  duration="1.5h"
  audience="Tots els perfils"
  summary="Conceptes fonamentals..."
  href="/bloc/bloc-1"
/>
```

---

## 🎨 Estils personalitzats

Tots els components utilitzen les variables CSS definides:
- `--color-elink`: #D63B3B (vermell primari)
- `--color-3cat`: #DC0000 (vermell secundari)
- `--color-text-primary`: #1a1a1a (text negre)
- `--color-bg-light`: #f9f9f9 (fons clar)

## 🔧 Exemple complet de pàgina

Veure `src/pages/exemple-bloc.astro` per a un exemple complet que combina tots els components.

## 💡 Recomanacions

1. **PracticeExercise** sempre dins de la secció d'exercicis
2. **CommandBlock** dins de **PracticeExercise** per separar instruccions
3. **Screenshot** per visualitzar diagrames o resultats
4. **ArtifactCard** al final del bloc per llistar deliverables
5. **PdfDownload** en la secció de recursos
6. **BlockCard** només a la home (pàgina blocs.astro)

## 📝 Notes

- Tots els components estan en **CATALÀ**
- Els components són **fully responsive**
- La funcionalitat de copiar del **CommandBlock** és client-side (JavaScript inline)
- No requereixen frameworks externes (purament Astro + Tailwind)
