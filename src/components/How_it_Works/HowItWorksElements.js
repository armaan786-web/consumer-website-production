import styled from "styled-components";
import worksBg from '../../images/worksBg.png'
import worksBgRotate from '../../images/worksBgRotate.png'

export const WorksContainer = styled.div`
    height: 1288px;
    max-width: 2000px;
    // background: url(${worksBg}) no-repeat center top / contain;
    z-index: -1;
    border: none;
    margin-bottom: 15rem;
    // background-color: #FAFCFC;
    @media screen and (max-width: 2560px) {
        height: 1288px;
    }

    @media screen and (max-width: 2200px) {
        height: 700px;
    }

    @media screen and (max-width: 950px) {
        height: 1600px;
    }
    @media screen and (max-width: 540px) {
        margin-top: -20rem;
    }

    @media screen and (max-width: 451px) {
        margin-top: -15rem;
        margin-bottom: 0;
    }
    @media screen and (max-width: 376px) {
        margin-top: 20rem;
        margin-bottom: -10rem;
    }
    @media screen and (max-width: 321px) {
        margin-top: 12rem;
    }

    
    

    
`

export const HeroBg = styled.div`
    // position: absolute;
    // top: 105%;
    // right: 0;
    // bottom: 0;
    // left: 0;
    // width: 100%;
    // height: 100%;
    // // overflow: hidden;

    // @media screen and (max-width: 2560px) {
    //     top: 62%;
    //     }
    
    //     @media screen and (max-width: 2000px) {
    //         top: 105%;
    //         }

    //         @media screen and (max-width: 1800px) {
    //             top: 63%;
    //             }



`

export const ImgBg = styled.div`
    // height: 1200px;
    width: 100%;
    object-fit: cover;
    position: absolute;
    background: url(${worksBg}) no-repeat center center / cover;
    @media screen and (max-width: 8000px) {
        height: 950px;
        max-width: 2000px;
        }
    @media screen and (max-width: 5000px) {
        height: 950px;
        max-width: 2000px;
        }

    @media screen and (max-width: 2705px) {
        height: 1120px;
        max-width: 2000px;
        }

    @media screen and (max-width: 2560px) {
    height: 1500px;
    }

    @media screen and (max-width: 2000px) {
        height: 900px;
        }

        @media screen and (max-width: 1800px) {
            height: 950px;
            }

    @media screen and (max-width: 950px) {
        background: url(${worksBgRotate}) no-repeat center top / cover;
        // background-position: 25% 50%;
        width: 45%;
        height: 1500px;
        margin-left: 15rem;
        margin-top: 22rem;
        margin-bottom: 2rem;
    }
    @media screen and (max-width: 820px) {
        height: 1400px;
        width: 45%
    }
    @media screen and (max-width: 768px) {
        height: 1200px;
        width: 35%
        }
        @media screen and (max-width: 550px) {
            height: 1200px;
            width: 37%
            }
           
            // @media screen and (max-width: 500px) {
            //     height: 1200px;
            //     width: 45%;
            //     margin-left: 9rem; 
            //     margin-top: 17rem;
            //     }
                @media screen and (max-width: 450px) {
                height: 1200px;
                width: 45%;
                margin-left: 10rem; 
                margin-top: 17rem;
                }
                @media screen and (max-width: 414px) {
                    height: 1200px;
                    width: 48%;
                    }
                @media screen and (max-width: 400px) {
                    height: 1000px;
                    width: 50%;
                    margin-left: 5rem; 
                    margin-top: 17rem;
                    }
                    @media screen and (max-width: 320px) {
                        height: 1000px;
                        width: 55%;
                        margin-left: 4rem; 
                        margin-top: 17rem;
                        }
;
`
export const HowWrapper = styled.div`
    height: auto;
    width: 100%;
    padding: 12rem 2rem;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 450px) {
    padding: 6rem 2rem; 
        }
    @media screen and (max-width: 450px) {
    padding: 6rem 2rem; 
        }
`

