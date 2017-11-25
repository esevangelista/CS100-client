import React, { Component } from 'react';

import { Card, Feed, Button } from 'semantic-ui-react';
import image from '../../../../assets/profpics/defaultLul.jpg';

class UserSuggested extends Component {
    render(){
        return(
            <Card>
                <Card.Content>
                    <Card.Header>
                        Suggested Friends
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Feed>
                        <Feed.Event>
                            <Feed.Label image={image} />
                            <Feed.Content>
                                <Feed.User content="Jeff Basillio" />
                            </Feed.Content>
                            <Button basic color="teal" compact circular>Add Friend</Button>
                        </Feed.Event>
                        <Feed.Event>
                            <Feed.Label image={image} />
                            <Feed.Content>
                                <Feed.User content="Erlen" />
                            </Feed.Content>
                            <Button basic color="teal" compact circular>Add Friend</Button>
                        </Feed.Event>
                        <Feed.Event>
                            <Feed.Label image={image} />
                            <Feed.Content>
                                <Feed.User content="Hasper Sunga" />
                            </Feed.Content>
                            <Button basic color="teal" compact circular>Add Friend</Button>
                        </Feed.Event>
                    </Feed>
                </Card.Content>
            </Card>
        );
    }
}

export default UserSuggested;