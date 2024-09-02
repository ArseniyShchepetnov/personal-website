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
}) {
  const tooltip = (
    <Tooltip id="tooltip">
      <strong>{item.name}</strong>
      <p>{item.description}</p>
    </Tooltip>
  );
  return (
    <a href={item.url}>
      <OverlayTrigger trigger="focus" placement="right" overlay={tooltip}>
        <Figure >
          <Figure.Image fluid style={{ height: "5rem" }} src={item.src} alt={item.description} />
          <Figure.Caption className="text-center">
            <h5 className="tech-stack-item-caption">{item.name}</h5>
          </Figure.Caption>
        </Figure>
      </OverlayTrigger>
    </a>
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
      {array.map((element) => {
        return (
          <Col xs={3} md={1} key={element.id} style={{ margin: "1rem" }}>
            {techStackItem(element)}
          </Col>
        );
      })}
    </Row>
  );
}

function mathStackGrid(
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
      {array.map((element) => {
        return (
          <Col xs={3} md={6} key={element.id}>
            {<h4>{element.name}</h4>}
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
        <Col xs={12} md={6}>
          <h3 className="text-center text-intro" style={{ fontSize: "2rem", marginTop: "3rem" }}>
            Machine Learning
          </h3>
          <h4 className="text-center" style={{ color: "grey", marginBottom: "3rem" }}>{"The most exciting part..."}</h4>
          <Card className="text-bg-card d-flex flex-col">
            <Card.Body>
              <h3 class="text-center tech-stack-item-caption">Large Language Models</h3>
              <h3 class="text-center tech-stack-item-caption">Bayesian Networks</h3>
              <h3 class="text-center tech-stack-item-caption">Digital Signal Processing</h3>
              <h3 class="text-center tech-stack-item-caption">Reinforcement Learning</h3>
              <h3 class="text-center tech-stack-item-caption">Computer Vision</h3>
              <h3 class="text-center tech-stack-item-caption">Tree Ensembles</h3>
            </Card.Body>
          </Card>

        </Col>

      </Row>

    </Container>
  );
}
