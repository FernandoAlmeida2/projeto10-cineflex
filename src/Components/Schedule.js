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
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;

  div {
    margin-left: 2vw;
  }
`;

const ScheduleTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13vh;

  p {
    font-weight: 400;
    font-size: 24px;
    color: #293845;
  }
`;
