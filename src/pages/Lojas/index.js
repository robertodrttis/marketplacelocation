import Illustration from '../../assets/illustra.png';
import logo from '../../assets/iconelj.png';
import './styles.css';
import Badge from 'react-bootstrap/Badge';
import ProductCard from '../../components/product/card';
import Header from '../../components/header/index.js';

const Lojas = () => {
    return(
        <div className="h-100">
            <div className="col-12 text-center">
                <Header></Header>
            {/* <img src={Illustration} className="img-logo"/>
                <label className='text-logo'>Achei em Fortalcity!</label>  */}
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-2'>
                        <img src={logo} className="img-logo lojas-img"></img>
                        <b><br></br>Lojas de produtos</b>
                        <div className='lojas-infos'>
                            <span className='mdi mdi-star'></span>
                                <text>
                                    <b>2.8</b>
                                </text>
                                <span className='mdi mdi-cash-us-outline'></span>
                                <text>$$$</text>
                                <span className='mdi mdi-crosshairs-gps'></span>
                                <text>2,9Km</text>
                        </div>
                        <label className=''><Badge bg="primary">Frete Grátis</Badge></label>
                    </div>
                    <div className='col-10'>
                        <h5>Produtos:</h5>
                        <div className='row'>
                            {[1,2,3,4,5,6,7,8,9].map(p => <ProductCard/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Lojas;