import axios from "axios";

const apiBaseURL =
  process.env.REACT_APP_API_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://zerodha-0zlh.onrender.com"
    : "http://localhost:3002");

const api = axios.create({
  baseURL: apiBaseURL,
  withCredentials: true,
});

export default api;
