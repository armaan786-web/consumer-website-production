import react from "react";
import { SeriveContainer, HeroBg, ImgBg, ServiceContainer, ServiceTitle, ServiceDesc, BackImgBg, AboutTitle, ContOne, Conttwo, ContImage, ContContainer, ExtraCont } from "../AboutUs/AboutElements";
import { HowTitle, HowD, AboutDesc } from "./HowElements"
import OnitFile from '../../components/OnitCon';
import AnyKind from '../../components/AnyKind';
import Footer from '../../components/Footer/Footer';
import { HowContent } from "../../components/How_it_Works/HowItWorksElements"
import Contimg from '../../images/Onit_Images/MicrosoftTeams-image.png'

const About = (props) => {
    return (
        <div>
            <SeriveContainer>
                <HeroBg>
                    <ImgBg />
                </HeroBg>
                <ServiceContainer>
                    <ServiceTitle>How it works</ServiceTitle>
                    <ServiceDesc>What we have done</ServiceDesc>
                </ServiceContainer>
            </SeriveContainer >
                <BackImgBg>
                    <HowContent>
                        {/* <HowTitle>How it works</HowTitle>
                        <HowD>What we have done.</HowD> */}
                    </HowContent>
                    <AboutDesc>
                        Book a Service anytime and from anywhere and leave the rest on us.
                        We will send the nearest skilled personnel  to serve you most economically
                        Rest Assured, you will get speedy service, a competitive price and 30 days warranty period We will give refund of booking amount if service is not availed (it will take 7 days).
                    </AboutDesc>
                </BackImgBg>
                <AnyKind style={{ marginTop: "0" }} />
                <OnitFile />
                <Footer />
        </div>
    )
}

export default About;