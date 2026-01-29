import { useMemo, useState } from 'react'
import { AddItemInput, ShoppingItem } from '@types'

// Sample initial items to demonstrate the app
const initialItems: ShoppingItem[] = [
  { id: '1', name: 'Milk', quantity: 2, unit: 'L', crossed: false },
  { id: '2', name: 'Eggs', quantity: 12, unit: 'pcs', crossed: false },
  { id: '3', name: 'Apples', quantity: 1.5, unit: 'kg', crossed: true },
  { id: '4', name: 'Bread', quantity: 1, unit: 'pcs', crossed: false },
]

export function useShoppingList() {
  const [items, setItems] = useState<ShoppingItem[]>(initialItems)

  const { activeItems, crossedItems } = useMemo(() => ({
    activeItems: items.filter(item => !item.crossed),
    crossedItems: items.filter(item => item.crossed),
  }), [items])

  const addItem = ({ name, quantity, unit }: AddItemInput) => {
    const newItem: ShoppingItem = {
      id: crypto.randomUUID(),
      name: name.trim(),
      quantity,
      unit,
      crossed: false,
    }
    setItems(prev => [...prev, newItem])
  }

  const toggleCrossed = (id: string) => {
    setItems(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, crossed: !item.crossed } 
          : item
      )
    )
  }

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  const updateItem = (id: string, updates: Partial<Pick<ShoppingItem, 'quantity' | 'unit'>>) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, ...updates }
          : item
      )
    )
  }

  return {
    items,
    activeItems,
    crossedItems,
    addItem,
    toggleCrossed,
    removeItem,
    updateItem,
  }
}
