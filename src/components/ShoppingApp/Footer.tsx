import { Footer } from '@components/Footer'

interface ShoppingAppFooterProps {
  text: string
}

export function ShoppingAppFooter({ text }: ShoppingAppFooterProps) {
  return <Footer text={text} />
}
