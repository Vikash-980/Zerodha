import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import api from "../../api";

const dashboardUrl =
  "https://zerodha-dash-c39sdkkw4-vikash-980s-projects.vercel.app/";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/login", inputValue);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = dashboardUrl;
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      handleError(error.response?.data?.message || "Unable to reach the server. Please try again.");
      return;
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            autoComplete="off" 
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            autoComplete="new-password"
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Already have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;