import React from "react";
import Container from "react-bootstrap/Container";
import { employment, otherEmployment } from "../data/employment";
import { Figure, Card, CardGroup, Row, Col } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";

function EmploymentCard(item: {
  icon: string;
  name: string;
  title: string[];
  industry: string;
  text: string;
  dates: string;
  href: string;
}) {
  return (
    <Card className="flex-fill" bg="card" text="white"  >
      <Card.Header >
        <Row className="justify-content-md-center">
          <Col xs={12} md={3} className="justify-content-center" >
            <a href={item.href}>
              <Figure style={{ margin: "1rem" }}>
                <Figure.Image src={item.icon} />
              </Figure>
            </a>
          </Col>
          <Col>
            <h5 style={{ marginTop: "2rem" }}>{item.dates}</h5>
            {item.title.map((name) => { return (<h2 class="title-names">{name}</h2>); })}
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>{item.text}</Card.Body>
    </Card >

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
      <Card.Body className="text-center" style={{ margin: "2rem" }}>
        {employment.text}
      </Card.Body>
    </Card>
  );
}

function Career() {
  return <Container
    className="d-flex flex-column justify-content-center page-container"
    fluid
  >
    <Row className="justify-content-center" style={{ marginTop: "6rem" }}>
      <Col className="justify-content-center" xs={12} md={10}>
        <h1 className="section-title">My Career</h1>
      </Col>
    </Row>
    <Row style={{ marginLeft: "5rem", marginRight: "5rem" }}>
      <CardGroup>
        <Row xs={1} md={2} >
          {employment.map((item) => (
            <Col key={item.id} style={{ marginTop: "1rem" }} className="d-flex align-items-stretch">
              {EmploymentCard(item)}
            </Col>
          ))}

        </Row>
      </CardGroup>
    </Row>
  </Container>
}

export { OtherEmploymentCard, EmploymentCard, Career };
