import '@/styles/globals.css'
import { DogsContextProvider } from '@/context/dogs'
export default function App({ Component, pageProps }) {

  return <DogsContextProvider>
    <Component {...pageProps} />
  </DogsContextProvider>

}
