import React from 'react';

import { Segment, Form, Image, Icon, Button } from 'semantic-ui-react';

import '../style.css';

const UserPost = ({image}) => (
    <Segment>
        <Form.Group>
            <Image className="userimg" floated="left" size="mini" src={image} />
            <Form.TextArea rows={2} autoHeight placeholder="Write a Ping..." style={{"float": "left", "width": "455px", "border-radius": 10, "outline": "none"}}/>
            <Icon name="image" link size="large" style={{"margin-top": 8, "margin-left": 2}}/>
            <Button fluid type="submit" size="tiny" color="teal" compact circular>PING</Button>
        </Form.Group>
    </Segment>
)

export default UserPost;