// reducer actions
import * as types from './ActionTypes';

export function requestLogin(username, password) {
  return {
    type: types.LOGIN_REQUEST,
    username,
    password,
  };
}
export function requestPhones() {
  return {
    type: types.REQUEST_PHONES_LIST,
  };
}
