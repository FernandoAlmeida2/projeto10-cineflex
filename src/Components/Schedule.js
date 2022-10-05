import styled from "styled-components";
import DayOptions from "./DayOptions";

export default function Schedule({
  setIdSession,
  days,
  setShowtimeId,
  setScreen,
}) {
  return (
    <ScheduleStyle>
      <ScheduleTitle>
        <p>Selecione o horário</p>
      </ScheduleTitle>
      <div>
        {days.map((day, i) => (
          <DayOptions
            day={day}
            setIdSession={setIdSession}
            setShowtimeId={setShowtimeId}
            setScreen={setScreen}
          />
        ))}
      </div>
    </ScheduleStyle>
  );
}

const ScheduleStyle = styled.main`
  height: 78vh;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  margin: 8vh 0 13.4vh 0;
  overflow-y: auto;

  div {
    margin-left: 2vw;
  }
`;

const ScheduleTitle = styled.div`
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
