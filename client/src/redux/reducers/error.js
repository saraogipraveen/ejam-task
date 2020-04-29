import {
  GET_ERRORS
} from '../actions/types';

let errorReducer = (state = {}, action) => {
  switch(action.type) {
    case GET_ERRORS: 
      return action.errors
    default: return state
  }
}

export default errorReducer;