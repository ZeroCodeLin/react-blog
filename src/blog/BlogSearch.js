import React from 'react';
import ReactDom from 'react-dom';
import {form,FormGroup,ControlLabel,FormControl,HelpBlock,Label,Col} from 'react-bootstrap';
import request from "../util/request";
import './BlogSearch.css'

class BlogSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      value:''
    }
  }

  render(){
    return (
      <Col xs={6} md={3} >
        <div id="bignav" className="blog-search">
          <form>
            <FormGroup>
              <FormControl type="text" placeholder="收缩关键词" name="text" />
            </FormGroup>
          </form>
            {/*
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
            */}
        </div>
        </Col>
    )
  }
}

export default BlogSearch;
