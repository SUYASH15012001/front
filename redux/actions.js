import {
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from './actionTypes';
import axios from 'axios';

const baseUrl =
  'https://df30-2409-4050-2e80-e98d-dc8-6ea2-d117-9e53.in.ngrok.io';

export const getUsers = () => {
  return function (dispatch) {
    dispatch({type: GET_USERS_REQUEST});
    console.log('hitting');
    return axios
      .get(`${baseUrl}/users`)
      .then(({data}) => {
        console.log(data);
        dispatch({
          type: GET_USERS_SUCCESS,
          payload: data,
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: GET_USERS_FAILURE,
          payload: err,
        });
      });
  };
};

export const login = creds => {
  return function (dispatch) {
    dispatch({type: LOGIN_REQUEST});
    // console.log('hitting');
    return axios
      .post(`${baseUrl}/user`, creds)
      .then(({data}) => {
        console.log(data);
        return dispatch({
          type: LOGIN_SUCCESS,
          payload: data,
        });
      })
      .catch(err => {
        console.log(err);
        return dispatch({
          type: LOGIN_FAILURE,
          payload: err,
        });
      });
  };
};
