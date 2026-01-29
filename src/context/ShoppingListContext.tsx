import { createContext } from 'react'
import { AddItemInput, ShoppingItem } from '@types'

export interface ShoppingListContextValue {
  items: ShoppingItem[]
  activeItems: ShoppingItem[]
  crossedItems: ShoppingItem[]
  addItem: (input: AddItemInput) => void
  toggleCrossed: (id: string) => void
  removeItem: (id: string) => void
  updateItem: (id: string, updates: Partial<Pick<ShoppingItem, 'quantity' | 'unit'>>) => void
}

export const ShoppingListContext = createContext<ShoppingListContextValue | undefined>(undefined)
