import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Header, Grid, Button, Form, Segment, Card, Image, TextArea, Message } from 'semantic-ui-react'


class Signup extends Component {

  handleFormChange = e => {
    this.props.handleFormChange(e.target.name, e.target.value);
  }

  handleResetForm = e => {
    this.props.handleResetForm();
  }

  handleUploadPicture = e => {
    this.props.handleUploadPicture(e.target.files[0]);
  }

  handleSubmitForm = e => {
    const validateEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    e.preventDefault();
    if (!validateEmail.test(this.props.form.email)){
      alert("Please enter a valid email.");
    }

    else if (this.props.form.password !== this.props.form.repassword){
      alert("Passwords don't match.");

    }else{
      const formObj = {
        name: this.props.form.name,
        email: this.props.form.email,
        password: this.props.form.password,
        about: this.props.form.about,
        //imageUrl: this.props.imagePath
      };
      let credentials = new FormData();

      Object.keys(formObj).forEach(key => credentials.append(key, formObj[key]));

      this.props.handleSignUp(credentials);
    }
  }

  render(){
    return (
      <Grid 
        centered 
        columns={3} 
        style={{ height: '100%' }}
        textAlign='center' 
        verticalAlign='middle'
      >
        <Grid.Column
          width={1}
        >
        {/* Dummy column */}
        </Grid.Column>
        <Grid.Column
          textAlign='left'
          width={8}
        >
          <Header 
            as='h2'
            color='teal'
            textAlign='center'
          >
          <a href='/'style={{color: "teal"}}>Ping Pong</a>
        </Header>
          <Segment>
          <Form onSubmit={this.handleSubmitForm}>
            <Form.Group widths='equal'> 
              <Form.Input 
                label='First name' 
                placeholder='First Name' 
                name='firstName' 
                value={this.props.form.firstName}
                onChange={this.handleFormChange}
              />
              <Form.Input
                label='Middle Name'
                placeholder='Middle Name'
                onChange={this.handleFormChange}
                name='middleName' 
                value={this.props.form.middleName}
              />
              <Form.Input
                label='Last Name'
                placeholder='Last Name'
                name='lastName'
                value={this.props.form.lastName}
                onChange={this.handleFormChange}
                />
            </Form.Group>
            <Form.Field>
              <label>Email</label>
              <input 
                placeholder='Email'
                name='email'
                value={this.props.form.email}
                onChange={this.handleFormChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Passsword</label>
              <input 
                placeholder='Password'
                name='password'
                type='password'
                value={this.props.form.password}
                onChange={this.handleFormChange}
              />
            </Form.Field>
            <Form.Field >
              <label>Retype Password</label>
              <input 
                type='password'
                placeholder='Retype Password' 
                name='repassword'
                value={this.props.form.repassword}
                onChange={this.handleFormChange}
              />
            </Form.Field>
            <Form.Field >
              <label>Tell us about yourself (Optional)</label>
              <TextArea
                autoHeight
                placeholder='Tell us' 
                name='about'
                value={this.props.form.about}
                onChange={this.handleFormChange}
              />
            </Form.Field>
            <Button 
              color='teal' 
              type='submit'
              disabled={
                !(this.props.form.firstName &&
                  this.props.form.middleName &&
                  this.props.form.lastName &&
                  this.props.form.email &&
                  this.props.form.password &&
                  this.props.form.repassword
                ) ? true : false
              }
            >
              Submit
            </Button>
            <Button 
              type='reset'
              onClick={this.handleResetForm}
            >
              Clear Fields
            </Button>
          </Form>
          </Segment>
          <Message>
            Already have an account? <Link to='/login'>Log in</Link>
          </Message>
        </Grid.Column>
        <Grid.Column>
          {/* <Card>
            <Image src={this.props.form.imageUrl}/>
            <Card.Content extra>
              <div>
                <label htmlFor="hidden-new-file" className="ui icon button">
                  Upload Photo
                </label>
                <input type="file" name="imagePath" id="hidden-new-file" onChange={this.handleUploadPicture} style={{display: "none"}}/> 
              </div>
            </Card.Content>
          </Card> */}
        </Grid.Column>
      </Grid>
    );  
  }
}

export default Signup;