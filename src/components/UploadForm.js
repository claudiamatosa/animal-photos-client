import React from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import UploadForm from "../components/UploadForm";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const addPhoto = gql`
  mutation addPhoto($data: PhotoUpload!) {
    addPhoto(data: $data) {
      id
      src
    }
  }
`;

export default () => (
  <Mutation mutation={addPhoto}>
    {(addPhoto, { data }) => (
      <Form
        onSubmit={e => {
          e.preventDefault();
          const photo = e.target.photo.files[0];

          if (!photo) return;

          addPhoto({ variables: { data: { photo } } });
        }}
      >
        <p>You can only upload photos with animals in them!</p>

        <input type="file" name="photo" />
        <button type="submit">Upload!</button>
      </Form>
    )}
  </Mutation>
);
