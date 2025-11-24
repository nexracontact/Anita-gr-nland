import React from 'react'
import Image from 'next/image'

export function Intro() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
              alt="Anita Grønland arbeider med fotografering"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <div className="inline-block mb-4">
              <span className="text-sm font-body text-accent-gold uppercase tracking-wider font-semibold">
                Om meg
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading text-text-dark mb-6 leading-tight">
              Velkommen til min verden av fotografi
            </h2>
            <div className="space-y-5 text-lg text-text-dark/90 font-body leading-relaxed">
              <p>
                Jeg er Anita Grønland, en erfaren fotograf med lidenskap for å
                fange opp de spesielle øyeblikkene i livet. Med over 10 års
                erfaring innen bryllupsfotografi, familiefotografi og
                bedriftsprofil, har jeg hatt gleden av å dokumentere utallige
                minneverdige stunder.
              </p>
              <p>
                Min tilnærming er basert på å skape et avslappet og komfortabelt
                miljø, hvor jeg kan fange de naturlige og ekte øyeblikkene. Jeg
                tror på at de beste bildene oppstår når folk kan være seg selv,
                og det er derfor jeg legger vekt på å bygge tillit og et godt
                forhold til mine kunder.
              </p>
              <p className="text-accent-gold font-semibold">
                Uansett om det er deres store dag, en familie-fotosession eller
                profesjonelle bilder for bedriften, jobber jeg for å levere
                resultater som overgår forventningene.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

