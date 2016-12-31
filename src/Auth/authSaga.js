import { select, take } from 'redux-saga/effects';
import { LOGIN_REQUEST } from './authModule';

export default function* loginFlow() {
  yield take(LOGIN_REQUEST);
  const { authModule } = yield select();
  localStorage.setItem('KIZUNA_USERNAME', authModule.username);
}
