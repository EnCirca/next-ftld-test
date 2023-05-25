import Head from 'next/head'
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
          <li><a  href="/bank-lead-form">.BANK Verification Application</a></li>
          <li><a href="/insurance-lead-form">.INSURANCE Verification Application</a></li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}
