import React, { Component } from 'react';

import { Grid, Message } from 'semantic-ui-react';

import UserProfile from './components/user/UserProfile';
import UserPost from './components/feed/UserPost';
import UserFeed from './components/feed/UserFeed';
import UserSuggested from './components/suggested/UserSuggested';
import UserFriendRequest from './components/friendrequest/UserFriendRequest';

import './style.css';

class Home extends Component {

    componentDidMount(){
        this.props.handleGetPosts();
        this.props.handleGetPostCount();
        this.props.handleGetFriendCount();
    }

    render(){
        return(
            <div className="page">
                <Grid columns={3} padded>
                    <Grid.Column width={4} style={{"margin-left": 40}}>
                        <UserProfile user={this.props.user} postCount={this.props.postCount} friendCount={this.props.friendCount}/>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <UserPost image={this.props.user.imageUrl} />
                        {this.props.getPostError ? (
                            <Message 
                                content={this.props.getPostError.message}
                            />
                        ) : (
                            <UserFeed feeds={this.props.feed}/>
                        )}
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <UserSuggested />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default Home;