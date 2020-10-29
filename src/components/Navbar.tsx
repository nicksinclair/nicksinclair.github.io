import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/resume">Resume</NavLink>
          </li>
        </ul>
      </nav>

      <NavLink exact to="/">
        <h2>NICK SINCLAIR</h2>
      </NavLink>
    </div>
  );
};

export default Navbar;
