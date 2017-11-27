import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Modal, Icon } from 'semantic-ui-react'

class ViewModal extends Component{
    render(){
        return(
                <Modal>
                     <Modal.Header>{this.props.friend}</Modal.Header>
                     <Modal.Content>
                        <p>{this.props.content}</p>
                     </Modal.Content>
                     <Modal.Actions>
                        <Icon name='like' onClick = {this.props.likeHandle}/>
                        <Icon name='comment'/>
                     </Modal.Actions>
                </Modal>
            )
    }
}

export default ViewModal;