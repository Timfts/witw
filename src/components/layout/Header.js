import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
import { Container } from "../../styles/base/Layout";
import {media} from '../../styles/abstract/respond';

const HeaderBar = styled.header`
  width: 100%;
  background-color: ${props => props.theme.color.elements};
  box-shadow: 0px 2px 3px 2px rgba(0, 0, 0, 0.08);
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
`;

const HeaderTitle = styled.a.attrs(props => ({
  href: "/"
}))`
  display: inline-block;
  font-weight: 800;
  color: ${props => props.theme.text};
  font-size: 25px;

  ${media.tabPort`
    font-size:15px;
  `}
`;

const ToggleDarkButton = styled.div`
  display:flex;
  cursor:pointer;
  color:${props => props.theme.color.text};
  align-items:center;
`;

const MoonIcon = styled.svg.attrs(props => ({
  viewBox: '0 0 24 24'
}))`
  width:25px;
  margin-right:9px;
  fill:${props => props.theme.color.text};
  transition:all .3s;
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
        <ToggleDarkButton onClick={toggleDarkMode}>
          <MoonIcon>
            <path d="M21.996 12.882c0.022-0.233-0.038-0.476-0.188-0.681-0.325-0.446-0.951-0.544-1.397-0.219-0.95 0.693-2.059 1.086-3.188 1.162-1.368 0.092-2.766-0.283-3.95-1.158-1.333-0.985-2.139-2.415-2.367-3.935s0.124-3.124 1.109-4.456c0.142-0.191 0.216-0.435 0.191-0.691-0.053-0.55-0.542-0.952-1.092-0.898-2.258 0.22-4.314 1.18-5.895 2.651-1.736 1.615-2.902 3.847-3.137 6.386-0.254 2.749 0.631 5.343 2.266 7.311s4.022 3.313 6.772 3.567 5.343-0.631 7.311-2.266 3.313-4.022 3.567-6.772zM19.567 14.674c-0.49 1.363-1.335 2.543-2.416 3.441-1.576 1.309-3.648 2.016-5.848 1.813s-4.108-1.278-5.417-2.854-2.016-3.648-1.813-5.848c0.187-2.032 1.117-3.814 2.507-5.106 0.782-0.728 1.71-1.3 2.731-1.672-0.456 1.264-0.577 2.606-0.384 3.899 0.303 2.023 1.38 3.934 3.156 5.247 1.579 1.167 3.448 1.668 5.273 1.545 0.752-0.050 1.496-0.207 2.21-0.465z"></path>
          </MoonIcon>
          <p>Dark Mode</p>
        </ToggleDarkButton>
      </HeaderContainer>
    </HeaderBar>
  );
};

Header.propTypes = {
  darkmodeToggle: Proptypes.func.isRequired,
  darkmodeState: Proptypes.bool.isRequired
};

export default Header;
