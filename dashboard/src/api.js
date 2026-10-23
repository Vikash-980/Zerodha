import axios from "axios";

const apiBaseURL =
  process.env.REACT_APP_API_URL ||
  (process.env.NODE_ENV === "production" ? "" : "http://localhost:3002");

const api = axios.create({
  baseURL: apiBaseURL,
});

export default api;
