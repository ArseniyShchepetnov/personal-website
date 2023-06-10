import React from "react";

import { SocialIcon } from "react-social-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const socialMediaLinks = {
  github: "https://github.com/arseniyshchepetnov",
  linkedin: "https://www.linkedin.com/in/arseniy-shchepetnov/",
};

export default function Header() {
  return (
    <Navbar fixed="top" bg="menu" style={{ height: "8vh" }}>
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <h4 className="linkText">Home</h4>
            </Nav.Link>
            <Nav.Link href="#stack">
              <h4 className="linkText">Stack</h4>
            </Nav.Link>
            <Nav.Link href="#experience">
              <h4 className="linkText">Experience</h4>
            </Nav.Link>
            <Nav.Link href="#education">
              <h4 className="linkText">Education</h4>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div>a.shchepetnov@gmail.com</div>
        <div className="social-media-box">
          <ul className="social-media-list">
            <div className="social-handle-item">
              <SocialIcon url={socialMediaLinks.github} bgColor="white" />
            </div>
            <div className="social-handle-item">
              <SocialIcon url={socialMediaLinks.linkedin} />
            </div>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
}
