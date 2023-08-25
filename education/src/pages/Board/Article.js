import Menu from "../../components/Menu";
import PetitionCard from "../../components/PetitonCard";
import styled from "styled-components";

import Categorybar from "../../components/Categorybar";

function Article(props) {
    return (
        <>
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
