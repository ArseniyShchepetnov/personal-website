import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const myName = <h1 style={{ display: "inline" }}>Arseniy Shchepetnov</h1>;
const myTitle = (
  <h3 style={{ display: "inline" }}>
    Data Scientist | ML Engineer | Team Leader
  </h3>
);

export default function Home() {
  return (
    <Container className="d-flex flex-column justify-content-center page-container">
      <Row>
        <Col>
          <Row className="d-flex flex-column">
            <div>Hi! My name is {myName}</div>
            <div>and I am a {myTitle}</div>
          </Row>
          <Row style={{ marginTop: "1rem" }}>
            <p>
              I am not a Frontend developer but I created this website by myself
              with JavaScript and React for better connection experience.
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
