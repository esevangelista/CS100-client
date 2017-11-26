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
                                <Feed.Label image={feed.authorImg} />
                                <Feed.Content>
                                    <Feed.Summary>
                                        <Feed.User content={feed.authorName} />
                                        <Feed.Date content={feed.timestamp} />
                                    </Feed.Summary>
                                    <Feed.Extra text content={feed.content} />
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