import {
  GET_ERRORS
} from '../actions/DeploymentAction';



const errorReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return  {...state , ...action.payload}
    default:
      return state
  }
}

export default errorReducer;