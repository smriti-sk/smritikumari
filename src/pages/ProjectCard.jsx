import React from 'react';
import './ProjectCards.css'; 

const ProjectCard = ({ title, description, imageUrl ,projectUrl}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="project-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="project-image-container">
        <img src={imageUrl} alt={title} className="project-image" />
        {isHovered ? (
          <div className="project-overlay">
            <div className="project-info">
              <h2 className="project-title">{title}</h2>
              <p className="project-description">{description}</p>
              <a
                className="project-link"
                href={projectUrl}
              >
              <button className="btn">View Project</button>
              </a>
            </div>
          </div>
        ) : (
          <div className="project-title-container">
            <h2 className="project-title">{title}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
