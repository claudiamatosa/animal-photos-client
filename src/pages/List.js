import React, { Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import Photos from "../components/Photos";

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
  <Query query={GET_PHOTOS}>
    {({ loading, error, data }) => {
      if (error) return null;
      if (loading) return "Loading...";

      return (
        <Fragment>
          <h2>Hereʼs some pics</h2>
          <Photos photos={data.photos} />
        </Fragment>
      );
    }}
  </Query>
);
