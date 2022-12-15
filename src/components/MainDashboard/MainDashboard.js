import React, { useState, useEffect } from 'react'
import { DashboardContainer, DashboardWrapper, DashboardHeading, DashContainer, DashCard, CardTitle, CardBox, CardPro, BoxIcon, IconImg, IconText, DashContainerRowTwo, DashCards, CardTitles, CardView, DashHeader, PendingContainer, MainCard, CardRowFirst, RowFirst, FirstImg, ImgIcon, FirstContent, ContentDesc, ConList, CreditList, ContentTitle, ContentList, BookingCon, RowSecond, ButtonDecline, ButtonAccept, CardRowSecond, PopUpBox, CrossIcon, PopTitle, ButtonCollection, PopDesc, PopUpBoxs, Counters } from './MainDashboardElements'
import { Modal } from '../Modal/Modal'
import { makeStyles } from '@material-ui/core/styles';
import { uploadImage } from "../../utils/functions";
import { Paper, Button } from '@material-ui/core';
import { Formik, Field, Form } from "formik";
import axios from "../../axios";
import Overlay from '../Overlay'
import { get } from 'lodash';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import ProgressBar from "@ramonak/react-progress-bar";
import PizzaIcon from "../../images/bigsale.png"
import moment from "moment";
import { toast } from "react-toastify";


// Icons
import closeIcon from "../../images/close_popup.png"
import correctIcon from "../../images/MaskGroup198.png"
import MaskIcon from "../../images/mast.png"
import ThermIcon from "../../images/Group_61758.png"
import Dispencer from "../../images/dispencer.png"
import ArogyaIcon from "../../images/arogya.png"

// Dashboard Icon

import TotalIcon from '../../images/brand-identity.png'
import CompletedIcon from '../../images/completed-task.png'
import PendingIcon from '../../images/package.png'
import CancelIcon from '../../images/cancel.png'
// import CompletedIcon from '../../images/HaydeDashboardIcon/product.png'
// import CancelledIcon from '../../images/HaydeDashboardIcon/Group100709.png'
// import ProductActiveIcon from '../../images/HaydeDashboardIcon/Group100709.png'
// import ProductReadyIcon from '../../images/HaydeDashboardIcon/3144651.png'
// import ProductInactiveIcon from '../../images/HaydeDashboardIcon/fail.png'
// import TotalNumberIcon from '../../images/HaydeDashboardIcon/Group101739.png'
// import ActiveNumberIcon from '../../images/HaydeDashboardIcon/Group101774.png'
// import ClosedNumberIcon from '../../images/HaydeDashboardIcon/Group101776.png'

import {
    reasonDescValidatior
} from "../../utils/validators";

const useStyles = makeStyles((theme) => ({

    textMiddle: {
        verticalAlign: 'middle !important',
        textAlign: "center"
    },
    tablePadding: {
        padding: "0.5rem",
        textAlign: "center",
        fontSize: "0.8rem"
    },
    // paperTableHeight: {
    //     height: "auto",
    //     width: "95%",
    //     marginLeft: "2rem",
    //     display: "flex",
    //     backgroundColor: 'transparent',
    //     justifyContent: "space-between",
    //     flexDirection: "column"
    // },
    "@media (max-width: 780px)": {
        paperTableHeight: {
            marginLeft: "0.75rem"
        }
    },
    "@media (max-width: 480px)": {
        paperTableHeight: {
            marginLeft: "0.75rem"
        }
    },
    tablePaginationStyle: {
        border: "1px solid #0000001a",
        borderRadius: "0rem 0rem 0.4rem 0.4rem",
    },
    tableFlex: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    contentHeight: {
        fontSize: "1rem",
    },
    displayFlex: {
        height: 'auto',
        width: '95%',
        marginLeft: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 0px'
    },
    progressBar: {
        borderRadius: '15px',
    }
}));




