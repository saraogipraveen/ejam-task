
import axios from "axios";

export const ADD_DEPLOYMENT = 'ADD_DEPLOYMENT';
export const GET_DEPLOYMENTS = 'GET_DEPLOYMENTS';
export const REMOVE_DEPLOYMENT = 'REMOVE_DEPLOYMENT';
export const GET_ERRORS = 'GET_ERRORS';


// let apiUrl = 'http://localhost:4500/';
let apiUrl = 'https://ejam-deployment.herokuapp.com/';



export const getDeployments = () => (dispatch) => {
  axios.get(`${apiUrl}api/deployments/get`)
    .then((res) => {
      dispatch({ type: GET_DEPLOYMENTS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: GET_ERRORS, payload: error && error.response && error.response.data });
    });
};

export const addDeployment = (deployment) => (dispatch) => {
  axios
    .post(`${apiUrl}api/deployments/add`, { deployment })
    .then((res) => {
      dispatch({ type: ADD_DEPLOYMENT, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: GET_ERRORS, payload: error && error.response && error.response.data });
    });
};

export const removeDeployment = (id) => (dispatch) => {
  axios
    .delete(`${apiUrl}api/deployments/delete/${id}`)
    .then((res) => dispatch({type: REMOVE_DEPLOYMENT, payload: id}))
    .catch((error) => {
      dispatch({ type: GET_ERRORS, payload: error && error.response && error.response.data });
    });
};
