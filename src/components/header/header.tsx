import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {StyledContainer, StyledWrapperImage} from '../../styled/styled-wpapper';
import {HeaderProfile, HeaderStyle, HeaderText} from './header-style';
import logo from '../../assets/img/logo.svg';
import avatar from '../../assets/img/avatar.png';

export const Header = () => (
    <HeaderStyle>
        <StyledContainer>
            <StyledWrapperImage width="170px" height="40px" borderRadius="0">
                <Link to="/">
                    <img src={logo}
                         alt="Logo"/>
                </Link>
            </StyledWrapperImage>
            <HeaderText>
                Библиотека
            </HeaderText>
            <HeaderProfile>
                <p>Привет, Иван!</p>
                <StyledWrapperImage width="58px" height="58px">
                    <Link to="/">
                        <img src={avatar}
                             alt="avatar"/>
                    </Link>
                </StyledWrapperImage>
            </HeaderProfile>
        </StyledContainer>
    </HeaderStyle>
);

