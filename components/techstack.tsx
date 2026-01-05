import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image"; // Use Image directly
import { Row, Col, Badge } from "react-bootstrap"; // Added Badge
import {
  techStackItems,
  otherTechStackItems,
  // Removed mathTechStackItems
} from "../data/techstack";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Card from "react-bootstrap/Card";

// Unified techStackItem for rendering individual tech items
function techStackItem(item: {
  id: number;
  name: string;
  src: string;
  description: string;
  url: string;
  category: string; // Added category to item type
}, height: string) {
  const tooltip = (
    <Tooltip id="tooltip">
      <strong>{item.name}</strong>
      <p>{item.description}</p>
    </Tooltip>
  );
  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className="d-flex justify-content-center">
      <OverlayTrigger trigger="focus" placement="right" overlay={tooltip}>
        <Image fluid
          style={{
            maxHeight: '4rem', // Keep original height for consistent sizing
            maxWidth: '4rem',  // Keep original width for consistent sizing
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            backgroundColor: 'transparent', // Changed to transparent
            padding: '0.5rem', // Add some padding around the image if it was tight
            borderRadius: '0.25rem', // Optional: slight rounding for the image itself
          }}
          src={`/${item.src}`} // Ensure correct path for images
          alt={item.name} // Use item.name for alt text
        />
      </OverlayTrigger>
    </a>
  );
}

export default function TechStack() {
  // Combine all tech stack items and add default category if missing
  const allTechStackItems = [
    ...techStackItems,
    ...otherTechStackItems,
  ].map(item => ({ ...item, category: item.category || "Miscellaneous" })); // Ensure all items have a category

  return (
    <Container
      className="d-flex flex-column justify-content-center page-container"
      fluid
    >
      <Row className="justify-content-center" style={{ marginTop: "6rem" }}>
        <Col xs={12} md={10}>
          <h1 className="section-title">Technical Stack</h1>
        </Col>
      </Row>
      {/* Removed the word cloud section */}

      <Col xs={12} md={8} className="mx-auto" style={{ marginTop: "1rem" }}> {/* Changed md={10} to md={8} */}
        <Card text="white" className="d-flex flex-col"> {/* Removed bg="card" */}
          <Card.Body>
            <Row className="justify-content-evenly g-2"> {/* Changed justify-content-start to justify-content-evenly */}
              {allTechStackItems
                .sort((a, b) => a.name.localeCompare(b.name)) // Sort items alphabetically
                .map(element => (
                  <Col xs={4} sm={3} md={2} lg={1} key={element.id} className="text-center d-flex flex-column align-items-center mb-3">
                    {techStackItem(element, "4rem")} {/* Adjusted height for better fit */}
                  </Col>
                ))}
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
}