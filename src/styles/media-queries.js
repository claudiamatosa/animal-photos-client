import { css } from "styled-components";

const sizes = {
  small: 420,
  medium: 780
};

export default {
  fromSmall: (...args) => css`
    @media (min-width: ${sizes.small}px) {
      ${css(...args)};
    }
  `,
  fromMedium: (...args) => css`
    @media (min-width: ${sizes.medium}px) {
      ${css(...args)};
    }
  `
};
