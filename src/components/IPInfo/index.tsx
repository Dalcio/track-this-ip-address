import { IPInfo } from 'state-manager/types';
import { InfoItemContainer, IPInfoContainer } from './IPInfo.styles';

type IPInfoProps = {
  data: IPInfo;
};

type InfoItemProps = {
  item: string;
  value?: string;
};

const InfoItem = ({ item, value }: InfoItemProps) => (
  <InfoItemContainer>
    <p>{item}</p>
    {(value && <h2>{value}</h2>) || <div />}
  </InfoItemContainer>
);

const IPInfo = ({ data }: IPInfoProps) => (
  <IPInfoContainer>
    <InfoItem item="ip address" value={data?.ip} />
    <InfoItem item="location" value={data?.address} />
    <InfoItem item="timezone" value={data?.timeZone} />
    <InfoItem item="isp" value={data?.isp} />
  </IPInfoContainer>
);

export default IPInfo;
