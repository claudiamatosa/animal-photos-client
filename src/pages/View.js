import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import Photo from "../components/Photo";

const GET_PHOTO = gql`
  query photo($id: String!) {
    photo(id: $id) {
      id
      src
      description
      tags
    }
  }
`;

export default ({ match: { params: { id } } }) => (
  <Query query={GET_PHOTO} variables={{ id }}>
    {({ loading, error, data }) => {
      if (error) return null;
      if (loading) return "Loading...";

      const { photo } = data;

      return <Photo {...photo} />;
    }}
  </Query>
);
