import React from 'react';

import { Segment, Form, Image, Input, Icon, Button } from 'semantic-ui-react';
import image from '../../../../assets/profpics/somepicture.jpg';

import '../style.css';

const UserPost = () => (
    <Segment>
        <Form>
            <Form.Field inline>
                <Image className="userimg" floated="left" size="mini" src={image} />
                <Input fluid placeholder="Write a Ping..." icon={<Icon link name="image" />} />
            </Form.Field>
            <Button fluid type="submit" size="tiny" color="teal" compact circular>PING</Button>
        </Form>
    </Segment>
)

export default UserPost;