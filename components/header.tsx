import React from "react";

import { SocialIcon } from "react-social-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col } from "react-bootstrap";

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
      bg="menu"
      variant="dark"
      style={{ height: "8vh" }}
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ backgroundColor: "#1b1f47", borderRadius: "1rem" }}
        >
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <h4 className="linkText text-center text-section-title">Home</h4>
            </Nav.Link>
            <Nav.Link href="#stack">
              <h4 className="linkText text-center text-section-title">Stack</h4>
            </Nav.Link>
            <Nav.Link href="#experience">
              <h4 className="linkText text-center text-section-title">
                Experience
              </h4>
            </Nav.Link>
            <Nav.Link href="#education">
              <h4 className="linkText text-center text-section-title">
                Education
              </h4>
            </Nav.Link>
          </Nav>
          <Navbar.Text>
            {/* <div className="text-intro">a.shchepetnov@gmail.com</div> */}
            <ul className="social-media-list text-center d-flex flex-row justify-content-center ">
              <div
                className="social-handle-item d-flex justify-content-center align-items-center"
                style={{ paddingLeft: "0.5rem" }}
              >
                <div className="text-center text-intro">
                  a.shchepetnov@gmail.com
                </div>
              </div>
              <div
                className="social-handle-item"
                style={{ paddingLeft: "0.5rem" }}
              >
                <SocialIcon url={socialMediaLinks.github} bgColor="white" />
              </div>
              <div
                className="social-handle-item"
                style={{ paddingLeft: "0.5rem" }}
              >
                <SocialIcon url={socialMediaLinks.linkedin} />
              </div>
              <div
                className="social-handle-item"
                style={{ paddingLeft: "0.5rem" }}
              >
                <SocialIcon url={socialMediaLinks.medium} bgColor="white" />
              </div>
            </ul>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
