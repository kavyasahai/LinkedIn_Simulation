import axios from "axios";
import {
  GET_ALL_CONNECTIONS,
  REMOVE_CONNECTION,
  ACCEPT_CONNECTION,
  REJECT_CONNECTION,
  GET_RECEIVED_CONNECTIONS
} from "./types";
import { setHeader } from "../components/common/auth";

const ROOT_URL = "http://localhost:3001";

export const getAllConnections = username => async dispatch => {
  try {
    setHeader();
    const res = await axios.get(`${ROOT_URL}/connection/${username}`);
    dispatch({
      type: GET_ALL_CONNECTIONS,
      payload: res.data
    });
  } catch (e) {
    return {
      type: GET_ALL_CONNECTIONS,
      payload: e
    };
  }
};
export const removeConnection = username => async dispatch => {
  // try {
  //   setHeader();
  //   const res = await axios.get(`${ROOT_URL}/connection/${username}`);
  //   dispatch({
  //     type: REMOVE_CONNECTION,
  //     payload: res.data
  //   });
  // } catch (e) {
  //   return {
  //     type: REMOVE_CONNECTION,
  //     payload: e
  //   };
  // }
};

export const acceptConnection = data => async dispatch => {
  try {
    setHeader();
    const res = await axios.post(`${ROOT_URL}/connection/accept`, data);
    dispatch({
      type: ACCEPT_CONNECTION,
      payload: res.data
    });
  } catch (e) {
    return {
      type: ACCEPT_CONNECTION,
      payload: e
    };
  }
};
export const rejectConnection = data => async dispatch => {
  try {
    setHeader();
    const res = await axios.post(`${ROOT_URL}/connection/reject`, data);
    dispatch({
      type: REJECT_CONNECTION,
      payload: res.data
    });
  } catch (e) {
    return {
      type: REJECT_CONNECTION,
      payload: e
    };
  }
};

export const getReceivedConnections = data => async dispatch => {
  // try {
  //   setHeader();
  //   const res = await axios.post(`${ROOT_URL}/connection`, data);
  //   dispatch({
  //     type: GET_RECEIVED_CONNECTIONS,
  //     payload: res.data
  //   });
  // } catch (e) {
  //   return {
  //     type: GET_RECEIVED_CONNECTIONS,
  //     payload: e
  //   };
  // }
};
