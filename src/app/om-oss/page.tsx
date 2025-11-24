import type { Metadata } from 'next'
import Image from 'next/image'
import { Testimonials } from '@/components/sections/Testimonials'

export const metadata: Metadata = {
  title: 'Om oss',
  description:
    'Lær mer om Anita Grønland, hennes erfaring, visjon og arbeidsmetode innen fotografering.',
  openGraph: {
    title: 'Om oss | Anita Grønland Fotografi',
    description:
      'Lær mer om Anita Grønland, hennes erfaring, visjon og arbeidsmetode.',
  },
}

export default function AboutPage() {
  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading text-text-dark text-center mb-12">
            Om Anita Grønland
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
                alt="Anita Grønland"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6 text-text-dark font-body leading-relaxed">
              <div>
                <h2 className="text-2xl font-heading text-text-dark mb-4">
                  Min historie
                </h2>
                <p>
                  Jeg har jobbet som fotograf i over 10 år, og har hatt gleden
                  av å dokumentere utallige spesielle øyeblikk. Min reise
                  startet med en lidenskap for å fange opp følelser og
                  historier gjennom kameraet, og har utviklet seg til en
                  profesjonell karriere innen flere områder av fotografering.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading text-text-dark mb-4">
                  Min visjon
                </h2>
                <p>
                  Jeg tror på at fotografi handler om mer enn bare å ta bilder –
                  det handler om å skape minner som varer livet ut. Min mål er
                  å fange de ekte, naturlige øyeblikkene som forteller en
                  historie. Hver fotosession er unik, og jeg tilpasser min
                  tilnærming for å sikre at vi får resultater som reflekterer
                  deg og ditt øyeblikk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading text-text-dark mb-4">
                  Min arbeidsmetode
                </h2>
                <p>
                  Jeg legger stor vekt på å skape et avslappet og komfortabelt
                  miljø. Jeg tar meg tid til å lære deg å kjenne før vi
                  begynner, slik at vi kan bygge tillit og et godt forhold. Dette
                  gjør at jeg kan fange de naturlige øyeblikkene når du er mest
                  deg selv. Jeg kombinerer dokumentarisk stil med kunstnerisk
                  komposisjon for å skape bilder som er både vakre og autentiske.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 text-center shadow-lg">
            <h2 className="text-3xl font-heading text-text-dark mb-8">
              Erfaring og utdanning
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-text-dark font-body">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-5xl font-heading text-accent-gold mb-3">
                  10+
                </p>
                <p className="text-lg font-semibold">Års erfaring</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-5xl font-heading text-accent-gold mb-3">
                  200+
                </p>
                <p className="text-lg font-semibold">Fotograferte arrangementer</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-5xl font-heading text-accent-gold mb-3">
                  500+
                </p>
                <p className="text-lg font-semibold">Tilfredse kunder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  )
}