export const HowContent = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const HowTitle = styled.p`
    font: 700 40px/84px Montserrat;
    letter-spacing: 0px;
    color: #363636;
    opacity: 1;
    z-index: 1;
    // font-size: 3.5rem;

    @media screen and (max-width: 2705px) {
        font-size: 4.5rem;        
        }

    @media screen and (max-width: 2000px) {
        font-size: 3rem;        
        }
    @media screen and (max-width: 1800px) {
        font-size: 4.5rem;        
        }
        @media screen and (max-width: 1440px) {
            font-size: 2.5rem;        
            }
            @media screen and (max-width: 768px) {
                font-size: 2rem;        
                }
                @media screen and (max-width: 450px) {
                    font-size: 1.6rem;        
                    }
`

export const HowDesc = styled.p`
    font: 400 24px/32px Montserrat;
    letter-spacing: 0px;
    color: #363636;
    opacity: 1;
    // margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;

    @media screen and (max-width: 2705px) {
        margin-top: 1.9rem;        
        font-size: 2.5rem;
        }

    @media screen and (max-width: 2000px) {
        font-size: 1.6rem;
        margin-top: 1rem;        
        }
    @media screen and (max-width: 1800px) {
        font-size: 2.5rem;
        margin-top: 1.2rem;        
        }
        @media screen and (max-width: 1440px) {
            font-size: 1.6rem;
            margin-top: 0.8rem;        
            }
            @media screen and (max-width: 768px) {
                font-size: 1.2rem;        
                }

    
`
export const HowCardContainer = styled.div`
    height: auto;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    z-index: 3;

    @media screen and (max-width: 2705px) {
        
    }

    @media screen and (max-width: 950px) {
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`
export const HowCardOne = styled.div`
    height: 200px;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2.5rem;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    border-radius: 10px;
    opacity: 1;
    margin-top: 10rem;

    @media screen and (max-width: 2705px) {
        height: 300px;
        width: 300px;
        margin-top: 15rem;
    }

    @media screen and (max-width: 2560px) {
        margin-top: 28rem;
    }
    @media screen and (max-width: 2000px) {
        height: 250px;
        width: 250px;
        margin-top: 5rem;
    }
    
    @media screen and (max-width: 1500px) {
        height: 200px;
        width: 200px;
        margin-top: 9rem;
    }
    @media screen and (max-width: 950px) {
        margin-top: 10rem;
        margin-left: 16rem;
    }
    @media screen and (max-width: 820px) {
        margin-top: 8rem;
        margin-left: 20rem;   
    }
    @media screen and (max-width: 768px) {
        height: 150px;
        width: 150px;
        margin-top: 8rem;
        margin-left: 13rem;
        
    }
    @media screen and (max-width: 600px) {
        margin-top: 8rem;
        margin-left: 16rem; 
    }
    @media screen and (max-width: 414px) {
        
        margin-top: 5rem;
        margin-left: 14rem;
        
    }
    @media screen and (max-width: 400px) {
        height: 120px;
        width: 120px;
        margin-top: 5rem;
        margin-left: 3rem;
        
    }
`

export const HowCardTwo = styled.div`
    height: 200px;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2.5rem;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    border-radius: 10px;
    opacity: 1;
    margin-top: 15rem;

    @media screen and (max-width: 2705px) {
        height: 300px;
        width: 300px;
        margin-top: 27rem;
    }
    
    @media screen and (max-width: 2560px) {
        margin-top: 32rem;
    }
    @media screen and (max-width: 2000px) {
        height: 250px;
        width: 250px;
        margin-top: 15rem;
    }
    @media screen and (max-width: 1560px) {
        margin-top: 10rem;
    }
    @media screen and (max-width: 1500px) {
        height: 200px;
        width: 200px;
        margin-top: 12rem;
    }
    @media screen and (max-width: 950px) {
        margin-top: 10rem;
        margin-left: 21rem;
    }
    @media screen and (max-width: 820px) {
        margin-top: 8rem;
        margin-left: 10rem;   
    }
    @media screen and (max-width: 768px) {
        height: 150px;
        width: 150px;
        margin-top: 8rem;
        margin-left: 5rem;
    }
    @media screen and (max-width: 600px) {
        margin-top: 8rem;
        margin-left: 0rem; 
    }
    @media screen and (max-width: 400px) {
        height: 120px;
        width: 120px;
        margin-top: 8rem;
        margin-left: 3rem;
        
    }
    
`

