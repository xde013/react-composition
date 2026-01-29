import { Header } from '@components/Header'

interface ShoppingAppHeaderProps {
  title: string
  subtitle?: string
}

export function ShoppingAppHeader({ title, subtitle }: ShoppingAppHeaderProps) {
  return <Header title={title} subtitle={subtitle} />
}
