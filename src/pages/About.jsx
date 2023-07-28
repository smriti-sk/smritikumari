import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="main-about">
      <div className="about-section introduction">
        <h2>A bit about me</h2>
        <p>
          I'm a Full Stack Developer and my passion lies in exploring the realm
          of both frontend and backend technologies, building seamless user
          interfaces and robust server-side functionalities. <br />
          Currently, I'm pursuing my final year in Computer Science &
          Engineering at Chandigarh College Of Engineering & Technology.
          Throughout my academic journey, I've worked on numerous projects that
          have honed my skills in Full Stack Development. In my pursuit of
          excellence, I am constantly honing my skills, staying up-to-date with
          the latest trends and industry best practices.
        </p>
      </div>
      <div className="about-section what-i-do">
        <h2>What I do?</h2>
        <div className="about-subsection">
          <h3>I'm a Developer</h3>
          <p>
            For the front-end I usually work with Javascript, either standalone
            or including popular frameworks like ReactJS. I also make the web
            pretty by using CSS and, whenever needed, any of their friends:
            Bootstrap etc. <br />
            For the back-end I also work with Javascript (NodeJS, Express,
            MongoDB, etc).
          </p>
        </div>
        <div className="about-subsection">
          <h3>I'm a Content Writer</h3>
          <p>
            As a technical content writer, I possess a knack for translating
            complex concepts into clear and engaging content. With a passion for
            simplifying technical jargon, I create informative articles that
            captivate readers. <br />
            My writing skills offer a seamless blend of simplicity and
            expertise, making intricate topics accessible to all. Let me weave
            words that empower your audience with valuable insights and
            knowledge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
