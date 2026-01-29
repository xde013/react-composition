import { useShoppingListContext } from '@hooks'
import { ListSection } from '@components/ListSection'

export function ActiveList() {
  const { items, activeItems } = useShoppingListContext()

  if (items.length === 0) {
    return (
      <p className="text-neutral-400 text-sm text-center min-h-48 sm:min-h-64">
        No items yet.
      </p>
    )
  }

  if (activeItems.length === 0) return null

  return <ListSection items={activeItems} />
}
