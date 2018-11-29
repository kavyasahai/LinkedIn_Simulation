import axios from "axios";
import { RECRUITER_DASHBOARD_TOP10, RECRUITER_DASHBOARD_TOP5 } from "./types";
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

export const getRecruiterDashboardTop5 = data => async dispatch => {
  try {
    setHeader();
    const res = await axios.post(`${ROOT_URL}/getRecruiterDashboardTop5`, data);
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
