import { ReactNode } from 'react'
import { ListItem } from '@components/ListItem'

interface ListRootProps {
  children: ReactNode
}

function ListRoot({ children }: ListRootProps) {
  return (
    <ul className="divide-y divide-black">
      {children}
    </ul>
  )
}

ListRoot.Item = ListItem

export const List = ListRoot
