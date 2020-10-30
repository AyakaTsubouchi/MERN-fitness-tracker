import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav,Container } from "react-bootstrap";

const Navbar1 = () => {
  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/" className="navbar-brand">
            Exercise Tracker
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/" className="nav-link">
                Exercises
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/create" className="nav-link">
                Create Exercise log
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/user" className="nav-link">
                Create User
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Navbar1;
