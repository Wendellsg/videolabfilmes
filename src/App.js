import logo from './Assets/Logovideolab.png'
import instalogo from './Assets/instagram-logo.png'
import WhatsLogo from './Assets/whatsapp.png'
import EmailLogo from './Assets/email.png'
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div className="Logo-home">
          <a href="videolabfilmes.com.br"><img src={logo} alt="VIDEOLAB FILMES"/></a>
        </div>
        <div className="App-Menu">
          <li>
            <ul><a href="videolabfilmes.com.br">PORTIFÓLIO</a></ul>
            <ul><a href="videolabfilmes.com.br">CLIENTES</a></ul>
            <ul><a href="videolabfilmes.com.br">SOBRE NÓS</a></ul>
            <ul><a href="videolabfilmes.com.br">CONTATO</a></ul>
          </li>
        </div>
      </header>
      <article className="App-article">
        <div className="Title">
          <h1>DESTAQUE SEU NEGÓCIO NAS REDES SOCIAIS COM A VIDEOLAB FILMES</h1>
        </div>
        <div className="Home-video">
          <div>
          <iframe src="https://player.vimeo.com/video/509047860?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="650" height="650" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Fa&amp;ccedil;a v&amp;iacute;deo!"></iframe>
          </div>
        
        </div>
      </article>
      <footer className="App-footer">
        <div className="Infos">
                <h2>VIDEOLAB FILMES</h2>
                <h3>SÃO PAULO-SP</h3>
                <h3>11 98105-0758</h3>
                <h3>CONTATO@VIDEOLABFILMES.COM.BR</h3>
          </div>
          <div className="Sociallinks">
            <h2>CONTATE-NOS VIA</h2>
            <div>
              <li>
                <ul><a href="https://www.instagram.com/videolabfilmes/"><img src={instalogo} alt="insta"/></a></ul>
                <ul><a href="https://api.whatsapp.com/send?phone=5511981050758&text=Ol%C3%A1%2C%20conheci%20voc%C3%AAs%20pelo%20site!"><img src={WhatsLogo} alt="insta"/></a></ul>
                <ul><a href="mailto:contato@videolabfilmes.com.br"><img src={EmailLogo} alt="insta"/></a></ul>

              </li>
            </div>
        </div>
      </footer>
        

    </div>
  );
}

export default App;
