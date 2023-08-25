import React from "react";
import styled from "styled-components";

const PetitionCard = () => {
    const Progress = ({ agreeNum }) => {
        const fillPercentage = agreeNum / 30;
    };
    return (
        <>
            <Wrapper>
                <Container>
                    <div className="title">제목</div>
                    <div className="content">청원 내용</div>
                </Container>
                <UnderBar>
                    <div className="info">
                        학과 학번 <br /> Jan 09, 2020 05:00
                    </div>
                    <LevelBar>
                        <FilledBar fillPercentage={fillPercentage} />
                    </LevelBar>
                    <DayCircle>
                        <FilledCircle />
                    </DayCircle>
                </UnderBar>
            </Wrapper>
        </>
    );
};
export default PetitionCard;

const Wrapper = styled.div`
    width: 566px;
    height: 192px;
    background-color: white;
    border: 1px solid var(--light-mode-stroke, #e5e5e5);
    display: flex;
    flex-direction: column;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: black;
    height: 100px;
    margin: 10px 0 0 10px;
    .title {
        font-size: 24px;
        font-weight: 600;
    }
    .content {
        font-size: 20px;
        font-weight: 400;
    }
`;
const UnderBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-left: 10px;
    .info {
        color: #4d00b4;
        font-size: 16px;
    }
`;
const LevelBar = styled.div`
    width: 252px;
    height: 8px;
    display: flex;
    background-color: #e5e5e5;
    border-radius: 4px;
`;
const FilledBar = styled.div`
    display: flex;
    height: 100%;
    border-radius: 4px;
    background-color: #00c42b;
    width: ${(props) => props.fillPercentage}%;
`;
const DayCircle = styled.div`
    width: 58px;
    height: 58px;
    border-radius: 100%;
    stroke-width: 6px;
    stroke: var(--light-mode-stroke, #e5e5e5);
`;
const FilledCircle = styled.div``;
