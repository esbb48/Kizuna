import { createAction, handleActions } from 'redux-actions';
import localStorage from '../store/localStorage';

export const CHANGE_USERNAME = 'CHANGE_USERNAME';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';

export const changeUsername = createAction(CHANGE_USERNAME);
export const loginRequest = createAction(LOGIN_REQUEST);

const initialState = {
  username: localStorage.getItem('KIZUNA_USERNAME') || '',
};

export const reducer = handleActions({
  [CHANGE_USERNAME]: (state = initialState, { payload }) => {
    const { username } = payload;
    return Object.assign({}, state, {
      username,
    });
  },
  [LOGIN_REQUEST]: (state = initialState) => state,
}, initialState);
