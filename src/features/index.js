import { combineReducers } from 'redux';

import users from './auth/duck';

const rootReducer = combineReducers({
  users,
});

export default rootReducer;