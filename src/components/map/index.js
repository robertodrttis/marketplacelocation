import GoogleMapReact from 'google-map-react';
import './styles.css';

const Map = () => {
    return (
        <div className='container-map'>
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCojT3XkT9j0yY5iA25gTTCuGi2cQoBvEE' }}
                center={{
                    lat: -3.7288405,
                    lng: -38.5207996,
                }}
                defaultZoom={15}
                >
                </GoogleMapReact>
            </div>
        </div>
    )
}

export default Map;