import * as actionTypes from '../actions/ActionTypes';

const initialState = {
  phones: [],
  isLoading: false,
  isEndReached: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_STARTED: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }
    case actionTypes.FETCH_STOPPED: {
      const newState = { ...state };
      newState.phones = [...action.response];
      newState.isLoading = false;
      return newState;
    }
    default:
      return state;
  }
};
