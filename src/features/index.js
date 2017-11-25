import { combineReducers } from 'redux';


import fields from './signup/duck';

const rootReducer = combineReducers({
  auth,
  fields,
});

export default rootReducer;