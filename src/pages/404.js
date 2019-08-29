import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles/base/Layout';

const NotFoundContainer = styled(Container)`
    width:100%;
    height:80vh;
    display:flex;
    justify-content:center;
    align-items:center;
`

const NotFoundPage = () => {
    return(
        <NotFoundContainer>
            <h3>Page not found</h3>
        </NotFoundContainer>
    )
};

export default NotFoundPage;