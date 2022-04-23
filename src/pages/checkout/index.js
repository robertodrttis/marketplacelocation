
import Illustration from '../../assets/illustra.png';
import "./styles.css";
import Product from '../../components/product/list';
import Header from '../../components/header/index.js';
const Checkout = () => {
    return (
        <div className="h-100">
            <div className="col-12 text-center">
                <Header hideCart></Header>
            </div>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-6'>
                        <span className='section-title'>Dados de Entrega</span>
                        <div className='row mb-3 mt-2'>
                            <div className='col-12'>
                                <input type="text" placeholder='CEP' className='form-control
                                 form-control-lg'></input>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col-6'>
                                <input type="text" placeholder='Cidade' className='form-control
                                 form-control-lg'></input>
                            </div>
                            <div className='col-6 pl-0'>
                                <input type="text" placeholder='Logradouro' className='form-control
                                 form-control-lg'></input>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col-5'>
                                <input type="text" placeholder='Numero' className='form-control
                                 form-control-lg'></input>
                            </div>
                            <div className='col-5 pl-0'>
                                <input type="text" placeholder='Bairro' className='form-control
                                 form-control-lg'></input>
                            </div>
                            <div className='col-2 pl-0'>
                                <input type="text" placeholder='UF' className='form-control
                                 form-control-lg'></input>
                            </div>
                        </div>

                        <span className='section-title'>Dados de Pagamento</span>
                        <div className='row mb-3 mt-2'>
                            <div className='col-12'>
                                <input type="text" placeholder='Número do Cartão' className='form-control
                                 form-control-lg'></input>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col-6'>
                                <input type="text" placeholder='Válidade' className='form-control
                                 form-control-lg'></input>
                            </div>
                            <div className='col-6'>
                                <input type="text" placeholder='CVV' className='form-control
                                 form-control-lg'></input>
                            </div>
                        </div>
                        <div className='row mt-4'>
                            <div className='col-12 d-flex justify-content-between aling-items-center'>
                                <b>total:</b>
                                <h3>R$ 150,00</h3>
                            </div>
                            <div className='col-12'>
                                <button className='btn btn-block btn-lg btn-primary'>Finalizar Compra</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='box col mb-4 box-sidebar'>
                            <h5>Minhas Sacola (5)</h5>

                            <div className='row products mt-2'>
                                {[1,2,3,4,5,6].map(p => <Product></Product>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Checkout;