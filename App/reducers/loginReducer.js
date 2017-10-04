import createReducer from '../lib/createReducer'
import * as actionTypes from '../actions/ActionTypes'

const initialState={
  isLoggedIn:false,
  isLoading:false,
  accessToken:'',
  username:'',
  password:'',
}

export const loginReducer = createReducer(initialState,{
  [actionTypes.LOGIN_REQUEST](state,action){
    var newState = {...state};
    newState.username = action.username;
    newState.password = action.password;
    return newState;
  },
  [actionTypes.LOGIN_LOADING](state,action){
    var newState = {...state};
    newState.isLoading = true;
    return newState;
  },
  [actionTypes.LOGIN_LOADING_ENDED](state,action){
    var newState = {...state};
    newState.isLoading = false;
    return newState;
  },
  [actionTypes.LOGIN_RESPONSE](state,action){
    var newState = {...state};
    newState.accessToken = action.response.access_token;
    newState.isLoading = false;
    return newState;
  },
   [actionTypes.LOGIN_FAILED](state,action){
    var newState = {...state};    
    newState.isLoading = false;
    return newState;
  }
});