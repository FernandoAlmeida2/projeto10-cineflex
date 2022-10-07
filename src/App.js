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

  function addInputName(nameValue, seatId, index) {
    const newArrayName = [...arrayNameInput];
    if (index >= arrayNameInput.length) {
      newArrayName.push({ name: nameValue, id: seatId });
    } else {
      newArrayName[index].name = nameValue;
      newArrayName[index].id = seatId;
    }
    setNameInput(newArrayName);
  }

  function addInputCpf(cpfValue, seatId, index) {
    const newArrayCpf = [...arrayCpfInput];
    if (index >= arrayCpfInput.length) {
      newArrayCpf.push({ cpf: cpfValue, id: seatId });
    } else {
      newArrayCpf[index].cpf = cpfValue;
      newArrayCpf[index].id = seatId;
    }
    setCpfInput(newArrayCpf);
  }

  function selectTheSeat(seat, index) {
    if (!seatsSelected.includes(seat)) {
      setSeatOption([...seatsSelected, seat]);
    } else {
      const seatNameInput = arrayNameInput.filter((n) => n.id === seat.id);
      const seatCpfInput = arrayCpfInput.filter((c) => c.id === seat.id);
      if (seatNameInput.length === 0 && seatCpfInput.length === 0) {
        setSeatOption(seatsSelected.filter((s) => s.id !== seat.id));
      } else if (
        window.confirm(
          "Deseja realmente desmarcar o assento e apagar os dados preenchidos?"
        )
      ) {
        setSeatOption(seatsSelected.filter((s) => s.id !== seat.id));
      }
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
