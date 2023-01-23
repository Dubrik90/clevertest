import React, {FC} from 'react';
import {
    BlockList,
    BlockListWrap,
    BlockTiles,
    ButtonStyle,
    StarBookList,
    SubTitleBook,
    SubTitleBookList,
    TitleBook,
    TitleBookList
} from '../../../styled/main-styled';
import {StyledWrapperImage} from '../../../styled/styled-wpapper';
import {BookType} from '../../../assets/type/types';
import bookImage from '../../../assets/img/book.png'
import star from '../../../assets/img/star.svg'


type BookCardPropsType = {
    book: BookType
    isOpen: boolean
}

export const BookCard: FC<BookCardPropsType> = ({book, isOpen}) => (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
        {isOpen
            ?
            <BlockTiles>
                <StyledWrapperImage width="174px" height="242px" borderRadius="0">
                    <img src={bookImage}
                         alt="Logo"/>
                </StyledWrapperImage>
                <div>
                    {
                        book.rating === 0
                            ? 'ещё нет оценок'
                            : <img src={star} alt="star"/>
                    }
                </div>
                <TitleBook>
                    {book.title}
                </TitleBook>
                <SubTitleBook>
                    {book.author} {book.year}
                </SubTitleBook>
                <ButtonStyle type="submit">ЗАБРОНИРОВАТЬ</ButtonStyle>
            </BlockTiles>
            :
            <BlockList>
                <StyledWrapperImage width="174px" height="242px" borderRadius="0">
                    <img src={bookImage}
                         alt="Logo"/>
                </StyledWrapperImage>
                <BlockListWrap>
                    <TitleBookList>
                        {book.title}
                    </TitleBookList>
                    <SubTitleBookList>
                        {book.author} {book.year}
                    </SubTitleBookList>
                    <StarBookList>
                        <div>
                            {
                                book.rating === 0
                                    ? 'ещё нет оценок'
                                    : <img src={star} alt="star"/>
                            }
                        </div>
                        <ButtonStyle type="submit">ЗАБРОНИРОВАТЬ</ButtonStyle>
                    </StarBookList>
                </BlockListWrap>
            </BlockList>
        }
    </>
)
