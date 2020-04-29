import {
  GET_DEPLOYMENTS,
  ADD_DEPLOYMENT,
  REMOVE_DEPLOYMENT
} from '../actions/types';

let initialState = {
  deployments: []
}

let deploymentReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_DEPLOYMENT: 
      return {...state, deployments: [...state.deployments, action.payload]}
    case GET_DEPLOYMENTS: 
      return {...state, deployments: action.payload}
    case REMOVE_DEPLOYMENT: 
      let deployments = state.deployments;
      deployments = deployments.filter(deployment => deployment._id !== action.payload )
      return {...state, deployments: deployments}
    default: return state
  }
}

export default deploymentReducer;