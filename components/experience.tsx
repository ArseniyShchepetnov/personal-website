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
              paddingBottom: "2rem",
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
      className="page-container text-bg-dark d-flex flex-column justify-content-center"
      fluid
    >
      <Container style={{ marginTop: "3rem" }}>
        <Row>
          <h1>Experience</h1>
        </Row>
        <Row ys={5} style={{ marginBottom: "1rem" }}>
          <Col></Col>
          <Col xs={10}>
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
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={10}>
            <hr
              style={{
                background: "card",
                color: "card",
              }}
            />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <h4 className="text-center">Other experience:</h4>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={8}>{CarouselExperience(otherEmployment)}</Col>
          <Col></Col>
        </Row>
      </Container>
    </Container>
  );
}
