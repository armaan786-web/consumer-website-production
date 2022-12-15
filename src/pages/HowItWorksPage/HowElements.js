import styled from "styled-components";

export const HowBox = styled.div`
    height: auto;
    width: 100%;
    margin-top: 5rem;
`
export const HowContent = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const HowTitle = styled.div`
    height: auto;
    width: 100%;
    font: 700 40px/84px Montserrat;
    letter-spacing: 0px;
    color: #363636;
    opacity: 1;
    z-index: 1;
    font-size: 3rem;
    text-align: center;

    @media screen and (max-width: 800px) {
        font-size: 2rem;
    }  
`
export const HowD = styled.div`
height: auto;
width: 100%;
    font: 400 24px/32px Montserrat;
    letter-spacing: 0px;
    color: #363636;
    opacity: 1;
    // margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    text-align: center;
`
export const HowDesc = styled.div`
    font: 400 18px/28px Montserrat;
letter-spacing: 0px;
color: #363636;
opacity: 1;
height: auto;
width: 100%;
margin: 1rem 0;

    @media screen and (max-width: 800px) {
        font-size: 1.1rem;
    }   
`
export const AboutDesc = styled.div`
font: 400 18px/28px Montserrat;
letter-spacing: 0px;
color: #363636;
opacity: 1;
height: auto;
width: 100%;
padding: 0 6rem;
/* margin: 1rem 0; */
margin-bottom: 2rem;
text-align: center;

@media (max-width: 1200px){
    font-size: 1rem;
    margin: 0.5rem 0;
   }
   @media (max-width: 1024px){
    font-size: 0.8rem;
    margin: 0.3rem 0;
   }

`