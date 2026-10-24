import axios from "axios";

const apiBaseURL =
  process.env.REACT_APP_API_URL ||
  "https://zerodha-0zlh.onrender.com"; // <-- Yahan Render ka live backend URL daal diya

const api = axios.create({
  baseURL: apiBaseURL,
  withCredentials: true,
});

export default api;
