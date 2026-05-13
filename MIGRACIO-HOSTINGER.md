# Guia de Configuració per Desplegar a Hostinger

## 📋 Resum dels Canvis

El projecte ha estat reorganitzat per desplegar automàticament a **Hostinger** (hosting compartit o Node.js) en lloc de Cloudflare Pages:

- ✅ **astro.config.mjs**: Ja configurat amb `output: 'static'` (sense adaptadors SSR)
- ✅ **GitHub Actions**: Workflow creat (`.github/workflows/deploy.yml`) per fer deploy automàtic
- ✅ **Documentació**: Guia completa a `deploy/hostinger-subdomini.md`
- ✅ **Variables d'entorn**: `.env.example` creat com a referència

## 🚀 Passos Per Configurar (Primera Vegada)

### 1️⃣ Crear Subdomini a Hostinger (hPanel)

**Temps estimat: 5 minuts**

Segueix la secció **"1️⃣ Crear el Subdomini a Hostinger"** de [deploy/hostinger-subdomini.md](../deploy/hostinger-subdomini.md):

- Va a hPanel → Dominis → Subdominis
- Crea `3cat` apuntant a document root `public_html/3cat/`
- Deixa que Hostinger configuri el certificat SSL automàticament

### 2️⃣ Crear Compte FTP a Hostinger

**Temps estimat: 5 minuts**

Segueix la secció **"2️⃣ Obtenir Credencials FTP"** de [deploy/hostinger-subdomini.md](../deploy/hostinger-subdomini.md):

- Va a hPanel → Hosting → Comptes FTP
- Crea un compte FTP específic (ex: `deploy-3cat`)
- **Anota**: Servidor FTP, usuari, contrasenya

### 3️⃣ Afegir GitHub Secrets

**Temps estimat: 5 minuts**

Segueix la secció **"3️⃣ Afegir GitHub Secrets al Repositori"** de [deploy/hostinger-subdomini.md](../deploy/hostinger-subdomini.md):

Al repositori GitHub, afegeix 4 secrets (Settings → Secrets and variables → Actions):

```
FTP_HOST               = ftp.elink.cat (o el que et doni Hostinger)
FTP_USERNAME           = deploy-3cat (o el nom que hayas creat)
FTP_PASSWORD           = la-teva-contrasenya-segura
PUBLIC_FORMSPREE_ID    = abc123def456 (opcional, per al formulari)
```

### 4️⃣ Provar el Deploy Automàtic

**Temps estimat: 5 minuts**

Segueix la secció **"4️⃣ Verificar la Configuració de GitHub Actions"** de [deploy/hostinger-subdomini.md](../deploy/hostinger-subdomini.md):

```bash
# Fes un canvi i punja a main
git add .
git commit -m "test: trigger deploy to hostinger"
git push origin main
```

- Va a GitHub → Actions
- Observa que el workflow s'executa
- En 3-5 minuts, hauria d'estar verd ✅

### 5️⃣ Verificar que la Web Funciona

**Temps estimat: 2 minuts**

Accedeix a `https://3cat.elink.cat` i verifica:

- [ ] La pàgina d'inici carrega correctament
- [ ] El certificat SSL és vàlid (sense avisos)
- [ ] Els links internos funcionen (clica a alguns blocs)
- [ ] Descarregar un PDF funciona
- [ ] El formulari de feedback es pot enviar

## 🔄 Workflow Futur

Un cop configurat, el flux és molt simple:

```bash
# Fes canvis al codi/contingut
nano src/content/blocs/bloc-1.md

# Build local per verificar
npm run build
npm run preview

# Punja a GitHub
git add .
git commit -m "feat: actualitzar bloc-1"
git push origin main

# GitHub Actions fa el deploy automàticament en 3-5 minuts
# Veure progrés: GitHub → Actions
```

## 📚 Fitxers Importants

### Configuració
- **astro.config.mjs** - Ja correcte (static output)
- **.env.example** - Referència de variables d'entorn
- **.github/workflows/deploy.yml** - Workflow automàtic

### Documentació
- **deploy/hostinger-subdomini.md** - Guia completa de configuració
- **README.md** → "🚀 Deploy a Hostinger" - Resum al README

### Per a VPS Futura (opcional)
- **deploy/nginx-3cat-elink-cat.conf** - Configuració Nginx (futura)
- **deploy/apache-3cat-elink-cat.conf** - Configuració Apache (futura)
- **deploy/deploy.sh** - Script rsync (futura)

## ❓ Preguntes Freqüents

### Puc fer canvis sense afectar la web en directe?

Sí. Fes els canvis a una branca diferent de `main`, i el deploy solo es fa quan pushes a `main`. Per a desenvolupament:

```bash
# Crea una branca nova
git checkout -b feature/nou-bloc

# Fes canvis i pushes
git push origin feature/nou-bloc

# Quan estigueu satisfets, fes merge a main
git checkout main
git merge feature/nou-bloc
git push origin main  # Això triggera el deploy
```

### Quant de temps tarda el deploy?

- **Build**: 1-2 minuts
- **FTP upload**: 1-2 minuts
- **Total**: 3-5 minuts

### Si fallo en la configuració de secrets, com ho arreglo?

1. Va a GitHub → Settings → Secrets and variables → Actions
2. Clica l'icona de paperera per eliminar el secret
3. Clica "New repository secret" per recrear-lo
4. Fes un nou push per provar de nou

### Com puc accedir als fitxers via FTP manualment?

Usa **FileZilla** o terminal:

```bash
ftp ftp.elink.cat
# Usuari: deploy-3cat
# Contrasenya: ***
cd public_html/3cat
ls
```

## ✅ Checklist Final

- [ ] Subdomini `3cat.elink.cat` creat a hPanel
- [ ] Compte FTP creat a hPanel
- [ ] 4 GitHub Secrets afegits al repositori
- [ ] Primer deploy automàtic ha acabat (verd ✅ a GitHub Actions)
- [ ] `https://3cat.elink.cat` carrega correctament
- [ ] Certificat SSL és vàlid
- [ ] Primer canvi es va desplegar correctament

---

**Si nécessitis ajuda**, consulta:
1. [deploy/hostinger-subdomini.md](../deploy/hostinger-subdomini.md) - Guia detallada
2. [README.md](../README.md) - Secció "🚀 Deploy a Hostinger" - Troubleshooting
3. Suport de Hostinger - Problemes amb FTP o DNS

**✨ Fins aquí! El projecte està preparat per a producció a Hostinger.**
