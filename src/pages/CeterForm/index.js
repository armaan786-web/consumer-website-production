import React, { useEffect, useState } from 'react'
import HeroSection from '../../components/HeroSection'
import HowItWorks from '../../components/How_it_Works/How_it_works'
import AnyKind from '../../components/AnyKind'
import Partner from '../../components/Partner/Partner'
import OurHappyPartners from '../../components/OurHappyPartners/OurHappyPartners'
import OnitFile from '../../components/OnitCon'
import SearchBox from '../../components/SearchBox'
import Footer from '../../components/Footer/Footer'
import { SeriveContainer, HeroBg, ImgBg, ServiceContainer, ServiceTitle, ServiceDesc, SericeFormBox, SericeForm, ServiceFromTitle, ServiceFormRow, FormLabel, ServiceText, ServiceSearch, SearchIcon, AnyButton, AnyButtonText, InputBox, CoupanBox, InputFullBox } from "./CenterElements"
import Input from '../../components/Input'
import { Formik, Field, Form } from "formik";
import banLogo from "../../images/MaskGroup20.png"
// import AnyKind from '../../components/AnyKind';
// import OnitFile from '../../components/OnitCon';
// import Footer from '../../components/Footer/Footer';
import SelectBox from "../../components/Select";
import { withRouter, useHistory } from 'react-router-dom';
import { CenterValidator } from "../../utils/validators"
import { get, isEmpty } from "lodash";
import axios from "../../axios";
import { toast } from "react-toastify";
import { IndianStates } from '../States'




