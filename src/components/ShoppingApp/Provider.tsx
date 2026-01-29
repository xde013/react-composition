import { ReactNode } from 'react'
import { ShoppingListProvider } from '@providers'

interface ShoppingAppProviderProps {
  children: ReactNode
}

export function ShoppingAppProvider({ children }: ShoppingAppProviderProps) {
  return <ShoppingListProvider>{children}</ShoppingListProvider>
}
