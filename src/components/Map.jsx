import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fixes default icon issue with Leaflet and Webpack
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
  iconUrl: require('leaflet/dist/images/marker-icon.png').default,
  shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
});

const Map = () => {
  return (
    <Map
      center={[5.348, -4.027]}  // Coordonnées d'Abidjan
      zoom={13}
      scrollWheelZoom={false}
      className="h-96 w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[5.348, -4.027]}>
        <Popup>
          Votre entreprise se trouve ici.
        </Popup>
      </Marker>
    </Map>
  );
};

export default Map;
