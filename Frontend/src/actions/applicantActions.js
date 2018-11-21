import axios from "axios";
import {
  APPLICANT_DETAILS,
  APPLICANT_LOCATION_DATA,
  APPLICANT_LOGIN,
  APPLICANT_SIGNUP
} from "./types";
import { setHeader } from "../components/common/auth";

const ROOT_URL = "http://localhost:3001";

export const proDetails = data => async dispatch => {
  try {
    setHeader();
    const res = await axios.post(`${ROOT_URL}/prodetails`, data);
    dispatch({
      type: APPLICANT_DETAILS,
      payload: res.data.updatedList,
      statusCode: res.status
    });
  } catch (e) {
    return {
      type: APPLICANT_DETAILS,
      payload: e
    };
  }
};

export const locationData = data => async dispatch => {
  try {
    setHeader();
    const res = await axios.post(`${ROOT_URL}/locationdata`, data);
    dispatch({
      type: APPLICANT_LOCATION_DATA,
      payload: res.data.updatedList,
      statusCode: res.status
    });
  } catch (e) {
    return {
      type: APPLICANT_LOCATION_DATA,
      payload: e
    };
  }
};

export const login = data => async dispatch => {
  try {
    setHeader();
    const res = await axios.post(`${ROOT_URL}/login`, data);
    dispatch({
      type: APPLICANT_LOGIN,
      payload: res.data.updatedList,
      statusCode: res.status
    });
  } catch (e) {
    return {
      type: APPLICANT_LOGIN,
      payload: e
    };
  }
};

export const register = data => async dispatch => {
  try {
    setHeader();
    const res = await axios.post(`${ROOT_URL}/register`, data);
    dispatch({
      type: APPLICANT_SIGNUP,
      payload: res.data.updatedList,
      statusCode: res.status
    });
  } catch (e) {
    return {
      type: APPLICANT_SIGNUP,
      payload: e
    };
  }
};
