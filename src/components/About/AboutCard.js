import React from "react";
import Card from "react-bootstrap/Card";
import { FaArrowRight } from "react-icons/fa";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">RAJ </span>
            from <span className="purple"> Bokaro Steel City, India.</span>
            <br />
            I am currently pursuing B.Tech in Computer Science and Engineering at Lovely Professional University,
            with a minor in Cloud Computing.
            <br/>
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <FaArrowRight /> Writing
            </li>
            <li className="about-activity">
              <FaArrowRight /> Travelling
            </li>
            <li className="about-activity">
              <FaArrowRight /> Playing Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">RAJ</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
