import styled from 'styled-components'
import { Link as LinkS } from 'react-router-dom'

export const DashboardContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#FFF9FB')};
    margin-left: 230px;
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: hidden;
    
    
    @media screen and (max-width: 780px) {
        margin-left: 0px;
    }
    
    @media screen and (max-width: 480px) {
        margin-left: 0px;
    }
`

export const DashboardWrapper = styled.div`
    display: flex;
    z-index: 1;
    height: 90vh;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    overflow: overlay;
`

export const DashboardHeading = styled.div`
    padding: 0.5rem 2rem;
    margin-top: 1rem;
    display: flex;
    color: #202020;
    font-size: 2.5rem;
    font-weight: 500;
    /* flex-direction: column; */
    align-items: center;
    justify-content: space-between;
    width: 100%;


    @media screen and (max-width: 768px) {
        justify-content: center;
    }
    
    @media screen and (max-width: 425px) {
        font-size: 2rem;
        margin-top: 2rem;
    }

    @media screen and (max-width: 375px) {
        font-size: 1.5rem;
    }
`

export const DashHeading = styled.div`
    font: normal normal bold 20px/56px Lato;
    letter-spacing: 0.4px;
    color: #000000;
    opacity: 1;
    font-size: 26px;
    text-align: left;


    @media screen and (max-width: 880px) {
        font-size: 18px;
    }

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
    
    @media screen and (max-width: 480px) {
        font-size: 14px;
    }
    

`

// Dash Cards
export const DashContainer = styled.div`
// background-color: pink;
height: auto;
width: 100%;
// padding: 10px 20px;
display: grid;
margin-left: 1.5rem;
grid-template-columns: auto auto auto auto;
grid-gap: 14px 15px;
margin-bottom: 30px;

@media screen and (max-width: 1024px) {
grid-template-columns: auto auto;
grid-gap: 14px 25px;
}

@media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    flex-direction:  column;
    align-items: center;
}

@media screen and (max-width: 480px) {
    width: 25rem;
    // margin-left: 3rem;
    font-size: 13px;
} 
@media screen and (max-width: 425px) {
    width: 23rem;
    // margin-left: 3rem;
    font-size: 13px;
} 
@media screen and (max-width: 375px) {
    width: 23rem;
    margin-left: 0rem;
    font-size: 13px;
    justify-content: center;
align-items: center;
} 
@media screen and (max-width: 320px) {
    width: 20rem;
    margin-left: 0rem;
    font-size: 10px;
} 
`

export const DashCard = styled.div`
// background-color: yellow;
height: auto;
width: 85%;
display: flex;
flex-direction: column;
padding: 25px 25px 0px 25px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #6C6C6C1A;
border-radius: 8px;
border: 1px solid transparent;
   
    @media screen and (max-width: 768px) {
        width: 80%;
    }
    
    @media screen and (max-width: 480px) {
        width: 25rem;
        // margin-left: 3rem;
        font-size: 13px;
    } 
    @media screen and (max-width: 425px) {
        width: 23rem;
        // margin-left: 3rem;
        font-size: 13px;
    } 
    @media screen and (max-width: 375px) {
        width: 20rem;
        margin-left: 0rem;
        font-size: 13px;
    } 
    @media screen and (max-width: 320px) {
        width: 17rem;
        margin-left: 0rem;
        font-size: 10px;
    } 

`
export const CardTitle = styled.div`
    height: auto;
    width: 100%;
    // text-align: center;
    color: #202020;
    font-size: 1rem;
    margin-bottom: 7px;
    font-weight: 500;
`

export const CardBox = styled.div`
    height: auto;
    width: 100%;
    // background-color: red;
    display: flex;
    align-items: center;
`
export const BoxIcon = styled.div`
    height: auto;
    width: 12%;
    display: flex;
    align-items: center;
    border-top: 3px solid lightgrey;
    padding-top: 17px;
    // background-color: red;
