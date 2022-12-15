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
                <AboutTitle style={{ textAlign: "center", marginBottom: "1rem" }}>Privacy Policy</AboutTitle>
                <AboutDesc>
                    This Privacy Policy tells how information is gathered, used, and disclosed by OniT Services , a platform for services by Affordable Deals India Private Limited ("OniT", "we", or "us") when you use our websites, mobile applications, or other online services (collectively, the "Services").
                </AboutDesc>
                <AboutDesc>
                    Please read this Privacy Policy carefully. If you have any queries regarding our privacy practices, please contact us at <b>help@onit.services</b>. OniT services and affiliates (“OniT”) provide an online platform that connects Service Professionals (such as plumbers, electricians, carpenters, painters, etc.) with Customers seeking such services.
                </AboutDesc>
                <ContentTitle>
                    Background and Key Information
                </ContentTitle>
                <AboutDesc>
                    When you use our services, we accumulate the following types of information from or about you:
                    Personal Information You Provide to Us. We gather personal data from you when you: (1) register for an OniT account; (2) log in to your OniT account; (3) provide information in your OniT account profile; (4) request or book a service through our Services; (5) contact us with questions or feedback; and/or (6) provide us with reviews or other feedback about Service Professionals.
                </AboutDesc>
                <AboutDesc>
                    The personal information we collect from you may include:
                </AboutDesc>
                <ContentListBox>
                    <ContentListText>Name</ContentListText>
                    <ContentListText>Email address</ContentListText>
                    <ContentListText>Postal code</ContentListText>
                    <ContentListText>Phone number</ContentListText>
                    <ContentListText>Payment information (including credit card information)</ContentListText>
                    <ContentListText>Information about the services you requested or booked through our Services; and/or</ContentListText>
                    <ContentListText>Any other personal information you select to provide.</ContentListText>
                </ContentListBox>
                <AboutDesc>
                    If you book a service through our Services, we will also collect the following additional information from or about you:
                </AboutDesc>
                <ContentListBox>
                    <ContentListText>Service address</ContentListText>
                    <ContentListText>Service date and time</ContentListText>
                    <ContentListText>Description of the service requested</ContentListText>
                    <ContentListText>Information about any promotions you redeem</ContentListText>
                </ContentListBox>
                <AboutDesc>
                    In addition, when you use our services, we automatically collect the following types of information:
                    Usage Information. We collect information about your interactions with our Services, such as the pages or other content you view, your searches for Service Professionals, and bookings you make through our Services.
                </AboutDesc>
                <AboutDesc>
                    <b>Location Information</b>. We may collect precise geolocation information from your device when you use certain features of our Services. For example, we may collect and use your device’s geolocation to improve the quality of search results when you use our Services to look for Service Professionals near you. To stop us from collecting precise geolocation information from your device at any time, please follow the standard process for disabling such features on your mobile device.
                </AboutDesc>
                <AboutDesc>
                    <b>Device Information.</b> We accumulate data regarding the mobile device or computer you use to access our services, such as the hardware model, operating system and version, unique device identifiers, mobile network information, and browser type.
                </AboutDesc>
                <AboutDesc>
                    <b>Information Collected by Cookies and Other Tracking Technologies.</b> We use various technologies to collect information from your device and your interactions with our Services. This may include sending cookies to your device. 
                </AboutDesc>
                <ContentTitle>How Do We Collect Personal Data?</ContentTitle>
                <AboutDesc>We collect data in the following ways:</AboutDesc>
                <ContentListBox>
                    <ContentListText><b>Directly from you:</b> For instance, when you sign up for an account or book a service through our Services.</ContentListText>
                    <ContentListText><b>Automatically:</b> We automatically gather specific information about you and your device when you use our Services, as described above.</ContentListText>
                    <ContentListText>Description of the service requested</ContentListText>
                    <ContentListText><b>From third parties:</b> We may receive data about you from third parties. For example, if you book a service through our Services, we will collect your payment information from our payment processor.</ContentListText>
                </ContentListBox>
                <ContentTitle>
                How Do We Use Information?
                </ContentTitle>
                <AboutDesc>We collect the information for the following purposes:</AboutDesc>
                <ContentListBox>
                    <ContentListText>To provide and improve our Services: We use the information we collect to provide, operate, and improve our services.</ContentListText>
                    <ContentListText>To communicate with you: We use the information we collect to communicate about our Services, bookings, and payments. For example, we may send you emails or push notifications about your account or a booking you have made.</ContentListText>
                    <ContentListText>For billing and payments: We use the information we collect to process your bookings and payments.</ContentListText>
                    <ContentListText>To detect, prevent, and respond to fraud or other illegal activities: We use the information we collect (including from third parties) to detect, prevent, and respond to fraud, abuse, security risks, and technical issues.</ContentListText>
                    <ContentListText>For customer support: We use the information we collect to provide you with customer support, including responding to your requests or complaints.</ContentListText>
                    <ContentListText>To enforce our terms and conditions: We use the information we collect to enforce our Terms of Service and other policies.</ContentListText>
                    <ContentListText>For research and development: We use the information we collect for our own research and development purposes, such as to develop new products and features and to improve our Services.</ContentListText>
                    <ContentListText>For marketing: We use the information we collect to send you marketing communications, including information about our Services, special offers, and promotions. .</ContentListText>
                </ContentListBox>
                <ContentTitle>Cookies</ContentTitle>
                <AboutDesc>We use cookies and similar technologies to collect and store information for statistical purposes, to operate our website, to personalize your experience, as well as other purposes described in our Cookie Policy.</AboutDesc>
                <ContentTitle>Do Not Track Disclosures</ContentTitle>
                <AboutDesc>Some web browsers may transmit "do-not-track" signals to websites with which the browser communicates. We do not track our website visitors over time and across third-party websites to provide targeted advertising, but we may allow service providers that perform marketing services on our behalf or other Third parties to collect information about your online activities for similar purposes.</AboutDesc>
                <ContentTitle>Disclosure of Your Personal Data</ContentTitle>
                <AboutDesc>We may share your personal data with the following types of third parties:</AboutDesc>
                <ContentListBox>
                    <ContentListText>Service providers: We work with service providers who provide us with various services, such as website hosting, payment processing, data analysis, information technology, related infrastructure provision, customer service, email delivery, auditing, and other similar services.</ContentListText>
                    <ContentListText>Professional advisers: We work with professional advisers, such as lawyers, bankers, auditors, and insurers.</ContentListText>
                    <ContentListText>Government bodies: In response to requests from government agencies and to comply with applicable laws.</ContentListText>
                    <ContentListText>Other users: If you book a vacation rental through our Services, we will share your contact information and other relevant information with the owner or manager of the vacation rental.</ContentListText>
                    <ContentListText>Business partners: We may partner with other companies to offer joint products or services or to co-sponsor events or promotions. If you book a vacation rental through our Services, we will share your contact information and other relevant information with the owner or manager of the vacation rental.</ContentListText>
                    <ContentListText>Acquisitions, joint ventures, or reorganizations: If we are acquired by another company, if we enter into a joint venture with another company, or if we reorganize our business, we will share your personal data with our new business partners or owners.</ContentListText>
                </ContentListBox>
                <AboutDesc>We will also share your personal data when we have a good faith belief that disclosure is reasonably necessary to protect the rights, property, or safety of our company, customers, or others. We may also share aggregated data that does not identify you personally. For example, we may share information publicly to show trends in the general use of our Services.</AboutDesc>
                <ContentTitle>Your Rights Regarding Your Personal Data</ContentTitle>
                <AboutDesc>You have the following rights with respect to your personal data:</AboutDesc>
                <ContentListBox>
                    <ContentListText>Access and update: You can access and change most of your personal data by signing into your account. You may also contact us as described in the "Contact Us" section below.</ContentListText>
                    <ContentListText>Request deletion: You can request that we delete your personal data, but please note that we may be required (by law or otherwise) to keep this information and not delete it (or to anonymize it in certain circumstances).</ContentListText>
                    <ContentListText>Object to, limit, or restrict the use of your personal data: You can object to our use (i) as permitted by law; or (ii) where we must have your consent to use your personal data, and you have withdrawn this consent. If you do so, we may not be able to provide certain services to you. </ContentListText>
                    <ContentListText>Withdraw consent: Where we have obtained your consent to use your personal data, you may withdraw this consent at any time, and we will stop using your personal data for the purposes for which you originally consented.</ContentListText>
                </ContentListBox>
                <ContentTitle>Data Security</ContentTitle>
                <AboutDesc>We have put in place appropriate physical, electronic, and managerial safeguards designed to protect the personal data that we collect about you. However, please note that no data transmission or storage can be guaranteed to be 100% secure. As a result, while we strive to protect your personal data, we cannot guarantee or warrant the security of any information you transmit to us, and you do so at your own risk. Once we receive your transmission, we make our best effort to ensure its security on our systems.</AboutDesc>
                <AboutDesc>Our commitment to data security is subject to change at any time in response to new technology or legal developments. We will post any revised commitment to data security on this page, and if the changes are significant, we will provide a more prominent notice (including, for certain services, email notification of data security changes). Please check back frequently to see any updates or changes to our commitment to data security.</AboutDesc>
                <ContentTitle>Retention of Your Personal Data</ContentTitle>
                <AboutDesc>We retain your personal data for as long as necessary for the purposes set out in this policy unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this policy will require us to keep your personal data for longer than the period of time in which people can bring claims under applicable law. </AboutDesc>
                <AboutDesc>When we have no use of your personal data, we will either anonymize or delete it. If this is not feasible (for instance, due to your personal data having been saved in backup archives), then we will securely keep your and isolate it from any further processing until deletion is possible.</AboutDesc>
                <ContentTitle>Changes to Our Privacy Policy</ContentTitle>
                <AboutDesc>We may change this privacy policy from time to time. If we make changes, we will post the revised policy on this page and update the "Last Updated" date above. We may also provide you with additional notice (such as adding a statement to our homepage or sending you an email notification). If we make changes that materially alter your rights under this privacy policy, we will provide you with prominent notice as appropriate under the circumstances, e.g., by displaying a prominent notice within the Service or by sending you an email. Your continued use of our Service after such modifications will constitute your: (i) acknowledgment of the modified policy; and (ii) agreement to abide and be bound by that policy.</AboutDesc>
                <ContentTitle>Contact Us</ContentTitle>
                <AboutDesc>If you have any questions or comments about this privacy policy, or if you would like us to update information we have about you or your preferences, please contact us at:</AboutDesc>
                <AboutDesc>Email Address: <b>help@onit.services.</b></AboutDesc>
            </ExtraCont>
            <OnitFile />
            <Footer />
        </div>
    )
}

export default About;