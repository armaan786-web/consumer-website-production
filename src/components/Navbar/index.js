import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, LoginTitle, LoginCenter, LoginAnchor, SvgLogo, Profilelabel } from './NavbarElements'
import logoLogin from '../../images/logo.svg'
import logoWlogin from '../../images/Onit Logo/main_logo.png'
import { animateScroll as scroll } from 'react-scroll'
import 'react-phone-input-2/lib/style.css'
import Overlay from '../Overlay'
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from "react-redux";
// import ProfileCreationModal from '../ProfileCreation/ProfileModal';
import placeholder from "../../images/lady.png";
import { get } from "lodash";
import * as actionTypes from "../../store/actions";




const Navbar = (props) => {

  const {
    userData,
    setUsers,
    defaultState,
    setDefaultState,
    locationData,
    toggle,
    history
  } = props;
  // console.log(props);

  const [profileImage, setProfileImage] = useState(
    get(userData, "profile_image", "")
  );

  const [scrollNav, setScrollNav] = useState(false)
  const [bgLogin, setBgLogin] = useState(false);
  const [logoColor, setLogoColor] = useState(logoWlogin);
  const [isLoading, setIsLoading] = useState(false);
  const [otpPhone, setOtpPhone] = useState("");


  // console.log('updateProfileValues', updateProfileValues);
  // console.log(get(userData, 'working_hours', []).length > 0);


  const changeNavOnScroll = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }



  useEffect(() => {
    window.addEventListener('scroll', changeNavOnScroll)
  }, [])



  const toggleHome = () => {
    scroll.scrollToTop();
  }






  const loginBox = (
    <>
          <NavBtn>
            <NavBtnLink
              to="/registration"
              primary="true"
            >
              Become a Partner
            </NavBtnLink>
            {/* <NavBtnLink
              to=""
            >Login / Sign up</NavBtnLink> */}
          </NavBtn>
        </>
  );


  const MenuBox = (
    <>
      <NavMenu>
        <NavItem>
          <NavLinks to="" style={{color: `${props.location.pathname === '/thanku' ? "#fff" : "#fff"}`}}>Home</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/about-us">About us</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/how-it-works">How it works</NavLinks>
        </NavItem>
      </NavMenu>
    </>
  );


  console.log(otpPhone);
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav} bgLogin={bgLogin}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <SvgLogo className="logoImage" src={logoColor} />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>

            {MenuBox}
            {/* {loginBox} */}
            {props.location.pathname === '/registration' ? "" : loginBox}
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>

      {isLoading && <Overlay />}
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
