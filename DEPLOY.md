# Guide for å laste opp nettstedet

## Metode 1: Vercel (Anbefalt - Enklest)

Vercel er den enkleste måten å deploye Next.js-prosjekter på.

### Steg 1: Forbered prosjektet

1. **Sørg for at alt er commitet til Git:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push til GitHub:**
   - Opprett et nytt repository på GitHub
   - Push koden dit:
   ```bash
   git remote add origin https://github.com/ditt-brukernavn/anita-gronland-fotografi.git
   git branch -M main
   git push -u origin main
   ```

### Steg 2: Deploy til Vercel

1. **Gå til [vercel.com](https://vercel.com)**
   - Logg inn med GitHub-kontoen din

2. **Klikk "Add New Project"**
   - Velg GitHub-repositoryet ditt
   - Vercel vil automatisk oppdage at det er et Next.js-prosjekt

3. **Konfigurer prosjektet:**
   - **Project Name:** anita-gronland-fotografi (eller hva du vil)
   - **Framework Preset:** Next.js (automatisk detektert)
   - **Root Directory:** ./ (standard)
   - **Build Command:** `npm run build` (standard)
   - **Output Directory:** .next (standard)

4. **Legg til miljøvariabler (hvis du skal bruke kontaktskjema):**
   - Klikk "Environment Variables"
   - Legg til:
     ```
     SMTP_HOST=smtp.gmail.com
     SMTP_PORT=587
     SMTP_USER=din-epost@gmail.com
     SMTP_PASSWORD=ditt-app-passord
     CONTACT_EMAIL=mottaker@epost.no
     ```

5. **Klikk "Deploy"**
   - Vercel bygger og deployer automatisk
   - Du får en URL som: `https://anita-gronland-fotografi.vercel.app`

6. **Egendommelig domene (valgfritt):**
   - Gå til Project Settings → Domains
   - Legg til ditt eget domene (f.eks. anitagronland.no)
   - Følg instruksjonene for å konfigurere DNS

### Steg 3: Automatisk deploy

- Hver gang du pusher til GitHub, deployer Vercel automatisk
- Du kan også sette opp preview-deployments for pull requests

---

## Metode 2: Netlify

### Steg 1: Forbered prosjektet
- Samme som Vercel - push til GitHub

### Steg 2: Deploy til Netlify

1. Gå til [netlify.com](https://netlify.com)
2. Klikk "Add new site" → "Import an existing project"
3. Velg GitHub og repositoryet ditt
4. Konfigurer:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
5. Legg til miljøvariabler i Site settings → Environment variables
6. Deploy!

---

## Metode 3: Egen server (VPS/Cloud)

### Steg 1: Bygg prosjektet lokalt
```bash
npm run build
```

### Steg 2: Deploy til server

**Med PM2:**
```bash
# Installer PM2
npm install -g pm2

# Start applikasjonen
pm2 start npm --name "anita-fotografi" -- start

# Lagre PM2-konfigurasjon
pm2 save
pm2 startup
```

**Med Docker:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## Viktige ting å huske

### 1. Miljøvariabler
Hvis du skal bruke kontaktskjemaet, må du sette opp e-post-konfigurasjon:
- **Gmail:** Bruk "App Password" (ikke vanlig passord)
- **Andre SMTP-tjenester:** Sjekk deres dokumentasjon

### 2. Bilder
- Unsplash-bildene vil fungere automatisk
- Hvis du vil bruke egne bilder, last dem opp til:
  - `public/images/` mappen
  - Eller bruk en CDN som Cloudinary

### 3. Custom domene
- Kjøp domene fra f.eks. Namecheap, GoDaddy, eller One.com
- Konfigurer DNS-innstillinger i Vercel/Netlify
- Venter på SSL-sertifikat (automatisk)

### 4. SEO
- Oppdater `src/app/layout.tsx` med riktig site URL
- Legg til Google Analytics hvis ønskelig
- Submit sitemap til Google Search Console

---

## Rask start med Vercel CLI

Hvis du vil deploye direkte fra terminalen:

```bash
# Installer Vercel CLI
npm i -g vercel

# Deploy
vercel

# Følg instruksjonene
# For produksjon: vercel --prod
```

---

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Deployment:** https://nextjs.org/docs/deployment
- **Netlify Docs:** https://docs.netlify.com

