import { getIpGeolocation, IPGeolocationResponse } from 'api/getIpGeolocation';
import { State } from './types';

export const getIPInfoWithIp = async (ip: string): Promise<State> => {
  const data: IPGeolocationResponse = await getIpGeolocation(`ipAddress=${ip}`);

  return {
    ipInfo: {
      address: data?.location.city,
      ip,
      isp: data?.isp,
      timeZone: data?.location.timezone,
    },
    location: {
      lat: data?.location.lat as number,
      lng: data?.location.lng as number,
    },
  };
};

export const getIPInfoWithDomain = async (domain: string): Promise<State> => {
  const data: IPGeolocationResponse = await getIpGeolocation(`domain=${domain}`);

  return {
    ipInfo: {
      address: data?.location?.city ?? undefined,
      ip: domain ?? undefined,
      isp: data?.isp ?? undefined,
      timeZone: data?.location?.timezone ?? undefined,
    },
    location: {
      lat: (data?.location?.lat as number) ?? undefined,
      lng: (data?.location?.lng as number) ?? undefined,
    },
  };
};
