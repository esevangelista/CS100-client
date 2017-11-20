import React from 'react'
import { Button, Checkbox, Form, Segment } from 'semantic-ui-react'

const FormExampleForm = () => {

  <Segment>
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input placeholder='First Name' />
      </Form.Field>
      <Form.Field>
        <label>First Name</label>
        <input placeholder='Middle' />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder='Last Name' />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder='Email' />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder='Password' />
      </Form.Field>
      <Button type='submit'>Submit</Button>

    </Form>

  </Segment>
}

export default FormExampleForm;