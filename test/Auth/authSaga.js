import test from 'ava';
import { take, select } from 'redux-saga/effects';
import { LOGIN_REQUEST } from '../../src/Auth/authModule';
import loginFlow from '../../src/Auth/authSaga';

test('loginFlow', (t) => {
  const gen = loginFlow();
  t.deepEqual(
    gen.next().value,
    take(LOGIN_REQUEST),
  );

  t.deepEqual(
    gen.next().value,
    select(),
  );
});
