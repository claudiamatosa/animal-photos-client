import React, { Fragment } from "react";
import styled from "styled-components";

const Description = styled.p`
  padding: 10px;

  &::first-letter {
    text-transform: capitalize;
  }

  &::after {
    display: inline;
    content: ".";
  }
`;

const Tags = styled.p`
  padding: 10px;
  font-size: 12px;
  color: gray;
`;

export default ({ description, tags }) => (
  <Fragment>
    <Description>{description}</Description>
    <Tags>🏷 {tags.join(", ")}</Tags>
  </Fragment>
);
