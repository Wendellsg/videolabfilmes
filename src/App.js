import logo from './Assets/Logovideolab.png'
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
          Nosso Instagram
        </a>

      </header>
    </div>
  );
}

export default App;
