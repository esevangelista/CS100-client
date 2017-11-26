import * as Api from '../../api';
import { handle } from 'redux-pack';

//Action Types
const GET_POSTS = 'HOME/GET_POSTS';
const GET_POSTCOUNT = 'HOME/GET_POSTCOUNT';
const POST = 'HOME/POST';

//Action Creators
export const getPosts = page => {
    return dispatch => {
        return dispatch({
            type: GET_POSTS,
            promise: Api.getPosts(page)
        });
    };
};

export const getPostCount = id => {
    return dispatch => {
        return dispatch({
            type: GET_POSTCOUNT,
            promise: Api.getPostCount(id)
        })
    }
}

//Initial State
const initialState = {
    feed: [],
    feedPagination: 0,
    isGettingPosts: false,
    getPostError: null,

    isGettingPostCount: false,
    postCount: 0
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
                    feed: [...state.feed, ...payload.data.data],
                    feedPagination: state.feedPagination + 1,
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
    default:
        return state;
    }
}

export default reducer;