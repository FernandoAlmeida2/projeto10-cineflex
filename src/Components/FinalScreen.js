import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

export default function FinalScreen({
  nameInput,
  cpfInput,
  seatsSelected,
  movieSeats,
  returnToHome,
}) {
  const [bookRequest, setRequest] = useState(null);
   useEffect(() => {
    const idsSelected = seatsSelected.map((seat) => seat.id)
    const requestData = {
        ids: [...idsSelected],
        name: nameInput,
        cpf: cpfInput,
      };
      console.log(requestData)
    axios
      .post(
        "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
        requestData
      )
      .then((res) => setRequest(res))
      .catch((err) => console.log(err.response.data));
  }, [cpfInput, nameInput,seatsSelected]);

  if (bookRequest === null) {
    return <h1>Enviando pedido...</h1>;
  }
  console.log(bookRequest);


  return (
    <FinalStyle>
      <h1>
        Pedido feito
        <br />
        com sucesso!
      </h1>
      <SectionStyle>
        <h2>Filme e sessão</h2>
        <p>{movieSeats.movie.title}</p>
        <p>
          {movieSeats.day.date} {movieSeats.name}
        </p>
      </SectionStyle>
      <SectionStyle>
        <h2>Ingressos</h2>
        {seatsSelected.map((seat) => (
          <p key={seat.id}>Assento {seat.name}</p>
        ))}
      </SectionStyle>
      <SectionStyle>
        <h2>Comprador</h2>
        <p>Nome: {nameInput}</p>
        <p>
          CPF: {cpfInput.slice(0, 3)}.{cpfInput.slice(3, 6)}.
          {cpfInput.slice(6, 9)}-{cpfInput.slice(9)}
        </p>
      </SectionStyle>
      <HomeButton>
        <button onClick={returnToHome}>Voltar pra Home</button>
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
  }
`;
