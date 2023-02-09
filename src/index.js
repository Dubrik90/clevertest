import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Navigate, Route, Routes} from 'react-router-dom';

import {Provider} from 'react-redux';
import {BooksPage} from './pages/book';
import {Layout} from './pages/layout';
import {MainPage} from './pages/main';
import {Сontract} from './pages/main/сontract/сontract';

import './index.css';
import {store} from './app/store';
import {LayoutMainPage} from './pages/layout-main-page';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <React.StrictMode>
    <Provider store={store}>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route element={<LayoutMainPage/>}>
                        <Route index={true} element={<Navigate to="/books/all"/>}/>
                        <Route path="/books/:category" element={<MainPage/>}/>
                        <Route path="/rules" element={<Сontract title="Правила пользования"/>}/>
                        <Route path="/treaty" element={<Сontract title="Договор оферты"/>}/>
                    </Route>
                    <Route path="book/:category/:bookId" element={<BooksPage/>}/>
                </Route>
            </Routes>
        </HashRouter>
    </Provider>
    // </React.StrictMode>
);
