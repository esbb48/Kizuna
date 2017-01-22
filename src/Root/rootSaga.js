import { fork } from 'redux-saga/effects';
import loginFlow from '../Auth/authSaga';

export default function* rootSaga() {
  yield [
    fork(loginFlow),
  ];
}
