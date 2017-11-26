import { connect } from 'react-redux';
import Home from './Home';

import { getPosts, getPostCount, getFriendCount } from './duck';

const mapStateToProps = state => {
    const { user } = state.auth;
    const { isGettingPosts, getPostError, feed, postCount, friendCount } = state.home;

    return {
        user,
        isGettingPosts,
        getPostError,
        feed,
        postCount,
        friendCount
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
        }
    };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;