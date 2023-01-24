import React from 'react';
import {StyledContainer} from '../../styled/styled-wpapper';
import {FooterBlock, FooterStyle, SocialIcons} from './footer-styled';
import facebook from '../../assets/img/faceboock.svg'
import instagram from '../../assets/img/instagramm.svg'
import vk from '../../assets/img/vk.svg'
import linkedin from '../../assets/img/linkedin.svg'

export const Footer = () => (
    <FooterStyle>
        <StyledContainer>
            <FooterBlock>
                <p>
                    © 2020-2023 Cleverland. Все права защищены.
                </p>
                <SocialIcons>
                    <a href="https://google.by">
                        <img src={facebook} alt="facebook"/>
                    </a>
                    <a href="https://google.by">
                        <img src={instagram} alt="instagram"/>
                    </a>
                    <a href="https://google.by">
                        <img src={vk} alt="vk"/>
                    </a>
                    <a href="https://google.by">
                        <img src={linkedin} alt="linkedin"/>
                    </a>
                </SocialIcons>
            </FooterBlock>
        </StyledContainer>
    </FooterStyle>

);

