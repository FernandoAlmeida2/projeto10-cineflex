import styled from "styled-components";

export default function Header() {
  return (
    <HeaderStyle>
      <h1>CINEFLEX</h1>   
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  background-color: #c3cfd9; 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 8vh;
  position: absolute;
  top: 0;

  h1{
    font-weight: 400;
    font-size: 34px;
    color: #e8833a;
    font-family: 'Roboto', sans-serif;
  }
`;
