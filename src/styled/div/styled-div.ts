import styled from 'styled-components';
import {PropsDiv} from './div-style';

export const StyledDiv = styled.div<PropsDiv>`
    display: ${({isOpen}) => isOpen ? 'grid' : 'flex'};
    flex-direction: column;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    @media (max-width: 1050.98px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 35px;
    }
    @media (max-width: 911.98px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
    @media (max-width: 840.98px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: 35px;
        justify-content: space-around;
    }
`
