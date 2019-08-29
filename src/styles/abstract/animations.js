import { css } from "styled-components";

const animations = css`
  @keyframes path {
    from {
      stroke-dashoffset: 100;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`;

export default animations;
