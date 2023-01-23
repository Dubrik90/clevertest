import styled from 'styled-components';
import {PropsImageType} from './image-wrapper';

export const StyledWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
`
export const StyledContainer = styled.div`
    max-width: 1110px;
    box-sizing: content-box;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    align-items: center;

`

export const StyledWrapperImage = styled.div<PropsImageType>`
    display: flex;
    flex: 0 0 50%;
    text-align: center;
    max-width: ${({width}) => width || '96px'};
    max-height: ${({height}) => height || '96px'};
    border-radius: ${({borderRadius}) => borderRadius || '100%'};
    transition: all 0.3s;

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
