import styled from "styled-components";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import mainlogo from "./images_comp/mainlogo.png";

import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../API/Cookie";

const NavBar = () => {
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
                const data = response.data;
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
            <NavContainer>
                <div>
                    <img src={mainlogo} />
                    <Logo to="/">UNIVPET</Logo>
                </div>
                <UserContainer>
                    <MyPage to="/mypage">마이페이지</MyPage>
                    <Sign onClick={gotoLogin} to="/signup">
                        회원가입 / 로그인
                    </Sign>
                </UserContainer>
            </NavContainer>
            <Menu />
        </>
    );
};

export default NavBar;

const NavContainer = styled.div`
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 3px;
  background: var(--light-mode-primary-purple, #4d00b4);

  padding-left: 10%;
  padding-right: 10%;
  div {
    display: flex;
    align-items: center;
  }
  img {
    padding-right: 15px;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: var(--light-mode-white-background, #fff);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const UserContainer = styled.div`
  width: 30%;

  display: flex;
  justify-content: space-between;
`;

const MyPage = styled(Link)`
  text-decoration: none;
  color: var(--light-mode-white-background, #fff);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Sign = styled(Link)`
  text-decoration: none;
  color: var(--light-mode-white-background, #fff);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
