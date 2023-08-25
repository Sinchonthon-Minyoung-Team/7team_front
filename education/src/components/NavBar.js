import styled from "styled-components";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import mainlogo from "./images_comp/mainlogo.png";

function NavBar() {
    return (
        <>
            <NavContainer>
                <div>
                    <img src={mainlogo} />
                    <Logo to="/">UNIVPET</Logo>
                </div>
                <UserContainer>
                    <MyPage to="/mypage">마이페이지</MyPage>
                    <Sign to="/signup">회원가입 / 로그인</Sign>
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
    width: 1400px;
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
