import React, { Component } from 'react';

import { Grid } from 'semantic-ui-react';

import UserProfile from './components/user/UserProfile';
import UserPost from './components/feed/UserPost';
import UserFeed from './components/feed/UserFeed';
import UserSuggested from './components/suggested/UserSuggested';
import UserFriendRequest from './UserFriendRequest'

import './style.css';

class Home extends Component {
    render(){
        return(
            <div className="page">
                <Grid columns={3} padded>
                    <Grid.Column width={4} style={{"margin-left": 40}}>
                        <UserProfile />
                    </Grid.Column>
                    <Grid.Column width={7}>
                        {/* <UserPost /> */}
                        {/* <UserFeed /> */}
                        <UserFriendRequest />
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