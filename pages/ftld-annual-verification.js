import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useEffect } from 'react'

export default function AnnualVerificationForm() {

  useEffect(() => {

  (function() {
    function async_load() {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      var theUrl = 'https://ftld-services-qa.ftldregistrars.com/api/hubspot/5ab52262c8bc8600107dacc5/widgets/reverify';
      s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + 'ref=' + encodeURIComponent(window.location.href);
      var embedder = document.getElementById('ftld-reverify-embed');
      embedder.parentNode.insertBefore(s, embedder);
    }
    if (window.attachEvent) {
      window.attachEvent('onload', async_load);
    } else {
      window.addEventListener('load', async_load, false);
    }
  })();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>FTLD Annual Verification</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="FTP Annual Verification" />
        <div id="ftld-reverify-embed"></div>
      </main>
      <Footer />
    </div>
  )
}
