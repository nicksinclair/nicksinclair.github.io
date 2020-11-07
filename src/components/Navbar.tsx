// Absolute imports
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

const Navbar: React.FC = () => {
  return (
    <div className="navbar-container">
      <Desktop>
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/projects" exact>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/resume">Resume</NavLink>
            </li>
          </ul>
        </nav>
      </Desktop>

      <NavLink exact to="/">
        <h2>NICK SINCLAIR</h2>
      </NavLink>
    </div>
  );
};

export default Navbar;
