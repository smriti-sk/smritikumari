import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="main-about">
      <div className="about-section introduction">
        <h2>A bit about me</h2>
        <p>
          I'm a Full Stack Developer, dedicated to mastering both front-end and
          back-end technologies. I thrive on crafting seamless user experiences
          paired with efficient, scalable server-side solutions. <br />
          Recently, I completed an enriching internship as a Software Engineer at uTrade
          Solutions, where I contributed to projects that refined my expertise
          in Full Stack Development. <br />
          I'm committed to continuous learning, staying current with industry
          trends, and adopting best practices to deliver top-notch solutions. My
          journey is driven by a constant desire to push boundaries and create
          impactful digital experiences.
        </p>
      </div>
      <div className="about-section what-i-do">
        <h2>What do I do?</h2>
        <div className="about-subsection">
          <h3>I'm a Developer</h3>
          <p>
            For the front-end I usually work with Javascript, either standalone
            or including popular frameworks like ReactJS and Angular. I also
            make the web pretty by using CSS and, whenever needed, any of their
            friends: Bootstrap, Tailwind, SCSS etc. <br />
            On the back-end, I leverage Node.js, Express, and SQL and NoSQL
            databases (MongoDB, PostgreSQL, MySQL) to create scalable and robust
            server-side logic. In addition to my core skills, I'm also
            proficient in Go programming for high-performance applications.
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
