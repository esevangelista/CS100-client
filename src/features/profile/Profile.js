import React, { Component } from 'react';

import { Grid, Message } from 'semantic-ui-react';
import ProfileInfo from './components/info/ProfileInfo';
import UserFeed from '../home/components/feed/UserFeedContainer';
import UserSuggested from '../home/components/suggested/UserSuggested';

import './style.css';

class Profile extends Component {
    componentDidMount(){
        this.props.handleGetUserPosts(this.props.user._id);
        this.props.handleGetFriends();
    }

    render(){
        return(
            <div className="page">
                <Grid columns={3} padded>
                    <Grid.Column width={4} style={{"margin-left": 40}}>
                        <ProfileInfo
                            user={this.props.user}
                            friends={this.props.friends}
                        />
                    </Grid.Column>
                    <Grid.Column width={7}>
                        {this.props.getPostError ? (
                            <Message 
                                content={this.props.getPostError.message}
                            />
                        ) : (
                            <UserFeed
                                feeds={this.props.feeds}
                            />
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

export default Profile;