import styled from "styled-components";

export default function DayOptions({ day, setIdSession, setShowtimeId, setScreen }) {
  
  function showtimeSelected(showtimeId){
    setIdSession(day.showtimes.id);
    setShowtimeId(showtimeId);
    setScreen("seats");
  }
  return (
    <DayStyle>
      <h1>
        {day.weekday} - {day.date}
      </h1>
      <div>
        {day.showtimes.map((showtime, i) => (
          <ShowtimeButton key={i} onClick={() => showtimeSelected(showtime.id)} >{showtime.name}</ShowtimeButton>
        ))}
      </div>
    </DayStyle>
  );
}

const DayStyle = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  margin-bottom: 4vh;

  h1 {
    margin-left: 2.5vw;
    color: #293845;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 4vh;
  }

  div {
    display: flex;
    gap: 2vw;
  }
`;

const ShowtimeButton = styled.button`
  width: 22vw;
  height: 5vh;
  background-color: #e8833a;
  border: none;
  color: #ffffff;
  border-radius: 3px;
  font-size: 18px;
`;
