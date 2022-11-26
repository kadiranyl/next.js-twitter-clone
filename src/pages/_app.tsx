import { AppContextProvider } from 'context/AppContext';
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import '../styles/main.scss'
import '../styles/responsive.scss'
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import en from "../lang/en.json";
import tr from "../lang/tr.json";

const messages: any = {
  en,
  tr
};

function getDirection(locale: any) {
  if (locale === "ar") {
    return "rtl";
  }

  return "ltr";
}


function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)
  const { locale }: any = useRouter();

  useEffect(() => {
    setTimeout(() => setLoading(true), 6000);
  }, [])

  if (!loading) {
    <span style={{color: "red"}}>ğ</span>
  }
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </IntlProvider>
  )
}

export default MyApp
