import styled from "styled-components";

import backgroundImage from "../../assets/backgroundPL.png";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 90px;
  background: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  padding:  40px;
`;


export const Container = styled.div`
  width: 100%;
  max-width: 1200px; /* Limita a largura como no seu layout */
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Separa o logo dos links */

  div {
    display: flex;
    gap: 40px; /* Espaço entre "Tabela", "Estatísticas", etc */
  }

  p {
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700; /* Negrito que você definiu */
    cursor: pointer;
    text-transform: capitalize;
  }

  img {
    height: 50px; /* Ajusta o tamanho do logo do leão */
  }
`;