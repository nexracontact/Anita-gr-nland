import type { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import servicesData from '@/data/services.json'
import { Service } from '@/types/service'

export const metadata: Metadata = {
  title: 'Tjenester & priser',
  description:
    'Se våre tjenester innen bryllupsfotografi, familiefotografi, portrettfotografi og bedriftsprofil. Priser fra 2.500 kr.',
  openGraph: {
    title: 'Tjenester & priser | Anita Grønland Fotografi',
    description:
      'Se våre tjenester innen bryllupsfotografi, familiefotografi, portrettfotografi og bedriftsprofil.',
  },
}

export default function ServicesPage() {
  const services = servicesData.services as Service[]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-body text-accent-gold uppercase tracking-wider font-semibold mb-4 block">
            Våre tjenester
          </span>
          <h1 className="text-4xl md:text-5xl font-heading text-text-dark mb-4">
            Tjenester & priser
          </h1>
          <div className="w-24 h-1 bg-accent-gold mx-auto mb-6"></div>
          <p className="text-center text-text-dark/80 font-body max-w-2xl mx-auto text-lg">
            Vi tilbyr en rekke tjenester innen fotografering. Alle priser er
            veiledende – kontakt oss for et tilpasset tilbud basert på ditt
            behov.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service) => (
            <Card key={service.id} className="flex flex-col">
              <h2 className="text-2xl font-heading text-text-dark mb-3">
                {service.title}
              </h2>
              <p className="text-accent-gold text-xl font-body font-semibold mb-4">
                {service.price}
              </p>
              <p className="text-text-dark font-body mb-6 flex-grow">
                {service.description}
              </p>
              {service.features && service.features.length > 0 && (
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-text-dark font-body flex items-start"
                    >
                      <span className="text-accent-gold mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              <Link href="/kontakt">
                <Button variant="outline" className="w-full">
                  Be om tilbud
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-accent-gold/10 to-accent-gold/5 rounded-2xl p-12 text-center max-w-3xl mx-auto shadow-lg border border-accent-gold/20">
          <h2 className="text-3xl font-heading text-text-dark mb-4">
            Spesielle ønsker?
          </h2>
          <p className="text-text-dark/80 font-body mb-8 text-lg">
            Har du et spesielt prosjekt eller behov som ikke passer inn i våre
            standardpakker? Ta kontakt så finner vi en løsning som passer deg.
          </p>
          <Link href="/kontakt">
            <Button className="px-8 py-4 text-lg">Kontakt oss</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

