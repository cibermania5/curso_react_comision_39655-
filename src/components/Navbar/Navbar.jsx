import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import { CartWidget } from "../CartWidget/CartWidget"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift } from '@fortawesome/free-solid-svg-icons'




export const Navigationbar = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        
        <Container>
          <Navbar.Brand href="#home"><FontAwesomeIcon icon={faGift} /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Categorías</Nav.Link>
            <Nav.Link href="#ofertas">Ofertas</Nav.Link>
            <Nav.Link href="#pricing">Servicio al cliente</Nav.Link>
          </Nav>
        </Container>
        <CartWidget listaPr={3} />
      </Navbar>
    </>
  );
}

