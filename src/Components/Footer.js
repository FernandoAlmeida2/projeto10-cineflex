import styled from "styled-components";
import Movie1 from "../assets/img/Movie1.jpg";
import Movie2 from "../assets/img/Movie2.jpeg";
import Movie3 from "../assets/img/Movie3.JPG";
import Movie4 from "../assets/img/Movie4.jpg";
import Movie5 from "../assets/img/Movie5.jpeg";
import Movie6 from "../assets/img/Movie6.png";
const MOVIES = [Movie1, Movie2, Movie3, Movie4, Movie5, Movie6];

export default function Footer({ id, title }) {
    title = "O escafandro e a borboleta";
  return (
    <FooterStyle>
      <MovieDiv>
        <img src={Movie1} alt={MOVIES[id]}></img>
      </MovieDiv>
      <p>{title}</p>
    </FooterStyle>
  );
}

const FooterStyle = styled.div`
  width: 100vw;
  height: 13.4vh;
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #dfe6ed;
  border: 1px solid #9eadba;
  gap: 3.7vw;

  p {
    font-family: "Roboto", sans-serif;
    font-size: 26px;
    font-weight: 400;
    color: #293845;
  }
`;

const MovieDiv = styled.div`
  width: 17vw;
  height: 10.5vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2.67vw;

  img{
    width: 12.8vw;
    height: 8vh;
  }
`;
