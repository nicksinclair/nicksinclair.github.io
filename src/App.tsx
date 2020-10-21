// Absolute imports
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

// Relative imports
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <HashRouter basename="/">
      <div className="app">
        <Navbar />

        <div className="content-container">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>

        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
