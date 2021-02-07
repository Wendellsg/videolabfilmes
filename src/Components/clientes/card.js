import './styles.css'

function card(props){
    return(
        <div className="Cliente-card">
            <div >
                <img className="cliente-logo" src={props.logo} alt=""/>
            </div>
            <h2 >{props.Name}</h2>
        </div>
    )
}

export default card;