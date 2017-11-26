import * as Api from '../../api';
import { handle } from 'redux-pack';

//Action Types
const CHANGESEARCH = 'NAVBAR/CHANGESEARCH'
const SEARCH = 'NAVBAR/SEARCH'
//Action Creators
export const getSearch = (name) => {
  return dispatch => {
    return dispatch({
      type: SEARCH,
      promise: Api.search(name)
    });
  };
};

export const changeSearch = (search) => {
  return {
    type: CHANGESEARCH,
    payload: search
  };
};


//Initial State
const initialState = {
    search:''
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type){
      case CHANGESEARCH:
       return {
          ...state,
          search: payload
        };
    default:
        return state;
    }
}

export default reducer;