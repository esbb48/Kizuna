import { createAction, handleActions } from 'redux-actions';
import localStorage from '../store/localStorage';

export const CHANGE_USERNAME = Symbol('CHANGE_USERNAME');
export const LOGIN_REQUEST = Symbol('LOGIN_REQUEST');

export const changeUsername = createAction(CHANGE_USERNAME);
export const loginRequest = createAction(LOGIN_REQUEST);

const initialState = {
  username: localStorage.getItem('KIZUNA_USERNAME') || '',
};

export const reducer = handleActions({
  [CHANGE_USERNAME]: (state = initialState, { payload: { username } }) => {
    return { ...state, username };
  },
}, initialState);
