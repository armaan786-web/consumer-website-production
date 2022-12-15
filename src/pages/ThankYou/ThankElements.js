import styled from "@emotion/styled";
import HomeBg from '../../images/Onit_Images/Group62712.png'
import BackBg from '../../images/Onit_Images/MaskGroup264.png'

export const SeriveContainer = styled.div`
display: flex;
align-items: center;
height: 120px;
width: 100%;
position: relative;
z-index: 1;
border: none;
flex-direction: column;
margin-bottom: 0rem;


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

export const BackImgBg = styled.div`
    height: 660px;
    width: 100%;
    // object-fit: cover;
    background: url(${BackBg}) no-repeat center center; 
    // background-color: lightblue;
    display: flex;
    padding: 8rem 0;
    flex-direction: column;
    margin-bottom: 5rem;

    @media (max-width: 768px){
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
    }
`
export const ContContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.8rem 0;
    flex-direction: column;
`

export const ContTitle = styled.div`
    color: black;
    text-align: center;
font: 600 40px/24px Montserrat;
letter-spacing: 0px;
color: #1D1C1C;
opacity: 1;
width: auto;
`

export const ContDesc = styled.div`
text-align: center;
width: 25%;
font: normal normal 600 16px/24px Montserrat;
letter-spacing: 0.32px;
color: #1D1C1C;
text-transform: uppercase;
opacity: 0.6;

`

export const AnyButtonText = styled.button`
background: #00796A 0% 0% no-repeat padding-box;
box-shadow: 0px 26px 15px #00796A14;
border-radius: 4px;
opacity: 1;
border: none;
color: #FEFEFE;
text-align: center;
font: 400 20px/32px Montserrat;
letter-spacing: 0px;
color: #FEFEFE;
opacity: 1;
padding: 1rem 8.5rem;
margin-top: 1rem;
`

export const ContSer = styled.div`
text-align: center;
font: 700 16px/32px Montserrat;
letter-spacing: 0px;
opacity: 1;
`

export const ContDown = styled.div`
text-align: center;
font: 600 14px/32px Montserrat;
letter-spacing: 0px;
color: #000000;
opacity: 1;
`
export const ContImageBox = styled.div`
    height: auto;
    width: 13.5%;
    justify-content: center;
`

export const ContImage = styled.img`
    height: auto;
    width: 100%;
`