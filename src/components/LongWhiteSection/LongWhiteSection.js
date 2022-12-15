import React, { useState } from "react";
import Data from "./Data";
import "./LongWhiteSection.css";
import { BsFillCaretRightFill } from "react-icons/bs";
import accordionData from "./accordionData";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import inputData from "./inputData";
import SubmitButtonWrapper from "./SubmitButtonWrapper";
import TextField from "./TextField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";

const LongWhiteSection = () => {
  const [expander, setExpander] = useState("accordion_header");

  //Initial form values
  let formValues = {
    RestaurantName: "",
    RestaurantAddress: "",
    RestaurantPhone: "",
    RestaurantLiking: ""
  }

  //Validation Schema
  const validate = Yup.object({
    RestaurantName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Restaurant Name is Required"),
    RestaurantAddress: Yup.string()
      .max(300, "Must be 300 characters or less")
      .required("Restaurant Address is Required"),
    RestaurantPhone: Yup.number().required("Phone is Required").positive().integer(),
    RestaurantLiking: Yup.string()
      .max(300, "Must be 15 characters or less")
      .required("Restaurant Name is Required")

  });
  return (
    <>
      <div
        className="LongWhiteContainer"
      >
        <div className="SectionOne" >
          <h1 className="SectionOneHeading" >
            What do you get on sign-up
          </h1>
          <p className="SectionOneParagraph"

          >

            DropGrub Partner Platform helps you take your business to new
            heights instantly with no hassle and 100% transparency!
          </p>
          <div className="SectionOneContent" >
            <div className="SectionOneContentLeft">
              {Data.map((item, index) => (
                <div
                  className="SectionOneContentLeftContainer hover_blue"
                  key={index}
                >
                  <div className="Number ">{item.number}</div>
                  <div
                    className="Text"

                  >
                    <h1

                      className="SectionOneContentLeftHeading hover_blue"
                    >
                      {item.heading}
                    </h1>
                    <p className="SectionOneContentLeftParagraph"

                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="SectionOneContentRight"

            >
              <img className="SectionOneContentRightImage_mobile" src={require("../../images/mobile.svg").default} alt="" />
              <img
                className="SectionOneContentRightImage_mobileinside"
                src={require("../../images/mobileinside.svg").default}
                alt="Loading"

              />
              <img
                className="SectionOneContentRightImage_mobilebg"
                src={require("../../images/mobilebg.svg").default}
                alt="Loading"

              />
            </div>
          </div>
        </div>
        <div className="SectionTwo" >
          <div
            className="SectionTwoContent"

          >
            <h1 className="SectionTwoHeading"

            >
              Start your journey with DropGrub
            </h1>
            <p
              className="SectionTwoParagraph"

            >
              Create your restaurant page and register for online ordering
            </p>
            <NavLink to="/"

              className="btns button_hover"
            >
              Start Now <BsFillCaretRightFill style={{ marginLeft: "5px" }} />
            </NavLink>
          </div>
        </div>
        <div
          className="SectionThree"

        >
          <h1 className="SectionThreeHeading" >
            Frequently asked questions
          </h1>
          {accordionData.map((item, index) => (
            <div className="AccordionContainer" key={index} >
              <Accordion
                className="accordion_margin"
                onChange={(e, expanded) => {
                  if (expanded) {
                    setExpander("accordion_open");
                  } else {
                    setExpander("accordion_header");
                  }
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className={`${expander}`}
                >
                  <Typography>{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails className="accordion_content">
                  <Typography>{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
        </div>
        <div className="SectionFour" >
          <div className="SectionFourContainer" >
            <h1 className="SectionFourHeading" >Cannot find your favourite restaurant on DropGrub?</h1>
            <p className="SectionFourParagraph" >Submit the details and our team will get the restaurant onboard</p>
            <Formik
              initialValues={
                formValues

              }
              validationSchema={validate}
              onSubmit={(values) => {
                console.log(values);

              }}
            >
              <Form className="SectionFourForm" >
                {inputData.map((item, index) => (
                  <TextField key={index} name={item.name} className="inputData" id="outlined-basic" label={item.labelforinput} variant="outlined" required />
                ))
                }
                <div className="btn-align" style={{ marginTop: 20 }}>

                  <SubmitButtonWrapper name="submit" sx={{ backgroundColor: "#2B3BF6", color: "#fff", font: "normal normal normal 16px/25px Poppins", width: "25rem" }}>Submit</SubmitButtonWrapper>
                </div>
                <div className="SectionFour_text" >Restaurant owners can <NavLink to="/" style={{ textDecoration: "none", color: "#2B3BF6" }}>add restaurant from here</NavLink></div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default LongWhiteSection;
