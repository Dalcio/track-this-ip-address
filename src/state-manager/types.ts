export type Location = {
  lat: number;
  long: number;
};

export type IPInfo = {
  ip: string;
  timeZone: string;
  isp: string;
  address: string;
};

export type State = {
  location: Location | undefined;
  ipInfo: IPInfo | undefined;
};

export type Action = {
  type: 'track-ip';
  payload: string;
};
