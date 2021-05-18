import Container from "./container";
import Layout from "./layout";

export default function HeaderPage({title, count}){
    return(
        <Layout style = {{ backgroundColor : '#f5f5f5', padding : '20px 0', position : 'relative'}}>
            <Container>
                <div className = 'HeaderPage'>
                    <div className = 'el'>
                        <h2 className = 'title'>{title}</h2>
                    </div>
                    <div className = 'el'>
                        <div className = 'cadre'>
                            <div className = 'nbr'>
                                <p>00</p>
                            </div>
                            <div className = 'desc'>
                                <p>Nombre de Voiture</p>
                            </div>
                        </div>
                        <div className = 'cadre'>
                            <div className = 'nbr'>
                                <p>00</p>
                            </div>
                            <div className = 'desc'>
                                <p>{count}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}