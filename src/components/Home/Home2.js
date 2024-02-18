import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <Card className="quote-card-view">
             <Card.Body>
               <blockquote className="blockquote mb-0">
                 <p style={{ textAlign: "justify" }}>
                   Hi Everyone, I am <span className="purple">Abhinav Verma </span>
                   from <span className="purple"> Delhi, India.</span>
                   <br />
                   I am currently Final year Btech (CSE) student in MAIT.
                   <br />
                   I have completed my internship as a FrontEnd Developer at <a href="https://www.npstx.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}><span className="purple">Network People Service Technology.</span></a>
                   <br />
                   <br />
                    Apart from coding, some other activities that I love to do!
                 </p>
                 <ul>
                  <li className="about-activity">
                   <ImPointRight /> Reading Self Growth Books
                  </li>
                  <li className="about-activity">
                   <ImPointRight /> Knowing about Tech updates
                  </li>
                  <li className="about-activity">
                   <ImPointRight /> Trading 
                  </li>
                </ul>

                  <p style={{ color: "rgb(155 126 172)" }}>
                    "Turning Code into Creativity👨‍💻!"{" "}
                  </p>
                    <footer className="blockquote-footer">Abhinav</footer>
                    </blockquote>
                </Card.Body>
                </Card>
                </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/myselfabhi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/_myselfabhi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abhinav-verma-2b2303203/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_myselfabhi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
