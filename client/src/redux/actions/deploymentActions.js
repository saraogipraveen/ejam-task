import {
  GET_DEPLOYMENTS,
  ADD_DEPLOYMENT,
  // REMOVE_DEPLOYMENT,
  GET_ERRORS,
  REMOVE_DEPLOYMENT,
} from "../actions/types";
import axios from "axios";

export const getDeployments = () => (dispatch) => {
  axios
    .get("http://localhost:4500/api/deployments/get")
    .then((res) => {
      dispatch({ type: GET_DEPLOYMENTS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: GET_ERRORS, errors: error });
    });
};

export const addDeployment = (deployment) => (dispatch) => {
  axios
    .post("http://localhost:4500/api/deployments/add", { deployment })
    .then((res) => {
      dispatch({ type: ADD_DEPLOYMENT, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: GET_ERRORS, errors: error });
    });
};

export const removeDeployment = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:4500/api/deployments/delete/${id}`)
    .then((res) => dispatch({type: REMOVE_DEPLOYMENT, payload: id}))
    .catch((error) => {
      dispatch({ type: REMOVE_DEPLOYMENT, payload: error });
    });
};
