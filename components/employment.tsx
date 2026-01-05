import React from "react";
import Container from "react-bootstrap/Container";
import { employment } from "../data/employment"; // Removed otherEmployment as it's not used here anymore
import { Card, Row, Col } from "react-bootstrap"; // Removed Figure, CardGroup, Badge as they might not be needed
import { experienceSummary } from "../data/summary";
import Image from "next/image";

// New component for featured companies (IBM, PwC, BlueCloud)
function FeaturedCompanies() {
  const featured = employment.filter(item =>
    item.name === "IBM" || item.name === "PwC" || item.name === "BlueCloud"
  ).sort((a, b) => b.id - a.id); // Sort by id descending for newer first

  return (
    <Container className="my-5">
      {featured.map((item) => (
        <Card key={item.id} bg="card" text="white" className="mb-4">
          <Card.Body>
            <Row className="align-items-center">
              <Col xs={12} md={2} className="text-center">
                {item.icon && (
                  <Image
                    src={`/${item.icon}`}
                    alt={item.name}
                    width={80} // Larger icon for featured companies
                    height={80}
                    className="mb-3 mb-md-0"
                  />
                )}
              </Col>
              <Col xs={12} md={10}>
                <Card.Title className="mb-1">
                  {item.name} - {item.title.join(", ")}
                </Card.Title>
                <Card.Text>{item.text}</Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

// New component for other companies (single row, logo and title only)
function OtherCompanies() {
  const others = employment.filter(item =>
    item.name !== "IBM" && item.name !== "PwC" && item.name !== "BlueCloud"
  ).sort((a, b) => b.id - a.id); // Sort by id descending for newer first

  return (
    <Container className="my-5">
      <Row className="justify-content-center g-2"> {/* Changed g-4 to g-2 */}
        {others.map((item) => (
          <Col key={item.id} xs={4} md={2} className="text-center d-flex flex-column align-items-center"> {/* Changed xs={6} md={3} to xs={4} md={2} */}
            {item.icon && (
              <Image
                src={`/${item.icon}`}
                alt={item.name || item.industry}
                width={48} // Smaller icon for other companies
                height={48}
                className="mb-2"
              />
            )}
            <div className="text-white text-nowrap" style={{ fontSize: "0.8em" }}> {/* Changed font-size from 0.9em to 0.8em */}
              {item.title.join(", ")}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}


// New component to combine both lists (formerly CompanyListSummary)
function EmploymentSummary() {
  return (
    <>
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <h2 className="section-title mb-4">Work History</h2>
        </Col>
      </Row>
      <Row className="justify-content-center"> {/* Added Row for centering and width */}
        <Col xs={12} md={8} className="mx-auto"> {/* Centered and 2/3 width */}
          <FeaturedCompanies />
        </Col>
      </Row>
      <OtherCompanies />
    </>
  );
}


// New component for experience highlights
function ExperienceHighlights() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <h2 className="section-title mb-4">Highlights</h2>
          <ul>
            {experienceSummary.map((highlight, index) => (
              <li key={index} className="mb-2">
                <p>{highlight}</p>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}


// Main CareerSection component
export default function CareerSection() {
  return (
    <Container fluid className="d-flex flex-column justify-content-center page-container">
      <Row className="justify-content-center" style={{ marginTop: "6rem" }}>
        <Col className="justify-content-center" xs={12} md={10}>
          <h1 className="section-title">My Career</h1>
        </Col>
      </Row>

      <ExperienceHighlights />
      <EmploymentSummary /> {/* Using the new combined summary component */}

      {/* Removed the detailed employment cards section */}
    </Container>
  );
}