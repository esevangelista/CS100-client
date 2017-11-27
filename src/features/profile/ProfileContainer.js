import { connect } from 'react-redux';
import Profile from './Profile';

import { getUserPosts, getFriends } from './duck';

const mapStateToProps = state => {
    const { user } = state.auth;
    const { getPostError, feeds, getFriendError, friends } = state.profile;

    return {
        user,
        getPostError,
        feeds,
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