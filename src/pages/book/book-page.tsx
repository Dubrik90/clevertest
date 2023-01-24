import React, {useState} from 'react';
import {Search} from '../../components/search/search';
import {BookPageStyle} from '../../styled/main-styled';
import {BookCard} from './book-card';
import booksJS from '../../app/data.json'
import {StyledDiv} from '../../styled/div/styled-div';

const bookData = booksJS.publicistic
export const BooksPage = () => {

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
                            />
                        ))
                    }
                </StyledDiv>
            </BookPageStyle>
        )


}
