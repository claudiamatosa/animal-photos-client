import React, { Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import styled from "styled-components";

import Photo from "../components/Photo";
import colors from "../styles/colors";

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
  <Query query={GET_PHOTO} variables={{ id }} fetchPolicy="cache-and-network">
    {({ loading, error, data }) => {
      if (error) throw error;
      if (loading) return "Loading...";

      const { photo } = data;

      return (
        <Fragment>
          <Photo {...photo} />
        </Fragment>
      );
    }}
  </Query>
);
