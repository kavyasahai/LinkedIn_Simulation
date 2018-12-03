import axios from "axios";
import { POSTED_APPLICATIONS, POSTED_JOBS } from "./types";
import { getToken } from "../components/common/auth";

const ROOT_URL = "http://localhost:3001";

export const getPostedApplications = () => dispatch => {
  axios
    .get({
      method: "get",
      url: ROOT_URL + "/recruiter/posted_applications",
      headers: {
        Authorization: getToken()
      }
    })
    .then(res => {
      if (res.data.status === "OK") {
        dispatch({
          type: POSTED_APPLICATIONS,
          payload: res.data.payload
        });
      }
    });
};

export const getPostedJobs = () => dispatch => {
  axios
    .get({
      method: "get",
      url: ROOT_URL + "/recruiter/posted_jobs",
      headers: {
        Authorization: getToken()
      }
    })
    .then(res => {
      if (res.data.status === "OK") {
        dispatch({
          type: POSTED_JOBS,
          payload: res.data.payload
        });
      }
    });
};

export const editJob = state => {
  axios.post({
    method: "post",
    url: ROOT_URL + "/recruiter/edit_job",
    headers: {
      Authorization: getToken()
    }
  }).then(res => {
    if (res.data.status == "OK") {
      alert("Job updated")
    }
  })
}
