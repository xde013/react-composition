import { QuantityStepper } from '@components/QuantityStepper'
import { useItemContext, useShoppingListContext } from '@hooks'

export function ItemControlsStepper() {
  const item = useItemContext()
  const { updateItem } = useShoppingListContext()
  return (
    <QuantityStepper
      value={item.quantity}
      onChange={q => updateItem(item.id, { quantity: q })}
      min={1}
      step={1}
      disabled={item.crossed}
    />
  )
}
