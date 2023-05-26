import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useEffect } from 'react'

export default function BankLeadForm() {

  useEffect(() => {

  (function() {
    function async_load() {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      var theUrl = 'https://ftld-services-qa.ftldregistrars.com/api/hubspot/5ab52262c8bc8600107dacc5/widgets/leadFormBank';
      s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + 'ref=' + encodeURIComponent(window.location.href);
      var embedder = document.getElementById('ftld-leadFormBank-embed');
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
        <title>Bank Lead Form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title=".BANK Verification Application" />
        <div>
				  <p>.BANK is a verified TLD and to register a domain name(s) you must first complete the following verification application. Required fields are marked with an asterisk(*). fTLD will contact you if additional information is needed.</p>
          <p>Upon approval, a registration token will be emailed to you which you must provide to your fTLD-Approved Registrar of choice to complete the domain name(s) registration process.</p>
          <p>If you have questions, please contact fTLD at <a href="mailto:verify@fTLD.com">verify@fTLD.com</a> or +1 202 589 2412.</p>
				</div>
        <div id="ftld-leadFormBank-embed"></div>
      </main>
      <Footer />
    </div>
  )
}
