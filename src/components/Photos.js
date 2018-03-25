import React from "react";
import styled from "styled-components";

import media from "../styles/media-queries";
import PhotoCard from "./PhotoCard";

const Photos = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const Photo = styled.li`
  padding: 10px;
  flex: 1 1 100%;

  ${media.fromSmall`
    flex-basis: 30%;
  `};
`;

export default ({ photos }) =>
  photos && (
    <Photos>
      {photos.map(photo => (
        <Photo>
          <PhotoCard {...photo} showDetails={false} />
        </Photo>
      ))}
    </Photos>
  );
