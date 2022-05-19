import type { NextPage } from 'next'
import Head from 'next/head'
import Home from './Home/Home'

const App: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bruno Angeloti</title>
        <meta name="description" content="Site do desenvolvedor Bruno Angeloti" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Home />
      
    </div>
  )
}

export default App
