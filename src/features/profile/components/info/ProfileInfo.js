import React, { Component } from 'react';
import {Image, Card} from 'semantic-ui-react';
import something from '../../../../assets/profpics/somepicture.jpg'

const array = [something, something, something, something, something, something]

class ProfileInfo extends Component{

    render(){
        return (
            <div>
                <Image src={this.props.user.imageUrl} size = 'large' circular/>
                <br/>
                <Card.Group itemsPerRow = {1} stackable>
                    <Card>
                        <Card.Content>
                            <Card.Header>{this.props.user.name}</Card.Header>
                            
                            <Card.Description>{this.props.user.about}</Card.Description>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Card.Header>Friends</Card.Header>
                            
                            <Card.Description textAlign="center">
                                {
                                    array.map((image, index) => {
                                        console.log('Here')
                                        return(
                                            <Image key = {index} src={image} size = 'tiny'/>
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