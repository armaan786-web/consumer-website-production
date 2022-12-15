import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, LoginTitle, LoginCenter, LoginAnchor, SvgLogo, NavIcon, SidebarMobileIcon, NavTogLinks } from './NavbarElements'
import logoLogin from '../../images/logo.svg'
import lady from '../../images/lady.png'
// import logoWlogin from '../../images/haydiilogo.png'
import { Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import HaydiMobileLogo from '../../images/HaydiiMobilogo.png'
import 'react-phone-input-2/lib/style.css'
import Overlay from '../Overlay'
import SidebarOverlay from '../SidebarOverlay'
import { withRouter, NavLink } from 'react-router-dom';
import Menu from '../Menu';
import * as AiIcons from 'react-icons/ai';
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import * as GrIcons from 'react-icons/gr';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';
import placeholder from "../../images/lady.png";
import Switch from '../Switch/Switch';
import { get } from "lodash";
import axios from "../../axios";
import { toast } from "react-toastify";


// import lgIcon from "../../images/languageWhite.png"
import notificationIconDrop from "../../images/notificationIconDrop.png"
import * as FaIcons from 'react-icons/fa';
import Search from '../SearchBar/Search';
// import { loginObjOne, signUpObjOne, forgotObjOne, resetObjOne, restaurantDetailsObjOne, bankDetailsObjOne, verifyOtpObjOne, pendingApprovalObjOne } from '../LoginSection/Data'

const Navbar = (props) => {

  const {
    userData,
    toggle,
    history,
    sidebar,
    setSidebar,
    setUsers
  } = props;


  const [profileImage, setProfileImage] = useState(
    get(userData, "profile_image", "")
  );
  const [restName, setRestName] = useState(
    get(userData, "restaurant_name", "")
  );


  const [scrollNav, setScrollNav] = useState(false)
  const [bgLogin, setBgLogin] = useState(false);
  const [logoColor, setLogoColor] = useState(logoLogin);
  const [defaultState, setDefaultState] = useState({ isLogin: '', isSignup: '', isForget: '', isOtp: '', isReset: '', isProfileUpdate: "", isApproved: "", isRejected: "", isProfileComplete: "" })
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSidebarBackground, setIsLoadingSidebarBackground] = useState(false);
  const [isToggled, setIsToggled] = useState(get(userData, 'enable_orders', false))

  const showSidebar = () => setSidebar(!sidebar)
  const showBackOverlay = () => setIsLoadingSidebarBackground(!isLoadingSidebarBackground)

  const [opMenu, setOpMenu] = useState(false);
  // const [toggleButton, setToggleButton] = useState(false);


  const toggleMethod = () => {
    setOpMenu(prevState => ({
      menu: !prevState.menu
    }));
  }

  const handleConfirm = (async) => {
    localStorage.removeItem("userData");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("order_data");
    // setUsers("");
    history.push('/webPanel')
    history.go("0");
  };

  const handleRestaurantOnOff = async (values) => {
    console.log(isToggled)
    let formvalues = {
      enable_orders: !isToggled
    }

    console.log(formvalues);
    try {
      const { data } = await axios.post("/restaurant/enable_orders", formvalues);
      toast.success(`${data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      localStorage.setItem("accessToken", data.data.accessToken || data.data.access_token);
      localStorage.setItem("userData", JSON.stringify(data.data));
      localStorage.setItem("enable_orders", true);
      setUsers(data.data);
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      toast.error(`${error.response.data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      if (error.response.status === 401) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userData");
        //window.location.pathname = "/";
      }
    }

  }

  const leftBox = (
    <>
      <NavMenu>
        <NavItem>
          <NavLinks to="/webPanel">
            <SvgLogo className="logoImage"
              src={notificationIconDrop}
            />
          </NavLinks>
        </NavItem>
        <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle tag="a" className="nav-link">
          {/* <img src={profileImage || placeholder} style={{ width: "56px", height: "56px", marginBottom: "0rem", borderRadius: '50%' }} /> */}
          <p style={{fontSize: '1.1rem'}}>{restName} <span><BiIcons.BiChevronDown/></span></p>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem style={{fontSize: '0.8rem'}}><NavLink to="/webPanel/profile" style={{color: 'black'}}>Edit Details <AiIcons.AiOutlineEdit
                        /></NavLink></DropdownItem>
            <DropdownItem onClick={handleConfirm} style={{fontSize: '0.8rem'}}>Logout <RiIcons.RiShutDownLine/></DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <NavItem>
          <NavLinks to="">
            {/* <RiIcons.RiShutDownLine style={{ fontSize: "2em" }} onClick={handleConfirm} /> */}
          </NavLinks>
        </NavItem>
      </NavMenu>
    </>
  );

  const middleBox = (
    <>
      {/* <Search /> */}
      <NavMenu>

        <NavItem>
          <NavTogLinks
          >
            Currently Not Taking Orders
          </NavTogLinks>
        </NavItem>
        <NavItem style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Switch
            rounded={true}
            isToggled={isToggled}
            bgColorChecked="#07bc0c"
            roundColorChecked="#ffffff"
            border="1px solid #8D8D8D"
            bgColorUnChecked="red"
            roundColorUnChecked="#ffffff"
            onToggle={() => {
              handleRestaurantOnOff()
              setIsToggled(!isToggled)
            }}
          />
          {/*<NavLinks to="" style={{width: "70px"}}>
    <input checked={false} className="switchbox" type="checkbox" id={"item"} />
      <label htmlFor={"item"}></label>

</NavLinks>*/}
        </NavItem>
        <NavItem>
          <NavTogLinks to="">
            ON - Taking Orders
          </NavTogLinks>
        </NavItem>
      </NavMenu>
    </>
  );

  return (
    <>
      <IconContext.Provider value={{ color: "#000000" }}>
        <Nav scrollNav={scrollNav} bgLogin={bgLogin}>
          <NavbarContainer>
            <NavLogo to="/webPanel/dashboard">

              <SvgLogo className="logoImage" src={logoColor} />
              {/*<img className="logoImage" src={logo} alt="logo" />*/}
              <SidebarMobileIcon>
                <NavIcon to="#">
                  <FaIcons.FaBars
                    onClick={() => {
                      showBackOverlay();
                      showSidebar();
                    }}
                  />
                </NavIcon>
              </SidebarMobileIcon>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            {middleBox}
            {leftBox}
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
      {isLoading && <Overlay />}
      {!sidebar ? <SidebarOverlay /> : ""}
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
