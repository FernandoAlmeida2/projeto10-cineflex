import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Movie({ movie, setIsHome }) {
  return (
    <MovieStyle>
      <Link to={`/sessoes/${movie.id}`} onClick={() => setIsHome(false)} >
        <img src={movie.posterURL} alt="Não foi possível carregar a imagem" />
      </Link>
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
    cursor: pointer;
    width: 34vw;
    height: 24vh;
  }
`;
