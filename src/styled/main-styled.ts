import styled from 'styled-components';
import {PropsImageType} from "./image-wrapper";

// // // // // BlockTiles // // //
export const BlockTiles = styled.div`
    background: #FFFFFF;
    box-shadow: 0 2px 4px rgba(191, 196, 201, 0.2), 0 3px 4px rgba(191, 196, 201, 0.18), 0 1px 5px rgba(191, 196, 201, 0.24);
    border-radius: 10px;
    padding: 8px 8px 16px 8px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    @media (max-width: 1050.98px) {
        max-width: 190px;
    }

    h3:nth-child(3) {
        flex: 1 1 auto;
        margin-bottom: 12px;
    }

`
export const TitleBook = styled.h3`
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.1px;
    color: #363636;
`
export const SubTitleBook = styled.h3`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: #727272;

`
export const StarBookList = styled.div`
    display: flex;
    align-items: center;
    column-gap: 10px;

    div:nth-child(1) {
        flex: 1 1 auto;
    }

    @media (max-width: 590.98px) {
        flex-direction: column;
        align-items: flex-start;
        row-gap: 16px;
        div {
            img {
                max-height: 16px;
            }
        }

    }
`

// // // // // BlockList // // //
export const BlockList = styled.div`
    display: flex;
    gap: 16px;
    min-height: 240px;
    box-shadow: 0 2px 4px rgba(191, 196, 201, 0.2), 0 3px 4px rgba(191, 196, 201, 0.18), 0 1px 5px rgba(191, 196, 201, 0.24);
    border-radius: 12px;
    padding: 24px 24px 24px 16px;
    @media (max-width: 840.98px) {
        flex-grow: 1;
    }
    @media (max-width: 590.98px) {
        min-height: 182px;
        max-height: 195px;
    }

`
export const BlockListWrap = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    div:nth-child(1) {
        margin-bottom: 8px;
        @media (max-width: 590.98px) {
            margin-bottom: 4px;
        }
    }
    div:nth-child(2) {
        margin-bottom: 24px;
        flex: 1 1 auto;

        @media (max-width: 590.98px) {
            margin-bottom: 4px;
        }
    }

`
export const  TitleBookList = styled.div`
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.1px;
    color: #363636;
    @media (max-width: 590.98px) {
        font-size: 14px;
        line-height: 18px;
    }
`

export const SubTitleBookList = styled.div`
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: #727272;
    @media (max-width: 590.98px) {
        font-size: 12px;
    }
`


export const ButtonStyle = styled.button`
    background: linear-gradient(233.73deg, #F83600 -16.08%, #F9D423 327.37%);
    border-radius: 20px;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    color: #FFFFFF;
    padding: 11px 23px;
    border: none;
    cursor: pointer;
    @media (max-width: 590.98px) {
       padding: 11px 33px;
    }

    :hover {
        background: linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%);
    }
`

export const SearchBlock = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    @media (max-width: 590.98px) {
        display: none;
    }


    input {
        max-width: 350px;
        max-height: 36px;
        padding: 10px 40px;
        box-shadow: 0 2px 4px rgba(191, 196, 201, 0.2), 0 3px 4px rgba(191, 196, 201, 0.18), 0 1px 5px rgba(191, 196, 201, 0.24);
        border-radius: 599px;
        overflow: hidden;
        border: none;
        caret-color: #F83600;

        ::placeholder {
            font-size: 14px;
            line-height: 18px;
            color: #A7A7A7;
        }
    }


    img {
        position: absolute;
        top: 50%;
        left: 16px;
        transform: translateY(-50%);
    }

    //img:nth-child(3) {
    //  position: absolute;
    //  bottom: 50%;
    //  right: 0;
    //  transform: translateY(-50%);
    //}
`
export const SortBlock = styled.div`
    position: relative;
    padding: 10px 16px 10px 40px;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.1px;
    color: #A7A7A7;
    box-shadow: 0 2px 4px rgba(191, 196, 201, 0.2), 0 3px 4px rgba(191, 196, 201, 0.18), 0 1px 5px rgba(191, 196, 201, 0.24);
    border-radius: 30px;
    width: 150px;
    @media (max-width: 590.98px) {
        display: none;
    }

    //@media (max-width: 590.98px) {
    //    display: none;
    //}

    img {
        position: absolute;
        top: 50%;
        left: 16px;
        transform: translateY(-50%);
    }
`
export const ViewBlock = styled.div`
    display: flex;
    align-items: center;
    svg {
        cursor: pointer;
        @media (max-width: 590.98px) {
            width: 32px;
            height: 32px;
        }

    }
    // column-gap: 16px;

`
export const SearchWrapper = styled.div`
  display: flex;
  max-height: 38px;
  width: 100%;
  align-items: center;
  column-gap: 16px;
  margin-bottom: 32px;

  div:nth-child(3) {
    //display: flex;
    flex: 1 1 auto;
  }
`
export const BookPageStyle = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-bottom: 62px;

`
export const SearchIconMobile = styled.div<PropsImageType>`
    display: flex;
    flex: 0 0 50%;
    text-align: center;
    max-width: ${({width}) => width || '96px'};
    max-height: ${({height}) => height || '96px'};
    border-radius: ${({borderRadius}) => borderRadius || '100%'};
    transition: all 0.3s;
    @media (min-width: ${({mediaWidth}) => `${mediaWidth}`}) {
        display: none;
    }

    :hover {
        scale: ${({hover}) => hover ? '1.1' : '1'};
    }

    img {
        width: 100%;
        //max-height: 100%;
        object-fit: cover;
        border-radius: ${({borderRadius}) => borderRadius || '100%'};
        justify-content: center;
            //cursor: ${({cursor}) => cursor || 'auto'};
        cursor: pointer;
    }
`
