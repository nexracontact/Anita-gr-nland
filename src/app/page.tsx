import type { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/sections/Hero'
import { Intro } from '@/components/sections/Intro'
import { ImageShowcase } from '@/components/sections/ImageShowcase'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Hjem',
  description:
    'Velkommen til Anita Grønland Fotografi. Profesjonell fotografering for bryllup, familie, portrett og bedrift.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <ImageShowcase />
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-body text-accent-gold uppercase tracking-wider font-semibold mb-4 block">
            Kom i gang
          </span>
          <h2 className="text-4xl md:text-5xl font-heading text-text-dark mb-6 leading-tight">
            Klar for å dokumentere ditt spesielle øyeblikk?
          </h2>
          <p className="text-lg text-text-dark/80 font-body mb-10 max-w-2xl mx-auto">
            Utforsk porteføljen vår eller kontakt oss for å diskutere ditt
            prosjekt. Vi ser frem til å høre fra deg.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portefolje">
              <Button className="px-8 py-4 text-lg">Se portefølje</Button>
            </Link>
            <Link href="/kontakt">
              <Button variant="outline" className="px-8 py-4 text-lg">
                Kontakt oss
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

