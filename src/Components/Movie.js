import styled from "styled-components";

export default function Movie({ movie, setScreen, setMovieOption }) {

  function optionSelected(){
    setScreen("schedule");
    setMovieOption(movie);
  }

  return (
    <MovieStyle>
      <img src={movie.posterURL} alt="Não foi possível carregar a imagem" onClick={optionSelected} />
    </MovieStyle>
  );
}

const MovieStyle = styled.div`
  width: 39vw;
  height: 26vh;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 34vw;
    height: 24vh;
  }
`;
