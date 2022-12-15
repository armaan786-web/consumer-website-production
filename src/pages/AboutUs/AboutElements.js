import styled from "@emotion/styled";
import HomeBg from '../../images/Onit_Images/Group62712.png'
import BackBg from '../../images/Onit_Images/MaskGroup264.png'

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
export const ContentHeroBg = styled.div`
    position: absolute;
    top: 50rem;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: green;
    margin-bottom: 12rem;
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
    position: relative;
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

export const BackImgBg = styled.div`
    height: 100%;
    width: 100%;
    object-fit: cover;
    background: url(${BackBg}) no-repeat center center / cover;
    // background-color: lightblue;
    display: flex;
    padding: 3rem 2rem;
    flex-direction: column;
    margin-bottom: 0;

    /* @media (max-width: 768px){
        margin-bottom: 5rem;
    }

    @media (max-width: 500px){
        margin-bottom: 10rem;
    }
    @media (max-width: 425px){
        margin-bottom: 15rem;
    }
    @media (max-width: 375px){
        margin-bottom: 30rem;
    } */
`
export const ContContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;

    @media (max-width: 800px){
        flex-direction: column;
        justfiy-content: center;
        align-items: center;
    }
`
export const ExtraCont = styled.div`
    height: auto;
    width: 100%;
    // padding: 0 2rem 0 5rem;
    padding: 0 7rem;
    display: flex;
    flex-direction: column;

    @media (max-width: 1440px){
     padding: 0 5rem;
    }
    @media (max-width: 800px){
        width: 100%;
        padding: 0 2rem;
       }
`

export const ContOne = styled.div`
    height: auto;
    width: 50%;
    // background-color: lightpink;
    padding: 2rem 3rem 3rem 3rem;;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 800px){
        width: 100%;
        padding: 2rem;
    }
`
export const ContImage = styled.img`
    height: auto;
    width: 80%;

    @media (max-width: 1440px){
     width: 100%;
    }
`


export const Conttwo = styled.div`
    height: auto;
    width: 50%;
    // background-color: lightgreen;
    padding: 5rem 15rem 5rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1440px){
        /* background-color: lightblue; */
        padding: 5rem 5rem 5rem 3rem;
    }

    @media (max-width: 1200px){
        padding: 2rem;
       }
       @media (max-width: 800px){
        width: 100%;
        padding: 0 2rem;
       }
`
export const AboutTitle = styled.div`
font: 700 48px/32px Montserrat;
letter-spacing: 0px;
opacity: 1;
height: auto;
width: 100%;

@media (max-width: 1440px){
 margin-bottom: 1rem;
}

@media (max-width: 1200px){
    font-size: 2.1rem;
   }
   @media (max-width: 1024px){
    font-size: 1.7rem;
   }

`
export const AboutDesc = styled.div`
font: 400 18px/28px Montserrat;
letter-spacing: 0px;
color: #363636;
opacity: 1;
height: auto;
width: 100%;
margin: 1rem 0;

@media (max-width: 1200px){
    font-size: 1rem;
    margin: 0.5rem 0;
   }
   @media (max-width: 1024px){
    font-size: 0.8rem;
    margin: 0.3rem 0;
   }

`

