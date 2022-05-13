import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { resetServerContext } from 'react-beautiful-dnd'


function MyApp({ Component, pageProps }: AppProps) {
  resetServerContext();
  return ( 
  <Component {...pageProps} />	
)
}

export default MyApp
