import * as Api from '../../api';
import { handle } from 'redux-pack';

//Action Types
const GET_USERPOSTS = 'PROFILE/GET_USERPOSTS';
const GET_USERFRIENDS = 'PROFILE/GET_USERFRIENDS';

//Action Creators
export const getUserPosts = id => {
    return dispatch => {
        return dispatch({
            type: GET_USERPOSTS,
            promise: Api.getUserPosts(id)
        });
    };
};

export const getFriends = () => {
    return dispatch => {
        return dispatch({
            type: GET_USERFRIENDS,
            promise: Api.getFriends()
        });
    };
};


//Initial State
const initialState = {
    feeds: [],
    friends: [],
    isGettingPosts: false,
    isGettingFriends: false,
    getPostError: null,
    getFriendError: null
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type){
        case GET_USERPOSTS:
            return handle(state, action, {
                start: prevState => ({
                    ...prevState,
                    isGettingPosts: true
                }),
                success: prevState => ({
                    ...prevState,
                    feeds: [...payload.data.data],
                    //feedPagination: state.feedPagination + 1,
                    getPostError: null
                }),
                failure: prevState => ({
                    ...prevState,
                    getPostError: payload.response.data
                }),
                finish: prevState => ({
                    ...prevState,
                    isGettingPosts: false
                })
            });
        case GET_USERFRIENDS:
            return handle(state, action, {
                start: prevState => ({
                    ...prevState,
                    isGettingFriends: true
                }),
                success: prevState => ({
                    ...prevState,
                    friends: [...payload.data.data],
                    getFriendError: null
                }),
                failure: prevState => ({
                    ...prevState,
                    getFriendError: payload.response.data
                }),
                finish: prevState => ({
                    ...prevState,
                    isGettingFriends: false
                })
            });
    default:
        return state;
    }
}

export default reducer;