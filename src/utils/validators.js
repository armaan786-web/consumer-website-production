import { get } from "lodash";
import { dictionaryList } from "./language/index";
const defaultLanguage = "en"
const messages = dictionaryList[defaultLanguage].errors;

// global regex
const noHtmlRegex = /<\/?[^>]+(>|$)/g;
const onlyAlphbetRegex = /^[a-zA-Z ]*$/;
const numberOnly = /^\d+$/;
var phoneRegex = /^[0-9]+$/;
var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{7,}$/;
let newPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const decRegex = /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/;

const checkEmail = (value) => {
  if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    )
  ) {
    return true;
  } else if (
    value.includes('"') ||
    value.includes("'") ||
    value.includes(",") ||
    value.includes(" ")
  ) {
    return true;
  } else {
    return false;
  }
};

export const loginValidator = (values) => {
  let errors = {};
  console.log(values);

  if (!values.mobile_number) {
    errors.phone = messages.invalid;
  } else if (!phoneRegex.test(values.mobile_number)) {
    errors.phone = messages.phone;
  } else if (values.mobile_number.length < 4) {
    errors.phone = messages.phone;
  }

  if (!values.password) {
    errors.password = messages.invalid;
  }
  console.log(errors);

  return errors;
};



export const forgetValidator = (values) => {
  let errors = {};
  if (!values.mobile_number) {
    errors.phone = messages.invalid;
  } else if (!phoneRegex.test(values.mobile_number)) {
    errors.phone = messages.phone;
  } else if (values.mobile_number.length < 4) {
    errors.phone = messages.phone;
  }


  return errors;
};


export const completeProfileValidator = (values) => {
  let errors = {};

  console.log(values);

  if(!values.service){
    errors.service = "Select service";
  }
  if(!values.name){
    errors.name = "Select name";
  }
  if(!values.whatspp_number){
    errors.whatspp_number = "Enter whatspp number";
  }
  else if (!phoneRegex.test(values.whatspp_number)) {
    errors.whatspp_number = messages.phone;
  } else if (values.whatspp_number.length < 4 || values.whatspp_number.length > 11) {
    errors.whatspp_number = messages.phone;
  }
  if(!values.house_number){
    errors.house_number = "Enter house number";
  }
  if(!values.requirements){
    errors.requirements = "Enter requirements";
  }
  if(!values.locality){
    errors.locality = "Enter locality";
  }
  if(!values.city){
    errors.city = "Enter city";
  }

  if(!values.state){
    errors.state = "Enter state";
  }
  if(!values.country){
    errors.country = "Enter country";
  }
  if(!values.pincode){
    errors.pincode = "Enter pincode";
  }
  if(!values.time_preference){
    errors.time_preference = "Select time preference";
  }
  if(!values.offer_code){
    errors.offer_code = "Enter offer code";
  }

  return errors;
}

export const CenterValidator = (values) => {
  console.log(values);
  let errors = {};
  if (!values.center_name) {
    errors.center_name = "Enter center name";
  }
  if (!values.user_name) {
    errors.user_name = "Enter user name";
  }
  // if (!values.email) {
  //   errors.email = "Enter email";
  // }
  if (!values.about) {
    errors.about = "Enter about";
  }
  if (!values.mobile_number) {
    errors.mobile_number = "Enter mobile name";
  }
  if (!values.primary_services) {
    errors.primary_services = "Select service";
  }
  // if (!values.secondary_services_id) {
  //   errors.secondary_services_id = "Select other service";
  // }
  if (!values.address_line) {
    errors.address_line = "Enter address";
  }
  if (!values.city) {
    errors.city = "Enter city";
  }
  if (!values.state) {
    errors.state = "Enter state";
  }
  if (!values.country) {
    errors.country = "Enter country";
  }
  if (!values.pincode) {
    errors.pincode = "Enter pincode";
  }
  // if (!values.additional_pincode) {
  //   errors.additional_pincode = "Enter additional pincode";
  // }
  if (!values.no_of_technicians) {
    errors.no_of_technicians = "Enter technician";
  }
  if (!values.shirt_size) {
    errors.shirt_size = "Enter T-Shirt Size";
  }


  console.log(errors);
  return errors;
};