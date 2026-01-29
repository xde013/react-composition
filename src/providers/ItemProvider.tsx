import { ReactNode } from 'react'
import { ItemContext } from '@context'
import { ShoppingItem } from '@types'

interface ItemProviderProps {
  item: ShoppingItem
  children: ReactNode
}

export function ItemProvider({ item, children }: ItemProviderProps) {
  return (
    <ItemContext value={{ item }}>
      {children}
    </ItemContext>
  )
}
