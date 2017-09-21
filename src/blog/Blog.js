import React from 'react'
import {Form, FormGroup, FormControl,Button} from 'react-bootstrap'

import './Blog.css'

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        data:this.props.blogData,
    }
  }
  render(){
    const data = this.state.data;
    return (
      <div className="blog-information">
        <h2 className="blog-title">{data.title}</h2>
        <div></div>
        <div>
          <label>作者：</label><a herf='#'>lemon</a>
          <span className="blog-time">{data.gmt_created}</span>
        </div>
        <div className="blog-desc">{data.description}</div>
        <div className="blog-text">
          <div dangerouslySetInnerHTML={{__html: `${data.content}`}} />
        </div>
        <Button href={`/Detail?id=${data.id}`} bsStyle="primary">阅读全文</Button>
      </div>
    )
  }
}

export default Blog;
