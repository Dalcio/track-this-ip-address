import { LatLngLiteral } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import { useLocationMarker } from './Map.hooks';

type LocationMarkerProps = {
  position: LatLngLiteral | undefined;
};

const LocationMarker = ({ position }: LocationMarkerProps) => {
  useLocationMarker(position);

  return position && position.lat ? (
    <Marker position={position}>
      <Popup>The Ip or Domain is Here</Popup>
    </Marker>
  ) : null;
};

export default LocationMarker;
