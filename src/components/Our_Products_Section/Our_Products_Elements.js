import styled from "styled-components";
import worksBg from '../../images/worksBg.png'
import worksBgRotate from '../../images/worksBgRotate.png'

export const ProductsContainer = styled.div`
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background: url(${worksBg}) no-repeat center top / contain; */
    z-index: -1;
    
    @media screen and (max-width: 1000px) {
        /* background: url(${worksBg}) no-repeat center top / contain; */
        background-position: 25% 50%;
        height: 900px;
        background-color: #FAFCFC;
    }
    
    @media screen and (max-width: 768px) {
        /* background: url(${worksBgRotate}) no-repeat center top / cover; */
        background-position: 25% 50%;
        background-color: #FAFCFC;
        height: 1250px;
    }

    @media screen and (max-width: 480) {
        height: 1400px;
    }
`

export const ProductsWrapper = styled.div`
    height: 500px;
    max-width: 900px;
    margin: 0 auto;
    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 1.5em;
    padding: 0 50px; */

    @media screen and (max-width: 1000px) {
        max-width: 750px;
    }

    @media screen and (max-width: 768px) {
        max-width: 600px;
    }
`

export const ProductsH1 = styled.h1`
    font-size: 2.5rem;
    color: #000000;
    margin-bottom: 64px;

    @media screen and (max-width : 780px) {
        font-size: 2rem;
    }

    @media screen and (max-width : 480px) {
        font-size: 1.8rem;
    }
`


export const WorksCard = styled.div`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 4px 20px #0000001F;
    border-radius: 8px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 380px;
    padding: 30px;
    transition: all 0.2s ease-in-out;


    @media screen and (max-width : 780px) {
        max-height: 360px;
    }

    @media screen and (max-width : 480px) {
        max-height: 360px;
    }

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
export const IconBackground = styled.div`
    height: 150px;
    width: 150px;
    border-radius: 50%;
    background: #fb26221f 0% 0% no-repeat padding-box;
    display: flex;
    align-items: center;
    justify-content: center;
`


export const WorksIcon = styled.img`
    height: 40%;
    width: 40%;
`

export const WorksH2 = styled.h2`
    font-size: 1.3rem;
    text-align: center;
    color: #1C1C1C;
    margin: 1.2rem 0rem;

    @media screen and (max-width : 780px) {
        font-size: 1.3rem;
    }

    @media screen and (max-width : 480px) {
        font-size: 1.2rem;
    }

`

export const WorksH6 = styled.h6`
    font-size: 1rem;
    color: #4F4F4F;
    text-align: center;
    margin-bottom: 0.5rem;
`

export const WorksP = styled.p`
    font-size: 0.8rem;
    text-align: center;
    color: #4F4F4F;
    opacity: 0.5;
`