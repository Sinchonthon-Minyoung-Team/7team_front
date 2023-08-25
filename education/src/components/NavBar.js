import styled from "styled-components";
import { Link } from "react-router-dom";
import Menu from "./Menu";

function NavBar() {
  return (
    <>
      <NavContainer>
        <Logo to="/">UNIVPET</Logo>
        <UserContainer>
          <MyPage to="/mypage">마이페이지</MyPage>
          <Sign to="/loginpage">회원가입 / 로그인</Sign>
        </UserContainer>
      </NavContainer>
      <Menu />
    </>
  );
}

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
