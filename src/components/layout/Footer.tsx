import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-text-dark to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center">
                <span className="text-white font-heading text-lg">AG</span>
              </div>
              <h3 className="text-xl font-heading">Anita Grønland Fotografi</h3>
            </div>
            <p className="text-gray-300 font-body text-sm leading-relaxed">
              Profesjonell fotografering for bryllup, familie, portrett og
              bedrift. Vi fanger livets vakreste øyeblikk.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-heading mb-4">Kontakt</h3>
            <ul className="space-y-3 text-gray-300 font-body text-sm">
              <li>
                <a
                  href="mailto:kontakt@anitagronland.no"
                  className="hover:text-accent-gold transition-colors"
                >
                  kontakt@anitagronland.no
                </a>
              </li>
              <li>
                <a
                  href="tel:+4792211533"
                  className="hover:text-accent-gold transition-colors"
                >
                  +47 92 21 15 33
                </a>
              </li>
              <li className="pt-2">
                <p className="text-gray-300">
                  Øvre veg 22<br />
                  6413 Molde
                </p>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-heading mb-4">Følg oss</h3>
            <p className="text-gray-300 font-body text-sm mb-4">
              Følg med på våre siste prosjekter og bilder
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-accent-gold hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-accent-gold hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 font-body text-sm">
          <p>
            &copy; {currentYear} Anita Grønland Fotografi. Alle rettigheter
            reservert.
          </p>
        </div>
      </div>
    </footer>
  )
}

