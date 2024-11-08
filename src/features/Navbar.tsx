import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Home.scss";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar className="navbar-custom " expand="xxl">
      <Navbar.Brand as={Link} to="/able-ui">
        <img
          src={`${process.env.PUBLIC_URL}/images/aboutImg/Able-logo.png`}
          alt="Logo"
          className="logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link as={Link} to="/able-ui">
            Home
          </Nav.Link>
          <Nav.Link href="#achievements">Achievements</Nav.Link>
          <Nav.Link as={Link} to="/gallery">
            Gallery
          </Nav.Link>
          <Nav.Link href="#events">Events</Nav.Link>
          <Nav.Link as={Link} to="/about">
            About Us
          </Nav.Link>
          <Nav.Link href="#contact-us">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
