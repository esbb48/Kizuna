import { createAction, handleActions } from 'redux-actions';

export const CHANGE_USERNAME = 'CHANGE_USERNAME';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';

export const changeUsername = createAction(CHANGE_USERNAME);
export const loginRequest = createAction(LOGIN_REQUEST);

const initialState = {
  username: localStorage.getItem('KIZUNA_USERNAME') || '',
};

export default handleActions({
  [CHANGE_USERNAME]: (state, { payload }) => {
    const { username } = payload;
    return Object.assign({}, state, {
      username,
    });
  },
  [LOGIN_REQUEST]: state => state,
}, initialState);
