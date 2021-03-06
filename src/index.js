import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
// import { HttpLink } from "apollo-link-http";
import { createUploadLink } from "apollo-upload-client";
import { InMemoryCache } from "apollo-cache-inmemory";

import "./index.css";
import App from "./App";

const client = new ApolloClient({
  // link: new HttpLink({ uri: "http://localhost:4000/graphql" }),
  link: createUploadLink({ uri: "http://localhost:4000/graphql" }),
  cache: new InMemoryCache({
    dataIdFromObject: object => object.id
  })
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
