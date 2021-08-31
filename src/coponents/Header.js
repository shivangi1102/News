import React from 'react'
import { Nav,Navbar,Container } from 'react-bootstrap'
import Search from './Search'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">TodayNews</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      
    </Nav>
    <Nav>
          <Search/>
        </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default Header
