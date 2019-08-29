import { css } from "styled-components";

export const element = css`
  background-color: ${props => props.theme.color.elements};
  outline: none;
  border: none;
  font-family: inherit;
  font-size: 14px;
  color: ${props => props.theme.color.text};
  width: 100%;
  padding: 16px 25px;
  border-radius: 5px;
  box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.14);

`;
