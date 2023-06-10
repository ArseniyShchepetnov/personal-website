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
      <Card.Title className="text-center">{item.degree}</Card.Title>
      <Card.Body className="text-center">{item.specialization}</Card.Body>
      <Card.Footer className="text-center">{item.dates}</Card.Footer>
    </Card>
  );
}

function UniversityList(universities: any[]) {
  return (
    <Container className="d-flex flex-col">
      {universities.map((item) => {
        return (
          <Col style={{ margin: "1rem" }}>
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
    </Container>
  );
}

export default function Education() {
  return (
    <Container className="d-flex flex-column page-container">
      <Row style={{ marginBottom: "1rem", marginTop: "6rem" }}>
        <h1>Education</h1>
      </Row>
      <Row>{UniversityList(educationUniversity)}</Row>
    </Container>
  );
}
