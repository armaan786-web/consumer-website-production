import React from 'react'
import {
    FooterContainer, FooterBox, FooterText, FooterDesc, FooterIcon, FooterIconBox
} from './Footerelements';

import faceIcon from '../../images/Circle_Button.png'
import twiIcon from '../../images/CircleButton-1.png'
import linkIcon from '../../images/CircleButton-2.png'
import youIcon from '../../images/CircleButton-3.png'
import telIcon from '../../images/CircleButton-4.png'


const Footer = () => {
    return (
            <FooterContainer>
                {/* <FooterBox style={{ justifyContent: "space-around" }}>
                    <FooterText>Terms of Service</FooterText>
                    <FooterText>Refund Policy</FooterText>
                </FooterBox> */}
                {/* <FooterBox> */}
                    <FooterDesc>Copyright © 2022 Affordable deals pvt. ltd.</FooterDesc>
                {/* </FooterBox> */}
                {/* <FooterBox>
                    <FooterIconBox>
                        <FooterIcon src={faceIcon} />
                    </FooterIconBox>
                    <FooterIconBox>
                        <FooterIcon src={twiIcon} />
                    </FooterIconBox>
                    <FooterIconBox>
                        <FooterIcon src={linkIcon} />
                    </FooterIconBox>
                    <FooterIconBox>
                        <FooterIcon src={youIcon} />
                    </FooterIconBox>
                    <FooterIconBox>
                        <FooterIcon src={telIcon} />
                    </FooterIconBox>
                </FooterBox> */}
            </FooterContainer>
    )
}

export default Footer;
