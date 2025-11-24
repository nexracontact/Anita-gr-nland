'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Hjem' },
  { href: '/portefolje', label: 'Portefølje' },
  { href: '/om-oss', label: 'Om oss' },
  { href: '/tjenester', label: 'Tjenester & priser' },
  { href: '/kontakt', label: 'Kontakt' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" onClick={closeMenu}>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center">
                <span className="text-white font-heading text-lg">AG</span>
              </div>
              <span className="text-xl md:text-2xl font-heading text-text-dark">
                Anita Grønland
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-3 py-2 text-sm font-body transition-colors duration-200',
                  pathname === item.href
                    ? 'text-accent-gold border-b-2 border-accent-gold'
                    : 'text-text-dark hover:text-accent-gold'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-text-dark hover:text-accent-gold focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-gold"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={cn(
                  'block px-3 py-2 text-base font-body transition-colors duration-200',
                  pathname === item.href
                    ? 'text-accent-gold bg-accent-gold/10'
                    : 'text-text-dark hover:text-accent-gold hover:bg-accent-gold/5'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