export const HowCardThree = styled.div`
    height: 200px;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2.5rem;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    border-radius: 10px;
    opacity: 1;
    margin-top: 19em;

    @media screen and (max-width: 2705px) {
        height: 300px;
        width: 300px;
        margin-top: 30rem;
    }
    
    @media screen and (max-width: 2560px) {
        margin-top: 40rem;
    }

    @media screen and (max-width: 2000px) {
        height: 250px;
        width: 250px;
        margin-top: 19rem;
    }
    @media screen and (max-width: 1560px) {
        margin-top: 17rem;
    }
    @media screen and (max-width: 1500px) {
        height: 200px;
        width: 200px;
        margin-top: 18rem;
    }
    @media screen and (max-width: 950px) {
        margin-top: 10rem;
        margin-left: -10rem;
        
    }
    @media screen and (max-width: 820px) {
        margin-top: 8rem;
        margin-left: -15rem;   
    }
    @media screen and (max-width: 768px) {
        height: 150px;
        width: 150px;
        margin-top: 8rem;
        margin-left: -16rem;
    }
    @media screen and (max-width: 600px) {
        margin-top: 8rem;
        margin-left: 0rem; 
    }
    @media screen and (max-width: 400px) {
        height: 120px;
        width: 120px;
        margin-top: 8rem;
        margin-left: -8rem;
        
    }
`

export const HowCardFour = styled.div`
    height: 200px;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2.5rem;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 11px 21px #0000001A;
    border-radius: 10px;
    opacity: 1;
    margin-top: 5rem;

    @media screen and (max-width: 2705px) {
        height: 300px;
        width: 300px;
        margin-top: 12rem;
    }


    @media screen and (max-width: 2560px) {
        margin-top: 21rem;
    }

    @media screen and (max-width: 2000px) {
        height: 250px;
        width: 250px;
        margin-top: 5rem;
    }
    @media screen and (max-width: 1500px) {
        height: 200px;
        width: 200px;
        margin-top: 5rem;
    }
    @media screen and (max-width: 950px) {
        margin-top: 10rem;
        margin-left: -25rem;
    }
    @media screen and (max-width: 820px) {
        margin-top: 10rem;
        margin-left: -17rem;   
    }
    @media screen and (max-width: 768px) {
        height: 150px;
        width: 150px;
        margin-top: 10rem;
        margin-left: 5rem;
    }
    @media screen and (max-width: 600px) {
        margin-top: 10rem;
        margin-left: 15rem;
    }
    @media screen and (max-width: 400px) {
        height: 120px;
        width: 120px;
        margin-top: 8rem;
        margin-left: 10rem;
        
    }

`
export const ImageBox = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const CardImg = styled.img`
    height: auto;
    width: 50%;
    margin: auto;

    @media screen and (max-width: 2000px) {
        font-size: 20%;        
        }

        @media screen and (max-width: 400px) {
            width: 100%;
            margin-top: 1.2rem;
        }

`
export const CardText = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    font: 600 16px/24px Montserrat;
    padding: 1rem 0;
    font-size: 1.1rem;
    text-align: center;

    @media screen and (max-width: 2705px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 2000px) {
        font-size: 1.2rem;        
        }

    @media screen and (max-width: 1800px) {
        font-size: 1.5rem;        
        }

        @media screen and (max-width: 1440px) {
            font-size: 1.1rem;        
            }

            @media screen and (max-width: 1024px) {
                font-size: 0.9rem;        
                }
                @media screen and (max-width: 400px) {
                    font-size: 0.8rem;
                    padding: 0.5rem;
                }
`