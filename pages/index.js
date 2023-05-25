import Head from 'next/head'
import Link from 'next/link'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>FTLD Application Form Testing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="Application Form Testing" />
        <p>There are two lead forms to test</p>
        <ul>
          <li><Link href="/bank-lead-form">.BANK Verification Application</Link></li>
          <li><Link href="/insurance-lead-form">.INSURANCE Verification Application</Link></li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}
