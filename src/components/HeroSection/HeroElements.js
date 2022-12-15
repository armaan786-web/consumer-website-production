import styled from "styled-components/macro";
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'
import HomeBg from '../../images/Onit_Images/Group_62709.png'
import { Link as LinkR } from 'react-router-dom'


export const HeroContainer = styled.div`
    // background: #0c0c0c;
    display: flex;
    // justify-content: center;
    align-items: center;
    // padding: 0 30px;
    /* margin-top: -80px; */
    height: 900px;
    width: 100%;
    position: relative;
    z-index: 1;
    border: none;

    // @media screen and (max-width: 910px) {
    //     width: 101%;
    // }


    @media screen and (max-width: 540px) {
        height: 1550px;
    }
    @media screen and (max-width: 360px) {
        height: 900px;
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
    // overflow: hidden;
`

export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: url(${HomeBg}) no-repeat center center / cover;
    // background-position-x: right;

    @media screen and (max-width: 1024px) {
        height: 1000px;
    }
    @media screen and (max-width: 768px) {
        height: 1100px;
        background: linear-gradient(90deg, #020204 0%, #000000FC 40%, #0E0E0E47 99%, #55555700 100%), url(${HomeBg}) no-repeat center center / cover;
            background-position-x: right;
    }

    @media screen and (max-width: 540px) {
        height: 1400px;
    }
    @media screen and (max-width: 376px) {
        height: 1300px;
    }
    @media screen and (max-width: 321px) {
        height: 1150px;
    }
    /* @media screen and (max-width: 480px) {
        background: linear-gradient(90deg, #020204 0%, #000000FC 35%, #0E0E0E47 105%, #55555700 100%), url(${HomeBg}) no-repeat center center / cover;
            background-position-x: right;
    } */
;
`

export const HeroContent = styled.div`
    z-index: 3;
    height: auto;
    width: 100%;
    /* position: absolute; */
    display: flex;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 22rem;
    }

    @media screen and (max-width: 321px) {
        margin-top: 56rem;
    }

    /* @media(max-width: 540px){
        margin-top
    } */
`

// export const HeroIconContainer = styled.div`
//     height: auto;
//     width: 50%;
//     display: flex;
//     justify-content: right;
//     padding-right: 3.5rem;

//     @media screen and (max-width: 1240px) {
//         // margin-top: 2rem;
//     }

//     @media screen and (max-width: 1024px) {
//         justify-content: center;
//         padding-right: 0;

//     }

//     @media screen and (max-width: 920px) {
//         justify-content: center;
//     }

//     @media screen and (max-width: 768px) {
//         padding-right: 0;
//     }
// `
export const HeroIconContainer = styled.div`
height: auto;
width:  auto;
display: flex;
flex-direction: column;
// padding: 3rem 0;
/* margin-top: -3rem; */
margin-left: 10rem;
align-items: center;

    @media screen and (max-width: 1240px) {
        margin-top: 5rem;
    }

    @media screen and (max-width: 1024px) {
        justify-content: center;
        width: 100%;
        margin-left: 0;
    }

    @media screen and (max-width: 920px) {
        justify-content: center;
    }

    @media screen and (max-width: 768px) {
        padding-right: 0;
        margin-top: 0;
    }
    @media(max-width: 540px){
        display: none;
    }
`
export const HeroIconDoubleContainer = styled.div`
height: auto;
width:  100%;
display: flex;
/* margin-top: 2rem; */
justify-content: space-between;
align-items: center;
display: none;



    @media screen and (max-width: 540px) {
        display: block;
        /* margin-top: 5rem; */
            }
`
export const HerIconContainer = styled.div`
    height: auto;
    width: 50%;
    display: flex;  
    
    @media(max-width: 1024px){
        width: 100%;
        justify-content: center;
    }
    @media(max-width: 768px){
        margin-bottom: 8rem;
    }
`
export const HerIconDoubleContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;  
    display: none;

    @media(max-width: 768px){
        display: flex;
        margin-top: 2rem;
        margin-bottom: 7rem;
    }
    @media(max-width: 540px){
        display: flex;
        margin-top: -15rem;
        margin-bottom: 2rem;
    }
    @media(max-width: 376px){
        margin-top: -30rem;
    }
    @media(max-width: 361px){
        margin-top: 5rem;
    }
    @media(max-width: 320px){
        margin-top: -25rem;
    }
`

export const HeroPlayBox = styled.div`
    height: auto;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    padding-top: 12rem;
    /* padding-right: 10rem; */
    /* justify-content: right;  */

    @media screen and (max-width: 1024px) {
        width: 50%;
        justify-content: center;
        align-items: center;
        margin-top: 5rem;
        padding-right: 0;
        padding-top: 0;
        padding-bottom: 10rem;
    }
    @media screen and (max-width: 768px) {
        width: 80%;
        justify-content: center;
        align-items: center;
        /* margin-top: 5rem; */
        padding-right: 0;
        padding-top: 0;
        padding-bottom: 0;
    }
    
`

export const PlayImg = styled.img`
    height: auto;
    width: auto;

    @media screen and (max-width: 768px) {
    width: 70%;
    margin-left: 2rem;
    }
