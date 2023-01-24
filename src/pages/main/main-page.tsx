import React from 'react';

import {Route, Routes} from 'react-router-dom';
import {StyledContainer} from '../../styled/styled-wpapper';
import {Rules} from '../rules/rules';
import {Treaty} from '../treaty/treaty';
import {MainWrap, StyledNav} from './main-style';
import {SharedLayout} from "../shared-layout";
import {SingleCategory} from "../single-category";
import {BooksPage} from "../book";


export const MainPage = () => (
    <MainWrap className="main-page">
        <StyledContainer>
            <StyledNav>
                <Routes>
                    <Route path="/*" element={<SharedLayout/>}>
                        <Route index={true} element={<BooksPage/>}/>

                        <Route path="rules" element={<Rules/>}/>
                        <Route path="treaty" element={<Treaty/>}/>
                    </Route>
                    <Route path="book/:bookId" element={<SingleCategory/>}/>
                </Routes>


            </StyledNav>
        </StyledContainer>
    </MainWrap>
);

// export const MainPage = () => (
//     <MainWrap className="main-page">
//         <StyledContainer>
//             <StyledNav>
//                 <NavMenu/>
//                 <Routes>
//                     {/* <Route path="/" element={<NavMenu/>}/> */}
//                     <Route path="/" element={<BooksPage/>}/>
//                     <Route path="/rules" element={<Rules/>}/>
//                     <Route path="/treaty" element={<Treaty/>}/>
//                 </Routes>
//             </StyledNav>
//         </StyledContainer>
//     </MainWrap>
// );

