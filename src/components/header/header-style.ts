import styled from 'styled-components';
import {PropsImageType} from "../../styled/image-wrapper";

export const HeaderStyle = styled.div`
    padding: 32px 0 15px 0;
    min-height: 58px;
    margin-bottom: 50px;
`
export const HeaderText = styled.div`
    flex: 1 1 auto;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.1px;
    color: #363636;
    margin-left: 120px;
    @media (max-width: 768.98px) {
        margin-left: 25px;
    }
`
export const HeaderProfile = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
    @media (max-width: 768.98px) {
        display: none;
    }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.1px;
    color: #363636;
  }
`
export const HeaderImageProfile = styled.div<PropsImageType>`
    display: flex;
    flex: 0 0 50%;
    text-align: center;
    max-width: ${({width}) => width || '96px'};
    max-height: ${({height}) => height || '96px'};
    border-radius: ${({borderRadius}) => borderRadius || '100%'};
    transition: all 0.3s;
    @media (max-width: 768.98px) {
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

