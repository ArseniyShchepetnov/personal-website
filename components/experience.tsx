import React from "react";
import { Carousel } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { employment, otherEmployment } from "../data/employment";
import { EmploymentCard, OtherEmploymentCard } from "./employment";

function CarouselExperience(
  array: { id: number; title: string; text: string; href: string }[]
) {
  return (
    <Carousel
      className="d-flex flex-column justify-content-center"
      interval={5000}
      fade
    >
      {array.map((element) => {
        return (
          <Carousel.Item key={element.id}>
            <OtherEmploymentCard
              title={element.title}
              text={element.text}
              href={element.href}
            ></OtherEmploymentCard>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default function EmploymentHistory() {
  return (
    <Container
      className="text-bg-dark d-flex flex-column justify-content-center"
      fluid
    >
      <Row className="justify-content-center" style={{ marginTop: "6rem" }}>
        <Col xs={12} md={10}>
          <h1 className="text-section-title">Experience</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          {employment.map((element) => {
            return (
              <EmploymentCard
                icon={element.icon}
                title={element.title}
                industry={element.industry}
                text={element.text}
                dates={element.dates}
                href={element.href}
                key={element.id}
              ></EmploymentCard>
            );
          })}
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={10}>
          <hr
            style={{
              background: "card",
              color: "card",
            }}
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <h4 className="text-center text-section-title">Other experience:</h4>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          {CarouselExperience(otherEmployment)}
        </Col>
      </Row>
    </Container>
  );
}
