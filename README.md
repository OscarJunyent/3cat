# 3Cat × Elink - Portal de Formació en IA

Portal de materials de formació en **Intelligència Artificial**, impartit per [Elink.cat](https://elink.cat) per a l'àrea d'Enginyeria de [3Cat (CCMA)](https://www.ccma.cat).

## 🚀 Tecnologia

- **Astro 4** - Framework web modern per a construcció de sites estàtics/dinàmics
- **Tailwind CSS** - Framework CSS utilitari per a disseny ràpid
- **TypeScript** - Tipat estàtic per a major seguretat en el codi
- **Cloudflare Pages** - Deploy serverless i escalable

## 📁 Estructura del Projecte

```
3cat-elink-portal/
├── src/
│   ├── pages/              # Pàgines de l'aplicació (rutes automàtiques)
│   ├── layouts/            # Layouts base (BaseLayout.astro)
│   ├── components/         # Components reutilitzables
│   ├── content/            # Contingut markdown dels blocs
│   └── styles/             # Estilos globals i variables CSS
├── public/
│   ├── pdfs/               # Documents PDF
│   ├── screenshots/        # Captures de pantalla
│   ├── images/             # Imatges del portal
│   └── favicon.svg
├── tailwind.config.js      # Configuració de Tailwind CSS i tokens de color
├── astro.config.mjs        # Configuració d'Astro
├── tsconfig.json           # Configuració de TypeScript
└── package.json
```

## 🎨 Sistema de Disseny

### Colors

- **Color primari (Elink)**: `#D63B3B` - Vermell corall per a elements principals
- **Color secundari (3Cat)**: `#DC0000` - Vermell intens per a referències del client
- **Text primari**: `#1a1a1a` - Negre suau
- **Fons**: Blanc/Gris molt clar (`#f9f9f9`)

### Tipografia

- **Font**: Inter (sense serifs, moderna)
- **Variants**: h1, h2, h3, h4, body, small (definides a `tailwind.config.js`)

### Tokens CSS

Tots els tokens de color i espaiat es defineixen com a variables CSS a `:root` en `src/styles/global.css`:
- `--color-elink`
- `--color-3cat`
- `--color-text-primary`
- `--color-bg-light`
- `--spacing-*` (xs, sm, md, lg, xl, 2xl)

## 🔧 Instruccions de Desenvolupament

### Requisits

- **Node.js** 18 o superior
- **npm** o **yarn**

### Instal·lació

```bash
npm install
```

### Desenvolupament local

```bash
npm run dev
```

El portal estarà disponible a `http://localhost:3000`

### Build per a producció

```bash
npm run build
```

Genera els arxius optimitzats a la carpeta `dist/`

### Deploy al Servidor Propi

Veure la secció **🚀 Deploy** a baix per a instruccions completes.

## 📝 Contingut

### Estructura de contingut

Els blocs de contingut es defineixen en markdown a `src/content/` i es distribueixen en les pàgines.

**Exemple estructura:**
```
src/content/
├── bloc-1/
│   └── index.md
├── bloc-2/
│   └── index.md
└── ...
```

### Lingua

Tot el contingut és en **CATALÀ**.

## 🚀 Deploy

### Requisits al Servidor

- **Nginx 1.18+** (o Apache 2.4+)
- **Accés SSH/SFTP** al servidor
- **Certificat SSL** per a `3cat.elink.cat` (Let's Encrypt recomanat)
- **rsync** instal·lat al servidor (per al script de deploy)

### Configuració del DNS

Apunta `3cat.elink.cat` al servidor on es farà hosting:

```
CNAME: 3cat.elink.cat → elink.cat
  o
A: 3cat.elink.cat → [IP del servidor]
```

Pot trigar 24-48h en propagar-se globalment.

### Pas 1: Configurar el Certificat SSL

**Amb Let's Encrypt i certbot (recomanat)**:

```bash
# Instal·lar certbot (si no està instal·lat)
sudo apt-get install certbot python3-certbot-nginx  # Nginx
# o
sudo apt-get install certbot python3-certbot-apache  # Apache

# Generar certificat
sudo certbot certonly --standalone -d 3cat.elink.cat

# El certificat es guardarà a: /etc/letsencrypt/live/3cat.elink.cat/
```

### Pas 2: Configurar Nginx o Apache

#### Nginx

```bash
# Copiar la configuració
sudo cp deploy/nginx-3cat-elink-cat.conf /etc/nginx/sites-available/3cat.elink.cat

# Crear symlink a sites-enabled
sudo ln -s /etc/nginx/sites-available/3cat.elink.cat /etc/nginx/sites-enabled/

# Verificar configuració
sudo nginx -t

# Recarregar Nginx
sudo systemctl reload nginx
```

#### Apache

```bash
# Copiar la configuració
sudo cp deploy/apache-3cat-elink-cat.conf /etc/apache2/sites-available/

# Habilitar el site
sudo a2ensite 3cat.elink.cat

# Habilitar mòduls necessaris
sudo a2enmod rewrite headers ssl

# Verificar configuració
sudo apache2ctl configtest

# Recarregar Apache
sudo systemctl reload apache2
```

### Pas 3: Crear Estructura de Directoris al Servidor

```bash
# Al servidor, com a root o amb sudo
mkdir -p /var/www/3cat.elink.cat/dist
chown deploy:deploy /var/www/3cat.elink.cat  # Canviar al usuari de deploy
chmod 755 /var/www/3cat.elink.cat
```

### Pas 4: Configurar Variables d'Entorn

Crear/editar `.env` localment:

```
PUBLIC_FORMSPREE_ID=abc123def456
```

Substituir `abc123def456` amb l'ID real del formulari de Formspree.

### Pas 5: Configurar el Script de Deploy

Editar `deploy/deploy.sh`:

```bash
SERVER="elink.cat"           # Servidor destinació
USER="deploy"                # Usuari SSH
REMOTE_PATH="/var/www/3cat.elink.cat"  # Ruta al servidor
```

### Pas 6: Executar el Deploy

```bash
# Des de la carpeta del projecte
./deploy/deploy.sh
```

El script farà:
1. `npm run build`
2. Verificar que `dist/` existeix
3. Pujar amb `rsync -avz --delete`

### Pas 7: Verificar el Deploy

**Checklist post-deploy**:

- [ ] Accedir a https://3cat.elink.cat i verificar que carrega
- [ ] Verificar que el certificat SSL és vàlid (sense avisos)
- [ ] Descarregar un PDF des de `/pdfs/` per comprovar que funciona
- [ ] Omplir i enviar el formulari de feedback
- [ ] Navegar per alguns blocs i verificar que els links funcionen
- [ ] Verificar que les imatges es carreguen correctament
- [ ] Comprovar que `robots.txt` és accessible: https://3cat.elink.cat/robots.txt
- [ ] Comprovar que el sitemap es va generar: https://3cat.elink.cat/sitemap-index.xml

### Troubleshooting

**503 Service Unavailable**:
- Verificar que Nginx/Apache està en execució: `systemctl status nginx` o `systemctl status apache2`
- Verificar logs: `/var/log/nginx/` o `/var/log/apache2/`

**Certificat SSL no vàlid**:
- Renovar amb certbot: `sudo certbot renew --force-renewal`
- Verificar data d'expiracio: `sudo openssl x509 -in /etc/letsencrypt/live/3cat.elink.cat/fullchain.pem -noout -dates`

**Links interns retornen 404**:
- Verificar que `try_files` (Nginx) o `RewriteRule` (Apache) estan configurats correctament
- Astro ha de generar rutes sense extensió (ex: `/bloc-1` no `/bloc-1.html`)

**Formspree no envia emails**:
- Verificar `PUBLIC_FORMSPREE_ID` al `.env`
- Comprovar logs de Formspree: https://formspree.io/dashboard
- Verificar Content-Security-Policy a la consola del navegador

### Auto-renovació de Certificat SSL

Configurar una tasca cron per renovar automàticament:

```bash
# Editar crontab
sudo crontab -e

# Afegir aquesta línia (renovació diària a les 2 AM)
0 2 * * * /usr/bin/certbot renew --quiet && systemctl reload nginx
```

## 📦 Estructura de Deploy

```
deploy/
├── deploy.sh                    # Script per pujar a servidor
├── nginx-3cat-elink-cat.conf    # Configuració Nginx
└── apache-3cat-elink-cat.conf   # Configuració Apache

public/
├── robots.txt                   # SEO robots
├── _headers                     # Headers recomanats (referència)
└── favicon.svg                  # Icon del site
```

## 🔐 Security Headers

La configuració del servidor inclou headers de seguretat:

- **X-Content-Type-Options**: nosniff (prevenir MIME sniffing)
- **X-Frame-Options**: SAMEORIGIN (prevenir clickjacking)
- **Content-Security-Policy**: Limita recursos a dominis confiables
- **Referrer-Policy**: Control privacitat de referrer

## 📝 Contingut

## 🏗️ Estructura de pàgines

- `/` - Pàgina d'inici
- `/blocs` - Llistat de blocs (a implementar)
- `/feedback` - Formulari de feedback (a implementar)

## 📚 Recursos

- [Documentació d'Astro](https://docs.astro.build)
- [Documentació de Tailwind CSS](https://tailwindcss.com/docs)
- [Elink.cat](https://elink.cat)
- [3Cat (CCMA)](https://www.ccma.cat)

## ✏️ Editar Contingut

### Sistema Data-Driven amb Content Collections

Tota la web és editable sense tocar codi Astro. Els blocs es defineixen dins de `src/content/blocs/` en format Markdown amb frontmatter YAML.

### Modificar un bloc existent

1. **Obrir el fitxer del bloc**: `src/content/blocs/bloc-X.md`
2. **Editar el frontmatter** (metadades):
   - `title`: Títol del bloc
   - `duration`: Durada (ex: "2h")
   - `audience`: Audiència (ex: "Tots els perfils")
   - `objective`: Descripció de l'objectiu
   - `summary`: Frase curta per a la home

3. **Editar el contingut markdown**: Tot el que vinc sota el frontmatter YAML es renderitza com a HTML

### Afegir una comanda/exemple de codi

Edita l'array `commands` al frontmatter del bloc:

```yaml
commands:
  - label: "Descripció del comandament"
    language: "bash"  # o python, javascript, yaml, etc.
    code: |
      npm install dependencia
      npm run dev
```

### Afegir una captura de pantalla

1. Posa la imatge a `public/screenshots/` (ex: `bloc-1-screenshot.png`)
2. Edita l'array `screenshots` al frontmatter:

```yaml
screenshots:
  - src: "/screenshots/bloc-1-screenshot.png"
    alt: "Descripció de la imatge"
    caption: "Peu de foto opcional"
```

### Actualitzar el PDF de presentació

1. Posa el PDF a `public/pdfs/` (ex: `bloc-1-presentacio.pdf`)
2. Actualitza el camp `pdfFile` al frontmatter:

```yaml
pdfFile: "bloc-1-presentacio.pdf"
```

### Canviar l'ordre dels blocs

Edita el camp `order` al frontmatter de cada bloc:

```yaml
order: 1  # Apareix primer a la home
```

### Organitzar la navegació entre blocs

Modifica els camps `prevBlock` i `nextBlock`:

```yaml
prevBlock: { id: "bloc-1", title: "Títol del bloc anterior" }
nextBlock: { id: "bloc-3", title: "Títol del bloc següent" }
```

### Afegir items als artefactes

Edita l'array `artifact`:

```yaml
artifact:
  - "Primer artefacte/deliverable"
  - "Segon artefacte"
  - "Tercer artefacte"
```

### Afegir tòpics clau

Edita l'array `keyTopics`:

```yaml
keyTopics:
  - name: "Tema 1"
    duration: "25 min"
  - name: "Tema 2"
    duration: "30 min"
```

### Exemple complet: Editar bloc-1

```markdown
---
blockId: "bloc-1"
number: 1
title: "Nou Títol del Bloc"
duration: "2.5h"
audience: "Developers, UX/UI"
dateOptions: ["10 de maig 2026"]
summary: "Nova descripció curta"
objective: "Nou objectiu del bloc"
order: 1
keyTopics:
  - name: "Concepte 1", duration: "20 min"
  - name: "Concepte 2", duration: "30 min"
practiceExercise:
  title: "Nou exercici"
  description: "Descripció del nou exercici"
commands:
  - label: "Setup", language: "bash", code: "npm install"
screenshots:
  - src: "/screenshots/nova-imatge.png", alt: "Alt text", caption: "Peu de foto"
artifact:
  - "Artefacte 1"
  - "Artefacte 2"
pdfFile: "bloc-1-nou-pdf.pdf"
prevBlock: null
nextBlock: { id: "bloc-2", title: "Bloc Següent" }
---

## Contingut adicional (opcional)

Pots afegir més contingut markdown aquí que es renderitzarà entre
els conceptes clau i l'exercici pràctic.
```

### Build i Deploy após editar

Després de fer canvis:

```bash
# Build per veure els canvis localment
npm run build

# Preview de la build
npm run preview

# Deploy al servidor propi
./deploy/deploy.sh
```

### Crear un bloc nou

1. Crea un nou fitxer: `src/content/blocs/bloc-X.md`
2. Copia el frontmatter d'un bloc existent i personalitza
3. Incrementa l'`order` per situarlo correctament
4. Executa `npm run build`

**Important**: El `blockId` ha de coincidir amb el nom del fitxer (sense `.md`).

---

## 📄 Llicència

Contingut creat per Elink.cat en col·laboració amb 3Cat (CCMA). © 2026.

## 👥 Equip

- **Elink.cat** - Formació i contingut
- **3Cat (CCMA)** - Àrea d'Enginyeria

---

**Estat del projecte**: En desenvolupament 🛠️

Per a preguntes o suggeriments, contacta amb l'equip d'Elink.cat.
