import './App.css';
import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Link
} from 'react-router-dom';
import {Authenticate} from "./components/Context"

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Authenticate />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
