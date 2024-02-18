import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
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
  );
}

export default AboutCard;
