import Footter from '@/components/Footter'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <main className={`bg--light w-full min-h-screen dark:bg-dark`}>
      <Navbar />
      <Component {...pageProps} />
      <Footter />
    </main>
  )
}
