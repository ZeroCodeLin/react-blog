import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

class BlogNav extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">桃子屯</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
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
