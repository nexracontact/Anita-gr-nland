import type { Metadata } from 'next'
import { ContactForm } from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kontakt Anita Grønland Fotografi for å diskutere ditt prosjekt. Send oss en melding eller ring oss direkte.',
  openGraph: {
    title: 'Kontakt | Anita Grønland Fotografi',
    description:
      'Kontakt oss for å diskutere ditt fotografi-prosjekt. Vi svarer raskt på alle henvendelser.',
  },
}

export default function ContactPage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-body text-accent-gold uppercase tracking-wider font-semibold mb-4 block">
            Ta kontakt
          </span>
          <h1 className="text-4xl md:text-5xl font-heading text-text-dark mb-4">
            Kontakt oss
          </h1>
          <div className="w-24 h-1 bg-accent-gold mx-auto mb-6"></div>
          <p className="text-center text-text-dark/80 font-body max-w-2xl mx-auto text-lg">
            Har du spørsmål eller ønsker å diskutere ditt prosjekt? Ta kontakt
            med oss – vi svarer raskt på alle henvendelser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading text-text-dark mb-3">
              E-post
            </h3>
            <a
              href="mailto:kontakt@anitagronland.no"
              className="text-accent-gold hover:text-accent-gold/80 transition-colors font-body"
            >
              kontakt@anitagronland.no
            </a>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading text-text-dark mb-3">
              Telefon
            </h3>
            <a
              href="tel:+4792211533"
              className="text-accent-gold hover:text-accent-gold/80 transition-colors font-body"
            >
              +47 92 21 15 33
            </a>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading text-text-dark mb-3">
              Adresse
            </h3>
            <p className="text-text-dark font-body">
              Øvre veg 22<br />
              6413 Molde
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading text-text-dark mb-3">
              Åpningstider
            </h3>
            <div className="text-text-dark font-body text-sm space-y-1">
              <p>Man-Fre: 09:00 - 17:00</p>
              <p>Lør-Søn: Stengt</p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}

