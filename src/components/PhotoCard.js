import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ImageMeta from "./ImageMeta";

import colors from "../styles/colors";

const heightProportion = "55%";

const PhotoCard = styled.div`
  padding: 0;
  border-radius: 4px;
  box-shadow: 1px 1px 2px silver;
  max-width: 100%;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: ${heightProportion};
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: -${heightProportion};
`;

const ViewMoreLink = styled(Link)`
  display: inline-block;
  margin: 10px;
  font-size: 12px;
  text-decoration: none;
  color: ${colors.tertiary};

  &::after {
    display: inline;
    content: " >";
  }
`;

const viewMoreUrl = id => `/view/${id}`;

export default ({ id, src, description, tags, showDetails = true }) => (
  <PhotoCard>
    <Link to={viewMoreUrl(id)}>
      <ImageContainer>
        <Image src={src} alt={description} />
      </ImageContainer>
    </Link>

    {showDetails && <ImageMeta description={description} tags={tags} />}

    <ViewMoreLink to={viewMoreUrl(id)}>View</ViewMoreLink>
  </PhotoCard>
);
