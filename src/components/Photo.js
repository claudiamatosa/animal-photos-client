import React from "react";
import styled from "styled-components";

import ImageMeta from "./ImageMeta";

const Photo = styled.div`
  padding: 0;
  max-width: 100%;
`;

const Image = styled.img`
  width: 100%;
`;

export default ({ id, src, description, tags }) => (
  <Photo>
    <Image src={src} alt={description} />
    <ImageMeta description={description} tags={tags} />
  </Photo>
);
