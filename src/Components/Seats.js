import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Footer from "./Footer";

export default function Seats({
  seatsSelected,
  selectTheSeat,
  addInputName,
  addInputCpf,
  movieSeats,
  setMovieSeats,
}) {
  const { idSessao: showtimeId } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${showtimeId}/seats`
      )
      .then((res) => setMovieSeats(res.data))
      .catch((err) => console.log(err.response.data));
  }, [showtimeId, setMovieSeats]);

  if (movieSeats === null) {
    return <h1>Carregando...</h1>;
  }

  function seatClicked(seat, index) {
    if (seat.isAvailable) {
      selectTheSeat(seat, index);
    } else {
      alert("Esse assento não está disponível");
    }
  }

  return (
    <>
      <SeatStyle>
        <SeatsTitle>
          <p>Selecione o(s) assento(s)</p>
        </SeatsTitle>
        <SeatsListStyle>
          {movieSeats.seats.map((seat, i) => (
            <SeatButton
              data-identifier="seat"
              key={seat.id}
              onClick={() => seatClicked(seat, i)}
              isAvailable={String(seat.isAvailable)}
              isSelected={String(
                seatsSelected.filter((s) => s.id === seat.id).length !== 0
              )}
            >
              {i < 9 && 0}
              {i + 1}
            </SeatButton>
          ))}
        </SeatsListStyle>
        <LegendStyle>
          <div>
            <SeatButton
              data-identifier="seat-selected-subtitle"
              isAvailable="true"
              isSelected="true"
            ></SeatButton>
            <p>Selecionado</p>
          </div>
          <div>
            <SeatButton
              data-identifier="seat-available-subtitle"
              isAvailable="true"
              isSelected="false"
            ></SeatButton>
            <p>Disponível</p>
          </div>
          <div>
            <SeatButton
              data-identifier="seat-unavailable-subtitle"
              isAvailable="false"
              isSelected="false"
            ></SeatButton>
            <p>Indisponível</p>
          </div>
        </LegendStyle>
        {seatsSelected.map((seat, index) => {
          return (
            <div key={seat.id}>
              <InputStyle>
                <p>Nome do comprador (assento {seat.name}):</p>
                <input
                  data-identifier="buyer-name-input"
                  placeholder="Digite seu nome..."
                  onChange={(e) => addInputName(e.target.value, seat.id, index)}
                ></input>
              </InputStyle>
              <InputStyle>
                <p>CPF do comprador (assento {seat.name}):</p>
                <input
                  data-identifier="buyer-cpf-input"
                  placeholder="Digite seu CPF  ..."
                  onChange={(e) => addInputCpf(e.target.value, seat.id, index)}
                ></input>
              </InputStyle>
            </div>
          );
        })}
        <Link to="/sucesso">
          <BookButton data-identifier="reservation-btn">
            Reservar assento{seatsSelected.length > 1 && "s"}
          </BookButton>
        </Link>
      </SeatStyle>
      <Footer
        imageSrc={movieSeats.movie.posterURL}
        title={movieSeats.movie.title}
      >
        {movieSeats.day.weekday} - {movieSeats.name}
      </Footer>
    </>
  );
}

function returnSeatColor(seatIsAvailable, seatIsSelected) {
  if (seatIsAvailable === "true" && seatIsSelected === "true") {
    return "#1AAE9E";
  }
  if (seatIsAvailable === "true" && seatIsSelected === "false") {
    return "#C3CFD9";
  }
  return "#FBE192";
}

function returnBorderColor(seatIsAvailable, seatIsSelected) {
  if (seatIsAvailable === "true" && seatIsSelected === "true") {
    return "1px solid #0E7D71";
  }
  if (seatIsAvailable === "true" && seatIsSelected === "false") {
    return "1px solid #7B8B99";
  }
  return "1px solid #F7C52B";
}

const SeatStyle = styled.div`
  max-height: 78.6vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
  margin: 8vh 0 13.4vh 0;
  overflow: auto;
  font-weight: 400;
`;

const SeatsTitle = styled.div`
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

const SeatsListStyle = styled.div`
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  margin-left: 2vw;
  gap: 2vw;
`;

const SeatButton = styled.button`
  font-size: 11px;
  width: 7vw;
  height: 7vw;
  background-color: ${(props) =>
    returnSeatColor(props.isAvailable, props.isSelected)};
  border: ${(props) => returnBorderColor(props.isAvailable, props.isSelected)};
  border-radius: 4vw;
  margin-bottom: 2vw;
  cursor: pointer;
`;

const LegendStyle = styled.div`
  display: flex;
  margin: 2vh 0 4.5vh 0;
  justify-content: center;

  div {
    width: 24vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    font-size: 13px;
    color: #4e5a65;
  }
`;

const InputStyle = styled.div`
  margin-top: 1vh;
  color: #293845;
  font-size: 18px;
  line-height: 25px;
  input {
    width: 84vw;
    height: 13.6vw;
    border: 1px solid #d4d4d4;
    border-radius: 3px;
    padding-left: 3vw;
    box-sizing: border-box;

    ::placeholder {
      font-family: "Roboto", sans-serif;
      font-style: italic;
      font-size: 18px;
      color: #afafaf;
      opacity: 1;
    }
  }
`;

const BookButton = styled.button`
  width: 60vw;
  height: 5vh;
  background-color: #e8833a;
  border: none;
  color: #ffffff;
  border-radius: 3px;
  font-size: 18px;
  margin: 7vh 0 3.5vh 0;
  min-height: 5vh;
  cursor: pointer;
`;
