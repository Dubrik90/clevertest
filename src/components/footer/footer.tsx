import React from 'react';
import {Link} from 'react-router-dom';
import {StyledContainer} from '../../styled/styled-wpapper';
import {FooterStyle} from './footer-styled';

export const Footer = () => (
    <FooterStyle>
        <StyledContainer>
            <p>
                <Link to="/books">
                    books
                </Link>
            </p>

        </StyledContainer>
    </FooterStyle>

);

