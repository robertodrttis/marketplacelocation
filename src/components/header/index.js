
import Illustration from '../../assets/illustra.png';
import "./styles.css";

const Header = ({hideCart}) => {
    const openDrawer = () => {
        const event = new CustomEvent('openCart');
        window.dispatchEvent(event);
    }

    return (
        <div className="col-12">
                <header className="py-4 px-4 text-center">
                    <img src={Illustration} className="img-logo"/>
                    {/* <label className='text-logo'>Achei em Fortalcity!</label>  */}
                </header>
                {!hideCart && (
                <button onClick={() => openDrawer()} className='btn- btn-person cart-button'>
                    <span className='mdi mdi-cart'></span>2 Itens
                </button>
                 )}
        </div>
    );
};
export default Header;