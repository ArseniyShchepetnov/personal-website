import React from "react";
import { Carousel } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { employment, otherEmployment } from "../data/employment";
import { EmploymentCard, OtherEmploymentCard } from "./employment";

function CarouselExperience(array: any[]) {
  return (
    <Carousel
      className="d-flex flex-column justify-content-center"
      interval={5000}
      fade
    >
      {array.map((element) => {
        return (
          <Carousel.Item
            style={{
              paddingBottom: "3rem",
              paddingLeft: "5rem",
              paddingRight: "5rem",
            }}
          >
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
      <Row style={{ marginTop: "6rem" }}>
        <h1>Experience</h1>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          {employment.map((element) => {
            return (
              <EmploymentCard
                icon={element.icon}
                title={element.title}
                text={element.text}
                dates={element.dates}
                href={element.href}
              ></EmploymentCard>
            );
          })}
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={8}>
          <hr
            style={{
              background: "card",
              color: "card",
            }}
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <h4 className="text-center">Other experience:</h4>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          {CarouselExperience(otherEmployment)}
        </Col>
      </Row>
    </Container>
  );
}
