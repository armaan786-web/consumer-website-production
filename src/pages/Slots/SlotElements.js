import styled from "@emotion/styled";
import HomeBg from '../../images/Onit_Images/Group62713.png'

export const SeriveContainer = styled.div`
display: flex;
align-items: center;
height: 500px;
width: 100%;
position: relative;
z-index: 1;
border: none;
flex-direction: column;


@media screen and (max-width: 480px) {
    height: 450px;
}

/* add :before styles */
:before {
    content: "";
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg, 
        rgba(0,0,0,0.2) 0%, 
        rgba(0,0,0,0.6) 100%
        ), 
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%
        );
        z-index: 2;
}
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: url(${HomeBg}) no-repeat center center / cover;
    background-position-x: right;

    @media screen and (max-width: 768px) {
        background: linear-gradient(90deg, #020204 0%, #000000FC 40%, #0E0E0E47 99%, #55555700 100%), url(${HomeBg}) no-repeat center center / cover;
            background-position-x: right;
    }

    @media screen and (max-width: 480px) {
        background: linear-gradient(90deg, #020204 0%, #000000FC 35%, #0E0E0E47 105%, #55555700 100%), url(${HomeBg}) no-repeat center center / cover;
            background-position-x: right;
    }
;
`

export const ServiceContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    z-index: 3;
    margin-top: 12rem;
`
export const ServiceTitle = styled.div`
    height: auto;
    width: 100%;
    text-align: center;
    font: 700 40px/84px Montserrat;
    letter-spacing: 0px;
    color: #FBFBFB;
    opacity: 1;

    @media screen and (max-width: 800px) {
        font-size: 2rem;
    }    
`
export const ServiceDesc = styled.div`
    height: auto;
    width: 100%;
    text-align: center;
    font: 400 24px/32px Montserrat;
    letter-spacing: 0px;
    color: #FBFBFB;
    opacity: 1;

    @media screen and (max-width: 800px) {
        font-size: 1.1rem;
    }   
`
// Form

export const SericeFormBox = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    margin-top: 5rem;
    margin-bottom: 12rem;

    @media screen and (max-width: 425px) {
        margin-bottom: 18rem;
    } 
    @media screen and (max-width: 375px) {
        margin-bottom: 30rem;
    } 
`
export const SericeForm = styled.div`
    height: auto;
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 11px 21px #0000001A;
    border-radius: 10px;
    opacity: 1;
    padding: 3rem;
    justify-content: center;

    @media screen and (max-width: 1300px) {
        width: 60%;
    }
    @media screen and (max-width: 1100px) {
        width: 70%;
    }
    @media screen and (max-width: 1024px) {
        width: 80%;
    }   
    
    @media(max-width: 850px){
        padding: 1rem;
    } 
`
export const ServiceFromTitle = styled.div`
    height: auto;
    width: 100%;
    font: normal normal bold 32px/32px Montserrat;
    letter-spacing: 0px;
    color: #363636;
    opacity: 1;
    text-align: center;

    @media screen and (max-width: 1024px) {
        font-size: 1.5rem;
    }
`
export const ServiceFormRow = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const FormLabel = styled.label`
    text-align: left;
    font: 600 16px/32px Montserrat;
    letter-spacing: 0px;
    opacity: 1;
    margin-bottom: 0.5rem;

    @media screen and (max-width: 1024px) {
        font-size: 0.9rem;
    }
`
export const ServiceText = styled.div`
    font: 500 16px/19px Montserrat;
    letter-spacing: 0px;
    color: #252631;
    opacity: 1;
    height: 10%;
    width: auto;
    display: flex;
    padding: 0.6rem 1.2rem;
    align-items: center;
    justify-content: center;
`

export const ServiceSearch = styled.div`
    font: 500 16px/19px Montserrat;
    letter-spacing: 0px;
    color: #252631;
    opacity: 0.5;
    height: auto;
    width: 80%;
    display: flex;
    align-items: center;
    border-left: 2px solid #00796A;
    // padding: 0.6rem 1.2rem;
`

export const SearchIcon = styled.img`
    height: auto;
    width: auto;
    display: flex;
`

