import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <section className="top-nav">
        <div>
          <NavLink to="/">
            <span className="nav-title"> Smriti Kumari</span>
          </NavLink>
          <span className="subtitle"> / Full Stack Developer</span>
        </div>
        <input
          id="menu-toggle"
          type="checkbox"
          checked={isMenuOpen}
          onChange={handleMenuToggle}
        />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
          <li>
            <NavLink
              to="/"
              exact
              className="nav-item nav-btn"
              activeClassName="active-link"
              onClick={handleLinkClick}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className="nav-item nav-btn"
              activeClassName="active-link"
              onClick={handleLinkClick}
            >
              About
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/Skills"
              className="nav-item nav-btn"
              activeClassName="active-link"
              onClick={handleLinkClick}
            >
              Skills
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/Projects"
              className="nav-item nav-btn"
              activeClassName="active-link"
              onClick={handleLinkClick}
            >
              Project
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className="nav-item nav-btn"
              activeClassName="active"
              onClick={handleLinkClick}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Nav;
