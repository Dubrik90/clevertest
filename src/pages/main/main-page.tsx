import React from 'react';

import {StyledContainer} from '../../styled/styled-wpapper';
import {NavMenu} from '../../components/nav/nav-menu';
import {Rules} from '../rules/rules';
import {Treaty} from '../treaty/treaty';
import {BooksPage} from '../book/book-page';
import {MainWrap, StyledNav} from './main-style';
import {Route, Routes} from "react-router-dom";


export const MainPage = () => (
    <MainWrap className="main-page">
        <StyledContainer>
            <StyledNav>
                <NavMenu/>
                <Routes>
                    {/* <Route path="/" element={<NavMenu/>}/> */}
                    <Route path="/" element={<BooksPage/>}/>
                    <Route path="/rules" element={<Rules/>}/>
                    <Route path="/treaty" element={<Treaty/>}/>
                </Routes>
            </StyledNav>
        </StyledContainer>
    </MainWrap>
);
