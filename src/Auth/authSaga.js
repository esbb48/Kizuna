import { takeEvery } from 'redux-saga';
import { call } from 'redux-saga/effects';
import { LOGIN_REQUEST } from './authModule';


function onLogin({ username }) {
  localStorage.setItem('KIZUNA_USERNAME', username);
  return Promise.resolve();
}

function* login(args) {
  yield call(onLogin, args);
}

export default function* watchLogin() {
  yield* takeEvery(LOGIN_REQUEST, login);
}

