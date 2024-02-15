import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import barbite from "../../Assets/Projects/barbite.png";
import netflixgpt from "../../Assets/Projects/netflixgpt.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflixgpt}
              isBlog={false}
              title="Netflix-GPT"
              description="NetflixGPT - OTT Platform with Movies recommendation using AI 🎦 with live Demo."
              ghLink="https://github.com/myselfabhi/NetflixGPT"
              demoLink="https://netflix-gpt-abhi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={barbite}
              isBlog={false}
              title="Barbite"
              description="Bar Bite is a food ordering website with "
              ghLink="https://github.com/myselfabhi/Bar-Bite"
              demoLink="https://bar-bite.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
