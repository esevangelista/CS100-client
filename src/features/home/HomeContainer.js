import { connect } from 'react-redux';
import Home from './Home';

import { getPosts, getPostCount, getFriendCount, post, changePost, getUser, likePost } from './duck';

const mapStateToProps = state => {
    const { user } = state.auth;
    const { getPostError, feed, postCount, friendCount, content, someUser } = state.home;

    return {
        user,
        getPostError,
        feed,
        postCount,
        friendCount,
        content,
        someUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleGetPosts: () => {
            dispatch(getPosts());
        },
        handleGetPostCount: () => {
            dispatch(getPostCount());
        },
        handleGetFriendCount: () => {
            dispatch(getFriendCount());
        },
        handleChangePost: content => {
            dispatch(changePost(content));
        },
        handlePost: content => {
            dispatch(post(content));
        },
        handleGetUser: id => {
            dispatch(getUser(id))
        },
        handleLikePost: (id, action) => {
            dispatch(likePost(id, action))
        }
    };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;