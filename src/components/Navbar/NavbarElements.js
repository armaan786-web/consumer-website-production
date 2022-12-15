import styled from 'styled-components/macro'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import logo from '../../images/logo.svg'


export const Nav = styled.nav`

    background: ${({scrollNav, bgLogin}) => ( bgLogin? '#fff': (scrollNav? '#363636': 'transparent'))};
    // background: transparent;
    background: ${({bgLogin}) => ( bgLogin? '#fff': "")};
    height: 100px;
    margin-top: -120px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    border: none;

    @media screen and (max-width: 960px) {
        // transition: 0.8s all ease;
    }


    @media screen and (max-width:480px) {
        height: 80px;
        transition: 0s all ease-in-out;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index :1;
    width: 100%;
    // padding: 0 6rem;
    // align-items: center;
    // margin-top: 1.2rem;

    @media screen and (max-width: 2705px) {
        width: 90%;
    }
    @media screen and (max-width: 2200px) {
        max-width: 1600px;
    }
    @media screen and (max-width: 481px) {
        width: 100%;
        // background-color: red;
        padding: 0;
    }

`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: left;
    text-decoration: none;

    
    .logoImage {
        width: 35%;
    }


    // @media screen and (max-width:768px) {
    //     margin-left: -100px;
    //     margin-top: 15px;
    //     margin-bottom: 15px;
    //     .logoImage {
    //     width: 100%;
    // }

    @media screen and (max-width:480px) {
        padding: 2rem;
        /* margin: 1rem 0; */
        .logoImage {
        width: 30%;
    }
    }
`
    export const SvgLogo = styled.img`
    height: auto;
    width: 100%;
        /* color: #fff; */
            // background: url(${logo}) no-repeat center center / cover;
    `


export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        /* position: absolute; */
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        display: flex;
        align-items: flex-start;
        position: sticky;
        cursor: pointer;
        color: #fff;
    }


    @media screen and (max-width:480px) {
        font-size: 1.5em;
        /* top: -5px; */
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    // margin-right: -15rem;
    // font-family: 'Roboto';
    
    @media screen and (max-width: 1680px) {
        margin-right: 0rem;
    }
    @media screen and (max-width: 1400px) {
        margin-right: 0rem;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavItem = styled.li`
    height: 80px;
    font: 500 14px/18px Montserrat;
`

export const NavLinks = styled(LinkR)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1rem;
    height: 100%;
    cursor: pointer;
    // font-family: 'Montserrat';
    font-size: 1.2em;
    font-weight: 400;

    &.active {
        border-bottom: 3px solid #01bf71;
    }

    @media screen and (max-width: 2705px) {
        font-size: 1.6rem;
    }
    @media screen and (max-width: 2200px) {
        font-size: 1.3rem;
    }
    @media screen and (max-width: 2000px) {
        font-size: 1.1rem;
    }
    @media screen and (max-width: 1180px) {
        font-size: 0.8rem;
    }
    @media screen and (max-width: 1083px) {
        font-size: 0.7rem;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    margin: 0.4em;
    // border-radius: 4px;
    // white-space: nowrap;
    padding: 0.75em 1.2em;
    color: ${props => props.primary ? "white" : "#00796A"};
    background: ${props => props.primary ? "#25263166 0% 0% no-repeat padding-box;" : "#FFFFFF"};
    // border: 1px solid ${props => props.primary ? "#FFFFFF" : "#FF4001"};
    font: 500 14px/18px Montserrat;
    letter-spacing: 0px;
    // color: #FAF6F4;
    border: 1px solid #FFFFFF;
    border-radius: 4px;
    opacity: 1;
    
    // &:hover {
    //     transition: all 0.2s ease-in-out;
    //     background: ${props => props.primary ? "transparent" : "#FF4001"};
    //     color: ${props => props.primary ? "FFFFFF" : "#FFFFFF"};
    // }

    @media screen and (max-width: 2705px) {
        font-size: 1.6rem;
    }
    @media screen and (max-width: 2200px) {
        font-size: 1.2rem;
    }
    @media screen and (max-width: 2200px) {
        font-size: 1rem;
    }
    // @media screen and (max-width: 1450px) {
    //     font-size: 1rem;
    // }
    @media screen and (max-width: 1357px) {
        font-size: 0.8rem;
    }
    @media screen and (max-width: 1180px) {
        font-size: 0.8rem;
    }
    @media screen and (max-width: 1083px) {
        font-size: 0.7rem;
    }
    @media screen and (max-width: 1000px) {
        padding: 0.5 0.8rem;
        font-size: 0.6rem;
    }

`

export const LoginTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const LoginCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`

export const LoginAnchor = styled.a`
    color: #2B3BF6;
`

export const Profilelabel = styled.label`
    color: #0088ff;
    cursor: pointer;
    width: 100%;
    text-align: center !important;
`