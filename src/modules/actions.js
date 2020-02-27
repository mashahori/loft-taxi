import { createAction } from 'redux-actions';

export const loginAction = createAction('LOG_IN');
export const failureAction = createAction('FAILURE');
export const signupAction = createAction('SIGN_UP');
export const logoutAction = createAction('LOG_OUT');
export const addCardAction = createAction('ADD_CARD');
