import React from "react";
import Menu from "../Menu";

import { Container, Cart, Vector, Logo } from "./styles";

function Header() {
  return (
    <Container>
      <Logo>
        <h1>Mks</h1>
        <h3>Sistemas</h3>
      </Logo>
      <Vector>
        <Menu />

        <p>0</p>
      </Vector>
    </Container>
  );
}

export default Header;
