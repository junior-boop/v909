import Container from "./container";
import Layout from "./layout";
import Primer, { Primer_2, Primer_3 } from "./primer";
import { Title } from "./title";

export default function Header(){
    return(
        <Layout style = {{ backgroundColor : '#f5f5f5', padding : '20px 0', position : 'relative'}}> 
            <Container>
                <Title title = 'En Status'/>
                <div className = 'grid-4'>
                    <div>
                        <Primer_3
                        title = "Toyota RAV4 Intermediaire" 
                        prix = {4545454}
                        />
                    </div>
                    <div>
                        <Primer_3
                        title = "je teste le titre de l'Article, pour voir si il va respecter les 70 characteres" 
                        content = "je teste le contenu de l'Article, pour voir si il va respecter les 70 charactere"
                        />
                    </div>
                    <div>
                        <Primer_3
                        title = "je teste le titre de l'Article, pour voir si il va respecter les 70 characteres" 
                        content = "je teste le contenu de l'Article, pour voir si il va respecter les 70 charactere"
                        />
                    </div>
                    <div>
                        <Primer_3
                        title = "je teste le titre de l'Article, pour voir si il va respecter les 70 characteres" 
                        content = "je teste le contenu de l'Article, pour voir si il va respecter les 70 charactere"
                        />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}