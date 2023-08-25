import Menu from "../../components/Menu";
import PetitionCard from "../../components/PetitonCard";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { getCookie } from "../../API/Cookie";
import Categorybar from "../../components/Categorybar";
import { useEffect, useState } from "react";

function MakePetition() {
    const [newPostData, setNewPostData] = useState({
        title: "",
        category: "",
        content: "",
        duration: "",
    });
    const [ca, setCa] = useState("");

    const { title, category, content, duration } = newPostData;
    const onChange = (event) => {
        const { name, value } = event.target;
        console.log(name);
        setNewPostData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCategory = (cate) => {
        setNewPostData((prevData) => ({
            ...prevData,
            category: cate,
        }));
    };

    const navigate = useNavigate();
    const access = getCookie("accessToken");
    const onClick = async (event) => {
        event.preventDefault();

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_BaseUrl}/posts/`,
                {
                    title: title,
                    category: category,
                    content: content,
                    duration: 30,
                },
                { headers: { Authorization: `Bearer ${access}` } }
            );
            if (res.status === 200 || res.status === 201) {
                alert("글 등록이 완료되었습니다!");
                navigate("/");
            } else {
                alert("등록에 실패했습니다. 다시 시도해주세요.");
            }
        } catch (error) {
            alert("오류가 발생했습니다. 다시 시도해주세요.");
        }
    };
    return (
        <>
            <Wrapper>
                <Title>청원하기</Title>
                <Container>
                    <ContentTitle>
                        <div className="title">제목</div>
                        <div className="title">카테고리</div>
                        <div className="title">이유 및 내용</div>
                    </ContentTitle>
                    <Contents>
                        <input
                            className="putTitle"
                            name="title"
                            value={title}
                            onChange={onChange}
                        ></input>
                        <CategoryBox>
                            <div
                                className="box"
                                onClick={() => handleCategory("MO")}
                            >
                                증원
                            </div>
                            <div
                                className="box"
                                onClick={() => handleCategory("CU")}
                            >
                                커리큘럼
                            </div>
                            <div
                                className="box"
                                onClick={() => handleCategory("PR")}
                            >
                                교수님
                            </div>
                            <div
                                className="box"
                                onClick={() => handleCategory("ET")}
                            >
                                기타
                            </div>
                        </CategoryBox>
                        <input
                            className="putReason"
                            name="content"
                            value={content}
                            onChange={onChange}
                        ></input>
                    </Contents>
                </Container>
                <div className="box" onClick={onClick}>
                    제출하기
                </div>
            </Wrapper>
        </>
    );
}

export default MakePetition;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .box {
        display: flex;
        width: 200px;
        height: 58px;
        justify-content: center;
        align-items: center;
        color: white;
        border-radius: 3px;
        font-size: 24px;
        font-weight: 600;
        background-color: #009aff;
    }
`;
const Title = styled.div`
    width: 1239px;
    display: flex;
    font-size: 24px;
    font-weight: 800;
    color: #333333;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 80px;
`;
const Container = styled.div`
    width: 1239px;
    height: 699px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: white;
    border: 1px solid var(--light-mode-stroke, #e5e5e5);

    margin-bottom: 10px;
`;
const ContentTitle = styled.div`
    width: 235px;
    height: 699px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
        font-size: 24px;
        color: #333;
        font-weight: 600;
        padding-top: 42px;
    }
`;
const Contents = styled.div`
    width: 928px;
    display: flex;
    flex-direction: column;
    .putTitle {
        width: 928px;
        height: 59px;
        border: 1px solid var(--light-mode-stroke, #e5e5e5);
        margin-top: 20px;
        font-size: 22px;
        font-weight: 600;
    }
    .putReason {
        width: 928px;
        height: 486px;
        border: 1px solid var(--light-mode-stroke, #e5e5e5);
        margin-top: 30px;
        font-size: 20px;
        align-self: flex-start;
    }
`;
const CategoryBox = styled.div`
    display: flex;
    width: 928px;
    justify-content: space-between;
    margin-top: 22px;
    .box {
        display: flex;
        width: 200px;
        height: 58px;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 24px;
        font-weight: 600;
        background-color: #afdfff;
        border-radius: 3px;
    }
    .box:hover {
        background-color: #009aff;
    }
`;
