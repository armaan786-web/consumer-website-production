import React from 'react'
import { PartnerContainer, PartnerH1, PartnerH4, PartnerWrapper, PartnerCard, PartnerIcon, PartnerData, PartnerDataH2, PartnerDataP } from './PartnerElements'
import Icon1 from '../../images/partnerIcon1.png'
import Icon2 from '../../images/partnerIcon2.png'
import Icon3 from '../../images/partnerIcon3.png'

const Partner = () => {
    return (
        <PartnerContainer id="works" className="container">
            <PartnerH1>
            Why should you partner with DropGrub?
            </PartnerH1>
            <PartnerH4>
            DropGrub enables you to get 60% more revenue, 10x new customers and boost your brand visibility by providing insights to improve your businenss.
            </PartnerH4>
            <PartnerWrapper>
                <PartnerCard>
                    <PartnerIcon src={Icon1}></PartnerIcon>
                    <PartnerData>
                        <PartnerDataH2>
                            500+ cities
                        </PartnerDataH2>
                        <PartnerDataP>
                            in india
                        </PartnerDataP>
                    </PartnerData>
                </PartnerCard>
                <PartnerCard>
                    <PartnerIcon src={Icon2}></PartnerIcon>
                    <PartnerData>
                        <PartnerDataH2>
                            500+ cities
                        </PartnerDataH2>
                        <PartnerDataP>
                            in india
                        </PartnerDataP>
                    </PartnerData>
                </PartnerCard>
                <PartnerCard>
                    <PartnerIcon src={Icon3}></PartnerIcon>
                    <PartnerData>
                        <PartnerDataH2>
                            500+ cities
                        </PartnerDataH2>
                        <PartnerDataP>
                            in india
                        </PartnerDataP>
                    </PartnerData>
                </PartnerCard>
            </PartnerWrapper>
        </PartnerContainer>
    )
}

export default Partner;