`
export const IconImg = styled.img`
    height: 50px;
    width: 50px;
`

export const IconText = styled.p`
    height: auto;
    width: 100%;
    font-size: 2.2rem;
    font-weight: 600;
    color: #000000;
    margin-left: 14px;
`


export const CardPro = styled.div`
    height: auto;
    width: 100%;
    margin-top: 10px;
`
// Dash Revenue and Pending Requests

export const DashContainerRowTwo = styled.div`
// background-color: pink;
height: auto;
width: 96.5%;
display: flex;
margin-left: 1.5rem;
grid-template-columns: auto auto;
grid-gap: 14px 45px;

@media screen and (max-width: 1024px) {
        display: flex;
        width: 100%;
        margin-left: 0rem;
        flex-direction:  column;
        align-items: center;
    }
    
    @media screen and (max-width: 768px) {
        display: flex;
        width: 90%;
        flex-direction:  column;
        margin-left: 2.5rem;
    }
    
    @media screen and (max-width: 480px) {
        width: 25rem;
        // margin-left: 3rem;
        font-size: 13px;
    } 
    @media screen and (max-width: 425px) {
        width: 23rem;
        margin-left: 1.5rem;
        font-size: 13px;
    } 
    @media screen and (max-width: 375px) {
        width: 4rem;
        margin-left: 9.7rem;
        font-size: 13px;
        justify-content: center;
    align-items: center;
    } 
    @media screen and (max-width: 320px) {
        width: 4rem;
        margin-left: 8rem;
        font-size: 10px;
    } 
`
export const DashCards = styled.div`
// background-color: yellow;
height: auto;
width: 50%;
display: flex;
flex-direction: column;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #6C6C6C1A;
border-radius: 8px;
border: 1px solid transparent;
padding: 25px;

@media screen and (max-width: 1024px) {
    display: flex;
    width: 90%;
    flex-direction:  column;
    // align-items: center;
}

@media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    flex-direction:  column;
    align-items: center;
}

@media screen and (max-width: 480px) {
    width: 25rem;
    // margin-left: 3rem;
    font-size: 13px;
} 
@media screen and (max-width: 425px) {
    width: 23rem;
    // margin-left: 3rem;
    font-size: 13px;
} 
@media screen and (max-width: 375px) {
    width: 23rem;
    margin-left: 0rem;
    font-size: 13px;
    justify-content: center;
align-items: center;
} 
@media screen and (max-width: 320px) {
    width: 20rem;
    margin-left: 0rem;
    font-size: 10px;
} 
`

export const DashHeader = styled.div`
// background-color: yellow;
height: auto;
width: 100%;
display: flex;
justify-content: space-between;

@media screen and (max-width: 425px) {
    flex-direction: column;
align-items: center;
justify-content: center;

} 
@media screen and (max-width: 375px) {
    width: 23rem;
    margin-left: 0rem;
    font-size: 13px;
    justify-content: center;
align-items: center;
} 
@media screen and (max-width: 320px) {
    width: 20rem;
    margin-left: 0rem;
    font-size: 10px;
}
`

export const CardTitles = styled.div`
    height: auto;
    width: 100%;
    // text-align: center;
    color: #202020;
    font-size: 1rem;
    margin-bottom: 7px;
    font-weight: 500;

    @media screen and (max-width: 425px) {
        text-align: center;
    
    } 
    // @media screen and (max-width: 375px) {
    // } 
    // @media screen and (max-width: 320px) {
    //     width: 20rem;
    //     margin-left: 0rem;
    //     font-size: 10px;
    // }
`

export const CardView = styled(LinkS)`
    height: auto;
    width: 13%;
    font-size: 1rem;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    border: none;
    border: 1px solid #2B3BF6;
    outline: none;
    color: #2B3BF6;
    background-color: #FFFFFF;
    padding: 5px;

    @media screen and (max-width: 425px) {
        width: 30%;
    } 
