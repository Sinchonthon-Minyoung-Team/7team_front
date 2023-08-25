import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../API/Cookie";
// import GoogleButton from "../../components/Login/GoogleButton";

const LoginPage = () => {
  const navigate = useNavigate();
  const gotoLogin = () => {
    window.location.href =
      "https://accounts.google.com/o/oauth2/auth?" +
      `client_id=${process.env.REACT_APP_CLIENT_ID}&` +
      `redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&` +
      "response_type=code&" +
      "scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile";
  };
  useEffect(() => {
    const parsedHash = new URLSearchParams(window.location.search);
    const code = parsedHash.get("code");
    console.log(code);
    // Make an API request using Axios
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BaseUrl}/auth/google/token`,
          {
            code,
          }
        );
        const { data } = response.data;
        console.log(response);
        const accessToken = data.access;
        const refreshToken = data.refresh;
        const register = data.is_register;
        setCookie("accessToken", accessToken, { path: "/" });
        setCookie("refreshToken", refreshToken, { path: "/" });
        if (register) navigate("/");
        else navigate("/signup");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (code) {
      fetchData();
    }
  }, []);

  return (
    <>
      <button onClick={gotoLogin} className="google_btn"></button>
    </>
  );
};
export default LoginPage;
