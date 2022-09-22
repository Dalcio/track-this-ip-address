import { Reducer, useReducer } from 'react';
import { getIPInfoWithDomain, getIPInfoWithIp } from './fetchPayload';
import { Action, State } from './types';

const initialState: State = {
  location: undefined,
  ipInfo: undefined,
  loading: false,
};

const reducer: Reducer<State, Action> = (prevState, action) => {
  switch (action.type) {
    case 'track':
      return { ...action.payload, loading: false };
    case 'loading':
      return { ...prevState, loading: true };
    default:
      return prevState;
  }
};

export const useStateManager = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const trackThisIP = async (ip: string) => {
    dispatch({ type: 'loading' });

    const payload = await getIPInfoWithIp(ip);

    dispatch({ type: 'track', payload });
  };

  const trackThisDomain = async (domain: string) => {
    dispatch({ type: 'loading' });

    const payload = await getIPInfoWithDomain(domain);

    dispatch({ type: 'track', payload });
  };

  return {
    ...state,
    trackThisDomain,
    trackThisIP,
  };
};
