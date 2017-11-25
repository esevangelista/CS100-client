import React, { Component } from 'react';

import { Segment, Feed, Icon } from 'semantic-ui-react';
import image from '../../../../assets/profpics/somepicture.jpg';

class UserFeed extends Component {
    render(){
        return(
            <Segment>
                <Feed>
                    <Feed.Event>
                        <Feed.Label image={image} />
                        <Feed.Content>
                            <Feed.Summary>
                                <Feed.User content="Harold Roxas" />
                                <Feed.Date content="1h" />
                            </Feed.Summary>
                            <Feed.Extra images text content="Hello World!" />
                            <Feed.Meta>
                                <Feed.Like>
                                    20
                                    <Icon name="like" />
                                </Feed.Like>
                                <Feed.Like>
                                    15
                                    <Icon name="comment" />
                                </Feed.Like>
                            </Feed.Meta>
                        </Feed.Content>
                    </Feed.Event>
                    <Feed.Event>
                        <Feed.Label image={image} />
                        <Feed.Content>
                            <Feed.Summary>
                                <Feed.User content="Harold Roxas" />
                                <Feed.Date content="1h" />
                            </Feed.Summary>
                            <Feed.Extra images text content="Hello World!" />
                            <Feed.Meta>
                                <Feed.Like>
                                    20
                                    <Icon name="like" />
                                </Feed.Like>
                                <Feed.Like>
                                    15
                                    <Icon name="comment" />
                                </Feed.Like>
                            </Feed.Meta>
                        </Feed.Content>
                    </Feed.Event>
                    <Feed.Event>
                        <Feed.Label image={image} />
                        <Feed.Content>
                            <Feed.Summary>
                                <Feed.User content="Harold Roxas" />
                                <Feed.Date content="1h" />
                            </Feed.Summary>
                            <Feed.Extra images text content="Hello World!" />
                            <Feed.Meta>
                                <Feed.Like>
                                    20
                                    <Icon name="like" />
                                </Feed.Like>
                                <Feed.Like>
                                    15
                                    <Icon name="comment" />
                                </Feed.Like>
                            </Feed.Meta>
                        </Feed.Content>
                    </Feed.Event>
                </Feed>
            </Segment>
        );
    }
}

export default UserFeed;