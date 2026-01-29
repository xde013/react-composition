import { useShoppingListContext } from '@hooks'
import { AddItemForm } from '@components/AddItemForm'

export function ShoppingAppForm() {
  const { addItem } = useShoppingListContext()
  return <AddItemForm onAdd={addItem} />
}
