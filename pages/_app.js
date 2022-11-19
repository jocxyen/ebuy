import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import Layout from '../components/layout'
import { Provider } from 'react-redux'
import { store, persistor } from '../store/store'
import { PersistGate } from "redux-persist/integration/react"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
    <SessionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
        </SessionProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
