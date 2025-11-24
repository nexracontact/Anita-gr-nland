import React from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import servicesData from '@/data/services.json'
import { Service } from '@/types/service'

export function ServicesPreview() {
  const services = servicesData.services as Service[]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-body text-accent-gold uppercase tracking-wider font-semibold mb-4 block">
            Våre tjenester
          </span>
          <h2 className="text-4xl md:text-5xl font-heading text-text-dark mb-4">
            Tjenester & priser
          </h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto mb-6"></div>
          <p className="text-center text-text-dark/80 font-body max-w-2xl mx-auto text-lg">
            Vi tilbyr profesjonell fotografering for alle livets spesielle øyeblikk
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.map((service) => (
            <Card key={service.id} className="flex flex-col hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-heading text-text-dark mb-2">
                {service.title}
              </h3>
              <p className="text-accent-gold text-lg font-body font-semibold mb-3">
                {service.price}
              </p>
              <p className="text-text-dark/80 font-body text-sm mb-4 flex-grow">
                {service.description}
              </p>
              <Link href="/kontakt">
                <Button variant="outline" className="w-full text-sm py-2">
                  Be om tilbud
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/tjenester">
            <Button variant="secondary" className="px-8 py-4 text-lg">
              Se alle tjenester og detaljer
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

