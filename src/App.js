import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import List from "./pages/List";
import Upload from "./pages/Upload";
import View from "./pages/View";

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">🐭🐶🐱🐌🙊🐣</header>

      <nav className="App-nav">
        <ul>
          <li>
            <Link to="/">List</Link>
          </li>
          <li>
            <Link to="/upload">Upload</Link>
          </li>
        </ul>
      </nav>

      <Route exact path="/" component={List} />
      <Route path="/upload" component={Upload} />
      <Route path="/view/:id" component={View} />
    </div>
  </Router>
);

export default App;
