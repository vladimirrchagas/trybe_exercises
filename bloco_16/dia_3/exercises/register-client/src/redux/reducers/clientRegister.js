import { CLIENTREG } from '../actions';

const initialState = {
  client: [],
}

export default function reducerClientReg (state = initialState, action) {
  if (action.type === CLIENTREG) {
    return Object.assign({}, state, { client: [...state.client, {name: action.name, age: action.age, email: action.email}] });
  }
  return state;
}
