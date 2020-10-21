// Absolute imports
import React from 'react';

// Relative imports
import Navbar from './components/Navbar';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />

      <header className="App-header">
        <p>In Progress!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
