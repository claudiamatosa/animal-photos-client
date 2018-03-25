import React, { Fragment } from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import PhotoCard from "./PhotoCard";
import { PrimaryButton } from "./ui/Buttons";
import { H3 } from "./ui/Titles";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UploadMore = styled.div`
  margin-top: 40px;
`;

const FileUpload = styled.input.attrs({ type: "file" })`
  margin: 30px 0 50px;
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
            <H3>Hereʼs your photo!</H3>
            <PhotoCard {...data.addPhoto} />

            <UploadMore>
              <H3>Upload another:</H3>
            </UploadMore>
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

          <FileUpload name="photo" disabled={loading} />

          <PrimaryButton type="submit" disabled={loading}>
            {loading ? "Uploading..." : "Upload!"}
          </PrimaryButton>
        </Form>
      </Fragment>
    )}
  </Mutation>
);
