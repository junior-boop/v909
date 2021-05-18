import Container from "./container";
import Layout from "./layout";
import Link from 'next/link'

export default function Btn_vendeur(){
    return(
        <Layout cn = 'bleu' style = {{ color : 'white', marginTop : 50}}>
            <Container>
                <div className = 'Btn_vendeur'>
                    <div className = 'desc'>
                        <p className = 'p'>
                            Contactez-nous pour vendre votre voiture dans le Cameroun
                        </p>
                    </div>
                    <div className = 'bt'>
                        <Link href = 'https://m.me/vehicule909'>
                        <a className = 'icone'>
                            <img src = '/icons8-facebook-messenger-50.png'/>
                            <p>Messenger</p>
                        </a></Link>
                        <Link href = 'htpps://wa.me/237655733765?text=Bonjour%20V909%20'>
                        <a className = 'icone'>
                            <img src = '/icons8-whatsapp-filled-50.png'/>
                            <p>WhatsApp</p>
                        </a></Link>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}


export function Vide(){
    return(
        <Layout cn = 'vide'></Layout>
    )
}