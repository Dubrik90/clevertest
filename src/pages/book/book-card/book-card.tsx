import React, {FC} from 'react';

import {Link} from 'react-router-dom';

import bookImage from '../../../assets/img/book.png'
import star from '../../../assets/img/star.svg'
import {BookType} from '../../../assets/type/types';
import {StyledButton} from '../../../components/button/styled-button';

import {
    BlockList, BlockListWrap, ListRating,
    BlockTiles,
    ImageBlock,
    Imagelist, StarBookList,
    SubTitleBook, SubTitleBookList,
    TitleBook, TitleBookList, RatingWrapper
} from './book-card-style';


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
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
        {
            isOpen
                ?
                <Link data-test-id="card" to={`/book/${category}/${book.title}`}>
                    <BlockTiles>
                        <ImageBlock width="174px" height="242px" borderRadius="0">
                            <img src={bookImage}
                                 alt="Logo"/>
                        </ImageBlock>
                        <RatingWrapper>
                            {
                                book.rating === 0
                                    ? 'ещё нет оценок'
                                    : <img src={star} alt="star"/>
                            }
                        </RatingWrapper>
                        <TitleBook>
                            {book.title}
                        </TitleBook>
                        <SubTitleBook>
                            {book.author} {book.year}
                        </SubTitleBook>
                        <StyledButton isBooked={book.isBooked}>
                            {book.isBooked ? 'ЗАБРОНИРОВАТЬ' : 'занята до 03.05'}
                        </StyledButton>
                    </BlockTiles>
                </Link>
                :
                <Link data-test-id="card" to={`/book/${category}/${book.title}`}>
                    <BlockList>
                        <Imagelist width="120px" height="170px" borderRadius="0">
                            <img src={bookImage}
                                 alt="Logo"/>
                        </Imagelist>
                        <BlockListWrap>
                            <TitleBookList>
                                {book.title}
                            </TitleBookList>
                            <SubTitleBookList>
                                {book.author} {book.year}
                            </SubTitleBookList>
                            <StarBookList>
                                <ListRating>
                                    {
                                        book.rating === 0
                                            ? 'ещё нет оценок'
                                            : <img src={star} alt="star"/>
                                    }
                                </ListRating>
                                <StyledButton isBooked={book.isBooked}>
                                    {book.isBooked ? 'ЗАБРОНИРОВАТЬ' : 'занята до 03.05'}
                                </StyledButton>
                            </StarBookList>
                        </BlockListWrap>
                    </BlockList>
                </Link>
        }
    </>
)






