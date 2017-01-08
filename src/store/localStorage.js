import localStoragePackage from 'localStorage';

// eslint-disable-next-line import/no-mutable-exports
let localStorage;

if (process.env.NODE_ENV === 'test') {
  localStorage = localStoragePackage;
} else {
  localStorage = global.window.localStorage;
}

export default localStorage;
