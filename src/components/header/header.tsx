import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import avatar from '../../assets/img/avatar.png';
import logo from '../../assets/img/logo.svg';
import {Burger} from '../../styled/menu-burger/style-burger';
import {Container} from '../../styled/styled-wpapper';

import {
    HeaderImageProfile,
    HeaderProfile,
    HeaderWrapper,
    HeaderTitle,
    HeaderContent, HeaderImageLogo, ProfileName
} from './header-style';

export const Header = () => {
    const [openBurger, setOpenBurger] = useState<boolean>(false);
    const onClickBurger = () => {
        setOpenBurger(!openBurger)
    }

    return (
        <HeaderWrapper>
            <Container>
                <HeaderContent>
                    <HeaderImageLogo width="170px" height="40px" borderRadius="0">
                        <Link to="/">
                            <img src={logo}
                                 alt="Logo"/>
                        </Link>
                    </HeaderImageLogo>
                    <Burger isOpenBurger={openBurger} onClick={onClickBurger}><span/></Burger>
                    <HeaderTitle>
                        Библиотека
                    </HeaderTitle>
                    <HeaderProfile>
                        <ProfileName>Привет, Иван!</ProfileName>
                        <HeaderImageProfile width="58px" height="58px">
                            <Link to="/">
                                <img src={avatar}
                                     alt="avatar"/>
                            </Link>
                        </HeaderImageProfile>
                    </HeaderProfile>
                </HeaderContent>
            </Container>
        </HeaderWrapper>
    )
};

