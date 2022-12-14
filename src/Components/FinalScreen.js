import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function FinalScreen({
  nameInputs,
  cpfInputs,
  seatsSelected,
  movieSeats,
  resetStates,
}) {
  const [bookRequest, setRequest] = useState(null);
  useEffect(() => {
    const clientsList = [];
    const idsSelected = seatsSelected.map((seat) => seat.id);
    for (let i = 0; i < seatsSelected.length; i++) {
      clientsList.push({
        compradores: [
          {
            idAssento: nameInputs[i].id,
            nome: nameInputs[i].name,
            cpf: cpfInputs[i].cpf,
          },
        ],
      });
    }
    axios
      .post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {
        ids: idsSelected,
        ...clientsList,
      })
      .then((res) => setRequest(res))
      .catch((err) => console.log(err.response.data));
  }, [cpfInputs, nameInputs, seatsSelected]);

  if (bookRequest === null) {
    return <h1>Enviando pedido...</h1>;
  }
  return (
    <FinalStyle>
      <h1>
        Pedido feito
        <br />
        com sucesso!
      </h1>
      <SectionStyle>
        <h2>Filme e sessão</h2>
        <p data-identifier="movie-session-infos-reserve-finished">
          {movieSeats.movie.title}
          <br />
          {movieSeats.day.date} {movieSeats.name}
        </p>
      </SectionStyle>
      <SectionStyle>
        <h2>Ingressos</h2>
        {seatsSelected.map((seat) => (
          <p key={seat.id} data-identifier="seat-infos-reserve-finished">
            Assento {seat.name}
          </p>
        ))}
      </SectionStyle>

      {nameInputs.map((n, i) => (
        <SectionStyle key={seatsSelected[i].id}>
          <h2>Comprador {i + 1}</h2>
          <p data-identifier="buyer-infos-reserve-finished">
            Nome: {n.name}
            <br />
            CPF: {cpfInputs[i].cpf.slice(0, 3)}.{cpfInputs[i].cpf.slice(3, 6)}.
            {cpfInputs[i].cpf.slice(6, 9)}-{cpfInputs[i].cpf.slice(9)}
          </p>
        </SectionStyle>
      ))}

      <HomeButton>
        <Link to="/" onClick={resetStates}>
          <button data-identifier="back-to-home-btn">Voltar pra Home</button>
        </Link>
      </HomeButton>
    </FinalStyle>
  );
}

const FinalStyle = styled.div`
  font-family: "Roboto", sans-serif;
  margin: 10vh 0;
  overflow-y: auto;
  h1 {
    font-size: 24px;
    font-weight: 700;
    color: #247a6b;
    text-align: center;
  }
`;

const SectionStyle = styled.div`
  margin: 12vw 0 12vw 6vw;
  color: #293845;
  h2 {
    font-size: 24px;
    font-weight: 700;
    color: #293845;
    margin-bottom: 2vw;
  }

  p {
    font-size: 22px;
    line-height: 26px;
  }
`;
const HomeButton = styled.div`
  display: flex;
  justify-content: center;
  button {
    width: 60vw;
    height: 5vh;
    background-color: #e8833a;
    border: none;
    color: #ffffff;
    border-radius: 3px;
    font-size: 18px;
    margin-top: 7vh;
    min-height: 5vh;
    cursor: pointer;
  }
`;
