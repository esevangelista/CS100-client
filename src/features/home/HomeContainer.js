import { connect } from 'react-redux';
import Home from './Home';

import { getPosts, getPostCount, getFriendCount } from './duck';

const mapStateToProps = state => {
    const { user } = state.auth;
    const { postCount, friendCount, feeds } = state.home;

    return {
        user,
        postCount,
        friendCount,
        feeds
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleGetPosts: () => {
            dispatch(getPosts())
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