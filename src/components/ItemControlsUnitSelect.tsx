import { cn } from '@utils/cn'
import { Unit } from '@types'
import { useItemContext, useShoppingListContext } from '@hooks'

const UNITS: { value: Unit; label: string }[] = [
  { value: 'pcs', label: 'pcs' },
  { value: 'kg', label: 'kg' },
  { value: 'L', label: 'L' },
]

const unitSelectRoot =
  'h-9 border-2 border-black transition-colors duration-100 flex items-stretch'

const unitSelectRootDisabled =
  'border-neutral-300 bg-neutral-100 [&_select]:text-neutral-400'

const unitSelectTrigger =
  'h-full w-full min-w-0 px-2 text-sm border-0 bg-white text-black cursor-pointer transition-colors duration-100 focus:outline-none focus:ring-0 ' +
  'hover:bg-black hover:text-white ' +
  'disabled:bg-transparent disabled:cursor-default disabled:hover:bg-transparent disabled:hover:text-inherit'

export function ItemControlsUnitSelect() {
  const item = useItemContext()
  const { updateItem } = useShoppingListContext()
  return (
    <div
      className={cn(
        unitSelectRoot,
        item.crossed && unitSelectRootDisabled
      )}
    >
      <select
        value={item.unit}
        onChange={e => updateItem(item.id, { unit: e.target.value as Unit })}
        disabled={item.crossed}
        className={unitSelectTrigger}
      >
        {UNITS.map(u => (
          <option key={u.value} value={u.value}>
            {u.label}
          </option>
        ))}
      </select>
    </div>
  )
}
