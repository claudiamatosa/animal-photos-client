import React, { Fragment } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import List from "./pages/List";
import Upload from "./pages/Upload";
import View from "./pages/View";

import ErrorBoundary from "./components/ErrorBoundary";

import colors from "./styles/colors";

const Main = styled.main`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 40px 40px;
  text-align: center;
`;

const Header = styled.header`
  background-color: ${colors.details};
  height: auto;
  padding: 40px;
  color: white;
  font-size: 35px;
  letter-spacing: 15px;
  text-align: center;
`;

const Navigation = styled.nav`
  margin-bottom: 40px;

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    border-bottom: 1px solid ${colors.primary};
  }

  li {
    margin: 0;
    padding: 10px 10px 20px;
  }

  a {
    color: ${colors.secondary};
    font-weight: medium;
    text-decoration: none;

    &:hover {
      color: ${colors.tertiary};
    }
  }
`;

const App = () => (
  <Router>
    <div data-id="page">
      <Header data-id="header">🐭🐶🐱🐌🙊🐣</Header>

      <Navigation data-id="navigation">
        <ul>
          <li>
            <Link to="/">List</Link>
          </li>
          <li>
            <Link to="/upload">Upload</Link>
          </li>
        </ul>
      </Navigation>

      <Main>
        <ErrorBoundary>
          <Route exact path="/" component={List} />
          <Route path="/upload" component={Upload} />
          <Route path="/view/:id" component={View} />
        </ErrorBoundary>
      </Main>

      <div data-id="notification">
        <ToastContainer autoClose={30000} style={{ width: "400px" }} />
      </div>
    </div>
  </Router>
);

export default App;
