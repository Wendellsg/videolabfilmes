import Whatsapp from '../../Assets/whatsapp.png'
import Instagram from '../../Assets/instagram-logo.png'
import Facebook from '../../Assets/facebook.png'
import './styles.css'


function appFooter(){
    return(
        <footer className="footer-conteiner">
            <div className="app-infos">
                <h2>VideoLab Filmes</h2>
                <h3>SÃO PAULO-SP</h3>
                <h3>11 98105-0758</h3>
                <h3>CONTATO@VIDEOLABFILMES.COM.BR</h3>
            </div>
            <div className="social-networks">
            <h2>CONTATE-NOS VIA</h2>
            <div className="sn-logos">
                <a href="https://api.whatsapp.com/send?phone=5511981050758&text=Ol%C3%A1%2C%20conheci%20voc%C3%AAs%20pelo%20site!https://api.whatsapp.com/send?phone=5511981050758&text=Ol%C3%A1%2C%20conheci%20voc%C3%AAs%20pelo%20site!"><img src={Whatsapp} alt=""/></a>
                <a href="https://www.instagram.com/videolabfilmes/"><img src={Instagram} alt=""/></a>
                <a href="https://www.facebook.com/videolabfilmes"><img src={Facebook} alt=""/></a>

            </div>
            </div>
        </footer>

    )



}


export default appFooter;