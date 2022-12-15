import * as actionTypes from "./actions";


const initialState = {
  userData: JSON.parse(localStorage.getItem("userData")),
  defaultState: {
    isLogin: "",
    isSignup: "",
    isForget: "",
    isOtp: "",
    isReset: "",
    isProfileUpdate: "",
    isApproved: "",
    isRejected: "",
    isProfileComplete: "",
    isCheckLocation:""
  },
  locations: [],
  sidebar: true
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_USER:
      return {
        ...state,
        userData: action.updatedUser,
      };
    case actionTypes.UPDATE_DEFAULT:
      return {
        ...state,
        defaultState: action.updateDefault,
      };
    case actionTypes.GET_LOCATIONS:
      return {
        ...state,
        locations: action.locationData,
      };
    case actionTypes.UPDATE_SIDEBAR:
      return {
        ...state,
        sidebar: action.updateSidebar,
      };

    default:
      return state;
  }
};

export default reducer;
