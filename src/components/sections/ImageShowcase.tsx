'use client'

import React, { useState } from 'react'
import { ImageCard } from '@/components/ui/ImageCard'
import { Lightbox } from './Lightbox'
import portfolioData from '@/data/portfolio.json'
import { PortfolioImage } from '@/types/portfolio'

export function ImageShowcase() {
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(
    null
  )

  // Get first image from each category for showcase
  const showcaseImages: PortfolioImage[] = portfolioData.categories
    .flatMap((category) =>
      category.images.slice(0, 2).map((image) => ({
        ...image,
        category: category.id,
      }))
    )
    .slice(0, 5)

  const handleImageClick = (image: PortfolioImage) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return

    const allImages = portfolioData.categories.flatMap(
      (cat) => cat.images
    ) as PortfolioImage[]
    const currentIndex = allImages.findIndex((img) => img.id === selectedImage.id)

    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % allImages.length
      setSelectedImage(allImages[nextIndex])
    } else {
      const prevIndex = currentIndex === 0 ? allImages.length - 1 : currentIndex - 1
      setSelectedImage(allImages[prevIndex])
    }
  }

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-body text-accent-gold uppercase tracking-wider font-semibold mb-4 block">
              Portefølje
            </span>
            <h2 className="text-4xl md:text-5xl font-heading text-text-dark mb-4">
              Utvalgte bilder
            </h2>
            <div className="w-24 h-1 bg-accent-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcaseImages.map((image, index) => (
              <ImageCard
                key={image.id}
                src={image.src}
                alt={image.alt}
                caption={image.caption}
                onClick={() => handleImageClick(image)}
                priority={index < 3}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={closeLightbox}
          onNext={() => navigateImage('next')}
          onPrev={() => navigateImage('prev')}
        />
      )}
    </>
  )
}

