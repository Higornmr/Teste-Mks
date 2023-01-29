import React from "react";
import CartIcon from "../../assets/vector.svg";

import { Container, Cart, Vector, Logo } from "./styles";

function Header() {
  return (
    <Container>
      <Logo>
        <h1>Mks</h1>
        <h3>Sistemas</h3>
      </Logo>
      <Vector>
        <Cart src={CartIcon} alt="icone do carrinho de compra" />
        <p>0</p>
      </Vector>
    </Container>
  );
}

export default Header;
