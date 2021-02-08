import './styles.css'
import {useState,useEffect} from 'react'



function Contato() {

    const [input, setInput] = useState('')
    const [msg, setMsg] = useState('')

        useEffect(() => {
         let encoded = encodeURI(input)

        setMsg(encoded)
        }, [input]);
      

  
    return(
        <div className="contato-container">
            <h1>Fale conosco</h1>
            <div className="contact-card">            
                <h2>Mande uma mensagem via Whatsapp</h2>
                <div className="custom-msg">
                    <input  value={input} onInput={e => setInput(e.target.value)} className="text-area" placeholder="" type="text" name="mensagem" id="mensagem"/>
                    <a href={`https://api.whatsapp.com/send?phone=5511981050758&text=${msg}`}><button className="wpp-btn">Enviar Mensagem</button></a>
                </div> 
           
            </div> 
            
        </div>
    )
}

export default Contato;