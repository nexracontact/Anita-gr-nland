import type { Metadata } from 'next'
import { PortfolioGallery } from '@/components/sections/PortfolioGallery'

export const metadata: Metadata = {
  title: 'Portefølje',
  description:
    'Utforsk vårt utvalg av bryllupsfotografi, familiefotografi og bedriftsprofil. Se eksempler på vårt arbeid.',
  openGraph: {
    title: 'Portefølje | Anita Grønland Fotografi',
    description:
      'Utforsk vårt utvalg av bryllupsfotografi, familiefotografi og bedriftsprofil.',
  },
}

export default function PortfolioPage() {
  return <PortfolioGallery />
}

