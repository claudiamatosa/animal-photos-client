import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const heightProportion = "55%";

const PhotoCard = styled.div`
  padding: 0;
  box-shadow: 2px 2px 2px gray;
  max-width: 100%;
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

const Description = styled.p`
  padding: 10px;
`;

export default ({ id, src, description, tags, showDetails = true }) => (
  <PhotoCard>
    <ImageContainer>
      <Image src={src} alt={description} />
    </ImageContainer>

    {showDetails && (
      <Fragment>
        <Description>{description}</Description>
        <Description>Tags: {tags.join(", ")}</Description>
      </Fragment>
    )}

    <Link to={`/view/${id}`}>View ></Link>
  </PhotoCard>
);
