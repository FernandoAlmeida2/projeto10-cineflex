import styled from "styled-components";

export default function Header({children}) {
  return (
    <HeaderStyle>
      <ReturnStyle>
        {children}
      </ReturnStyle>
      
      <h1>CINEFLEX</h1>   
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: #c3cfd9; 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 8vh;
  position: absolute;
  color: #e8833a;
  top: 0;

  h1{
    font-weight: 400;
    font-size: 34px;
  }
`;

const ReturnStyle = styled.div`
  position: absolute;
  left: 1vw;
  top: 1.2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vh;
  font-size: 12px;
  font-weight: 700;

  img{
    height: 2.5vh;
  }
`
