import React from "react";
import { Carousel } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { otherEmployment } from "../data/employment";
import CareerSection from "./employment"; // Import the default export

function CarouselExperience(
  array: { id: number; title: string; text: string; href: string }[]
) {
  // This component now needs to render the 'otherEmployment' data in a way that doesn't rely on `OtherEmploymentCard`
  // Since `OtherEmploymentCard` is gone, I will simplify this to just display the title and text within the carousel.
  // If a more specific display is needed, a new sub-component would be required.
  return (
    <Carousel
      className="d-flex flex-column justify-content-center"
      interval={5000}
      fade
    >
      {array.map((element) => {
        return (
          <Carousel.Item key={element.id}>
            <div className="text-center p-3">
              <h5>{element.title}</h5>
              <p>{element.text}</p>
              {element.href && <a href={element.href} target="_blank" rel="noopener noreferrer">Learn More</a>}
            </div>
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

      {/* Render the entire CareerSection component from employment.tsx */}
      <CareerSection />

      <Row className="justify-content-center mt-5">
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