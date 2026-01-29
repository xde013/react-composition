import { lazy, ReactNode, Suspense } from 'react'
import { ShoppingAppProvider } from '@components/ShoppingApp/Provider'
import { ShoppingAppContainer } from '@components/ShoppingApp/Container'
import { ShoppingAppHeader } from '@components/ShoppingApp/Header'
import { ShoppingAppForm } from '@components/ShoppingApp/Form'
import { ShoppingAppFooter } from '@components/ShoppingApp/Footer'

const ShoppingAppList = lazy(() =>
  import('@components/ShoppingApp/List').then(m => ({ default: m.ShoppingAppList }))
)
const ShoppingAppDoneList = lazy(() =>
  import('@components/ShoppingApp/DoneList').then(m => ({ default: m.ShoppingAppDoneList }))
)

interface ShoppingAppRootProps {
  children?: ReactNode
  title?: string
  subtitle?: string
  footerText?: string
}

export function ShoppingAppRoot({
  children,
  title = 'Shopping List',
  subtitle = 'React Composition',
  footerText = 'Slots / Compound Components / Hooks',
}: ShoppingAppRootProps) {
  return (
    <ShoppingAppProvider>
      <ShoppingAppContainer>
        {children ?? (
          <>
            <ShoppingAppHeader title={title} subtitle={subtitle} />
            <ShoppingAppForm />
            <Suspense fallback={<p className="text-neutral-400 text-sm text-center min-h-48 py-8">Loading list…</p>}>
              <ShoppingAppList />
              <ShoppingAppDoneList />
            </Suspense>
            <ShoppingAppFooter text={footerText} />
          </>
        )}
      </ShoppingAppContainer>
    </ShoppingAppProvider>
  )
}
