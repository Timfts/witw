import styled from 'styled-components';
import { element } from '../styles/abstract/mixins';

export const Button = styled.button`
    ${element}
    cursor:pointer;
    width:auto;
    padding:8px 50px;
    transition:all .3s;
    font-size:16px;

    &:hover {
        background-color:${props => props.theme.color.background};
        transform:translateY(-2px);
    }
`;