import './styles.css'

function Home(){
    return(
        <article className="Article-container">
                <div className="Home-video">
                <iframe className="Link-video" src="https://player.vimeo.com/video/509047860?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="Fa&amp;ccedil;a v&amp;iacute;deo!"></iframe>
                </div>
                <div className="Call-to-action">
                    <h1>Destaque seu negócio nas redes sociais com a VideoLab Filmes</h1>
                    <a href="https://api.whatsapp.com/send?phone=5511981050758&text=Ol%C3%A1%2C%20conheci%20voc%C3%AAs%20pelo%20site!"><button>ME MOSTRE COMO</button></a>
                </div>
        </article>
    )   
}

export default Home;