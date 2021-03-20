import React from 'react';
import { Link } from 'gatsby';
import { globalHistory } from '@reach/router';

// Add object to this array to add more nav sections
const navLinks = [
  { label: 'PROJECTS', to: '/projects' },
  { label: 'RESUME', to: '/resume' },
];

function Nav() {
  // Retrieves current path
  const pathname = globalHistory.location.pathname;

  return (
    <nav className="nav-container">
      <ul>
        {navLinks.map((link) => (
          <li
            key={link.label}
            className={`menu-item ${
              pathname.includes(link.to) ? 'current-menu-item' : ''
            }`}
          >
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
