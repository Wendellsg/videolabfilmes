import logo from './Assets/Logovideolab.png'
import instalogo from './Assets/instagram-logo.png'
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div className="Logo-home">
          <img src={logo} alt="VIDEOLAB FILMES"/>
        </div>
        <div className="App-Menu">
          <li>
            <ul>SOBRE NÓS</ul>
            <ul>PORTIFÓLIO</ul>
            <ul>CLIENTES</ul>
            <ul>CONTATO</ul>
          </li>
        </div>
      </header>
      <article className="App-article">
        <div className="Title">
          <h1>DESTAQUE SEU NEGÓCIO NAS REDES SOCIAIS COM A VIDEOLAB FILMES</h1>
        </div>
        <div className="Home-video">
          
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
                <ul><img src={instalogo} alt="insta"/></ul>
                <ul>WHATS</ul>
                <ul>EMAIL</ul>
              </li>
            </div>
        </div>
      </footer>
        

    </div>
  );
}

export default App;
