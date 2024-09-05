import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { Row, Col } from "react-bootstrap";
import {
  techStackItems,
  otherTechStackItems,
  mathTechStackItems,
} from "../data/techstack";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Card from "react-bootstrap/Card";
import { Figure } from "react-bootstrap";

function techStackItem(item: {
  id: number;
  name: string;
  src: string;
  description: string;
  url: string;
}, height: string) {
  const tooltip = (
    <Tooltip id="tooltip">
      <strong>{item.name}</strong>
      <p>{item.description}</p>
    </Tooltip>
  );
  return (
    <a href={item.url}>
      {/* <OverlayTrigger trigger="focus" placement="right" overlay={tooltip}>
        <Card bg="light">
          <Card.Img variant="top" src={item.src} />
          <Card.Body>
            <Card.Text>
              {item.name}
            </Card.Text>
          </Card.Body>
        </Card>
      </OverlayTrigger> */}
      <OverlayTrigger trigger="focus" placement="right" overlay={tooltip}>
        <Figure className="flex flex-col justify-content-center">
          <Figure.Image fluid style={{ height: height, width: height }} src={item.src} alt={item.description} />
          <Figure.Caption >
            <h5 className="tech-stack-item-caption">{item.name}</h5>
          </Figure.Caption>
        </Figure>
      </OverlayTrigger>
    </a >
  );
}

function techStackGrid(
  array: {
    id: number;
    name: string;
    src: string;
    description: string;
    url: string;
  }[]
) {
  return (
    <Row className="justify-content-center">

      {array.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } else if (b.name < a.name) {
          return 1;
        }
        return 0;
      }).map((element) => {
        return (
          <Col xs={3} md={2} key={element.id}>
            {techStackItem(element, "5rem")}
          </Col>
        );
      })}
    </Row>
  );
}


function mlStackGrid(
  array: {
    id: number;
    name: string;
    src: string;
    description: string;
    url: string;
  }[]
) {
  return (
    <Row className="justify-content-center">

      {array.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } else if (b.name < a.name) {
          return 1;
        }
        return 0;
      }).map((element) => {
        return (
          <Col xs={3} md={3} key={element.id} style={{ margin: "1rem" }}>
            {techStackItem(element, "20rem")}
          </Col>
        );
      })}
    </Row>
  );
}

function otherTechStackItemsToGrid(
  array: {
    id: number;
    name: string;
    description: string;
    src: string;
    url: string;
  }[]
) {
  return (
    <Card className="text-bg-card">
      <Card.Body>
        <Row>
          {array.map((element) => {
            const tooltip = (
              <Tooltip id="tooltip">
                <strong>{element.name}</strong>
                <p>{element.description}</p>
              </Tooltip>
            );
            return (
              <Col key={element.id}>
                <a href={element.url}>
                  <OverlayTrigger
                    trigger="focus"
                    placement="right"
                    overlay={tooltip}
                  >
                    <Image fluid src={element.src} alt={element.description} style={{ height: "3rem" }} />
                  </OverlayTrigger>
                </a>
              </Col>
            );
          })}
        </Row>
      </Card.Body>
    </Card>
  );
}

export default function TechStack() {
  return (
    <Container
      className="d-flex flex-column justify-content-center page-container"
      fluid
    >
      <Row className="justify-content-center" style={{ marginTop: "6rem" }}>
        <Col xs={12} md={10}>
          <h1 className="section-title">Technical Stack</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={10} style={{ marginTop: "1rem" }}>
          <h3 className="text-center text-intro" style={{ fontSize: "2rem" }}>
            Development
          </h3>
          <h4 className="text-center" style={{ color: "grey", marginBottom: "3rem" }}>{"These are not the only tools that I use. I continuously develop myself..."}</h4>
          <Card className="text-bg-card d-flex flex-col">
            <Card.Body>{techStackGrid(techStackItems)}</Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center" style={{ marginTop: "1rem" }}>
        <h3 className="text-center text-section-title">Other</h3>
      </Row>
      <Row className="justify-content-center" style={{ marginTop: "1rem" }}>
        <Col xs={12} md={6}>
          {otherTechStackItemsToGrid(otherTechStackItems)}
        </Col>
      </Row>

      <Row className="justify-content-center">


        <Col xs={12} md={8}>
          <h3 className="text-center text-intro" style={{ fontSize: "2rem", marginTop: "3rem" }}>
            Machine Learning
          </h3>
          <h4 className="text-center" style={{ color: "grey", marginBottom: "3rem" }}>{"The most exciting part..."}</h4>
          <Container className="text-bg-card">
            <Row>
              <Col xs={12} md={6}>
                <Figure style={{ margin: "3rem" }}>
                  <Figure.Image src={"ai.png"} />
                </Figure>
              </Col>
              <Col xs={12} md={6}>
                <Container style={{ margin: "3rem" }}>
                  <h2 className="tech-stack-item-caption" style={{ marginTop: "1rem" }}>Large Language Models</h2>
                  <h2 className="tech-stack-item-caption" style={{ marginTop: "1rem" }}>Bayesian Networks</h2>
                  <h2 className="tech-stack-item-caption" style={{ marginTop: "1rem" }}>Digital Signal Processing</h2>
                  <h2 className="tech-stack-item-caption" style={{ marginTop: "1rem" }}>Reinforcement Learning</h2>
                  <h2 className="tech-stack-item-caption" style={{ marginTop: "1rem" }}>Computer Vision</h2>
                  <h2 className="tech-stack-item-caption" style={{ marginTop: "1rem" }} >Tree Ensembles</h2>
                  <h2 className="tech-stack-item-caption" style={{ marginTop: "1rem" }}>Statistics</h2>
                  <h2 className="tech-stack-item-caption" style={{ marginTop: "1rem" }}>...</h2>
                </Container>
              </Col>

            </Row>
          </Container>





        </Col>
        {/* 
        <Col xs={12} md={10} style={{ marginTop: "1rem" }}>
          <h3 className="text-center text-intro" style={{ fontSize: "2rem" }}>
            Development
          </h3>
          <h4 className="text-center" style={{ color: "grey", marginBottom: "3rem" }}>{"These are not the only tools that I use. I continuously develop myself..."}</h4>
          <Card className="text-bg-card d-flex flex-col">
            <Card.Body>{mlStackGrid(mathTechStackItems)}</Card.Body>
          </Card>
        </Col> */}

      </Row>

    </Container>
  );
}
