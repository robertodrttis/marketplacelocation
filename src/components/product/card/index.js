import item from '../../../assets/zyro-image.png';
import './styles.css';
import Badge from 'react-bootstrap/Badge';

const ProductCard = () => {
    return (
        <div className="product col-3">
            <br></br>
            <img src={item} className="img-fluid aling-center"></img>
            <button className='btn btn-add rounded-circle'>+</button>
            <h4>
                <lable><Badge bg="primary">R$ 90,00</Badge></lable></h4>
            <small>
                <b>Ração Champ - 10 kg</b>
            </small>
        </div>
    )
}
export default ProductCard;