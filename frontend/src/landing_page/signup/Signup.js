import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import api from "../../api";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
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
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const { data } = await api.post("/signup", inputValue);
    const { success, message } = data;
    if (success) {
      handleSuccess("Account created! Ab login karo");
      setTimeout(() => {
        navigate("/login");  // ✅ Login page pe jayega
      }, 1500);
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
    username: "",
  });
};


  return (
    <div className="form_container">
      <h2>Signup Account</h2>
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
          <label htmlFor="email">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
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
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;