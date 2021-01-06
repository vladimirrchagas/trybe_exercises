import { CHANGE_SIGNAL } from '../actionCreators';

const initialStateChangeSignal = {
  signal: {
    color: 'red',
  },
};

export default function reducerChangeSignal(state = initialStateChangeSignal, action) {
  switch (action.type) {
    case CHANGE_SIGNAL:
      return { ...state, signal: { ...state.signal, color: action.payload } };
    default:
      return state;
  }
}
