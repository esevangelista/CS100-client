import React from 'react';

import { Segment, Form, Image, Icon, Button } from 'semantic-ui-react';

import '../style.css';

const UserPost = ({
    image,
    content,
    handleChangePost,
    handlePost
}) => (
    <Segment>
        <Form onSubmit={e => {handlePost({content})}}>
            <Form.Group inline>
                <Image className="userimg" floated="left" size="mini" src={image} />
                <Form.TextArea className="ping" rows={2} autoHeight placeholder="Write a Ping..." name="content" value={content} onChange={e => {handleChangePost(e.target.value);}} />
            </Form.Group>
            <Button disabled={content? false : true} fluid type="submit" size="tiny" color="teal" circular>PING</Button>
        </Form>
    </Segment>
)

export default UserPost;