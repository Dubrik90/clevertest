import React, {useState} from 'react';
import {useParams} from 'react-router-dom';

import booksJS from '../../app/data.json';
import {Search} from '../../common/components/search/search';
import {StyledDiv} from '../../styled/div/styled-div';
import {BookPageStyle} from '../../styled/main-styled';
import {BookCard} from '../book/book-card';

const bookData = booksJS.publicistic

export const MainPage = () => {
    const {category} = useParams()

    const [open, setOpen] = useState<boolean>(true);
    const onClickHandler = () => {
        setOpen(!open)
    }

    return (
        <BookPageStyle>
            <Search open={open}
                    onClick={onClickHandler}
            />
            <StyledDiv isOpen={open}>
                {
                    bookData.map(el => (
                        <BookCard book={el}
                                  key={el.id}
                                  isOpen={open}
                                  category={category}
                        />
                    ))
                }
            </StyledDiv>
        </BookPageStyle>
    )
};






