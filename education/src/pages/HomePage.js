import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import { getCookie } from "../API/Cookie";
import PetitionCard from "../components/PetitonCard";

function HomePage() {
  const [radio, setRadio] = useState("0");
  const handleRadio = (e) => {
    console.log(e.target.value);
    setRadio(e.target.value);
  };

  const [registerData, setRegisterData] = useState({
    category: "",
    content: "",
    created_at: "",
    d_day: "",
    id: "",
    likes: "",
    title: "",
    writer: "",
  });

  const access = getCookie("accessToken");

  const getArticle = async () => {
    if (radio === "0" || radio === "1") {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BaseUrl}/sorted_posts/`,
          {
            headers: { Authorization: `Bearer ${access}` },
          }
        );
        setRegisterData(res.data);
      } catch (error) {
        alert("오류가 발생했습니다. 다시 시도해주세요.");
      }
    } else {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BaseUrl}/posts/?order=latest`,
          {
            headers: { Authorization: `Bearer ${access}` },
          }
        );
        setRegisterData(res.data);
      } catch (error) {
        alert("오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
  };

  useEffect(() => {
    getArticle();
  }, [radio]);

  console.log(registerData);

  return (
    <Container>
      <ButtonConatiner>
        <Button to="/progress">청원하기</Button>
        <Button to="/write">동의하기</Button>
      </ButtonConatiner>

            <SearchBar />

      <BottomContainer>
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
        <ArticleContainer></ArticleContainer>
      </BottomContainer>
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

const ArticleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const BottomContainer = styled.div``;

const RadioBtnContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: right;
`;
