import React from "react";
import Container from "react-bootstrap/Container";
import { Figure, Card, Row, Col } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";

function EmploymentCard(employment: {
  icon: string;
  title: string;
  industry: string;
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
            <Figure className="text-center" style={{ margin: "1rem" }}>
              <Figure.Image src={employment.icon} />
              <Figure.Caption
                className="text-center text-section-title"
                style={{ fontSize: "1rem" }}
              >
                {employment.dates}
              </Figure.Caption>
            </Figure>
          </a>
        </Col>
        <Col xs={9} md={9}>
          <Card bg="card">
            <Card.Title style={{ margin: "1rem" }}>
              {employment.title}{" "}
              <Badge bg="primary">{employment.industry}</Badge>
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
    <Card bg="card" style={{ marginLeft: "2rem", marginRight: "2rem" }}>
      <Card.Title className="text-center" style={{ margin: "1rem" }}>
        {employment.title}
      </Card.Title>
      <Card.Body className="text-center">{employment.text}</Card.Body>
    </Card>
  );
}

export { OtherEmploymentCard, EmploymentCard };
