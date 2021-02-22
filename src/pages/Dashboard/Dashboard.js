import './styles.css'

function Dashboard(){
    return(
        <div className="dashboard-container">
            <div className="dashboard-header"> 
                <h1>Dashboard</h1> 
            </div>

            <div className="edit-team box">
                <div className="team-editing edit-card">
                    <h2>Edite o time</h2>
                    <div className="input-text">
                        <h3>Nome</h3>
                        <input  className="bashboard-textarea" type="text" name="Nome"/>                       
                    </div>
                    <div className="input-text">
                        <h3>Função</h3>
                        <input  className="bashboard-textarea"type="text" name="funcao"/>
                    </div>
                    <div>
                        <h3>Foto</h3>
                        <input type="file" name="foto"/>
                    </div>
                    <button>Salvar</button>
        
                </div>
                <div className="team-dashboard">

                </div>

            </div>

            <div className="edit-portifolio box">

                <div className="portifolio-editing edit-card">
                    <h2>Edite o Portifólio</h2>
                    <div className="input-text">
                        <h3>Link do Vídeo</h3>
                        <input className="bashboard-textarea" type="text" name="Video"/>                       
                    </div>
                    <button>Salvar</button>
                </div>
                <div className="portifolio-dashboard"></div>

            </div>
            
            <div className="edit-clientes box">

                <div className="clientes-editing edit-card">
                <h2>Edite os clientes</h2>
                    <div className="input-text">
                        <h3>Cliente</h3>
                        <input className="bashboard-textarea" type="text" name="cliente"/>                       
                    </div>
                    <div>
                        <h3>Foto</h3>
                        <input type="file" name="logo"/>
                    </div>

                    <button>Salvar</button>
                </div>
                
                <div className="clientes-dashboard">

                </div>

                


            </div>
        </div>
    )
}

export default Dashboard;