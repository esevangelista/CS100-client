import { connect } from 'react-redux';
import Home from './Home';

import { getPosts, getPostCount, getFriendCount, getSuggestedFriends, addFriend, acceptFriend, getFriendRequests } from './duck';

const mapStateToProps = state => {
    const { user } = state.auth;
    const { postCount, friendCount, feeds, suggested, requests } = state.home;

    return {
        user,
        postCount,
        friendCount,
        feeds,
        suggested,
        requests
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
        },
        handleGetSuggestedFriends: () => {
            dispatch(getSuggestedFriends())
        },
        handleAddFriend: id => {
            dispatch(addFriend(id))
        },
        handleAcceptFriend: id => {
            dispatch(acceptFriend(id))
        },
        handleGetFriendRequests: () => {
            dispatch(getFriendRequests())
        }
    };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;