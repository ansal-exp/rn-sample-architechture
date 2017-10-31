import { takeEvery, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actions/ActionTypes';
import loginSaga from './loginSaga';
import phonesSaga from './phonesSaga';

export default function* watch() {
  yield [takeEvery(actionTypes.LOGIN_REQUEST, loginSaga)],
  yield [takeLatest(actionTypes.REQUEST_PHONES_LIST, phonesSaga)];
}
