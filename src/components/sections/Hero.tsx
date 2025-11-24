import React from 'react'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2070&auto=format&fit=crop"
          alt="Anita Grønland - Fotograf"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-6 animate-fade-in">
            <div className="w-20 h-1 bg-accent-gold mx-auto mb-6"></div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading mb-4 tracking-tight">
              Anita Grønland
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-heading text-accent-gold font-light">
              Fotograf
            </p>
          </div>
          <p className="text-lg md:text-xl lg:text-2xl font-body text-white/90 max-w-2xl mx-auto mt-8 animate-fade-in-delay">
            Fang opp livets vakreste øyeblikk med profesjonell fotografering
          </p>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}

