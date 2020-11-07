// Absolute imports
import React from 'react';

// Relative imports
import Header from './Header';

const About: React.FC = () => {
  // const headshotPath = '../images/headshot.png';

  return (
    <main className="content">
      <Header className="header" title="Hello!" />
      <p>I am Nick Sinclair</p>
      <p>I made this website using React, Sass and Sanity</p>
    </main>
  );
};

export default About;
