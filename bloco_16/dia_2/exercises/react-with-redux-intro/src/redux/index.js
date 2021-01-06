import { createStore, combineReducers  } from 'redux';
import reducerMoveCar from './reducers/reducerMoveCar';
import reducerChangeSignal from './reducers/reducerChangeSignal';

const reducersCombined = combineReducers({ moveCarReducer: reducerMoveCar, changeSignalReducer: reducerChangeSignal });

const store = createStore(reducersCombined, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
