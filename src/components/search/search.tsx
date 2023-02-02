import React, {ChangeEvent, FC, useState} from 'react';

import {BtnColumn} from '../../assets/img/action/column';
import filterMobile from '../../assets/img/action/filter-mobile.svg';
import {BtnList} from '../../assets/img/action/list';
import searchClose from '../../assets/img/action/searchClose.svg';
import searchMobile from '../../assets/img/action/search-mobile.svg';
import sortDown from '../../assets/img/action/sortDown.svg';
import {
    ImgClose,
    SearchBlock,
    SearchIconMobile,
    SearchWrapper,
    SortBlock,
    ViewBlock
} from './style-seach';
import {SearchIcon} from '../../assets/img/action/search-icon';


type SearchPropsType = {
    open: boolean
    onClick: () => void
}
export const Search: FC<SearchPropsType> = ({onClick, open}) => {
    const [value, setValue] = useState<string>('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <SearchWrapper>
            <SearchBlock>
                <input value={value}
                       onChange={onChangeHandler}
                       type="text"
                       placeholder="Поиск книги или автора…"
                />
                <SearchIcon/>
                <ImgClose src={searchClose} alt="searchClose"/>
            </SearchBlock>
            <SearchIconMobile mediaWidth="590.98px" width="32px" height="32px">
                <img src={searchMobile} alt="searchMobile"/>
            </SearchIconMobile>
            <div>
                <SortBlock>
                    <button type="submit">По рейтингу</button>
                    <img src={sortDown} alt="sortDown"/>
                </SortBlock>
                <SearchIconMobile mediaWidth="590.98px" width="32px" height="32px">
                    <img src={filterMobile} alt="searchMobile"/>
                </SearchIconMobile>

            </div>
            <ViewBlock onClick={onClick}>
                <BtnColumn isClick={open}/>
                <BtnList isClick={open}/>
            </ViewBlock>
        </SearchWrapper>
    )

}
