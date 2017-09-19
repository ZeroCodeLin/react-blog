import React from 'react';
import ReactDom from 'react-dom';
import {form,FormGroup,ControlLabel,FormControl,HelpBlock,Label,Col} from 'react-bootstrap';

import './BlogSearch.css'



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
    console.log(e.target.value);
  }
  render(){
    return (
      <Col xs={6} md={3} >
        <div id="bignav" className="blog-search">
          <form>
            <FormGroup>
              <FormControl type="text" placeholder="Jane Doe" />
            </FormGroup>
          </form>
          <div className="blog-tags">
            <Label bsStyle="info blog-tag">Info</Label>
            <Label bsStyle="info blog-tag">Info</Label>
            <Label bsStyle="info blog-tag">Info</Label>
            <Label bsStyle="info blog-tag">Info</Label>
            <Label bsStyle="info blog-tag">Info</Label>
            <Label bsStyle="info blog-tag">Info</Label>
            <Label bsStyle="info blog-tag">Info</Label>
            <Label bsStyle="info blog-tag">Info</Label>
            <Label bsStyle="info blog-tag">Info</Label>
            <Label bsStyle="info blog-tag">Info</Label>

          </div>
        </div>
        </Col>
    )
  }
}

export default BlogSearch;
