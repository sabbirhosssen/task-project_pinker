import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand to="/home" as={Link}>Your Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Form className="d-flex me-auto ">
                <FormControl
                   type="search"
                   placeholder="Search"
                   className="me-2 px-3"
                   aria-label="Search"

                 />
                 <Button variant="outline-success">Search</Button>
                </Form>
            <Navbar.Collapse id="responsive-navbar-nav">

              <Nav className="ms-auto ">
                <Nav.Link to="login" as={Link}>Login</Nav.Link>
                <Nav.Link to="signup" as={Link}>Sign up</Nav.Link>
                
              </Nav>
            
            </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    );
};

export default Header;