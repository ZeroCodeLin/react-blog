import React from 'react'
import {Form, FormGroup, FormControl,Button} from 'react-bootstrap'

import './Blog.css'

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }

  render(){
    return (
      <div className="blog-information">
        <h2 className="blog-title">标题</h2>
        <div></div>
        <div>
          <label>作者：</label><a herf='#'>lemon</a>
          <span className="blog-time">2017.06.12</span>
        </div>
        <div className="blog-desc">描述</div>
        <div className="blog-text">
          <code>
            var s1 = 0;
          </code>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
        </div>
        <Button href="/Detail" bsStyle="primary">阅读全文</Button>
      </div>
    )
  }
}

export default Blog;
