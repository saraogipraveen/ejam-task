import { combineReducers } from 'redux';
import deploymentReducer from './deployment';
import errorReducer from './error';

export default combineReducers({
  deployment: deploymentReducer,
  errors: errorReducer
})