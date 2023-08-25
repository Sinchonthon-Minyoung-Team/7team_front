import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [keyword, setKeyword] = useState();
  const navigate = useNavigate();

  const onChange = (e) => {
    setKeyword(e.target.value.toLowerCase());
  };
  const onSubmit = () => {
    navigate(`/search?keyword=${encodeURIComponent(keyword)}`);
    console.log(keyword);
  };
  return (
    <Container>
      <Search
        type="text"
        value={keyword}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <SearchBtn onClick={onSubmit}>검색</SearchBtn>
    </Container>
  );
}

export default SearchBar;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 50px auto;
`;

const Search = styled.input`
  width: 411px;
  height: 58px;

  border-radius: 3px;
  border: 1px solid var(--light-mode-primary-blue, #009aff);
  background: var(--light-mode-white-background, #fff);

  margin-right: 30px;
`;

const SearchBtn = styled.div`
  display: flex;
  width: 86px;
  height: 58px;
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
`;
