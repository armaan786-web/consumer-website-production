import react from "react";
import { SeriveContainer, BackImgBg, ContContainer, ContDesc, ContTitle, AnyButtonText, ContSer, ContDown, ContImageBox, ContImage } from "./ThankElements";
import OnitFile from '../../components/OnitCon';
import AnyKind from '../../components/AnyKind';
import Footer from '../../components/Footer/Footer';
import playIcon from '../../images/NoPath-Copy(25).png'
import { withRouter, useHistory } from 'react-router-dom';

const About = (props) => {
    const history = useHistory()
    return (
        <div>
            <SeriveContainer>
            </SeriveContainer >
            <BackImgBg>
                <ContContainer>
                    <ContTitle>Thank you for Register</ContTitle>
                </ContContainer>
                <ContContainer>
                    <ContDesc>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO</ContDesc>
                </ContContainer>
                <ContContainer  onClick={() => {
                    history.push({
                        pathname: '/slots',
                    });
                }}>
                    <AnyButtonText>Continue</AnyButtonText>
                </ContContainer>
                <ContContainer>
                    <ContSer>
                        For Services & <span style={{ color: "#00796A" }}>more</span>
                    </ContSer>
                    <ContDown>
                        Download on
                    </ContDown>
                </ContContainer>
                <ContContainer style={{ margin: "0" }}>
                    <ContImageBox>
                        <ContImage src={playIcon} />
                    </ContImageBox>
                </ContContainer>
            </BackImgBg>
            <OnitFile />
            <Footer />
        </div>
    )
}

export default About;