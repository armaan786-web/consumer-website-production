import styled from "styled-components";

export const ListedContainer = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: -1;
    background: #F6F6F6 0% 0% no-repeat padding-box;
    opacity: 1;

    @media screen and (max-width: 768px) {
        height: 350px;
    }

    @media screen and (min-width:480px) and (max-width: 540px) {
        height: 350px;
    }

    @media screen and (max-width: 480px) {
        height: 200px;
    }
`



export const ListedH1 = styled.h1`
    font-size: 2rem;
    font-weight: 500;
    color: #000000;
    margin-bottom: 2rem;
    text-align: center;

    @media screen and (max-width : 780px) {
        font-size: 1.6rem;
        margin-bottom: 1.5rem;
    }

    @media screen and (max-width : 480px) {
        font-size: 1.4rem;
        margin-bottom: 1rem;
    }
`

export const ListedH4 = styled.h4`
    font-size: 1.2rem;
    color: #696969;
    font-weight: 400;
    text-align: center;
    margin-bottom: 2.5rem;
    /* max-width: 750px; */

    @media screen and (max-width : 780px) {
        font-size: 1rem;
        margin-bottom: 2rem;
    }

    @media screen and (max-width : 480px) {
        font-size: 0.8rem;
        margin-bottom: 1.8rem;
    }
`
