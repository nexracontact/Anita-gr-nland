# Anita Grønland Fotografi

En profesjonell fotografi-portefølje nettside bygget med Next.js, React, TypeScript og Tailwind CSS.

## Funksjoner

- **Responsiv design** - Fungerer perfekt på alle enheter
- **Portefølje-galleri** - Kategorisert bildegalleri med lightbox
- **Kontaktskjema** - Funksjonelt skjema med e-post-integrasjon
- **SEO-optimalisert** - Fullstendige meta-tags og Open Graph
- **Moderne UI/UX** - Elegant design med smooth animasjoner

## Teknologi

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Nodemailer (for kontaktskjema)

## Komme i gang

### Installasjon

```bash
npm install
```

### Utvikling

```bash
npm run dev
```

Åpne [http://localhost:3000](http://localhost:3000) i nettleseren.

### Bygge for produksjon

```bash
npm run build
npm start
```

## Konfigurasjon

### E-post (Kontaktskjema)

For å aktivere kontaktskjemaet, legg til følgende miljøvariabler i en `.env.local` fil:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=din-epost@gmail.com
SMTP_PASSWORD=ditt-passord
CONTACT_EMAIL=mottaker@epost.no
```

**Merk:** For Gmail, må du bruke en "App Password" i stedet for vanlig passord.

## Struktur

```
src/
├── app/              # Next.js App Router pages
├── components/       # React komponenter
│   ├── layout/      # Header, Footer, Navigation
│   ├── sections/    # Page sections
│   └── ui/          # Reusable UI components
├── lib/             # Utility functions
├── types/           # TypeScript types
└── data/            # JSON data files
```

## Bilder

Legg bilder i `public/images/` mappen:

- `public/images/hero/` - Hero-bilder
- `public/images/portfolio/` - Portefølje-bilder
- `public/images/about/` - Om oss-bilder

Oppdater `src/data/portfolio.json` med riktige bildestier.

## Deploy til Vercel

1. Push koden til GitHub
2. Importer prosjektet i Vercel
3. Legg til miljøvariabler i Vercel dashboard
4. Deploy!

## Lisens

Privat prosjekt for Anita Grønland Fotografi.

