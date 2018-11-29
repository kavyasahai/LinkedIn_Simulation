import axios from "axios";
import {
  RECRUITER_DASHBOARD_TOP10,
  RECRUITER_DASHBOARD_TOP5,
  GET_RECRUITER_JOBS,
  RECRUITER_DASHBOARD_CITY
} from "./types";
import { setHeader } from "../components/common/auth";

const ROOT_URL = "http://localhost:3001";

export const getRecruiterDashboardTop10 = data => async dispatch => {
  try {
    setHeader();
    const res = await axios.post(
      `${ROOT_URL}/getRecruiterDashboardTop10`,
      data
    );
    dispatch({
      type: RECRUITER_DASHBOARD_TOP10,
      payload: res.data
    });
  } catch (e) {
    return {
      type: RECRUITER_DASHBOARD_TOP10,
      payload: e
    };
  }
};

export const getRecruiterDashboardTop5 = username => async dispatch => {
  try {
    setHeader();
    const res = await axios.get(
      `${ROOT_URL}/getRecruiterDashboardTop5/${username}`
    );
    dispatch({
      type: RECRUITER_DASHBOARD_TOP5,
      payload: res.data
    });
  } catch (e) {
    return {
      type: RECRUITER_DASHBOARD_TOP5,
      payload: e
    };
  }
};

export const getRecruiterJobs = username => async dispatch => {
  try {
    setHeader();
    const res = await axios.get(`${ROOT_URL}/getRecruiterJobs/${username}`);
    dispatch({
      type: GET_RECRUITER_JOBS,
      payload: res.data
    });
  } catch (e) {
    return {
      type: GET_RECRUITER_JOBS,
      payload: e
    };
  }
};

export const getRecruiterDashboardCity = jobId => async dispatch => {
  try {
    setHeader();
    const res = await axios.get(
      `${ROOT_URL}/getRecruiterDashboardCity/${jobId}`
    );
    dispatch({
      type: RECRUITER_DASHBOARD_CITY,
      payload: res.data
    });
  } catch (e) {
    return {
      type: RECRUITER_DASHBOARD_CITY,
      payload: e
    };
  }
};
