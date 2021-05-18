import Head from 'next/head'
import { ListeLocation } from '../../components/articles'
import config from '../../config'
import {gql} from 'graphql-request'

export default function Location({page}){

    const data = page.edges
    return(
        <div>
            <Head>
                <title> V909 | Location de Véhicules </title>
                <link rel="icon" href="/OfficialLogo.png" />
            </Head>
            <main>
                <ListeLocation data = {data}/>
            </main>
        </div>
    )
}

export const getStaticProps = async () => {
    let {page} = await config.request(
        gql`
        query car {
            page: locationsConnection {
                edges {
                    node {
                        id
                        name
                        annee
                        prixVendeur
                        prix_Location
                        ville
                        essence
                        places
                        portes
                        genericImg {
                            mimeType
                            url
                            width
                            height
                            }
                        }
                    }
                }
            }
        `
    )

    return {
        props : {
            page,
        },

        revalidate : 30,
    }
}