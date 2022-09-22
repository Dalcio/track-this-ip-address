import { LatLngLiteral } from 'leaflet';
import { useEffect } from 'react';
import { useMapEvents } from 'react-leaflet';

export const useLocationMarker = (position: LatLngLiteral | undefined) => {
  const map = useMapEvents({});

  useEffect(() => {
    if (position && position.lat) {
      map.flyTo(position, map.getZoom());
    }
  }, [position]);
};
