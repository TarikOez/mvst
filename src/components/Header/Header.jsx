import React from "react";
import "./Header.css";
import overview from "../../images/overview.svg";
import repository from "../../images/repository.svg";
import projects from "../../images/projects.svg";
import packages from "../../images/packages.svg";

const Header = ({publicRepos}) => {
  return (
    <nav className="navigation">
      <a href="#" className="nav-link">
        <img src={overview} alt="overview" className="nav-icon" /> Overview
      </a>
      <a href="#" id="repos" className="nav-link">
        <img src={repository} alt="repository" className="nav-icon" />
        Repositories<span className="counter">{publicRepos}</span>
      </a>
      <a href="#" className="nav-link">
        <img src={projects} alt="projects" className="nav-icon" />
        Projects
      </a>
      <a href="#" className="nav-link">
        <img src={packages} alt="packages" className="nav-icon" />
        Packages
      </a>
    </nav>
  );
};

export default Header;
