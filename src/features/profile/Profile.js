import React, { Component } from 'react';

import { Grid, Message } from 'semantic-ui-react';
import ProfileInfo from './components/info/ProfileInfo';
import UserFeed from '../home/components/feed/UserFeed';
import UserSuggested from '../home/components/suggested/UserSuggested';

import './style.css';

class Profile extends Component {
    render(){
        return(
            <div className="page">
                <Grid columns={3} padded>
                    <Grid.Column width={4} style={{"margin-left": 40}}>
                        <ProfileInfo user={this.props.user}/>
                    </Grid.Column>
                    <Grid.Column width={7}>
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

export default Profile;