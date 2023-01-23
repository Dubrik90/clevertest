import styled from 'styled-components';
import {PropsDiv} from './div-style';

export const StyledDiv = styled.div<PropsDiv>`
    display: ${({isOpen}) => isOpen ? 'grid' : 'flex'};
    flex-direction: column;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px
`
