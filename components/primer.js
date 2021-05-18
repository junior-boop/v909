
import Link from 'next/link'
import Bouton from './botton'
import Container from './container'
import Layout from './layout'


export default function Primer({title, content}){

    let t = `${title}`
    let c = `${content}`

    const Title = () => {
        if(t.length > 70) {
            return `${t.slice(0, 70)}...`
        } else if (t.length <= 70) {
            return title
        }
    }

    const Content = () => {
        if(c.length > 100) {
            return `${c.slice(0, 100)}...`
        } else {
            return content
        }
    }
    return(
        <div className = 'primer'>
            <div className = 'primer_img'>
                <div className = 'img_container'>
                    <img src = 'test.png'/>
                </div>
            </div>
            <div className = 'primer_cover'></div>
            <div className = 'primer_desc'>
                <div className = 'desc'>
                    <p className = 'title'>{Title()}</p>
                    <span></span>
                    <p className = 'contain'>{Content()}</p>
                </div>
            </div>
        </div>
    )
}

export function Primer_2({title, content}){

    let t = `${title}`
    let c = `${content}`

    const Title = () => {
        if(t.length > 70) {
            return `${t.slice(0, 70)}...`
        } else if (t.length <= 70) {
            return title
        }
    }

    const Content = () => {
        if(c.length > 100) {
            return `${c.slice(0, 100)}...`
        } else {
            return content
        }
    }
    return(
        <div className = 'primer'>
            <div className = 'primer_img_2'>
                <div className = 'img_container'>
                    <img src = 'test.png'/>
                </div>
            </div>
            <div className = 'primer_cover'></div>
            <div className = 'primer_desc'>
                <div className = 'desc'>
                    <p className = 'title'>{Title()}</p>
                    <span></span>
                    <p className = 'contain'>{Content()}</p>
                </div>
            </div>
        </div>
    )
}

export function Item({title, img, prix, essence, bv, ville, id}){
    const Title = () => {
        let t = `${title}`
        if(t.length > 64){
            return `${t.slice(0, 64)}...`
        } else {
            return title
        }
    }
    const Content = () => {
        let c = `${content}`
        if(c.length > 100){
            return `${c.slice(0, 100)}...`
        } else {
            return content
        }
    }

    const BV = () => {
        if(bv === 'automatique' || bv === 'auto' || bv === 'Automatique' || bv === 'Auto' || bv === 'Automatic' ){
            return 'Auto.'
        } else {
            return 'Manuel'
        }
    }

    let x = parseInt(prix)
    const Prix =  new Intl.NumberFormat('fr-FR', { style : 'currency', currency : 'XAF'}).format(x)

    return(
        <Link as = {`/achat/${id}`} href = '/achat/[id]'>
        <a className = 'item'>
            <div>
                <Images img = {img} />
            </div>
            <div>
                <div className = 'desc'>
                    <h3>{Title()}</h3>
                    <p className = 'd prix'>{Prix}</p>
                    <div className='gridPhone' style = {{display : 'grid', gridTemplateColumns : 'repeat(3, 1fr)'}}>
                        <Item_detail 
                            img = 'icons8-place-marker-50.png'
                            text = {ville}
                        />
                        <Item_detail 
                            img = 'icons8-gearbox-64.png'
                            text = {BV()}
                        />
                        <Item_detail 
                            img = 'icons8-gas-station-50.png'
                            text = {essence}
                        />
                    </div>
                    
                </div>
            </div>
            <div></div>
        </a>
        </Link>
    )
}

export function Images({img}){

    return(
        <div  className = 'item_img' style = {{backgroundImage : `url(${img})`, backgroundSize : 'cover',}}>
            <div className = 'blur'></div>
            <img src = {`${img}`} />
        </div>
    )
}



export function Primer_3({title, content, prix}){

    let t = `${title}`
    let c = `${content}`

    const Title = () => {
        if(t.length > 70) {
            return `${t.slice(0, 70)}...`
        } else if (t.length <= 70) {
            return title
        }
    }

    
    let x = parseInt(prix)
    const Prix =  new Intl.NumberFormat('fr-FR', { style : 'currency', currency : 'XAF'}).format(x)
    console.log(Prix)

    return(
        <Link href ='/' >
            <a className = 'primer'>
                <div className = 'primer_img_2'>
                    <div className = 'img_container'>
                        <img src = 'test.png'/>
                    </div>
                </div>
                <div className = 'primer_cover'></div>
                <div className = 'primer_desc'>
                    <div className = 'desc'>
                        <p className = 'title'>{Title()}</p>
                        <p className = 'price'>{Prix}</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}


export const Item_detail = ({img, text}) => {
    return(
        <div className = 'item-detail'>
            <img src = {img} />
            <p>{text}</p>
        </div>  
    )
}

export const Item_detail_2 = ({img, text}) => {
    return(
        <div className = 'item-detail-2'>
            <img src = {img} />
            <p>{text}</p>
        </div>  
    )
}

//location 
export function Affiche_location({title, img}){

    let t = `${title}`

    const Title = () => {
        if(t.length > 70) {
            return `${t.slice(0, 70)}...`
        } else if (t.length <= 70) {
            return title
        }
    }

    return(
        <div className = 'primer_2'>
            <div className = 'primer_img_2'>
                <div className = 'img_container'>
                    <img src = {img} />
                </div>
            </div>
            <div className = 'primer_cover'></div>
            <div className = 'primer_desc'>
                <div className = 'desc'>
                    <p className = 'title'>{Title()}</p>
                    <Link href = '/achat' >
                        <a className = 'contain'>
                        Les véhicules d'occassion &rarr;
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export function Location(){
    return(
        <Layout>
            <Container>
                <Affiche_location title = {`Découvrez une large de gamme de véhicules d'occassion`} img = '/test.png' />
            </Container>
        </Layout>
    )
}


export function Item_2({title, img, prix, essence, bv, ville}){
    const Title = () => {
        let t = `${title}`
        if(t.length > 64){
            return `${t.slice(0, 64)}...`
        } else {
            return title
        }
    }

    const BV = () => {
        if(bv === 'automatique' || bv === 'auto' || bv === 'Automatique' || bv === 'Auto' || bv === 'Automatic' ){
            return 'Auto.'
        } else {
            return 'Manuel'
        }
    }

    let x = parseInt(prix)
    const Prix =  new Intl.NumberFormat('fr-FR', { style : 'currency', currency : 'XAF'}).format(x)

    return(
        <Link href = '/achat/voiture'>
        <a className = 'item'>
            <div>
                <Images img = {img} />
            </div>
            <div>
                <div className = 'desc_2'>
                    <h3>{Title()}</h3>
                    <p className = 'd prix'>{Prix} / Jour</p>
                    <div style = {{display : 'grid', gridTemplateColumns : 'repeat(3, 1fr)'}}>
                        <Item_detail 
                            img = 'icons8-place-marker-50.png'
                            text = {ville}
                        />
                        <Item_detail 
                            img = 'icons8-gearbox-64.png'
                            text = {BV()}
                        />
                        <Item_detail 
                            img = 'icons8-gas-station-50.png'
                            text = {essence}
                        />
                    </div>
                    <div>
                        <Link href = '/'>
                            <a style = {{display : 'flex', alignItems : 'center', justifyContent : 'center', width : '100%', padding : '9px 0', backgroundColor : 'rgb(27, 172, 8)', marginTop : 20, color : 'white', textDecoration : 'none'}}>
                                <p>Reserver</p>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            
        </a>
        </Link>
    )
}
