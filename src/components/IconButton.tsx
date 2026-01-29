import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@utils/cn'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'default' | 'danger'
  label: string
}

export function IconButton({ 
  children, 
  variant = 'default',
  label,
  className,
  ...props 
}: IconButtonProps) {
  const baseStyles = 'p-1 transition-colors duration-100 cursor-pointer'
  
  const variants = {
    default: 'text-neutral-300 hover:bg-black hover:text-white',
    danger: 'text-neutral-300 hover:bg-black hover:text-white',
  }

  return (
    <button 
      className={cn(baseStyles, variants[variant], className)}
      aria-label={label}
      {...props}
    >
      {children}
    </button>
  )
}
