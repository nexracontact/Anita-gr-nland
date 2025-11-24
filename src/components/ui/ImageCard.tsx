'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ImageCardProps {
  src: string
  alt: string
  caption?: string
  onClick?: () => void
  className?: string
  priority?: boolean
}

export function ImageCard({
  src,
  alt,
  caption,
  onClick,
  className,
  priority = false,
}: ImageCardProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-lg cursor-pointer group',
        className
      )}
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />
      </div>
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-sm font-body">{caption}</p>
        </div>
      )}
    </div>
  )
}

