import React from 'react'
import { Navigation } from './Navigation'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <Navigation />
    </header>
  )
}

