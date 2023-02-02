import React from 'react'
import {NavLink} from 'react-router-dom';

import {StyledNavMenu} from './style-nav';

export const NavMenu = () => (
    <StyledNavMenu>
        <NavLink to="books" style={{pointerEvents: 'none'}}>Витрина книг</NavLink>
        <ul>
            <li><NavLink to="books/all">Все книги</NavLink></li>
            <li><NavLink to="books/bisnes">Бизнес-книги<span>14</span></NavLink></li>
            <li><NavLink to="books/detective">Детективы<span>8</span></NavLink></li>
            <li><NavLink to="books/kids">Детские книги<span>14</span></NavLink></li>
            <li><NavLink to="books/forein">Зарубежная литература<span>2</span></NavLink></li>
            <li><NavLink to="books/history">История<span>5</span></NavLink></li>
            <li><NavLink to="books/classic">Классическая литература<span>12</span></NavLink></li>
            <li><NavLink to="books/psychology">Книги по психологии<span>11</span></NavLink></li>
            <li><NavLink to="books/computer">Компьютерная литература<span>54</span></NavLink></li>
            <li><NavLink to="books/culture">Культура и искусство<span>5</span></NavLink></li>
            <li><NavLink to="books/education">Наука и образование<span>2</span></NavLink></li>
            <li><NavLink to="books/journalistic">Публицистическая литература<span>0</span></NavLink>
            </li>
            <li><NavLink to="books/directory">Справочники<span>10</span></NavLink></li>
            <li><NavLink to="books/fantasy">Фантастика<span>12</span></NavLink></li>
            <li><NavLink to="books/humor">Юмористическая литература<span>8</span></NavLink></li>
        </ul>
        <div>
            <NavLink to="/rules">Правила пользования</NavLink>
            <NavLink to="/treaty">Договор оферты</NavLink>
        </div>

    </StyledNavMenu>
)
