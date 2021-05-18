import Container from "./container";
import Layout from "./layout";

export default function Footer(){
    return(
        <Layout cn = 'footer' style = {{backgroundColor : '#f5f5f5'}}>
            <Container >
                <div className = 'footer' style = {{display : 'flex', justifyContent : 'center', alignItems : 'center', height : 252}}>
                    <div style = {{marginRight : 24,  width : '45%'}}>
                        <p style = {{fontSize : 13, fontWeight : '500'}}>V909 est un site web de la Genius Of Digital, faisant dans le la vente et location de Véhicules sur le térritoire Camerounais.</p>
                        <p style = {{marginTop : 16}}>v909.net - GeniusOfDigital - &copy; Mars 2021</p>
                    </div>
                    <div style = {{display : 'flex', justifyContent : 'center', flexDirection : 'column', width : '45%', padding : 25, backgroundColor : 'rgb(0, 119, 255)'}}>
                        <p style = {{fontSize : 13, fontWeight : '500', color : 'white' }}> Pour avoir plus d'information sur nos services,</p>
                        <p style = {{fontSize : 13, fontWeight : '500', color : 'white' }}> contactez-nous via un des liens suivants </p>
                        <p style = {{fontSize : 13, fontWeight : '500', color : 'white', marginTop : 16 }}> +237 655 733 765 </p>
                        <p style = {{fontSize : 13, fontWeight : '500', color : 'white', }}> juniorseppo3@gmail.com </p>
                    </div>
                </div>                                                                                                                                                                                                                           
            </Container>
        </Layout>
    )
}

export function FooterPhone(){
    return(
        <Layout cn = 'footerPhone' style = {{backgroundColor : '#f5f5f5'}}>
            <Container >
                <div  style = {{display : 'flex', justifyContent : 'center', alignItems : 'center', height : 252}}>
                    
                </div>                                                                                                                                                                                                                           
            </Container>
        </Layout>
    )
}