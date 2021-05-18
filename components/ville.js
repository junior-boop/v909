import Container from "./container";
import Layout from "./layout";
import Link from 'next/link';

export default function Ville(){
    return (
        <Layout style = {{backgroundColor : 'rgb(236, 236, 236, 0.45)'}}>
            <Container>
                <div className = 'villes'>
                    <VilleItems img = '/Yaounde.jpg' ville = 'Yaounde' nbr = {12}/>
                    <VilleItems img = '/douala.jpg' ville = 'Douala' nbr = {20}/>
                    <VilleItems img = '/garoua.png' ville = 'Garoua' nbr = {10}/>
                </div>
            </Container>
        </Layout>
    )
}

function VilleItems({img, ville, nbr}){
    return(
        <div>
            <Link href ={`/location/${ville }`}>
                <a className = 'ville'>
                    <div className = 'imgs'>
                        <img src = {img} />
                    </div>
                    <div>
                        <p className = 'p'> {ville}</p>
                        <p> {nbr} véhicules de disponibre</p>
                    </div>
                </a>
            </Link>
        </div>
    )
}