import styled from "styled-components";
import DayOptions from "./DayOptions";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Schedule() {
  const {idFilme: movieIdSelected} = useParams(); 
  const [chosenMovie, setChosenMovie] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieIdSelected}/showtimes`
      )
      .then((res) => setChosenMovie(res.data))
      .catch((err) => console.log(err.response.data));
  }, [movieIdSelected]);

  if (chosenMovie === null) {
    return <h1>Carregando...</h1>;
  }
  return (
    <ScheduleStyle>
      <ScheduleTitle>
        <p>Selecione o horário</p>
      </ScheduleTitle>
      <div>
        {chosenMovie.days.map((day, i) => (
          <DayOptions
            key={day.id}
            day={day}
          />
        ))}
      </div>
    </ScheduleStyle>
  );
}

const ScheduleStyle = styled.main`
  height: 78vh;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  margin: 8vh 0 13.4vh 0;
  overflow-y: auto;

  div {
    margin-left: 2vw;
  }
`;

const ScheduleTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5vh 0;

  p {
    font-weight: 400;
    font-size: 24px;
    color: #293845;
  }
`;
