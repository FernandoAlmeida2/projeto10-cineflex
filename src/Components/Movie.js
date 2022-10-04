import styled from "styled-components";
import Movie1 from "../assets/img/Movie1.jpg";
import Movie2 from "../assets/img/Movie2.jpeg";
import Movie3 from "../assets/img/Movie3.JPG";
import Movie4 from "../assets/img/Movie4.jpg";
import Movie5 from "../assets/img/Movie5.jpeg";
import Movie6 from "../assets/img/Movie6.png";
const MOVIES = [Movie1, Movie2, Movie3, Movie4, Movie5, Movie6];

export default function Movie({ id, setScreen, setMovieIdOption }) {

  function optionSelected(){
    setScreen("schedule");
    setMovieIdOption(1);
  }

  return (
    <MovieStyle>
      <img src={MOVIES[id]} alt={MOVIES[id]} onClick={optionSelected} />
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
