import React from "react";
import styled from "styled-components";

const LoadingBackground = styled.div`
  width: 100%;
  position: fixed;
  height: 100vh;
  top:0;
  left:0;
  background-color:${props=> props.theme.color.loading};
  z-index:100;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

const LoadingSvg = styled.svg.attrs(props => ({
  viewBox: "0 0 24 24",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}))`
  width: 90px;
  margin-bottom:8px;
`;

const LoadingPath = styled.path.attrs(props => ({
  d: props.d
}))`
  stroke: ${props => props.theme.color.text};
  fill: ${props => props.theme.color.background};
  stroke-dasharray: 90;
  stroke-dashoffset: 0;
  animation: path 2s ease infinite;
`;

const LoadingTitle = styled.h1`
  font-size:20px;
  color:${props => props.theme.color.text};
`

const Loading = () => {
  return (
    <LoadingBackground>
      <LoadingSvg>
        <title>flag</title>
        <LoadingPath d="M5 13.397v-9.859c0.44-0.218 1.365-0.538 3-0.538 1.281 0 2.361 0.421 3.629 0.928 1.232 0.493 2.652 1.072 4.371 1.072 1.298 0 2.278-0.175 3-0.397v9.859c-0.44 0.218-1.365 0.538-3 0.538-1.281 0-2.361-0.421-3.629-0.928-1.232-0.493-2.652-1.072-4.371-1.072-1.298 0-2.278 0.175-3 0.397zM5 22v-6.462c0.44-0.218 1.365-0.538 3-0.538 1.281 0 2.361 0.421 3.629 0.928 1.232 0.493 2.652 1.072 4.371 1.072 3.247 0 4.507-1.093 4.707-1.293 0.195-0.195 0.293-0.451 0.293-0.707v-12c0-0.552-0.448-1-1-1-0.265 0-0.506 0.103-0.685 0.272-0.096 0.078-0.984 0.728-3.315 0.728-1.281 0-2.361-0.421-3.629-0.928-1.232-0.493-2.652-1.072-4.371-1.072-3.247 0-4.507 1.093-4.707 1.293-0.195 0.195-0.293 0.451-0.293 0.707v19c0 0.552 0.448 1 1 1s1-0.448 1-1z"></LoadingPath>
      </LoadingSvg>
      <LoadingTitle>Loading...</LoadingTitle>
    </LoadingBackground>
  );
};

export default Loading;
