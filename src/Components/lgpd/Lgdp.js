import './styles.css'
import {useState} from 'react'

function Lgpd(){
    const [aceite, setAceite] = useState(false);

    

    function handleAceite(){
        setAceite(!aceite)
    }


    return(
        
        <div className={`lgpd-container ${aceite? 'sai':'' }`}>
            <div>
            <h2>Este site usa cookies para melhorar sua experiência e ao continuar navegando neste site, você declara estar ciente dessas condições.</h2>
            <button onClick={handleAceite}>Entendido</button>
            </div>
        </div>

    )
}


export default Lgpd;
