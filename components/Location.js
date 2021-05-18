import Container from "./container";
import Layout from "./layout";
import { Title_1 } from "./title";
import Link from 'next/link'

export default function LocationClass({data}){

    const Limit = () => {
        if(data.length >= 5){
            let Ar = []
            for(let i = 0; i < 5; i++){
                let el = data[i]
                Ar.push(el)
            }

            return Ar.map((el, key) => <LocationItem 
                            mark = {el.node.name}
                            model = {el.node.model}
                            ans = {el.node.annee}
                            prix = {el.node.prix_Location}
                            id = {el.node.id}
                            img = {el.node.genericImg.url}
                            key = {key}
                        />
                    )
        } else {
            return data.map((el, key) => <LocationItem 
                            mark = {el.mark}
                            model = {el.model}
                            ans = {el.ans}
                            prix = {el.prix_location}
                            id = {el.id}
                            img = {el.imgs}
                            key = {key}
                        />
                    )
        }
    }

    return(
        <Layout>
            <Container style = {{margin : '24px 0'}}>
                <Title_1 title = 'Location de Véhicules' btn_title = "Voir plus de véhicules &rarr;"  link = '/location'/>
                <div className = 'phoneStyle'>
                    <div className = 'grid-5'>
                        {
                            Limit()
                        }
                    </div>
                </div>
            </Container>
        </Layout>
    )
}


export function LocationItem ({mark, model, ans, prix, img, id}){

    const Prix = new Intl.NumberFormat('fr-FR', {style : 'currency', currency : 'XAF'}).format(prix)
    
    return(
        <div className = 'rent'>
            <div className = 'img'>
                <div>
                    <img src = {img}/>
                </div>
            </div>
            <div className = 'champ'>
                <div className = 'desc'>
                    <p className = 'mark'>{`${mark} ${ans}`}</p>
                    <p className = 'prix'>{Prix}</p>
                    <p>paiement par jour</p>
                </div>
                <div className = 'reserv'>
                   <Link href = '/location/id' as = {`/location/${id}`} >
                        <a>
                            <div className = 'btn'>
                                <p> Reserver</p>
                            </div>
                        </a>
                   </Link>
                </div>
            </div>
        </div>
    )
}

