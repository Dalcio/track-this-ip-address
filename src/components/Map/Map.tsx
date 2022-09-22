import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngLiteral } from 'leaflet';

import { MapWrapper } from './Map.styles';
import LocationMarker from './LocationMarker';

type MapProps = {
  location: LatLngLiteral | undefined;
};

const DEFAULT_CENTER = { lat: 51.505, lng: -0.09 };

const Map = ({ location }: MapProps) => (
  <MapWrapper>
    <MapContainer
      center={(location?.lat && location && location) || DEFAULT_CENTER}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%', zIndex: 1 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker position={location} />
    </MapContainer>
  </MapWrapper>
);
export default Map;
