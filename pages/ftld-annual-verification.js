import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>FTP Annual Verification</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="FTP Annual Verification" />
      </main>
      <Footer />
    </div>
  )
}
