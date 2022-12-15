import React, { useEffect, useState } from 'react'
import HeroSection from '../../components/HeroSection'
import HowItWorks from '../../components/How_it_Works/How_it_works'
import AnyKind from '../../components/AnyKind'
import Partner from '../../components/Partner/Partner'
import OurHappyPartners from '../../components/OurHappyPartners/OurHappyPartners'
import OnitFile from '../../components/OnitCon'
import SearchBox from '../../components/SearchBox'
import Footer from '../../components/Footer/Footer'
import { SeriveContainer, HeroBg, ImgBg, ServiceContainer, ServiceTitle, ServiceDesc, SericeFormBox, SericeForm, ServiceFromTitle, ServiceFormRow, FormLabel, ServiceText, ServiceSearch, SearchIcon, AnyButton, AnyButtonText, InputBox, CoupanBox, InputFullBox, PayLabel, BoxRow, Boxes, ImageBox, ActiveBox, Logo, Ikon, ComBox } from "./PaymentElements"
import Input from '../../components/Input'
import { Formik, Field, Form } from "formik";
import BhimLogo from '../../images/Onit_Images/Upi-Logo-Vector.png'
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

    const [personalDetails, setPersonalDetails] = useState({
        service: '',
        name: '',
        whatspp_number: '',
        alternate_number: '',
        house_number: '',
        requirements: '',
        locality: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
        time_preference: '',
        offer_code: '',
    })


    const coloroptions = [
        { value: 'IMMEDIATELY', label: 'IMMEDIATELY' },
        { value: 'WITHIN_24_HOURS', label: 'WITHIN_24_HOURS' },
        { value: 'SPECIFIC_DATE_AND_TIME', label: 'SPECIFIC_DATE_AND_TIME' },
    ]

    const [categoryList, setCategoryList] = useState([]);


    const fetchCategoryList = async () => {
        try {
            let { data } = await axios.get("/admin/get-all-active-services");
            console.log(data.data);
            setCategoryList(
                data.data.map((item) => {
                    return { label: item.service_name, value: item._id };
                })
            );

        } catch (error) {
            // console.log(error);
            // toast.error("Something went wrong.", {
            //     position: toast.POSITION.TOP_RIGHT,
            // });
        }
    };

    const handleProfileSubmit = async (values) => {
        console.log(values);

        try {
            const { data } = await axios.post("/center/public-ticket-booking", {

                personal_details: {
                    primary_phone: {
                        country_code: "+91",
                        mobile_number: values.whatspp_number
                    },
                    alternate_phone: {
                        country_code: "+91",
                        mobile_number: values.alternate_number
                    },
                    name: values.name
                },
                specific_requirement: values.specific_requirement,
                service_provided_for: values.service.value,
                address_details: {
                    house_number: values.house_number,
                    locality: values.locality,
                    city: values.city,
                    state: values.state,
                    pincode: values.pincode,
                    country: values.country
                },
                time_preference: {
                    time_preference_type: values.time_preference,
                    // specific_date_time: values
                },
                offers_applied: {
                    offer_code: values.offer_code
                }
            });
            toast.success(`${data.message}`, {
                position: toast.POSITION.TOP_RIGHT,
            });
            history.push("/");
        } catch (error) {
            toast.error(`${error.response.data.message}`, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    }

    useEffect(() => {
        fetchCategoryList();
    }, [])

    console.log(categoryList);

    return (
        <SeriveContainer>
            <HeroBg>
                <ImgBg />
            </HeroBg>
            <ServiceContainer>
                <ServiceTitle>Heating/Coolin (AC)</ServiceTitle>
                <ServiceDesc>Please pay the advance to proceed.</ServiceDesc>
            </ServiceContainer>
            <SericeFormBox>
                <SericeForm>
                    <ServiceFromTitle>Advance Payment</ServiceFromTitle>
                    <PayLabel>This advance will be adjusted against services <u style={{ color: "#003CFF" }}>Refund Policy.</u></PayLabel>
                    <Formik
                        enableReinitialize
                        initialValues={personalDetails}
                        onSubmit={handleProfileSubmit}
                        validateOnChange
                    >
                        {(formikBag) => {
                            return (
                                <Form>
                                    <BoxRow>
                                        <Boxes>
                                            <ImageBox>
                                                <ComBox>
                                                    <Logo src={BhimLogo} />
                                                </ComBox>
                                                <ComBox>
                                                    UPI
                                                </ComBox>
                                            </ImageBox>
                                            <ActiveBox>
                                                <i className="ph-check-circle-fill" style={{ color: "#00796A" }}></i>
                                            </ActiveBox>
                                        </Boxes>
                                        <Boxes>
                                            <ImageBox>
                                                <ComBox>
                                                    <Ikon className="ph-wallet-fill"></Ikon>
                                                </ComBox>
                                                <ComBox>
                                                    Wallet
                                                </ComBox>
                                            </ImageBox>
                                            <ActiveBox>
                                                <i className="ph-check-circle-fill" style={{ color: "#00796A" }}></i>
                                            </ActiveBox>
                                        </Boxes>
                                        <Boxes>
                                            <ImageBox>
                                                <ComBox>
                                                    <Ikon className="ph-credit-card-fill"></Ikon>
                                                </ComBox>
                                                <ComBox>
                                                    Credit/Debit Card
                                                </ComBox>
                                            </ImageBox>
                                            <ActiveBox>
                                                <i className="ph-check-circle-fill" style={{ color: "#00796A" }}></i>
                                            </ActiveBox>
                                        </Boxes>
                                    </BoxRow>
                                    <ServiceFormRow>
                                        <InputBox>
                                            <FormLabel>Card Holder Name</FormLabel>
                                            <Field name="pincode">
                                                {({ field }) => (
                                                    <Input
                                                        {...field}
                                                        type="text"
                                                        value={formikBag.values.pincode}
                                                        noBorderBottom="none"
                                                        onChange={(e) => {
                                                            formikBag.setFieldValue("pincode", e.target.value);
                                                        }}
                                                        style={{ borderBottom: "none", border: "1px solid #CED4DA", padding: "0 0.8rem", width: "100%" }}

                                                        error={
                                                            formikBag.touched.pincode && formikBag.errors.pincode
                                                                ? formikBag.errors.pincode
                                                                : null
                                                        }
                                                        className="form-control"
                                                        placeholder="Card Holder Name"
                                                    />
                                                )}
                                            </Field>
                                        </InputBox>
                                        <InputBox>
                                            <FormLabel>Card Number</FormLabel>
                                            <Field name="pincode">
                                                {({ field }) => (
                                                    <Input
                                                        {...field}
                                                        type="text"
                                                        value={formikBag.values.pincode}
                                                        noBorderBottom="none"
                                                        onChange={(e) => {
                                                            formikBag.setFieldValue("pincode", e.target.value);
                                                        }}
                                                        style={{ borderBottom: "none", border: "1px solid #CED4DA", padding: "0 0.8rem", width: "100%" }}

                                                        error={
                                                            formikBag.touched.pincode && formikBag.errors.pincode
                                                                ? formikBag.errors.pincode
                                                                : null
                                                        }
                                                        className="form-control"
                                                        placeholder="Card Number"
                                                    />
                                                )}
                                            </Field>
                                        </InputBox>

                                    </ServiceFormRow>
                                    <ServiceFormRow>
                                        <InputBox>
                                            <FormLabel>CVV</FormLabel>
                                            <Field name="pincode">
                                                {({ field }) => (
                                                    <Input
                                                        {...field}
                                                        type="text"
                                                        value={formikBag.values.pincode}
                                                        noBorderBottom="none"
                                                        onChange={(e) => {
                                                            formikBag.setFieldValue("pincode", e.target.value);
                                                        }}
                                                        style={{ borderBottom: "none", border: "1px solid #CED4DA", padding: "0 0.8rem", width: "100%" }}

                                                        error={
                                                            formikBag.touched.pincode && formikBag.errors.pincode
                                                                ? formikBag.errors.pincode
                                                                : null
                                                        }
                                                        className="form-control"
                                                        placeholder="---"
                                                    />
                                                )}
                                            </Field>
                                        </InputBox>
                                        <InputBox>
                                            <FormLabel>Valid Thru</FormLabel>
                                            <Field name="pincode">
                                                {({ field }) => (
                                                    <Input
                                                        {...field}
                                                        type="text"
                                                        value={formikBag.values.pincode}
                                                        noBorderBottom="none"
                                                        onChange={(e) => {
                                                            formikBag.setFieldValue("pincode", e.target.value);
                                                        }}
                                                        style={{ borderBottom: "none", border: "1px solid #CED4DA", padding: "0 0.8rem", width: "100%" }}

                                                        error={
                                                            formikBag.touched.pincode && formikBag.errors.pincode
                                                                ? formikBag.errors.pincode
                                                                : null
                                                        }
                                                        className="form-control"
                                                        placeholder="__/__"
                                                    />
                                                )}
                                            </Field>
                                        </InputBox>

                                    </ServiceFormRow>

                                    <ServiceFormRow>
                                        <InputBox>
                                        Save for later, Your card is <u style={{ color: "#00796A" }}>Secure</u>.
                                        </InputBox>
                                        <InputBox>
                                            <AnyButtonText type="submit"  onClick={() => {
                                                history.push({
                                                    pathname: '/thanku',
                                                });
                                            }}>
                                                Proceed
                                            </AnyButtonText>
                                        </InputBox>
                                    </ServiceFormRow>
                                </Form>
                            );
                        }}
                    </Formik>
                </SericeForm>
            </SericeFormBox>
            <AnyKind />
            <OnitFile />
            <Footer />
        </SeriveContainer>
    )
}

export default withRouter(Service);