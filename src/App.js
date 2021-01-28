import logo from './Assets/Logovideolab.png'
import instalogo from './Assets/instagram-logo.png'
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
      

        <img src={logo} className="Logo-VLF" alt="Logo VIDEOLAB"/>
        <p className="Sombras">
          BEM-VINDO AO SITE DA VIDEOLAB FILMES
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/videolabfilmes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>Nosso site ainda está em construção, por favor siga-nos no Instagram 
          <br/>
          <br/>
          <img className="instalogo" src={instalogo} alt="Instagram logo"/>
          <br/>
          @videolabfilmes
          </h4>
        </a>

      </header>
    </div>
  );
}

export default App;