`
export const PendingContainer = styled.div`
    height: 450px;
    width: auto;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    margin-top: 40px;
`
export const MainCard = styled.div`
        height: auto;
        width: 100%;
        // background-color: yellow;
        border-radius: 3px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        // border: 1px solid #DEDEDE; 
        border: 1px solid #DEDEDE; 
        align-items: center;

        @media screen and (max-width: 768px) {
            // width: 80%;
            // margin-left: 3rem;
            // background-color: yellow;
            // margin: auto;
            // margin-bottom: 2rem;
        }
        
        // @media screen and (max-width: 480px) {
        //     width: 80%;
        //     // margin-left: 3rem;
        //     margin: auto;
        //     margin-bottom: 2rem;
        // } 
        @media screen and (max-width: 425px) {
            width: 100%;
            margin-left: 0rem;
            // margin: auto;
            margin-bottom: 2rem;
        } 
        @media screen and (max-width: 375px) {
        } 
        @media screen and (max-width: 320px) {
        } 


`
export const CardRowFirst = styled.div`
        height: auto;
        width: 100%;
        background-color: #FFFFFF;
`
export const CardRowSecond = styled.div`
        height: auto;
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #DEDEDE;
        padding: 10px 15px;
`

export const Pending = styled.p`
        font: normal normal normal Poppins;
        letter-spacing: 0px;
        color: #FEBA01;
        padding: 0.5em 2em;

`
export const RowFirst = styled.div`
        height: auto;
        width: 100%;
        // background-color: red;
        display: flex;
`

export const FirstImg = styled.div`
        height: auto;
        width: auto;
        padding: 0.6em 0.6em;
`
export const ImgIcon = styled.img`
    height: auto;
    width: 100px;
    border-radius: 6px;
`

export const FirstContent = styled.div`
        height: auto;
        width: 100%;
        // background-color: lightpink;
        display: flex;
        flex-direction: column;
        padding: 0.5em 1em;
`
export const BookingCon = styled.div`
        height: auto;
        width: 100%;
        // background-color: lightgrey;
        color: black;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
`

export const ConList = styled.p`
        color: #999999;
        font-size: 0.9rem;

        @media screen and (max-width: 320px) {
                font-size: 8px;
            } 
`

export const CreditList = styled.p`
        color: #FFFFFF;
        font-size: 0.6rem;
        background-color: #7C8B86;
        padding: 0.2rem 0.6rem;
        border-radius: 2px;
`

export const ContentDesc = styled.div`
        height: auto;
        width: 100%;
        // background-color: lightred;
        display: flex;
        justify-content: space-between;
`
export const ContentTitle = styled.div`
        height: auto;
        width: 100%;
        background-color: lightred;
        font-weight: 600;
        color: black;
        font-size: 1.2rem;

        @media screen and (max-width: 320px) {
            font-size: 0.8rem;
            margin: 0.5rem 0 0.5rem 0;
        } 
`
export const ContentList = styled.div`
        height: auto;
        width: 100%;
        // background-color: lightred;
        display: flex;

        // @media screen and (max-width: 320px) {
        //     // margin-left: 0rem;
        //     font-size: 10px;
        // } 
`

export const RowSecond = styled.div`
        height: auto;
        width: 100%;
        // background-color: lightblue;
        display: flex;
        justify-content: space-around;
        padding: 0.2rem 0.4rem;
`

export const ButtonDecline = styled.button`
box-shadow: 0px 0px 10px #00000030;
width: 100%;
margin: 0.4em;
white-space: nowrap;
background: #F6F6F6 0% 0% no-repeat padding-box;
color: #999999;
padding: 0.9em 1.5em; 
border-radius: 2px;
opacity: 1;
border: none;
font-weight: 500;
font-size: 1rem;
outline: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
text-decoration: none;

