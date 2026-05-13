# �배 Guia de Deploy a Cloudflare Pages

## Opció 1: Deploy Automàtic via GitHub Actions (Recomanat)

### Configuració

1. **Crea el repositori a GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Setup Astro + Tailwind + TypeScript"
   git branch -M main
   git remote add origin https://github.com/[teu-usuari]/3cat-elink-portal.git
   git push -u origin main
   ```

2. **Configura GitHub Secrets** (a Settings > Secrets and variables > Actions):
   - `CLOUDFLARE_API_TOKEN`: Token d'API de Cloudflare
   - `CLOUDFLARE_ACCOUNT_ID`: ID del teu compte Cloudflare

3. **Cada push a `main` farà deploy automàtic** 🚀

### Com obtenir les credencials de Cloudflare

1. Accedeix a https://dash.cloudflare.com/
2. Vés a **My Profile** > **API Tokens**
3. Crea un token amb permisos:
   - `Account.Cloudflare Pages` (escribir)
   - `Account.Account Settings` (lectura)
4. Copia el token i afegeix-lo a GitHub Secrets

## Opció 2: Deploy Manual

```bash
# Build
npm run build

# Deploy amb Wrangler (necessita estar instal·lat)
npm install -g wrangler
wrangler pages deploy ./dist
```

## Opció 3: Connectar a Cloudflare Pages directament

1. Accedeix a https://pages.cloudflare.com/
2. Selecciona "Connect to Git"
3. Autoritza GitHub
4. Selecciona el repositori `3cat-elink-portal`
5. Configura el build:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: 18+
6. Deploy automàtic en cada push a `main`

## Configuració del domini

1. Crea un subdomain `3cat` al registre de DNS de `elink.cat`
2. Apunta-lo a Cloudflare Pages
3. Configura CNAME a Cloudflare Pages
4. Espera la propagació de DNS (pot tardar fins a 48h)

## Verificació post-deploy

- Accedeix a `https://3cat.elink.cat` (o el domain que configuris)
- Verifica que el header, footer i nav es veu correctament
- Prova els links de navegació
- Comprova els estilos de Tailwind CSS

## Variables d'Entorn (opcional)

Si necessites variables d'entorn en producció, crea un fitxer `.env.production`:

```
PUBLIC_SITE_NAME=3Cat × Elink
PUBLIC_BRAND_COLOR=#D63B3B
```

Pots accedir-hi a les pàgines d'Astro amb `import.meta.env.PUBLIC_SITE_NAME`.

---

**¿Preguntes?** Contacta amb Elink.cat
