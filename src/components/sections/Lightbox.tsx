'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { PortfolioImage } from '@/types/portfolio'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface LightboxProps {
  image: PortfolioImage
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export function Lightbox({ image, onClose, onNext, onPrev }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [onClose, onNext, onPrev])

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-7xl w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-accent-gold transition-colors z-10"
          aria-label="Lukk"
        >
          <FaTimes size={32} />
        </button>

        {/* Previous button */}
        <button
          onClick={onPrev}
          className="absolute left-4 text-white hover:text-accent-gold transition-colors z-10"
          aria-label="Forrige bilde"
        >
          <FaChevronLeft size={32} />
        </button>

        {/* Next button */}
        <button
          onClick={onNext}
          className="absolute right-4 text-white hover:text-accent-gold transition-colors z-10"
          aria-label="Neste bilde"
        >
          <FaChevronRight size={32} />
        </button>

        {/* Image */}
        <div className="relative w-full h-full max-h-[90vh] flex flex-col items-center justify-center">
          <div className="relative w-full h-full max-w-7xl">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          {image.caption && (
            <p className="text-white text-center mt-4 font-body text-lg">
              {image.caption}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

