import React, { useState } from "react";
import CartShopping from "../../Components/Cart";
import { Cart } from "../Header/styles";
import CartIcon from "../../assets/vector.svg";

import {
  Container,
  ContainerHeader,
  Valor,
  Button,
  FooterCart,
} from "./styles";

function Menu() {
  const [showCart, setShowCart] = useState(true);

  return (
    <div>
      <Cart
        src={CartIcon}
        alt="icone do carrinho de compra"
        onClick={() => setShowCart((prev) => !prev)}
      />
      {showCart && (
        <Container>
          <ContainerHeader>
            <h2>Carrinho de Compras</h2>
            <button onClick={() => setShowCart((prev) => !prev)}>X</button>
          </ContainerHeader>
          <CartShopping />
          <FooterCart>
            <Valor>
              <p>Total:</p>
              <p>R$ 800</p>
            </Valor>
            <Button>Finalizar Compra</Button>
          </FooterCart>
        </Container>
      )}
    </div>
  );
}

export default Menu;
