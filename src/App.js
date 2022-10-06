import Home from "./Components/Home";
import Header from "./Components/Header";
import { useState } from "react";
import ResetStyle from "./ResetStyle";
import Schedule from "./Components/Schedule";
import Footer from "./Components/Footer";
import Seats from "./Components/Seats";
import FinalScreen from "./Components/FinalScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [movieSelected, setMovieOption] = useState("");
  const [seatsSelected, setSeatOption] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [cpfInput, setCpfInput] = useState("");
  const [movieSeats, setMovieSeats] = useState(null);

  function returnToHome() {
    setMovieOption("");
    setSeatOption([]);
    setNameInput("");
    setCpfInput("");
    setMovieSeats(null);
  }

  function selectTheSeat(seat) {
    if (!seatsSelected.includes(seat)) {
      setSeatOption([...seatsSelected, seat]);
    } else {
      setSeatOption(seatsSelected.filter((s) => s.id !== seat.id));
    }
  }

  return (
    <BrowserRouter>
      <ResetStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home setMovieOption={setMovieOption} />} />
        <Route
          path="/sessoes/:idFilme"
          element={
            <>
              <Schedule />
              <Footer
                imageSrc={movieSelected.posterURL}
                title={movieSelected.title}
              />
            </>
          }
        />
        <Route
          path="/assentos/:idSessao"
          element={
            <>
              <Seats
                seatsSelected={seatsSelected}
                selectTheSeat={selectTheSeat}
                nameInput={nameInput}
                setNameInput={setNameInput}
                cpfInput={cpfInput}
                setCpfInput={setCpfInput}
                movieSeats={movieSeats}
                setMovieSeats={setMovieSeats}
              />
              <Footer
                imageSrc={movieSelected.posterURL}
                title={movieSelected.title}
              />
            </>
          }
        />
        <Route
          path="/sucesso"
          element={
            <FinalScreen
              nameInput={nameInput}
              cpfInput={cpfInput}
              seatsSelected={seatsSelected}
              movieSeats={movieSeats}
              returnToHome={returnToHome}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );

  /* switch (screenOption) {
    case "home":
      return (
        <>
          <ResetStyle />
          <Header />
          <Home setScreen={setScreen} setMovieOption={setMovieOption} />
        </>
      );
    case "schedule":
      return (
        <>
          <ResetStyle />
          <Header />
          <Schedule
            movieIdSelected={movieSelected.id}
            setShowtimeId={setShowtimeId}
            setScreen={setScreen}
          />
          <Footer
            imageSrc={movieSelected.posterURL}
            title={movieSelected.title}
          />
        </>
      );
    case "seats":
      return (
        <>
          <ResetStyle />
          <Header />
          <Seats
            showtimeId={showtimeIdSelected}
            seatsSelected={seatsSelected}
            selectTheSeat={selectTheSeat}
            nameInput={nameInput}
            setNameInput={setNameInput}
            cpfInput={cpfInput}
            setCpfInput={setCpfInput}
            setScreen={setScreen}
            movieSeats={movieSeats}
            setMovieSeats={setMovieSeats}
          />
          <Footer
            imageSrc={movieSelected.posterURL}
            title={movieSelected.title}
          />
        </>
      );
    case "final":
      return (
        <>
          <ResetStyle />
          <Header />
          <FinalScreen
            nameInput={nameInput}
            cpfInput={cpfInput}
            seatsSelected={seatsSelected}
            movieSeats={movieSeats}
            setScreen={setScreen}
            returnToHome={returnToHome}
          />
        </>
      );

    default:
      return <h1>Deu merda</h1>;
  } */
}
