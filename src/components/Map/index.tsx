import { Location } from 'state-manager/types';
import { styled } from 'theme';

type MapProps = {
  location?: Location;
};

const MapContainer = styled('div', {
  backgroundColor: '$darkGray',
  gridRow: '3 / 5',
});

const useMap = () => {};

const Map = ({ location }: MapProps) => {
  useMap();

  return (
    <MapContainer>
      Map
      {location && <h1>{JSON.stringify(location)}</h1>}
    </MapContainer>
  );
};

export default Map;
