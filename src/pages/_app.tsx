import { AppContextProvider } from 'context/AppContext';
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import '../styles/main.scss'
import '../styles/responsive.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoading(true), 6000);
  }, [])

  if (!loading) {
    <span style={{color: "red"}}>ğ</span>
  }
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  )
}

export default MyApp
