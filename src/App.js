import Home from "./Components/Home";
import Header from "./Components/Header";
import { useState } from "react";
import styled from "styled-components";
import ResetStyle from "./ResetStyle";
import TESTMOVIESESSION from "./movieTest";
import Schedule from "./Components/Schedule";
import Footer from "./Components/Footer";
import SEATS from "./movieSeatsTest";
import Seats from "./Components/Seats";

export default function App() {
  const [screenOption, setScreen] = useState("home");
  const [movieIdSelected, setMovieIdOption] = useState(null);
  const [sessionIdSelected, setIdSession] = useState(null);
  const [showtimeIdSelected, setShowtimeId] = useState(null);
  const [seatsSelected, setSeatOption] = useState([])

  function selectTheSeat(seat){
    if(!seatsSelected.includes(seat)){
      setSeatOption([...seatsSelected, seat]);
    } else{
      setSeatOption(seatsSelected.filter((s) => s !== seat ))
    }
  }

  switch (screenOption) {
    case "home":
      return (
        <>
          <ResetStyle />
          <Header />
          <Home setScreen={setScreen} setMovieIdOption={setMovieIdOption} />
        </>
      );
    case "schedule":
      if (movieIdSelected === TESTMOVIESESSION.id)
        //parte em q vai ser feita a requisição da sessão
        return (
          <>
            <ResetStyle />
            <Header />
            <Schedule
              setIdSession={setIdSession}
              days={TESTMOVIESESSION.days}
              setShowtimeId={setShowtimeId}
              setScreen={setScreen}
            />
            <Footer movieIdSelected={movieIdSelected} title={TESTMOVIESESSION.title} />
          </>
        );
    case "seats":
      if (movieIdSelected === TESTMOVIESESSION.id)
        //parte em q vai ser feita a requisição da sessão
        return (
          <>
            <ResetStyle />
            <Header />
            <Seats movieSeats={SEATS.seats} seatsSelected={seatsSelected} selectTheSeat={selectTheSeat} />
            <Footer movieIdSelected={movieIdSelected} title={TESTMOVIESESSION.title} />
          </>
        );

    default:
      return <h1>Deu merda</h1>;
  }
}
