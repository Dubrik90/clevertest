import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {HeaderWrapper, StyledContainer, StyledHeaderImage} from '../../styled/styled-wpapper';
import {HeaderImageProfile, HeaderProfile, HeaderStyle, HeaderText} from './header-style';
import logo from '../../assets/img/logo.svg';
import avatar from '../../assets/img/avatar.png';
import {Burger} from '../../styled/menu-burger/style-burger';

export const Header = () => {
    const [openBurger, setOpenBurger] = useState<boolean>(false);
    const onClickBurger = () => {
        setOpenBurger(!openBurger)
    }


    return (
        <HeaderStyle>
            <StyledContainer>
                <HeaderWrapper>
                    <StyledHeaderImage width="170px" height="40px" borderRadius="0">
                        <Link to="/">
                            <img src={logo}
                                 alt="Logo"/>
                        </Link>
                    </StyledHeaderImage>
                    <Burger isOpenBurger={openBurger} onClick={onClickBurger}><span/></Burger>
                    <HeaderText>
                        Библиотека
                    </HeaderText>
                    <HeaderProfile>
                        <p>Привет, Иван!</p>
                        <HeaderImageProfile width="58px" height="58px">
                            <Link to="/">
                                <img src={avatar}
                                     alt="avatar"/>
                            </Link>
                        </HeaderImageProfile>
                    </HeaderProfile>
                </HeaderWrapper>

            </StyledContainer>
        </HeaderStyle>
    )
};

