# Setup Guide - Anita Grønland Fotografi

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   CONTACT_EMAIL=recipient@email.com
   ```

3. **Add images:**
   - Add hero image: `public/images/hero/hero-main.jpg`
   - Add portfolio images to respective folders
   - Add profile image: `public/images/about/anita-profile.jpg`
   - See `public/images/README.md` for details

4. **Update content:**
   - Edit `src/data/portfolio.json` to match your actual images
   - Update contact information in `src/components/layout/Footer.tsx`
   - Update social media links in Footer component
   - Customize text content in page components

5. **Run development server:**
   ```bash
   npm run dev
   ```

## Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
- Accent gold: `#D4A76A`
- Text dark: `#333333`

### Fonts
Fonts are loaded from Google Fonts in `src/app/layout.tsx`:
- Headings: Playfair Display
- Body: Inter

### Content
- Portfolio images: `src/data/portfolio.json`
- Services: `src/data/services.json`
- Testimonials: `src/data/testimonials.json`

## Email Setup (Gmail)

1. Enable 2-Step Verification on your Google account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use the generated password in `.env.local`

## Deployment to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## Notes

- All images should be optimized for web
- Update meta tags in `src/app/layout.tsx` for SEO
- Test contact form after deployment
- Update social media links in Footer component

