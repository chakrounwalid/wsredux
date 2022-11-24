import React from 'react';
import { Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';

function Navsearch({setText,setRating}) {
  return (
    <div>
         <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">MovieApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Movies</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>

          </Nav>
          <span style ={{marginRight:"20px"}}>
          <ReactStars
    count={5} size={24} activeColor="#ffd700" onChange={(newRating)=>setRating(newRating)}
  />,
         </span>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Movie"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setText(e.target.value)}

            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navsearch