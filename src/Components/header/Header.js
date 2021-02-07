import "./styles.css"
import logo from '../../Assets/Logovideolab.png'
import {useState} from 'react'

function AppHeader(){

    const [show, setShow] = useState(true);

   function handleClick(){
        setShow(!show)
        
    };

    return(
        <header className="Header-container">
            <div className="Applogo">
                <a href="http://localhost:3000/"><img src={logo} alt="VideoLab Filmes"/></a>
            </div>
            <div className={`App-nav ${show? '':'on' }`}onClick={handleClick}>

                <div className="menu-toggle">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>


                <nav>
                    <li>
                        <ul><a href="#Sobre-nos">Sobre nós</a></ul>
                        <ul><a href="#Portifólio">Portifólio</a></ul>
                        <ul><a href="#Clientes">Clientes</a></ul>
                        <ul><a href="#Contato">Contato</a></ul>
                    </li>
                </nav>
            </div>
        </header>
    )
}

export default AppHeader;