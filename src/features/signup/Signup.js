import React from 'react'
import { Header, Grid, Button, Form, Segment, Card, Icon, Image, Input } from 'semantic-ui-react'
import profpic from '../../assets/profpics/defaultLul.jpg';


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
          <Image src={profpic}/>
          <Card.Content>
            <input type="file"/>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );  
}

export default SignupForm;