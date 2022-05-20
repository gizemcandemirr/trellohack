import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { resetServerContext } from 'react-beautiful-dnd'
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }: AppProps) {
  resetServerContext();
  return ( 
      <Component {...pageProps} />	)
}

export default MyApp
