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
        <Figure>
          <Figure.Image fluid src={item.src} alt={item.description} />
          <Figure.Caption className="text-center fw-bold">
            {item.name}
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
          <Col xs={3} md={3} key={element.id}>
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
          <Col xs={3} md={4} key={element.id}>
            {techStackItem(element)}
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
                    <Image fluid src={element.src} alt={element.description} />
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
          <h1 className="text-section-title">Technical Stack</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={5} style={{ marginTop: "1rem" }}>
          <h3 className="text-center text-intro" style={{ fontSize: "2rem" }}>
            DEV
          </h3>
          <Card className="text-bg-card d-flex flex-col">
            <Card.Body>{techStackGrid(techStackItems)}</Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={5} style={{ marginTop: "1rem" }}>
          <h3 className="text-center text-intro" style={{ fontSize: "2rem" }}>
            ML
          </h3>
          <Card className="text-bg-card d-flex flex-col">
            <Card.Body>{mathStackGrid(mathTechStackItems)}</Card.Body>
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
    </Container>
  );
}
