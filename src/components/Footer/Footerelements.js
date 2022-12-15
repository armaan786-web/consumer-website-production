import styled from "styled-components";
import { Link as Links } from 'react-router-dom';


export const FooterContainer = styled.footer`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #363636;
    align-items: center;
    position: relative;

    @media screen and (max-width: 900px) {
        flex-direction: column;
        justify-content: center;
    }

`
export const FooterBox = styled.div`
    height: auto;
    width: 50%;
    margin: 0.5rem;
    display: flex;
    // background-color: red;

    @media screen and (max-width: 900px) {
        justify-content: center;
        margin-top: 0.9rem;
        text-align: center;
    }

    @media screen and (max-width: 675px) {
        width: 100%;
    }
`
export const FooterText = styled.p`
text-decoration: underline;
font: 400 14px/19px Montserrat;
letter-spacing: 0.42px;
color: #FBFBFB;
opacity: 1;
margin-left: 1rem;
/* font-size: 1.1rem; */
@media screen and (max-width: 768px) {
    font-size: 1rem;
    margin-left: 0;
    margin-top: 0.8rem;
}
@media screen and (max-width: 675px) {
    font-size: 0.9rem;
    margin-left: 0;
    margin-top: 0.8rem;
}
`
export const FooterDesc = styled.p`
font: 400 14px/19px Montserrat;
letter-spacing: 0.42px;
color: #FBFBFB;
opacity: 1;
padding: 0.8rem 0;
/* font-size: 1.1rem; */
text-align: center;
@media screen and (max-width: 768px) {
    font-size: 0.9rem;
}
@media screen and (max-width: 675px) {
    font-size: 1rem;
    line-height: 35px;
}
`

export const FooterIconBox = styled.div`
    height: auto;
    width: auto;

`

export const FooterIcon = styled.img`
    height: auto;
    width: 80%;
    margin: 0.6rem;

    @media screen and (max-width: 360px) {
        margin: 0.3rem;
        width: 70%;
        }

    @media screen and (max-width: 320px) {
    margin: 0.3rem;
    width: 70%;
    }


`