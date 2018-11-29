import axios from "axios";
import { PROFILE_VIEWS } from "./types";
import { setHeader } from "../components/common/auth";

const ROOT_URL = "http://localhost:3001";

export const getProfileViews = () => async dispatch => {
  try {
    setHeader();

    const res = await axios.get(`${ROOT_URL}/getProfileViews`, {
      params: {
        email: localStorage.getItem("email")
      }
    });

    dispatch({
      type: PROFILE_VIEWS,
      payload: res.data
    });
  } catch (e) {
    return {
      type: PROFILE_VIEWS,
      payload: e
    };
  }
};
