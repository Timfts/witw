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
`;

const SelectOptions = styled.div`
  position: absolute;
  transition:all .3s ease-in;
  opacity:${props => props.open ? '1' : '0'};
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  ${element}
  top:110%;
  padding: 10px 0;
`;

const SelectOption = styled.div`
  padding: 4px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform:capitalize;

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
  }

  const selectOptions = options.map((option, index) => (
    <SelectOption onClick={() => changeOption(option)} key={index}>
      {option}
    </SelectOption>
  ));

  return (
    <SelectContainer>
      <SelectSelector onClick={() => setopen(!open)}>{selected}</SelectSelector>

      <SelectOptions open={open} >{selectOptions}</SelectOptions>
    </SelectContainer>
  );
};

Select.propTypes = {
  options: PropTypes.array,
  callback: PropTypes.func
};

export default Select;
