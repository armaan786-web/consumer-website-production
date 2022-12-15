import React, { useState } from 'react'
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import { withRouter } from 'react-router-dom';
import { HeroService, ServiceView, ServiceText, ServiceSearch, SearchIcon, ArrowIcon } from "./SearchBoxElements"

const HeroSection = ({ defaultState, setDefaultState }) => {

    return (
        <HeroService>
            <ServiceView>
                <ServiceText>
                    Services <ArrowIcon className="ph-caret-down-bold"></ArrowIcon>
                    <ServiceSearch>
                        Search Services...
                    </ServiceSearch>
                </ServiceText>

                <SearchIcon className="ph-magnifying-glass"></SearchIcon>
            </ServiceView>
        </HeroService>
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
