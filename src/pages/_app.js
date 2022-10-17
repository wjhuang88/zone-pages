import Head from 'next/head'
import { useRouter } from 'next/router'
import { PageHeader, Aside } from '@components'
import WindbellWidget from '@widgets/windbell-widget'
import CatWidget from '@widgets/cat-widget'

import '@styles/globals.css'

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  return <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <PageHeader selectedHref={router.pathname} />
    <div className='page-wrap'>
      <Component {...pageProps} />
      <Aside recommendPosts={pageProps.posts} latestPosts={pageProps.posts} />
    </div>
    <WindbellWidget />
    <CatWidget />
  </>
}

export default MyApp
