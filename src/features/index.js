import { combineReducers } from 'redux';

import auth from './auth/duck';

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;