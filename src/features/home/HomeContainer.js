import { connect } from 'react-redux';
import Home from './Home';

import { getPosts, getPostCount } from './duck';

const mapStateToProps = state => {
    const { user } = state.auth;
    const { isGettingPosts, getPostError, feed, feedPagination } = state.home;
    const { activeTab } = state.navbar;

    return {
        user,
        isGettingPosts,
        getPostError,
        feed,
        feedPagination,
        activeTab
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleGetPosts: page => {
            dispatch(getPosts(page));
        },
        handleGetPostCount: () => {
            dispatch(getPostCount());
        }
    };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;