import { InputHTMLAttributes } from 'react'
import { cn } from '@utils/cn'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function Input({ label, className, id, ...props }: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
  
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label 
          htmlFor={inputId}
          className="text-xs font-bold tracking-widest text-black uppercase"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          'w-full px-4 py-3 border-2 border-black bg-white text-black placeholder:text-neutral-400 text-sm transition-colors duration-100 hover:bg-neutral-50 focus:outline-none focus:ring-0',
          className
        )}
        {...props}
      />
    </div>
  )
}
