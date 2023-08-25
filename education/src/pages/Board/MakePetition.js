import Menu from "../../components/Menu";
import PetitionCard from "../../components/PetitonCard";
import styled from "styled-components";

import Categorybar from "../../components/Categorybar";

function MakePetition() {
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
                        <input className="putTitle"></input>
                        <CategoryBox>
                            <div className="box">증원</div>
                            <div className="box">커리큘럼</div>
                            <div className="box">교수님</div>
                            <div className="box">기타</div>
                        </CategoryBox>
                        <input className="putReason"></input>
                    </Contents>
                </Container>
                <div className="box">제출하기</div>
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
