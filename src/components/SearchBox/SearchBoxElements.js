import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'

export const HeroService = styled.div`
    height: auto;
    max-width: 2000px;
    display: flex;
    justify-content: center;
    z-index: 5;
    position: absolute;
    margin-top: -2.5rem;
    @media screen and (max-width: 15060px) {
        width: 100%;
        }
    @media screen and (max-width: 2560px) {
        width: 100%;
        }
    @media screen and (max-width: 1440px) {
    margin-top: -1.8rem;
    }
    @media screen and (max-width: 1024px) {
        margin-top: -1.3rem;
        }
        
        @media screen and (max-width: 414px) {
            margin-top: -0.8rem;
           }
           @media screen and (max-width: 387px) {
            margin-top: -1rem;
           }
           @media screen and (max-width: 313px) {
            margin-top: -0.8rem;
           }
`
export const ServiceView = styled.div`
    height: 20%;
    width: 70%;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 11px 21px #0000001A;
    border-radius: 10px;
    opacity: 1;
    display: flex;
    justify-content: space-between;
    padding: 0.7rem;
    align-items: center;

    @media screen and (max-width: 1440px) {
        padding: 0rem;
        width: 70%;
    }

    @media screen and (max-width: 1024px) {
        padding: 0.4rem;
        width: 60%;
    }

    @media screen and (max-width: 504px) {
        padding: 0.2rem;
        width: 70%;
    }
    @media screen and (max-width: 387px) {
        padding: 0.2rem;
        width: 80%;
    }
     @media screen and (max-width: 313px) {
        padding: 0rem;
        width: 80%;
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
    font-size: 1.1rem;

    @media screen and (max-width: 1440px) {
        padding: 0.3rem 1.2rem;
        font-size: 1rem;
    }
    @media screen and (max-width: 1024px) {
        padding: 0rem 1.2rem;
        font-size: 0.7rem;
    }
    @media screen and (max-width: 1024px) {
        padding: 0rem 1.2rem;
        font-size: 0.6rem;
    }
    @media screen and (max-width: 504px) {
        font-size: 0.5rem;
       }
`

export const ServiceSearch = styled.div`
    font: 500 16px/19px Montserrat;
    letter-spacing: 0px;
    color: #252631;
    opacity: 0.5;
    height: auto;
    // width: 20%;
    display: flex;
    align-items: center;
    border-left: 2px solid black;
    margin-left: 1rem;
    font-size: 1.1rem;
    padding: 0.6rem 1.2rem;

    @media screen and (max-width: 1024px) {
        padding: 0rem 1.2rem;
        font-size: 0.7rem;
    }

    @media screen and (max-width: 504px) {
        font-size: 0.6rem;
    }
    @media screen and (max-width: 504px) {
     font-size: 0.5rem;
    }
 
`
export const SearchIcon = styled.i`
    height: auto;
    width: auto;
    display: flex;
    justify-content: right;
    color: grey;
    font-size: 2.4rem;

    @media screen and (max-width: 1440px) {
        font-size: 1.4rem;
        margin-right: 0.6rem;
    }
    @media screen and (max-width: 1024px) {
        font-size: 1.2rem;
        margin-right: 0.6rem;
    }

    @media screen and (max-width: 504px) {
        font-size: 1rem;
    }
    
`

export const ArrowIcon = styled.i`
    height: auto;
    width: auto;
    display: flex;
    color: #252631;
    font-size: 1.1rem;
    margin-left: 0.5rem;

    @media screen and (max-width: 1440px) {
        font-size: 0.9rem;
        margin-left: 0.6rem;
    }
    @media screen and (max-width: 1024px) {
        font-size: 0.8rem;
        margin-left: 0.6rem;
    }
    
`