import { compose, createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from '../Root/rootReducer';

function configureStore({ initialState = {}, history }) {
  const route = routerMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(route, sagaMiddleware)
    ),
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
}

export default configureStore;
