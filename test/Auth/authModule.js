import test from 'ava';
import { actionTest, reducerTest } from 'redux-ava';

import {
  CHANGE_USERNAME,
  changeUsername,
  LOGIN_REQUEST,
  loginRequest,
  reducer,
} from '../../src/Auth/authModule';

const username = 'Alice';
const theOtherUsername = 'Bill';

test('Action: changeUsername: Alice', actionTest(
  changeUsername,
  { username },
  {
    type: CHANGE_USERNAME,
    payload: { username },
  },
));

test('Action: changeUsername: Bill', actionTest(
  changeUsername,
  { username: theOtherUsername },
  {
    type: CHANGE_USERNAME,
    payload: { username: theOtherUsername },
  },
));

test('Action: loginRequest', actionTest(
  loginRequest,
  {},
  {
    type: LOGIN_REQUEST,
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

