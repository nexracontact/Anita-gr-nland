import React from 'react'
import { Card } from '@/components/ui/Card'
import testimonialsData from '@/data/testimonials.json'
import { FaStar } from 'react-icons/fa'

export function Testimonials() {
  const testimonials = testimonialsData.testimonials

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-body text-accent-gold uppercase tracking-wider font-semibold mb-4 block">
            Anmeldelser
          </span>
          <h2 className="text-4xl md:text-5xl font-heading text-text-dark mb-4">
            Hva kundene våre sier
          </h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative">
              <div className="absolute top-6 right-6 text-6xl text-accent-gold/10 font-heading">
                &quot;
              </div>
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-accent-gold"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-text-dark/90 font-body mb-6 leading-relaxed relative z-10">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-body font-semibold text-text-dark text-lg">
                  {testimonial.name}
                </p>
                <p className="font-body text-sm text-accent-gold mt-1">
                  {testimonial.service}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

