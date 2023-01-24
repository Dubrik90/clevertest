import React, {FC} from 'react';
import {SearchBlock, SearchIconMobile, SearchWrapper, SortBlock, ViewBlock} from '../../styled/main-styled';
import search from '../../assets/img/search.svg';
import sortDown from '../../assets/img/sortDown.svg';
import searchMobile from '../../assets/img/search-mobile.svg';
import filterMobile from '../../assets/img/filter-mobile.svg';

import {BtnColumn} from '../../assets/img/column';
import {BtnList} from '../../assets/img/list';

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
        <SearchIconMobile mediaWidth='590.98px' width='32px' height='32px'>
            <img src={searchMobile} alt="searchMobile"/>
        </SearchIconMobile>
        <div>
            <SortBlock>
                <button type="submit">По рейтингу</button>
                <img src={sortDown} alt="sortDown"/>
            </SortBlock>
            <SearchIconMobile mediaWidth='590.98px' width='32px' height='32px'>
                <img src={filterMobile} alt="searchMobile"/>
            </SearchIconMobile>

        </div>

        <ViewBlock onClick={onClick}>
            <BtnColumn isClick={open}/>
            <BtnList isClick={open}/>
        </ViewBlock>
    </SearchWrapper>
)
