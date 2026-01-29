import { ReactNode } from 'react'

interface ShoppingAppContainerProps {
  children: ReactNode
}

export function ShoppingAppContainer({ children }: ShoppingAppContainerProps) {
  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:py-12 sm:px-6 md:py-16 md:px-8">
      <div className="max-w-xl mx-auto space-y-6 sm:space-y-8">
        {children}
      </div>
    </div>
  )
}
