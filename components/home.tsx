import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";

const myName = (
  <div style={{ display: "inline", fontSize: "3rem" }}>Arseniy Shchepetnov</div>
);

const myTitle = (
  <div style={{ display: "inline", fontSize: "2rem" }}>AI Developer and Researcher</div>
);

export default function Home() {
  return (
    <Container
      className="text-intro d-flex flex-column justify-content-center page-container"
      fluid
      style={{ minHeight: "100vh" }} // Set minimum height to 100vh
    >
      <Row className="justify-content-center">
        {/* Removed the Figure component displaying me.png */}
        <Col xs={12} md={8} > {/* Adjusted md size from 5 to 8 */}

          <h1 className="text-center">
            {myName}
          </h1>



          <h3 className="text-center" style={{ color: "grey", marginBottom: "3rem" }}>{"I am"}</h3>

          <Container className="d-flex flex-wrap justify-content-center gap-2 mb-3"> {/* Added flex-wrap and gap for spacing */}
            <span style={{ fontSize: "1.2rem" }}>Data Scientist</span>
            <span style={{ fontSize: "1.2rem" }}>Data Engineer</span>
            <span style={{ fontSize: "1.2rem" }}>Machine Learning Engineer</span>
            <span style={{ fontSize: "1.2rem" }}>AI Engineer</span>
          </Container>

        </Col>
      </Row >
      {/* <Row className="justify-content-center" style={{ margin: "1rem" }}>
        <Col xs={12} md={10}>
          <div style={{ fontSize: "2rem" }}>Hi! My name is {myName}</div>
          <div style={{ fontSize: "2rem" }}>I am a {myTitle}</div>
        </Col>
      </Row>
      <Row className="justify-content-center" style={{ margin: "1rem" }}>
        <Col xs={12} md={10}>
          <p style={{ fontSize: "2rem" }}>
            I develop end-to-end / fullstack machine learning solutions and
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
      </Row> */}
    </Container >
  );
}