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
                <AboutTitle style={{ textAlign: "center", marginBottom: "1rem" }}>Terms of Use</AboutTitle>
                <ContentTitle>
                    Acceptance
                </ContentTitle>
                <AboutDesc>
                    When you use our services, we accumulate the following types of information from or about you:
                    Personal Information You Provide to Us. We gather personal data from you when you: (1) register for an OniT account; (2) log in to your OniT account; (3) provide information in your OniT account profile; (4) request or book a service through our Services; (5) contact us with questions or feedback; and/or (6) provide us with reviews or other feedback about Service Professionals.
                </AboutDesc>
                <ContentTitle>
                    Changes
                </ContentTitle>
                <AboutDesc>
                    We may revise these Terms of Use at any time without prior notice. You are advised to check these Terms of Use periodically for any changes. Your continued use of the Services after any such changes shall constitute your acknowledgment and acceptance of the revised terms and conditions.
                </AboutDesc>
                <ContentTitle>
                    Accessing the Services
                </ContentTitle>
                <AboutDesc>
                    To access our Services, you must have a compatible device and internet access. You are responsible for any and all charges incurred by you in order to access the Services, including but not limited to charges from your internet service provider.
                </AboutDesc>
                <AboutDesc>
                    You must be of legal age to use our Services. By using our Services, you represent and warrant that you meet the age requirements set forth in these Terms of Use.
                </AboutDesc>
                <ContentTitle>Registration</ContentTitle>
                <AboutDesc>Some features of the Services may require you to register for an account. When you register, you will be asked to provide certain information about yourself, including your name and contact information. You agree that the information you provide to us is accurate and up-to-date.</AboutDesc>
                <AboutDesc>You are responsible for safeguarding your password. You agree not to disclose your password to any third party and take sole responsibility for any activities or actions taken under your account, whether or not you have authorized such activities or actions. You will instantly inform us of any unauthorized use of your account.</AboutDesc>
                <AboutDesc>We reserve the right to refuse registration, terminate accounts, and remove or edit content at our sole discretion.</AboutDesc>
                <ContentTitle>Third-Party Disclaimer</ContentTitle>
                <AboutDesc>The Services may contain links to websites or resources not owned or controlled by OniT. We have no control over and assume no responsibility for any third-party websites or services' content, terms & conditions, privacy policies, or practices. </AboutDesc>
                <AboutDesc>
                    You further acknowledge that OniT shall not be liable, directly or indirectly, for any loss or damage caused by or in connection with the use of or reliance on any such content, services, or goods available on or via any such websites or services. We sincerely advise you to read any third-party websites or services' terms and conditions and privacy policies.
                </AboutDesc>
                <ContentTitle>Limitation of Liability</ContentTitle>
                <AboutDesc>
                    To the fullest extent permissible by law, OniT shall not be liable for any special, indirect, punitive, exemplary, or substantial damages, including but not restricted to loss of profits or data, in any way arising out of or associated with these Terms of Use or your use of our Services.
                </AboutDesc>
                <AboutDesc>OniT’s liability to you for any and all claims arising out of or related to these Terms of Use or your use of our Services, regardless of the form of action, shall not surpass the whole amount you have paid to OniT in the twelve (12) months prior to the filing of such claim.</AboutDesc>
                <AboutDesc>The limitations set forth here shall apply even if the remedies otherwise provided in these Terms of Use fail in their essential purpose.</AboutDesc>
                <ContentTitle>Indemnification</ContentTitle>
                <AboutDesc>You agree to indemnify, defend and hold OniT and its affiliates, officers, directors, employees, and agents harmless from any demand or claim demand (including reasonable attorneys’ fees) performed by any third party because of or arising out of:</AboutDesc>
                <ContentListBox>
                    <ContentListText>Your use of our Services.</ContentListText>
                    <ContentListText>Your violation or breach of these Terms of Use.</ContentListText>
                    <ContentListText>Infringement by you, or any third party using your device or account, of any intellectual property right or other rights of any person or entity.</ContentListText>
                    <ContentListText>Your violation of any law, rule, or regulation.</ContentListText>
                </ContentListBox>
                <ContentTitle>Content</ContentTitle>
                <AboutDesc>You are responsible for all content you upload, post, or otherwise make available through the Services ("Content"). We claim no ownership over your content.</AboutDesc>
                <AboutDesc>You retain all ownership rights in your content, and you are responsible for protecting those rights. We are not liable for any misuse or loss of data that occurs through the Services. You agree not to upload, post, or otherwise make available through the Services any Content that:</AboutDesc>
                <ContentListBox>
                    <ContentListText>is unlawful, harmful, threatening, abusive, harassing, tortuous, defamatory, vulgar, obscene, libelous, invasive of another's privacy rights, hateful racially, ethnically or otherwise, or otherwise objectionable;</ContentListText>
                    <ContentListText>you do not have a right to make available under any law or under contractual or fiduciary relationships;</ContentListText>
                    <ContentListText>infringes any trademark, patent, trade secret, copyright, or other rights of any group;</ContentListText>
                    <ContentListText>includes unauthorized or unsolicited promotional materials, spam, chain letters, junk mail, or any other form of solicitation;</ContentListText>
                </ContentListBox>
                <ContentTitle>Reviews, Ratings, & Comments by Users</ContentTitle>
                <AboutDesc>The Services may allow you to post reviews, ratings, and comments. Any views, opinions, advice, statements, or other information expressed by users in reviews, ratings, and comments do not reflect our views.</AboutDesc>
                <AboutDesc>You agree not to post any review, rating, or comment that:</AboutDesc>
                <ContentListBox>
                    <ContentListText>is false, inaccurate, or misleading;</ContentListText>
                    <ContentListText>is defamatory, libelous, threatening, or harassing;</ContentListText>
                    <ContentListText>is obscene or contains profanity;</ContentListText>
                    <ContentListText>violates the intellectual property rights of any person or entity;</ContentListText>
                    <ContentListText>violates these Terms of Use; or</ContentListText>
                    <ContentListText>promotes illegal activity.</ContentListText>
                </ContentListBox>
                <AboutDesc>We reserve the right (but have no obligation) to review, monitor, or remove reviews, ratings, and comments at our sole discretion and without giving any reason to anyone.</AboutDesc>
                <ContentTitle>Warranty Disclaimer </ContentTitle>
                <AboutDesc>Remember our Services are provided “as is” and “as available.” We do not warrant that the Services will meet your requirements or be available on an uninterrupted, secure, or error-free basis.
                    To the greatest extent permitted by suitable law, we reject all warranties, express or implied, including, but not restricted to, indicated warranties of merchantability, fitness for a particular purpose, title, and non-infringement.
                </AboutDesc>
                <AboutDesc>Some jurisdictions do not let limitations on implied warranties. Some of the foregoing restrictions might not apply to you in such jurisdictions.</AboutDesc>
                <ContentTitle>Intellectual Property </ContentTitle>
                <AboutDesc>The Services are protected by copyright, trademark, and other laws of the United States and foreign countries. Except as expressly provided in these Terms of Use, we (and our licensors) exclusively own all rights, title, and interest in and to the Services, including all associated intellectual property rights.</AboutDesc>
                <AboutDesc>You agree not to remove, alter or obscure any copyright, trademark, service mark, or other proprietary notices, legends, symbols, or labels appearing on the Services.</AboutDesc>
                <ContentTitle>Miscellaneous</ContentTitle>
                <AboutDesc>If any provision of these Terms of Use is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties' intentions as reflected in the provision and the other provisions of these Terms of Use remain in full force and effect.</AboutDesc>
                <AboutDesc>You may not assign or transfer these Terms of Use or any rights hereunder, and any attempt to the contrary is void. We may freely assign these Terms of Use.</AboutDesc>
                <AboutDesc>The failure by either party to exercise or enforce any right or provision of these Terms of Use does not constitute a waiver of such right or provision. These Terms of Use contain the entire understanding of the parties regarding its subject matter and supersedes all prior and contemporaneous agreements and understandings between the parties regarding its subject matter.</AboutDesc>
                <AboutDesc>You agree that any claim or cause of action arising out of or related to these Terms of Use or the Services must be filed within 30 days after such claim or cause of action arose, or it will be forever barred.</AboutDesc>
                <ContentTitle>End of Terms of Use Agreement</ContentTitle>
                <AboutDesc>This Terms of Use Agreement was last updated on May 1, 2022.</AboutDesc>
                <AboutDesc>For more info, you can contact us at <b>help@onit.services.</b></AboutDesc>
            </ExtraCont>
            <OnitFile />
            <Footer />
        </div>
    )
}

export default About;