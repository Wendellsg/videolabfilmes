import './styles.css'

function perfilCard(props){
    return(
        <div className="card-container">
            <h2>{props.Name}</h2>
            <div style={{backgroundImage: `url(${props.Image})`}} className="card-foto">
            </div>
            <h3>{props.Function}</h3>
        </div>
    )
}

export default perfilCard;