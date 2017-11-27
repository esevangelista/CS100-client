import { connect } from 'react-redux';
import UserFeed from './UserFeed';

import { post, changePost, likePost } from '../../duck';

const mapStateToProps = state => {
    const { user } = state.auth;
    const { content } = state.home;

    return {
        user,
        content
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleChangePost: content => {
            dispatch(changePost(content));
        },
        handlePost: content => {
            dispatch(post(content));
        },
        handleLikePost: (id, action) => {
            dispatch(likePost(id, action))
        }
    };
};

const UserFeedContainer = connect(mapStateToProps, mapDispatchToProps)(UserFeed);
export default UserFeedContainer;