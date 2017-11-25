import React, { Component } from 'react';

import { Grid } from 'semantic-ui-react';

import UserProfile from './components/user/UserProfile';

class Home extends Component {
    render(){
        return(
            <Grid columns={3} padded>
                <Grid.Column>
                    <UserProfile />
                </Grid.Column>
                <Grid.Column />
                <Grid.Column />
            </Grid>
        );
    }
}

export default Home;