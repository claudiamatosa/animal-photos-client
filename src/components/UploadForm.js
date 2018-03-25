import React, { Fragment } from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import PhotoCard from "./PhotoCard";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ADD_PHOTO = gql`
  mutation addPhoto($data: PhotoUpload!) {
    addPhoto(data: $data) {
      id
      src
      description
      tags
    }
  }
`;

export default () => (
  <Mutation mutation={ADD_PHOTO}>
    {(addPhoto, { data, loading }) => (
      <Fragment>
        {data && data.addPhoto ? (
          <Fragment>
            <h3>Here's your photo!</h3>
            <PhotoCard {...data.addPhoto} />
          </Fragment>
        ) : null}

        <Form
          onSubmit={e => {
            e.preventDefault();
            const photo = e.target.photo.files[0];

            if (!photo) return;

            addPhoto({ variables: { data: { photo } } });
            e.target.photo.value = "";
          }}
        >
          <p>
            You can only upload photos with animals! Don't try being sneaky.
          </p>

          <input type="file" name="photo" disabled={loading} />

          <button type="submit" disabled={loading}>
            {loading ? "Uploading..." : "Upload!"}
          </button>
        </Form>
      </Fragment>
    )}
  </Mutation>
);
