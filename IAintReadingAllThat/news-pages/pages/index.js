import Head from 'next/head'

import NavBar from '@components/NavBar';

export default function Home() {

  return (
    <div>
      <Head>
        <title>I Ain't Reading All that</title>
        <meta name="description" content="I Ain't reading all that" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <NavBar />
    </div>
  )
}
