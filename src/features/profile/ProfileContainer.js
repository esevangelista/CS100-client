import { connect } from 'react-redux';
import Profile from './Profile';

import { getUserPosts, getFriends } from './duck';

const mapStateToProps = state => {
    const { user } = state.auth;
    const { getPostError, feed, getFriendError, friends } = state.profile;

    return {
        user,
        getPostError,
        feed,
        getFriendError,
        friends
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleGetUserPosts: id => {
            dispatch(getUserPosts(id));
        },
        handleGetFriends: () => {
            dispatch(getFriends())
        }
    };
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default ProfileContainer;