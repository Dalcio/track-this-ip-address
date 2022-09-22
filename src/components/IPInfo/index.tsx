import { IPInfo } from 'state-manager/types';
import { InfoItemContainer, IPInfoContainer } from './IPInfo.styles';

type IPInfoProps = {
  data?: IPInfo;
  loading?: boolean;
};

type InfoItemProps = {
  item: string;
  value?: string;
  loading?: boolean;
};

const InfoItem = ({ item, value, loading }: InfoItemProps) => (
  <InfoItemContainer>
    <p>{item}</p>
    {value ? <h2>{value}</h2> : (loading && <div />) || <h2>none</h2>}
  </InfoItemContainer>
);

const IPInfo = ({ data, loading }: IPInfoProps) => (
  <IPInfoContainer>
    {!loading ? (
      <>
        {data?.ip ? (
          <InfoItem item="ip address" value={data?.ip} />
        ) : (
          <InfoItem item="Domain" value={data?.domain} />
        )}
        <InfoItem item="location" value={data?.address} />
        <InfoItem item="timezone" value={data?.timeZone} />
        <InfoItem item="isp" value={data?.isp} />
      </>
    ) : (
      <>
        <InfoItem item="IP or Domain" loading />
        <InfoItem item="location" loading />
        <InfoItem item="timezone" loading />
        <InfoItem item="isp" loading />
      </>
    )}
  </IPInfoContainer>
);

export default IPInfo;
