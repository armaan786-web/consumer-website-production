import styled from "styled-components";

export const PartnerContainer = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: -1;

    @media screen and (max-width: 768px) {
        height: 550px;
    }

    @media screen and (min-width:480px) and (max-width: 540px) {
        height: 650px;
    }

    @media screen and (max-width: 480px) {
        height: 600px;
    }
`

export const PartnerWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 1.5em;
    padding: 0 50px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`
export const PartnerCard = styled.div`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 4px 20px #0000001F;
    border-radius: 8px;
    opacity: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    transition: all 0.2s ease-in-out;
    height: 100px;
    width: 100%;
    color: #2B3BF6;


    @media screen and (min-width : 1050px) {
        width: 260px;
    }

    @media screen and (max-width : 480px) {
        max-height: 120px;
        width: 220px;
    } 

    &:hover {
        transform: scale(1.02);
        transition: all 0.3s ease-in-out;
        cursor: pointer;
    }
`


export const PartnerIcon = styled.img`
    height: 32px;
    width: 32px;
`
export const PartnerData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-left: 1rem;
    padding: 0%.5;
`




export const PartnerH1 = styled.h1`
    font-size: 2rem;
    font-weight: 500;
    color: #000000;
    margin-bottom: 2.5rem;
    text-align: center;

    @media screen and (max-width : 780px) {
        font-size: 1.6rem;
        margin-bottom: 2rem;
    }

    @media screen and (max-width : 480px) {
        font-size: 1.4rem;
        margin-bottom: 1.5rem;
    }
`

export const PartnerH4 = styled.h4`
    font-size: 1.2rem;
    color: #696969;
    font-weight: 400;
    text-align: center;
    margin-bottom: 3.5rem;
    max-width: 750px;

    @media screen and (max-width : 780px) {
        font-size: 1rem;
        margin-bottom: 3rem;
    }

    @media screen and (max-width : 480px) {
        font-size: 0.8rem;
        margin-bottom: 2.5rem;
    }
`


export const PartnerDataH2 = styled.h2`
    font-size: 1.3rem;
    text-align: left;
    font-weight: 400;
    color: #2B3BF6;
    opacity: 1;
    width: 100%;

    @media screen and (max-width : 780px) {
        font-size: 1.3rem;
    }

    @media screen and (max-width : 480px) {
        font-size: 1.2rem;
    }
`

export const PartnerDataP = styled.p`
    font-size: 1rem;
    text-align: left;
    font-weight: 400;
    color: #4F4F4F;
    opacity: 1;
    width: 100%;
`