import React from "react";
import Container from "react-bootstrap/Container";
import { Figure, Card, Row, Col } from "react-bootstrap";

function EmploymentCard(employment: {
  icon: string;
  title: string;
  text: string;
  dates: string;
  href: string;
}) {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <hr
            style={{
              background: "card",
              color: "card",
            }}
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={3} md={2}>
          <a href={employment.href}>
            <Figure className="text-center">
              <Figure.Image src={employment.icon} />
              <Figure.Caption className="text-center text-white">
                {employment.dates}
              </Figure.Caption>
            </Figure>
          </a>
        </Col>
        <Col xs={9} md={9}>
          <Card bg="card">
            <Card.Title style={{ marginTop: "1rem" }}>
              {employment.title}
            </Card.Title>
            <Card.Body>{employment.text}</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

function OtherEmploymentCard(employment: {
  title: string;
  text: string;
  href: string;
}) {
  return (
    <Card bg="card">
      <Card.Title className="text-center">{employment.title}</Card.Title>
      <Card.Body className="text-center">{employment.text}</Card.Body>
    </Card>
  );
}

export { OtherEmploymentCard, EmploymentCard };
