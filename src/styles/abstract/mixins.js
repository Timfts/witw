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
`;
