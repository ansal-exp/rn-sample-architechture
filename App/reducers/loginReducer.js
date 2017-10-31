import * as actionTypes from "../actions/ActionTypes";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  accessToken: "",
  username: "",
  password: ""
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.username = action.username;
      newState.password = action.password;
      return newState;
    }
    case actionTypes.LOGIN_LOADING: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }
    case actionTypes.LOGIN_LOADING_ENDED: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }
    case actionTypes.LOGIN_RESPONSE: {
      const newState = { ...state };
      newState.accessToken = action.response.access_token;
      newState.isLoading = false;
      return newState;
    }
    case actionTypes.LOGIN_FAILED: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }
    default:
      return state;
  }
};
