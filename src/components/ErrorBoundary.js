import React, { Fragment } from "react";

import { H2, H3 } from "./ui/Titles";
import { newLinesToBreaks } from "../utils/strings";

export default class ErrorBoundary extends React.Component {
  state = {
    error: null,
    info: null
  };

  componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  render() {
    if (this.state.error) {
      return (
        <section data-id="page-error">
          <H2>{"Oops, something went wrong"}</H2>
          <p>{this.state.error && this.state.error.toString()}</p>

          <H3>{"Stack"}</H3>
          <p>{newLinesToBreaks(this.state.info.componentStack)}</p>
        </section>
      );
    }

    return this.props.children;
  }
}
