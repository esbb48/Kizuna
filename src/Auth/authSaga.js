import { takeEvery } from 'redux-saga';
import { call, select } from 'redux-saga/effects';
import { LOGIN_REQUEST } from './authModule';


function onLogin({ username }) {
  localStorage.setItem('KIZUNA_USERNAME', username);
  return Promise.resolve();
}

function* login() {
  const { authModule } = yield select();
  yield call(onLogin, authModule);
}

export default function* watchLogin() {
  yield* takeEvery(LOGIN_REQUEST, login);
}

