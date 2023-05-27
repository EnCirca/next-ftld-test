export default function BankForm() {
  
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  var theUrl = 'https://ftld-services-qa.ftldregistrars.com/api/hubspot/5ab52262c8bc8600107dacc5/widgets/leadFormBank';
  s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + 'ref=' + encodeURIComponent(window.location.href);
  var embedder = document.getElementById('ftld-leadFormBank-embed');
  embedder.parentNode.insertBefore(s, embedder);

}