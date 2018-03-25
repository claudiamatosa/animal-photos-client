import React, { Fragment } from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import Photo from "./Photo";

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
      description
      tags
    }
  }
`;

export default () => (
  <Mutation mutation={addPhoto}>
    {(addPhoto, { data }) => (
      <Fragment>
        {data && data.addPhoto ? (
          <Fragment>
            <h3>Here's your photo!</h3>
            <Photo
              src={data.addPhoto.src}
              description={data.addPhoto.description}
              tags={data.addPhoto.tags}
            />
          </Fragment>
        ) : null}

        <Form
          onSubmit={e => {
            e.preventDefault();
            const photo = e.target.photo.files[0];

            if (!photo) return;

            addPhoto({ variables: { data: { photo } } });
          }}
        >
          <p>
            You can only upload photos with animals! Don't try being sneaky.
          </p>

          <input type="file" name="photo" />
          <button type="submit">Upload!</button>
        </Form>
      </Fragment>
    )}
  </Mutation>
);
