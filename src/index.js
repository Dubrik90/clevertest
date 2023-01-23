import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Route, Routes} from 'react-router-dom';
import {MainPage} from './pages/main';

import './index.css';
import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';
import {StyledWrapper} from './styled/styled-wpapper';
import {Rules} from './pages/rules/rules';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HashRouter>
            <StyledWrapper>
                <Header/>
                <MainPage/>
                <Footer/>
            </StyledWrapper>
        </HashRouter>
    </React.StrictMode>
);
