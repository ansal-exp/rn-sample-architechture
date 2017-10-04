import createReducer from '../lib/createReducer'
import * as actionTypes from '../actions/ActionTypes'

const initialState={
    phones:[],
    isLoading:false,
    isEndReached:false,
}

export const phonesReducer = createReducer(initialState,{
  [actionTypes.FETCH_STARTED](state,action){
    var newState = {...state};    
    newState.isLoading = true;
    return newState;     
  },
  [actionTypes.FETCH_STOPPED](state,action){
    var newState = {...state}; 
    newState.phones = [...action.response];
    newState.isLoading = false;
    return newState;     
  },  
});