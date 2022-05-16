import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { resetServerContext } from 'react-beautiful-dnd'
import { Provider } from 'react-redux';
import store from "../store"
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }: AppProps) {
  resetServerContext();
  return ( 
    <Provider store={store}>
      <Component {...pageProps} />	
    </Provider>
  
)
}

export default MyApp
