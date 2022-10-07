import styled from "styled-components";

export default function Footer({ imageSrc, title, children }) {
  return (
    <FooterStyle>
      <MovieDiv>
        <img src={imageSrc} alt={"Não foi possível carregar a imagem"}></img>
      </MovieDiv>
      <div>
        <p>{title}</p>
        <p>{children}</p>
      </div>
    </FooterStyle>
  );
}

const FooterStyle = styled.div`
  width: 100vw;
  height: 13.4vh;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #dfe6ed;
  border: 1px solid #9eadba;
  gap: 3.7vw;

  p {
    font-family: "Roboto", sans-serif;
    font-size: 26px;
    font-weight: 400;
    color: #293845;
    line-height: 30px;
  }
`;

const MovieDiv = styled.div`
  width: 17vw;
  height: 10.5vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2.67vw;

  img {
    width: 12.8vw;
    height: 8vh;
  }
`;