export const AnyButtonText = styled.button`
width: 100%;
background: #00796A 0% 0% no-repeat padding-box;
    border: 1px solid #00796A;
    border-radius: 4px;
    opacity: 1;
    font: 500 14px/18px Montserrat;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    padding: 1rem 1.7rem;
    font-size: 1.3rem;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`

export const InputBox = styled.div`
    width: 47%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`
export const InputFullBox = styled.div`
    width: 100%;
`

export const CoupanBox = styled.div`
    display: flex;
    background-color: #00796A1A;
    padding: 0.5rem;
    border-style: dashed;
    justify-content: center;
    align-items: center;
    width: 47%;
    background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #C1C1C1;
border-radius: 8px;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0rem;
        margin-bottom: 1rem;
    }

`

// Payment Label

export const PayLabel = styled.div`
text-align: center;
font: 400 18px/32px Montserrat;
letter-spacing: 0px;
opacity: 1;
margin-top: 10px;
`

export const CardContainer = styled.div`
    height: auto;
    /* width: 75%; */
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 5rem;
    margin-top: 2.2rem;
    padding: 0.7rem;

    @media(max-width: 2000px){
        width: 85%;
    padding: 0.7rem;

    }
    @media(max-width: 1440px){
        grid-gap: 33px;
    }
    @media(max-width: 1300px){
        margin: auto;
    }
    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 5rem;
    margin-top: 3.5rem;
    }
    @media(max-width: 550px){
        padding: 0 2rem;
    }
    @media(max-width: 425px){
        padding: 0;
    }
`

export const CardBox = styled.div`
    height: auto;
    width: 100%;
    /* background: #FFFFFF 0% 0% no-repeat padding-box; */
border: 1px solid #C1C1C1;
border-radius: 8px;
opacity: 1;
display: flex;
flex-direction: column;
padding: 0.7rem;


@media(max-width: 768px){
        padding: 0;
    }
/* @media(max-width: 2000px){
        width: 1px;
    padding: 0.7rem;

    } */
`

export const CardTitle = styled.div`
text-align: center;
font: 400 16px/32px Montserrat;
letter-spacing: 0px;
color: #000000;
opacity: 1;
margin-bottom: 0.4rem;

@media(max-width: 650px){
         font-size: 0.8rem;
    }
`
export const CardDay = styled.div`
text-align: center;
font: 700 30px/32px Montserrat;
letter-spacing: 0px;
color: #00796A;
opacity: 1;
background-color: #e5f1f0;
padding: 0.5rem 1rem;
margin-bottom: 0.4rem;
@media(max-width: 650px){
         font-size: 1.4rem;
         padding: 0;
    }

`
export const CardTime = styled.div`
text-align: center;
font: 600 17px/27px Montserrat;
letter-spacing: 0px;
color: #000000;
opacity: 1;
margin-bottom: 0.4rem;

`
export const CardSes = styled.div`
text-align: center;
font: 400 13px/20px Montserrat;
letter-spacing: 0px;
color: #252631;
opacity: 1;
background-color: #e2e3e9;
padding: 0.3rem 1rem;
margin-bottom: 0.7rem;

@media(max-width: 650px){
         font-size: 0.8rem;
    }

`
export const BookBox = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BookButton = styled.button`
    outline: none;
    border: none;
    background: #00796A 0% 0% no-repeat padding-box;
    border-radius: 4px;
    opacity: 1;
    text-align: center;
    font: 400 16px/32px Montserrat;
    letter-spacing: 0px;
    color: #FFFFFF;
    padding: 0.5rem 5.6rem;

    @media(max-width: 650px){
         font-size: 1rem;
         padding: 0.3rem 3.3rem;
    }
`
export const UpperContainer = styled.div`
    height: auto;
    width: 100%;
    padding: 2rem 2.3rem 0.5rem 2.3rem;

@media(max-width: 550px){
         padding: 2rem 3.3rem 0.5rem 3.3rem;
    }
    @media(max-width: 425px){
        padding: 2rem 2rem 0.5rem 2rem;
    }
`