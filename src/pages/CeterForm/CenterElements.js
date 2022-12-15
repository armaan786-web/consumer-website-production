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
    z-index: 15;
    margin-top: -5rem;
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
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 11px 21px #0000001A;
    border-radius: 10px;
    opacity: 1;
    padding: 3rem;
    z-index: 1;

    @media screen and (max-width: 1024px) {
        width: 80%;
    }    
`
export const ServiceFromTitle = styled.div`
    height: auto;
    width: 100%;
    font: normal normal bold 32px/32px Montserrat;
    letter-spacing: 0px;
    color: #363636;
    opacity: 1;

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
    line-height: 30px;

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
    border: 1px solid green;
    padding: 0.5rem;
    border-style: dashed;
    justifyContent: center;
    align-items: center;
    width: 47%;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0rem;
        margin-bottom: 1rem;
    }

`