import './styles.css'
import PerfilCards from '../perfilCard/PerfilCard'
import ThaisFoto from '../../Assets/thais.jpeg'
import WendellFoto from '../../Assets/wendell.jpg'


function aboutUS(){
    return(
        <div className="About-Us-Container">
            <div className="our-story">
                <h1>Nossa História</h1>
                <h2>Nossa equipe está no mercado audiovisual desde 2007, produzindo vídeos com a mais alta qualidade para vários nichos. Em 2015 entramos de cabeça em produção de conteúdo audiovisual para internet, alcançando números estratosféricos de visualizações para diversas marcas. Aliando nossa qualidade audiovisual com a expertise em redes sociais, podemos fazer seu negócio alcançar os números que você desejar.</h2>
            </div>
            <div className="Members">
                <h1>Nosso Time</h1>
                <div className="cards">
                    <PerfilCards Name="Wendell Guimarães" Image={WendellFoto} Function="VIDEOMAKER"/>
                    <PerfilCards Name="Thais Guimarães" Image={ThaisFoto} Function="PRODUTORA"/>
                </div>
                <div id="Portifólio" ></div>
            </div>
        </div>
    )   
}

export default aboutUS;