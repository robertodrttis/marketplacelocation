import './styles.css';
import { useState, useEffect } from 'react';
import Product from '../product/list';
import { Dock } from 'react-dock';


const Sidebar = () => {
    const [opened, setOpened] = useState(false)
    console.log('teste');
    useEffect(() => {
        window.addEventListener('openCart', () => {setOpened(true);
    });
    }, []);

    return(
        <Dock isVisible={opened}
         onVisibleChange={(visible) => {
            setOpened(visible);
        }} 
        position="right">

            <div className='container-fluid h-100 pt-4'>
                <h5>Minhas Sacola (5)</h5>

                <div className='row products mt-2'>
                     {[1,2,3,4,5,6,7,8,9].map(p => <Product></Product>)}
                </div>
                
                <div className="row aling-items-end footer">
                    <div className='col-12 d-flex justify-content-between aling-items-center'>
                        <b className='d-inline-block'>Total</b>
                        <h4 className='d-inline-block'>R$ 90,00</h4>
                    </div>
                    <button className='btn btn-block btn-lg btn-primary rounded-0 h-50 aling-items-center'>Finalizar Compra</button>
                </div>
            </div>
        </Dock>
    );
}
export default Sidebar;
