import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col, Card } from "react-bootstrap";
import { educationUniversity, additionalEducation } from "../data/education";

function UniversityCard(item: {
  degree: string;
  specialization: string;
  university: string;
  dates: string;
  url: string;
}) {
  return (
    <Card bg="card">
      <Card.Header className="text-center">{item.university}</Card.Header>
      <Card.Title className="text-center" style={{ margin: "1rem" }}>
        {item.degree}
      </Card.Title>
      <Card.Body className="text-center">{item.specialization}</Card.Body>
      <Card.Footer className="text-center">{item.dates}</Card.Footer>
    </Card>
  );
}

function UniversityList(
  universities: {
    id: number;
    degree: string;
    specialization: string;
    university: string;
    dates: string;
    url: string;
  }[]
) {
  return (
    <Row className="justify-content-center">
      {universities.map((item) => {
        return (
          <Col xs={12} md={3} key={item.id} style={{ margin: "1rem" }}>
            <UniversityCard
              degree={item.degree}
              specialization={item.specialization}
              university={item.university}
              dates={item.dates}
              url={item.url}
            ></UniversityCard>
          </Col>
        );
      })}
    </Row>
  );
}

export default function Education() {
  return (
    <Container
      className="d-flex flex-column justify-content-center page-container"
      fluid
    >
      <Row className="justify-content-center" style={{ marginTop: "6rem" }}>
        <Col xs={12} md={10}>
          <h1 className="text-section-title">Education</h1>
        </Col>
      </Row>
      {UniversityList(educationUniversity)}
    </Container>
  );
}
