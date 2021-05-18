import Container from "../../components/container";
import { Rent_2 } from "../../components/elements";
import Layout from "../../components/layout";
import { Item_detail_2 } from "../../components/primer";
import Link from 'next/link'
import config from "../../config";
import { gql } from "graphql-request";

export default function Achat({page}){

      console.log(page)

    return(
        <Layout>
            <Container>
                <div className = 'alertCovid'>
                    <p>COVID-19 alert: travel requiement are changing rapidly, including need for pre-travel COVID-19 testing and quarantine on arrival.</p>
                </div>
                <div className='LocationVue'>
                <Rent_2 />
                <div className = 'infos'>
                    <form>
                        <div className = 'date'>
                            <label>Période de location</label>
                            <div className = 'periode'>
                            <input type='date' id='debut' name = 'periode'/>
                            <input type='date' id='fin' name = 'periode'/>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
                <div className = 'phon'>
                    <div className ='card'>
                        <p className = 'cT'>Nettoyage et sécurité</p>
                        <Item_detail_2 img = "/icons8-clean-50.png" text ='Interieur et exterieur des voitures nettoyés avec un désinfectant avant la location'/>
                        <Item_detail_2 img = "/icons8-hand-50.png" text ='Les surfaces à fort toucher sont désinfectées aux points de ramassage'/>
                        <Item_detail_2 img = "/icons8-spread-50.png" text ='Respect mesures de distanciation sociale'/>
                    </div>
                </div>
                <div className = 'phon'>
                    <div className ='card'>
                        <p className = 'cT'>Informations à confirmer</p>
                        <form>
                            <div className = 'formItem'>
                                <label>Annuler la chauffeur dans le forfait</label>
                                <input type = 'checkbox' id =' chauffeur' value = 'chauffeur' />
                            </div>
                            <p className = 'plus'>Pour chaque véhicule resersé, un chauffeur est mise a la disposition du client. Mais dans le cas ou le client souhaite effectuer ces propre deplacement. veuillez nous contacter pour plus d'infos</p>
                            <div className = 'formItem'>
                                <label>Effectuer des déplacements aussi hors de la ville </label>
                                <input type = 'checkbox' id =' chauffeur' value = 'chauffeur'/>
                            </div>
                            <p className = 'plus'>valider cette option, vous permettra d'éffectuer des deplacement hors de la ville, mais cela augmentera le prix de la location de <span style = {{fontWeight : "600", color:'rgb(255, 62, 62)'}}>10 000 XAF</span></p>
                            
                        </form>
                    </div>
                </div>
                <div className = 'phon Facture'>
                    <div className ='card'>
                        <p className = 'cT'>Facture</p>
                        <div className = 'grid-2-bis'>
                            <div>
                                <p className = 'label'> Toyota Corolla 2019</p>
                                <p className = 'prix'> 555.000 XAF</p>
                                <p className = 'details'> Pour un période de 15 jours</p>
                            </div>
                            <div className = 'reserv'>
                                <Link href= '/location/confirm_id' >
                                    <a>
                                        Continuer
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}


export const getStaticPaths = async () => {
    let page = await config.request(gql`
        query Car{
            page: locations {
                id
            }
        }
    `)

    let data = page.page
    // console.log('pages ', data.length);
    return {
        paths : data.map(el => ({params : {id : el.id}})),
        fallback : false,
    }
}

export const getStaticProps = async ({params}) => {
    let page = await config.request(gql`
        query Car($id : ID!){
            page: voiture(where : {id :$id}){
                bv
                annee
                clim
                essence
                name
                places
                portes
                prixVendeur
                prix_Location
                ville
                id
                genericImg {
                mimeType
                url
                size
                }
            }
        }
    `, {id : params.id})

    console.log(page)
    
    return {
        props : {
            page,
        }
    }
}