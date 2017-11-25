import React, { Component } from 'react'
import { Header, Grid, Button, Form, Segment, Card, Image, TextArea } from 'semantic-ui-react'
import profpic from '../../assets/profpics/defaultLul.jpg';

class Signup extends Component {

  handleFormChange = (e) => {
    this.props.handleFormChange(e.target.name, e.target.value);

  }

  handleResetForm = (e) => {

    this.props.handleResetForm();

  }

  handleUploadPicture = (e) => {

    this.props.handleResetForm();

  }

  handleSubmitForm = (e) => {

    const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(this.props.form.firstName);


    if(
      this.props.form.firstName === "" ||
      this.props.form.middleName === "" ||
      this.props.form.lastName === "" ||
      this.props.form.email === "" ||
      this.props.form.password === "" ||
      this.props.form.repassword === "" ){
        alert("All fields must be filled.");
    }

    else if (!validateEmail.test(this.props.form.email)){
      alert("Please enter a valid email.");
    }

    else if (this.props.form.password !== this.props.form.repassword){
      alert("Passwords don't match.");
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
          Social Media App
        </Header>
          <Segment>
          <Form>
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
                name='middleName' 
                value={this.props.form.middleName}
                onChange={this.handleFormChange}
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
                placeholder='Retype Password' 
                name='repassword'
                type='password'
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
              onClick={this.handleSubmitForm}
            >
              Submit
            </Button>
            <Button 
              type='submit'
              onClick={this.handleResetForm}
            >
              Clear Fields
            </Button>
          </Form>
          </Segment>
        </Grid.Column>
        <Grid.Column
        >
          <Card>
            <Image src={profpic}/>
            <Card.Content extra>
              <div>
                <label for="hidden-new-file" class="ui icon button">
                  Upload Photo
                </label>
                  <input type="file" id="hidden-new-file" style={{display: "none"}}/> 
              </div>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    );  
  }
}

export default Signup;