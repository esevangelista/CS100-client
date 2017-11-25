import React, { Component } from 'react';

import { Grid } from 'semantic-ui-react';
import ProfileInfo from './components/info/ProfileInfo';

import './style.css';

class Profile extends Component {
    render(){
        return(
            <div className="page">
                <Grid columns={3} padded>
                    <Grid.Column width={4} style={{"margin-left": 40}}>
                        <ProfileInfo />
                    </Grid.Column>
                    <Grid.Column width={7}>
                    </Grid.Column>
                    <Grid.Column width={4}>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default Profile;