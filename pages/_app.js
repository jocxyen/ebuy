import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import Layout from '../components/layout'
import { Provider } from 'react-redux'
import { store } from '../store/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store} >
    <SessionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </SessionProvider>
    </Provider>
  )
}

export default MyApp
