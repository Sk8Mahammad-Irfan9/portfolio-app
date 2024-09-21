import React from "react";
import "../styles/nav.css"

const NavBar = () => {
  return (
    <div className="nav-bar">
      <nav id="navbar" className="nav">
        <ul className="nav-list">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
