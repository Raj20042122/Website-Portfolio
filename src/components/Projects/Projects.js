import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png";
import chatbot from "../../Assets/Projects/chatbot.png";
import population from "../../Assets/Projects/population.png";
import ums from "../../Assets/Projects/ums.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={population}
              isBlog={false}
              title="Population Growth"
              description="This project explores the rapid increase in the global human population,
              highlighting historical stability and recent explosive growth due to advancements in
              innovation, industrialization, and healthcare. It presents current population data by 
              country and discusses the future projections and challenges posed by rising population
              numbers, emphasizing the need for technological and social solutions to support sustainability
              and mitigate environmental impacts."
              ghLink="https://github.com/Raj20042122/Website-Population-Growth.git"
              demoLink="https://website-population-growth.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ums}
              isBlog={false}
              title="UMS - (University Management System)"
              description="UMS for College Students is a user-friendly University Management System designed
              to help students easily track their attendance, view daily timetables, access important announcements,
              and stay informed about teachers' leaves. The system streamlines academic management, enhancing student
              engagement and organization for a better campus experience."
              ghLink="https://github.com/Raj20042122/Website-UMS.git"
              demoLink="https://website-ums.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Financial Chatbot"
              description="Financial Chatbot is an intelligent assistant designed to help users manage their finances
              effortlessly. It tracks spending, offers personalized financial advice, and guides users toward achieving
              their money management goals. With a friendly and interactive interface, it makes financial planning simple 
              and accessible for everyone."
              ghLink="https://github.com/Raj20042122/Website-ChatBot.git"
              demoLink="https://website-chat-bot-two.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="This portfolio website showcases my CV, skills, projects, and experience as a web developer.
              It’s designed to highlight my professional journey and make it easy for potential employers or clients to
              learn about my work and capabilities."
              ghLink="https://github.com/Raj20042122"
              demoLink="https://github.com/Raj20042122"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
