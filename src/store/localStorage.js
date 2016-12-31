import localStoragePackage from 'localStorage';

let localStorage = localStoragePackage; // eslint-disable-line

if (process.env.NODE_ENV !== 'test') {
  localStorage = global.window.localStorage;
}

export default localStorage;
