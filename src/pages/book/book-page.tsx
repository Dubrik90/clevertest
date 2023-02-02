import React from 'react';
import {useParams} from 'react-router-dom';

import book from '../../assets/img/bookBig.png';
import ellipse from '../../assets/img/Ellipse.png';
import star from '../../assets/img/star.svg';
import {Container} from '../../styled/styled-wpapper';
import {MainWrap} from '../main/main-style';

import {
    AboutBlock,
    BockImage,
    BookButton,
    BookInfoWrap,
    BookName,
    BooksAbout,
    BreadcrumbsBlock,
    BreadcrumbsWrapper,
    Category,
    DescriptionBook, DeskBlock,
    Detailed,
    Detailedwrap,
    Rating,
    Reviews,
    ReviewsBlock,
    ReviewsWrap,
    TitleRating
} from './book-page-style';


export const BooksPage = () => {
    const {category, bookId} = useParams()

    return (
        <MainWrap className="main-page">
            <BreadcrumbsWrapper>
                <Container>
                    <BreadcrumbsBlock>
                        <Category>
                            {category}
                        </Category>
                        <BookName>
                            {bookId}
                        </BookName>
                    </BreadcrumbsBlock>
                </Container>
            </BreadcrumbsWrapper>
            <Container>
                <BooksAbout>
                    <BockImage>
                        <img src={book}
                             alt="Logo"/>
                    </BockImage>
                    <DescriptionBook>
                        <p>Грокаем алгоритмы. Иллюстрированное пособие для программистов и
                            любопытствующих
                        </p>
                        <span>Адитья Бхаргава, 2019</span>
                        <BookButton type="button">Забронировать</BookButton>
                        <DeskBlock>
                            <p>О книге</p>
                            <p>
                                Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и
                                большинство таких задач уже были кем-то решены,
                                протестированы и проверены. Можно, конечно, погрузится в глубокую
                                философию гениального Кнута, изучить
                                многостраничные фолианты с доказательствами и обоснованиями, но
                                хотите
                                ли вы тратить на это свое время? Откройте
                                великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы
                                —
                                это просто. А грокать алгоритмы — это
                                веселое и увлекательное занятие.
                            </p>
                        </DeskBlock>

                    </DescriptionBook>
                </BooksAbout>
                <BookInfoWrap>
                    <Rating>
                        <TitleRating>
                            Рейтинг
                        </TitleRating>
                        <div>
                            <img src={star} alt="star"/>
                        </div>
                    </Rating>
                    <AboutBlock>
                        <TitleRating>
                            Подробная информация
                        </TitleRating>
                        <Detailed>
                            <Detailedwrap>
                                <div>
                                    <span>Издательство</span> <p>Питер</p>
                                </div>
                                <div>
                                    <span>Год издания</span> <p>2019</p>
                                </div>
                                <div>
                                    <span>Страниц</span> <p>288</p>
                                </div>
                                <div>
                                    <span>Переплёт</span> <p>Мягкая обложка</p>
                                </div>
                                <div>
                                    <span>Формат</span> <p>70х100</p>
                                </div>
                            </Detailedwrap>
                            <Detailedwrap>
                                <div>
                                    <span>Жанр</span> <p>Компьютерная литература</p>
                                </div>
                                <div>
                                    <span>Вес</span> <p>370 г</p>
                                </div>
                                <div>
                                    <span>ISBN</span> <p>978-5-4461-0923-4</p>
                                </div>
                                <div>
                                    <span>Изготовитель</span>
                                    <p>
                                        ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург,
                                        Петергофское ш, д. 73, лит. А29
                                    </p>
                                </div>
                            </Detailedwrap>
                        </Detailed>
                    </AboutBlock>
                    <ReviewsBlock>
                        <TitleRating>
                            Отзывы
                        </TitleRating>
                        <Reviews>
                            <ReviewsWrap>
                                <div>
                                    <img src={ellipse} alt="ellipse"/>
                                    <p>Иван Иванов</p>
                                    <p>5 января 2019</p>
                                </div>
                                <img src={star} alt=""/>
                                <p/>
                            </ReviewsWrap>
                            <ReviewsWrap>
                                <div>
                                    <img src={ellipse} alt="ellipse"/>
                                    <p>Николай Качков</p>
                                    <p>20 июня 2018</p>
                                </div>
                                <img src={star} alt=""/>
                                <p>
                                    Учитывая ключевые сценарии поведения, курс на
                                    социально-ориентированный национальный проект не оставляет шанса
                                    для анализа существующих паттернов поведения. Для современного
                                    мира
                                    внедрение современных методик
                                    предоставляет широкие возможности для позиций, занимаемых
                                    участниками в отношении поставленных задач. Как уже
                                    неоднократно упомянуто, сделанные на базе интернет-аналитики
                                    выводы
                                    будут в равной степени предоставлены сами
                                    себе. Вот вам яркий пример современных тенденций — глубокий
                                    уровень
                                    погружения создаёт предпосылки для
                                    своевременного выполнения сверхзадачи. И нет сомнений, что
                                    акционеры
                                    крупнейших компаний, инициированные
                                    исключительно синтетически, превращены в посмешище, хотя само их
                                    существование приносит несомненную пользу
                                    обществу.
                                </p>
                            </ReviewsWrap>
                            <ReviewsWrap>
                                <div>
                                    <img src={ellipse} alt="ellipse"/>
                                    <p>Екатерина Беляева</p>
                                    <p>18 февраля 2018</p>
                                </div>
                                <img src={star} alt=""/>
                                <p/>
                            </ReviewsWrap>
                        </Reviews>
                    </ReviewsBlock>
                    <BookButton>оценить книгу</BookButton>
                </BookInfoWrap>
            </Container>
        </MainWrap>


    )
}
