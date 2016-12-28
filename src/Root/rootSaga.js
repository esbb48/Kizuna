import { fork } from 'redux-saga/effects';
import watchLogin from '../Auth/authSaga';

export default function* rootSaga() {
  yield [
    fork(watchLogin),
  ];
}
