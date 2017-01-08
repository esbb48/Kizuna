import test from 'ava';
import { actionTest, reducerTest } from 'redux-ava';

import {
  changeUsername,
  loginRequest,
  reducer,
} from '../../src/Auth/authModule';

const username = 'Alice';

test('Action: changeUsername', actionTest(
  changeUsername,
  { username },
  {
    type: 'CHANGE_USERNAME',
    payload: { username },
  },
));

test('Action: loginRequest', actionTest(
  loginRequest,
  {},
  {
    type: 'LOGIN_REQUEST',
    payload: {},
  },
));

test('Reducer: changeUsername', reducerTest(
  reducer,
  { username: '' },
  changeUsername({ username }),
  { username },
));

test('Reducer: loginRequest', reducerTest(
  reducer,
  {},
  loginRequest(),
  {},
));

