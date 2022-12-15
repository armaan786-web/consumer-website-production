import { Link } from "react-router-dom";
import styled from "styled-components";

export const OnitContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #00796A;
    // padding: 2rem;
    margin-top: 5rem;
    padding-top: 3rem;

    @media screen and (max-width: 675px) {
            flex-direction: column;
        }
    
`
export const OnitBoxOne = styled.div`
    height: auto;
    width: 33.3%;
    display: flex;
    /* justify-content: center;
    align-items: center; */
    flex-direction: column;
    padding: 0 4rem;
    /* background-color: lightcoral; */

    @media screen and (max-width: 675px) {
        width: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 2rem 1rem;
    }
`
export const OnitBoxTwo = styled.div`
    height: auto;
    width: 33.3%;
    display: flex;
    flex-direction: column;
    /* padding: 0 3rem; */
    /* background-color: lightcyan; */
    /* justify-content: center; */
    align-items: center;

    @media screen and (max-width: 1800px) {
        // padding: 5rem 1rem; 
    }

    @media screen and (max-width: 675px) {
        width: 100%;
        justify-content: center;
        padding: 1rem;
    }

    
`

export const OnitTitleBox = styled.div`
    height: auto;
    width: 100%;
    font: 700 20px/34px Montserrat;
    letter-spacing: 0px;
    color: #FBFBFB;
    opacity: 1;
    font-size: 1.5rem;
    padding: 0px;
    text-align: center;
    @media screen and (max-width: 1024px) {
        font-size: 1.3rem;
    }
    @media screen and (max-width: 850px) {
        font-size: 1.1rem;
    } 

    @media screen and (max-width: 675px) {
        text-align: center;
        font-size: 1.3rem;
        margin-bottom: 0.8rem;
    }

    @media screen and (max-width: 425px) {
        font-size: 1.2rem;
    }

`
export const OnitTitle = styled.div`
    height: auto;
    width: 100%;
    font: 700 40px/42px Montserrat;
    letter-spacing: 0px;
    color: #FBFBFB;
    opacity: 1;
    padding: 0 70px;


    @media screen and (max-width: 1024px) {
        font-size: 2rem;
        padding: 0;
    } 
    @media screen and (max-width: 850px) {
        font-size: 1.8rem;
    } 
    @media screen and (max-width: 675px) {
        font-size: 2rem;
    }
    @media screen and (max-width: 425px) {
        font-size: 1.7rem;
    }
    
`

export const OnitDesc = styled.div`
    font: 400 16px/28px Montserrat;
    letter-spacing: 0px;
    color: #FBFBFB;
    opacity: 1;
    margin-top: 1rem;
    /* font-size: 1.1rem; */
    /* padding: 0 70px; */
    @media screen and (max-width: 1024px) {
        font-size: 1rem;
        padding: 0;
    } 
    @media screen and (max-width: 850px) {
        font-size: 0.9rem;
    } 
    @media screen and (max-width: 730px) {
        font-size: 0.8rem;
    } 
    @media screen and (max-width: 675px) {
        font-size: 1rem;
    // margin-top: 0.5rem;
    }
    @media screen and (max-width: 425px) {
        font-size: 0.9rem;
    }    
`
export const OnitSubDesc = styled.a`
text-decoration: none;
    font: 400 14px/20px Montserrat;
    letter-spacing: 0px;
    color: #FBFBFB;
    margin: 0.4rem 0;
    opacity: 0.6;
    font-size: 0.9rem;
    text-align: center;

    @media screen and (max-width: 1024px) {
        font-size: 0.8rem;
    } 

    @media screen and (max-width: 850px) {
        font-size: 0.7rem;
    } 

    @media screen and (max-width: 675px) {
        font-size: 0.9rem;
        line-height: 30px;
        margin: 0;
    } 
    @media screen and (max-width: 425px) {
        line-height: 25px;
        font-size: 0.8rem;
    }
`
export const OnitSubDescPolicy = styled(Link)`
text-decoration: none;
    font: 400 14px/20px Montserrat;
    letter-spacing: 0px;
    color: #FBFBFB;
    margin: 0.4rem 0;
    opacity: 0.6;
    font-size: 0.9rem;
    text-align: center;

    @media screen and (max-width: 1024px) {
        font-size: 0.8rem;
    } 

    @media screen and (max-width: 850px) {
        font-size: 0.7rem;
    } 

    @media screen and (max-width: 675px) {
        font-size: 0.9rem;
        line-height: 30px;
        margin: 0;
    } 
    @media screen and (max-width: 425px) {
        line-height: 25px;
        font-size: 0.8rem;
    }
`

export const OnitSubDescContact = styled.div`
text-decoration: none;
    font: 400 14px/20px Montserrat;
    letter-spacing: 0px;
    color: #FBFBFB;
    margin: 0.1rem 0;
    opacity: 0.6;
    font-size: 0.9rem;
    text-align: center;

    @media screen and (max-width: 1024px) {
        font-size: 0.8rem;
    } 

    @media screen and (max-width: 850px) {
        font-size: 0.7rem;
    } 

    @media screen and (max-width: 675px) {
        font-size: 0.9rem;
        line-height: 30px;
        margin: 0;
    } 
    @media screen and (max-width: 425px) {
        line-height: 25px;
        font-size: 0.8rem;
    }
`

export const OnitColumnCon = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 2rem 0;

    @media screen and (max-width: 675px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-bottom: 0.8rem;
    }
`

export const OnitColumnBox = styled.div`
    height: auto;
    width: 51%;
    display: flex;
    justify-content: left;
    flex-direction: column;
    padding: 0px;
`

export const OnitBoxThree = styled.div`
    height: auto;
    width: 33.4%;
    display: flex;
    flex-direction: column;
    padding: 0 3rem;
    /* background-color: lightgray; */

    @media screen and (max-width: 675px) {
        width: 100%;
    padding: 2rem 1rem;
    }
`

// Final Box

export const MainBox = styled.div`
    height: auto;
    width: auto;
    padding: 0 3.8rem;
`
export const SocialRow = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    /* justify-content: space-around; */
    align-items: center;
`
export const SocialIcon = styled.img`
    height: 40px;
    width: 40px;
    margin: 0.3rem 0.3rem 0 0.3rem;
`
export const CommonDiv = styled.div`
    height: auto;
    width: auto;
    display: flex;
    /* justify-content: center; */
    align-items: center;
`
export const OnitImageCon = styled.div`
    height: auto;
    width: auto;
    display: flex;
    /* justify-content: center; */
    align-items: center;
`
export const OnitImage = styled.img`
    height: auto;
    width: 40%;
    object-fit: cover;
`