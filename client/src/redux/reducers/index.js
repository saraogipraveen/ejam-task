import { combineReducers } from 'redux';
import DeploymentReducer from './DeploymentReducer';
import ErrorReducer from './ErrorReducer';

export default combineReducers({
  deployment: DeploymentReducer,
  errors: ErrorReducer
})