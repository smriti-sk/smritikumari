import React from "react";
import "./Resume.css";
import Iframe from "react-iframe";
import resumepdf from "../assets/SmritiKumariResume.pdf"

const Resume = () => {
  return (
    <div id="resume">
      <Iframe
        src={resumepdf}
        id="MyResume"
        display="block"
        position="relative"
      />
    </div>
  );
};

export default Resume;
