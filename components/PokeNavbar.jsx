import React from 'react'
import { Container,Nav,Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export const PokeNavbar = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand to="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/pokedex">Pokedex</Nav.Link>
        <Nav.Link as={Link} to="/Berries">Berries</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}
