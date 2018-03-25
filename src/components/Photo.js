import React from "react";
import styled from "styled-components";

const Photo = styled.div`
  padding: 0;
  max-width: 100%;
`;

const Image = styled.img`
  width: 100%;
`;

const Description = styled.p`
  padding: 10px;
`;

export default ({ id, src, description, tags }) => (
  <Photo>
    <Image src={src} alt={description} />
    <Description>{description}</Description>
    <Description>Tags: {tags.join(", ")}</Description>
  </Photo>
);
