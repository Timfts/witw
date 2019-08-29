import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { element } from "../styles/abstract/mixins";

const SelectContainer = styled.div`
  position: relative;
`;

const SelectSelector = styled.div`
  ${element}
  cursor:pointer;
  position: relative;

  & svg {
    position: absolute;
    top:50%;
    transform:translateY(-50%);
    fill:${props => props.theme.color.text};
    width:20px;
    right:15px;
  }
`;

const SelectOptions = styled.div`
  position: absolute;
  transition: all 0.3s ease-in;
  opacity: ${props => (props.open ? "1" : "0")};
  visibility: ${props => (props.open ? "visible" : "hidden")};
  ${element}
  top:110%;
  padding: 10px 0;
`;

const SelectOption = styled.div`
  padding: 4px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: capitalize;

  &:hover {
    background-color: ${props => props.theme.color.background};
  }
`;

const Select = ({ options, callback }) => {
  const [selected, setselected] = useState("Filter By Region");
  const [open, setopen] = useState(false);

  function changeOption(option) {
    setselected(option);
    setopen(false);
    callback(option);
  }

  const selectOptions = options.map((option, index) => (
    <SelectOption onClick={() => changeOption(option)} key={index}>
      {option}
    </SelectOption>
  ));

  return (
    <SelectContainer>
      <SelectSelector onClick={() => setopen(!open)}>
        {selected}{" "}
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <title>chevron-down</title>
          <path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
        </svg>
      </SelectSelector>

      <SelectOptions open={open}>{selectOptions}</SelectOptions>
    </SelectContainer>
  );
};

Select.propTypes = {
  options: PropTypes.array,
  callback: PropTypes.func
};

export default Select;
