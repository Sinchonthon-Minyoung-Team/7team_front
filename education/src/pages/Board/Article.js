import Menu from "../../components/Menu";

function Article(props) {
  return (
    <>
      <Menu />
      {props.type}
    </>
  );
}

export default Article;
