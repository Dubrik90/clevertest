import {FC} from 'react';
import {StyledDiv} from './styled-div';

type PropsDefault = {
    disabled: boolean
}


type StyledButton = {

    isOpen: boolean
}


export type PropsButtonType = PropsDefault & StyledButton;

export type PropsDiv = Partial<PropsButtonType>

export const DivStyle: FC<PropsDiv> = (props) => (
    <StyledDiv {...props}/>
);


