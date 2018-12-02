import axios from "axios";
import { GET_ALL_CONNECTIONS } from "./types";
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
