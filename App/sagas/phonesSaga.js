import { put, call } from 'redux-saga/effects';
import * as actionTypes from '../actions/ActionTypes';
import Api from '../utils/Api';

// selector Function to get app/redux state
export const reducerStates = state => ({
  accessToken: state.loginReducer.accessToken,
});

// Our worker Saga:
export default function* phonesAsync() {
  yield put({ type: actionTypes.FETCH_STARTED });
  const path = '';
  const params = null;
  try {
    const response = yield call(Api, path, params, 'get');
    yield put({ type: actionTypes.FETCH_STOPPED, response });
  } catch (error) {
    yield put({ type: actionTypes.FETCH_STOPPED, response: error });
    alert(error.message);
  }
}
