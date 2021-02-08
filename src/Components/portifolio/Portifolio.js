import './styles.css'

function Portifolio(){
    return(
        <div className="portifolio-container">
            <h1>Portifólio</h1>
            <div className="videos-cards">
            <iframe title="Levis" className="card" src="https://www.youtube.com/embed/VTyrXhTbm1M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe  title="zapguia"className="card" src="https://www.youtube.com/embed/vTK6tIk8U9o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe title="sejaleve"className="card" height="315" src="https://www.youtube.com/embed/dzPe1RhNd04" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe  title="cultura" className="card" src="https://www.youtube.com/embed/9_g5qBoMxus" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe  title="timelife" className="card" src="https://www.youtube.com/embed/-vpgHkm1mbQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe title="Megazap" className="card" src="https://www.youtube.com/embed/DpXnwRTw5pI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <a id="Clientes" href="https://www.youtube.com/channel/UCNObqaOyPSktpxJLcJOh2TQ" ><button className="portifolio-btn">VER TUDO</button></a>
        </div>
    )
}


export default Portifolio;
