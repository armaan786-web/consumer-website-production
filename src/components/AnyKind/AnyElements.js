import { Link } from "react-router-dom";
import styled from "styled-components";

export const AnyContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 8rem;
    position: relative;


    @media(max-width: 540px){
        padding: 3rem;
    }
    @media(max-width: 376px){
        padding: 1rem;
    }
    /* margin-top: 67rem;

    @media screen and (max-width: 2200px) {
        margin-top: 65rem;
    }
    @media screen and (max-width: 768px) {
        margin-top: 94rem;
    }
    @media screen and (max-width: 375px) {
        margin-top: 105rem;
    }
    @media screen and (max-width: 375px) {
        margin-top: 115rem;
    } */
    `

export const AnyBox = styled.div`
    max-width: 1500px;
    display: flex;
    z-index: 2;
    background-color: #e6e6e6;
    border-radius: 4px;

    @media (max-width: 1024px) {
        flex-direction: column;
    }

    @media (max-width: 560px) {
        padding: 0;
    }
`

export const AnyImageBox = styled.div`
    flex: 1;
    position: relative;
`

export const AnyImage = styled.img`
    max-width: 90%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 120%;

    @media (max-width: 1024px) {
        position: relative;
        margin-top: -100px;
    }

    @media (max-width: 560px) {
        margin-top: -50px;
    }
`

export const AnyContentBox = styled.div`
    flex: 1;
    padding: 130px 10px;
    display: flex;
    flex-direction: column;

    @media (max-width: 1024px) {
     justify-content: center;
     align-items: center;
    }
`

export const AnyTitle = styled.div`
font: 700 32px/32px Montserrat;
letter-spacing: 0px;
opacity: 1;
height: auto;
width: 100%;

@media screen and (max-width: 2705px) {
    font-size: 2.7rem;
}
@media screen and (max-width: 2000px) {
    font-size: 2.3rem;
}
@media screen and (max-width: 1600px) {
    font-size: 2rem;
}
@media screen and (max-width: 1024px) {
    font-size: 1.5rem;
    text-align: center;
}
// @media screen and (max-width: 800px) {
//     font-size: 1.3rem;
//     margin-top: 2rem;
// }
// @media screen and (max-width: 768px) {
//     font-size: 1.1rem;
// }
// @media screen and (max-width: 425px) {
//     font-size: 1rem;
// }

`
export const AnyDesc = styled.div`
font: 400 18px/28px Montserrat;
letter-spacing: 0px;
color: #363636;
opacity: 1;
height: auto;
width: 100%;
margin: 2rem 0;

@media screen and (max-width: 2705px) {
    font-size: 1.5rem;       
}
@media screen and (max-width: 2705px) {
    font-size: 1.2rem;       
}
@media screen and (max-width: 2705px) {
    font-size: 1rem;       
}

@media screen and (max-width: 1024px) {
    font-size: 0.8rem;
    text-align: center;
    padding: 0 1rem;
}
// @media screen and (max-width: 768px) {
//     font-size: 0.7rem;
//     margin-top: 1rem;
// }
// @media screen and (max-width: 425px) {
//     font-size: 0.6rem;
//     padding: 0;
// }
// @media screen and (max-width: 360px) {
//     font-size: 0.6rem;
//     padding: 0;
//     line-height: 18px;
// }
// @media screen and (max-width: 320px) {
//     font-size: 0.6rem;
//     padding: 0;
//     margin: 0.5rem  0;
// }


`

export const AnyButton = styled.button`
    border: 1px solid #00796A;
    background: #00796A 0% 0% no-repeat padding-box;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1.6rem;
    opacity: 1;
    font: 500 14px/18px Montserrat;
    letter-spacing: 0px;
    color: #FFFFFF;

    @media screen and (max-width: 1024px) {
        font-size: 0.7rem;
    }
    @media screen and (max-width: 768px) {
        font-size: 0.6rem;
    }
`