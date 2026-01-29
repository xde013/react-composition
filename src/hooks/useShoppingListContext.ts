import { use } from 'react'
import { ShoppingListContext } from '@context'

export function useShoppingListContext() {
  const context = use(ShoppingListContext)
  if (context === undefined) {
    throw new Error('useShoppingListContext must be used within a ShoppingListProvider')
  }
  return context
}
