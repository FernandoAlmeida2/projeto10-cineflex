import styled from "styled-components";
import Movie from "./Movie";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home({ setScreen, setMovieOption }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err.response.data));
  }, []);

  if(movies.length === 0){
    return(
      <h1>Carregando...</h1>
    )
  }

  return (
    <HomeStyle>
      <HomeTitle>
        <p>Selecione o filme</p>
      </HomeTitle>
      <MoviesStyle>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            setScreen={setScreen}
            setMovieOption={setMovieOption}
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
