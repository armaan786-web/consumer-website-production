import react from "react";
import { SeriveContainer, HeroBg, ImgBg, ServiceContainer, ServiceTitle, ServiceDesc, BackImgBg, AboutTitle, AboutDesc, ContOne, Conttwo, ContImage, ContContainer, ExtraCont } from "./AboutElements";
import OnitFile from '../../components/OnitCon';
import AnyKind from '../../components/AnyKind';
import Footer from '../../components/Footer/Footer';
import Contimg from '../../images/Onit_Images/MicrosoftTeams-image.png'

const About = (props) => {
    return (
        <div>
            <SeriveContainer>
                <HeroBg>
                    <ImgBg />
                </HeroBg>
                <ServiceContainer>
                    <ServiceTitle>About Us</ServiceTitle>
                    <ServiceDesc>Want to know more about us.</ServiceDesc>
                </ServiceContainer>
            </SeriveContainer >
            <BackImgBg>
                <ContContainer>
                    <ContOne>
                        <ContImage src={Contimg} />
                    </ContOne>
                    <Conttwo>
                        <AboutTitle>About <span style={{ color: "#00796A" }}>us</span></AboutTitle>
                        <AboutDesc>
                        Throughout our journey we have worked with various renounced brands with deep penetration in India and hence we know exactly what the customer needs.
                        </AboutDesc>
                        <AboutDesc>
                        This journey was started in 2016 and recently, ADPL has been the first company to get authorisation from Apple for their repair services as IRP.
                        </AboutDesc>
                        <AboutDesc>
                        We are a team of service professionals spread across the country and working towards  building a quick, easy and affordable place for all the home services needs.
                        </AboutDesc>
                    </Conttwo>
                </ContContainer>
                <ExtraCont>
                    <AboutDesc>
                        An ISO 9001:2015 certified organization "Affordable Deals Private Limited" was established in the year 2016. We are registered in the Start-up India program launched by the Honorable Prime minister Of India.
                    </AboutDesc>
                    <AboutDesc>
                    ADPL also comes under MSME of the Government of India. ADPL has established itself across the consumer world as an Organization which makes any Service, buying/purchase affordable for a customer, backed with core values like Integrity, Ethics and Reliability.
                    </AboutDesc>
                    <AboutDesc>
                        Learn more on: <span style={{ color: "#0080FF", padding: "auto" }}>https://www.affordabledeals.group/</span>
                    </AboutDesc>
                </ExtraCont>
            </BackImgBg>
            <AnyKind style={{marginTop: "0"}}/>
            <OnitFile />
            <Footer />
        </div>
    )
}

export default About;