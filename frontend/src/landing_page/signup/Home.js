import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import api from "../../api";

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      try {
        const { data } = await api.post("/");
        const { status, user } = data;
        if (status) {
          setUsername(user);
          toast(`Hello ${user}`, { position: "top-right" });
          return;
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "Unable to verify your session");
      }
    navigate("/login");
    };
    verifyCookie();
  }, [navigate]);
  const logout = async () => {
    try {
    await api.post("/logout");
    navigate("/signup");
    } catch (error) {
    toast.error(error.response?.data?.message || "Unable to log out");
    }
  };
  return (
    <>
      <div className="home_page">
        <h4>
          {" "}
          Welcome <span>{username}</span>
        </h4>
        <button onClick={logout}>LOGOUT</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
