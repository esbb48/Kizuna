import localStoragePackage from 'localStorage';

const localStorage = process.env.NODE_ENV === 'test' ?
    localStoragePackage : global.window.localStorage;

export default localStorage;
