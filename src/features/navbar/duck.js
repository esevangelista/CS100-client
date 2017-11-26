import * as Api from '../../api';
import { handle } from 'redux-pack';

//Action Types
const CHANGETAB = 'NAVBAR/CHANGETAB'
const CHANGESEARCH = 'NAVBAR/CHANGESEARCH'
const SEARCH = 'NAVBAR/SEARCH'
//Action Creators
export const getSearh = (name) => {
  return dispatch => {
    return dispatch({
      type: SEARCH,
      promise: Api.search(name)
    });
  };
};

export const changeTab = (tab) => {
  return {
    type: CHANGETAB,
    payload: tab
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
    activeTab:'Home',
    search:''
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type){
        
    default:
        return state;
    }
}

export default reducer;