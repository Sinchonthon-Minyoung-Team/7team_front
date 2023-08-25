import React from "react";
import axios from "axios";
import { useEffect } from "react";
// import GoogleButton from "../../components/Login/GoogleButton";

const LoginPage = () => {
  const gotoLogin = () => {
    window.location.href =
      "https://accounts.google.com/o/oauth2/auth?" +
      "client_id=670470419742-dntothjjjgs985sa8vr2nfkv1o3e37t2.apps.googleusercontent.com&" +
      "redirect_uri=http://localhost:3000/loginpage&" +
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
          "http://localhost:8000/auth/google/token",
          {
            code,
          }
        );
        const { data } = response.data;
        console.log(response);
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
