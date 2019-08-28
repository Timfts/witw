import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { element } from "../styles/abstract/mixins";

const SearchInput = styled.input.attrs(props => ({
  type: "text",
  placeholder: "Search for a country..."
}))`
  ${element}
    padding-left:70px;
  ::placeholder {
    color: ${props => props.theme.color.text};
  }
`;

const Search = ({ callback }) => {
  return <SearchInput onKeyUp={(e) => callback(e)}/>;
};

Search.propTypes = {
  callback: PropTypes.func
};

export default Search;
