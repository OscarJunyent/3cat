# Design System · 3Cat
Versió: 1.0 · Maig 2026

Quan generis qualsevol interfície per a 3Cat, segueix estrictament aquestes regles.
No inventis components, variants, tokens ni valors visuals que no estiguin definits aquí.
Si un cas no està cobert, pregunta en lloc d'inventar.

---

## Identitat de marca

3Cat és la corporació pública audiovisual catalana. Les seves eines internes i productes digitals (TV3, Catalunya Ràdio, plataforma 3Cat) comparteixen un DS comú.

**Dos rols de color diferenciats — no els barregis:**
- **Brand / identitat visual**: vermell `#C8102E` → capçaleres, logos, accents decoratius, indicadors "en directe"
- **Accions interactives (UI)**: blau `#0066cc` → botons, links, focus rings, qualsevol element clicable

---

## Tokens globals

### Colors de marca (brand)
| Token | Valor | Ús |
|---|---|---|
| brand.primary | `#C8102E` | Vermell 3Cat — capçaleres, accents visuals, badge "Live" |
| brand.primary.hover | `#A50D25` | Hover d'elements de marca |
| brand.on-primary | `#FFFFFF` | Text sobre fons vermell |

### Colors d'acció (UI interactiu)
| Token | Valor | Ús |
|---|---|---|
| action.primary.bg | `#0066cc` | Botó primary, fons |
| action.primary.fg | `#FFFFFF` | Text sobre botó primary |
| action.primary.hover | `#0055aa` | Hover del botó primary |
| action.primary.active | `#004488` | Actiu / premut |
| action.secondary.fg | `#0066cc` | Text i border del botó secondary |
| action.secondary.hover | `#e6f0fa` | Hover del botó secondary |
| action.ghost.fg | `#0066cc` | Text del botó ghost |
| action.ghost.hover | `#f0f6fc` | Hover del botó ghost |

### Colors de feedback
| Token | Valor | Ús |
|---|---|---|
| feedback.danger.bg | `#c93030` | Botó danger, alertes |
| feedback.danger.fg | `#ffffff` | Text sobre danger |
| feedback.danger.hover | `#a82828` | Hover danger |
| feedback.success | `#1f7a3a` | Confirmació, èxit |
| feedback.warning | `#b56700` | Avís, atenció |

### Colors de text i superfície
| Token | Valor | Ús |
|---|---|---|
| text.primary | `#1a1a1a` | Text principal |
| text.secondary | `#555555` | Text secundari, subtítols |
| text.disabled | `#999999` | Text desactivat |
| bg.default | `#ffffff` | Fons de pàgina |
| bg.disabled | `#e8e8e8` | Fons d'elements desactivats |
| focus.ring | `#0066cc` | Outline de focus (WCAG 2.2 AA) |

### Espaiat (escala de 4px — no inventis valors intermedis)
| Token | Valor |
|---|---|
| space.1 | `4px` |
| space.2 | `8px` |
| space.3 | `12px` |
| space.4 | `16px` |
| space.5 | `24px` |
| space.6 | `32px` |

### Border radius
| Token | Valor | Ús |
|---|---|---|
| radius.sm | `4px` | Elements petits, badges |
| radius.md | `6px` | Botons, inputs — per defecte |
| radius.lg | `12px` | Cards, modals |
| radius.full | `9999px` | Pills, indicadors rodons |

### Tipografia
- **Font**: `system-ui, -apple-system, 'Segoe UI', sans-serif`
- **Mides**: sm `14px` · md `16px` · lg `18px`
- **Pesos**: regular `400` · semibold `600` · bold `700`

### Transicions
- **Ràpida**: `150ms` ease — hover, focus
- **Normal**: `250ms` ease — aparicions, col·lapses

---

## Component: Button

### Quan usar-lo
Representa una **acció que l'usuari executa**. Regla ràpida:
> Si falla, l'usuari hauria de poder **repetir-ho** → Button.
> Si falla, l'usuari hauria de **navegar enrere** → Link (`<a>`).

Casos vàlids: submitir formularis · obrir modals · eliminar contingut · desar canvis · iniciar operacions asíncrones.

### Quan NO usar-lo
- **Navegació entre pàgines** → usa `<a>` o Link
- **Estats binaris persistents** (activat/desactivat) → usa Toggle o Switch
- **Selecció dins un grup d'opcions** → usa RadioGroup o Tabs
- **Cards clickables senceres** → usa un link wrapper, no un botó

### Variants

| Variant | Quan | Fons | Text | Border |
|---|---|---|---|---|
| `primary` | Acció principal. **Una sola per pantalla.** | `#0066cc` | `#ffffff` | cap |
| `secondary` | Acció alternativa a la primary | transparent | `#0066cc` | `1px #0066cc` |
| `ghost` | Acció terciària, espais densos | transparent | `#0066cc` | cap |
| `danger` | Acció destructiva o irreversible | `#c93030` | `#ffffff` | cap |

