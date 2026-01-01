import React from "react";
import { HeaderContainer, Container } from "./styles"; // Importe os dois aqui!
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <HeaderContainer>
      <Container>
        <div>
          <img src={logo} alt="Premier League Logo" />
        </div>

        <div>
          <p>Tabela</p>
          <p>estatisticas</p>
          <p>noticias</p>
          <p>clube</p>
        </div>
      </Container>
    </HeaderContainer>
  );
}

export default Header;