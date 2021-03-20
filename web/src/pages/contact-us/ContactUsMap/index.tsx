import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";

const ContactUsMap: React.FC<{}> = ({ }) => {
    const defaultCenter = { lat: 40.748817, lng: -73.985428 };
    const defaultOptions = { scrollwheel: false };

    const RegularMap = withScriptjs(
        withGoogleMap((props: any) => (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={defaultCenter}
                defaultOptions={defaultOptions}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        ))
    );

    const loadingElementStyle = { height: '100%' };
    const containerElementStyle = { height: '280px' };
    const mapElementStyle = { height: '100%' };

    return (
        // <div
        //     style={{
        //         width: "540px",
        //         height: "370px",
        //         display: "flex",
        //         justifyContent: "center",
        //         alignItems: "center",
        //         background: "gray"
        //     }}
        // >
        //     <span>Google Map</span>
        // </div>
        <RegularMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
            loadingElement={<div style={loadingElementStyle} />}
            containerElement={<div style={containerElementStyle} />}
            mapElement={<div style={mapElementStyle} />}
        />
    );
};

export default ContactUsMap;