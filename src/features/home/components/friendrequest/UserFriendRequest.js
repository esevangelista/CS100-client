import React, { Component } from 'react';

import { Grid, Button, Segment, Card, Image } from 'semantic-ui-react';

import profpic from '../../../../assets/profpics/defaultLul.jpg';

class FriendRequest extends Component {
    render() {
        const { requests, handleAcceptFriend } = this.props;

        return (
            <Segment>
                <Grid
                    centered
                    columns={2}
                    style={{ height: '100%' }}
                    textAlign='left' 
                    verticalAlign='left'
                >

                    <Grid.Column
                        width={8}   
                    >
                        {
                            requests.map((request, index) => {
                                return(
                                <Card key={index}>
                                    <Card.Content>
                                        <Image floated='right' size='mini' src={request.imageUrl} />
                                        <Card.Header>
                                            {request.name}
                                        </Card.Header>
                                        <Card.Meta>
                                            {request.email}
                                            </Card.Meta>
                                        <Card.Description>
                                            {request.about}
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='ui two buttons'>
                                            <Button color='teal' onClick={e => {handleAcceptFriend(request._id)}}>Approve</Button>
                                            <Button>Decline</Button>
                                        </div>
                                    </Card.Content>
                                </Card>
                                )
                            })
                        }
                        
                    </Grid.Column>

                </Grid>
            </Segment>
        );
    }
}

export default FriendRequest;