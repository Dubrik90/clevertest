import React, {FC} from 'react';

import {Link} from 'react-router-dom';

import bookImage from '../../../assets/img/book.png'
import star from '../../../assets/img/star.svg'
import {BookType} from '../../../assets/type/types';
import {StyledButton} from '../../../components/button/styled-button';

import {BookWrapper, ImageBlock, RatingWrapper, SubTitleBook, TitleBook} from './book-card-style';


type BookCardPropsType = {
    book: BookType
    isOpen: boolean
    category: string | undefined
}

export const BookCard: FC<BookCardPropsType> = (
    {
        book,
        isOpen,
        category
    }) => (
    <Link data-test-id="card" to={`/book/${category}/${book.title}`}>
        <BookWrapper isOpen={isOpen}>
            <ImageBlock isOpen={isOpen} width="174px" height="242px" borderRadius="0">
                <img src={bookImage}
                     alt="Logo"/>
            </ImageBlock>
            <RatingWrapper isOpen={isOpen}>
                {
                    book.rating === 0
                        ? 'ещё нет оценок'
                        : <img src={star} alt="star"/>
                }
            </RatingWrapper>
            <TitleBook isOpen={isOpen}>
                {book.title}
            </TitleBook>
            <SubTitleBook isOpen={isOpen}>
                {book.author} {book.year}
            </SubTitleBook>
            <StyledButton
                isBooked={book.isBooked}
                isOpen={isOpen}
            >
                {book.isBooked ? 'ЗАБРОНИРОВАТЬ' : 'занята до 03.05'}
            </StyledButton>
        </BookWrapper>
    </Link>
)



