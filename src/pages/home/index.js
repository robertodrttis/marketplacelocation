import './styles.css';
import Header from '../../components/header';
import Lojinhas from '../../components/lojinhas';
import Map from '../../components/map';
const Home = () => {
    return (
        <div className='h-100'>
            <Header></Header>
            <div className='container-fluid lojas-list-container'>
                <br></br>
                <br></br>
                <div className='col-12 px-4 text-center'>
                    <h5>Mais proximos de você (5)</h5>
                    <ul className='col-12 lojas-list'>
                    {[1,2,3,4,5,6,7,8,9].map((p) => (
                    <Lojinhas></Lojinhas>))}
                </ul>
                </div>
          
            </div>
            <Map></Map>
        </div>
    )
}
export default Home;