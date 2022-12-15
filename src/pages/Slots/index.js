import React, { useEffect, useState } from 'react'
import HeroSection from '../../components/HeroSection'
import HowItWorks from '../../components/How_it_Works/How_it_works'
import AnyKind from '../../components/AnyKind'
import Partner from '../../components/Partner/Partner'
import OurHappyPartners from '../../components/OurHappyPartners/OurHappyPartners'
import OnitFile from '../../components/OnitCon'
import SearchBox from '../../components/SearchBox'
import Footer from '../../components/Footer/Footer'
import { SeriveContainer, HeroBg, ImgBg, ServiceContainer, ServiceTitle, ServiceDesc, SericeFormBox, SericeForm, ServiceFromTitle, PayLabel, CardBox, CardContainer, CardTitle, CardDay, CardTime, CardSes, BookButton, BookBox, UpperContainer } from "./SlotElements"
import Input from '../../components/Input'
import { Formik, Field, Form } from "formik";
import banLogo from "../../images/MaskGroup20.png"
// import AnyKind from '../../components/AnyKind';
// import OnitFile from '../../components/OnitCon';
// import Footer from '../../components/Footer/Footer';
import SelectBox from "../../components/Select";
import { withRouter, useHistory } from 'react-router-dom';
import { completeProfileValidator } from "../../utils/validators"
import { get, isEmpty } from "lodash";
import axios from "../../axios";
import { toast } from "react-toastify";




const Service = (props) => {

    const history = useHistory()

    const timingData = [
        {
            day: "Sunday",
            timing: "7:00 to 8:00 pm"
        },
        {
            day: "Monday",
            timing: "8:30 to 9:30 am"
        }, {
            day: "Saturday",
            timing: "8:30 to 9:30 am"
        },
        {
            day: "Friday",
            timing: "8:30 to 9:30 am"
        },
    ]

    return (
        <SeriveContainer>
            <HeroBg>
                <ImgBg />
            </HeroBg>
            <ServiceContainer>
                <ServiceTitle>Registration Form</ServiceTitle>
                <ServiceDesc>Partner with us</ServiceDesc>
            </ServiceContainer>
            <SericeFormBox>
                <SericeForm>
                    <ServiceFromTitle>Choose a Slot:</ServiceFromTitle>
                    <PayLabel>Simply select a slot with your suitable time for Attend Session.</PayLabel>
                    <CardContainer>
                        {
                            timingData.map((val, ind) => {
                                return <CardBox>
                                    <UpperContainer>
                                        <CardTitle>
                                            24 May 2022
                                        </CardTitle>
                                        <CardDay>
                                            {val.day}
                                        </CardDay>
                                        <CardTime>
                                            {val.timing}
                                        </CardTime>
                                        <CardSes>
                                            This is session is going in English
                                        </CardSes>
                                    </UpperContainer>
                                    <BookBox>
                                        <BookButton>Book Session</BookButton>
                                    </BookBox>
                                </CardBox>
                            })
                        }
                    </CardContainer>
                </SericeForm>
            </SericeFormBox>
            <AnyKind />
            <OnitFile />
            <Footer />
        </SeriveContainer>
    )
}

export default withRouter(Service);