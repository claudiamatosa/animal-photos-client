import React, { Fragment } from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { toast } from "react-toastify";

import PhotoCard from "./PhotoCard";
import { PrimaryButton } from "./ui/Buttons";
import { H3 } from "./ui/Titles";

import { newLinesToBreaks } from "../utils/strings";
import { extractGraphQLError } from "../utils/errors";

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

const errors = {
  ANIMAL_NOT_FOUND: ({ error: { graphQLErrors: [errorDetails] } }) => (
    <Fragment>
      <p>
        We couldnʼt find an animal in this photo, so itʼs a no-go. Stop trying
        to trick the system!
      </p>

      <small>
        <p>
          <strong>Found tags:</strong> {errorDetails.data.tags.join(", ")}
        </p>
        <p>
          <strong>Found categories:</strong>{" "}
          {errorDetails.data.categories.join(", ")}
        </p>
      </small>
    </Fragment>
  ),
  ANALYSIS_ERROR: ({ error }) => (
    <Fragment>
      <p>
        We were unable to analyse your photo due to the following. Please check
        and re-submit.
      </p>

      <small>
        <p>{error.message}</p>
      </small>
    </Fragment>
  ),
  DEFAULT: ({ error }) => newLinesToBreaks(error.message)
};

const onSubmit = addPhoto => event => {
  console.log(event.target.photo.files);
  event.preventDefault();
  const photo = event.target.photo.files[0];

  if (!photo) return;

  addPhoto({ variables: { data: { photo } } });
  event.target.photo.value = "";
};

const UploadedPhoto = ({ photo }) => (
  <div data-id="uploaded-photo">
    <H3>Hereʼs your photo!</H3>
    <PhotoCard {...photo} />

    <UploadMore>
      <H3>Upload another:</H3>
    </UploadMore>
  </div>
);

export default () => {
  let notificationId = null;

  return (
    <Mutation mutation={ADD_PHOTO}>
      {(addPhoto, { data, loading, error }) => {
        if (error && !toast.isActive(notificationId)) {
          const errorDetails = extractGraphQLError(error);
          const errorCode = errorDetails.data && errorDetails.data.code;
          const ErrorComponent = errors[errorCode] || errors.DEFAULT;
          notificationId = toast.error(<ErrorComponent error={error} />);
        }

        return (
          <section data-id="upload-form">
            {data && data.addPhoto ? (
              <UploadedPhoto photo={data.addPhoto} />
            ) : null}

            <Form onSubmit={onSubmit(addPhoto)}>
              <p>
                You can only upload photos with animals! Donʼt try being sneaky.
              </p>

              <FileUpload
                data-id="file-upload"
                name="photo"
                disabled={loading}
              />

              <PrimaryButton data-id="submit" type="submit" disabled={loading}>
                {loading ? "Uploading..." : "Upload!"}
              </PrimaryButton>
            </Form>
          </section>
        );
      }}
    </Mutation>
  );
};
