import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

const summaries = [
  {
    _id: 1,
    icon: "data.png",
    title: "Data Science",
    text: "6+ years of building data-driven solutions and processes.",
  },
  {
    _id: 2,
    icon: "nn.png",
    title: "Machine Learning",
    text: "Advanced skills with modern algorithms including boosting, neural and bayesian networks.",
  },
  {
    _id: 3,
    icon: "data.png",
    title: "Development",
    text: "Developer level programming and system design with diverse technical stack.",
  },
  {
    _id: 4,
    icon: "data.png",
    title: "Team Leadership",
    text: "Team leadership, hiring and management experience.",
  },
];

function SummaryCard(props: { index: number }) {
  return (
    <Card className="text-bg-card" style={{ width: "24rem", height: "13rem" }}>
      <Card.Img
        src={summaries[props.index].icon}
        style={{ width: "3rem", margin: "1rem" }}
      ></Card.Img>
      <Card.Body>
        <Card.Title>{summaries[props.index].title}</Card.Title>
        <Card.Text>{summaries[props.index].text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default function SummariesCarousel() {
  return (
    <Stack direction="vertical" gap={3}>
      <SummaryCard index={0} />
      <SummaryCard index={1} />
      <SummaryCard index={2} />
      <SummaryCard index={3} />
    </Stack>
  );
}
