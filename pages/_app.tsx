import '../styles/globals.css'
import {NextPage} from 'next'
import { ReactElement, ReactNode } from 'react';
import { AppProps } from 'next/app';


type NextPageWidthLayout = NextPage & {
  getLayout?: (page:ReactElement) => ReactNode;
}
type NextPropsWidthLayout = AppProps & {
  Component: NextPageWidthLayout
}

function MyApp({ Component, pageProps }: NextPropsWidthLayout) {

  const getLayout = Component.getLayout || ((page) => page );

  // return (
  //   <>
  //     <Component {...pageProps} />
  //   </>
  // )
  return getLayout( <Component {...pageProps} /> )
}

export default MyApp
