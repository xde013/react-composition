import { ReactNode } from 'react'
import { ShoppingListContext } from '@context'
import { useShoppingList } from '@hooks'

interface ShoppingListProviderProps {
  children: ReactNode
}

export function ShoppingListProvider({ children }: ShoppingListProviderProps) {
  const value = useShoppingList()

  return (
    <ShoppingListContext value={value}>
      {children}
    </ShoppingListContext>
  )
}
