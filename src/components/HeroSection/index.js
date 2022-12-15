import React, { useState, useEffect } from 'react'
import HomeBg from '../../images/homeBg.png'
import kitchenIcon from '../../images/Group62665.png'
import pulumberIcon from '../../images/NoPath-Copy(19).png'
import airConIcon from '../../images/Group62664.png'
import carPaIcon from '../../images/NoPath-Copy(21).png'
import elecIcon from '../../images/NoPath-Copy(2).png'
import appliIcon from '../../images/NoPath-Copy(17).png'
import digiIcon from '../../images/NoPath-Copy(20).png'
import playIcon from '../../images/NoPath-Copy(25).png'
import dustIcon from '../../images/Group_62708.png'
import { HeroContainer, HeroBg, ImgBg, HeroContent, HeroIconContainer, HeroIconsRows, HeroIconRows, HeroIconBox, IconBox, IconImg, IconText, HerIconContainer, HeroPlayBox, PlayBox, PlayImg, PlayText, HeroService, ServiceView, HeroIconDoubleContainer, SearchButtonBox, Searchfeild, SearchIcon, HerIconDoubleContainer, SearchButtonDoubleBox, FlexCenter, ArrowPosition, SelectDrop } from './HeroElements'
import { Button } from '../ButtonElements';
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import { withRouter } from 'react-router-dom';
import axios from "../../axios";
import { useHistory } from 'react-router-dom';
import SelectBox from "../../components/SelectSearch";
const HeroSection = ({ defaultState, setDefaultState }) => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover);
    }
    let history = useHistory();
    const [categoryList, setCategoryList] = useState([]);
    const [serviceId, setServiceId] = useState("")

    const data = [
        {
            label: "KITCHEN APPLIANCES - GAS STOVE, CHIMNEY, WATER PURIFIER, MWO, GEYSER, HOB /HOOD ETC",
            value: "62641f818cf647c0cbaaa773"
        },
        {
            label: "COOLING / HEATING APPLIANCES - AIR CONDITIONER, REFRIGERATOR, GEYSER ETC",
            value: "62641f718cf647c0cbaaa767"
        },
        {
            label: "PLUMBING  - SHOWER, TAP, MIXER, CISTERN AND SEAT, OVERHEAD TANK FITTING ETC",
            value: "62641d2748f55f83cd6bb799"
        },
        {
            label: "GENERAL ELECTRICIAN - FAN, TUBE, INVERTOR, HOUSE WIRING",
            value: "62641cdb48f55f83cd6bb76f"
        },
        {
            label: "DIGITAL DEVICES - CCTV, LAPTOP, PRINTER, MOBILES ETC",
            value: "62641fa48cf647c0cbaaa78b"
        },
        {
            label: "PAINT AND WHITEWASH - WHITEWASH / TEXTURE PAINT",
            value: "62641d3748f55f83cd6bb7a5"
        },
        {
            label: "FURNITURE / CARPENTER - ASSEMBLY/FITTINGS, DOOR/WINDOW, FURNITURE REPAIR ETC",
            value: "62641fac8cf647c0cbaaa791"
        },
        {
            label: "CLEANING AND DISINFECTION - KITCHEN, BATHROOM, CAR, SOFA, HOME CLEANING",
            value: "62641fcb8cf647c0cbaaa7a9"
        },
        {
            label: "APPLIANCE (SMALL) - TOASTER, MIXIE, FAN, HEATER, PRESS, INVERTER ETC",
            value: "62641f938cf647c0cbaaa77f"
        }

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
            // console.log(error);
            // toast.error("Something went wrong.", {
            //     position: toast.POSITION.TOP_RIGHT,
            // });
        }
    };

    useEffect(() => {
        fetchCategoryList();
    }, [])
    return (
        <HeroContainer>
            <HeroBg>
                <ImgBg />
            </HeroBg>
            <HeroContent>
                <HerIconDoubleContainer>
                    <HeroPlayBox>
                        <SearchButtonDoubleBox>
                            {/* <Searchfeild type="text" placeholder="Search Services" /> */}
                            <SelectDrop>
                                <SelectBox
                                    options={categoryList}
                                    className="select-search"
                                    placeholder="Search Services or Click on icons"
                                    onChange={(e) => {
                                        console.log(e);
                                        setServiceId(e)
                                    }}
                                />
                            </SelectDrop>
                            <ArrowPosition>
                                <SearchIcon className="ph-arrow-right-bold" onClick={() => {
                                    history.push({
                                        pathname: serviceId ? "/service-form" : "",
                                        state: serviceId
                                    })
                                }}></SearchIcon>
                            </ArrowPosition>
                        </SearchButtonDoubleBox>
                    </HeroPlayBox>
                </HerIconDoubleContainer>
                <HeroIconContainer>

                    <HeroIconRows>
                        <IconBox onClick={() => history.push({
                            pathname: "/service-form",
                            state: data[1]
                        })}>
                            <IconImg src={airConIcon} />
                            <IconText>AC services</IconText>
                        </IconBox>
                        <IconBox style={{ marginTop: "-6rem" }} onClick={() => history.push({
                            pathname: "/service-form",
                            state: data[6]
                        })}>
                            <IconImg src={carPaIcon} />
                            <IconText>Carpenter</IconText>
                        </IconBox>
                        <IconBox onClick={() => history.push({
                            pathname: "/service-form",
                            state: data[3]
                        })}>
                            <IconImg src={elecIcon} />
                            <IconText>Electrician</IconText>
                        </IconBox>
                    </HeroIconRows>
                    <HeroIconsRows >
                        <IconBox onClick={() => history.push({
                            pathname: "/service-form",
                            state: data[0]
                        })}>
                            <IconImg src={kitchenIcon} />
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <IconText>Kitchen appliances</IconText>
                            </div>
                        </IconBox>
                        <IconBox onClick={() => history.push({
                            pathname: "/service-form",
                            state: data[2]
                        })}>
                            <IconImg src={pulumberIcon} />
                            <IconText>Plumber</IconText>
                        </IconBox>
                    </HeroIconsRows>
                    <HeroIconRows style={{ marginTop: "-6.3rem" }}>
                        <IconBox onClick={() => history.push({
                            pathname: "/service-form",
                            state: data[8]
                        })}>
                            <IconImg src={appliIcon} />
                            <IconText>Appliances</IconText>
                        </IconBox>
                        <IconBox style={{ marginTop: "8rem" }} onClick={() => history.push({
                            pathname: "/service-form",
                            state: data[4]
                        })}>
                            <IconImg src={digiIcon} />
                            <IconText>Digital Devices</IconText>
                        </IconBox>
                        <IconBox onClick={() => history.push({
                            pathname: "/service-form",
                            state: data[7]
                        })}>
                            <IconImg src={dustIcon} />
                            <IconText>Cleaning</IconText>
                        </IconBox>
                    </HeroIconRows>
                </HeroIconContainer>

                <HeroIconDoubleContainer>
                    <HeroIconRows>
                        <IconBox onClick={() => history.push({
                            pathname: "/service-form",
                            state: data[1]
                        })}>
                            <IconImg src={airConIcon} />
                            <IconText>AC services</IconText>
                        </IconBox>
                        <IconBox onClick={() => history.push({
                            pathname: "/service-form",
                            state: data[6]
                        })}>
                            <IconImg src={carPaIcon} />
                            <div>
                                <IconText>Carpenter</IconText>
                            </div>
                        </IconBox>

                    </HeroIconRows>
                    <HeroIconRows>
                        <IconBox onClick={() => history.push({
                            pathname: "/service-form",
                            state: data[0]
                        })}>
                            <IconImg src={kitchenIcon} />
                            <div style={{ display: "flex", width: "131%", justifyContent: "center" }}>
                                <IconText>Kitchen appliances</IconText>
                            </div>
                        </IconBox>
                        <IconBox onClick={() => history.push({
                            pathname: "/service-form",
                            state: data[2]
                        })}>
                            <IconImg src={pulumberIcon} />
                            <IconText>Plumber</IconText>
                        </IconBox>
                    </HeroIconRows>
                    <HeroIconRows>
                        <IconBox onClick={() => history.push({
                            pathname: "/service-form",
                            state: data[8]
                        })}>
                            <IconImg src={appliIcon} />
                            <IconText>Appliances</IconText>
                        </IconBox>
                        <IconBox onClick={() => history.push({
                            pathname: "/service-form",
                            state: data[4]
                        })}>
                            <IconImg src={digiIcon} />
                            <div style={{ display: "flex", width: "131%", justifyContent: "center" }}>
                                <IconText>Digital Devices</IconText>
                            </div>
                        </IconBox>
                    </HeroIconRows>
                    <HeroIconRows>
                        <IconBox onClick={() => history.push({
                            pathname: "/service-form",
                            state: data[7]
                        })}>
                            <IconImg src={dustIcon} />
                            <IconText>Cleaning</IconText>
                        </IconBox>
                        <IconBox onClick={() => history.push({
                            pathname: "/service-form",
                            state: data[3]
                        })}>
                            <IconImg src={elecIcon} />
                            <IconText>Electrician</IconText>
                        </IconBox>
                    </HeroIconRows>
                </HeroIconDoubleContainer>
                <HerIconContainer>
                    <HeroPlayBox>
                        <SearchButtonBox>
                            {/* <Searchfeild type="text" placeholder="Search Services" /> */}
                            <SelectDrop>
                                <SelectBox
                                    options={categoryList}
                                    className="select-search"
                                    placeholder="Search Services or Click on icons"
                                    onChange={(e) => {
                                        console.log(e);
                                        setServiceId(e)
                                    }}
                                />
                            </SelectDrop>
                            <ArrowPosition>
                                <SearchIcon className="ph-arrow-right-bold" onClick={() => {
                                    history.push({
                                        pathname: serviceId ? "/service-form" : "",
                                        state: serviceId
                                    })
                                }}></SearchIcon>
                            </ArrowPosition>
                        </SearchButtonBox>
                        <FlexCenter>
                            <PlayImg src={playIcon} />
                        </FlexCenter>
                    </HeroPlayBox>
                </HerIconContainer>
            </HeroContent>

        </HeroContainer>
    )
}




const mapStateToProps = (state) => {
    return {
        userData: state.userData,
        locationData: state.locations,
        defaultState: state.defaultState,
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeroSection));
