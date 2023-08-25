import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getCookie } from "../API/Cookie";

function SignUp() {
  const [registerData, setRegisterData] = useState({
    userName: "",
    univ: "",
    studentID: "",
    major: "",
  });

  const { userName, univ, studentID, major } = registerData;

  const onChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const access = getCookie("accessToken");

  const onClick = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BaseUrl}/accounts/`,
        {
          unviersity: univ,
          student_id: studentID,
          name: userName,
          major: major,
        },
        { headers: { Authorization: `Bearer ${access}` } }
      );

      if (res.status === 200) {
        alert("회원가입이 완료되었습니다!");
        navigate("/");
      } else {
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      alert("오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <>
      <SectionContainer>
        <Menu>이름</Menu>
        <Input name="userName" value={userName} onChange={onChange} />
      </SectionContainer>
      <SectionContainer>
        <Menu>학교</Menu>
        <Input name="univ" value={univ} onChange={onChange} />
      </SectionContainer>
      <SectionContainer>
        <Menu>학번</Menu>
        <Input name="studentID" value={studentID} onChange={onChange} />
      </SectionContainer>
      <SectionContainer>
        <Menu>전공</Menu>
        <Input name="major" value={major} onChange={onChange} />
      </SectionContainer>

      <SubmitBtn onClick={onClick}>가입하기</SubmitBtn>
    </>
  );
}

export default SignUp;

const Input = styled.input``;

const SectionContainer = styled.div``;

const Menu = styled.div``;

const SubmitBtn = styled.div``;