`

export const HeroIconRows = styled.div`
height: auto;
width: 400px;
display: flex;
justify-content: space-evenly;
align-items: center;
// padding: 1.5rem;
@media screen and (max-width: 550px) {
    width: 360px;
        }
        @media screen and (max-width: 540px) {
            width: auto;
                }
`
export const HeroIconsRows = styled.div`
height: auto;
display: flex;
justify-content: space-between;
// padding: 1.5rem;
width: 580px; 
padding: 0 1rem;
margin-top: -3rem;
// background-color: green;

`

export const HeroIconBox = styled.div`
    height: auto;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-top: -2rem; 

    // @media screen and (max-width: 1440px) {
    //     width: 150px;
    //     }
    //     @media screen and (max-width: 481px) {
    //         width: 120px;
    //         margin-top: 2rem;
    //         }
    //         @media screen and (max-width: 380px) {
    //             width: 100px;
    //             }
    //             @media screen and (max-width: 285px) {
    //                 width: 80px;
    //                 }
`
export const IconBox = styled.div`
height: auto;
width: 20%;
    margin: 1.5rem;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    justify-content: center;
    align-items: center;

    @media(max-width: 540px){
        width: 50%;
    }
`
export const IconImg = styled.img`
height: 90px;
width: 90px;

@media screen and (max-width: 550px) {
    height: 80px;
    width: 80px;
        }
        @media screen and (max-width: 540px) {
            height: 120px;
            width: 120px;
                }
                @media screen and (max-width: 475px) {
                    height: 100px;
                    width: 100px;
                        }
                        @media screen and (max-width: 360px) {
                            height: 80px;
                            width: 80px;
                                }
                

`
export const IconText = styled.p`
    text-align: center;
    font: 500 14px Montserrat;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    text-align: center;
    margin-top: 0.8rem;

    @media screen and (max-width: 1024px) {
        font-size: 12px;
        }
        @media screen and (max-width: 540px) {
            font-size: 25px;
            text-align: center;
            line-height: 35px;
            // margin: 2rem;
                }
        @media screen and (max-width: 475px) {
            font-size: 17px;
            line-height: 25px;
            }
            @media screen and (max-width: 378px) {
                font-size: 13px;
                }
            @media screen and (max-width: 360px) {
                font-size: 11px;
                }
                @media screen and (max-width: 285px) {
                    font-size: 7px;
                    }
`


export const HeroH1 = styled.h1`
    color: #F1F1F1;
    font-size: 2.3em;
    text-align: left;
    margin-bottom: 0.1em;

    @media screen and (max-width: 768px) {
        font-size: 1.9em;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.4em;
    }
`

export const HeroP = styled.div`
    /* margin-top: 0.8em; */
    color: #F1F1F1;
    opacity: 0.5;
    font-weight: 300;
    font-size: 1.5em;
    text-align: left;
    max-width: 600px;


    @media screen and (max-width: 768px) {
        margin-top: 0.6em;
        font-size: 1.2em;
    }

    @media screen and (max-width: 480px) {
        margin-top: 0.5em;
        font-size: 1em;
    }
`

export const NavBtnLink = styled(LinkR)`
    margin: 0.4em;
    border-radius: 4px;
    white-space: nowrap;
    padding: 0.64em 1em;
    color: ${props => props.primary ? "#F1F1F1" : "#F1F1F1"};
    background: ${props => props.primary ? "transparent" : "#FF4001"};
    border: 1px solid ${props => props.primary ? "#FFFFFF" : "#FF4001"};
    font-size: 1em;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${props => props.primary ? "transparent" : "#FF4001"};
        color: ${props => props.primary ? "FFFFFF" : "#FFFFFF"};
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 1.6em;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    &:hover {
        color: red;
      }

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }

    @media screen and (max-width: 480px) {
        flex-direction: column;
    }
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`
export const ColumnBox = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const SearchButtonBox = styled.div`
    height: auto;
    width: 70%;
    display: flex;
border-radius: 5px;
border: 1px solid lightgrey;
align-items: center;
background-color: white;

@media(max-width: 1240px){
    width: 90%;
}
@media(max-width: 768px){
    display: none;
}
/* padding: 0 1rem; */
`
export const SearchButtonDoubleBox = styled.div`
    height: auto;
    width: 70%;
    display: flex;
    align-items: center;
    /* background-color: yellow; */
    border-radius: 5px;
    /* border: 1px solid lightgrey; */

@media(max-width: 1240px){
    width: 80%;
}

@media(max-width: 1024px){
    width: 100%;
}


/* padding: 0 1rem; */
`
export const Searchfeild = styled.input`
    width: 100%;
    font-size: 1rem;
    padding: 1rem;
    border: none;
    outline: none;
`
export const SearchIcon = styled.i`
    font-size: 1.4rem;
    position: absolute;
    cursor: pointer;
`
export const FlexCenter = styled.div`
    height: auto;
    width: auto;
    display: flex;
    justify-content: center;
`
export const SelectDrop = styled.div`
    height: auto;
    width: 100%;
    align-items: center;
    position: relative;
`
export const ArrowPosition = styled.div`
    height: auto;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    /* right: 0; */
    position: relative;
    right: 2rem;
    /* background-color: white;
    border-radius: 5px;
    border: 1px solid lightgrey; */
`