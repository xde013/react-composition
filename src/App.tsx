import { lazy, Suspense } from 'react'

const ShoppingAppRoot = lazy(() =>
  import('@components/ShoppingApp/Root').then(m => ({ default: m.ShoppingAppRoot }))
)

function App() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-neutral-400 text-sm">Loading…</div>}>
      <ShoppingAppRoot />
    </Suspense>
  )
}

export default App
