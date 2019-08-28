import { createGlobalStyle } from 'styled-components';
import typography from './typography';




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
    ${typography}
`;


export default GlobalStyle;