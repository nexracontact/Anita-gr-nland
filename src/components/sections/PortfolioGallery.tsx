'use client'

import React, { useState } from 'react'
import { ImageCard } from '@/components/ui/ImageCard'
import { Lightbox } from './Lightbox'
import portfolioData from '@/data/portfolio.json'
import { PortfolioCategory, PortfolioImage } from '@/types/portfolio'

export function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(
    null
  )

  const categories = portfolioData.categories as PortfolioCategory[]
  const activeCategory = selectedCategory
    ? categories.find((cat) => cat.id === selectedCategory)
    : null

  const displayedImages = activeCategory
    ? activeCategory.images
    : categories.flatMap((cat) => cat.images)

  const handleImageClick = (image: PortfolioImage) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return

    const allImages = categories.flatMap((cat) => cat.images) as PortfolioImage[]
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-body text-accent-gold uppercase tracking-wider font-semibold mb-4 block">
              Vårt arbeid
            </span>
            <h1 className="text-4xl md:text-5xl font-heading text-text-dark mb-4">
              Portefølje
            </h1>
            <div className="w-24 h-1 bg-accent-gold mx-auto mb-6"></div>
            <p className="text-center text-text-dark/80 font-body max-w-2xl mx-auto text-lg">
              Utforsk våre ulike kategorier av fotografering. Klikk på et bilde
              for å se det i full størrelse.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-full font-body transition-all duration-300 ${
                selectedCategory === null
                  ? 'bg-accent-gold text-white shadow-lg'
                  : 'bg-white text-text-dark hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Alle
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-body transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-accent-gold text-white shadow-lg'
                    : 'bg-white text-text-dark hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Category Description */}
          {activeCategory && (
            <div className="text-center mb-12 bg-gradient-to-r from-accent-gold/10 to-accent-gold/5 rounded-2xl p-8 border border-accent-gold/20">
              <h2 className="text-3xl font-heading text-text-dark mb-3">
                {activeCategory.name}
              </h2>
              <p className="text-text-dark/80 font-body text-lg">
                {activeCategory.description}
              </p>
            </div>
          )}

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedImages.map((image) => (
              <ImageCard
                key={image.id}
                src={image.src}
                alt={image.alt}
                caption={image.caption}
                onClick={() => handleImageClick(image)}
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

