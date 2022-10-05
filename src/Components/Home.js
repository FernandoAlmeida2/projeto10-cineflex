import styled from "styled-components";
import Movie from "./Movie";

const MOVIES = [1, 2, 3, 4, 5, 6];

export default function Home({ setScreen, setMovieIdOption }) {
  return (
    <HomeStyle>
      <HomeTitle>
        <p>Selecione o filme</p>
      </HomeTitle>
      <MoviesStyle>
        {MOVIES.map((i) => (
          <Movie
            key={i}
            id={i}
            setScreen={setScreen}
            setMovieIdOption={setMovieIdOption}
          />
        ))}
      </MoviesStyle>
    </HomeStyle>
  );
}

const HomeStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
  overflow-y: auto;
  margin-top: 8vh;
`;

const HomeTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13vh;

  p {
    font-weight: 400;
    font-size: 24px;
    color: #293845;
  }
`;

const MoviesStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8vw;
  margin-left: 6.8vw;
`;
