import React from "react";
import "./Socials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Socials = () => {
  return (
    <>
      <ul className="social-links">
        <li className="link">
          <a
            className=" contact-img"
            href="https://www.linkedin.com/in/smritikumari20/"
            alt="linkedin"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size="2xl"
              style={{ color: "var(--black)" }}
            />
          </a>
        </li>
        <li className="link">
          <a
            className=" contact-img"
            href="https://github.com/smriti-sk"
            alt="github"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2xl"
              style={{ color: "var(--black)" }}
            />
          </a>
        </li>
        <li className="link">
          <a
            className=" contact-img"
            href="https://twitter.com/_smritikumari"
            alt="twitter"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              size="2xl"
              style={{ color: "var(--black)" }}
            />
          </a>
        </li>
        <li className="link">
          <a
            className=" contact-img"
            href="mailto:smriti20v30@gmail.com"
            alt="email"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2xl"
              style={{ color: "var(--black)" }}
            />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Socials;
