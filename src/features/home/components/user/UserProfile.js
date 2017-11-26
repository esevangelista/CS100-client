import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';

import '../style.css'

class UserProfile extends Component {
    render(){
        return(
            <Card centered>
                <Card.Content>
                    <Image as={Link} to='/profile' circular floated="left" size="tiny" src={this.props.user.imageUrl} />
                    <Card.Header textAlign="center" style={{"font-size": 25, "margin-top": 20}}>
                        {this.props.user.name}
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
                    <div className="statscount">
                        <Card.Description className="postCount">
                            {this.props.postCount}
                        </Card.Description>
                        <Card.Description>
                            {this.props.friendCount}
                        </Card.Description>
                    </div>
                </Card.Content>
            </Card>
        );
    }

}

export default UserProfile;