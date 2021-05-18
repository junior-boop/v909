import Head from 'next/head'
import Btn_vendeur, { Vide } from '../../components/btn_vendeur'
import Footer from '../../components/footer'
import Galleries from '../../components/Galleries'
import { Nav } from '../../components/nav'
import data from '../../components/data.json'
import Layout from '../../components/layout'
import Container, { Gallerie_Container } from '../../components/container'

export default function Achat(){
    let nom = `${data.marque} ${data.modele} ${data.annee}`
    return(
        <div>
             <Head>
                <title>Louer une {nom} | V909  </title>
                <meta />
                <link rel="icon" href="/OfficialLogo.png" />
            </Head>
            <main>
                <Galleries />
                <Details />
                <Note />
            </main>
        </div>
    )
}

function Details(){
    let nom = `${data.marque} ${data.modele} ${data.annee}`
    let desc = `${data.desc}`
    return(
        <Layout>
            <Gallerie_Container style = {{ padding : '16px 0'}}>
                <div className = 'description'>
                    <div>
                        <h2>Description du Véhicule</h2>
                        <p>{desc} </p>
                        <p style = {{fontStyle: 'italic'}}>Le venduer</p>
                    </div>
                </div>
            </Gallerie_Container>
        </Layout>
    )
}

function Note(){
    let nom = `${data.marque} ${data.modele} ${data.annee}`
    return(
        <Layout>
            <Gallerie_Container style = {{ padding : '16px 0'}}>
                <div className = 'note'>
                    <div>
                        <h2>Note Bien</h2>
                        <p>Nous ne sommes pas responsable de l'origine du vehicule de marque <b> {nom} </b>  </p>
                        <p>Etant des intermediaires entre le vendeur et le future client du vehicule, nous nous assurons seulement que le client et le propriétaire du vehicule, puissent avoir l'information nessecaire pour la bonne continuité de leur affaire.</p>
                        <p style = {{fontStyle: 'italic'}}>Merci pour votre compréhension</p>
                    </div>
                </div>
            </Gallerie_Container>
        </Layout>
    )
}

