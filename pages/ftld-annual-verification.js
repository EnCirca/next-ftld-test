import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import dynamic from 'next/dynamic'

export default function AnnualVerificationForm() {

  const AnnualVerification = dynamic(() => import('../components/annual-verification'), {
    loading: () => <p>Loading...</p>,
  });

  return (
    <div className="container">
      <Head>
        <title>FTLD Annual Verification</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="FTLD Annual Verification" />
        <div id="ftld-reverify-embed"></div>
        <AnnualVerification />
      </main>
      <Footer />
    </div>
  )
}
