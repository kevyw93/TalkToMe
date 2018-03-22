export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
import * as ApiUtil from '../utils/session_api_util';

export const receiveCurrentUser = (currentUser) => {
 return {
   type: RECEIVE_CURRENT_USER,
   currentUser
 };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const signup = (user) => {
  return dispatch => {
    return ApiUtil.signup(user).then(
      (newUser) => dispatch(receiveCurrentUser(newUser)),
      (errors) => dispatch(receiveErrors(errors))
    );
  };
};

export const login = (user) => {
  return dispatch => {
    return ApiUtil.login(user).then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (errors) => dispatch(receiveErrors(errors))
    );
  };
};

export const logout = () => {
  return dispatch => {
    return ApiUtil.logout().then(
      () => dispatch(receiveCurrentUser(null))
    );
  };
};
