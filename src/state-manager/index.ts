import { Reducer, useReducer } from 'react';
import { Action, State } from './types';

const initialState: State = {
  location: undefined,
  ipInfo: undefined,
  // ipInfo: {
  //   address: 'some',
  //   ip: '131234134',
  //   isp: 'afdqasfas',
  //   timeZone: 'America/New_York',
  // },
};

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'track-ip':
      return state;
    default:
      return state;
  }
};

export const useStateManager = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const trackThis = (payload: string) => {
    dispatch({
      type: 'track-ip',
      payload,
    });
  };

  return {
    ...state,
    trackThis,
  };
};
