import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@utils/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export function Button({ 
  children, 
  variant = 'primary', 
  className,
  ...props 
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 text-xs font-bold tracking-widest uppercase transition-colors duration-100 cursor-pointer'
  
  const variants = {
    primary: 'bg-black text-white hover:bg-neutral-800 active:bg-neutral-900',
    secondary: 'bg-white text-black border-2 border-black hover:bg-black hover:text-white active:bg-neutral-800',
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
