import React from 'react'
import {Form, FormGroup, FormControl} from 'react-bootstrap'

class Demo extends React.Component {
  constructor(props) {
    super(props)

  }

  render(){
    return (
      <Form>
        <FormGroup>
          <FormControl type="email" placeholder="Email" />
        </FormGroup>
      </Form>
    )
  }
}

export default Demo;
