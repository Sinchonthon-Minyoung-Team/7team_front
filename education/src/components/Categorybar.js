import React from "react";
import styled from "styled-components";

const Categorybar = () => {
    return (
        <>
            <Wrapper>
                <div className="category">증원</div>
                <div className="category">커리큘럼</div>
                <div className="category">교수</div>
                <div className="category">기타</div>
            </Wrapper>
        </>
    );
};
export default Categorybar;

const Wrapper = styled.div`
    background-color: white;
    width: 223px;
    height: 892px;
    border-radius: 3px;
    border: 1px solid var(--light-mode-stroke, #e5e5e5);

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-right: 40px;
    .category {
        font-size: 24px;
        color: black;
        font-weight: 600;
        padding-top: 50px;
    }
`;
