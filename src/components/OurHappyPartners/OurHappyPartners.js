import React from "react";
import Carousel from "styled-components-carousel";
import PartnerCardData from "./PartnerCardData";
import "./OurHappyPartners.css";
// import {BsFillCaretRightFill} from "react-icons/bs";

const OurHappyPartners = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#F6F6F6",
          minHeight: "45vh",
          padding: "50px 0 50px 0",
        }}
      >
        <div>

          <img
            src={require("../../images/quotes.svg").default}
            alt=""
            style={{ position: "absolute", left: "20%", marginTop: "50px" }}
          />
        </div>
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: '500',
            color: '#000000',
            marginBottom: '2.5rem',
            textAlign: 'center',
          }}
        >
          Our happy partners
        </h1>
        <div style={{ width: "60vw", margin: "0 auto" }}>
          <Carousel
            center
            infinite
            showArrows
            showIndicator
            breakpoints={[
              {
                size: 420,
                settings: {
                  slidesToShow: 1,
                  showArrows: false,
                  showIndicator: true,
                  swipeable: true,
                },
              },
              {
                size: 820,
                settings: {
                  slidesToShow: 1,
                  showArrows: true,
                  showIndicator: true,
                  swipeable: true,
                },
              },
              {
                size: 1300,
                settings: {
                  slidesToShow: 1,
                  showArrows: true,
                  showIndicator: true,
                  //  center: true,

                  swipeable: true,
                },
              },
            ]}
          >
            {PartnerCardData.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  marginTop: "40px",
                  marginLeft: "5px",
                }}
                className="media"
              >
                <div style={{ backgroundColor: "", borderRadius: "50%" }}>
                  <img
                    src={item.image}
                    alt="Loading"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "0px 5px 0 15px",
                  }}
                >
                  <p
                    style={{
                      backgroundColor: "",
                      font: "normal normal normal 16px/25px Poppins",
                      // fontFamily: 'Poppins', sans-serif;
                      color: "#2B3BF6",
                      fontWeight: "600"
                    }}
                  >
                    {item.name}
                  </p>
                  <p
                    style={{
                      font: "normal normal normal 16px/25px Poppins",
                      color: "#363636",
                    }}
                  >
                    {item.location}
                  </p>
                  <p
                    style={{
                      backgroundColor: "",
                      font: "normal normal normal 16px/26px Poppins",
                      color: "#696969",
                      marginTop: "40px",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default OurHappyPartners;
