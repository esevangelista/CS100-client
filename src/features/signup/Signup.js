import React from 'react'
import { Header, Grid, Button, Form, Segment, Card, Icon, Image } from 'semantic-ui-react'

const SignupForm = () => {

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
            <Form.Input label='First name' placeholder='First Name'/>
            <Form.Input label='Middle Name' placeholder='Middle Name' />
            <Form.Input label='Last Name' placeholder='Last Name'/>
          </Form.Group>
          <Form.Field>
            <label>Email</label>
            <input placeholder='Email' />
          </Form.Field>
          <Form.Field >
           <label>Passsword</label>
           <input placeholder='Password' />
          </Form.Field>
          <Form.Field >
           <label>Retype Password</label>
            <input placeholder='Retype Password' />
          </Form.Field>
          <Button color='teal' type='submit'>Submit</Button>
          <Button type='submit'>Clear Fields</Button>
        </Form>
        </Segment>
      </Grid.Column>
      <Grid.Column
      >
        <Card>
          <Image src='matthew.png'/>
          <Card.Content>
            <Card.Header>
                Matthew
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                Joined in 2015
              </span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Friends
              </a>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );  
}

export default SignupForm;