@media screen and (max-width: 768px) {
    width: 50%;
    padding: 0.5em 1em;
}
`

export const ButtonAccept = styled.button`
box-shadow: 0px 0px 10px #00000030;
width: 100%;
margin: 0.4em;
white-space: nowrap;
background: #00C77D 0% 0% no-repeat padding-box;
color: #FFFFFF;
padding: 0.9em 1.5em;
border-radius: 2px;
opacity: 1;
border: none;
font-weight: 500;
font-size: 1rem;
outline: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
text-decoration: none;

@media screen and (max-width: 768px) {
    width: 50%;
    padding: 0.5em 1em;
}
`

export const PopUpBox = styled.div`
padding: 45px 24px;
    // background-color: yellow;
    height: 32rem;
    width: 22rem;
    display: flex;
    line-height: 45px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`

export const PopTitle = styled.div`
text-align: center;
font-weight: 600;
letter-spacing: 0px;
color: #000000;
opacity: 1;
font-size: 1.2rem;
`

export const PopDesc = styled.div`
text-align: center;
color: #808080;
opacity: 1;
font-size: 1.1rem;
height: auto;
width: 400px;
margin-bottom: 1rem;
`
export const PopIconBox = styled.div`
    height: auto;
    width: 100%;
    // background-color: yellow;
    display: flex;   
`

// export const BoxIcon = styled.div`
//     height: auto;
//     width: 25%;
//     // background-color: red;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;   
// `
// export const IconImg = styled.img`
//     height: auto;
//     width: 70%;
//     margin-bottom: 10px;
// `

// export const IconText = styled.p`
//     text-align: center;
//     margin-bottom: 10px;
//     font-size: 10px;
// `


// PopUp

// export const PopUpBox = styled.div`
// padding: 45px 24px;
//     // background-color: yellow;
//     height: 32rem;
//     width: 22rem;
//     display: flex;
//     line-height: 45px;
//     flex-direction: column;
//     justify-content: center;
//     text-align: center;
// `

// export const PopTitle = styled.div`
// text-align: center;
// font-weight: 600;
// letter-spacing: 0px;
// color: #000000;
// opacity: 1;
// font-size: 1.2rem;
// `

// export const PopDesc = styled.div`
// text-align: center;
// color: #808080;
// opacity: 1;
// font-size: 1.1rem;
// height: auto;
// width: 400px;
// margin-bottom: 1rem;
// `
// export const PopIconBox = styled.div`
//     height: auto;
//     width: 100%;
//     // background-color: yellow;
//     display: flex;   
// `

// export const BoxIcon = styled.div`
//     height: auto;
//     width: 25%;
//     // background-color: red;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;   
// `
// export const IconImg = styled.img`
//     height: auto;
//     width: 70%;
//     margin-bottom: 10px;
// `

// export const IconText = styled.p`
//     text-align: center;
//     margin-bottom: 10px;
//     font-size: 10px;
// `



export const CrossIcon = styled.div`
    display: flex;
    flex-direction: column;
    margin:auto;
    margin-bottom: 1rem;
`

export const ButtonCollection = styled.div`
display: flex;
width: auto;
// background-color: yellow;
height: 60px;
justify-content: center;


@media screen and (max-width: 880px) {
    font-size: 18px;
}

@media screen and (max-width: 768px) {
    font-size: 18px;
}

@media screen and (max-width: 480px) {
    font-size: 15px;
    width: 100%;
} 
`

export const Counter = styled.div`
display: flex;  
margin-top: 0.5rem;
margin-bottom: 0.5rem;
align-items: center;
padding: 5px 0;
justify-content: space-around;
`

export const Counters = styled.div`
width: 25rem;
// background-color: yellow;
display: flex;  
justify-content: center;
`

export const PopUpBoxs = styled.div`
padding: 45px 24px;
    // background-color: yellow;
    height: 18rem;
    width: 30rem;
    display: flex;
    line-height: 75px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`


