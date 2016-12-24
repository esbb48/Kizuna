import { createAction, handleActions } from 'redux-actions';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';

export const loginRequest = createAction(LOGIN_REQUEST);

const initialState = {
  username: null,
};

export default handleActions({
  [LOGIN_REQUEST]: (state, { payload }) => {
    const { username } = payload;
    return Object.assign({}, state, {
      username,
    });
  },
}, initialState);
