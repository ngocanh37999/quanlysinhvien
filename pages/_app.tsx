import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ErrorBoundary from 'src/components/ErrorBoundary'
import { AppProvider } from 'src/contexts/app.context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </AppProvider>
  )
}
