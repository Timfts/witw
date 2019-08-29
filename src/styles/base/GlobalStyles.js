import { createGlobalStyle } from 'styled-components';
import typography from './typography';
import animations from '../abstract/animations';




const GlobalStyle = createGlobalStyle`
    
    *,
    *::before,
    *::after {
        box-sizing:inherit;
        margin:0;
        padding:0;
    }

    body {
        box-sizing: border-box;

        background-color:${props => props.theme.color.background};
    }
    ${animations}
    ${typography}
`;


export default GlobalStyle;