import Home from "./Components/Home";
import Header from "./Components/Header";
import { useState } from "react";
import ResetStyle from "./ResetStyle";
import Schedule from "./Components/Schedule";
import Seats from "./Components/Seats";
import FinalScreen from "./Components/FinalScreen";
import { Routes, Route, useNavigate } from "react-router-dom";
import returnIcon from "./assets/img/return-icon.png";

export default function App() {
  const [seatsSelected, setSeatOption] = useState([]);
  const [arrayNameInput, setNameInput] = useState([]);
  const [arrayCpfInput, setCpfInput] = useState([]);
  const [movieSeats, setMovieSeats] = useState(null);
  const [isHome, setIsHome] = useState(true);
  const navigate = useNavigate();

  function resetStates() {
    setSeatOption([]);
    setNameInput([]);
    setCpfInput([]);
    setMovieSeats(null);
    setIsHome(true);
  }

  function addInputName(nameValue, index) {
    const newArrayName = [...arrayNameInput];
    newArrayName[index] = nameValue;
    setNameInput(newArrayName);
  }

  function addInputCpf(cpfValue, index) {
    const newArrayCpf = [...arrayCpfInput];
    newArrayCpf[index] = cpfValue;
    setCpfInput(newArrayCpf);
  }

  function selectTheSeat(seat) {
    if (!seatsSelected.includes(seat)) {
      setSeatOption([...seatsSelected, seat]);
    } else {
      setSeatOption(seatsSelected.filter((s) => s.id !== seat.id));
    }
  }

  return (
    <>
      <ResetStyle />
      {isHome ? (
        <Header />
      ) : (
        <Header>
          <img
            src={returnIcon}
            alt="Return button"
            onClick={() => navigate(-1)}
          />
          <p>Voltar</p>
        </Header>
      )}
      <Routes>
        <Route path="/" element={<Home setIsHome={setIsHome} />} />
        <Route path="/sessoes/:idFilme" element={<Schedule />} />
        <Route
          path="/assentos/:idSessao"
          element={
            <Seats
              seatsSelected={seatsSelected}
              selectTheSeat={selectTheSeat}
              addInputName={addInputName}
              addInputCpf={addInputCpf}
              movieSeats={movieSeats}
              setMovieSeats={setMovieSeats}
            />
          }
        />
        <Route
          path="/sucesso"
          element={
            <FinalScreen
              nameInputs={arrayNameInput}
              cpfInputs={arrayCpfInput}
              seatsSelected={seatsSelected}
              movieSeats={movieSeats}
              resetStates={resetStates}
            />
          }
        />
      </Routes>
    </>
  );
}
