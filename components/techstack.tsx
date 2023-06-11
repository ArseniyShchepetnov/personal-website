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
  id_: number;
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
          <Figure.Caption className="text-center">{item.name}</Figure.Caption>
        </Figure>
      </OverlayTrigger>
    </a>
  );
}

function mapTechStackToGrid(
  array: {
    id_: number;
    name: string;
    src: string;
    description: string;
    url: string;
  }[]
) {
  return (
    //  <Card className="text-bg-card d-flex flex-row">
    <Row className="justify-content-center">
      {array.map((element) => {
        return (
          <Col xs={3} md={3}>
            {techStackItem(element)}
          </Col>
        );
      })}
    </Row>
  );
}

function otherTechStackItemsToGrid(
  array: { name: string; description: string; src: string; url: string }[]
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
              <Col>
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
    <Container className="d-flex flex-column justify-content-center " fluid>
      <Row style={{ marginTop: "6rem" }}>
        <h1>Technical Stack</h1>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={5} style={{ marginTop: "1rem" }}>
          <Card className="text-bg-card d-flex flex-col">
            <Card.Title>Development</Card.Title>
            <Card.Body>{mapTechStackToGrid(techStackItems)}</Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={5} style={{ marginTop: "1rem" }}>
          <Card className="text-bg-card d-flex flex-col">
            <Card.Title>Mathematics</Card.Title>
            <Card.Body>{mapTechStackToGrid(mathTechStackItems)}</Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center" style={{ marginTop: "1rem" }}>
        <h4 className="text-center">other</h4>
      </Row>
      <Row className="justify-content-center" style={{ marginTop: "1rem" }}>
        <Col xs={12} md={6}>
          {otherTechStackItemsToGrid(otherTechStackItems)}
        </Col>
      </Row>
    </Container>
  );
}
