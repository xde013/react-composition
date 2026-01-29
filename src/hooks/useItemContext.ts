import { use } from 'react'
import { ItemContext } from '@context'

export function useItemContext() {
  const context = use(ItemContext)
  if (context === undefined) {
    throw new Error('useItemContext must be used within an ItemProvider')
  }
  return context.item
}
