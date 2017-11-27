import React, { Component } from 'react';

import { Card, Feed, Button } from 'semantic-ui-react';
import image from '../../../../assets/profpics/defaultLul.jpg';

class UserSuggested extends Component {
    render(){
        const { suggestions, handleAddFriend } = this.props;

        return(
            <Card>
                <Card.Content>
                    <Card.Header>
                        Suggested Friends
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Feed>
                            {
                                suggestions.map((suggested, index) => {
                                    return (
                                        <Feed.Event key={index}>
                                            <Feed.Label image={suggested.imageUrl} />
                                            <Feed.Content>
                                                <Feed.User content={suggested.name} />
                                            </Feed.Content>
                                            <Button basic color="teal" compact circular onClick={e => {handleAddFriend(suggested._id)}}>Add Friend</Button>
                                        </Feed.Event>
                                    )
                                })
                            }
                    </Feed>
                </Card.Content>
            </Card>
        );
    }
}

export default UserSuggested;