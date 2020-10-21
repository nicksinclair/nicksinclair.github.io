// Absolute imports
import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

// Relative imports
import Navbar from './components/Navbar';
import './App.css';

const App: React.FC = () => {
  return (
    <HashRouter basename="/">
      <div className="App">
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
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
    </HashRouter>
  );
};

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
};

export default App;
