import { Suspense, lazy } from 'react'
import MainFooter from './components/MainFooter'
import Fallback from 'src/components/Fallback/Fallback'

const MainHeader = lazy(() => import('./components/MainHeader'))
const Main = lazy(() => import('./components/Main'))

export default function MainLayout() {
  return (
    <>
      <Suspense fallback={<Fallback />}>
        <MainHeader />
        <Main />
        <MainFooter />
      </Suspense>
    </>
  )
}
