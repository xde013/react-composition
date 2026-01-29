import { cn } from '@utils/cn'

interface IconProps {
  name: 'check' | 'x' | 'minus' | 'plus'
  className?: string
}

const icons = {
  check: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  ),
  x: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  ),
  minus: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
  ),
  plus: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  ),
}

export function Icon({ name, className }: IconProps) {
  return (
    <svg 
      className={cn('w-4 h-4', className)} 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      strokeWidth={2}
    >
      {icons[name]}
    </svg>
  )
}
