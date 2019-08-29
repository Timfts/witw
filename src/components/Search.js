import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { element } from "../styles/abstract/mixins";

const SearchInputContainer = styled.div`
  position: relative;

  & svg {
    fill:${props => props.theme.color.text};
    width:25px;
    position:absolute;
    top:50%;
    left:25px;
    transform:translateY(-50%);
  }
`;

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
  return (
    <SearchInputContainer>
      <SearchInput onKeyUp={e => callback(e)} />
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <title>search</title>
        <path d="M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
      </svg>
    </SearchInputContainer>
  );
};

Search.propTypes = {
  callback: PropTypes.func
};

export default Search;
