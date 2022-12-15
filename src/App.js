import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages';
import Service from "./pages/ServiceForm/Service";
import About from "./pages/AboutUs";
import Regis from "./pages/CeterForm";
import Payment from "./pages/Payment";
import Thank from "./pages/ThankYou";
import Slots from "./pages/Slots";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import './App.css';
import './index.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import HowItWorksPage from "./pages/HowItWorksPage"
import PrivacyPolicy from "./pages/Policy/PrivacyPolicy"
import RefundPolicy from "./pages/Policy/RefundPolicy"
import TermOfUse from "./pages/Policy/TermOfUse"
// import NavbarNew from './components/NavbarNew/index'
// import SidebarDropGrub from './components/SidebarDropGrub/Sidebar';



import axios from "./axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as actionTypes from "./store/actions";
import HowItWorks from './components/How_it_Works/How_it_works';


function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }




  return (
    <div style={{maxWidth: "2000px", margin: "auto"}}>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/service-form" exact>
            <Service />
          </Route>
          <Route path="/about-us" exact>
            <About />
          </Route>
          <Route path="/registration" exact>
            <Regis />
          </Route>
          <Route path="/payment" exact>
            <Payment />
          </Route>
          <Route path="/how-it-works" exact>
            <HowItWorksPage />
          </Route>
          <Route path="/thanku" exact>
            <Thank />
          </Route>
          <Route path="/slots" exact>
            <Slots />
          </Route>
          <Route path="/privacy-policy" exact>
            <PrivacyPolicy />
          </Route>
          <Route path="/refund-policy" exact>
            <RefundPolicy />
          </Route>
          <Route path="/terms-of-use" exact>
            <TermOfUse />
          </Route>
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
      <ToastContainer theme="colored" />
    </div>
  );
}



const mapStateToProps = (state) => {
  return {
    locationData: state.locations,
    defaultState: state.defaultState,
    userData: state.userData,
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
    setLocations: (updatedValue) => {
      dispatch({
        type: actionTypes.GET_LOCATIONS,
        locationData: updatedValue,
      });
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

