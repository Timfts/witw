import React from 'react';
import Proptypes from 'prop-types';

const Header = ({darkmodeState, darkmodeToggle}) => {
    function toggleDarkMode(){
        localStorage.setItem("isDarkMode", !darkmodeState);
        console.log(darkmodeState);
        darkmodeToggle(!darkmodeState);
    }
    return(
        <div>Header
            <button onClick={toggleDarkMode}>DarkMode</button>
        </div>
    )
}

Header.propTypes = {
    darkmodeToggle: Proptypes.func.isRequired,
    darkmodeState: Proptypes.bool.isRequired
}

export default Header;