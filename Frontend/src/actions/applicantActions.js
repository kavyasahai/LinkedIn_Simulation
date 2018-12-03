import axios from "axios";
import {
  APPLICANT_DETAILS,
  APPLICANT_LOCATION_DATA,
  APPLICANT_LOGIN,
  APPLICANT_SIGNUP,
  APPLICANT_SUMMARYINSERT_DATA,
  APPLICANT_EXPERIENCEINSERT_DATA,
  APPLICANT_SCHOOLINSERT_DATA,
  APPLICANT_SKILLSINSERT_DATA,
  APPLICANT_GETUSER_DATA
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
export const getuserdata = data => async dispatch => {
  try {
    setHeader();
    const res = await axios.post(`${ROOT_URL}/getuserdata`, data);
    dispatch({
      type: APPLICANT_GETUSER_DATA,
      payload: res.data.updatedList,
      statusCode: res.status
    });
  } catch (e) {
    return {
      type: APPLICANT_GETUSER_DATA,
      payload: e
    };
  }
};
export const summaryinsert = data => async dispatch => {
  try {
    setHeader();
    const res = await axios.post(`${ROOT_URL}/insertsummary`, data);
    dispatch({
      type: APPLICANT_SUMMARYINSERT_DATA,
      payload: res.data.updatedList,
      statusCode: res.status
    });
  } catch (e) {
    return {
      type: APPLICANT_SUMMARYINSERT_DATA,
      payload: e
    };
  }
};
export const schoolinsert = data => async dispatch => {
  try {
    setHeader();
    const res = await axios.post(`${ROOT_URL}/schoolinsert`, data);
    dispatch({
      type: APPLICANT_SCHOOLINSERT_DATA,
      payload: res.data.updatedList,
      statusCode: res.status
    });
  } catch (e) {
    return {
      type: APPLICANT_SCHOOLINSERT_DATA,
      payload: e
    };
  }
};
export const skillsinsert = data => async dispatch => {
  try {
    setHeader();
    const res = await axios.post(`${ROOT_URL}/skillsinsert`, data);
    dispatch({
      type: APPLICANT_SKILLSINSERT_DATA,
      payload: res.data.updatedList,
      statusCode: res.status
    });
  } catch (e) {
    return {
      type: APPLICANT_SKILLSINSERT_DATA,
      payload: e
    };
  }
};
export const experienceinsert = data => async dispatch => {
  try {
    setHeader();
    const res = await axios.post(`${ROOT_URL}/experiencesummary`, data);
    dispatch({
      type: APPLICANT_EXPERIENCEINSERT_DATA,
      payload: res.data.updatedList,
      statusCode: res.status
    });
  } catch (e) {
    return {
      type: APPLICANT_EXPERIENCEINSERT_DATA,
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

export function login(data, callback) {
  try {
    setHeader();
    const request = axios
      .post(`${ROOT_URL}/login`, data)
      .then(res => callback(res));

    return {
      type: APPLICANT_LOGIN,
      payload: request.data.updatedList,
      statusCode: request.status
    };
  } catch (e) {
    return {
      type: APPLICANT_LOGIN,
      payload: e
    };
  }
}

export function register(data, callback) {
  try {
    const request = axios
      .post(`${ROOT_URL}/register`, data)
      .then(response => callback(response));
    return {
      type: APPLICANT_SIGNUP,
      payload: request
    };
  } catch (e) {
    return {
      type: APPLICANT_SIGNUP,
      payload: e
    };
  }
}
