import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Modal, Icon, Form, Button, TextArea } from 'semantic-ui-react'

class ViewModal extends Component{
    constructor(props){
        super(props);

        this.state={
            content:''
        }

        this.handleContentChange = this.handleContentChange.bind(this);
    }

    handleContentChange(e){
        this.setState({content:e.target.value})
    }

    render(){
        return(
                <Modal>
                     <Modal.Header>{this.props.friend}</Modal.Header>
                     <Modal.Content>
                        <p>{this.props.content}</p>
                     </Modal.Content>
                     <Modal.Actions>
                        <Icon name='like' onClick = {this.props.likeHandle()}/>
                        <Icon name='comment'/>

                        <Form onSubmit={this.props.commentHandle({this.state.content})}>
                            <TextArea autoHeight placeholder = 'Pong something' rows={2} onChange={this.handleContentChange(e)}/>
                            <Button primary>Pong</Button>
                        </Form>
                     </Modal.Actions>
                </Modal>
            )
    }   
}

export default CommentModal;