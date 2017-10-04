import { delay } from 'redux-saga'
import { put, takeEvery,call } from 'redux-saga/effects'
import * as actionTypes from '../actions/ActionTypes'
import Api from '../utils/Api'
import NavigatorService from '../lib/NavigatorService'

const sampleLoginResponse = {
    "access_token": "79ea923ffe51db6e2078822d2c7fd78293eae8ff",
    "expires_in": 3600,
    "token_type": "Bearer",
    "scope": null
}


// Our worker Saga: 
export default function* loginAsync(action) {  
    yield put({ type: actionTypes.LOGIN_LOADING });   
    yield call(delay,5000);
    yield put({ type: actionTypes.LOGIN_RESPONSE, response:sampleLoginResponse });
    NavigatorService.reset('PhonesList');
}