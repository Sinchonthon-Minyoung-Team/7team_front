import Menu from "../../components/Menu";
import PetitionCard from "../../components/PetitonCard";
import styled from "styled-components";

import Categorybar from "../../components/Categorybar";
import { useEffect } from "react";
import axios from "axios";
import { getCookie } from "../../API/Cookie";

function Article(props) {
  const access = getCookie("accessToken");

  const getArticle = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BaseUrl}/posts/`, {
        headers: { Authorization: `Bearer ${access}` },
      });
      console.log(res.data);
    } catch (error) {
      alert("오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <>
      <Menu />
      <Wrapper>
        <Categorybar />
        <Cards>
          <PetitionCard agreeNum={15} type={props.type} />
          <PetitionCard agreeNum={10} type={props.type} />
          <PetitionCard agreeNum={30} type={props.type} />
        </Cards>
        <Cards>
          <PetitionCard agreeNum={5} type={props.type} />
          <PetitionCard agreeNum={2} type={props.type} />
          <PetitionCard agreeNum={20} type={props.type} />
        </Cards>
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
