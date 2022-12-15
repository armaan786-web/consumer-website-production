import React from 'react';
import { OnitContainer, OnitBoxOne, OnitBoxTwo, OnitTitleBox, OnitColumnCon, OnitColumnBox, OnitBoxThree, OnitDesc, OnitTitle, OnitSubDesc, MainBox, SocialRow, SocialIcon, CommonDiv, OnitImageCon, OnitImage, OnitSubDescPolicy, OnitSubDescContact } from "./OnitElements";
import logoWlogin from '../../images/Group1.png'
import {
    FooterContainer, FooterBox, FooterText, FooterDesc, FooterIcon, FooterIconBox
} from '../Footer/Footerelements';
import faceIcon from '../../images/Circle_Button.png'
import twiIcon from '../../images/CircleButton-1.png'
import linkIcon from '../../images/CircleButton-2.png'
import youIcon from '../../images/CircleButton-3.png'
import telIcon from '../../images/CircleButton-4.png'
import whatsIcon from '../../images/whatspp.png'
// import instaIcon from '../../images/insta.png'
import onitLogo from "../../images/Onit Logo/main_logo.png"
import footerLogo from '../../images/footerlogo.png'



const OnitFile = () => {
    return (
        <OnitContainer>
            <OnitBoxOne>
                {/* <OnitTitle>
                    OniT
                </OnitTitle> */}
                <OnitImageCon>
                    <OnitImage src={footerLogo} />
                </OnitImageCon>
                <OnitDesc>
                    Enabling Home Service Providers Go Digital Save Office and Other Expenses Provide Quality Services to Users with Speed and Reliability.
                </OnitDesc>
            </OnitBoxOne>
            <OnitBoxTwo>
                <OnitTitleBox>
                    Policies
                </OnitTitleBox>
                <OnitColumnCon>
                    <OnitColumnBox>
                        <OnitSubDesc href='https://www.affordabledeals.group/' target="_blank">Other services</OnitSubDesc>
                        <OnitSubDescPolicy to="/terms-of-use" target="_blank">Terms of Service</OnitSubDescPolicy>
                        <OnitSubDescPolicy to="/privacy-policy" target="_blank">Privacy Policy</OnitSubDescPolicy>
                        <OnitSubDescPolicy to="/refund-policy" target="_blank">Refund Policy</OnitSubDescPolicy>
                    </OnitColumnBox>
                </OnitColumnCon>
            </OnitBoxTwo>
            <OnitBoxTwo>
                <OnitTitleBox>
                    Contact Us
                </OnitTitleBox>
                <OnitColumnCon>
                    <OnitColumnBox style={{ padding: "0 0 0 25px" }}>
                        <OnitSubDescContact style={{ textAlign: "left" }}>OniT services</OnitSubDescContact>
                        <OnitSubDescContact style={{ textAlign: "left" }}>515 Patparganj Industrial Area</OnitSubDescContact>
                        <OnitSubDescContact style={{ textAlign: "left" }}>New Delhi 110092</OnitSubDescContact>
                        <OnitSubDescContact style={{ textAlign: "left" }}>Phone no. 9310539674</OnitSubDescContact>
                    </OnitColumnBox>
                </OnitColumnCon>
            </OnitBoxTwo>
            <OnitBoxThree>
                <OnitTitleBox>
                    Social Links
                </OnitTitleBox>
                <OnitColumnCon>
                    <OnitColumnBox>
                        <SocialRow>
                            <CommonDiv>
                                <SocialIcon src={faceIcon} />
                            </CommonDiv>
                            <OnitSubDesc href='https://www.facebook.com/profile.php?id=100083150591316' target="_blank">Facebook</OnitSubDesc>
                        </SocialRow>
                        <SocialRow>
                            <CommonDiv>
                                <SocialIcon src={twiIcon} />
                            </CommonDiv>
                            <OnitSubDesc href='https://twitter.com/services_onit?t=SquaGUwKq6gK6wi1PisNKQ&s=08' target="_blank">Twitter</OnitSubDesc>
                        </SocialRow>
                        <SocialRow>
                            <CommonDiv>
                                <SocialIcon src={linkIcon} />
                            </CommonDiv>
                            <OnitSubDesc href='https://www.linkedin.com/company/onitservices/' target="_blank">Linkedin</OnitSubDesc>
                        </SocialRow>
                        <SocialRow>
                            <CommonDiv>
                                <SocialIcon src={youIcon} />
                            </CommonDiv>
                            <OnitSubDesc href='https://www.youtube.com/channel/UCuhzqj34gLM10HFT8BUXQGg' target="_blank">Youtube</OnitSubDesc>
                        </SocialRow>
                        <SocialRow>
                            <CommonDiv>
                                {/* <SocialIcon src={instaIcon} /> */}
                            </CommonDiv>
                            <OnitSubDesc href='https://www.instagram.com/onitservices/' target="_blank">Instagram</OnitSubDesc>
                        </SocialRow>
                        <SocialRow>
                            <CommonDiv>
                                <SocialIcon src={whatsIcon} />
                            </CommonDiv>
                            {/* <OnitSubDesc>+917204027477</OnitSubDesc> */}
                            <OnitSubDesc href='https://wa.me/+919310539674' target="_blank">WhatsApp</OnitSubDesc>
                        </SocialRow>
                    </OnitColumnBox>
                </OnitColumnCon>
            </OnitBoxThree>
        </OnitContainer>
    )
}

export default OnitFile
