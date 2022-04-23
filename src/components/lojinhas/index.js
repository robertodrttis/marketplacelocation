import Badge from 'react-bootstrap/Badge';
import logo from '../../assets/iconelj.png';
import "./styles.css";

const Lojinhas = () => {
    return (
        <li className="lojinhas d-inline-block">
            <br></br>
            <div className='d-inline-block'>
                <img src={logo} className="img-logo lojas-img"></img>
            </div>
            <div className='d-inline-block pl-3 aling-bottom'>
            <div className='lojinhas-infos '>
            <b>Lojas de produtos</b><br></br>
                <span className='mdi mdi-star'></span>
                    <text>
                        <b>2.8</b>
                    </text>
                    <span className='mdi mdi-cash-us-outline'></span>
                    <text>$$$</text>
                    <span className='mdi mdi-crosshairs-gps'></span>
                    <text>2,9Km</text><br></br>
                    <label className=''><Badge bg="primary">Frete Grátis</Badge></label>
            </div>
            
            </div>   
        </li>
    )
}

export default Lojinhas;