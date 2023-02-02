import {FC} from 'react';

import {StyledDiv} from './styled-div';

type PropsDefault = {
    disabled: boolean
}

type DivStyled = {
    isOpen: boolean
}


export type PropsButtonType = PropsDefault & DivStyled;

export type PropsDiv = Partial<PropsButtonType>

export const DivStyle: FC<PropsDiv> = (props) => (
    <StyledDiv {...props}/>
);


