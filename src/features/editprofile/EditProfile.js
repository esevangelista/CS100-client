import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Accordion, Icon, Form, Header, Card, Image, TextArea, Button, Segment } from 'semantic-ui-react';

import profpic from '../../assets/profpics/defaultLul.jpg';

class EditProfile extends Component {

    constructor(props){

        super(props);
        const names = this.props.user.name.split(" ");
        const firstName = names[0];
        const middleName = names[1];
        const lastName = names[2];

        this.state = {
            activeIndex: -1,


            id: this.props.user._id,
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            email: this.props.user.email,
            oldpassword: "",
            newpassword: "",
            renewpassword: "",
            about: this.props.user.about,
            oldPasswordMatch: false,
        }
    
        this.handleClick = this.handleClick.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleResetForm = this.handleResetForm.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.handleEditForm = this.handleEditForm.bind(this);

    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
        this.setState({ activeIndex: newIndex })
    }
    handleFormChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleResetForm = (e) => {
        const names = this.props.user.name.split(" ");
        const firstName = names[0];
        const middleName = names[1];
        const lastName = names[2];
        const email = this.props.user.email;
        const oldpassword = this.props.user.password;

        this.setState({
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            email: email,
            oldpassword: "",
            newpassword: "",
            renewpassword: "",
            about: this.props.user.about,
        });
    }
    handleFileUpload = (e) => {
        this.props.handleFileUpload(e.target.name, e.target.files[0]);
    }
    handleEditForm = (e) => {

        const id = this.state.id;
        const password = this.state.oldpassword;
        console.log(password);
        this.props.handleVerify({password});

        if(!this.props.validOldPassword){
            alert("Incorrect old password.");
        }
        else {
            const validateEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
            if (!validateEmail.test(this.state.email)){
                alert("Please enter a valid email.");
            }
            else if(this.state.newpassword !== this.state.renewpassword){
                alert("New passwords don't match");
            }
            else{
                const formObj = {
                    name: this.state.firstName + " " + this.state.middleName + " " + this.state.lastName,
                    email: this.state.email,
                    password: this.state.password,
                    about: this.state.about,
                    //imageUrl: this.props.imagePath
                };
                let credentials = new FormData();

                Object.keys(formObj).forEach(key => credentials.append(key, formObj[key]));
                this.props.handleEditForm(credentials);
            }
        }
    }

    render() {
        const { activeIndex } = this.state;
        return (
            <Grid
                centered
                padded
                columns={3}
                style={{ height: '100%' }}
                textAlign='left'
            >
                <Grid.Column width={1}>
                </Grid.Column>

                <Grid.Column width={8}>
                    <br />
                    <Header
                        as='h2'
                        color='teal'
                    >
                        Edit Profile
                    </Header>
                    <Accordion fluid styled>
                        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                            <Icon name='dropdown' />
                            Name
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 0}>
                            <Form>
                                <Form.Group widths='equal'>
                                    <Form.Input
                                        placeholder='First Name'
                                        name='firstName'
                                        value={this.state.firstName}
                                        onChange={this.handleFormChange}
                                    />
                                    <Form.Input
                                        placeholder='Middle Name'
                                        name='middleName'
                                        value={this.state.middleName}
                                        onChange={this.handleFormChange}
                                    />
                                    <Form.Input
                                        placeholder='Last Name'
                                        name='lastName'
                                        value={this.state.lastName}
                                        onChange={this.handleFormChange}
                                    />
                                </Form.Group>
                            </Form>
                        </Accordion.Content>

                        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                            <Icon name='dropdown' />
                            Email
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 1}>

                            <Form>
                                <Form.Field width={12}>
                                    <input
                                        name='email'
                                        placeholder='Enter new email'
                                        value={this.state.email}
                                        onChange={this.handleFormChange}
                                    />
                                </Form.Field>
                            </Form>

                        </Accordion.Content>
                        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                            <Icon name='dropdown' />
                            Password
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 2}>
                            <Form >
                                <Form.Input
                                    width={12}
                                    placeholder='New Password'
                                    type='password'
                                    name='newpassword'
                                    value={this.state.newpassword}
                                    onChange={this.handleFormChange}
                                />
                                <Form.Input
                                    width={12}
                                    placeholder='Repeat New Password'
                                    type='password'
                                    name='renewpassword'
                                    value={this.state.renewpassword}
                                    onChange={this.handleFormChange}
                                />
                            </Form>
                        </Accordion.Content>

                        <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
                            <Icon name='dropdown' />
                            About
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 3}>
                            <Form>
                                <Form.Field>
                                    <TextArea
                                        autoHeight
                                        style={{minHeight: 100}}
                                        placeholder='About'
                                        name='about'
                                        value={this.state.about}
                                        onChange={this.handleFormChange}
                                    />
                                </Form.Field>
                            </Form>
                        </Accordion.Content>
                    </Accordion>
                    <Segment>
                        <Form>
                        <label><strong>Enter old password to save changes</strong></label>
                        <br />
                        <Form.Input
                            width={12}
                            placeholder='Type your Old Password'
                            type='password'
                            name='oldpassword'
                            value={this.state.oldpassword}
                            onChange={this.handleFormChange}
                        />
                        </Form>
                    </Segment>
                    <br />
                    <Button color='teal' type='submit' 
                    disabled={
                        !((this.state.firstName &&
                        this.state.middleName &&
                        this.state.lastName &&
                        this.state.email &&
                        this.state.oldpassword
                        )) ? true : false    }
                    onClick={this.handleEditForm}
                    >
                        Submit</Button>
                    <Button type='submit' onClick={this.handleResetForm}>Revert</Button>
                </Grid.Column>
                <Grid.Column width={3}>
                    <br />
                    <Card>
                        <Image src={profpic} />
                        <Card.Content extra>
                            <div>
                                <label for="hidden-new-file" class="ui icon button">
                                    Upload Photo
                               </label>
                                <input type="file" id="hidden-new-file" style={{ display: "none" }} />
                            </div>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>

            
        )
    }
}

export default EditProfile;