import React from 'react'
import {Pagination} from 'react-bootstrap';
import request from "../util/request";

import './BlogDetail.css'
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    }
    return null;
}

class BlogDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data:{}
    }

  }

  componentDidMount (){
      request('/api/blog/detail',{id:getQueryString('id')}).then((data) => {

          this.setState({
              data:data.data.data
          })
      });
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
        <div className="blog-list">
          <div dangerouslySetInnerHTML={{__html: `${data.content}`}} />
        </div>

      </div>
    )
  }
}

export default BlogDetail;
