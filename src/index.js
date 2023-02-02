import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Navigate, Route, Routes} from 'react-router-dom';

import {Header} from './components/header';
import {Footer} from './components/footer';
import {BooksPage} from './pages/book';
import {Layout} from './pages/layout';
import {MainPage} from './pages/main';
import {Сontract} from './pages/main/сontract/сontract';
import {Wrapper} from './styled/styled-wpapper';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <HashRouter>
            <Wrapper>
                <Header/>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index={true} element={<Navigate to="/books/all"/>}/>
                        <Route path="/books/:category" element={<MainPage/>}/>
                        <Route path="rules" element={<Сontract title="Правила пользования"/>}/>
                        <Route path="treaty" element={<Сontract title="Договор оферты"/>}/>
                    </Route>
                    <Route path="book/:category/:bookId" element={<BooksPage/>}/>
                </Routes>
                <Footer/>
            </Wrapper>
        </HashRouter>
    </React.StrictMode>
);
