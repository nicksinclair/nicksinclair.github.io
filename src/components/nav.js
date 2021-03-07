import React from 'react';
import { Link } from 'gatsby';
import { globalHistory } from '@reach/router';

const navLinks = [
  { label: 'PROJECTS', to: '/projects' },
  // { label: 'ABOUT', to: '/about' },
  { label: 'RESUME', to: '/resume' },
];

function Nav() {
  const pathname = globalHistory.location.pathname;
  return (
    <nav
      className="nav-container"
      style={{
        paddingTop: '10px',
      }}
    >
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {navLinks.map((link) => (
          <li
            key={link.label}
            className={`menu-item ${
              pathname === link.to ? 'current-menu-item' : ''
            } `}
          >
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
