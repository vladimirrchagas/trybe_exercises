import { MOVE_CAR } from '../actionCreators';

const initialStateCars = {
  cars: {
    red: false,
    blue: false,
    yellow: false,
  },
};

export default function reducerMoveCar(state = initialStateCars, action) {
  switch (action.type) {
    case MOVE_CAR:
      return { ...state, cars: { ...state.cars, [action.car]: action.side } };
    default:
      return state;
  }
}
