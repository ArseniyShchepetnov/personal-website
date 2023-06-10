import React from "react";
import Container from "react-bootstrap/Container";
import { Figure, Card, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { employment, otherEmployment } from "../data/employment";
import CarouselExperience from "./experience";

function EmploymentCard(props: {
  icon: string;
  title: string;
  text: string;
  dates: string;
  href: string;
}) {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={12}>
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
        <Col xs={2}>
          <a href={props.href}>
            <Figure className="text-center" style={{ width: "10rem" }}>
              <Figure.Image src={props.icon} style={{ width: "6rem" }} />
              <Figure.Caption className="text-center text-white">
                {props.dates}
              </Figure.Caption>
            </Figure>
          </a>
        </Col>
        <Col xs={8}>
          <Card bg="card">
            <Card.Title style={{ margin: "auto" }}>{props.title}</Card.Title>
            <Card.Body>{props.text}</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

function OtherEmploymentCard(props: {
  title: string;
  text: string;
  href: string;
}) {
  return (
    <Card bg="card">
      <Card.Title className="text-center">{props.title}</Card.Title>
      <Card.Body className="text-center">{props.text}</Card.Body>
    </Card>
  );
}

export { OtherEmploymentCard, EmploymentCard };
