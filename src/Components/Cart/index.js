import React from "react";

import {
  Container,
  Img,
  ContainerItem,
  Name,
  Quantity,
  Price,
  CloseCart,
} from "./styles";

function CartShopping() {
  return (
    <Container>
      {/* <CloseCart>x</CloseCart> */}
      <ContainerItem>
        <Img></Img>
        <Name>
          <p>Nome do produtoproduto</p>
        </Name>
        <Quantity>
          <button className="left">-</button>
          <p>1</p>
          <button className="right">+</button>
        </Quantity>

        <div>
          <Price>
            <h2>R$ 399</h2>
          </Price>
        </div>
      </ContainerItem>
    </Container>
  );
}

export default CartShopping;
