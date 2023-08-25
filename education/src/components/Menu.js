import styled from "styled-components";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <Container>
      <Option to="/info">청원안내</Option>
      <Option to="/progress">동의진행 청원</Option>
      <Option to="/done">동의종료 청원</Option>
      <Option to="/sent">학교전송 청원</Option>
    </Container>
  );
}

export default Menu;

const Container = styled.div`
  width: 1080px;
  height: 66px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  margin: 50px auto;

  border-radius: 3px;
  border: 1px solid var(--light-mode-primary-blue, #009aff);
  background: var(--light-mode-white-background, #fff);
`;

const Option = styled(Link)`
  color: var(--light-mode-primary-blue, #009aff);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;
`;
