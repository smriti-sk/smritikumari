import React from "react";
import ProjectCard from "./ProjectCard";
import newsApp from "../Images/newsApp.png"
import portfolio from "../Images/portfolio.png";
import expenseTracker from "../Images/ExpenseTracker.png";
import videoConfrencing from "../Images/VideoConfrencing.png";
import tictactoe from "../Images/tictactoe.png";
import youtubeclone from "../Images/youtubeclone.png";
import inkFlow from "../Images/InkFlow.png";
import stackOverflow from "../Images/stackOverflow.png";

const ProjectGallery = () => {
  const projects = [
    {
      title: "News Aggregator App",
      description: (
        <>
          This is a web-based application designed to provide you with real-time
          news updates from around the globe.
          <br />
          <b>Advanced Search Functionality:</b> Filter news by keywords, date,
          language, location, and publisher.
        </>
      ),
      imageUrl: newsApp,
      projectUrl: "https://github.com/smriti-sk/News-App",
    },
    {
      title: "InkFlow",
      description:
        " Created a real-time word processor for document creation and editing. Implemented document storage functionality.",
      imageUrl: inkFlow,
      projectUrl: "https://github.com/smriti-sk/Ink-Flow",
    },
    {
      title: "Portfolio Website",
      description:
        "Build my own portfolio website from scratch including all the relevant content using React.js, Bootstrap.",
      imageUrl: portfolio,
      projectUrl: "https://smriti-kumari.netlify.app/",
    },
    {
      title: "Video Conferencing App",
      description: "Video Chat App with React.js and WebRTC",
      imageUrl: videoConfrencing,
      projectUrl: "",
    },
    {
      title: "Stack Overflow Clone",
      description:
        "Developed a Real-Time Stack Overflow Clone using MERN Stack and hosted with Firebase. Implemented a chatbot feature for direct user interaction.",
      imageUrl: stackOverflow,
      projectUrl: "https://github.com/smriti-sk/stackoverflow-clone-fullstack",
    },
    {
      title: "Expense Tracker",
      description:
        "Monitor your spending, view transaction history, and maintain a healthy financial balance",
      imageUrl: expenseTracker,
      projectUrl: "https://smriti-sk.github.io/Expense-Tracker-App/",
    },
    {
      title: "Tic-Tac-Toe",
      description:
        "The classic Tic-Tac-Toe game for free offline with two players using Python and tkinter library.",
      imageUrl: tictactoe,
      projectUrl: "https://github.com/smriti-sk/TicTacToe-python",
    },
    {
      title: "Youtube Clone - Frontend",
      description: "YouTube clone website using HTML, CSS, JavaScript.",
      imageUrl: youtubeclone,
      projectUrl: "https://smriti-sk.github.io/Youtube-Clone-frontend/",
    },
    // Add more projects here
  ];

  return (
    <div className="main-project">
      <h2>Projects</h2>
      <div className="project-gallery">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
