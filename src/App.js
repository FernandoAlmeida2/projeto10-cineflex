import Home from "./Components/Home";
import Header from "./Components/Header";
import { useState } from "react";
import ResetStyle from "./ResetStyle";
import Schedule from "./Components/Schedule";
import Footer from "./Components/Footer";
import Seats from "./Components/Seats";
import FinalScreen from "./Components/FinalScreen";

export default function App() {
  const [screenOption, setScreen] = useState("home");
  const [movieSelected, setMovieOption] = useState(null);
  const [showtimeIdSelected, setShowtimeId] = useState(null);
  const [seatsSelected, setSeatOption] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [cpfInput, setCpfInput] = useState("");
  const [movieSeats, setMovieSeats] = useState(null);

  function returnToHome(){
    setMovieOption(null);
    setShowtimeId(null);
    setSeatOption([]);
    setNameInput("");
    setCpfInput("");
    setMovieSeats(null)
    setScreen("home")
  }

  function selectTheSeat(seat) {
    if (!seatsSelected.includes(seat)) {
      setSeatOption([...seatsSelected, seat]);
    } else {
      setSeatOption(seatsSelected.filter((s) => s.id !== seat.id));
    }
  }

  switch (screenOption) {
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
  }
}
