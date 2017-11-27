import React, { Component } from 'react';

import { Segment, Feed, Icon } from 'semantic-ui-react';
import UserPost from './UserPost';
import CommentModal from '../CommentModal';

class UserFeed extends Component {
    constructor(props){
        super(props);
        this.state = {
            showComment: false
        }
    }

    handleShowCommentModal = e => {
        this.setState({showComment: true});
    }

    render(){
        const { content, handleChangePost, handlePost} = this.props;

        return(
            <Segment>
                <UserPost 
                    image={this.props.user.imageUrl} 
                    content={content}
                    handleChangePost={handleChangePost}
                    handlePost={handlePost}
                />
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
                                            <Icon name="comment" onClick={this.handleShowCommentModal}/>
                                        </Feed.Like>
                                    </Feed.Meta>
                                </Feed.Content>
                                </Feed.Event>
                            )
                        })
                    }
                    {/* <CommentModal active={this.state.showComment}/>    */}
                </Feed>
            </Segment>
        );
    }
}

export default UserFeed;