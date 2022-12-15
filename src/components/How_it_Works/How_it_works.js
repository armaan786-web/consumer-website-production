import React from 'react'
import { WorksContainer, HeroBg, ImgBg, HowWrapper, HowContent, HowTitle, HowDesc, HowCardContainer, HowCardOne, CardImg, ImageBox, CardText, HowCardTwo, HowCardThree, HowCardFour } from './HowItWorksElements'
import Icon1 from '../../images/note.png'
import Icon2 from '../../images/handshake.png'
import Icon3 from '../../images/pipe-wrench.png'
import Icon4 from '../../images/rating.png'

const HowItWorks = () => {
    return (
        <WorksContainer>
            {/* <ImgBg /> */}
            <HeroBg>
                <ImgBg />
            </HeroBg>
            <HowWrapper>
                <HowContent>
                <HowTitle>How it works</HowTitle>
                <HowDesc>What we have done.</HowDesc>
                </HowContent>
                <HowCardContainer>
                    <HowCardOne>
                        <ImageBox>
                        <CardImg src={Icon1}/>
                        </ImageBox>
                        <CardText>Book Service</CardText>
                    </HowCardOne>
                    <HowCardTwo>
                        <ImageBox>
                        <CardImg src={Icon2}/>
                        </ImageBox>
                        <CardText>Confirmation By Centre</CardText>
                    </HowCardTwo>
                    <HowCardThree>
                        <ImageBox>
                        <CardImg src={Icon3}/>
                        </ImageBox>
                        <CardText>Completion</CardText>
                    </HowCardThree>
                    <HowCardFour>
                        <ImageBox>
                        <CardImg src={Icon4}/>
                        </ImageBox>
                        <CardText>Rating</CardText>
                    </HowCardFour>
                </HowCardContainer>
            </HowWrapper>
        </WorksContainer>
    )
}

export default HowItWorks