const Service = (props) => {

    const history = useHistory()

    const [centerValues, setCenterValues] = useState({
        center_name: "",
        country_code: "",
        mobile_number: "",
        primary_services_name: "",
        primary_services: "",
        secondary_services_id: "",
        secondary_services_name: "",
        priority: "",
        address_line: "",
        city: "",
        state: "",
        pincode: "",
        additional_pincode: "",
        country: "India",
        no_of_technicians: "",
        user_name: "Center",
        email: "",
        about: "This",
        shirt_size: ""
    })


    const [indState, setIndState] = useState(IndianStates);
    const [categoryList, setCategoryList] = useState([]);

    const NumberOfClients = [
        { label: 'Freelancer/Indendent technicians', value: 'Freelancer/Indendent technicians' },
        { label: 'Center with multiple technicians', value: 'Center with multiple technicians' },
        { label: 'Dealer/Sales shop', value: 'Dealer/Sales shop' },
        { label: 'Residential complex/Society', value: 'Residential complex/Society' }
    ]

    const tshirtSize = [
        { label: 'S', value: 'S' },
        { label: 'M', value: 'M' },
        { label: 'L', value: 'L' },
        { label: 'XL', value: 'XL' },
        { label: 'XXL', value: 'XXL' },
        // { label: 'XXXL', value: 'XXXL' },
    ]

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
            toast.error("Something went wrong.", {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };

    const CenterSubmit = async (values) => {

        let requestData = {
            center_name: values.center_name,
            personal_details: {
                phone: {
                    country_code: "+91",
                    mobile_number: values.mobile_number
                },
                // Extra
                email: values.email,
                name: "test",
                user_name: values.user_name,
                about: values.about
            },
            primary_services: values.primary_services.value,
            secondary_services: [{
                secondary_services_id: values.secondary_services_id.value,
                priority: 1
            }],
            address_details: {
                longitude: 0,
                latitude: 0,
                address_line: values.address_line,
                city: values.city,
                state: values.state,
                pincode: values.pincode,
                additional_pincode: values.additional_pincode,
                country: values.country,
                short_code_for_place: "testValue",
                google_geo_location: "testValue",
            },
            // qr_code: values.qr_code,
            no_of_technicians: values.no_of_technicians
        }
        console.log(requestData);
        try {
            const { data } = await axios.post("/center/register-center-via-web", requestData)
            console.log(data);
            toast.success(data.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
        } catch (error) {
            console.log(error);
            toast.error(`${error.response.data.message}`, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };

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
                    <ServiceTitle>Registration Form</ServiceTitle>
                    <ServiceDesc>Partner with us</ServiceDesc>
                </ServiceContainer>
            </SeriveContainer>
            <SericeFormBox>
                <SericeForm>
                    <ServiceFromTitle>General Details:</ServiceFromTitle>
                    <Formik
                        enableReinitialize
                        initialValues={centerValues}
                        validate={CenterValidator}
                        onSubmit={CenterSubmit}
                        validateOnChange
                    >
                        {(formikBag) => {
                            return (
                                <Form>
                                    <ServiceFormRow>
                                        <InputBox>
                                            <FormLabel>Shop Center/Name <span style={{ color: "red", marginLeft: "2px" }}>*</span></FormLabel>
                                            <Field name="center_name">
                                                {({ field }) => (
                                                    <Input
                                                        {...field}
                                                        type="text"
                                                        value={formikBag.values.center_name}
                                                        noBorderBottom="none"
                                                        onChange={(e) => {
                                                            formikBag.setFieldValue("center_name", e.target.value);
                                                        }}
                                                        style={{ borderBottom: "none", border: "1px solid #CED4DA", padding: "0 0.8rem", width: "100%" }}

                                                        error={
                                                            formikBag.touched.center_name && formikBag.errors.center_name
                                                                ? formikBag.errors.center_name
                                                                : null
                                                        }
                                                        className="form-control"
                                                        placeholder="Enter Center Name"
                                                    />
                                                )}
                                            </Field>
                                        </InputBox>
                                        <InputBox>
                                            <FormLabel>What's App Number <span style={{ color: "red", marginLeft: "2px" }}>*</span></FormLabel>
                                            <Field name="mobile_number">
                                                {({ field }) => (
                                                    <Input
                                                        {...field}
                                                        type="text"
                                                        value={formikBag.values.mobile_number}
                                                        noBorderBottom="none"
                                                        onChange={(e) => {
                                                            formikBag.setFieldValue("mobile_number", e.target.value);
                                                        }}
                                                        style={{ borderBottom: "none", border: "1px solid #CED4DA", padding: "0 0.8rem", width: "100%" }}

                                                        error={
                                                            formikBag.touched.mobile_number && formikBag.errors.mobile_number
                                                                ? formikBag.errors.mobile_number
                                                                : null
                                                        }
                                                        className="form-control"
                                                        placeholder="Enter What's App Number"
                                                    />
                                                )}
                                            </Field>
                                        </InputBox>
                                    </ServiceFormRow>
                                    <ServiceFormRow>
                                        <InputBox>
                                            <FormLabel>Main Service You Offer / Need <span style={{ color: "red", marginLeft: "2px" }}>*</span></FormLabel>
                                            <Field name="primary_services">
                                                {({ field }) => (
                                                    <SelectBox
                                                        options={categoryList}
                                                        isSearchable={false}
                                                        isClearable={false}
                                                        defaultValue={formikBag.values.primary_services}
                                                        // className="form-control"
                                                        // className={classes.colorDropdown}
                                                        placeholder="Select Service"
                                                        onChange={(option) => {
                                                            formikBag.setFieldValue("primary_services", option);
                                                            formikBag.setFieldValue("secondary_services_id", option);
                                                            console.log(option.value)
                                                        }}
                                                        error={
                                                            formikBag.touched.primary_services &&
                                                                formikBag.errors.primary_services
                                                                ? formikBag.errors.primary_services
                                                                : null
                                                        }
                                                    />
                                                )}
                                            </Field>
                                        </InputBox>
                                        <InputBox>
                                            <FormLabel>Other Services You May Offer</FormLabel>
                                            <Field name="secondary_services_id">
                                                {({ field }) => (
                                                    <SelectBox
                                                        options={categoryList}
                                                        isSearchable={false}
                                                        isClearable={false}
                                                        defaultValue={formikBag.values.secondary_services_id}
                                                        // className="form-control"
                                                        // className={classes.colorDropdown}
                                                        placeholder="Select Other Service"
                                                        onChange={(option) => {
                                                            formikBag.setFieldValue("secondary_services_id", option);
                                                            console.log(option.value)
                                                        }}
                                                        error={
                                                            formikBag.touched.secondary_services_id &&
                                                                formikBag.errors.secondary_services_id
                                                                ? formikBag.errors.secondary_services_id
                                                                : null
                                                        }
                                                    />
                                                )}
                                            </Field>
                                        </InputBox>
                                    </ServiceFormRow>
                                    <ServiceFormRow>

                                        <InputBox>
                                            <FormLabel>Service Area Pin Code (Main) <span style={{ color: "red", marginLeft: "2px" }}>*</span></FormLabel>
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
                                                        placeholder="Enter pincode"
                                                    />
                                                )}
                                            </Field>
                                        </InputBox>
                                        <InputBox>
                                            <FormLabel>Additional Service Area Pin Code</FormLabel>
                                            <Field name="additional_pincode">
                                                {({ field }) => (
                                                    <Input
                                                        {...field}
                                                        type="text"
                                                        value={formikBag.values.additional_pincode}
                                                        noBorderBottom="none"
                                                        onChange={(e) => {
                                                            formikBag.setFieldValue("additional_pincode", e.target.value);
                                                        }}
                                                        style={{ borderBottom: "none", border: "1px solid #CED4DA", padding: "0 0.8rem" }}
                                                        error={
                                                            formikBag.touched.additional_pincode && formikBag.errors.additional_pincode
                                                                ? formikBag.errors.additional_pincode
                                                                : null
                                                        }
                                                        className="form-control"
                                                        placeholder="Enter Additional Pincode"
                                                    />
                                                )}
                                            </Field>
                                        </InputBox>
                                    </ServiceFormRow>
                                    <ServiceFormRow>

                                        <InputBox>
                                            <FormLabel>Select your role <span style={{ color: "red", marginLeft: "2px" }}>*</span></FormLabel>
                                            <Field name="no_of_technicians">
                                                {({ field }) => (
                                                    <SelectBox
                                                        options={NumberOfClients}
                                                        isSearchable={false}
                                                        isClearable={false}
                                                        // defaultValue={formikBag.values.no_of_technicians}
                                                        defaultValue={formikBag.values.no_of_technicians}
                                                        // className="form-control"
                                                        placeholder="Select your role"
                                                        onChange={(option) => {
                                                            formikBag.setFieldValue("no_of_technicians", option.value);
                                                            console.log(option)
                                                        }}
                                                        error={
                                                            formikBag.touched.no_of_technicians &&
                                                                formikBag.errors.no_of_technicians
                                                                ? formikBag.errors.no_of_technicians
                                                                : null
                                                        }
                                                    />
                                                )}
                                            </Field>
                                        </InputBox>
                                        <InputBox>
                                            <FormLabel>Enter Email ID</FormLabel>
                                            <Field name="email">
                                                {({ field }) => (
                                                    <Input
                                                        {...field}
                                                        type="text"
                                                        value={formikBag.values.email}
                                                        noBorderBottom="none"
                                                        onChange={(e) => {
                                                            formikBag.setFieldValue("email", e.target.value);
                                                        }}
                                                        style={{ borderBottom: "none", border: "1px solid #CED4DA", padding: "0 0.8rem" }}
                                                        error={
                                                            formikBag.touched.email && formikBag.errors.email
                                                                ? formikBag.errors.email
                                                                : null
                                                        }
                                                        className="form-control"
                                                        placeholder="Enter Email"
                                                    />
                                                )}
                                            </Field>
                                        </InputBox>
                                    </ServiceFormRow>

                                    <ServiceFromTitle style={{ marginTop: "3rem" }}>Address for courier delivery:</ServiceFromTitle>
                                    <ServiceFormRow>
                                        <InputBox>
                                            <FormLabel>Flat/Shop no. <span style={{ color: "red", marginLeft: "2px" }}>*</span></FormLabel>
                                            <Field name="address_line">
                                                {({ field }) => (
                                                    <Input
                                                        {...field}
                                                        type="text"
                                                        value={formikBag.values.address_line}
                                                        noBorderBottom="none"
                                                        onChange={(e) => {
                                                            formikBag.setFieldValue("address_line", e.target.value);
                                                        }}
                                                        style={{ borderBottom: "none", border: "1px solid #CED4DA", padding: "0 0.8rem", width: "100%" }}

                                                        error={
                                                            formikBag.touched.address_line && formikBag.errors.address_line
                                                                ? formikBag.errors.address_line
                                                                : null
                                                        }
                                                        className="form-control"
                                                        placeholder="Enter Address"
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
                                        {/* <InputBox>
                                            <FormLabel>T-Shirt Size</FormLabel>
                                            <Field name="shirt_size">
                                                {({ field }) => (
                                                    <SelectBox
                                                        options={tshirtSize}
                                                        isSearchable={false}
                                                        isClearable={false}
                                                        // defaultValue={formikBag.values.shirt_size}
                                                        defaultValue={formikBag.values.shirt_size}
                                                        // className="form-control"
                                                        placeholder="Technician Associate"
                                                        onChange={(option) => {
                                                            formikBag.setFieldValue("shirt_size", option.value);
                                                            console.log(option)
                                                        }}
                                                        error={
                                                            formikBag.touched.shirt_size &&
                                                                formikBag.errors.shirt_size
                                                                ? formikBag.errors.shirt_size
                                                                : null
                                                        }
                                                    />
                                                )}
                                            </Field>
                                        </InputBox> */}

                                    </ServiceFormRow>
                                    <ServiceFormRow style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                        <InputBox>
                                            <AnyButtonText type="submit"
                                            // onClick={() => {
                                            //     history.push({
                                            //         pathname: '/onitpanel/payment',

                                            //     });
                                            // }}
                                            >
                                                Proceed to Pay Joining Kit ₹499
                                            </AnyButtonText>
                                        </InputBox>
                                    </ServiceFormRow>
                                </Form>
                            );
                        }}
                    </Formik>
                </SericeForm>
            </SericeFormBox>
            {/* <AnyKind />
            <OnitFile /> */}
            <Footer />

        </div>
    )
}

export default withRouter(Service);