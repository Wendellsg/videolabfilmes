import './styles.css'
import Card from './card'
import LogoFatos from '../../Assets/clientes/Logo_Grupo_Fatos.jpg'
import HersheysoLogo from '../../Assets/clientes/hersheys-01.png'
import LevisLogo from '../../Assets/clientes/Levis-Logo.png'
import CulturaLogo from '../../Assets/clientes/cultura-inglesa.png'
import ISLogo from '../../Assets/clientes/logo-white.png'
import MZLogo from '../../Assets/clientes/megazaplogo.png'
import RemaxLogo from '../../Assets/clientes/remax.png'
import PfizerLogo from '../../Assets/clientes/Pfizer_logo.png'






function clientes(){
    return(
        <div id="Clientes"className="clientes-container">
            <h1>Clientes</h1>
            <div className="clientes-cards">
                <Card Name="Fatos Desconhecidos" logo={LogoFatos}/>
                <Card Name="Hershey's" logo={HersheysoLogo}/>
                <Card Name="Levi's" logo={LevisLogo}/>
                <Card Name="Cultura inglesa" logo={CulturaLogo}/>
                <Card Name="Investidor Sardinha" logo={ISLogo}/>
                <Card Name="Megaza Business" logo={MZLogo}/>
                <Card Name="RE/MAX" logo={RemaxLogo}/>
                <Card Name="Pfizer" logo={PfizerLogo }/>
            </div>
        </div>
    )
};

export default clientes;