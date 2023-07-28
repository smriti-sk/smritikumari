import React from "react";
import "./Home.css";
import "./HomeMoblie.css";
import profilePhoto from "../Images/smriti.png";
import Socials from "../Components/Socials";

const Home = () => {
  return (
    <section className="main-home">
      <div class="grid-container">
        <div class="item1">
          Blue
          <div class="content">
            <div className="content-grid">
              <div className="card">
                <div>
                  <img
                    src={profilePhoto}
                    alt="profile photo"
                    id="profilePhoto"
                  />
                </div>
                <div className="name">
                  <h1>
                    Smriti
                    <br />
                    Kumari
                  </h1>
                </div>
                <div className="profession">
                  <span>Full Stack Developer & </span>
                  <span>CSE Final Year Student</span>
                </div>
                <div className="social-bar">
                  <Socials />
                </div>
              </div>
              <div className="intro">
                <h1>Hi!</h1>
                <h2>
                  My name is Smriti Kumari and I am a Full Stack Developer
                </h2>
                <div className="buttons">
                  <button class="btn" role="button">
                    Resume
                  </button>
                  <button class="btn" role="button">
                    Projects
                  </button>
                </div>
                <p>
                  I'm a skilled Full-Stack Engineer with a passion for building
                  innovative and user-friendly web applications, offering a
                  unique blend of technical expertise and problem-solving
                  prowess to every project. If you're on the lookout for a
                  dedicated developer who approaches each challenge with
                  enthusiasm and expertise, look no further! I'm always eager to
                  explore new horizons and tackle exciting projects. Reach out
                  to me by clicking the "Contact" button below. Let's
                  collaborate and create something extraordinary!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="item2">White</div>
      </div>
    </section>
  );
};

export default Home;
