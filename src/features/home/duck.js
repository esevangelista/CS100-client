import * as Api from '../../api';
import { handle } from 'redux-pack';

//Action Types
const GET_POSTS = 'HOME/GET_POSTS';
const GET_POSTCOUNT = 'HOME/GET_POSTCOUNT';
const GET_FRIENDCOUNT = 'HOME/GET_FRIENDCOUNT'
const POST = 'HOME/POST';
const CHANGE_POST = 'HOME/CHANGE_POST';
const LIKE_POST = 'HOME/LIKE_POST';

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

export const post = content => {
    console.log(content);
    return dispatch => {
        return dispatch({
            type: POST,
            promise: Api.post(content)
        });
    };
};

export const changePost = content => {
    return {
        type: CHANGE_POST,
        payload: content
    }
}

export const likePost = (id, action) => {
    return dispatch => {
        return dispatch({
            type: LIKE_POST,
            promise: Api.likePost(id, action)
        });
    };
};

//Initial State
const initialState = {
    content: '',
    isPosting: false,
    feeds: [],
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
        case POST:
            return handle(state, action, {
                start: prevState => ({
                    ...prevState,
                    isPosting: true
                }),
                success: prevState => ({
                    ...prevState,
                    content: ''
                }),
                finish: prevState => ({
                    ...prevState,
                    isPosting: false,
                })
            });
        case CHANGE_POST:
            return {
                ...state,
                content: payload
            };
        case GET_POSTS:
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