import './styles.css'

function Portifolio(){
    return(
        <div id="Portifólio" className="portifolio-container">
            <h1>Portifólio</h1>
            <div className="videos-cards">
            <iframe className="card" src="https://www.youtube.com/embed/vLE8o0povRo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe className="card" src="https://www.youtube.com/embed/vTK6tIk8U9o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe className="card" height="315" src="https://www.youtube.com/embed/dzPe1RhNd04" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe  className="card" src="https://www.youtube.com/embed/OfR7z3WersI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe  className="card" src="https://www.youtube.com/embed/-vpgHkm1mbQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe className="card" src="https://www.youtube.com/embed/DpXnwRTw5pI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <a href="https://www.youtube.com/channel/UCNObqaOyPSktpxJLcJOh2TQ" ><button className="portifolio-btn">VER TUDO</button></a>
        </div>
    )
}


export default Portifolio;
