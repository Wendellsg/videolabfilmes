import './styles.css'



function Contato() {

    return(
        <div className="contato-container">
            <h1>Fale conosco</h1>
            <div className="contact-card">            
                <h2>Mande uma mensagem via Whatsapp</h2>
                <div className="custom-msg">
                <input  className="text-area" placeholder="" type="text" name="mensagem" id="mensagem"/>
               <button className="wpp-btn" >Enviar Mensagem</button>
                </div>
                         
            </div>  
        </div>
    )
}

export default Contato;