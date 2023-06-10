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
import SummariesCarousel from "./summaries";
import Card from "react-bootstrap/Card";
import { Figure } from "react-bootstrap";

function mapTechStackToGrid(
  array: any[],
  nCols: number = 5,
  imgSize: string = "5rem"
) {
  return [...new Array(Math.ceil(array.length / nCols))].map((_, row) => {
    return (
      <Row className="justify-content-md-center">
        {[...new Array(Math.min(array.length - row * nCols, nCols))].map(
          (_, col) => {
            const element = array[row * nCols + col];
            const tooltip = (
              <Tooltip id="tooltip">
                <strong>{element.name}</strong>
                <p>{element.description}</p>
              </Tooltip>
            );
            return (
              <Col
                className="justify-content-md-center"
                style={{ margin: "1rem" }}
              >
                <a href={element.url}>
                  <OverlayTrigger
                    trigger="focus"
                    placement="right"
                    overlay={tooltip}
                  >
                    <Figure className="justify-content-md-center">
                      <Figure.Image
                        fluid
                        src={element.src}
                        alt={element.description}
                        style={{ width: imgSize }}
                      />
                      <Figure.Caption className="text-center">
                        {element.name}
                      </Figure.Caption>
                    </Figure>
                  </OverlayTrigger>
                </a>
              </Col>
            );
          }
        )}{" "}
      </Row>
    );
  });
}

function otherTechStackItemsToGrid(array: any[], imgSize: string = "5rem") {
  return (
    <Card className="text-bg-card d-flex flex-col">
      <Card.Body className="d-flex flex-row">
        {array.map((element) => {
          const tooltip = (
            <Tooltip id="tooltip">
              <strong>{element.name}</strong>
              <p>{element.description}</p>
            </Tooltip>
          );
          return (
            <Col
              className="justify-content-md-center"
              style={{ margin: "1rem" }}
            >
              <a href={element.url}>
                <OverlayTrigger
                  trigger="focus"
                  placement="right"
                  overlay={tooltip}
                >
                  <Image
                    fluid
                    src={element.src}
                    alt={element.description}
                    style={{ width: imgSize }}
                  />
                </OverlayTrigger>
              </a>
            </Col>
          );
        })}
      </Card.Body>
    </Card>
  );
}

export default function TechStack() {
  return (
    <Container className="d-flex flex-column justify-content-center page-container">
      <Row style={{ marginBottom: "1rem", marginTop: "3rem" }}>
        <h1>Technical Stack</h1>
      </Row>
      <Row ys={6}>
        <Col>
          <Card className="text-bg-card d-flex flex-row">
            <Card.Body>{mapTechStackToGrid(techStackItems)}</Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-bg-card d-flex flex-row">
            <Card.Body>
              {mapTechStackToGrid(mathTechStackItems, 3, "8rem")}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "6rem" }}>
        <h4 className="text-center">other</h4>
      </Row>
      <Row style={{ margin: "1rem" }}>
        <Col xs={3}></Col>
        <Col>{otherTechStackItemsToGrid(otherTechStackItems)}</Col>
        <Col xs={3}></Col>
      </Row>
    </Container>
  );
}
