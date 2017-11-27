import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Modal, Icon, Form, Button, TextArea } from 'semantic-ui-react'

class CommentModal extends Component{
    constructor(props){
        super(props);

        this.state={
            content:''
        }
    }

    handleContentChange = e => {
        this.setState({content:e.target.value})
    }

    render(){
        return(
                <Modal size="tiny" open={this.props.active}>
                     <Modal.Header>{this.props.friend}</Modal.Header>
                     <Modal.Content>
                        <p>{this.props.content}</p>
                     </Modal.Content>
                     <Modal.Actions>
                        <Icon name='like' onClick = {this.props.likeHandle}/>
                        <Icon name='comment'/>

                        <Form>
                            <TextArea autoHeight placeholder = 'Pong something' rows={2} onChange={this.handleContentChange}/>
                            <Button primary>Pong</Button>
                        </Form>
                     </Modal.Actions>
                </Modal>
            )
    }   
}

export default CommentModal;