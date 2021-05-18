import Head from 'next/head'
import LocationClass from '../components/Location'
import config, { server } from '../config'
import Diapo from '../components/diapo'
import Ville from '../components/ville'
import {gql} from 'graphql-request'

export default function Home({page}) {
  return (
    <div>
      <Head>
        <title>V909 | location de Vehicule</title>
        <link rel="icon" href="/OfficialLogo.png" />
        {/* <meta name = 'viewport' content = 'width=device-width, initial-scale=0.5' /> */}
      </Head>
      <main>
        <Diapo bgImg = {`/bgImg_2.jpg`} texte = 'Louer avec facilité un véhicule au Cameroun' subtitle = 'Louez un véhicule sur V909 pour tous vos déplacements dans les villes Camerounaises' />
        <Ville />
        <LocationClass data = {page.edges} />
      </main>

    </div>
  )
}

export const getStaticProps = async () => {
  let {page} = await config.request(gql`
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
  `)
  //  console.log('liste de voiture', page)
    return {
      props : {
        page,
      },
      revalidate : 20,
    }
}
