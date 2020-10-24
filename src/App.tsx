import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

// Relative imports
import Navbar from './components/Navbar';
import Home from './components/Home';
import Design from './components/Design';
import Art from './components/Art';
import About from './components/About';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './css/App.css';

const App: React.FC = () => {
  return (
    <HashRouter basename="/">
      <div className="app">
        <Navbar />

        <div className="content-container">
          <Route exact path="/" component={Home} />
          <Route path="/design" component={Design} />
          <Route path="/art" component={Art} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
        </div>

        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
