import * as Api from '../../api';
import { handle } from 'redux-pack';

//Action Types
const GET_POSTS = 'HOME/GET_POSTS';
const GET_POSTCOUNT = 'HOME/GET_POSTCOUNT';
const GET_FRIENDCOUNT = 'HOME/GET_FRIENDCOUNT'
const POST = 'HOME/POST';

//Action Creators
export const getPosts = () => {
    return dispatch => {
        return dispatch({
            type: GET_POSTS,
            promise: Api.getPosts()
        });
    };
};

export const getPostCount = () => {
    return dispatch => {
        return dispatch({
            type: GET_POSTCOUNT,
            promise: Api.getPostCount()
        });
    };
};

export const getFriendCount = () => {
    return dispatch => {
        return dispatch({
            type: GET_FRIENDCOUNT,
            promise: Api.getFriendCount()
        });
    };
};

//Initial State
const initialState = {
    feed: [],
    //feedPagination: 0,
    isGettingPosts: false,
    getPostError: null,

    isGettingPostCount: false,
    postCount: 0,
    isGettingFriendCount: false,
    friendCount: 0
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type){
        case GET_POSTS:
            return handle(state, action, {
                start: prevState => ({
                    ...prevState,
                    isGettingPosts: true
                }),
                success: prevState => ({
                    ...prevState,
                    feed: [...payload.data.data],
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
        
        case GET_POSTCOUNT:
            return handle(state, action, {
                start: prevState => ({
                    ...prevState,
                    isGettingPostCount: true
                }),
                success: prevState => ({
                    ...prevState,
                    postCount: payload.data.data
                }),
                finish: prevState => ({
                    ...prevState,
                    isGettingPostCount: false
                })
            });

        case GET_FRIENDCOUNT:
            return handle(state, action, {
                start: prevState => ({
                    ...prevState,
                    isGettingFriendCount: true
                }),
                success: prevState => ({
                    ...prevState,
                    friendCount: payload.data.data
                }),
                finish: prevState => ({
                    ...prevState,
                    isGettingFriendCount: false
                })
            });
    default:
        return state;
    }
}

export default reducer;