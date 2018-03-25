import React, { Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Popup from "react-popup";
import styled from "styled-components";

import Photo from "../components/Photo";
import colors from "../styles/colors";

const StyledPopup = styled(Popup)`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  pointer-events: none;

  article {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 20px;
    background-color: white;
    box-shadow: 2px 2px 5px gray;
    font-size: 20px;
    pointer-events: all;
    z-index: 10;

    > button {
      appearance: none;
      border: none;
      font-size: 20px;
      margin: 0 0 20px auto;

      &::before {
        display: block;
        content: "✖️";
      }
    }

    > footer button {
      appearance: none;
      border: none;
      font-size: 16px;
      margin-top: 30px;
      padding: 10px 20px;
      border-radius: 4px;
      color: white;
      background-color: ${colors.secondary};
      transition: background-color 0.5s ease;

      &:hover,
      &:focus {
        cursor: pointer;
        background-color: ${colors.primary};
      }
    }
  }
`;

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
          <StyledPopup />
        </Fragment>
      );
    }}
  </Query>
);

setTimeout(() => {
  Popup.alert("This photo has been updated! Please refresh the page.");

  setTimeout(() => {
    Popup.close();
  }, 500);
}, 2000);
