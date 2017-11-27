import React, { Component } from 'react';
import {Image, Card} from 'semantic-ui-react';

class ProfileInfo extends Component{

    render(){
        const { user, friends } = this.props;

        return (
            <div>
                <Image src={user.imageUrl} size = 'large' circular/>
                <br/>
                <Card.Group itemsPerRow = {1} stackable>
                    <Card>
                        <Card.Content>
                            <Card.Header>{user.name}</Card.Header>
                            
                            <Card.Description>{user.about}</Card.Description>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Card.Header>Friends</Card.Header>
                            
                            <Card.Description>
                                {
                                    friends.map((friend) => {
                                        return(
                                            <Image key = {friend._id} src={friend.imageUrl} size = 'tiny'/>
                                        )
                                    })
                                }
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </div>
        )
    }
}

export default ProfileInfo;