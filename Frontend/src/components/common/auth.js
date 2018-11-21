import jwt_decode from "jwt-decode";
import axios from "axios";

export function getToken() {
  const token = localStorage.getItem("username");
  if (token && token !== "Bearer undefined") return true;
}

export function getJWTUsername() {
  const token = localStorage.getItem("username");
  return jwt_decode(token).username;
}

export function setHeader() {
  axios.defaults.headers.common["Authorization"] = localStorage.getItem(
    "username"
  );
}
