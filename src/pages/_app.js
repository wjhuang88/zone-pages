import Head from 'next/head'
import { useRouter } from 'next/router'
import { PageHeader } from '@components'
import WindbellWidget from '@widgets/windbell-widget'
import CatWidget from '@widgets/cat-widget'

import '@styles/globals.css'

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  return <>
    <Head>
        <title key={'title'}>黄炜杰的博客 | Gerald's blog</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <PageHeader selectedHref={router.pathname} />
    <Component {...pageProps} />
    <WindbellWidget />
    <CatWidget />
  </>
}

export default MyApp
