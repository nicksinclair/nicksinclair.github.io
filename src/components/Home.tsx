// Absolute imports
import React from 'react';
import { NavLink } from 'react-router-dom';

// Relative imports
import Header from './Header';

const Home: React.FC = () => {
  return (
    <main className="content">
      <h2>Hello!</h2>
      <p>I am Nick Sinclair</p>
      <p>Welcome to my personal portoflio site</p>

      <NavLink exact to="/projects">
        <Header className="header-link" title="Projects" arrow />
      </NavLink>
    </main>
  );
};

export default Home;
