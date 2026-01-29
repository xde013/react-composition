import { createContext } from 'react'
import { ShoppingItem } from '@types'

export interface ItemContextValue {
  item: ShoppingItem
}

export const ItemContext = createContext<ItemContextValue | undefined>(undefined)
