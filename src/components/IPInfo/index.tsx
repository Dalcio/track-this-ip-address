import { IPInfo } from 'state-manager/types';
import { styled } from 'theme';

type IPInfoProps = {
  data?: IPInfo;
};

const IPInfoContainer = styled('div', {
  backgroundColor: '$white',
  gridRow: '-4 / -2',
  position: 'relative',
  justifySelf: 'center',
});

const useIPInfo = () => {};

const IPInfo = ({ data }: IPInfoProps) => {
  useIPInfo();

  return (
    <IPInfoContainer>
      Map
      {data && <h1>{JSON.stringify(data)}</h1>}
    </IPInfoContainer>
  );
};

export default IPInfo;
