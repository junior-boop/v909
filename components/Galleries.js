import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link'
import Container, { Gallerie_Container } from "./container";
import Layout from "./layout";
import data from './data.json';
import { Item_detail_2 } from './primer';
import Grid from './grid';

export default function Galleries(){
    let Prix = data.prix
    let nom = `${data.marque} ${data.modele} ${data.annee}`

    let prix = new Intl.NumberFormat('fr-FR', { style : 'currency', currency : 'XAF'}).format(Prix)
    return(
        <div>
            <Layout style = {{ backgroundColor : '#f5f5f5', padding : '20px 0', position : 'relative'}}>
                <Head>
                    <title>{`Louer une ${nom} | v909`} </title>
                </Head>
                <Gallerie_Container>
                    <div id = 'galleries'>
                        <div id = 'haut'>
                            <div className = 'name'>
                                <h3>{nom}</h3>
                            </div>
                            <div className = 'price'><p>{prix} </p> </div>
                        </div>
                        <div className = 'sliderShow'>
                            <Slider />
                            <div></div>
                        </div>
                    </div>
                </Gallerie_Container>
            </Layout>
        </div>
    )
}

function Slider(){
    const [count, setCount] = useState(1)
    let Img = data.imgs[count-1]
    let larger = data.imgs.length

    let details = data

    function Thund({img, id}) {
        return (
            <div className = 'thund' onClick = {() => setCount(id)}>
                <a className = 'img'>
                    <img src = {`${img}`} alt = {id} />
                </a>
            </div>
        )
    }

    if (Img.img === undefined){
        return setCount(larger)
    }

    const increment = () => {
        if(count === larger){
            return null
        } else {
            setCount(count + 1)
        }
    }

    

    const decrement = () => {
        if(count === 1){
            return null
        } else {
            setCount(count - 1)
        }
    }

    const Able_left = () => {
        if (count === 1){
            return {display : 'none'}
        } else {
            return {display : 'block'}
        }
    }

    const Able_right = () => {
        if (count === larger){
            return {display : 'none'}
        } else {
            return {display : 'block'}
        }
    }

    const Clim = () => {
        if(data.clim){
            return 'Oui'
        } else {
            return 'Non'
        }
    }

    let km = new Intl.NumberFormat('en-EN').format(data.km_count)


    return(
        <div id = 'slider'>
            <div id = 'sliderSide'>
                <div id = 'sliderContent'>
                    <div className = 'img'>
                        <img alt = {Img.img} src = {Img.img} />
                    </div>
                </div>
                <div onClick = {decrement} className = 'left' style = {Able_left()}>
                    <img alt = 'left button' src = '/left.png' />
                </div>
                <div onClick = {increment} className = 'right' style = {Able_right()}>
                    <img alt = 'right button' src = '/right.png' />
                </div>
            </div>
            <div id = 'details'>
                <Grid cn = 'grid-2'>
                    <Item_detail_2 
                        img = '/icons8-place-marker-50.png'
                        text = {data.ville}
                    />
                    <Item_detail_2
                        img = '/icons8-gearbox-64.png'
                        text = {data.bv}
                    />
                    <Item_detail_2 
                        img = '/icons8-today-50.png'
                        text = {data.annee}
                    />
                    <Item_detail_2 
                        img = '/icons8-gas-station-50.png'
                        text = {data.moteur}
                    />
                    <Item_detail_2
                        img = '/icons8-speedometer-50.png'
                        text = {km}
                    />
                    <Item_detail_2 
                        img = '/icons8-fresh-air-50.png'
                        text = {Clim()}
                    />
                </Grid>
                <div style = {{marginTop : 25, padding : '0 12px'}}>
                    <Grid cn = 'grid-4-thund'>
                        {
                            data.imgs.map((el) => <Thund img = {el.img} id = {el.id} />)
                        }
                    </Grid>
                </div>
                <div style = {{height : 120, display :'flex', alignItems : 'center', justifyContent : 'center', padding : '12px'}}>
                    <div className = 'wa'>
                        <Link href = 'https://wa.me/237655733765'>
                            <a>
                                Contactez-nous pour l'achat via WhatsApp
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


