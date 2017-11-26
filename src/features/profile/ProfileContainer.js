import { connect } from 'react-redux';
import Profile from './Profile';

import { getPosts } from '../home/duck';

const mapStateToProps = state => {
    const { user } = state.auth;
    const { isGettingPosts, getPostError, feed, feedPagination } = state.home;

    return {
        user,
        isGettingPosts,
        getPostError,
        feed,
        feedPagination
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleGetPosts: page => {
            dispatch(getPosts(page));
        }
    };
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default ProfileContainer;