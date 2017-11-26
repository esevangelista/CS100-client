import React, { Component } from 'react';

import { Segment, Feed, Icon } from 'semantic-ui-react';
import image from '../../../../assets/profpics/somepicture.jpg';

class UserFeed extends Component {
    render(){
        return(
            <Segment>
                <Feed>
                    {
                        this.props.feeds.map((feed, index) => {
                            return(
                                <Feed.Event key={index}>
                                <Feed.Label image={image} />
                                <Feed.Content>
                                    <Feed.Summary>
                                        <Feed.User content="Harold Roxas" />
                                        <Feed.Date content="1h" />
                                    </Feed.Summary>
                                    <Feed.Extra images text content={feed.content} />
                                    <Feed.Meta>
                                        <Feed.Like>
                                            {feed.likeCount}
                                            <Icon name="like" />
                                        </Feed.Like>
                                        <Feed.Like>
                                            {feed.comments.length}
                                            <Icon name="comment" />
                                        </Feed.Like>
                                    </Feed.Meta>
                                </Feed.Content>
                                </Feed.Event>
                            )
                        })
                    }   
                </Feed>
            </Segment>
        );
    }
}

export default UserFeed;