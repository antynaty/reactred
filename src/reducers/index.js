import { combineReducers } from 'redux';
// import store from './store';
import isLoggin from './isLoggin';
import counter from './counter';
import users from './user';
// import fetch from './fetch';

const rootReducer = combineReducers({
  // store : store,
  isLoggin : isLoggin,
  counter : counter,
  datos : users,
  // fetch: fetch
})

export default rootReducer;