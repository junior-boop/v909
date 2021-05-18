import Container, { Nav_Container } from "./container";
import Layout from "./layout";
import Logo from './logo';
import Link from 'next/link'

export function Nav(){
    return(
        <Layout cn = 'nav_layout'>
            <Nav_Container>
                <Logo />
                <div>
                    <ul className = 'menu'>
                        <Link href = '/' ><a className='none'><li>Accueil</li></a></Link>
                        <Link href = '/location'><a className='none'><li>Location</li></a></Link>
                        <Link href = '/achat'><a className='none'><li>Achat</li></a></Link>
                        <Link href = '/About-us'><a className='none'><li>Contactez-nous</li></a></Link>
                        <Link href = 'https://geniusofdigital.vercel.app'><a className = 'connect'><li>Genius Of Digital</li></a></Link>
                    </ul>
                </div>
            </Nav_Container>
        </Layout>
    )
}