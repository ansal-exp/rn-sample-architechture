import { delay } from 'redux-saga'
import { put, takeEvery,call,select } from 'redux-saga/effects'
import * as actionTypes from '../actions/ActionTypes'
import Api from '../utils/Api'
import {Alert} from 'react-native'

//selector Function to get app/redux state
export const reducerStates = (state) => {
    return {
        accessToken:state.loginReducer.accessToken
    }
}


// Our worker Saga: 
export default function* phonesAsync() {  
    yield put({ type: actionTypes.FETCH_STARTED })
    let jobsState = yield select(reducerStates);
    let path = '';
    var params = null;
    try{
        const response = yield call(Api,path ,params,"get");   
        yield put({ type: actionTypes.FETCH_STOPPED, response:response })
    }catch(error){
        yield put({ type: actionTypes.FETCH_STOPPED, response:error })      
        alert(error.message)
    }  
}