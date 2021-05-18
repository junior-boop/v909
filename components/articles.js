import Container from "./container";
import Grid from "./grid";
import Layout from "./layout";
import { Title, Title_1 } from "./title";
import {Item } from './primer'
import { Rent } from "./elements";

export function Articles({data}){

    const Limit = () => {
        if(data.length >= 5){
            let Ar = []
            for(let i = 0; i < 5; i++){
                let el = data[i]
                // console.log(el)
                Ar.push(el)
            }

            return Ar.map((el, key) => <Item 
                            title = {`${el.mark} ${el.model} ${el.ans}`}
                            ville = {el.ville}
                            essence = {el.carb}
                            bv = {el.bv}
                            prix = {el.prix_vent}
                            img = {`${el.imgs[0].img}`}
                            id = {el.id}
                            key = {key}
                            />
                    )
        } else {
            return data.map((el, key) => <Item 
                            title = {`${el.mark} ${el.model} ${el.ans}`}
                            ville = {el.ville}
                            essence = {el.carb}
                            bv = {el.bv}
                            prix = {el.prix_vent}
                            img = {`${el.imgs[0].img}`}
                            id = {el.id}
                            key = {key}
                            />
                    )
        }
    }

    return(
        <Layout cn = 'article'>
            <Container>
                <Title_1 title = 'Achat de Véhicules' btn_title = "Voir plus de véhicules &rarr;"  link = '/achat'/>
                <div className = 'phoneStyle'>
                    <Grid cn = 'grid-5'>
                        {
                        Limit()
                        }
                    </Grid>
                </div>
            </Container>
        </Layout>
    )
}

export function Nouveaute(){
    return(
        <Layout cn = 'article'>
            <Container>
                <Title title = 'Nouveaute'/>
                <Grid cn = 'grid-4'>
                    <Item 
                    title = "Toyota Rav 4 2018"
                    ville = 'Yaounde'
                    essence = 'Diesel'
                    bv = 'manuel'
                    prix = {500000}
                    img = 'test.png'
                    />
                   <Item 
                    title = "Toyota Rav 4 2018"
                    ville = 'Yaounde'
                    essence = 'Diesel'
                    bv = 'manuel'
                    prix = {500000}
                    img = 'test.png'
                    />
                    <Item 
                    title = "Toyota Rav 4 2018"
                    ville = 'Yaounde'
                    essence = 'Diesel'
                    bv = 'manuel'
                    prix = {500000}
                    img = 'test.png'
                    />
                    <Item 
                    title = "Toyota Rav 4 2018"
                    ville = 'Yaounde'
                    essence = 'Diesel'
                    bv = 'manuel'
                    prix = {500000}
                    img = 'test.png'
                    />
                    
                </Grid>
            </Container>
        </Layout>
    )
}

export function ListeVente(){
    return(
        <Layout cn = 'article'>
            <Container>
                <Title title = 'Plus de Vehicules' />
                <Grid cn = 'grid-4'>
                    
                </Grid>
            </Container>
        </Layout>
    )
}

export function ListeLocation({data}){


    const liste = () => {
        return data.map((el, key) => <Rent 
        name = {el.node.name}
        ans = {el.node.annee}
        prix = {el.node.prix_Location}
        id = {el.node.id}
        img = {el.node.genericImg.url}
        width = {el.node.genericImg.width}
        height = {el.node.genericImg.height}
        essence = {el.node.essence}
        places = {el.node.places}
        portes = {el.node.portes}
        ville = {el.node.ville}
        key = {key}
    />
)
    }
    return(
        <Layout cn = 'article'>
            <Container>
                <Title title = 'Vehicules en location' />
                <div className = 'alertCovid'>
                    <p>COVID-19 alert: travel requiement are changing rapidly, including need for pre-travel COVID-19 testing and quarantine on arrival.</p>
                </div>
                <div className = 'grid-2-phone'>
                   {
                       liste()
                   }
                </div>
            </Container>
        </Layout>
    )
}

