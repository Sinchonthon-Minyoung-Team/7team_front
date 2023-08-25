import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchBar from "../components/SearchBar";

function HomePage() {
  const [radio, setRadio] = useState("0");
  const handleRadio = (e) => {
    console.log(e.target.value);
    setRadio(e.target.value);
  };
  return (
    <Container>
      <ButtonConatiner>
        <Button to="/progress">청원하기</Button>
        <Button to="/write">동의하기</Button>
      </ButtonConatiner>

      <SearchBar />

      <ArticleContainer>
        <RadioBtnContainer>
          <input
            type="radio"
            value="0"
            checked={radio === "0"}
            onChange={handleRadio}
          />
          <label>최다 동의 순</label>
          <input
            type="radio"
            value="1"
            checked={radio === "1"}
            onChange={handleRadio}
          />
          <label>만료 임박 순</label>
          <input
            type="radio"
            value="2"
            checked={radio === "2"}
            onChange={handleRadio}
          />
          <label>최신 등록 순</label>
        </RadioBtnContainer>
      </ArticleContainer>
    </Container>
  );
}

export default HomePage;

const Container = styled.div``;

const ButtonConatiner = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled(Link)`
  text-decoration: none;

  display: flex;
  width: 200px;
  height: 58px;
  padding: 11.5px 32px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 3px;
  background: var(--light-mode-primary-blue, #009aff);

  color: var(--light-mode-white-background, #fff);
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin: auto 15px;
`;

const ArticleContainer = styled.div``;

const RadioBtnContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: right;
`;
