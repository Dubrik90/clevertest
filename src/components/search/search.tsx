import React, {FC, useState} from 'react';
import {SearchBlock, SearchWrapper, SortBlock, ViewBlock} from '../../styled/main-styled';
import search from '../../assets/img/search.svg';
import sortDown from '../../assets/img/sortDown.svg';
import {BtnColumn} from '../../assets/img/column';
import {BtnList} from '../../assets/img/list';
import {StyledDiv} from '../../styled/div/styled-div';

type SearchPropsType = {
    open: boolean
    onClick: () => void
}
export const Search: FC<SearchPropsType> = ({onClick, open}) => (
    <SearchWrapper>
        <SearchBlock>
            <input value=""
                   onChange={() => {
                   }}
                   type="text"
                   placeholder="Поиск книги или автора…"
            />
            <img src={search} alt="search"/>
            {/* <img className="cross" src={cross} alt="cross"/> */}
        </SearchBlock>
        <div>
            <SortBlock>
                <button type="submit">По рейтингу</button>
                <img src={sortDown} alt="sortDown"/>
            </SortBlock>
        </div>

        <ViewBlock onClick={onClick}>
            <BtnColumn isClick={open}/>
            <BtnList isClick={open}/>
        </ViewBlock>
    </SearchWrapper>
)
