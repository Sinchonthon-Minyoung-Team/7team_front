import React from "react";
// import GoogleButton from "../../components/Login/GoogleButton";

const LoginPage = () => {
  const gotoLogin = () => {
    window.location.href =
      "https://accounts.google.com/o/oauth2/auth?" +
      "client_id=670470419742-dntothjjjgs985sa8vr2nfkv1o3e37t2.apps.googleusercontent.com&" +
      "redirect_uri=http://localhost:3000/loginpage&" +
      "response_type=token&" +
      "scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile";
  };

  return (
    <>
      <button onClick={gotoLogin} className="google_btn"></button>
    </>
  );
};
export default LoginPage;