**Regla important:** mai dos botons `primary` a la mateixa vista. Si tens dos CTA igualment importants, un és `secondary`.

### Mides

| Mida | Padding H | Padding V | Font | Alçada mínima |
|---|---|---|---|---|
| `sm` | `space.3` (12px) | `space.1` (4px) | 14px | 32px |
| `md` | `space.4` (16px) | `space.2` (8px) | 16px | 40px ← **default** |
| `lg` | `space.5` (24px) | `space.3` (12px) | 18px | 48px |

No inventis mides intermèdies (`md+`, `xl`, etc.).

### Estats

| Estat | Comportament |
|---|---|
| `default` | Colors de la variant |
| `hover` | primary: `#0055aa` · secondary/ghost: fons `#e6f0fa` · danger: `#a82828` |
| `focus` | Outline `2px #0066cc`, offset `2px` — **sempre visible, mai `outline:none`** |
| `active` | primary: `#004488`, transitori <150ms |
| `disabled` | Opacitat 40%, `cursor: not-allowed`, `aria-disabled="true"` |
| `loading` | Spinner substitueix el text, mateixa mida, `aria-busy="true"` |

### Accessibilitat (obligatori, WCAG 2.2 AA)
- **Sempre `<button>` semàntic** — mai `<div>` ni `<span>` amb onClick
- **`type="button"` sempre explícit** — el default HTML és `submit` i dispara formularis involuntàriament
- **Botó només icona** → afegir `aria-label` descriptiu (ex: `aria-label="Tanca el modal"`)
- **Mida mínima del target**: 44×44px per a interfícies mòbils
- **Focus visible**: contrast mínim 3:1 del focus ring contra el fons

### Errors típics que has d'evitar

| ❌ Error | ✅ Correcte |
|---|---|
| `<div onClick={...}>` | `<button type="button">` |
| Variant "tertiary", "outline", "flat" | Usar les 4 variants oficials |
| Dos botons `primary` a la mateixa pantalla | Un `primary`, l'altre `secondary` |
| `background: #0066cc` hardcoded | Usar el token `action.primary.bg` |
| `padding: 16px` hardcoded | Usar el token `space.4` |
| Ometre `type="button"` | Sempre explícit |
| `outline: none` sense substitut | Mantenir focus ring visible |
| Text llarg: "Fes clic aquí per desar" | Verb + objecte: "Desa canvis" |

### Exemple de codi que ha de generar Lovable

```tsx
<button
  type="button"
  style={{
    backgroundColor: '#0066cc',
    color: '#ffffff',
    padding: '8px 16px',
    borderRadius: '6px',
    border: 'none',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    minHeight: '40px',
    transition: 'background-color 150ms ease',
  }}
  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0055aa'}
  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0066cc'}
>
  Desa canvis
</button>
```

---

## Vocabulari de domini 3Cat

Quan l'usuari mencioni qualsevol d'aquests termes, entén el seu significat i usa'l correctament a la UI:

- **EPG** (Electronic Programme Guide): graella de programació per canal i franja horària
- **ProgramCard**: targeta que mostra un programa (títol, canal, hora, durada, imatge)
- **ChannelBadge**: badge petit que identifica el canal (TV3, 3Cat, Catràdio...)
- **LiveIndicator**: indicador visual que un contingut s'emet en directe (punt vermell `#C8102E` + text "En directe")
- **TimeSlot**: franja horària dins la graella EPG
- **TTML / WebVTT / EBU-TT-D**: formats de subtítols — no els generis directament, són processats pel backend
- **Canal**: TV3 · 3Cat · Catalunya Ràdio · Catràdio · 33 · Super3
- **Metadades de contingut**: títol, tipus (serie/movie/live), canal, data emissió, durada, drets, subtítols disponibles

---

## Regles generals de generació

1. **Fons blanc per defecte** — `#ffffff`. Fons fosc (`#1a1a1a`) només per a components de vídeo o reproductors.
2. **El vermell `#C8102E` és de marca, no d'acció** — no el facis servir per a botons interactius.
3. **El blau `#0066cc` és d'acció, no de marca** — no el facis servir per a capçaleres o logos.
4. **No afegeixis ombres als botons** — el DS de 3Cat no usa `box-shadow` en botons.
5. **Textos de botons en català** — "Desa", "Cancel·la", "Elimina", "Crea", no "Save", "Cancel", "Delete", "Create".
6. **Escala d'espaiat de 4px** — si necessites un espaiat, usa el token més proper. No inventis `10px`, `14px`, `20px`.
