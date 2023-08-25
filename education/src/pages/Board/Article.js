import Menu from "../../components/Menu";
import PetitionCard from "../../components/PetitonCard";
import styled from "styled-components";

import Categorybar from "../../components/Categorybar";
import { useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "../../API/Cookie";

function Article(props) {
  const [registerData, setRegisterData] = useState([]);
  const access = getCookie("accessToken");

  const getArticle = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BaseUrl}/posts/`, {
        headers: { Authorization: `Bearer ${access}` },
      });
      setRegisterData(res.data);
    } catch (error) {
      alert("오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  const art1 = registerData
    .slice(0, 3)
    .map((data, index) => (
      <PetitionCard
        key={index}
        agreeNum={data.likes}
        type={props.type}
        title={data.title}
        content={data.content}
        leftDate={data.d_day}
        date={data.created_at}
      />
    ));

  const art2 = registerData
    .slice(3, 6)
    .map((data, index) => (
      <PetitionCard
        key={index}
        agreeNum={data.likes}
        type={props.type}
        title={data.title}
        content={data.content}
        leftDate={data.d_day}
        date={data.created_at}
      />
    ));

  return (
    <>
      <Wrapper>
        <Categorybar />
        <Cards>{art1}</Cards>
        <Cards>{art2}</Cards>
      </Wrapper>

      {props.type}
    </>
  );
}

export default Article;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90vw;
  justify-content: center;
`;
const Cards = styled.div`
  display: flex;
  flex-direction: column;
`;
