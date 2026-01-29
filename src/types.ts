export type Unit = 'pcs' | 'kg' | 'L'

export interface ShoppingItem {
  id: string
  name: string
  quantity: number
  unit: Unit
  crossed: boolean
}

export interface AddItemInput {
  name: string
  quantity: number
  unit: Unit
}
