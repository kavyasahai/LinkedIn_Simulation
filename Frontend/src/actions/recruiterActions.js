import axios from "axios";
import { POSTED_APPLICATIONS } from "./types";
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
