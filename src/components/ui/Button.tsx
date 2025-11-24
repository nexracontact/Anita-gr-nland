import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'px-6 py-3 rounded-md font-body font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary:
      'bg-accent-gold text-white hover:bg-opacity-90 focus:ring-accent-gold',
    secondary:
      'bg-text-dark text-white hover:bg-opacity-90 focus:ring-text-dark',
    outline:
      'border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-white focus:ring-accent-gold',
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}

