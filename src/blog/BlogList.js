import React from 'react'
import {Pagination} from 'react-bootstrap'

import Blog from './Blog'


class BlogList extends React.Component {
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
    let arr = [1,2,3,4,5,6];
    return (
      <div>
        {arr.map(function(){
          return <Blog />
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
