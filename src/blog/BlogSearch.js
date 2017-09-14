import React from 'react';
import ReactDom from 'react-dom';
import {form,FormGroup,ControlLabel,FormControl,HelpBlock} from 'react-bootstrap';

class BlogSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      value:''
    }
  }
  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  render(){
    return (
      <div>
        <form>
          <FormGroup>
            <FormControl type="text" placeholder="Jane Doe" />
          </FormGroup>
        </form>
      </div>
    )
  }
}

export default BlogSearch;
