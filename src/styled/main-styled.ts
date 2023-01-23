import styled from 'styled-components';




export const StyledBookPage = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px
`
// // // // // BlockTiles // // //
export const BlockTiles = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18), 0px 1px 5px rgba(191, 196, 201, 0.24);
    border-radius: 10px;
    padding: 8px 8px 16px 8px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;

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

    div:nth-child(1) {
        flex: 1 1 auto;
    }
`

// // // // // BlockList // // //
export const BlockList = styled.div`
    display: flex;
    gap: 16px;
    box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18), 0px 1px 5px rgba(191, 196, 201, 0.24);
    border-radius: 12px;
`
export const BlockListWrap = styled.div`
    display: flex;
    flex-direction: column;
`
export const TitleBookList = styled.div`
    font-weight: 700;
    font-size: 22px;
    line-height: 32px;
    color: #363636;
`

export const SubTitleBookList = styled.div`
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: #727272;
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

    :hover {
        background: linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%);
    }
`

export const SearchBlock = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;


    input {
        max-width: 350px;
        max-height: 36px;
        padding: 10px 40px;
        box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18), 0px 1px 5px rgba(191, 196, 201, 0.24);
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
    box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18), 0px 1px 5px rgba(191, 196, 201, 0.24);
    border-radius: 30px;
    max-width: 150px;

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
    // column-gap: 16px;

`
export const SearchWrapper = styled.div`
    display: flex;
    max-height: 38px;
    width: 100%;
    align-items: center;
    column-gap: 16px;
    margin-bottom: 32px;

    div:nth-child(2) {
        //display: flex;
        flex: 1 1 auto;
    }
`
export const BookPageStyle = styled.div`
    display: flex;
    flex-direction: column;
`

