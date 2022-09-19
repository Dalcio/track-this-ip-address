import { Container, Header, IPInfo, Map } from 'components';
import { useStateManager } from 'state-manager';

const HomePage = () => {
  const { ipInfo, location, trackThis } = useStateManager();

  return (
    <Container>
      <Header trackThis={trackThis} />
      <IPInfo data={ipInfo} />
      <Map location={location} />
    </Container>
  );
};
export default HomePage;
