import { Container, Header, IPInfo, Map } from 'components';
import { useStateManager } from 'state-manager';

const HomePage = () => {
  const { ipInfo, location, trackThisDomain, trackThisIP, loading } = useStateManager();

  return (
    <Container>
      <Header trackThisDomain={trackThisDomain} trackThisIp={trackThisIP} />
      <IPInfo data={ipInfo} loading={loading} />
      <Map location={location} />
    </Container>
  );
};
export default HomePage;
