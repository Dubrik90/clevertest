import React from 'react'
import {NavLink} from 'react-router-dom';
import {StyledNavMenu, StyledTitle} from './style-nav';


export const NavMenu = () => (
    <StyledNavMenu>
        <StyledTitle>
            <h2>Витрина книг</h2>
        </StyledTitle>
        <ul>
            <li><NavLink to="/">Все книги</NavLink></li>
            <li><NavLink to="/bisnes">Бизнес-книги<span>14</span></NavLink></li>
            <li><NavLink to="/detective">Детективы<span>8</span></NavLink></li>
            <li><NavLink to="/kids">Детские книги<span>14</span></NavLink></li>
            <li><NavLink to="/forein">Зарубежная литература<span>2</span></NavLink></li>
            <li><NavLink to="/history">История<span>5</span></NavLink></li>
            <li><NavLink to="/classic">Классическая литература<span>12</span></NavLink></li>
            <li><NavLink to="/psychology">Книги по психологии<span>11</span></NavLink></li>
            <li><NavLink to="/computer">Компьютерная литература<span>54</span></NavLink></li>
            <li><NavLink to="/culture">Культура и искусство<span>5</span></NavLink></li>
            <li><NavLink to="/education">Наука и образование<span>2</span></NavLink></li>
            <li><NavLink to="/journalistic">Публицистическая литература<span>0</span></NavLink>
            </li>
            <li><NavLink to="/directory">Справочники<span>10</span></NavLink></li>
            <li><NavLink to="/fantasy">Фантастика<span>12</span></NavLink></li>
            <li><NavLink to="/humor">Юмористическая литература<span>8</span></NavLink></li>
        </ul>
        <div>
            <NavLink to="/rules">Правила пользования</NavLink>
            <NavLink to="/treaty">Договор оферты</NavLink>
        </div>

    </StyledNavMenu>
)
