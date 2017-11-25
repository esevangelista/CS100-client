import React, { Component } from 'react';

import { Card, Image } from 'semantic-ui-react';
import image from '../../../../assets/profpics/somepicture.jpg';

import '../style.css'

class UserProfile extends Component {
    render(){
        return(
            <Card centered>
                <Card.Content>
                    <Image className="userimg" floated="left" size="tiny" src={image} />
                    <Card.Header textAlign="center" style={{"font-size": 25, "margin-top": 20}}>
                        Harold Roxas
                    </Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <div className="stats">
                        <Card.Description className="postCount">
                            Pings
                        </Card.Description>
                        <Card.Description>
                            Friends
                        </Card.Description>
                    </div>
                    <div className="stats">
                        <Card.Meta className="postCount">
                            200
                        </Card.Meta>
                        <Card.Meta>
                            150
                        </Card.Meta>
                    </div>
                </Card.Content>
            </Card>
        );
    }

}

export default UserProfile;