import Home from "./Components/Home";
import Header from "./Components/Header";
import { useState} from "react";
import ResetStyle from "./ResetStyle";
import Schedule from "./Components/Schedule";
import Footer from "./Components/Footer";
import Seats from "./Components/Seats";


export default function App() {
  const [screenOption, setScreen] = useState("home");
  const [movieSelected, setMovieOption] = useState(null);
  const [showtimeIdSelected, setShowtimeId] = useState(null);
  const [seatsSelected, setSeatOption] = useState([]);

  function selectTheSeat(seat) {
    if (!seatsSelected.includes(seat)) {
      setSeatOption([...seatsSelected, seat]);
    } else {
      setSeatOption(seatsSelected.filter((s) => s !== seat));
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
            />
            <Footer
              imageSrc={movieSelected.posterURL}
              title={movieSelected.title}
            />
          </>
        );

    default:
      return <h1>Deu merda</h1>;
  }
}
