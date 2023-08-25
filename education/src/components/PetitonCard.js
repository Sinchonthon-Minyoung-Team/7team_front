import React from "react";
import styled from "styled-components";

import dayCircle from "./images_comp/dayCircle.png";
import DonutChart from "react-donut-chart";

// const FilledCircle = ({ leftDate }) => (
//     <div
//         style={{
//             width: `${leftDate}%`,
//             height: "100%",
//             backgroundColor: "#e5e5e5",
//             borderRadius: "inherit",
//         }}
//     />
// );

// type Idata = {
//     left: number,
//     passed: number,
// };

const PetitionCard = ({ type, agreeNum, leftDate }) => {
    const fillPercentage = (agreeNum / 30) * 100;

    return (
        <>
            <Wrapper
                style={{
                    backgroundColor:
                        type === "progress"
                            ? "white"
                            : type === "done"
                            ? "rgba(0,0,0,0.4)"
                            : null,
                }}
            >
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
                    {type === "progress" && (
                        <DayCircle>
                            <img src={dayCircle} />
                        </DayCircle>
                    )}
                </UnderBar>
            </Wrapper>
        </>
    );
};
export default PetitionCard;

const Wrapper = styled.div`
    width: 566px;
    height: 192px;
    border: 1px solid var(--light-mode-stroke, #e5e5e5);
    display: flex;
    flex-direction: column;
    margin: 10px;
    z-index: 10;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: black;
    height: 100px;
    margin: 20px 0 0 20px;
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
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-left: 5px;
    .info {
        color: #4d00b4;
        font-size: 16px;
        font-weight: 600;
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
// const DayCircle = styled.div`
//     width: 58px;
//     height: 58px;
//     border-radius: 100%;
//     stroke-width: 6px;
//     stroke: var(--light-mode-stroke, #e5e5e5);
// `;
// const FilledCircle = styled.div`
// width: 58px;
// height: 58px;

// `;
const DayCircle = styled.div``;
