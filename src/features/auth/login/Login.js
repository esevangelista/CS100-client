import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

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
        <Header as='h1' color='teal' textAlign='left'>
          {/* <Image src='/logo.png' /> */}
          Ping Pong
        </Header>
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
          New to us? <a href='/signup'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default Login;
