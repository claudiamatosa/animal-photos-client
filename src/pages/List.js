import React, { Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import Photos from "../components/Photos";
import { H2 } from "../components/ui/Titles";

const GET_PHOTOS = gql`
  query photos {
    photos {
      id
      src
      description
      tags
    }
  }
`;

export default () => (
  <Query query={GET_PHOTOS} pollInterval={5000}>
    {({ loading, error, data }) => {
      if (error) return null;
      if (loading) return "Loading...";

      return <Photos photos={data.photos} />;
    }}
  </Query>
);
