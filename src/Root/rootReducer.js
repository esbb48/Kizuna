import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as authModule } from '../Auth/authModule';

const rootReducer = combineReducers({
  authModule,
  routing,
});

export default rootReducer;
