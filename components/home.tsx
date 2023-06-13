import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const myName = (
  <div style={{ display: "inline", fontSize: "3rem" }}>Arseniy</div>
);
const myTitle = (
  <div style={{ display: "inline", fontSize: "3rem" }}>
    Data Scientist | ML Engineer | Team Leader
  </div>
);

export default function Home() {
  return (
    <Container
      className="text-intro d-flex flex-column justify-content-center page-container"
      fluid
      style={{ paddingTop: "8vh" }}
    >
      <Row className="justify-content-center" style={{ margin: "1rem" }}>
        <Col xs={12} md={10}>
          <div style={{ fontSize: "2rem" }}>Hi! My name is {myName}</div>
          <div style={{ fontSize: "2rem" }}>I am a {myTitle}</div>
        </Col>
      </Row>
      <Row className="justify-content-center" style={{ margin: "1rem" }}>
        <Col xs={12} md={10}>
          <p style={{ fontSize: "2rem" }}>
            I develop end-to-end data driven and machine learning solutions and
            components.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center" style={{ margin: "1rem" }}>
        <Col xs={12} md={10}>
          <p style={{ fontSize: "1rem" }}>
            I am not a Frontend developer but I've created this website by
            myself with React for better connection experience.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
