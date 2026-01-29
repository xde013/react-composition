import { ReactNode, Children, isValidElement } from 'react'
import { ShoppingItem } from '@types'
import { List } from '@components/List'
import { ItemProvider } from '@providers'

interface ListSectionProps {
  items: ShoppingItem[]
  title?: string
  children?: ReactNode
}

function ListSectionTitle({ children }: { children: ReactNode }) {
  if (!children) return null
  return (
    <div className="text-[10px] font-bold tracking-widest text-neutral-300 uppercase">
      {children}
    </div>
  )
}

function ListSectionRoot({ items, title, children }: ListSectionProps) {
  if (items.length === 0) return null

  const titleChild = Children.toArray(children).find(
    child => isValidElement(child) && child.type === ListSectionTitle
  )

  return (
    <div className="space-y-3 sm:space-y-4">
      {titleChild ?? (title && <ListSectionTitle>{title}</ListSectionTitle>)}
      <List>
        {items.map(item => (
          <ItemProvider key={item.id} item={item}>
            <List.Item>{item.name}</List.Item>
          </ItemProvider>
        ))}
      </List>
    </div>
  )
}

ListSectionRoot.Title = ListSectionTitle

export const ListSection = ListSectionRoot
