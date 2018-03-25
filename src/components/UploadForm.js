import React, { Fragment } from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { toast } from "react-toastify";

import PhotoCard from "./PhotoCard";
import { PrimaryButton } from "./ui/Buttons";
import { H3 } from "./ui/Titles";

import { newLinesToBreaks } from "../utils/strings";

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

const onSubmit = addPhoto => event => {
  event.preventDefault();
  const photo = event.target.photo.files[0];

  if (!photo) return;

  addPhoto({ variables: { data: { photo } } });
  event.target.photo.value = "";
};

const UploadedPhoto = ({ photo }) => (
  <Fragment>
    <H3>Hereʼs your photo!</H3>
    <PhotoCard {...photo} />

    <UploadMore>
      <H3>Upload another:</H3>
    </UploadMore>
  </Fragment>
);

export default () => {
  let notificationId = null;

  return (
    <Mutation mutation={ADD_PHOTO}>
      {(addPhoto, { data, loading, error }) => {
        if (error && !toast.isActive(notificationId)) {
          notificationId = toast.error(newLinesToBreaks(error.message));
        }

        return (
          <Fragment>
            {data && data.addPhoto ? (
              <UploadedPhoto photo={data.addPhoto} />
            ) : null}

            <Form onSubmit={onSubmit(addPhoto)}>
              <p>
                You can only upload photos with animals! Donʼt try being sneaky.
              </p>

              <FileUpload name="photo" disabled={loading} />

              <PrimaryButton type="submit" disabled={loading}>
                {loading ? "Uploading..." : "Upload!"}
              </PrimaryButton>
            </Form>
          </Fragment>
        );
      }}
    </Mutation>
  );
};
