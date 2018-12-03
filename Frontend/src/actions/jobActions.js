import axios from "axios";
import { SEARCH_JOB, APPLY_JOB, SAVE_JOB } from "./types";
import { setHeader } from "../components/common/auth";
import { getJWTUsername } from "../components/common/auth";

const ROOT_URL = "http://localhost:3001";

export const searchJob =(data,callback) => async dispatch => {
  try {
   // var email = getJWTUsername();
    //setHeader();
    const res = await axios.post(`${ROOT_URL}/searchJob`, data);
    console.log(res.status);
    console.log("search a job",res.data);
    dispatch({
      type: SEARCH_JOB,
      payload: res.data
    });
    callback()
  } catch (e) {
    return {
      type: SEARCH_JOB,
      payload: e
    };
  }
};

export const saveJob = data => async dispatch => {
  try {
    var email = getJWTUsername();
    setHeader();
    const res = await axios.post(`${ROOT_URL}/saveJob`, data);
    dispatch({
      type: SAVE_JOB,
      payload: res.data
    });
  } catch (e) {
    return {
      type: SAVE_JOB,
      payload: e
    };
  }
};

export const applyJob = data => async dispatch => {
  try {
    var email = getJWTUsername();
    setHeader();
    const res = await axios.post(`${ROOT_URL}/applyJob`, data);
    dispatch({
      type: APPLY_JOB,
      payload: res.data
    });
  } catch (e) {
    return {
      type: APPLY_JOB,
      payload: e
    };
  }
};
