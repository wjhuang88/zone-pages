import Head from 'next/head'
import WindbellWidget from '@widgets/windbell-widget'
import CatWidget from '@widgets/cat-widget'

import '@styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
        <title key={'title'}>黄炜杰的博客 | Gerald's blog</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
    <WindbellWidget />
    <CatWidget />
  </>
}

export default MyApp
