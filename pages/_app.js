import '../assets/scss/globals.scss'
import "../assets/scss/index.scss";
import "../assets/scss/MainNav.scss";
import "../assets/scss/ServiceCard.scss";
import "../assets/scss/contact.scss";
import "../assets/scss/services.scss";


import MainNav from "../components/MainNav";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <MainNav />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
