import Grid from "./grid"
import Link from 'next/link'
import Image from 'next/image'
import { Item_detail_2 } from "./primer"


export function Rent({name, ans, img, width, height, prix, essence, bv, ville, places, portes, clim, id }){

    const BV = () => {
        if(bv === 'automatique' || bv === 'auto' || bv === 'Automatique' || bv === 'Auto' || bv === 'Automatic' ){
            return 'Auto.'
        } else {
            return 'Manuel'
        }
    }
    const Carb = () => {
        if (essence){
            return 'Essence'
        } else {
            return 'Diesel'
        }
    }

    const Clim = () => {
        if (clim){
            return 'Climatisé'
        } else {
            return 'Non climatisé'
        }
    }
    let x = parseInt(prix)
    const Prix =  new Intl.NumberFormat('fr-FR', { style : 'currency', currency : 'XAF'}).format(x)
    // console.log(x)
    return (
        <div  className = 'rentItem'>
            <Link href='/location/id' as={`/location/${id}`}>
                <a>
                    <div className = 'grid-2-bis'>
                        <div >
                            <div className = 'label'>
                                <p>{name}</p>
                                <p className = 'prix'>{Prix}</p>
                            </div>
                            <div className ='desc grid-2'>
                                <Item_detail_2 img = ' icons8-user-50.png' text = {`${places} places`}/>
                                <Item_detail_2 img = 'icons8-gas-station-50.png' text= {Carb()} />
                                <Item_detail_2 img = 'icons8-gearbox_black.png' text= {BV()} />
                                <Item_detail_2 img = 'icons8-fresh-air-50.png' text= {Clim()} />
                                <p>N° portière : {portes} portières </p>
                            </div>
                        </div>
                        <div className = 'image'>
                            <div className = 'img'>
                                <img src ={img} alt = {`${name} ${ans}`} />
                            </div>
                            <div className = 'reserv'>
                                <Link href= '/location/id' as={`/location/${id}`}>
                                    <a>
                                        Reserver
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}


export function Rent_2({title, img, prix, essence, bv, ville, places, portes, clim}){

    const BV = () => {
        if(bv === 'automatique' || bv === 'auto' || bv === 'Automatique' || bv === 'Auto' || bv === 'Automatic' ){
            return 'Auto.'
        } else {
            return 'Manuel'
        }
    }

    const Places = () => {
        if(places < 9){
            return `0${places}`
        } else {
            return places
        }
    }

    const Porte = () => {
        if(portes < 9){
            return `0${places}`
        } else {
            return places
        }
    }

    const Essence = () => {
        if(essence){
            return 'Essence'
        } else {
            return 'Diesel'
        }
    }

    const Clim = () => {
        if(clim){
            return 'Climatisé'
        } else {
            return 'Non-Climatisé'
        }
    }

    let x = parseInt(prix)
    const Prix =  new Intl.NumberFormat('fr-FR', { style : 'currency', currency : 'XAF'}).format(x)
    return (
        <div  className = 'rentItem'>
                <a>
                    <div className = 'grid-2-bis'>
                        <div >
                            <div className = 'label'>
                                <p>{title}</p>
                                <p className = 'prix'>{Prix} / Jour</p>
                            </div>
                            <div className ='desc grid-2'>
                                <Item_detail_2 img = '/icons8-user-50.png' text = {Places()}/>
                                <Item_detail_2 img = '/icons8-gas-station-50.png' text= {Essence()} />
                                <Item_detail_2 img = '/icons8-gearbox_black.png' text= {bv} />
                                <Item_detail_2 img = '/icons8-fresh-air-50.png' text= {Clim()} />
                                <p>N° portière : {Porte()} portières </p>
                            </div>
                        </div>
                        <div className = 'image'>
                            <div className = 'img'>
                                <img src ={img} />
                            </div>
                            
                        </div>
                    </div>
                </a>
        </div>
    )
}
