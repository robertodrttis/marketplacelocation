import './styles.css';
import Badge from 'react-bootstrap/Badge';

const Product = () => {
    return (
        <div className="product-list col-12">
            <div className="row mt-2">
                <div className="col-3">
                    <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.petlove.com.br%2Fimages%2Fproducts%2F224956%2Fproduct%2FRa%25C3%25A7%25C3%25A3o_Seca_Pedigree_Carne_e_Vegetais_para_C%25C3%25A3es_Adultos_Ra%25C3%25A7as_M%25C3%25A9dias_e_Grandes_3104862.jpg%3F1627721394&imgrefurl=https%3A%2F%2Fwww.petlove.com.br%2Fracao-pedigree-adulto-carne-e-vegetais-3104862%2Fp&tbnid=4A4EO8eZcnJQ3M&vet=12ahUKEwjrkIqXsYP3AhUAN7kGHUBcBV4QMygAegUIARDeAQ..i&docid=t8GZqUMOEx1_eM&w=400&h=400&q=ra%C3%A7%C3%A3o&ved=2ahUKEwjrkIqXsYP3AhUAN7kGHUBcBV4QMygAegUIARDeAQ" className="img-fluid lojas-img"></img>
                </div>
                <div className="col-6">
                    <h6>
                        <Badge bg="primary">R$ 35.00</Badge>
                    </h6>
                    <small>
                        <b>Ração Seca Pedigree para Cães Adultos Raças Pequenas</b>
                    </small>
                </div>
                <div className="col-3">
                    <button className="btn btn-secondary rounded-circle">-</button>
                </div>
            </div>
        </div>
    )
}

export default Product;