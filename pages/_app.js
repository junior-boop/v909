import Btn_vendeur, { Vide } from '../components/btn_vendeur'
import Footer, { FooterPhone } from '../components/footer'
import { Nav } from '../components/nav'
import '../style/base.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <Vide />
      <Component {...pageProps} />
      <Btn_vendeur />
      <Footer />
      <FooterPhone />
    </div>
  )
}

 
