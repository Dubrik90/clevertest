import React, {FC} from 'react';

import {Link} from 'react-router-dom';
import star from '../../../assets/img/star.svg'
import {BookType} from '../../../assets/type/types';
import {StyledButton} from '../../../common/components/button/styled-button';
import imageNone from '../../../assets/img/imageNone.png'

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
            <ImageBlock isOpen={isOpen}>
                <img src={book?.image?.length ? book.image[0] : imageNone}
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



