import styled from 'styled-components';

import {PropsDiv} from './div-style';

export const StyledDiv = styled.div<PropsDiv>`
    display: ${({isOpen}) => isOpen ? 'grid' : 'flex'};
    flex-direction: column;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    @media (max-width: 1050px) {
        grid-template-columns: repeat(3, 1fr);
        gap: ${({isOpen}) => isOpen && '35px'};
    }
    @media (max-width: 911px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
    @media (max-width: 840px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: 35px;
        justify-content: space-around;
    }

    a {
        display: ${({isOpen}) => isOpen && 'flex'};
        //display: flex;
        @media (max-width: 840px) {
            flex-grow: 1;
            justify-content: center;
        }
    }
`
