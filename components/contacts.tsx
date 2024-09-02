import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";


const socialMediaLinks = {
    github: "https://github.com/arseniyshchepetnov",
    linkedin: "https://www.linkedin.com/in/arseniy-shchepetnov/",
    medium: "https://medium.com/@a.shchepetnov",
    coursera: "https://www.coursera.org/user/18f9c12413a21ae354c0c5f94bc125c9"
};

function SocialNetworks() {
    return (<ul className="social-media-list d-flex flex-row justify-content-center ">
        <div
            className="social-handle-item"
            style={{ marginRight: "0.5rem" }}
        >
            <SocialIcon url={socialMediaLinks.github} bgColor="white" />
        </div>
        <div
            className="social-handle-item"
            style={{ marginRight: "0.5rem" }}
        >
            <SocialIcon url={socialMediaLinks.linkedin} />
        </div>
        <div
            className="social-handle-item"
            style={{ marginRight: "0.5rem" }}
        >
            <SocialIcon url={socialMediaLinks.medium} bgColor="white" />
        </div>

        <div>
            <SocialIcon url={socialMediaLinks.coursera} bgColor="white" />
        </div>
    </ul>)
}

export default function Contacts() {
    return (<Container
        className="d-flex flex-column justify-content-center page-container"
        fluid
    >
        <Row className="justify-content-center" style={{ marginTop: "6rem" }}>
            <Col className="justify-content-center" xs={12} md={10}>
                <h1 className="section-title">Contacts</h1>
            </Col>
        </Row>
        <Row className="justify-content-center">

            <Col xs={12} md={10} >
                <h4 className="text-center" style={{ color: "#B3D0EF", marginTop: "3rem", marginBottom: "2rem" }}>Email:</h4>
                <p className="text-center">a.shchepetnov@gmail.com</p>
                <h4 className="text-center" style={{ color: "#B3D0EF", marginTop: "3rem", marginBottom: "2rem" }}>Social Networks:</h4>{SocialNetworks()}
            </Col>
        </Row>

    </Container>)
}