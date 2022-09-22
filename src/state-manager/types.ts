export type Location = {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  geonameId: number;
};

export type IPInfo = {
  ip?: string;
  domain?: string;
  timeZone?: string;
  isp?: string;
  address?: string;
};

export type State = {
  loading?: boolean;
  location:
    | {
        lat: number;
        lng: number;
      }
    | undefined;
  ipInfo: IPInfo | undefined;
};

export type Action =
  | {
      type: 'track';
      payload: State;
    }
  | {
      type: 'loading';
    };
