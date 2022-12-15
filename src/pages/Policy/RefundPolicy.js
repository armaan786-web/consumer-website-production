import react from "react";
import { SeriveContainer, HeroBg, ImgBg, ServiceContainer, ServiceTitle, ServiceDesc, BackImgBg, AboutTitle, AboutDesc, ContOne, Conttwo, ContImage, ContContainer, ExtraCont } from "../AboutUs/AboutElements";
import { ContentTitle, ContentListText, ContentListBox } from "./PolicyElements"
import OnitFile from '../../components/OnitCon';
import AnyKind from '../../components/AnyKind';
import Footer from '../../components/Footer/Footer';
import Contimg from '../../images/Onit_Images/MicrosoftTeams-image.png'

const About = (props) => {
    return (
        <div>
            <ContContainer>
                <Conttwo>
                </Conttwo>
            </ContContainer>
            <ExtraCont>
                <AboutTitle style={{ textAlign: "center", marginBottom: "1rem" }}>Refund Policy</AboutTitle>
                <AboutDesc>
                Please read the following policy to know the rework and refund policy of OniT. Acceptance of this Policy is necessary before booking any service from OniT.
                </AboutDesc>
                <ContentTitle>
                Introduction
                </ContentTitle>
                <AboutDesc>
                OniT believes in customer satisfaction and hence provides rework on the delivered services if the client is not satisfied. The company also offers a refund if we are unable to complete the project or if the client is not happy with what has been delivered.
                </AboutDesc>
                <AboutDesc>
                In order to get a refund, the customer needs to contact our support team and raise a refund request. The request will be evaluated by our team, and if it is found to be valid, the amount will be refunded within 7-10 working days.
                </AboutDesc>
                <ContentTitle>
                Rework
                </ContentTitle>
                <AboutDesc>
                If the client is not satisfied with the delivered work, he/she can ask for a rework. The company will make the necessary changes to deliver the project as per the client’s expectations. The customer needs to contact our support team and raise a rework request. The request will be evaluated by our team, and if it is found to be valid, the work will be redone within 7-10 working days. Rework request can be raised within 30 days of work completion. 
                </AboutDesc>
                <ContentTitle>
                Refund
                </ContentTitle>
                <AboutDesc>
                If the company is unable to complete the service or if the client is not satisfied with the delivered work, a refund will be provided. The customer needs to contact our support team and raise a refund request. The request will be evaluated by our team, and if it is found to be valid, the amount will be refunded within 7-10 working days.
                </AboutDesc>
                <AboutDesc><b>Conditions for Refund-</b></AboutDesc>
                <AboutDesc>There are certain conditions that need to be met in order for the customer to be eligible for a refund. These are-</AboutDesc>
                <ContentListBox>
                    <ContentListText>The customer needs to have paid the full amount for the service.</ContentListText>
                    <ContentListText>The request for a refund needs to be made within 7 days of receiving the delivered work.</ContentListText>
                    <ContentListText>The customer should not have asked for more than 2 revisions of the delivered work.</ContentListText>
                    <ContentListText>Refund Amount is limited to the Labour Charges only. </ContentListText>
                    <ContentListText>If the customer has availed of any discount or offer while making the payment, the refund will be calculated after deducting the amount of discount or offer from the total paid amount.</ContentListText>
                    <ContentListText>Any Part Procured for the work has a separate warranty by the part manufacturer / seller. ONIT or its associates are no way liable for it. Customers should ask for bill/invoice for any part replaced and keep it safe for any warranty claim.</ContentListText>
                </ContentListBox>
                <ContentTitle>Cancellation</ContentTitle>
                <AboutDesc>If the client wants to cancel the service before it is completed, he/she can do so by contacting our support team. The company will evaluate the request, and if it is found to be valid, the amount will be refunded within 7-10 working days.</AboutDesc>
                <ContentTitle>Additional Information</ContentTitle>
                <AboutDesc>The company reserves the right to change this policy at any time. If any changes are made, the revised policy will be updated on our website. Also, note that this policy is only applicable to the services provided by OniT. With respect to services provided by our partners, their refund and cancellation policies will be applicable. For any further clarification, feel free to contact our support team at <b>help@onit.services.</b></AboutDesc>
            </ExtraCont>
            <OnitFile />
            <Footer />
        </div>
    )
}

export default About;