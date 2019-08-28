import { css } from "styled-components";

import NunitoLightEot from '../../fonts/light/NunitoSans-Light.eot';
import NunitoLightTtf from '../../fonts/light/NunitoSans-Light.ttf';
import NunitoLightWoff from '../../fonts/light/NunitoSans-Light.woff';
import NunitoLightWoff2 from '../../fonts/light/NunitoSans-Light.woff2';

import NunitoSemiBoldEot from '../../fonts/semi-bold/NunitoSans-SemiBold.eot';
import NunitoSemiBoldTtf from '../../fonts/semi-bold/NunitoSans-SemiBold.ttf';
import NunitoSemiBoldWoff from '../../fonts/semi-bold/NunitoSans-SemiBold.woff';
import NunitoSemiBoldWoff2 from '../../fonts/semi-bold/NunitoSans-SemiBold.woff2';

import NunitoExtraBoldEot from '../../fonts/extra-bold/NunitoSans-ExtraBold.eot';
import NunitoExtraBoldTtf from '../../fonts/extra-bold/NunitoSans-ExtraBold.ttf';
import NunitoExtraBoldWoff from '../../fonts/extra-bold/NunitoSans-ExtraBold.woff';
import NunitoExtraBoldWoff2 from '../../fonts/extra-bold/NunitoSans-ExtraBold.woff2';

const typography = css`
  @font-face {
    font-family: 'Nunito Sans';
    src: url(${NunitoLightEot});
    src: url(${NunitoLightWoff2}) format("woff2"),
      url(${NunitoLightWoff}) format("woff"),
      url(${NunitoLightTtf}) format("truetype");
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Nunito Sans';
    src: url(${NunitoSemiBoldEot});
    src: url(${NunitoSemiBoldWoff2}) format("woff2"),
      url(${NunitoSemiBoldWoff}) format("woff"),
      url(${NunitoSemiBoldTtf}) format("truetype");
    font-weight: 600;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Nunito Sans';
    src: url(${NunitoExtraBoldEot});
    src: url(${NunitoExtraBoldWoff2}) format("woff2"),
      url(${NunitoExtraBoldWoff}) format("woff"),
      url(${NunitoExtraBoldTtf}) format("truetype");
    font-weight: 800;
    font-style: normal;
    font-display: auto;
  }

  html {
    font-family: 'Nunito Sans', sans-serif;
    font-weight:300;
    color:${props => props.theme.color.text};
  }

  h1 {
    font-weight:800;
  }

`;

export default typography;
