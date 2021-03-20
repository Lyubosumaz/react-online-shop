import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";

const ContactUsMap: React.FC<{}> = ({ }) => {
    const defaultCenter = { lat: 42.698334, lng: 23.319941 };
    const defaultOptions = { scrollwheel: false };
    const RegularMap = withScriptjs(
        withGoogleMap((props: any) => (
            <GoogleMap
                defaultZoom={10}
                defaultCenter={defaultCenter}
                defaultOptions={defaultOptions}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        ))
    );

    const loadingElementStyle = { height: '100%' };
    const containerElementStyle = { width: "540px", height: '370px' };
    const mapElementStyle = { height: '100%' };
    const apiKey = 'AIzaSyA_9cyXkdJAawD7utSrbBD31kQ608L0opQ';

    return (
        <RegularMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}`}
            loadingElement={<div style={loadingElementStyle} />}
            containerElement={<div style={containerElementStyle} />}
            mapElement={<div style={mapElementStyle} />}
        />
    );
};

export default ContactUsMap;