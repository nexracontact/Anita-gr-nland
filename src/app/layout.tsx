import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Chatbot } from '@/components/chatbot/Chatbot'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Anita Grønland Fotografi - Profesjonell fotografering',
    template: '%s | Anita Grønland Fotografi',
  },
  description:
    'Profesjonell fotografering for bryllup, familie, portrett og bedrift. Anita Grønland fanger de spesielle øyeblikkene i livet ditt.',
  keywords: [
    'fotograf',
    'bryllupsfotograf',
    'familiefotograf',
    'portrettfotograf',
    'bedriftsfotograf',
    'Anita Grønland',
  ],
  authors: [{ name: 'Anita Grønland' }],
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    url: 'https://anitagronland.no',
    siteName: 'Anita Grønland Fotografi',
    title: 'Anita Grønland Fotografi - Profesjonell fotografering',
    description:
      'Profesjonell fotografering for bryllup, familie, portrett og bedrift.',
    images: [
      {
        url: '/images/hero/hero-main.jpg',
        width: 1200,
        height: 630,
        alt: 'Anita Grønland Fotografi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anita Grønland Fotografi',
    description:
      'Profesjonell fotografering for bryllup, familie, portrett og bedrift.',
    images: ['/images/hero/hero-main.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  )
}

