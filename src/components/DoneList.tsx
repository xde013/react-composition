import { useShoppingListContext } from '@hooks'
import { ListSection } from '@components/ListSection'

export function DoneList() {
  const { crossedItems } = useShoppingListContext()

  if (crossedItems.length === 0) return null

  return (
    <ListSection items={crossedItems}>
      <ListSection.Title>Done</ListSection.Title>
    </ListSection>
  )
}
