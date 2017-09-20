import React from 'react'
import {Pagination} from 'react-bootstrap'

import './BlogDetail.css'

class BlogDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount (){
      console.log(this.props.location.query);
  }
  render(){
    const data = this.state.data;
    return (
      <div className="blog-information">
          {/*
            <h2 className="blog-title">{data.title}</h2>
        <div></div>
        <div>
          <label>作者：</label><a herf='#'>lemon</a>
          <span className="blog-time">{data.gmt_created}</span>
        </div>
        <div className="blog-desc">{data.description}</div>
        <div className="blog-list">
          <div dangerouslySetInnerHTML={{__html: `${data.content}`}} />
        </div>
          */}
      </div>
    )
  }
}

export default BlogDetail;
