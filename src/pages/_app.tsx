import type { AppProps } from 'next/app'
import '../styles/main.scss'
import '../styles/responsive.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  )
}

export default MyApp
