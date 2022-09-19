import { Reducer, useReducer } from 'react';
import { Action, State } from './types';

const initialState: State = {
  location: undefined,
  ipInfo: undefined,
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
