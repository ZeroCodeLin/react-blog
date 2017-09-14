import React from 'react'
import {Pagination} from 'react-bootstrap'

class Home extends React.Component {
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
      <Pagination
        prev
        next
        ellipsis
        boundaryLinks
        items={7}
        maxButtons={5}
        activePage={this.state.activePage}
        onSelect={this.handleSelect} />
    )
  }
}

export default Home;
