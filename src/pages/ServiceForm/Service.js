import React, { useEffect, useState } from 'react'
import HeroSection from '../../components/HeroSection'
import HowItWorks from '../../components/How_it_Works/How_it_works'
import AnyKind from '../../components/AnyKind'
import Partner from '../../components/Partner/Partner'
import OurHappyPartners from '../../components/OurHappyPartners/OurHappyPartners'
import OnitFile from '../../components/OnitCon'
import SearchBox from '../../components/SearchBox'
import Footer from '../../components/Footer/Footer'
import { SeriveContainer, HeroBg, ImgBg, ServiceContainer, ServiceTitle, ServiceDesc, SericeFormBox, SericeForm, ServiceFromTitle, ServiceFormRow, FormLabel, ServiceText, ServiceSearch, SearchIcon, AnyButton, AnyButtonText, InputBox, CoupanBox, InputFullBox, CoupanBoxRow, ErrorBox } from "./ServiceElements"
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
import { IndianStates } from '../States'




const Service = (props) => {

    const history = useHistory()
    const productDetails = props.location.state || {};
    const [indState, setIndState] = useState(IndianStates);

    console.log(productDetails.value);

    const [personalDetails, setPersonalDetails] = useState({
        service: productDetails,
        name: '',
        whatspp_number: '',
        alternate_number: '',
        house_number: '',
        requirements: '',
        locality: '',
        city: '',
        state: '',
        country: 'India',
        pincode: '',
        time_preference: '',
        offer_code: 'ONIT2022',
    })
    const [serviceYou, setServiceYou] = useState(productDetails);
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
        <div>
            <SeriveContainer>
                <HeroBg>
                    <ImgBg />
                </HeroBg>
                <ServiceContainer>
                    <ServiceTitle>Namaste !</ServiceTitle>
                    <ServiceDesc>Please help us understand your need</ServiceDesc>
                </ServiceContainer>
            </SeriveContainer>
            <SericeFormBox>
                <SericeForm>
                    <ServiceFromTitle>Personal Details:</ServiceFromTitle>
                    <Formik
                        enableReinitialize
                        initialValues={personalDetails}
                        validate={completeProfileValidator}
                        onSubmit={handleProfileSubmit}
                        validateOnChange
                    >
                        {(formikBag) => {
                            return (
                                <Form>
                                    <ServiceFormRow>
                                        <InputBox>
                                            <FormLabel>Service You Required<span style={{ color: "red", marginLeft: "2px" }}>*</span></FormLabel>
                                            <Field name="service">
                                                {({ field }) => (
                                                    <SelectBox
                                                        options={categoryList}
                                                        isSearchable={false}
                                                        isClearable={false}
                                                        defaultValue={formikBag.values.service}
                                                        // className="form-control"
                                                        // className={classes.colorDropdown}
                                                        className="cm-select"
                                                        placeholder="Select Service"
                                                        onChange={(option) => {
                                                            formikBag.setFieldValue("service", option);
                                                            console.log(option.value)
                                                        }}
                                                        error={
                                                            formikBag.touched.service &&
                                                                formikBag.errors.service
                                                                ? formikBag.errors.service
                                                                : null
                                                        }
                                                    />
                                                )}
                                            </Field>
                                        </InputBox>
                                        <InputBox>
                                            <FormLabel>Specific Requirements - it helps</FormLabel>
                                            <Field name="requirements">
                                                {({ field }) => (
                                                    <Input
                                                        {...field}
                                                        type="text"
                                                        value={formikBag.values.requirements}
                                                        noBorderBottom="none"
                                                        onChange={(e) => {
                                                            formikBag.setFieldValue("requirements", e.target.value);
                                                        }}
                                                        style={{ borderBottom: "none", border: "1px solid #CED4DA", padding: "0 0.8rem", width: "100%" }}

                                                        error={
                                                            formikBag.touched.requirements && formikBag.errors.requirements
                                                                ? formikBag.errors.requirements
                                                                : null
                                                        }
                                                        className="form-control"
                                                        placeholder="Type your requirements"
                                                    />
                                                )}
                                            </Field>
                                        </InputBox>
                                    </ServiceFormRow>
                                    <ServiceFormRow>
                                        <InputBox>
                                            <FormLabel>Name (Contact Person)<span style={{ color: "red", marginLeft: "2px" }}>*</span></FormLabel>
                                            <Field name="name">
                                                {({ field }) => (
                                                    <Input
                                                        {...field}
                                                        type="text"
                                                        value={formikBag.values.name}
                                                        noBorderBottom="none"
                                                        onChange={(e) => {
                                                            formikBag.setFieldValue("name", e.target.value);
                                                        }}
                                                        style={{ borderBottom: "none", border: "1px solid #CED4DA", padding: "0 0.8rem" }}
                                                        error={
                                                            formikBag.touched.name && formikBag.errors.name
                                                                ? formikBag.errors.name
                                                                : null
                                                        }
                                                        className="form-control"
                                                        placeholder="Enter Name"
                                                    />
                                                )}
                                            </Field>
                                        </InputBox>
                                        <InputBox>
                                            <FormLabel>Time Preference<span style={{ color: "red", marginLeft: "2px" }}>*</span></FormLabel>
                                            <Field name="time_preference">
                                                {({ field }) => (
                                                    <SelectBox
                                                        options={coloroptions}
                                                        isSearchable={false}
                                                        isClearable={false}
                                                        // defaultValue={formikBag.values.time_preference}
                                                        defaultValue={!isEmpty(formikBag.values.primary_services) ? { label: formikBag.values.primary_services_name, value: formikBag.values.primary_services } : ""}
                                                        // className="form-control"
                                                        // className={classes.colorDropdown}
                                                        className="cm-select"
                                                        style={{ padding: "0" }}
                                                        placeholder="Select time preference"
                                                        onChange={(option) => {
                                                            formikBag.setFieldValue("time_preference", option.value);
                                                            console.log(option.value)
                                                        }}
                                                        error={
                                                            formikBag.touched.time_preference &&
                                                                formikBag.errors.time_preference
                                                                ? formikBag.errors.time_preference
                                                                : null
                                                        }
                                                    />
                                                )}
                                            </Field>
                                        </InputBox>
                                    </ServiceFormRow>
                                    <ServiceFormRow>

                                        <InputBox>
                                            <FormLabel>WhatsApp Number<span style={{ color: "red", marginLeft: "2px" }}>*</span></FormLabel>
                                            <Field name="whatspp_number">
                                                {({ field }) => (
                                                    <Input
                                                        {...field}
                                                        type="number"
                                                        value={formikBag.values.whatspp_number}
                                                        noBorderBottom="none"
                                                        onChange={(e) => {
                                                            formikBag.setFieldValue("whatspp_number", e.target.value);
                                                        }}
                                                        style={{ borderBottom: "none", border: "1px solid #CED4DA", padding: "0 0.8rem", width: "100%" }}

                                                        error={
                                                            formikBag.touched.whatspp_number && formikBag.errors.whatspp_number
                                                                ? formikBag.errors.whatspp_number
                                                                : null
                                                        }
                                                        className="form-control"
                                                        placeholder="Enter Phone Number"
                                                    />
                                                )}
                                            </Field>
                                        </InputBox>
                                        <InputBox>
                                            <FormLabel>Alternative Phone Number </FormLabel>
                                            <Field name="alternate_number">
                                                {({ field }) => (
                                                    <Input
                                                        {...field}
                                                        type="number"
                                                        value={formikBag.values.alternate_number}
                                                        noBorderBottom="none"
                                                        onChange={(e) => {
                                                            formikBag.setFieldValue("alternate_number", e.target.value);
                                                        }}
                                                        style={{ borderBottom: "none", border: "1px solid #CED4DA", padding: "0 0.8rem" }}
                                                        error={
                                                            formikBag.touched.alternate_number && formikBag.errors.alternate_number
                                                                ? formikBag.errors.alternate_number
                                                                : null
                                                        }
                                                        className="form-control"
                                                        placeholder="Enter Phone Number"
                                                    />
                                                )}
                                            </Field>
                                        </InputBox>
                                    </ServiceFormRow>

                                    <ServiceFromTitle style={{ marginTop: "3rem" }}>Address Details:</ServiceFromTitle>
                                    <ServiceFormRow>
                                        <InputFullBox>
                                            <FormLabel>House Number / Street<span style={{ color: "red", marginLeft: "2px" }}>*</span></FormLabel>
                                            <Field name="house_number">
                                                {({ field }) => (
                                                    <Input
                                                        {...field}
                                                        type="text"
                                                        value={formikBag.values.house_number}
                                                        noBorderBottom="none"
                                                        onChange={(e) => {
                                                            formikBag.setFieldValue("house_number", e.target.value);
                                                        }}
                                                        style={{ borderBottom: "none", border: "1px solid #CED4DA", padding: "0 0.8rem", width: "100%" }}

                                                        error={
                                                            formikBag.touched.house_number && formikBag.errors.house_number
                                                                ? formikBag.errors.house_number
                                                                : null
                                                        }
                                                        className="form-control"
                                                        placeholder="Please provide House Number / Street."
                                                    />
                                                )}
                                            </Field>
                                        </InputFullBox>
                                    </ServiceFormRow>
                                    <ServiceFormRow>
                                        <InputBox>
                                            <FormLabel>Locality</FormLabel>
                                            <Field name="locality">
                                                {({ field }) => (
                                                    <Input
                                                        {...field}
                                                        type="text"
                                                        value={formikBag.values.locality}
                                                        noBorderBottom="none"
                                                        onChange={(e) => {
                                                            formikBag.setFieldValue("locality", e.target.value);
                                                        }}
                                                        style={{ borderBottom: "none", border: "1px solid #CED4DA", padding: "0 0.8rem", width: "100%" }}

                                                        error={
                                                            formikBag.touched.locality && formikBag.errors.locality
                                                                ? formikBag.errors.locality
                                                                : null
                                                        }
                                                        className="form-control"
                                                        placeholder="Enter Locality"
                                                    />
                                                )}
                                            </Field>
                                        </InputBox>
                                        <InputBox>
                                            <FormLabel>City</FormLabel>
                                            <Field name="city">
                                                {({ field }) => (
                                                    <Input
                                                        {...field}
                                                        type="text"
                                                        value={formikBag.values.city}
                                                        noBorderBottom="none"
                                                        onChange={(e) => {
                                                            formikBag.setFieldValue("city", e.target.value);
                                                        }}
                                                        style={{ borderBottom: "none", border: "1px solid #CED4DA", padding: "0 0.8rem" }}
                                                        error={
                                                            formikBag.touched.city && formikBag.errors.city
                                                                ? formikBag.errors.city
                                                                : null
                                                        }
                                                        className="form-control"
                                                        placeholder="Enter City"
                                                    />
                                                )}
                                            </Field>
                                        </InputBox>
                                    </ServiceFormRow>
                                    <ServiceFormRow>
                                        <InputBox>
                                            <FormLabel>State</FormLabel>
                                            <Field name="state">
                                                {({ field }) => (
                                                    <SelectBox
                                                        options={indState}
                                                        isSearchable={false}
                                                        isClearable={false}
                                                        defaultValue={formikBag.values.state}
                                                        // defaultValue=
                                                        // className="form-control"
                                                        // className={classes.colorDropdown}
                                                        className="cm-select"
                                                        style={{ padding: "0" }}
                                                        placeholder="Select State"
                                                        onChange={(option) => {
                                                            formikBag.setFieldValue("state", option.value);
                                                            console.log(option.value)
                                                        }}
                                                        error={
                                                            formikBag.touched.state &&
                                                                formikBag.errors.state
                                                                ? formikBag.errors.state
                                                                : null
                                                        }
                                                    />
                                                )}
                                            </Field>
                                        </InputBox>
                                        <InputBox>
                                            <FormLabel>Country</FormLabel>
                                            <Field name="country">
                                                {({ field }) => (
                                                    <Input
                                                        {...field}
                                                        type="text"
                                                        value={formikBag.values.country}
                                                        noBorderBottom="none"
                                                        onChange={(e) => {
                                                            formikBag.setFieldValue("country", e.target.value);
                                                        }}
                                                        style={{ borderBottom: "none", border: "1px solid #CED4DA", padding: "0 0.8rem" }}
                                                        error={
                                                            formikBag.touched.country && formikBag.errors.country
                                                                ? formikBag.errors.country
                                                                : null
                                                        }
                                                        className="form-control"
                                                        placeholder="Enter Country"
                                                    />
                                                )}
                                            </Field>
                                        </InputBox>
                                    </ServiceFormRow>
                                    <ServiceFormRow>
                                        <InputBox>
                                            <FormLabel>Pincode</FormLabel>
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
                                                        placeholder="Enter Pincode"
                                                    />
                                                )}
                                            </Field>
                                        </InputBox>
                                        <CoupanBoxRow>

                                            <CoupanBox>
                                                <ServiceText>
                                                    <SearchIcon src={banLogo} />
                                                </ServiceText>
                                                <ServiceSearch>
                                                    <Field name="offer_code">
                                                        {({ field }) => (
                                                            <Input
                                                                {...field}
                                                                type="text"
                                                                value={formikBag.values.offer_code}
                                                                noBorderBottom="none"
                                                                onChange={(e) => {
                                                                    formikBag.setFieldValue("offer_code", e.target.value);
                                                                }}
                                                                style={{ backgroundColor: "transparent", outline: "none" }}
                                                                className="form-control"
                                                                placeholder="Offer Code"
                                                            />
                                                        )}
                                                    </Field>
                                                </ServiceSearch>
                                            </CoupanBox>
                                            <ErrorBox>
                                                {formikBag.touched.offer_code && formikBag.errors.offer_code && (
                                                    <p
                                                        style={{
                                                            paddingTop: 5,
                                                            fontSize: 13,
                                                            color: "red",
                                                        }}
                                                    >
                                                        {formikBag.errors.offer_code}
                                                    </p>
                                                )}
                                            </ErrorBox>
                                        </CoupanBoxRow>
                                    </ServiceFormRow>
                                    <ServiceFormRow style={{ justifyContent: "center" }}>

                                        <InputBox>
                                            <AnyButtonText type="submit">
                                                Pay ₹99 to confirm booking
                                            </AnyButtonText>
                                        </InputBox>
                                    </ServiceFormRow>
                                </Form>
                            );
                        }}
                    </Formik>
                </SericeForm>
            </SericeFormBox>
            <Footer />
            {/* <AnyKind /> */}
        </div>
    )
}

export default withRouter(Service);