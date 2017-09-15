import React from 'react'
import {Pagination} from 'react-bootstrap'

class BlogDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activePage:1
    }

    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    console.log(eventKey)
    this.setState({
      activePage:eventKey
    })
  }
  render(){
    return (
      <div className="blog-information">
        <h2 className="blog-title">测试</h2>
        <div></div>
        <div>
          <label>作者：</label><a herf='#'>lemon</a>
          <span className="blog-time">2017.06.12</span>
        </div>
        <div className="blog-desc">这是个测试</div>
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
      </div>
    )
  }
}

export default BlogDetail;