const MainDashboard = ({ history, userData }) => {
    const classes = useStyles();

    const [isLoading, setIsLoading] = useState(false);
    const [defaultState, setDefaultState] = useState({ isDeclined: false, isAccept: false, isAccepted: false, isPrepared: false })
    const [getId, setGetId] = useState("");
    const [reasonFormValues, setReasonFormValues] = useState({
        reasonDesc: '',
    })


    useEffect(() => {
        if (!userData) {
            history.push("/webPanel")
        }
        if (get(userData, "is_approved_by_admin", "") == "0") {
            history.push("/webPanel")
        }
    }, []);

    useEffect(() => {
        getOrdersPending()
    }, [])


    const [orderDataPending, setOrderDataPending] = useState([])
    const [time, setTime] = useState(15)
    const [timeError, setTimeError] = useState("")
    const [timeErrors, setTimeErrors] = useState("")

    const Rejection = [
        "Shutting Time", "Delivery Guys is not available", "Your area is not around 5KM", "What is Lorem Ipsum", "Why do we use it", "Where does it come from"
    ]


    const getOrdersPending = async () => {
        try {
            const { data } = await axios.get("/restaurant/getOrders?order_status=PENDING",);
            console.log(data.data);
            setOrderDataPending(data.data);
        } catch (error) {
            console.log(error);
            if (get(error, "response.status", "") === 401) {
                history.push('/webPanel')
                localStorage.removeItem("accessToken");
                localStorage.removeItem("userData");
            }
        }
    };


    const token = localStorage.getItem("accessToken");

    console.log(token);

    const handleRejectOrders = async (values) => {

        console.log(values.reasonDesc)

        var fromData = {
            access_token: token,
            order_id: getId,
            order_status: "REJECTED_BY_RESTAURANT",
            rejection_reason: values.reasonDesc,
        };
        setIsLoading(true);
        setDefaultState((prevState) => {
            return {
                ...prevState,
                isDeclined: false,
            };
        });

        console.log(fromData);

        try {
            if (values.reasonDesc) {
                const { data } = await axios.post("/restaurant/acceptRejectOrder", fromData);
                toast.success(`${data.message}`, {
                    position: toast.POSITION.TOP_RIGHT,
                });
                setIsLoading(false);
                getOrdersPending();
            }

        } catch (error) {
            setIsLoading(false);
            setDefaultState((prevState) => {
                return {
                    ...prevState,
                    isDeclined: false,
                };
            });
            toast.error(`${error.response.data.message}`, {
                position: toast.POSITION.TOP_RIGHT,
            });
            if (error.response.status === 401) {
                history.push('/')
                localStorage.removeItem("accessToken");
                localStorage.removeItem("userData");
                // setUsers("");

            }
        }
    };

    const handleAcceptOrders = async (values) => {


        var fromData = {
            access_token: token,
            order_id: getId,
            order_status: "ACCPECTED_BY_RESTAURANT",
            preparation_time: time.toString(),
        };
        setIsLoading(true);
        setDefaultState((prevState) => {
            return {
                ...prevState,
                isAccept: false,
            };
        });

        console.log(fromData);

        try {
            if (time) {
                const { data } = await axios.post("/restaurant/acceptRejectOrder", fromData);
                toast.success(`${data.message}`, {
                    position: toast.POSITION.TOP_RIGHT,
                });
                setIsLoading(false);
                getOrdersPending();
                setDefaultState((prevState) => {
                    return {
                        ...prevState,
                        isAccepted: true,
                        isOrderRecieved: true,
                    };
                });
            }

        } catch (error) {
            setIsLoading(false);
            setDefaultState((prevState) => {
                return {
                    ...prevState,
                    isAccept: false,
                };
            });
            toast.error(`${error.response.data.message}`, {
                position: toast.POSITION.TOP_RIGHT,
            });
            if (error.response.status === 401) {
                history.push('/')
                localStorage.removeItem("accessToken");
                localStorage.removeItem("userData");
                // setUsers("");

            }
        }
    };

    const CounterInc = () => {
        // if (time >= 30) {
        //     setTimeErrors("Don't enter more than 30 Minutes");
        // }
        // else {
        //     setTimeError("")
        //     setTime(time + 1)
        // }
        setTime(time + 5)
        setTimeError("")
    }

    const CounterNum = () => {
        if (time < 0) {
            setTimeError("Don't enter less than 0 Minutes");
        }
        else {
            setTime(time - 1)
        }
    }



    return (
        <>
            <div>
                <DashboardContainer>
                    <DashboardWrapper>
                        <DashboardHeading>
                            Dashboard
                        </DashboardHeading>

                        <DashContainer>
                            <DashCard>
                                <CardTitle>TOTAL ADDED PRODUCT</CardTitle>
                                <CardBox>
                                    <BoxIcon>
                                        <IconImg src={TotalIcon} />
                                        <IconText>265</IconText>
                                    </BoxIcon>
                                </CardBox>
                                <CardPro>
                                    <ProgressBar completed="70" bgColor="#FFC431" borderRadius='20px' labelColor='transparent' />;
                                </CardPro>
                            </DashCard>
                            <DashCard>
                                <CardTitle>TOTAL COMPLETE ORDER</CardTitle>
                                <CardBox>
                                    <BoxIcon>
                                        <IconImg src={CompletedIcon} />
                                        <IconText>78</IconText>
                                    </BoxIcon>
                                </CardBox>
                                <CardPro>
                                    <ProgressBar completed="78" bgColor="#48C8EF" borderRadius='20px' labelColor='transparent' />;
                                </CardPro>
                            </DashCard>
                            <DashCard>
                                <CardTitle>TOTAL PENDING ORDER</CardTitle>
                                <CardBox>
                                    <BoxIcon>
                                        <IconImg src={PendingIcon} />
                                        <IconText>21</IconText>
                                    </BoxIcon>
                                </CardBox>
                                <CardPro>
                                    <ProgressBar completed="21" bgColor="#FFE046" borderRadius='20px' labelColor='transparent' />;
                                </CardPro>
                            </DashCard>
                            <DashCard>
                                <CardTitle>TOTAL CANCEL ORDERS</CardTitle>
                                <CardBox>
                                    <BoxIcon>
                                        <IconImg src={CancelIcon} />
                                        <IconText>45</IconText>
                                    </BoxIcon>
                                </CardBox>
                                <CardPro>
                                    <ProgressBar completed="45" bgColor="#F44545" borderRadius='20px' labelColor='transparent' />;
                                </CardPro>
                            </DashCard>
                        </DashContainer>
                        <DashContainerRowTwo>
                            <DashCards>
                                <DashHeader  style={{width: '40%', alignItems: 'center'}}>
                                    <CardTitles>REVENUE PER WEEK</CardTitles>
                                    <CardView style={{width: '50%', fontSize: '0.8rem'}} to="/webPanel/orders">WEEK</CardView>
                                </DashHeader>
                            </DashCards>
                            <DashCards>
                                <DashHeader>
                                    <CardTitles>PENDING APPROVAL TASKS</CardTitles>
                                    <CardView to="/webPanel/orders">View All</CardView>
                                </DashHeader>
                                <PendingContainer>
                                    {
                                        orderDataPending.slice(0, 5).map((val, ind) => {

                                            const { payment_method, items_ordered, order_id, createdAt, order_status } = val;
                                            // const { menu_details } = items_ordered;

                                            return (
                                                <MainCard key={ind}>
                                                        <CardRowFirst onClick={() => {
                                                            // setViewPanel({
                                                            //     // isOrderPending: false,
                                                            //     // isOrderRecieved: false,
                                                            //     // isPreparing: false,
                                                            //     isDetails: true
                                                            // });
                                                            // setOrderProp(val);
                                                            // setOrderItemProp(val.items_ordered);


                                                        }}>
                                                            <RowFirst>
                                                                <FirstContent>
                                                                    <ContentDesc>
                                                                        <ConList style={{ color: '#FEBA01', marginRight: '10px' }}>{order_status}</ConList>
                                                                        <CreditList>{payment_method}</CreditList>
                                                                    </ContentDesc>
                                                                    <ContentTitle>{items_ordered.slice(0, 3).map((val, ind) => <p key={ind}>{val.item_details.food_name}{ind < (items_ordered.length - 1) ? ' ,' : ''}</p>)}</ContentTitle>
                                                                    <ContentList>
                                                                        <BookingCon>
                                                                            <ConList>Order ID</ConList>
                                                                            <ConList>Date & Time</ConList>
                                                                        </BookingCon>
                                                                        <BookingCon>
                                                                            <ConList style={{ color: '#000000' }}>{order_id}</ConList>
                                                                            <ConList style={{ color: '#000000' }}>{moment(createdAt).utc().format('DD-MM-YYYY')} | {moment(createdAt).utc().format('h:mm a')}</ConList>
                                                                        </BookingCon>
                                                                    </ContentList>
                                                                </FirstContent>
                                                            </RowFirst>
                                                            <RowSecond>

                                                            </RowSecond>
                                                        </CardRowFirst>
                                                        <CardRowSecond>
                                                            {/* <ConList style={{ color: '#000000' }}>Malacca Source: flickr. Malacco</ConList>
                                                        <ConList style={{ color: '#FEBA01' }}>{order_status}</ConList> */}
                                                            <ButtonDecline onClick={() => {
                                                                setGetId(val._id);
                                                                setDefaultState({
                                                                    isDeclined: true,
                                                                });
                                                            }} >
                                                                Decline
                                                            </ButtonDecline>
                                                            <ButtonAccept onClick={() => {
                                                                setGetId(val._id);
                                                                setDefaultState({
                                                                    isAccept: true,
                                                                });

                                                            }}>Accept</ButtonAccept>
                                                        </CardRowSecond>
                                                    </MainCard>
                                            )
                                        })
                                    }
                                </PendingContainer>
                            </DashCards>
                        </DashContainerRowTwo>
                    </DashboardWrapper>
                </DashboardContainer>
            </div>


            {/* Rejcect Order */}
            <Modal
                isOpen={defaultState.isDeclined}
                className="update_profile"
                onClose={() => {
                    setDefaultState({
                        isDeclined: false
                    });
                }}
                maxWidth='sm'
                title={
                    <div className="modalsign">
                        {/* <div
                            className="closeicon"
                            onClick={() => {
                                setDefaultState({
                                    isReject: false
                                });
                            }}
                        >
                            <i className="fas fa-times"></i>
                        </div> */}


                    </div>
                }
                content={
                    <>
                        <PopUpBox>
                            <CrossIcon ><img style={{ height: 'auto', width: '80px' }} src={closeIcon} /></CrossIcon>
                            <PopTitle>Order Reject Reason</PopTitle>
                            <Formik
                                enableReinitialize
                                initialValues={reasonFormValues}
                                validate={reasonDescValidatior}
                                validateOnChange
                                onSubmit={handleRejectOrders}
                            >
                                {(formikBag) => {
                                    return (
                                        <Form>
                                            <div className="signup-cont">

                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <Field name="menu_title">
                                                            {({ field }) => (
                                                                <div className="py-2">

                                                                    <div role="group" aria-labelledby="my-radio-group">
                                                                        {
                                                                            Rejection.map((val, ind) =>
                                                                                <label key={ind}>
                                                                                    <Field type="radio" style={{ marginRight: '10px' }} name="reasonDesc" value={val}
                                                                                    />
                                                                                    {val}
                                                                                </label>
                                                                            )}
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </Field>
                                                    </div>
                                                </div>
                                            </div>
                                            <ButtonCollection style={{ justifyContent: 'space-around' }}>
                                                <ButtonDecline style={{ color: '#686868', backgroundColor: '#CCCCCC' }} type='submit'
                                                    onClick={() => {
                                                        setDefaultState({
                                                            isDeclined: false
                                                        })
                                                    }
                                                    }
                                                >Cancel</ButtonDecline>
                                                <ButtonDecline style={{ color: '#FFFFFF', backgroundColor: '#2B3BF6' }}
                                                // onClick={() => {
                                                //     setDefaultState({
                                                //         isDeclined: false
                                                //     })
                                                // }}
                                                >Submit</ButtonDecline>
                                            </ButtonCollection>
                                        </Form>
                                    );
                                }}
                            </Formik>
                        </PopUpBox>
                    </>}
            />

            {/* Accepted */}
            <Modal
                isOpen={defaultState.isAccepted}
                className="update_profile"
                onClose={() => {
                    setDefaultState({
                        isAccepted: false
                    });
                }}
                maxWidth='sm'
                title={
                    <div className="modalsign">
                        {/* <div
                            className="closeicon"
                            onClick={() => {
                                setDefaultState({
                                    isReject: false
                                });
                            }}
                        >
                            <i className="fas fa-times"></i>
                        </div> */}


                    </div>
                }
                content={
                    <>
                        <PopUpBox style={{ height: '22rem', lineHeight: '15px' }}>
                            <CrossIcon ><img style={{ height: 'auto', width: '80px' }} src={correctIcon} /></CrossIcon>
                            <PopTitle style={{ marginBottom: '1rem' }}>Order is Accepted</PopTitle>
                            <PopDesc style={{ lineHeight: '25px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</PopDesc>
                            {/* <Counter>
                                <Button onClick={CounterNum}><i className="fa fa-minus" style={{ marginLeft: '30px', fontSize: '1.5rem' }} aria-hidden="true"></i></Button>
                                <p style={{ fontSize: '1.3rem', border: '1px solid lightgrey', padding: '14px 40px', borderRadius: '5px' }}>{`${time} Min`}</p>
                                <Button onClick={CounterInc}><i className="fa fa-plus" style={{ marginRight: '30px', fontSize: '1.5rem' }} aria-hidden="true"></i></Button>
                            </Counter>
                            <span style={{ color: 'red' }}>{timeError ? timeError : timeErrors}</span> */}
                            <ButtonAccept style={{ backgroundColor: '#2B3BF6', borderRadius: '2px', padding: '25px 30px', fontSize: '1.2rem' }} onClick={() => setDefaultState({
                                isAccepted: false
                            })} >Done</ButtonAccept>
                        </PopUpBox>
                    </>}
            />

            {/* Accept Order */}
            <Modal
                isOpen={defaultState.isAccept}
                className="update_profile"
                onClose={() => {
                    setDefaultState({
                        isAccept: false
                    });
                }}
                maxWidth='sm'
                title={
                    <div className="modalsign">
                        <div
                            className="closeicon"
                            onClick={() => {
                                setDefaultState({
                                    isAccept: false
                                });
                            }}
                        >
                            <i className="fas fa-times"></i>
                        </div>


                    </div>
                }
                content={
                    <>
                        <PopUpBoxs style={{ height: '20rem' }}>
                            <div><h4>How long will it take to do preparing?</h4></div>
                            {/* <div style={{display: 'flex'}}> */}
                            <Counters style={{ marginTop: '1rem' }}>
                                <Button onClick={CounterNum}><i className="fa fa-minus" style={{ marginLeft: '30px', fontSize: '1.5rem' }} aria-hidden="true"></i></Button>
                                <p style={{ fontSize: '1.5rem', border: '1px solid lightgrey', padding: '0 70px', borderRadius: '5px' }}>{`${time} Min`}</p>
                                <Button onClick={CounterInc}><i className="fa fa-plus" style={{ marginRight: '30px', fontSize: '1.5rem' }} aria-hidden="true"></i></Button>
                                {/* <p>{time}</p> */}
                                {/* <TextField variant="outlined" label="add" /> */}
                            </Counters>
                            <span style={{ color: 'red' }}>{timeError ? timeError : timeErrors}</span>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <ButtonAccept style={{ height: '3rem', marginTop: '2rem', justifyContent: 'center', backgroundColor: '#2B3BF6' }} type='submit' onClick={handleAcceptOrders}>{"Done"} </ButtonAccept></div>
                        </PopUpBoxs>
                    </>}
            />

            {isLoading && <Overlay />}

        </>

    )
}


const mapStateToProps = (state) => {
    return {
        userData: state.userData,
        locationData: state.locations,
        defaultState: state.defaultState,
        sidebar: state.sidebar,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (updatedValue) => {
            dispatch({
                type: actionTypes.UPDATE_USER,
                updatedUser: updatedValue,
            });
        },
        setDefaultState: (updatedValue) => {
            dispatch({
                type: actionTypes.UPDATE_DEFAULT,
                updateDefault: updatedValue,
            });
        },
        setSidebar: (updatedValue) => {
            dispatch({
                type: actionTypes.UPDATE_SIDEBAR,
                updateSidebar: updatedValue,
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainDashboard));
