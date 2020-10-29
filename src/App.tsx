import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// Relative imports
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Project from './components/Project';
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
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/projects/:slug" component={Project} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/" render={() => <div>404</div>} />
          </Switch>
        </div>

        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
