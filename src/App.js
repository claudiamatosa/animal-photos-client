import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import List from "./pages/List";
import Upload from "./pages/Upload";
import View from "./pages/View";

const Main = styled.main`
  text-align: center;
`;

const Header = styled.header`
  background-color: #222;
  height: auto;
  padding: 40px;
  color: white;
  font-size: 35px;
  letter-spacing: 15px;
`;

const Navigation = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
  }

  li {
    margin: 0;
    padding: 10px;
  }
`;

const App = () => (
  <Router>
    <Main>
      <Header>🐭🐶🐱🐌🙊🐣</Header>

      <Navigation>
        <ul>
          <li>
            <Link to="/">List</Link>
          </li>
          <li>
            <Link to="/upload">Upload</Link>
          </li>
        </ul>
      </Navigation>

      <Route exact path="/" component={List} />
      <Route path="/upload" component={Upload} />
      <Route path="/view/:id" component={View} />
    </Main>
  </Router>
);

export default App;
