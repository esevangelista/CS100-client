import React, { Component } from 'react';

import { Header, Grid, Button, Form, Segment, Card, Image, TextArea, Message } from 'semantic-ui-react';

import UserProfile from './components/user/UserProfile';
import UserPost from './components/feed/UserPost';
import UserFeed from './components/feed/UserFeed';
import UserSuggested from './components/suggested/UserSuggested';

import profpic from '../../assets/profpics/defaultLul.jpg'

import './style.css';

class FriendRequest extends Component {
    render() {
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
                        <Card>
                            <Card.Content>
                                <Image floated='right' size='mini' src={profpic} />
                                <Card.Header>
                                    Jefferson Basilio
                                </Card.Header>
                                <Card.Meta>
                                    jcbasilio1@up.edu.ph
                                    </Card.Meta>
                                <Card.Description>
                                    jeff.about
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button color='teal'>Approve</Button>
                                    <Button>Decline</Button>
                                </div>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Image floated='right' size='mini' src={profpic} />
                                <Card.Header>
                                    Erlen Evangelista
                                </Card.Header>
                                <Card.Meta>
                                    esevangelista@up.edu.ph
                                 </Card.Meta>
                                <Card.Description>
                                    erlen.about
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button color='teal'>Approve</Button>
                                    <Button>Decline</Button>
                                </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column
                        width={8}
                    >
                        <Card>
                            <Card.Content>
                                <Image floated='right' size='mini' src={profpic} />
                                <Card.Header>
                                    Harold Roxas
                                </Card.Header>
                                <Card.Meta>
                                    hproxa@up.edu.ph
                                 </Card.Meta>
                                <Card.Description>
                                    harold.about
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button color='teal'>Approve</Button>
                                    <Button>Decline</Button>
                                </div>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Image floated='right' size='mini' src={profpic} />
                                <Card.Header>
                                    Jasper Sunga
                                </Card.Header>
                                <Card.Meta>
                                    jrsunga@up.edu.ph
                                 </Card.Meta>
                                <Card.Description>
                                    hasper.about
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button color='teal'>Approve</Button>
                                    <Button>Decline</Button>
                                </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                </Grid>
            </Segment>
        );
    }
}

export default FriendRequest;