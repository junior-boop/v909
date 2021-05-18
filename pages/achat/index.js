import Head from 'next/head';
import HeaderPage from '../../components/pageHeader'
import Btn_vendeur, { Vide } from '../../components/btn_vendeur'
import Footer from '../../components/footer'
import { Nav } from '../../components/nav'
import { Nouveaute, ListeVente } from '../../components/articles';


export default function Achat(){
    return(
        <div>
            <Head>
                <title> V909 | Achat de Véhicules </title>
                <link rel="icon" href="/OfficialLogo.png" />
            </Head>
            <main>
                <div style ={{height : '100vh', width : '100vw', display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
                    <div style = {{display : 'flex', flexDirection : 'column', alignItems : 'center', width : 300, height : 'auto', padding : 16}}>
                        <img src ='/icons8-delete-50.png' style ={{marginBottom : 12}}/>
                        <p style ={{textAlign : 'center', fontWeight : 600, fontSize : 18}}>Pour des raisons de maintenance, cette page ne sera pas indisponible. <br/> <br/> Merci pour votre Comprehension </p>
                    </div>
                </div>
            </main>
        </div>
    )
}



