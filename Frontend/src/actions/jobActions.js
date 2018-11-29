import axios from "axios";
import { SEARCH_JOB } from "./types";
import { setHeader } from "../components/common/auth";
import { getJWTUsername } from "../components/common/auth";

const ROOT_URL = "http://localhost:3001";

export const searchJob = data => async dispatch => {
  try {
    var email = getJWTUsername();
    setHeader();
    const res = await axios.post(`${ROOT_URL}/searchJob`, data);
    dispatch({
      type: SEARCH_JOB,
      payload: res.data
    });
  } catch (e) {
    return {
      type: SEARCH_JOB,
      payload: e
    };
  }
};
