import Container from "./container";
import Layout from "./layout";

export default function Diapo({bgImg, texte, subtitle}){
    return(
        <Layout  cn = 'Diapo'>
            <div className = 'BackgroundImg'>
                <img src = {bgImg} />
            </div>
            <div className = 'cover'></div>
            <Container cn = 'desc'>
                <div className = 'text'>
                    <p className = 'title'>{texte}</p>
                    <p>{subtitle} </p>
                </div>
            </Container>
        </Layout>
    )
}