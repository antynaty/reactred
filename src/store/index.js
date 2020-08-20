import { combineReducers } from 'redux';
// import store from './store';
import isLoggin from './isLoggin';
import counter from './counter';

const rootReducer = combineReducers({
  // store : store,
  isLoggin : isLoggin,
  counter : counter
})

export default rootReducer;