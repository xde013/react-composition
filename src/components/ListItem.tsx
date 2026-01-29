import { ReactNode } from 'react'
import { Checkbox } from '@components/Checkbox'
import { IconButton } from '@components/IconButton'
import { Icon } from '@components/Icon'
import { ItemControls } from '@components/ItemControls'
import { cn } from '@utils/cn'
import { useItemContext, useShoppingListContext } from '@hooks'

interface ListItemProps {
  children?: ReactNode
}

export function ListItem({ children }: ListItemProps) {
  const item = useItemContext()
  const { toggleCrossed, removeItem } = useShoppingListContext()

  return (
    <li
      className={cn(
        'flex border-2 items-center gap-2 py-3 p-3 mb-2 transition-colors duration-100 sm:gap-4 sm:py-4 sm:p-4 group',
        item.crossed
          ? 'border-neutral-300'
          : 'border-black hover:bg-neutral-100'
      )}
    >
      <Checkbox
        checked={item.crossed}
        onChange={() => toggleCrossed(item.id)}
        label={item.crossed ? 'Uncross item' : 'Cross item'}
      />

      <span 
        className={cn(
          'flex-1 min-w-0 text-base transition-colors duration-100',
          item.crossed ? 'text-neutral-300 line-through' : 'text-black'
        )}
      >
        {children ?? item.name}
      </span>

      <div className={cn('flex items-center gap-1.5 shrink-0 sm:gap-2', item.crossed && 'opacity-30')}>
        <ItemControls />
      </div>

      <IconButton 
        variant="danger" 
        label="Remove item"
        onClick={() => removeItem(item.id)}
        className={cn('h-9 w-9 opacity-20 flex items-center justify-center group-hover:opacity-100')}
      >
        <Icon name="x" />
      </IconButton>
    </li>
  )
}
