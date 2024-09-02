import React from "react";

import { SocialIcon } from "react-social-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const socialMediaLinks = {
  github: "https://github.com/arseniyshchepetnov",
  linkedin: "https://www.linkedin.com/in/arseniy-shchepetnov/",
  medium: "https://medium.com/@a.shchepetnov",
};

export default function Navigation() {
  return (
    <Navbar
      expand="md"
      fixed="top"
      bg="dark"
      variant="dark"
      style={{ height: "10vh" }}
    >
      <Container >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ backgroundColor: "dark", borderRadius: "1rem" }}
        >
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <h4 className="linkText text-center text-section-title">Home</h4>
            </Nav.Link>
            <Nav.Link href="#stack">
              <h4 className="linkText text-center text-section-title">Stack</h4>
            </Nav.Link>
            <Nav.Link href="#career">
              <h4 className="linkText text-center text-section-title">
                Career
              </h4>
            </Nav.Link>
            {/* <Nav.Link href="#education">
              <h4 className="linkText text-center text-section-title">
                Education
              </h4>
            </Nav.Link> */}
            <Nav.Link href="#contacts">
              <h4 className="linkText text-center text-section-title">
                Contacts
              </h4>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
