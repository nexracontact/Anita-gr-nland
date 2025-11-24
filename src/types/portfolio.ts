export interface PortfolioImage {
  id: string
  src: string
  alt: string
  category: 'bryllup' | 'familie' | 'business'
  caption?: string
}

export interface PortfolioCategory {
  id: 'bryllup' | 'familie' | 'business'
  name: string
  description: string
  images: PortfolioImage[]
}

