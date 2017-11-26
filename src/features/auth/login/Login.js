import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

import '../style.css';

const Login = ({
  email,
  password,
  handleChangeEmail,
  handleChangePassword,
  hasTriedLoggingIn,
  handleLogin,
  loginError
}) => (
  <div className='login-form'>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
      columns="2"
    >
      <Grid.Column>
        <Header as='h1'textAlign='left'>
          <div class = 'white'>Ping Pong</div>
        </Header>
        <div class = 'white'> 
        Ping your stories, Pong your replies, and Pang the PingPongs you like.
        <br/>Introducing, Ping Pong, your not so new social media site.
        </div>
      </Grid.Column>
      <Grid.Column style={{ maxWidth: 350 }}>
        <Form size='large' warning={Boolean(loginError)} error={Boolean(loginError)}
        onSubmit={e => {
          e.preventDefault();
          handleLogin({email, password});
        }}>
          {hasTriedLoggingIn && loginError.status === 422 && (
            <Message
              warning
              header="Something went wrong!"
              content={loginError.message}
            />
          )}
          {hasTriedLoggingIn && loginError.status === 500 && (
            <Message
              error
              header="Something went wrong!"
              content={loginError.message}
            />
          )}
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
              name='email'
              value={email}
              onChange={e => {
                handleChangeEmail(e.target.value);
              }}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              name='password'
              value={password}
              onChange={e => {
                handleChangePassword(e.target.value);
              }}
            />
            <Button disabled={!(email && password)} color='teal' type="submit" fluid size='large'>Login</Button>
          </Segment>
        </Form>
        <Message>
          New to us? <Link to='/signup'>Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default Login;
