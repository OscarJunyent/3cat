# Configuració de Subdomini a Hostinger + Deploy Automàtic

Guia pas a pas per configurar el subdomini `3cat.elink.cat` i els GitHub Actions per al deploy automàtic.

## 📋 Requisits Previs

- Accés a **hPanel** de Hostinger (panell d'administració)
- Repositori privat a GitHub
- El projecte ja té workflow de GitHub Actions configurar (`.github/workflows/deploy.yml`)

## 1️⃣ Crear el Subdomini a Hostinger

### Accedir a hPanel

1. Entra a [hPanel.hostinger.com](https://hPanel.hostinger.com)
2. Loga't amb les credencials de Hostinger
3. Selecciona el domini principal: **elink.cat**

### Crear el Subdomini

1. Va a **Dominis** → **Subdominis**
2. Clica al botó **+ Afegir Subdomini**
3. Emplena els camps:
   - **Nom del subdomini**: `3cat`
   - El resultat serà: `3cat.elink.cat` ✅
4. **Document Root** (molt important): assigna-li una carpeta nova:
   - `public_html/3cat/` (aquesta és la que usarem al FTP)
   - Alternativament, deixa que Hostinger crei automàticament la carpeta
5. Clica **Guardar** ✅

### Verificar la Creació

- Espera 5-10 minuts perquè Hostinger sincronitzi els servidors DNS
- Accedeix a `https://3cat.elink.cat` (pot mostrar error 404 o página per defecte, és normal)

## 2️⃣ Obtenir Credencials FTP

### Accedir a Comptes FTP

1. Va a **Hosting** → **Comptes FTP**
2. Veuràs una llista de comptes FTP existents

### Crear un Compte FTP Específic (Recomanat)

1. Clica **+ Afegir Compte FTP**
2. Emplena els camps:
   - **Nom d'usuari**: ex: `deploy-3cat` (fàcil de recordar)
   - **Contrasenya**: genera una contrasenya segura (mín 12 caràcters)
   - **Directori principal**: selecciona `public_html/3cat/`
3. Clica **Crear Compte FTP** ✅

### Obtenir les Credencials

En la mateixa pàgina de **Comptes FTP**, veuràs una taula amb els comptes:
- **Servidor FTP**: normalment és `ftp.elink.cat` o `ftp.hostinger.com`
- **Nom d'usuari**: l'que acabes de crear (ex: `deploy-3cat`)
- **Contrasenya**: la que acabes de crear

**Guarda aquestes credencials en un lloc segur!**

## 3️⃣ Afegir GitHub Secrets al Repositori

Els GitHub Actions necessiten les credencials FTP per fer deploy automàtic. Les guardem com a "Secrets" per a seguretat.

### Accedir als Secrets del Repositori

1. Va al repositori GitHub del projecte
2. Clica a **Settings** (engranatge, part superior dreta)
3. A la barra lateral, clica **Secrets and variables** → **Actions**

### Crear els 3 Secrets

#### Secret 1: FTP_HOST
- **Nom**: `FTP_HOST`
- **Valor**: `ftp.elink.cat` (el servidor FTP que vas anotar)
- Clica **Add secret** ✅

#### Secret 2: FTP_USERNAME
- **Nom**: `FTP_USERNAME`
- **Valor**: `deploy-3cat` (l'usuari FTP que vas crear)
- Clica **Add secret** ✅

#### Secret 3: FTP_PASSWORD
- **Nom**: `FTP_PASSWORD`
- **Valor**: `la-contrasenya-segura-que-vas-crear`
- Clica **Add secret** ✅

#### Secret 4: PUBLIC_FORMSPREE_ID (Opcional)
Si tens el formulari de Feedback integrat amb Formspree:
- **Nom**: `PUBLIC_FORMSPREE_ID`
- **Valor**: l'ID del formulari Formspree
- Clica **Add secret** ✅

### Verificar els Secrets

Hauries de veure una llista com aquesta:
```
🔒 FTP_HOST              (2 days ago)
🔒 FTP_USERNAME          (2 days ago)
🔒 FTP_PASSWORD          (2 days ago)
🔒 PUBLIC_FORMSPREE_ID   (2 days ago)
```

## 4️⃣ Verificar la Configuració de GitHub Actions

### Revisar el Workflow

1. Va al repositori GitHub
2. Clica a la pestanya **Actions**
3. Veuràs el workflow **Deploy to Hostinger**

### Provar el Deploy

1. Fes un canvi en qualsevol fitxer del projecte (ex: modifica `README.md`)
2. Fes commit i push a `main`:
   ```bash
   git add .
   git commit -m "test: trigger deploy"
   git push origin main
   ```
3. Torna a la pestanya **Actions** del GitHub
4. Veuràs que s'està executant el workflow (indicador groc/taronja)
5. Espera a que acabi (normalment 3-5 minuts)
6. Quan estigui verd ✅, el deploy ha estat exitós!

### Checklist Post-Deploy

Després que el workflow acabi correctament:

- [ ] Accedeix a `https://3cat.elink.cat` i verifica que carrega la pàgina d'inici
- [ ] El certificat SSL és vàlid (sense avisos al navegador)
- [ ] Clica a alguns blocs i verifica que es carreguen les pàgines dinàmiques
- [ ] Tenta descarregar un PDF des d'un bloc
- [ ] Completa i envia el formulari de feedback (hauria de funcionar amb Formspree)
- [ ] Accedeix a `/robots.txt` per verificar que el fitxer estàtic es serveix
- [ ] Verifica que el sitemap existeix: `https://3cat.elink.cat/sitemap-index.xml`

## 5️⃣ Fluix de Desenvolupament

### Per fer canvis al contingut (blocs, text, etc.)

1. Fes els canvis localment a `src/content/blocs/` o altres arxius
2. Testa localment:
   ```bash
   npm run build
   npm run preview
   ```
3. Fes commit i push:
   ```bash
   git add .
   git commit -m "feat: actualitza bloc-1"
   git push origin main
   ```
4. Automàticament, GitHub Actions es triggerà i:
   - Construirà el projecte (`npm run build`)
   - Pujarà els fitxers via FTP a Hostinger
   - En 3-5 minuts estarà visible a `https://3cat.elink.cat`

### Per fer canvis de codi (components, estilos, etc.)

El procés és el mateix, però assegura't que:
- Testes localment `npm run build` amb èxit
- No hi ha errors al console
- Els fitxers estàtics s'han generat correctament a `dist/`

## 6️⃣ Troubleshooting

### El workflow falla amb "FTP connection refused"

**Causa**: Credencials FTP incorrectes o el servidor FTP està restringit.

**Solució**:
1. Verifica que `FTP_HOST`, `FTP_USERNAME`, `FTP_PASSWORD` són correctes
2. Prova a accedir manualment via FTP Filezilla o terminal:
   ```bash
   ftp ftp.elink.cat
   # Introdueix l'usuari i contrasenya
   ```
3. Si funciona manualment però falla al GitHub Actions, contacta amb el suport de Hostinger

### La web no carrega a `3cat.elink.cat`

**Causa possible 1**: El subdomini no s'ha creat correctament
- Solució: Verifica a hPanel → Dominis → Subdominis que existeixi `3cat.elink.cat`

**Causa possible 2**: El document root no està correcte
- Solució: Verifica que apunta a `public_html/3cat/`

**Causa possible 3**: Els fitxers no s'han desplegat correctament
- Solució: Accedeix via FTP i verifica que `public_html/3cat/` contingui `index.html`

### El certificat SSL no és vàlid

**Causa**: Hostinger necessita 5-10 minuts per generar el certificat SSL per al subdomini

**Solució**: Espera 10-15 minuts i refresca la pàgina. Si segueix sense funcionar, contacta amb Hostinger.

### Els links interns retornen 404

**Causa**: Hostinger no està servint les rutes sense extensió correctament

**Solució 1**: Crea un fitxer `.htaccess` a `public_html/3cat/`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . index.html [L]
</IfModule>
```

Solució 2: Puja manualment el `.htaccess` via FTP a `public_html/3cat/.htaccess`

## 7️⃣ Accés Manual via FTP (Opcional)

Si necessites accedir als fitxers manualment:

### Usant Terminal (macOS/Linux)

```bash
# Conectar al servidor FTP
ftp ftp.elink.cat

# Introdueix l'usuari FTP
Name: deploy-3cat

# Introdueix la contrasenya
Password: ***

# Navega a la carpeta
cd public_html/3cat

# Llistar fitxers
ls

# Sortir
bye
```

### Usant FileZilla (Interfície gràfica)

1. Descarrega [FileZilla](https://filezilla-project.org/)
2. Obri el **Site Manager**:
   - **Host**: `ftp.elink.cat`
   - **Username**: `deploy-3cat`
   - **Password**: `***`
   - **Port**: `21`
3. Clica **Connect**
4. Navega a `public_html/3cat/`
5. Punja/descarrega fitxers com vulguis

---

**✅ Quan acabis**, el deploy automàtic estarà configurat completament!

Cada `git push origin main` desplegarà automàticament els canvis a `https://3cat.elink.cat`
