import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
import { Container } from "../../styles/base/Layout";

const HeaderBar = styled.header`
  width: 100%;
  background-color: ${props => props.theme.color.elements};
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:24px 0;
`;

const HeaderTitle = styled.a.attrs(props => ({
  href:"/"
}))`
  display:inline-block;
  font-weight:800;
  color:${props => props.theme.text};
  font-size:25px;
`;

const Header = ({ darkmodeState, darkmodeToggle }) => {
  function toggleDarkMode() {
    localStorage.setItem("isDarkMode", !darkmodeState);
    darkmodeToggle(!darkmodeState);
  }
  return (
    <HeaderBar>
      <HeaderContainer>
        <HeaderTitle>Where in the world</HeaderTitle>
        <button onClick={toggleDarkMode}>DarkMode</button>
      </HeaderContainer>
    </HeaderBar>
  );
};

Header.propTypes = {
  darkmodeToggle: Proptypes.func.isRequired,
  darkmodeState: Proptypes.bool.isRequired
};

export default Header;
