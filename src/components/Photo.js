import React from "react";
import styled from "styled-components";

const ImageCard = styled.div`
  padding: 0;
  box-shadow: 2px 2px 2px gray;
  max-width: 100%;
`;

const Image = styled.img`
  max-width: 100%;
`;

const Description = styled.p`
  padding: 10px;
`;

export default ({ src, description }) => (
  <ImageCard>
    <Image src={src} alt={description} />
    <Description>{description}</Description>
  </ImageCard>
);
