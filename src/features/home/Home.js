import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Grid, Message } from 'semantic-ui-react';

import UserProfile from './components/user/UserProfile';
import UserFeed from './components/feed/UserFeedContainer';
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
                    <Switch>
                        <Route path="/" component={() => <UserFeed feeds={this.props.feeds}/>} />
                        <Route path="/friendrequest" component={UserFriendRequest} />
                    </Switch>
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