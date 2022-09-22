import { Location } from 'state-manager/types';

export type IPGeolocationResponse = {
  ip: string;
  location: Location;
  domains: string[];
  as: {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
  isp: string;
};

export const getIpGeolocation = async (target: string): Promise<IPGeolocationResponse> => {
  try {
    const endpoint = process.env.NEXT_PUBLIC_IP_GEOLOCATION_ENDPOINT;

    const res = await fetch(`${endpoint}&${target}`);
    const data = await res.json();

    return data;
  } catch (error) {
    return {} as IPGeolocationResponse;
  }
};
