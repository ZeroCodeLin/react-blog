import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

class BlogNav extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSelect(event){
      window.location.href = '/';
  }
  render(){
    return(
      <Navbar collapseOnSelect >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">桃子屯</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav onSelect={this.handleSelect}>
            <NavItem eventKey={1} href="#">主页</NavItem>
          </Nav>
          <Nav pullRight>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default BlogNav;
