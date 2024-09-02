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
      style={{ paddingTop: "8vh" }}
    >
      <Row className="justify-content-center">
        <Col xs={0} md={3}>
          <Figure className="text-center">
            <Figure.Image src={"me.png"} />
          </Figure>
        </Col>
        <Col xs={12} md={5} >

          <h1 className="text-center">
            {myName}
          </h1>



          <h3 className="text-center" style={{ color: "grey", marginBottom: "3rem" }}>{"I am"}</h3>

          <Container id="experience-type" className="justify-content-center">
            <span id="experience-type-span" className="square border border-primary bg-dark rounded-pill" >Machine Learning Engineer</span>
          </Container>
          <Container id="experience-type" className="justify-content-center">
            <span id="experience-type-span" className="square border border-primary bg-dark rounded-pill" >Data Scientist</span>
          </Container>

          <Container id="experience-type" className="justify-content-center">
            <span id="experience-type-span" className="square border border-primary bg-dark rounded-pill" >Data Engineer</span>
          </Container>

          <h3 className="text-center" style={{ color: "grey", marginTop: "3rem" }}>{"with Master's Degree in Theoretical Physics."}</h3>

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
