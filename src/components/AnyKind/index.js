import React from 'react';
import { AnyContainer, AnyBox, AnyImageBox, AnyImage, AnyContentBox, AnyTitle, AnyDesc, AnyButton, AnyButtonText } from "./AnyElements";
import Image from '../../images/g10.png'


const AnyKind = () => {
    return (
        <AnyContainer>
            <AnyBox>
                <AnyImageBox>
                    <AnyImage src={Image} />
                </AnyImageBox>
                <AnyContentBox>
                    <AnyTitle>Need any kind of <span style={{color: "#00796A"}}>Help?</span></AnyTitle>
                    <AnyDesc>We take utmost care in providing you the services seamlessly, still, if you have some special requirements or need any support for booking, service charges, or payments, please write to us on the Email ID mentioned below.</AnyDesc>
                   <div>
                   <AnyButton>
                        <i className="ph-envelope" style={{marginRight: "3px", fontSize: "1rem"}}></i>help@onit.services
                    </AnyButton>
                   </div>
                </AnyContentBox>
            </AnyBox>
        </AnyContainer>
    )
}

export default AnyKind
