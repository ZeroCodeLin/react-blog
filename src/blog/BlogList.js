import React from 'react'
import {Pagination} from 'react-bootstrap'
var $ = require('jquery')
import Blog from './Blog'
import request from "../util/request";


class BlogList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        activePage:1,
        data:[]
    }

    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    console.log(eventKey)
    this.setState({
      activePage:eventKey
    })
  }

  componentDidMount (){
      request('/api/blog/list').then((data) => {
          this.setState({
              data: data.data.data,
          });
      });
  }
  render(){
    let arr = [1,2,3,4,5,6];
    return (
      <div>
        {this.state.data.map(function(data){
          return <Blog blogData={data} />
        })}
        <div className="blog-Page">
          <Pagination
            prev
            next
            ellipsis
            boundaryLinks
            items={7}
            maxButtons={5}
            activePage={this.state.activePage}
            onSelect={this.handleSelect} />
        </div>
      </div>

    )
  }
}

export default BlogList;
