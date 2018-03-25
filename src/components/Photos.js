import React from "react";
import styled from "styled-components";

import PhotoCard from "./PhotoCard";

const Photos = styled.ul`
  list-style: none;
  padding: 0;
`;

export default ({ photos }) =>
  photos && <Photos>{photos.map(photo => <PhotoCard {...photo} />)}</Photos>;
