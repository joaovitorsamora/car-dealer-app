import { Suspense } from 'react'
import { FilterPage } from './filterpage/page'
import Loading from './loading'

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <FilterPage />
      </Suspense>
    </main>
  )
}
